import{j as e,r as c,R as F}from"./react-ePaza90U.js";import{c as V}from"./react-dom-ClCCcWrb.js";import{B as G}from"./react-router-dom-DLKOTzUC.js";import{F as B,f as K,a as $,b as J}from"./@fortawesome-BDF4bdm0.js";import{u as Q,a as W,b as R}from"./react-router-DHtK1h3G.js";import{p as Y}from"./dompurify-BuFh49mM.js";import{I as X,F as Z}from"./react-bootstrap-BbG3D7e1.js";import{u as S,a as T,P as ee}from"./react-redux-Cys67l4T.js";import{c as ae,a as se}from"./@reduxjs-CJetLCaM.js";import{S as te}from"./react-singleton-hook-C2tOxsmn.js";import"./classnames-C9FZUsQl.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Dql683DL.js";import"./prop-types-ZMHxiqrO.js";import"./use-sync-external-store-R5Bn9tbY.js";import"./redux-DITMfSWq.js";import"./immer-D6jAg06p.js";import"./reselect-DJRGOWkq.js";import"./redux-thunk-ClJT1hhx.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(n){if(n.ep)return;n.ep=!0;const t=s(n);fetch(n.href,t)}})();const ie="/",ne="/search-word",re="/dialog",oe="/debug",O={START_APP_ROUTE:ie,BASE_ROUTE:ne,DIALOG_ROUTE:re,DEBUG_ROUTE:oe},ce=()=>{const a=Q();return{onClickNavigateToPath:s=>{a(s)}}},q=({id:a,classStyle:s,children:r,path:n,type:t,onClick:d})=>{const{onClickNavigateToPath:u}=ce();return e.jsx(e.Fragment,{children:t==="button"&&d?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+s,onTouchEnd:d,children:r}):t==="button"&&!d?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+s,onTouchEnd:()=>u(n),children:r}):e.jsx("button",{id:a,type:t,className:"btn btn-active-color "+s,children:r})})},_=({navBrand:a,navBtns:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"navbar-wrapper",children:e.jsx("nav",{className:"navbar navbar-custom navbar-expand-sm",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"navbar-brand",children:e.jsx("div",{className:"navbar-brand-grid-container",children:a.name?e.jsx(e.Fragment,{children:e.jsx("div",{className:"nameGrid align-items-center",children:e.jsx("div",{className:"name",children:a.name})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"onlyIconGrid",children:e.jsx("div",{className:"icon",children:a.icon})})})})}),e.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:e.jsx("div",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:s.map((r,n)=>e.jsx("div",{className:"nav-btn-item",children:e.jsx(q,{id:r.name,path:r.path,type:"button",children:e.jsx(B,{className:"nav-btn-icon",icon:r.icon})})},n))})})]})})})}),le=a=>({__html:Y.sanitize(a)}),de=({msg:a,icon:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"footer-wrapper",children:e.jsx("div",{className:"footer-custom",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-1 icon",children:e.jsx("div",{children:s})}),e.jsx("div",{className:"col-11 text",children:e.jsx("div",{dangerouslySetInnerHTML:le(a)})})]})})})})}),ue="/search-word/assets/avatar-not-speaking-BwFjj1a-.gif",me="/search-word/assets/avatar-speaking-DQHi02TP.gif",ge="/search-word/assets/load-icon-4INARmNJ.gif",j={avatarNotSpeakingIcon:{imageSrc:ue,imageAlt:"avatar normal",imageAttribution:"Avatar Not Speaking Icon created by Raquel Arcaz Arias",searchLink:""},avatarSpeakingIcon:{imageSrc:me,imageAlt:"avatar hablando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""},loadingIcon:{imageSrc:ge,imageAlt:"cargando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""}};var b=(a=>(a.SEND_SPEECH="send-msg",a.START_SPEECH="start-saying-msg",a.END_SPEECH="end-saying-msg",a.NONE="none",a))(b||{}),x=(a=>(a.LOADING="loading",a.OK="ok",a.NOT_OK="not-ok",a))(x||{}),P=(a=>(a.MICROPHONE_OPENED="opened",a.MICROPHONE_CLOSED="closed",a))(P||{});const w={data:{intentType:"",userRequest:""},voiceAPIStatus:x.LOADING,voiceMicroStatus:P.MICROPHONE_CLOSED,voiceMsgProps:{body:"",status:b.NONE},deviceId:"1",processingUserRequest:!1},L=ae({name:"voiceState",initialState:w,reducers:{setVoiceAPIStatus:(a,s)=>{a.voiceAPIStatus=s.payload},setVoiceMicroStatus:(a,s)=>{a.voiceMicroStatus=s.payload},setVoiceMsgBody:(a,s)=>{a.voiceMsgProps.body=s.payload},setVoiceMsgStatus:(a,s)=>{a.voiceMsgProps.status=s.payload},setDeviceId:(a,s)=>{a.deviceId=s.payload},setProcessingUserRequest:(a,s)=>{a.processingUserRequest=s.payload},setUserSpeechData:(a,s)=>{a.data=s.payload},resetUserSpeechData:a=>{a.data=w.data}}}),{setVoiceAPIStatus:D,setVoiceMicroStatus:U,setVoiceMsgBody:Ke,setVoiceMsgStatus:y,setDeviceId:pe,setProcessingUserRequest:H,setUserSpeechData:ve,resetUserSpeechData:z}=L.actions,xe=L.reducer,he=()=>{const a=S(u=>{var o;return(o=u.voiceState)==null?void 0:o.voiceAPIStatus}),s=T(),{printDebug:r,sendTextToAlexa:n}=c.useContext(C),t=async u=>{const o=d(u);await n(a,o),s(H(!1))},d=u=>{let o="<voice name='Lucia'>";return o+=u,o+="</voice>",o};return{speechResponseToUserRequest:t}},be=()=>{const a=`<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                          \xA1Hola! Mi nombre es Alexa. \xBFCu\xE1l es tu nombre? </amazon:emotion><break strength='strong'/></voice>`,[s,r]=c.useState(!1),[n,t]=c.useState(!1),[d,u]=c.useState(""),o=S(v=>{var m;return(m=v.voiceState)==null?void 0:m.voiceAPIStatus}),l=S(v=>{var m;return(m=v.voiceState)==null?void 0:m.voiceMsgProps}),k=S(v=>{var m;return(m=v.voiceState)==null?void 0:m.processingUserRequest}),g=S(v=>{var m,E;return(E=(m=v.voiceState)==null?void 0:m.data)==null?void 0:E.intentType}),f=S(v=>{var m,E;return(E=(m=v.voiceState)==null?void 0:m.data)==null?void 0:E.userRequest}),M=T(),{speechResponseToUserRequest:h}=he(),{printDebug:N}=c.useContext(C),A=c.useCallback(()=>{N(`+++ INSIDE loading() - voiceAPIStatus => ${o}`),N(`+++ INSIDE loading() - voiceMsgStatus => ${l.status}`),o===x.LOADING||k?r(!0):r(!1)},[o,l]),I=c.useCallback(()=>{l.status===b.START_SPEECH?t(!0):t(!1)},[l]),i=c.useCallback(()=>{h(a)},[o]),p=c.useCallback(async()=>{N("+++ INSIDE handleVoiceAPIIntents() +++ "),N(`+++ VOICE API STATUS => ${o} `),N(`+++ INTENT TYPE => ${g} `),g==="set-name-intent"?(u(f),h(`\xA1Encantada de conocerte ${f}! \xBFQu\xE9 es lo que te gustar\xEDa decirme?`)):g==="feel-alone-intent"?h(`Lamento saber que te est\xE1s sintiendo sola ${d}. \xBFPor qu\xE9 te sientes sola?`):g==="why-feel-alone-intent"?h(`Se me ocurre que podr\xEDas salir a la calle a hacer los mandados que tienes pendiente, o salir a dar un paseo por el parque m\xE1s cercano. 
         Tambi\xE9n podr\xEDas ir a una cafeter\xEDa o a un centro social y sentarte a hablar con alguien all\xED. 
         \xBFQuieres que te recomiende alguna cafeter\xEDa o sitio que podr\xEDas visitar?`):g==="yes-intent"?h("\xA1Genial! Me alegro de que te haya gustado la idea. Antes de ofrecerte mis recomendaciones necesito que me digas cu\xE1l es la ciudad en la que vives"):g==="city-intent"&&h(`Podr\xEDas ir a la cafeter\xEDa Mu\xF1oz, que tiene muy buenas valoraciones. 
         Despu\xE9s, si te apetece, te propongo pasear tranquilamente por el Parque de los Fueros. 
         Espero que mis recomendaciones te sirvan y no olvides contarme qu\xE9 tal la experiencia al volver. \xA1Hasta pronto!`),M(z())},[g,o]);return c.useEffect(()=>{A()},[A]),c.useEffect(()=>{i()},[i]),c.useEffect(()=>{I()},[I]),c.useEffect(()=>{p()},[p]),{isLoading:s,isSpeechOn:n}},Ne=()=>{const{isLoading:a,isSpeechOn:s}=be();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu",children:e.jsxs("div",{className:"grid-container",children:[s?e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:j.avatarSpeakingIcon.imageSrc,alt:j.avatarSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}):e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:j.avatarNotSpeakingIcon.imageSrc,alt:j.avatarNotSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}),e.jsx("div",{className:"grid-item item-input-wrapper-menu-view",children:a?e.jsx("div",{className:"grid-item item-icon-load-alexa-loading-view",children:e.jsx("img",{src:j.loadingIcon.imageSrc,alt:j.loadingIcon.imageAlt,className:"d-inline-block align-center"})}):e.jsxs(X,{size:"lg",className:"mb-3",children:[e.jsx(Z.Control,{placeholder:"\xBFEn qu\xE9 te puedo ayudar?","aria-label":"\xBFEn qu\xE9 te puedo ayudar?","aria-describedby":"basic-addon2"}),e.jsx(q,{id:"save-debug-btn",path:"",classStyle:"",type:"submit",children:"Enviar"})]})})]})})})})},Se=()=>{const a={navBrand:{name:"Tu Amiga Virtual"},navBtns:[{name:"debug-btn",icon:K,path:"/debug"}],disableNavButton:!1},s={icon:e.jsx(B,{icon:$,size:"lg"}),msg:"Ejemplo: Alexa, me siento solo"};return e.jsxs(e.Fragment,{children:[e.jsx(_,{navBrand:a.navBrand,navBtns:a.navBtns,disableNavButton:a.disableNavButton}),e.jsx(Ne,{}),e.jsx(de,{msg:s.msg,icon:s.icon})]})},je=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu-start-app-view",children:e.jsxs("div",{className:"grid-container-start-app-view",children:[e.jsx("div",{className:"item-logo-start-app-view",children:"Tu Amiga Virtual"}),e.jsx("div",{className:"item-button-start-app-view",children:e.jsx(q,{id:"start",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Comenzar"})})]})})})}),Ee=({msg:a})=>{const s={navBrand:{name:"En Modo Debug"},navBtns:[{name:"exit-btn",icon:J,path:"/dialog"}],disableNavButton:!1};return e.jsxs(e.Fragment,{children:[e.jsx(_,{navBrand:s.navBrand,navBtns:s.navBtns,disableNavButton:s.disableNavButton}),e.jsx("div",{className:"debug-container",children:e.jsxs("div",{className:"debug-container-grid",children:[e.jsx("div",{className:"debug-container-grid-item-traza",children:e.jsx("ul",{children:a.map((r,n)=>r&&e.jsx("li",{children:r},n))})}),e.jsx("div",{className:"debug-container-grid-item-input-btns",children:e.jsx("div",{className:"debug-container-grid-item-input-field",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("div",{className:"input-group-prepend",children:e.jsx("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"UID"})}),e.jsx("input",{type:"number",name:"uid",placeholder:"UID del usuario que ha realizado test usabilidad",pattern:"^[0-9]+$",title:"Solo se permiten n\xFAmeros",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",required:!0})]})})})]})})]})},ye=()=>{const[a,s]=c.useState(null),[r,n]=c.useState([]),t=T(),d=c.useCallback(async()=>{l("Beginning Alexa.create"),window.Alexa?window.Alexa.create({version:"1.0"}).then(i=>{i.alexa?(s(i.alexa),i.alexa.skill.onMessage(f),i.alexa.speech.onStarted(M),i.alexa.speech.onStopped(h),i.alexa.voice.onMicrophoneOpened(N),i.alexa.voice.onMicrophoneClosed(A),l("Alexa is ready - newest version 5 :) Received initial data 45"),i.message.deviceId&&(l("Alexa Skill init data: "+i.message.deviceId),console.log("Alexa Skill init data: "+i.message.deviceId),t(pe(i.message.deviceId))),t(D(x.OK))):(l(`Alexa failed to initialize, code: ${i.code}`),t(D(x.NOT_OK)))}).catch(i=>{l(`Alexa not ready :(. Error: ${i}`),t(D(x.NOT_OK))}):t(D(x.NOT_OK))},[]),u=i=>{n(p=>[...p,i]),console.log(i)},o=()=>{n([])},l=i=>{u(typeof i!="string"?JSON.stringify(i,null,2):i)},k=i=>{i.statusCode==200?l("message was sent to backend successfully"):(t(y(b.END_SPEECH)),l("failed to send message to skill backend:"))},g=c.useCallback(async i=>{try{l("sending message to skill endpoint ==> "+JSON.stringify(i)),l("+++ INSIDE sendMessage - alexaClient ==> "+a),await a.skill.sendMessage(i,k)}catch(p){t(y(b.END_SPEECH)),l("Alexa error ==> "+p)}},[a]),f=i=>{let p;l("Web APP received a message from the skill endpoint"),l(i),i&&(p={intentType:i.intentType,userRequest:i.userRequest},t(H(!0)),t(ve(p)))},M=()=>{t(y(b.START_SPEECH))},h=()=>{t(y(b.END_SPEECH))},N=()=>{t(U(P.MICROPHONE_OPENED))},A=()=>{t(U(P.MICROPHONE_CLOSED))},I=c.useCallback(()=>{t(z())},[]);return c.useEffect(()=>{d()},[]),{debugMessages:r,printDebug:l,sendMessage:g,resetVoiceIntent:I,resetDebugMessages:o}},fe=()=>{const a=T(),{debugMessages:s,printDebug:r,sendMessage:n,resetDebugMessages:t}=ye();return{debugMessages:s,printDebug:r,sendLogToAlexa:async(d,u)=>{d===x.OK&&await n({intentRequest:"log-text-intent",logTxt:u})},sendTextToAlexa:async(d,u,o)=>{d===x.OK&&(a(y(b.SEND_SPEECH)),await n({intentRequest:o||"text-to-speech-intent",speech:u}))},resetDebugMessages:t}},C=F.createContext({});function Ae(){const{debugMessages:a,printDebug:s,sendLogToAlexa:r,sendTextToAlexa:n,resetDebugMessages:t}=fe();return e.jsx(e.Fragment,{children:e.jsx(C.Provider,{value:{debugMessages:a,printDebug:s,sendLogToAlexa:r,sendTextToAlexa:n,resetDebugMessages:t},children:e.jsx(G,{basename:O.BASE_ROUTE,children:e.jsxs(W,{children:[e.jsx(R,{path:O.START_APP_ROUTE,element:e.jsx(je,{})}),e.jsx(R,{path:O.DIALOG_ROUTE,element:e.jsx(Se,{})}),e.jsx(R,{path:O.DEBUG_ROUTE,element:e.jsx(Ee,{msg:a})})]})})})})}const Ie=se({reducer:{voiceState:xe}});V.createRoot(document.getElementById("root")).render(e.jsx(ee,{store:Ie,children:e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx(Ae,{})]})}));
