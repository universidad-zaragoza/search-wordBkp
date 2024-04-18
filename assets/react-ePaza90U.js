import{g as F}from"./classnames-C9FZUsQl.js";function N(e,r){for(var n=0;n<r.length;n++){const t=r[n];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(t,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var w={exports:{}},d={},O={exports:{}},u={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var y=Symbol.for("react.element"),V=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),H=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),k=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,C={};function p(e,r,n){this.props=e,this.context=r,this.refs=C,this.updater=n||$}p.prototype.isReactComponent={},p.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function x(){}x.prototype=p.prototype;function h(e,r,n){this.props=e,this.context=r,this.refs=C,this.updater=n||$}var S=h.prototype=new x;S.constructor=h,j(S,p.prototype),S.isPureReactComponent=!0;var P=Array.isArray,I=Object.prototype.hasOwnProperty,g={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function A(e,r,n){var t,o={},a=null,c=null;if(r!=null)for(t in r.ref!==void 0&&(c=r.ref),r.key!==void 0&&(a=""+r.key),r)I.call(r,t)&&!T.hasOwnProperty(t)&&(o[t]=r[t]);var f=arguments.length-2;if(f===1)o.children=n;else if(1<f){for(var i=Array(f),l=0;l<f;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(t in f=e.defaultProps,f)o[t]===void 0&&(o[t]=f[t]);return{$$typeof:y,type:e,key:a,ref:c,props:o,_owner:g.current}}function Q(e,r){return{$$typeof:y,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function X(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var D=/\/+/g;function R(e,r){return typeof e=="object"&&e!==null&&e.key!=null?X(""+e.key):r.toString(36)}function _(e,r,n,t,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case y:case V:c=!0}}if(c)return c=e,o=o(c),e=t===""?"."+R(c,0):t,P(o)?(n="",e!=null&&(n=e.replace(D,"$&/")+"/"),_(o,r,n,"",function(l){return l})):o!=null&&(E(o)&&(o=Q(o,n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(D,"$&/")+"/")+e)),r.push(o)),1;if(c=0,t=t===""?".":t+":",P(e))for(var f=0;f<e.length;f++){a=e[f];var i=t+R(a,f);c+=_(a,r,n,i,o)}else if(i=K(e),typeof i=="function")for(e=i.call(e),f=0;!(a=e.next()).done;)a=a.value,i=t+R(a,f++),c+=_(a,r,n,i,o);else if(a==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}function m(e,r,n){if(e==null)return e;var t=[],o=0;return _(e,t,"","",function(a){return r.call(n,a,o++)}),t}function Z(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var s={current:null},v={transition:null},ee={ReactCurrentDispatcher:s,ReactCurrentBatchConfig:v,ReactCurrentOwner:g};u.Children={map:m,forEach:function(e,r,n){m(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return m(e,function(){r++}),r},toArray:function(e){return m(e,function(r){return r})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},u.Component=p,u.Fragment=q,u.Profiler=z,u.PureComponent=h,u.StrictMode=M,u.Suspense=Y,u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,u.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=j({},e.props),o=e.key,a=e.ref,c=e._owner;if(r!=null){if(r.ref!==void 0&&(a=r.ref,c=g.current),r.key!==void 0&&(o=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in r)I.call(r,i)&&!T.hasOwnProperty(i)&&(t[i]=r[i]===void 0&&f!==void 0?f[i]:r[i])}var i=arguments.length-2;if(i===1)t.children=n;else if(1<i){f=Array(i);for(var l=0;l<i;l++)f[l]=arguments[l+2];t.children=f}return{$$typeof:y,type:e.type,key:o,ref:a,props:t,_owner:c}},u.createContext=function(e){return e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:B,_context:e},e.Consumer=e},u.createElement=A,u.createFactory=function(e){var r=A.bind(null,e);return r.type=e,r},u.createRef=function(){return{current:null}},u.forwardRef=function(e){return{$$typeof:W,render:e}},u.isValidElement=E,u.lazy=function(e){return{$$typeof:J,_payload:{_status:-1,_result:e},_init:Z}},u.memo=function(e,r){return{$$typeof:G,type:e,compare:r===void 0?null:r}},u.startTransition=function(e){var r=v.transition;v.transition={};try{e()}finally{v.transition=r}},u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},u.useCallback=function(e,r){return s.current.useCallback(e,r)},u.useContext=function(e){return s.current.useContext(e)},u.useDebugValue=function(){},u.useDeferredValue=function(e){return s.current.useDeferredValue(e)},u.useEffect=function(e,r){return s.current.useEffect(e,r)},u.useId=function(){return s.current.useId()},u.useImperativeHandle=function(e,r,n){return s.current.useImperativeHandle(e,r,n)},u.useInsertionEffect=function(e,r){return s.current.useInsertionEffect(e,r)},u.useLayoutEffect=function(e,r){return s.current.useLayoutEffect(e,r)},u.useMemo=function(e,r){return s.current.useMemo(e,r)},u.useReducer=function(e,r,n){return s.current.useReducer(e,r,n)},u.useRef=function(e){return s.current.useRef(e)},u.useState=function(e){return s.current.useState(e)},u.useSyncExternalStore=function(e,r,n){return s.current.useSyncExternalStore(e,r,n)},u.useTransition=function(){return s.current.useTransition()},u.version="18.2.0",O.exports=u;var b=O.exports;const L=F(b),re=N({__proto__:null,default:L},[b]);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var te=b,ne=Symbol.for("react.element"),oe=Symbol.for("react.fragment"),ue=Object.prototype.hasOwnProperty,ae=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ce={key:!0,ref:!0,__self:!0,__source:!0};function U(e,r,n){var t,o={},a=null,c=null;n!==void 0&&(a=""+n),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(c=r.ref);for(t in r)ue.call(r,t)&&!ce.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:ne,type:e,key:a,ref:c,props:o,_owner:ae.current}}d.Fragment=oe,d.jsx=U,d.jsxs=U,w.exports=d;var ie=w.exports;export{L as R,re as a,ie as j,b as r};