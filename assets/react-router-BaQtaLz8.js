import{r as n}from"./react-ePaza90U.js";import{i as h,p as L,m as w,j as B,A as O,s as z,g as J,r as H,a as V}from"./@remix-run-D9CvBlOG.js";/**
* React Router v6.22.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function x(){return x=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},x.apply(this,arguments)}const D=n.createContext(null),W=n.createContext(null),R=n.createContext(null),b=n.createContext(null),y=n.createContext({outlet:null,matches:[],isDataRoute:!1}),j=n.createContext(null);function U(){return n.useContext(b)!=null}function F(){return U()||h(!1),n.useContext(b).location}function I(t){n.useContext(R).static||n.useLayoutEffect(t)}function q(){let{isDataRoute:t}=n.useContext(y);return t?oe():G()}function G(){U()||h(!1);let t=n.useContext(D),{basename:e,future:a,navigator:r}=n.useContext(R),{matches:i}=n.useContext(y),{pathname:p}=F(),o=JSON.stringify(J(i,a.v7_relativeSplatPath)),m=n.useRef(!1);return I(()=>{m.current=!0}),n.useCallback(function(s,d){if(d===void 0&&(d={}),!m.current)return;if(typeof s=="number"){r.go(s);return}let u=H(s,JSON.parse(o),p,d.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:B([e,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[e,r,o,p,t])}function K(t,e){return Q(t,e)}function Q(t,e,a,r){U()||h(!1);let{navigator:i}=n.useContext(R),{matches:p}=n.useContext(y),o=p[p.length-1],m=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let d=F(),u;if(e){var l;let c=typeof e=="string"?L(e):e;s==="/"||(l=c.pathname)!=null&&l.startsWith(s)||h(!1),u=c}else u=d;let v=u.pathname||"/",f=v;if(s!=="/"){let c=s.replace(/^\//,"").split("/");f="/"+v.replace(/^\//,"").split("/").slice(c.length).join("/")}let g=w(t,{pathname:f}),E=ee(g&&g.map(c=>Object.assign({},c,{params:Object.assign({},m,c.params),pathname:B([s,i.encodeLocation?i.encodeLocation(c.pathname).pathname:c.pathname]),pathnameBase:c.pathnameBase==="/"?s:B([s,i.encodeLocation?i.encodeLocation(c.pathnameBase).pathname:c.pathnameBase])})),p,a,r);return e&&E?n.createElement(b.Provider,{value:{location:x({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:O.Pop}},E):E}function X(){let t=ne(),e=V(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},e),a?n.createElement("pre",{style:r},a):null,null)}const Y=n.createElement(X,null);class Z extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,a){return a.location!==e.location||a.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:a.error,location:a.location,revalidation:e.revalidation||a.revalidation}}componentDidCatch(e,a){console.error("React Router caught the following error during render",e,a)}render(){return this.state.error!==void 0?n.createElement(y.Provider,{value:this.props.routeContext},n.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $(t){let{routeContext:e,match:a,children:r}=t,i=n.useContext(D);return i&&i.static&&i.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=a.route.id),n.createElement(y.Provider,{value:e},r)}function ee(t,e,a,r){var i;if(e===void 0&&(e=[]),a===void 0&&(a=null),r===void 0&&(r=null),t==null){var p;if((p=a)!=null&&p.errors)t=a.matches;else return null}let o=t,m=(i=a)==null?void 0:i.errors;if(m!=null){let u=o.findIndex(l=>l.route.id&&(m==null?void 0:m[l.route.id]));u>=0||h(!1),o=o.slice(0,Math.min(o.length,u+1))}let s=!1,d=-1;if(a&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let l=o[u];if((l.route.HydrateFallback||l.route.hydrateFallbackElement)&&(d=u),l.route.id){let{loaderData:v,errors:f}=a,g=l.route.loader&&v[l.route.id]===void 0&&(!f||f[l.route.id]===void 0);if(l.route.lazy||g){s=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,l,v)=>{let f,g=!1,E=null,c=null;a&&(f=m&&l.route.id?m[l.route.id]:void 0,E=l.route.errorElement||Y,s&&(d<0&&v===0?(le("route-fallback",!1),g=!0,c=null):d===v&&(g=!0,c=l.route.hydrateFallbackElement||null)));let P=e.concat(o.slice(0,v+1)),N=()=>{let C;return f?C=E:g?C=c:l.route.Component?C=n.createElement(l.route.Component,null):l.route.element?C=l.route.element:C=u,n.createElement($,{match:l,routeContext:{outlet:u,matches:P,isDataRoute:a!=null},children:C})};return a&&(l.route.ErrorBoundary||l.route.errorElement||v===0)?n.createElement(Z,{location:a.location,revalidation:a.revalidation,component:E,error:f,children:N(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):N()},null)}var M=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(M||{}),k=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(k||{});function te(t){let e=n.useContext(D);return e||h(!1),e}function re(t){let e=n.useContext(W);return e||h(!1),e}function ae(t){let e=n.useContext(y);return e||h(!1),e}function A(t){let e=ae(),a=e.matches[e.matches.length-1];return a.route.id||h(!1),a.route.id}function ne(){var t;let e=n.useContext(j),a=re(k.UseRouteError),r=A(k.UseRouteError);return e!==void 0?e:(t=a.errors)==null?void 0:t[r]}function oe(){let{router:t}=te(M.UseNavigateStable),e=A(k.UseNavigateStable),a=n.useRef(!1);return I(()=>{a.current=!0}),n.useCallback(function(r,i){i===void 0&&(i={}),a.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,x({fromRouteId:e},i)))},[t,e])}const T={};function le(t,e,a){!e&&!T[t]&&(T[t]=!0)}function _(t){h(!1)}function ie(t){let{basename:e="/",children:a=null,location:r,navigationType:i=O.Pop,navigator:p,static:o=!1,future:m}=t;U()&&h(!1);let s=e.replace(/^\/*/,"/"),d=n.useMemo(()=>({basename:s,navigator:p,static:o,future:x({v7_relativeSplatPath:!1},m)}),[s,m,p,o]);typeof r=="string"&&(r=L(r));let{pathname:u="/",search:l="",hash:v="",state:f=null,key:g="default"}=r,E=n.useMemo(()=>{let c=z(u,s);return c==null?null:{location:{pathname:c,search:l,hash:v,state:f,key:g},navigationType:i}},[s,u,l,v,f,g,i]);return E==null?null:n.createElement(R.Provider,{value:d},n.createElement(b.Provider,{children:a,value:E}))}function ue(t){let{children:e,location:a}=t;return K(S(e),a)}new Promise(()=>{});function S(t,e){e===void 0&&(e=[]);let a=[];return n.Children.forEach(t,(r,i)=>{if(!n.isValidElement(r))return;let p=[...e,i];if(r.type===n.Fragment){a.push.apply(a,S(r.props.children,p));return}r.type!==_&&h(!1),!r.props.index||!r.props.children||h(!1);let o={id:r.props.id||p.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=S(r.props.children,p)),a.push(o)}),a}export{ie as R,ue as a,_ as b,q as u};
