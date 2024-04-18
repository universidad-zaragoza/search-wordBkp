/************************************************************************************************************
 *                                                                                                          *
 * File: useDialogController.tsx                                                                            *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Custom hook used for managing Dialog view                                                   *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  VoiceRootState,
  resetUserSpeechData,
} from "../../shared/redux/slices/voiceSlice";
import { AlexaContext } from "../../App";
import { VoiceAPIStatus } from "../../shared/enums/VoiceAPIStatus";
import { VoiceMsgStatus } from "../../shared/enums/VoiceMsgStatus";
import useSpeechResponse from "./hooks/useSpeechResponse";
import { spanish_words } from "@arvidbt/spanish-words";
import { WordLib } from "@arvidbt/wordlib";
import { levenshteinDistance } from "../../shared/utils/useLevenshteinDistance";
import { spanish_proverbs } from "../../shared/constants/proverbs";
import { MenuRootState } from "../../shared/redux/slices/menuSlice";
import { normalizeString } from "../../shared/utils/useNormalizeString";
import { spanish_phrases } from "../../shared/constants/phrases";

const useDialogController = () => {
  // CONSTANS
  const START_SPEECH_WORDS = `<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                          ¡Hola! Mi nombre es Alexa. Díme una palabra </amazon:emotion><break strength='strong'/></voice>`;
  const START_SPEECH_PROVERBS = `<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                                ¡Hola! Mi nombre es Alexa. Díme un refrán </amazon:emotion><break strength='strong'/></voice>`;
  const START_SPEECH_PHRASES = `<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                              ¡Hola! Mi nombre es Alexa. Díme una frase </amazon:emotion><break strength='strong'/></voice>`;

  // Local variables
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSpeechOn, setIsSpeechOn] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(true);
  const [esState, setEsState] = useState<WordLib>();
  const [searchingText, setSearchingText] = useState<string>(
    "Esperando consulta..."
  );

  // Global variables
  const voiceAPIStatus = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceAPIStatus
  );
  const voiceMsgProps = useSelector(
    (state: VoiceRootState) => state.voiceState?.voiceMsgProps
  );
  const processingUserRequest = useSelector(
    (state: VoiceRootState) => state.voiceState?.processingUserRequest
  );
  const intentType = useSelector(
    (state: VoiceRootState) => state.voiceState?.data?.intentType
  );
  const userRequest = useSelector(
    (state: VoiceRootState) => state.voiceState?.data?.userRequest
  );
  const menuOption = useSelector(
    (state: MenuRootState) => state.menuState.menuOption
  );

  // Custom and React Hooks
  const dispatch = useDispatch();
  const { speechResponseToUserRequest } = useSpeechResponse();

  // App Context Data
  const { printDebug } = useContext(AlexaContext);

  // Interfaces
  interface QueryLvn {
    result: string;
    lvn: number;
  }

  const initialization = useCallback(() => {
    switch (menuOption) {
      case "words":
        setEsState(new WordLib(spanish_words));
        speechResponseToUserRequest(START_SPEECH_WORDS);
        break;

      case "proverbs":
        setEsState(new WordLib(spanish_proverbs));
        speechResponseToUserRequest(START_SPEECH_PROVERBS);
        break;

      case "phrases":
        setEsState(new WordLib(spanish_phrases));
        speechResponseToUserRequest(START_SPEECH_PHRASES);
        break;
    }
  }, [voiceAPIStatus]);

  /**
   * Shows the loading icon at app first start or every time the user sends a request
   */
  const showLoadingIcon = useCallback(() => {
    printDebug(`+++ INSIDE loading() - voiceAPIStatus => ${voiceAPIStatus}`);
    printDebug(
      `+++ INSIDE loading() - voiceMsgStatus => ${voiceMsgProps.status}`
    );

    if (voiceAPIStatus === VoiceAPIStatus.LOADING || processingUserRequest) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [voiceAPIStatus, voiceMsgProps]);

  const setIsSpeaking = useCallback(() => {
    if (voiceMsgProps.status === VoiceMsgStatus.START_SPEECH) {
      setIsSpeechOn(true);
    } else {
      setIsSpeechOn(false);
    }
  }, [voiceMsgProps]);

  /**
   * Manages the intents received from the Voice API
   */
  const handleVoiceAPIIntents = useCallback(async () => {
    printDebug(`+++ INSIDE handleVoiceAPIIntents() +++ `);
    printDebug(`+++ VOICE API STATUS => ${voiceAPIStatus} `);
    printDebug(`+++ INTENT TYPE => ${intentType} `);

    if (intentType === "word-intent") {
      await handleNewQuery(userRequest);
    }

    dispatch(resetUserSpeechData());
  }, [intentType, voiceAPIStatus]);

  const handleNewQuery = async (_word: string) => {
    let resultFound: string = "";

    setIsSearching(true);
    setSearchingText("Consulta recibida. Buscando...");

    setTimeout(async () => {
      resultFound = await searchUserQuery(userRequest);
      printDebug(`Inside handleNewWord - wordFound 1 => ${resultFound}`);

      if (resultFound) {
        setSearchingText(`Recibida: ${_word} - Encontrada: ${resultFound}`);
        speechResponseToUserRequest(
          `La consulta que he entendido es ${_word}, y el resultado que he encontrado en el diccionario es ${resultFound}
        <break strength='strong'/> Díme otra consulta.`
        );
      } else {
        setSearchingText(`Recibida: ${_word} - Encontrada: sin resultados`);
        speechResponseToUserRequest(
          `Lo siento, la consulta que me has dicho no existe. Por favor, vuelva a repetirla o utilice una distinta.`
        );
      }
      setIsSearching(false);
    }, 2000);
  };

  const searchUserQuery = async (_userWord: string): Promise<string> => {
    let resultWithMaxLVN: string = "";

    if (esState) {
      let potentialResults: QueryLvn[] = [];

      const spanishDictionary = esState.getDictionaryWords();

      spanishDictionary.map((result) => {
        const lvn = levenshteinDistance(
          normalizeString(result),
          normalizeString(_userWord)
        );

        if (lvn >= 0.8) {
          potentialResults.push({ result, lvn });
          console.log(
            `LVN DISTANCE between ${result} and ${_userWord} is ${lvn}`
          );
          printDebug(
            `LVN DISTANCE between ${result} and ${_userWord} is ${lvn}`
          );
        }
      });

      resultWithMaxLVN = getResultWithMaxLvn(potentialResults);
    }

    return resultWithMaxLVN;
  };

  const getResultWithMaxLvn = (_resultsLvn: QueryLvn[]) => {
    if (_resultsLvn.length > 0) {
      const resultsOrdered = _resultsLvn.slice().sort((a, b) => b.lvn - a.lvn);

      console.log(
        "+++ Inside getWordWithMaxLvn - listNoOrdered  => " +
          JSON.stringify(_resultsLvn)
      );
      console.log(
        "+++ Inside getWordWithMaxLvn - listOrdered => " +
          JSON.stringify(resultsOrdered)
      );

      return resultsOrdered[0].result;
    }

    return "";
  };

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    initialization();
  }, [initialization]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the showLoadingIcon function are modified
   */
  useEffect(() => {
    showLoadingIcon();
  }, [showLoadingIcon]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the sayStartSpeech function are modified
   */
  useEffect(() => {
    setIsSpeaking();
  }, [setIsSpeaking]);

  /**
   * Execution of the method on the first rendering and when dependencies upon the handleVoiceAPIRequests function are modified
   */
  useEffect(() => {
    handleVoiceAPIIntents();
  }, [handleVoiceAPIIntents]);

  return { searchingText, isLoading, isSpeechOn, isSearching };
};

export default useDialogController;
