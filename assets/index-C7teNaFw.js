import{j as e,r as l,R as J}from"./react-BsEMT7Jt.js";import{c as W}from"./react-dom-BeE_72Gm.js";import{B as Q}from"./react-router-dom-H0glpzZ-.js";import{F as L,f as Y,a as Z,b as X}from"./@fortawesome-C7ZrGE5f.js";import{u as ee,a as ae,b as M}from"./react-router-B-ZdAFQc.js";import{p as se}from"./dompurify-BuFh49mM.js";import{u as j,a as T,P as te}from"./react-redux-DPE5VKb0.js";import{c as ne,a as ie}from"./@reduxjs-CJetLCaM.js";import{W as re,s as ce}from"./@arvidbt-_UtwSn1N.js";import{S as oe}from"./react-singleton-hook-BPMA_dso.js";import"./prop-types-BiVUseAU.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Dql683DL.js";import"./use-sync-external-store-BhvSfXh4.js";import"./redux-DITMfSWq.js";import"./immer-D6jAg06p.js";import"./reselect-DJRGOWkq.js";import"./redux-thunk-ClJT1hhx.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const le="/",de="/search-word",me="/dialog",ge="/debug",O={START_APP_ROUTE:le,BASE_ROUTE:de,DIALOG_ROUTE:me,DEBUG_ROUTE:ge},ue=()=>{const a=ee();return{onClickNavigateToPath:t=>{a(t)}}},U=({id:a,classStyle:t,children:n,path:i,type:s,onClick:c})=>{const{onClickNavigateToPath:g}=ue();return e.jsx(e.Fragment,{children:s==="button"&&c?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+t,onTouchEnd:c,children:n}):s==="button"&&!c?e.jsx("button",{id:a,type:"button",className:"btn btn-active-color "+t,onTouchEnd:()=>g(i),children:n}):e.jsx("button",{id:a,type:s,className:"btn btn-active-color "+t,children:n})})},q=({navBrand:a,navBtns:t})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"navbar-wrapper",children:e.jsx("nav",{className:"navbar navbar-custom navbar-expand-sm",children:e.jsxs("div",{className:"container-fluid",children:[e.jsx("div",{className:"navbar-brand",children:e.jsx("div",{className:"navbar-brand-grid-container",children:a.name?e.jsx(e.Fragment,{children:e.jsx("div",{className:"nameGrid align-items-center",children:e.jsx("div",{className:"name",children:a.name})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"onlyIconGrid",children:e.jsx("div",{className:"icon",children:a.icon})})})})}),e.jsx("div",{className:"collapse navbar-collapse",id:"navbarNav",children:e.jsx("div",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:t.map((n,i)=>e.jsx("div",{className:"nav-btn-item",children:e.jsx(U,{id:n.name,path:n.path,type:"button",children:e.jsx(L,{className:"nav-btn-icon",icon:n.icon})})},i))})})]})})})}),pe=a=>({__html:se.sanitize(a)}),ve=({msg:a,icon:t})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"footer-wrapper",children:e.jsx("div",{className:"footer-custom",children:e.jsx("div",{className:"container-fluid",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-1 icon",children:e.jsx("div",{children:t})}),e.jsx("div",{className:"col-11 text",children:e.jsx("div",{dangerouslySetInnerHTML:pe(a)})})]})})})})}),xe="/search-word/assets/avatar-not-speaking-BwFjj1a-.gif",he="/search-word/assets/avatar-speaking-DQHi02TP.gif",be="/search-word/assets/load-icon-4INARmNJ.gif",E={avatarNotSpeakingIcon:{imageSrc:xe,imageAlt:"avatar normal",imageAttribution:"Avatar Not Speaking Icon created by Raquel Arcaz Arias",searchLink:""},avatarSpeakingIcon:{imageSrc:he,imageAlt:"avatar hablando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""},loadingIcon:{imageSrc:be,imageAlt:"cargando",imageAttribution:"Avatar Speaking Icon created by Raquel Arcaz Arias",searchLink:""}};var N=(a=>(a.SEND_SPEECH="send-msg",a.START_SPEECH="start-saying-msg",a.END_SPEECH="end-saying-msg",a.NONE="none",a))(N||{}),x=(a=>(a.LOADING="loading",a.OK="ok",a.NOT_OK="not-ok",a))(x||{}),P=(a=>(a.MICROPHONE_OPENED="opened",a.MICROPHONE_CLOSED="closed",a))(P||{});const H={data:{intentType:"",userRequest:""},voiceAPIStatus:x.LOADING,voiceMicroStatus:P.MICROPHONE_CLOSED,voiceMsgProps:{body:"",status:N.NONE},deviceId:"1",processingUserRequest:!1},$=ne({name:"voiceState",initialState:H,reducers:{setVoiceAPIStatus:(a,t)=>{a.voiceAPIStatus=t.payload},setVoiceMicroStatus:(a,t)=>{a.voiceMicroStatus=t.payload},setVoiceMsgBody:(a,t)=>{a.voiceMsgProps.body=t.payload},setVoiceMsgStatus:(a,t)=>{a.voiceMsgProps.status=t.payload},setDeviceId:(a,t)=>{a.deviceId=t.payload},setProcessingUserRequest:(a,t)=>{a.processingUserRequest=t.payload},setUserSpeechData:(a,t)=>{a.data=t.payload},resetUserSpeechData:a=>{a.data=H.data}}}),{setVoiceAPIStatus:D,setVoiceMicroStatus:z,setVoiceMsgBody:Ye,setVoiceMsgStatus:f,setDeviceId:Ne,setProcessingUserRequest:F,setUserSpeechData:Se,resetUserSpeechData:V}=$.actions,je=$.reducer,Ee=()=>{const a=j(g=>{var u;return(u=g.voiceState)==null?void 0:u.voiceAPIStatus}),t=T(),{printDebug:n,sendTextToAlexa:i}=l.useContext(w),s=async g=>{const u=c(g);await i(a,u),t(F(!1))},c=g=>{let u="<voice name='Lucia'>";return u+=g,u+="</voice>",u};return{speechResponseToUserRequest:s}},Ae=(a,t)=>{const n=Array(a.length+1).fill(null).map(()=>Array(t.length+1).fill(0));for(let s=0;s<=a.length;s++)for(let c=0;c<=t.length;c++)s===0?n[s][c]=c:c===0?n[s][c]=s:a[s-1]===t[c-1]?n[s][c]=n[s-1][c-1]:n[s][c]=1+Math.min(n[s-1][c],n[s][c-1],n[s-1][c-1]);const i=Math.max(a.length,t.length);return 1-n[a.length][t.length]/i},fe=()=>{const a=`<voice name='Lucia'><amazon:emotion name="excited" intensity="high"> 
                          \xA1Hola! Mi nombre es Alexa. D\xEDme una palabra </amazon:emotion><break strength='strong'/></voice>`,[t,n]=l.useState(!1),[i,s]=l.useState(!1),[c,g]=l.useState(new re(ce)),[u,d]=l.useState("Esperando palabra..."),h=j(m=>{var o;return(o=m.voiceState)==null?void 0:o.voiceAPIStatus}),S=j(m=>{var o;return(o=m.voiceState)==null?void 0:o.voiceMsgProps}),R=j(m=>{var o;return(o=m.voiceState)==null?void 0:o.processingUserRequest}),A=j(m=>{var o,p;return(p=(o=m.voiceState)==null?void 0:o.data)==null?void 0:p.intentType}),y=j(m=>{var o,p;return(p=(o=m.voiceState)==null?void 0:o.data)==null?void 0:p.userRequest}),k=T(),{speechResponseToUserRequest:I}=Ee(),{printDebug:b}=l.useContext(w),r=l.useCallback(()=>{b(`+++ INSIDE loading() - voiceAPIStatus => ${h}`),b(`+++ INSIDE loading() - voiceMsgStatus => ${S.status}`),h===x.LOADING||R?n(!0):n(!1)},[h,S]),v=l.useCallback(()=>{S.status===N.START_SPEECH?s(!0):s(!1)},[S]),B=l.useCallback(()=>{I(a)},[h]),_=l.useCallback(async()=>{b("+++ INSIDE handleVoiceAPIIntents() +++ "),b(`+++ VOICE API STATUS => ${h} `),b(`+++ INTENT TYPE => ${A} `),A==="word-intent"&&await G(y),k(V())},[A,h]),G=async m=>{let o="";d("Palabra recibida. Buscando..."),setTimeout(async()=>{o=await K(y)},3e3),d(`Palabra registrada por Alexa: ${m} - Palabra encontrada en diccionario: ${o}`),I(`La palabra que he entendido es ${m}, y la palabra que he encontrado en el diccionario es ${o}`)},K=async m=>{let o="";return c.getDictionaryWords().map(p=>{const C=Ae(p.toLowerCase(),m.toLowerCase());C>=.8&&(o=p,console.log(`LVN DISTANCE between ${p} and ${m} is ${C}`),b(`LVN DISTANCE between ${p} and ${m} is ${C}`))}),o};return l.useEffect(()=>{r()},[r]),l.useEffect(()=>{B()},[B]),l.useEffect(()=>{v()},[v]),l.useEffect(()=>{_()},[_]),{searchingText:u,isLoading:t,isSpeechOn:i}},ye=()=>{const{searchingText:a,isLoading:t,isSpeechOn:n}=fe();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu",children:e.jsxs("div",{className:"grid-container",children:[n?e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:E.avatarSpeakingIcon.imageSrc,alt:E.avatarSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}):e.jsx("div",{className:"grid-item item-avatar",children:e.jsx("img",{src:E.avatarNotSpeakingIcon.imageSrc,alt:E.avatarNotSpeakingIcon.imageAlt,className:"d-inline-block align-center"})}),e.jsx("div",{className:"grid-item item-input-wrapper-menu-view",children:t?e.jsx("div",{className:"grid-item item-icon-load-alexa-loading-view",children:e.jsx("img",{src:E.loadingIcon.imageSrc,alt:E.loadingIcon.imageAlt,className:"d-inline-block align-center"})}):e.jsx("div",{className:"grid-item item-waiting-text-alexa-loading-view item-waiting-text-alexa-loading-view-animation",children:a})})]})})})})},Ie=()=>{const a={navBrand:{name:"Buscar Palabras"},navBtns:[{name:"debug-btn",icon:Y,path:"/debug"}],disableNavButton:!1},t={icon:e.jsx(L,{icon:Z,size:"lg"}),msg:"Ejemplo: Alexa, manzana"};return e.jsxs(e.Fragment,{children:[e.jsx(q,{navBrand:a.navBrand,navBtns:a.navBtns,disableNavButton:a.disableNavButton}),e.jsx(ye,{}),e.jsx(ve,{msg:t.msg,icon:t.icon})]})},Te=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid",children:e.jsx("div",{className:"container-menu-start-app-view",children:e.jsxs("div",{className:"grid-container-start-app-view",children:[e.jsx("div",{className:"item-logo-start-app-view",children:"Buscar Palabras"}),e.jsx("div",{className:"item-button-start-app-view",children:e.jsx(U,{id:"start",path:"/dialog",classStyle:"btn-primary item-button",type:"button",children:"Comenzar"})})]})})})}),Oe=({msg:a})=>{const t={navBrand:{name:"En Modo Debug"},navBtns:[{name:"exit-btn",icon:X,path:"/dialog"}],disableNavButton:!1};return e.jsxs(e.Fragment,{children:[e.jsx(q,{navBrand:t.navBrand,navBtns:t.navBtns,disableNavButton:t.disableNavButton}),e.jsx("div",{className:"debug-container",children:e.jsxs("div",{className:"debug-container-grid",children:[e.jsx("div",{className:"debug-container-grid-item-traza",children:e.jsx("ul",{children:a.map((n,i)=>n&&e.jsx("li",{children:n},i))})}),e.jsx("div",{className:"debug-container-grid-item-input-btns",children:e.jsx("div",{className:"debug-container-grid-item-input-field",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("div",{className:"input-group-prepend",children:e.jsx("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"UID"})}),e.jsx("input",{type:"number",name:"uid",placeholder:"UID del usuario que ha realizado test usabilidad",pattern:"^[0-9]+$",title:"Solo se permiten n\xFAmeros",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",required:!0})]})})})]})})]})},Pe=()=>{const[a,t]=l.useState(null),[n,i]=l.useState([]),s=T(),c=l.useCallback(async()=>{d("Beginning Alexa.create"),window.Alexa?window.Alexa.create({version:"1.0"}).then(r=>{r.alexa?(t(r.alexa),r.alexa.skill.onMessage(R),r.alexa.speech.onStarted(A),r.alexa.speech.onStopped(y),r.alexa.voice.onMicrophoneOpened(k),r.alexa.voice.onMicrophoneClosed(I),d("Alexa is ready - newest version 5 :) Received initial data 45"),r.message.deviceId&&(d("Alexa Skill init data: "+r.message.deviceId),console.log("Alexa Skill init data: "+r.message.deviceId),s(Ne(r.message.deviceId))),s(D(x.OK))):(d(`Alexa failed to initialize, code: ${r.code}`),s(D(x.NOT_OK)))}).catch(r=>{d(`Alexa not ready :(. Error: ${r}`),s(D(x.NOT_OK))}):s(D(x.NOT_OK))},[]),g=r=>{i(v=>[...v,r]),console.log(r)},u=()=>{i([])},d=r=>{g(typeof r!="string"?JSON.stringify(r,null,2):r)},h=r=>{r.statusCode==200?d("message was sent to backend successfully"):(s(f(N.END_SPEECH)),d("failed to send message to skill backend:"))},S=l.useCallback(async r=>{try{d("sending message to skill endpoint ==> "+JSON.stringify(r)),d("+++ INSIDE sendMessage - alexaClient ==> "+a),await a.skill.sendMessage(r,h)}catch(v){s(f(N.END_SPEECH)),d("Alexa error ==> "+v)}},[a]),R=r=>{let v;d("Web APP received a message from the skill endpoint"),d(r),r&&(v={intentType:r.intentType,userRequest:r.userRequest},s(F(!0)),s(Se(v)))},A=()=>{s(f(N.START_SPEECH))},y=()=>{s(f(N.END_SPEECH))},k=()=>{s(z(P.MICROPHONE_OPENED))},I=()=>{s(z(P.MICROPHONE_CLOSED))},b=l.useCallback(()=>{s(V())},[]);return l.useEffect(()=>{c()},[]),{debugMessages:n,printDebug:d,sendMessage:S,resetVoiceIntent:b,resetDebugMessages:u}},De=()=>{const a=T(),{debugMessages:t,printDebug:n,sendMessage:i,resetDebugMessages:s}=Pe();return{debugMessages:t,printDebug:n,sendLogToAlexa:async(c,g)=>{c===x.OK&&await i({intentRequest:"log-text-intent",logTxt:g})},sendTextToAlexa:async(c,g,u)=>{c===x.OK&&(a(f(N.SEND_SPEECH)),await i({intentRequest:u||"text-to-speech-intent",speech:g}))},resetDebugMessages:s}},w=J.createContext({});function Re(){const{debugMessages:a,printDebug:t,sendLogToAlexa:n,sendTextToAlexa:i,resetDebugMessages:s}=De();return e.jsx(e.Fragment,{children:e.jsx(w.Provider,{value:{debugMessages:a,printDebug:t,sendLogToAlexa:n,sendTextToAlexa:i,resetDebugMessages:s},children:e.jsx(Q,{basename:O.BASE_ROUTE,children:e.jsxs(ae,{children:[e.jsx(M,{path:O.START_APP_ROUTE,element:e.jsx(Te,{})}),e.jsx(M,{path:O.DIALOG_ROUTE,element:e.jsx(Ie,{})}),e.jsx(M,{path:O.DEBUG_ROUTE,element:e.jsx(Oe,{msg:a})})]})})})})}const ke=ie({reducer:{voiceState:je}});W.createRoot(document.getElementById("root")).render(e.jsx(te,{store:ke,children:e.jsxs(e.Fragment,{children:[e.jsx(oe,{}),e.jsx(Re,{})]})}));
