function vS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const a in i)if(a!=="default"&&!(a in t)){const r=Object.getOwnPropertyDescriptor(i,a);r&&Object.defineProperty(t,a,r.get?r:{enumerable:!0,get:()=>i[a]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();function vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Sx={exports:{}},Wc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SS=Symbol.for("react.transitional.element"),bS=Symbol.for("react.fragment");function bx(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var a in e)a!=="key"&&(n[a]=e[a])}else n=e;return e=n.ref,{$$typeof:SS,type:t,key:i,ref:e!==void 0?e:null,props:n}}Wc.Fragment=bS;Wc.jsx=bx;Wc.jsxs=bx;Sx.exports=Wc;var z=Sx.exports,yx={exports:{}},Pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eh=Symbol.for("react.transitional.element"),yS=Symbol.for("react.portal"),MS=Symbol.for("react.fragment"),ES=Symbol.for("react.strict_mode"),TS=Symbol.for("react.profiler"),AS=Symbol.for("react.consumer"),RS=Symbol.for("react.context"),CS=Symbol.for("react.forward_ref"),wS=Symbol.for("react.suspense"),DS=Symbol.for("react.memo"),Mx=Symbol.for("react.lazy"),US=Symbol.for("react.activity"),Vp=Symbol.iterator;function NS(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var Ex={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tx=Object.assign,Ax={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=Ax,this.updater=n||Ex}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Rx(){}Rx.prototype=Cs.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=Ax,this.updater=n||Ex}var Ah=Th.prototype=new Rx;Ah.constructor=Th;Tx(Ah,Cs.prototype);Ah.isPureReactComponent=!0;var Xp=Array.isArray;function Pf(){}var bt={H:null,A:null,T:null,S:null},Cx=Object.prototype.hasOwnProperty;function Rh(t,e,n){var i=n.ref;return{$$typeof:Eh,type:t,key:e,ref:i!==void 0?i:null,props:n}}function LS(t,e){return Rh(t.type,e,t.props)}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eh}function OS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var kp=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OS(""+t.key):e.toString(36)}function PS(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Pf,Pf):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Gr(t,e,n,i,a){var r=typeof t;(r==="undefined"||r==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(r){case"bigint":case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Eh:case yS:s=!0;break;case Mx:return s=t._init,Gr(s(t._payload),e,n,i,a)}}if(s)return a=a(t),s=i===""?"."+Su(t,0):i,Xp(a)?(n="",s!=null&&(n=s.replace(kp,"$&/")+"/"),Gr(a,e,n,"",function(c){return c})):a!=null&&(Ch(a)&&(a=LS(a,n+(a.key==null||t&&t.key===a.key?"":(""+a.key).replace(kp,"$&/")+"/")+s)),e.push(a)),1;s=0;var o=i===""?".":i+":";if(Xp(t))for(var l=0;l<t.length;l++)i=t[l],r=o+Su(i,l),s+=Gr(i,e,n,r,a);else if(l=NS(t),typeof l=="function")for(t=l.call(t),l=0;!(i=t.next()).done;)i=i.value,r=o+Su(i,l++),s+=Gr(i,e,n,r,a);else if(r==="object"){if(typeof t.then=="function")return Gr(PS(t),e,n,i,a);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return s}function ll(t,e,n){if(t==null)return t;var i=[],a=0;return Gr(t,i,"","",function(r){return e.call(n,r,a++)}),i}function zS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Wp=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},BS={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Pe.Activity=US;Pe.Children=BS;Pe.Component=Cs;Pe.Fragment=MS;Pe.Profiler=TS;Pe.PureComponent=Th;Pe.StrictMode=ES;Pe.Suspense=wS;Pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bt;Pe.__COMPILER_RUNTIME={__proto__:null,c:function(t){return bt.H.useMemoCache(t)}};Pe.cache=function(t){return function(){return t.apply(null,arguments)}};Pe.cacheSignal=function(){return null};Pe.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=Tx({},t.props),a=t.key;if(e!=null)for(r in e.key!==void 0&&(a=""+e.key),e)!Cx.call(e,r)||r==="key"||r==="__self"||r==="__source"||r==="ref"&&e.ref===void 0||(i[r]=e[r]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),o=0;o<r;o++)s[o]=arguments[o+2];i.children=s}return Rh(t.type,a,i)};Pe.createContext=function(t){return t={$$typeof:RS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:AS,_context:t},t};Pe.createElement=function(t,e,n){var i,a={},r=null;if(e!=null)for(i in e.key!==void 0&&(r=""+e.key),e)Cx.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(a[i]=e[i]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];a.children=o}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)a[i]===void 0&&(a[i]=s[i]);return Rh(t,r,a)};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(t){return{$$typeof:CS,render:t}};Pe.isValidElement=Ch;Pe.lazy=function(t){return{$$typeof:Mx,_payload:{_status:-1,_result:t},_init:zS}};Pe.memo=function(t,e){return{$$typeof:DS,type:t,compare:e===void 0?null:e}};Pe.startTransition=function(t){var e=bt.T,n={};bt.T=n;try{var i=t(),a=bt.S;a!==null&&a(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Pf,Wp)}catch(r){Wp(r)}finally{e!==null&&n.types!==null&&(e.types=n.types),bt.T=e}};Pe.unstable_useCacheRefresh=function(){return bt.H.useCacheRefresh()};Pe.use=function(t){return bt.H.use(t)};Pe.useActionState=function(t,e,n){return bt.H.useActionState(t,e,n)};Pe.useCallback=function(t,e){return bt.H.useCallback(t,e)};Pe.useContext=function(t){return bt.H.useContext(t)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(t,e){return bt.H.useDeferredValue(t,e)};Pe.useEffect=function(t,e){return bt.H.useEffect(t,e)};Pe.useEffectEvent=function(t){return bt.H.useEffectEvent(t)};Pe.useId=function(){return bt.H.useId()};Pe.useImperativeHandle=function(t,e,n){return bt.H.useImperativeHandle(t,e,n)};Pe.useInsertionEffect=function(t,e){return bt.H.useInsertionEffect(t,e)};Pe.useLayoutEffect=function(t,e){return bt.H.useLayoutEffect(t,e)};Pe.useMemo=function(t,e){return bt.H.useMemo(t,e)};Pe.useOptimistic=function(t,e){return bt.H.useOptimistic(t,e)};Pe.useReducer=function(t,e,n){return bt.H.useReducer(t,e,n)};Pe.useRef=function(t){return bt.H.useRef(t)};Pe.useState=function(t){return bt.H.useState(t)};Pe.useSyncExternalStore=function(t,e,n){return bt.H.useSyncExternalStore(t,e,n)};Pe.useTransition=function(){return bt.H.useTransition()};Pe.version="19.2.0";yx.exports=Pe;var fe=yx.exports;const wx=vx(fe),FS=vS({__proto__:null,default:wx},[fe]);var Dx={exports:{}},qc={},Ux={exports:{}},Nx={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,V){var B=O.length;O.push(V);e:for(;0<B;){var J=B-1>>>1,ne=O[J];if(0<a(ne,V))O[J]=V,O[B]=ne,B=J;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var V=O[0],B=O.pop();if(B!==V){O[0]=B;e:for(var J=0,ne=O.length,Se=ne>>>1;J<Se;){var Ge=2*(J+1)-1,$e=O[Ge],Je=Ge+1,nt=O[Je];if(0>a($e,B))Je<ne&&0>a(nt,$e)?(O[J]=nt,O[Je]=B,J=Je):(O[J]=$e,O[Ge]=B,J=Ge);else if(Je<ne&&0>a(nt,B))O[J]=nt,O[Je]=B,J=Je;else break e}}return V}function a(O,V){var B=O.sortIndex-V.sortIndex;return B!==0?B:O.id-V.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var r=performance;t.unstable_now=function(){return r.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],d=1,f=null,h=3,p=!1,_=!1,v=!1,m=!1,u=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;function b(O){for(var V=n(c);V!==null;){if(V.callback===null)i(c);else if(V.startTime<=O)i(c),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(c)}}function C(O){if(v=!1,b(O),!_)if(n(l)!==null)_=!0,T||(T=!0,I());else{var V=n(c);V!==null&&q(C,V.startTime-O)}}var T=!1,R=-1,N=5,E=-1;function y(){return m?!0:!(t.unstable_now()-E<N)}function U(){if(m=!1,T){var O=t.unstable_now();E=O;var V=!0;try{e:{_=!1,v&&(v=!1,x(R),R=-1),p=!0;var B=h;try{t:{for(b(O),f=n(l);f!==null&&!(f.expirationTime>O&&y());){var J=f.callback;if(typeof J=="function"){f.callback=null,h=f.priorityLevel;var ne=J(f.expirationTime<=O);if(O=t.unstable_now(),typeof ne=="function"){f.callback=ne,b(O),V=!0;break t}f===n(l)&&i(l),b(O)}else i(l);f=n(l)}if(f!==null)V=!0;else{var Se=n(c);Se!==null&&q(C,Se.startTime-O),V=!1}}break e}finally{f=null,h=B,p=!1}V=void 0}}finally{V?I():T=!1}}}var I;if(typeof g=="function")I=function(){g(U)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Q=W.port2;W.port1.onmessage=U,I=function(){Q.postMessage(null)}}else I=function(){u(U,0)};function q(O,V){R=u(function(){O(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var B=h;h=V;try{return O()}finally{h=B}},t.unstable_requestPaint=function(){m=!0},t.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var B=h;h=O;try{return V()}finally{h=B}},t.unstable_scheduleCallback=function(O,V,B){var J=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?J+B:J):B=J,O){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=B+ne,O={id:d++,callback:V,priorityLevel:O,startTime:B,expirationTime:ne,sortIndex:-1},B>J?(O.sortIndex=B,e(c,O),n(l)===null&&O===n(c)&&(v?(x(R),R=-1):v=!0,q(C,B-J))):(O.sortIndex=ne,e(l,O),_||p||(_=!0,T||(T=!0,I()))),O},t.unstable_shouldYield=y,t.unstable_wrapCallback=function(O){var V=h;return function(){var B=h;h=V;try{return O.apply(this,arguments)}finally{h=B}}}})(Nx);Ux.exports=Nx;var IS=Ux.exports,Lx={exports:{}},fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HS=fe;function Ox(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ea(){}var cn={d:{f:ea,r:function(){throw Error(Ox(522))},D:ea,C:ea,L:ea,m:ea,X:ea,S:ea,M:ea},p:0,findDOMNode:null},GS=Symbol.for("react.portal");function VS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:GS,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var so=HS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Yc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=cn;fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Ox(299));return VS(t,e,null,n)};fn.flushSync=function(t){var e=so.T,n=cn.p;try{if(so.T=null,cn.p=2,t)return t()}finally{so.T=e,cn.p=n,cn.d.f()}};fn.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,cn.d.C(t,e))};fn.prefetchDNS=function(t){typeof t=="string"&&cn.d.D(t)};fn.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Yc(n,e.crossOrigin),a=typeof e.integrity=="string"?e.integrity:void 0,r=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?cn.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:a,fetchPriority:r}):n==="script"&&cn.d.X(t,{crossOrigin:i,integrity:a,fetchPriority:r,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};fn.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Yc(e.as,e.crossOrigin);cn.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&cn.d.M(t)};fn.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Yc(n,e.crossOrigin);cn.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};fn.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Yc(e.as,e.crossOrigin);cn.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else cn.d.m(t)};fn.requestFormReset=function(t){cn.d.r(t)};fn.unstable_batchedUpdates=function(t,e){return t(e)};fn.useFormState=function(t,e,n){return so.H.useFormState(t,e,n)};fn.useFormStatus=function(){return so.H.useHostTransitionStatus()};fn.version="19.2.0";function Px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Px)}catch(t){console.error(t)}}Px(),Lx.exports=fn;var XS=Lx.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=IS,zx=fe,kS=XS;function Y(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Bx(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ix(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qp(t){if(Vo(t)!==t)throw Error(Y(188))}function WS(t){var e=t.alternate;if(!e){if(e=Vo(t),e===null)throw Error(Y(188));return e!==t?null:t}for(var n=t,i=e;;){var a=n.return;if(a===null)break;var r=a.alternate;if(r===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===r.child){for(r=a.child;r;){if(r===n)return qp(a),t;if(r===i)return qp(a),e;r=r.sibling}throw Error(Y(188))}if(n.return!==i.return)n=a,i=r;else{for(var s=!1,o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s){for(o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?t:e}function Hx(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Hx(t),e!==null)return e;t=t.sibling}return null}var yt=Object.assign,qS=Symbol.for("react.element"),cl=Symbol.for("react.transitional.element"),eo=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Gx=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),Vx=Symbol.for("react.consumer"),Pi=Symbol.for("react.context"),wh=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),oa=Symbol.for("react.lazy"),If=Symbol.for("react.activity"),YS=Symbol.for("react.memo_cache_sentinel"),Yp=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=Yp&&t[Yp]||t["@@iterator"],typeof t=="function"?t:null)}var jS=Symbol.for("react.client.reference");function Hf(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===jS?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case kr:return"Fragment";case zf:return"Profiler";case Gx:return"StrictMode";case Bf:return"Suspense";case Ff:return"SuspenseList";case If:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case eo:return"Portal";case Pi:return t.displayName||"Context";case Vx:return(t._context.displayName||"Context")+".Consumer";case wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:Hf(t.type)||"Memo";case oa:e=t._payload,t=t._init;try{return Hf(t(e))}catch{}}return null}var to=Array.isArray,De=zx.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=kS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rr={pending:!1,data:null,method:null,action:null},Gf=[],Wr=-1;function gi(t){return{current:t}}function Kt(t){0>Wr||(t.current=Gf[Wr],Gf[Wr]=null,Wr--)}function gt(t,e){Wr++,Gf[Wr]=t.current,t.current=e}var mi=gi(null),bo=gi(null),ba=gi(null),fc=gi(null);function dc(t,e){switch(gt(ba,e),gt(bo,t),gt(mi,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?$0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=$0(e),t=lv(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Kt(mi),gt(mi,t)}function fs(){Kt(mi),Kt(bo),Kt(ba)}function Vf(t){t.memoizedState!==null&&gt(fc,t);var e=mi.current,n=lv(e,t.type);e!==n&&(gt(bo,t),gt(mi,n))}function hc(t){bo.current===t&&(Kt(mi),Kt(bo)),fc.current===t&&(Kt(fc),No._currentValue=rr)}var bu,jp;function Qa(t){if(bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bu=e&&e[1]||"",jp=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+bu+t+jp}var yu=!1;function Mu(t,e){if(!t||yu)return"";yu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(p){var h=p}Reflect.construct(t,[],f)}else{try{f.call()}catch(p){h=p}t.call(f.prototype)}}else{try{throw Error()}catch(p){h=p}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(p){if(p&&h&&typeof p.stack=="string")return[p.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),s=r[0],o=r[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(a=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(i===l.length||a===c.length)for(i=l.length-1,a=c.length-1;1<=i&&0<=a&&l[i]!==c[a];)a--;for(;1<=i&&0<=a;i--,a--)if(l[i]!==c[a]){if(i!==1||a!==1)do if(i--,a--,0>a||l[i]!==c[a]){var d=`
`+l[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=a);break}}}finally{yu=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Qa(n):""}function ZS(t,e){switch(t.tag){case 26:case 27:case 5:return Qa(t.type);case 16:return Qa("Lazy");case 13:return t.child!==e&&e!==null?Qa("Suspense Fallback"):Qa("Suspense");case 19:return Qa("SuspenseList");case 0:case 15:return Mu(t.type,!1);case 11:return Mu(t.type.render,!1);case 1:return Mu(t.type,!0);case 31:return Qa("Activity");default:return""}}function Zp(t){try{var e="",n=null;do e+=ZS(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Xf=Object.prototype.hasOwnProperty,Uh=kt.unstable_scheduleCallback,Eu=kt.unstable_cancelCallback,KS=kt.unstable_shouldYield,QS=kt.unstable_requestPaint,Un=kt.unstable_now,JS=kt.unstable_getCurrentPriorityLevel,Xx=kt.unstable_ImmediatePriority,kx=kt.unstable_UserBlockingPriority,pc=kt.unstable_NormalPriority,$S=kt.unstable_LowPriority,Wx=kt.unstable_IdlePriority,eb=kt.log,tb=kt.unstable_setDisableYieldValue,Xo=null,Nn=null;function pa(t){if(typeof eb=="function"&&tb(t),Nn&&typeof Nn.setStrictMode=="function")try{Nn.setStrictMode(Xo,t)}catch{}}var Ln=Math.clz32?Math.clz32:ab,nb=Math.log,ib=Math.LN2;function ab(t){return t>>>=0,t===0?32:31-(nb(t)/ib|0)|0}var ul=256,fl=262144,dl=4194304;function Ja(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function jc(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var a=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?a=Ja(i):(s&=o,s!==0?a=Ja(s):n||(n=o&~t,n!==0&&(a=Ja(n))))):(o=i&~r,o!==0?a=Ja(o):s!==0?a=Ja(s):n||(n=i&~t,n!==0&&(a=Ja(n)))),a===0?0:e!==0&&e!==a&&!(e&r)&&(r=a&-a,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:a}function ko(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function rb(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qx(){var t=dl;return dl<<=1,!(dl&62914560)&&(dl=4194304),t}function Tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function sb(t,e,n,i,a,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,l=t.expirationTimes,c=t.hiddenUpdates;for(n=s&~n;0<n;){var d=31-Ln(n),f=1<<d;o[d]=0,l[d]=-1;var h=c[d];if(h!==null)for(c[d]=null,d=0;d<h.length;d++){var p=h[d];p!==null&&(p.lane&=-536870913)}n&=~f}i!==0&&Yx(t,i,0),r!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function Yx(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Ln(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function jx(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ln(n),a=1<<i;a&e|t[i]&e&&(t[i]|=e),n&=~a}}function Zx(t,e){var n=e&-e;return n=n&42?1:Nh(n),n&(t.suspendedLanes|e)?0:n}function Nh(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Lh(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Kx(){var t=at.p;return t!==0?t:(t=window.event,t===void 0?32:vv(t.type))}function Kp(t,e){var n=at.p;try{return at.p=t,e()}finally{at.p=n}}var Fa=Math.random().toString(36).slice(2),$t="__reactFiber$"+Fa,bn="__reactProps$"+Fa,ws="__reactContainer$"+Fa,kf="__reactEvents$"+Fa,ob="__reactListeners$"+Fa,lb="__reactHandles$"+Fa,Qp="__reactResources$"+Fa,qo="__reactMarker$"+Fa;function Oh(t){delete t[$t],delete t[bn],delete t[kf],delete t[ob],delete t[lb]}function qr(t){var e=t[$t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ws]||n[$t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[$t])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function Ds(t){if(t=t[$t]||t[ws]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function no(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(Y(33))}function ns(t){var e=t[Qp];return e||(e=t[Qp]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Zt(t){t[qo]=!0}var Qx=new Set,Jx={};function _r(t,e){ds(t,e),ds(t+"Capture",e)}function ds(t,e){for(Jx[t]=e,t=0;t<e.length;t++)Qx.add(e[t])}var cb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jp={},$p={};function ub(t){return Xf.call($p,t)?!0:Xf.call(Jp,t)?!1:cb.test(t)?$p[t]=!0:(Jp[t]=!0,!1)}function Wl(t,e,n){if(ub(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function hl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function vi(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Xn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $x(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fb(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var a=i.get,r=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wf(t){if(!t._valueTracker){var e=$x(t)?"checked":"value";t._valueTracker=fb(t,e,""+t[e])}}function eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$x(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function mc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var db=/[\n"\\]/g;function Yn(t){return t.replace(db,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function qf(t,e,n,i,a,r,s,o){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Xn(e)):t.value!==""+Xn(e)&&(t.value=""+Xn(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Yf(t,s,Xn(e)):n!=null?Yf(t,s,Xn(n)):i!=null&&t.removeAttribute("value"),a==null&&r!=null&&(t.defaultChecked=!!r),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+Xn(o):t.removeAttribute("name")}function tg(t,e,n,i,a,r,s,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null)){Wf(t);return}n=n!=null?""+Xn(n):"",e=e!=null?""+Xn(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??a,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s),Wf(t)}function Yf(t,e,n){e==="number"&&mc(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function is(t,e,n,i){if(t=t.options,e){e={};for(var a=0;a<n.length;a++)e["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=e.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xn(n),e=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,i&&(t[a].defaultSelected=!0);return}e!==null||t[a].disabled||(e=t[a])}e!==null&&(e.selected=!0)}}function ng(t,e,n){if(e!=null&&(e=""+Xn(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Xn(n):""}function ig(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(Y(92));if(to(i)){if(1<i.length)throw Error(Y(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Xn(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),Wf(t)}function hs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function e0(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||hb.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function ag(t,e,n){if(e!=null&&typeof e!="object")throw Error(Y(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var a in e)i=e[a],e.hasOwnProperty(a)&&n[a]!==i&&e0(t,a,i)}else for(var r in e)e.hasOwnProperty(r)&&e0(t,r,e[r])}function Ph(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(t){return mb.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var jf=null;function zh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yr=null,as=null;function t0(t){var e=Ds(t);if(e&&(t=e.stateNode)){var n=t[bn]||null;e:switch(t=e.stateNode,e.type){case"input":if(qf(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Yn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var a=i[bn]||null;if(!a)throw Error(Y(90));qf(i,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&eg(i)}break e;case"textarea":ng(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&is(t,!!n.multiple,e,!1)}}}var Au=!1;function rg(t,e,n){if(Au)return t(e,n);Au=!0;try{var i=t(e);return i}finally{if(Au=!1,(Yr!==null||as!==null)&&(su(),Yr&&(e=Yr,t=as,as=Yr=null,t0(e),t)))for(e=0;e<t.length;e++)t0(t[e])}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var i=n[bn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Y(231,e,typeof n));return n}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zf=!1;if(Wi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Zf=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Zf=!1}var ma=null,Bh=null,Yl=null;function sg(){if(Yl)return Yl;var t,e=Bh,n=e.length,i,a="value"in ma?ma.value:ma.textContent,r=a.length;for(t=0;t<n&&e[t]===a[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===a[r-i];i++);return Yl=a.slice(t,1<i?1-i:void 0)}function jl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function n0(){return!1}function yn(t){function e(n,i,a,r,s){this._reactName=n,this._targetInst=a,this.type=i,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?pl:n0,this.isPropagationStopped=n0,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zc=yn(vr),Yo=yt({},vr,{view:0,detail:0}),xb=yn(Yo),Ru,Cu,Xs,Kc=yt({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Ru=t.screenX-Xs.screenX,Cu=t.screenY-Xs.screenY):Cu=Ru=0,Xs=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Cu}}),i0=yn(Kc),gb=yt({},Kc,{dataTransfer:0}),_b=yn(gb),vb=yt({},Yo,{relatedTarget:0}),wu=yn(vb),Sb=yt({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),bb=yn(Sb),yb=yt({},vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Mb=yn(yb),Eb=yt({},vr,{data:0}),a0=yn(Eb),Tb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ab={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rb[t])?!!e[t]:!1}function Fh(){return Cb}var wb=yt({},Yo,{key:function(t){if(t.key){var e=Tb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=jl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ab[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fh,charCode:function(t){return t.type==="keypress"?jl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Db=yn(wb),Ub=yt({},Kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),r0=yn(Ub),Nb=yt({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fh}),Lb=yn(Nb),Ob=yt({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pb=yn(Ob),zb=yt({},Kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Bb=yn(zb),Fb=yt({},vr,{newState:0,oldState:0}),Ib=yn(Fb),Hb=[9,13,27,32],Ih=Wi&&"CompositionEvent"in window,oo=null;Wi&&"documentMode"in document&&(oo=document.documentMode);var Gb=Wi&&"TextEvent"in window&&!oo,og=Wi&&(!Ih||oo&&8<oo&&11>=oo),s0=" ",o0=!1;function lg(t,e){switch(t){case"keyup":return Hb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jr=!1;function Vb(t,e){switch(t){case"compositionend":return cg(e);case"keypress":return e.which!==32?null:(o0=!0,s0);case"textInput":return t=e.data,t===s0&&o0?null:t;default:return null}}function Xb(t,e){if(jr)return t==="compositionend"||!Ih&&lg(t,e)?(t=sg(),Yl=Bh=ma=null,jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return og&&e.locale!=="ko"?null:e.data;default:return null}}var kb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kb[t.type]:e==="textarea"}function ug(t,e,n,i){Yr?as?as.push(i):as=[i]:Yr=i,e=Lc(e,"onChange"),0<e.length&&(n=new Zc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var lo=null,Mo=null;function Wb(t){rv(t,0)}function Qc(t){var e=no(t);if(eg(e))return t}function c0(t,e){if(t==="change")return e}var fg=!1;if(Wi){var Du;if(Wi){var Uu="oninput"in document;if(!Uu){var u0=document.createElement("div");u0.setAttribute("oninput","return;"),Uu=typeof u0.oninput=="function"}Du=Uu}else Du=!1;fg=Du&&(!document.documentMode||9<document.documentMode)}function f0(){lo&&(lo.detachEvent("onpropertychange",dg),Mo=lo=null)}function dg(t){if(t.propertyName==="value"&&Qc(Mo)){var e=[];ug(e,Mo,t,zh(t)),rg(Wb,e)}}function qb(t,e,n){t==="focusin"?(f0(),lo=e,Mo=n,lo.attachEvent("onpropertychange",dg)):t==="focusout"&&f0()}function Yb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qc(Mo)}function jb(t,e){if(t==="click")return Qc(e)}function Zb(t,e){if(t==="input"||t==="change")return Qc(e)}function Kb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:Kb;function Eo(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var a=n[i];if(!Xf.call(e,a)||!Bn(t[a],e[a]))return!1}return!0}function d0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function h0(t,e){var n=d0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=d0(n)}}function hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function pg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=mc(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mc(t.document)}return e}function Hh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Qb=Wi&&"documentMode"in document&&11>=document.documentMode,Zr=null,Kf=null,co=null,Qf=!1;function p0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qf||Zr==null||Zr!==mc(i)||(i=Zr,"selectionStart"in i&&Hh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),co&&Eo(co,i)||(co=i,i=Lc(Kf,"onSelect"),0<i.length&&(e=new Zc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zr)))}function ka(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},Nu={},mg={};Wi&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Sr(t){if(Nu[t])return Nu[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in mg)return Nu[t]=e[n];return t}var xg=Sr("animationend"),gg=Sr("animationiteration"),_g=Sr("animationstart"),Jb=Sr("transitionrun"),$b=Sr("transitionstart"),ey=Sr("transitioncancel"),vg=Sr("transitionend"),Sg=new Map,Jf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jf.push("scrollEnd");function li(t,e){Sg.set(t,e),_r(e,[t])}var xc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Gn=[],Qr=0,Gh=0;function Jc(){for(var t=Qr,e=Gh=Qr=0;e<t;){var n=Gn[e];Gn[e++]=null;var i=Gn[e];Gn[e++]=null;var a=Gn[e];Gn[e++]=null;var r=Gn[e];if(Gn[e++]=null,i!==null&&a!==null){var s=i.pending;s===null?a.next=a:(a.next=s.next,s.next=a),i.pending=a}r!==0&&bg(n,a,r)}}function $c(t,e,n,i){Gn[Qr++]=t,Gn[Qr++]=e,Gn[Qr++]=n,Gn[Qr++]=i,Gh|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Vh(t,e,n,i){return $c(t,e,n,i),gc(t)}function br(t,e){return $c(t,null,null,e),gc(t)}function bg(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var a=!1,r=t.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(a=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,a&&e!==null&&(a=31-Ln(n),t=r.hiddenUpdates,i=t[a],i===null?t[a]=[e]:i.push(e),e.lane=n|536870912),r):null}function gc(t){if(50<vo)throw vo=0,vd=null,Error(Y(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Jr={};function ty(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new ty(t,e,n,i)}function Xh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function yg(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Zl(t,e,n,i,a,r){var s=0;if(i=t,typeof t=="function")Xh(t)&&(s=1);else if(typeof t=="string")s=sM(t,n,mi.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case If:return t=wn(31,n,e,a),t.elementType=If,t.lanes=r,t;case kr:return sr(n.children,a,r,e);case Gx:s=8,a|=24;break;case zf:return t=wn(12,n,e,a|2),t.elementType=zf,t.lanes=r,t;case Bf:return t=wn(13,n,e,a),t.elementType=Bf,t.lanes=r,t;case Ff:return t=wn(19,n,e,a),t.elementType=Ff,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pi:s=10;break e;case Vx:s=9;break e;case wh:s=11;break e;case Dh:s=14;break e;case oa:s=16,i=null;break e}s=29,n=Error(Y(130,t===null?"null":typeof t,"")),i=null}return e=wn(s,n,e,a),e.elementType=t,e.type=i,e.lanes=r,e}function sr(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function Lu(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Mg(t){var e=wn(18,null,null,0);return e.stateNode=t,e}function Ou(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var m0=new WeakMap;function jn(t,e){if(typeof t=="object"&&t!==null){var n=m0.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Zp(e)},m0.set(t,e),e)}return{value:t,source:e,stack:Zp(e)}}var $r=[],es=0,_c=null,To=0,kn=[],Wn=0,Na=null,fi=1,di="";function Ni(t,e){$r[es++]=To,$r[es++]=_c,_c=t,To=e}function Eg(t,e,n){kn[Wn++]=fi,kn[Wn++]=di,kn[Wn++]=Na,Na=t;var i=fi;t=di;var a=32-Ln(i)-1;i&=~(1<<a),n+=1;var r=32-Ln(e)+a;if(30<r){var s=a-a%5;r=(i&(1<<s)-1).toString(32),i>>=s,a-=s,fi=1<<32-Ln(e)+a|n<<a|i,di=r+t}else fi=1<<r|n<<a|i,di=t}function kh(t){t.return!==null&&(Ni(t,1),Eg(t,1,0))}function Wh(t){for(;t===_c;)_c=$r[--es],$r[es]=null,To=$r[--es],$r[es]=null;for(;t===Na;)Na=kn[--Wn],kn[Wn]=null,di=kn[--Wn],kn[Wn]=null,fi=kn[--Wn],kn[Wn]=null}function Tg(t,e){kn[Wn++]=fi,kn[Wn++]=di,kn[Wn++]=Na,fi=e.id,di=e.overflow,Na=t}var en=null,St=null,Qe=!1,ya=null,Zn=!1,$f=Error(Y(519));function La(t){var e=Error(Y(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(jn(e,t)),$f}function x0(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[$t]=t,e[bn]=i,n){case"dialog":Xe("cancel",e),Xe("close",e);break;case"iframe":case"object":case"embed":Xe("load",e);break;case"video":case"audio":for(n=0;n<Do.length;n++)Xe(Do[n],e);break;case"source":Xe("error",e);break;case"img":case"image":case"link":Xe("error",e),Xe("load",e);break;case"details":Xe("toggle",e);break;case"input":Xe("invalid",e),tg(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Xe("invalid",e);break;case"textarea":Xe("invalid",e),ig(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||ov(e.textContent,n)?(i.popover!=null&&(Xe("beforetoggle",e),Xe("toggle",e)),i.onScroll!=null&&Xe("scroll",e),i.onScrollEnd!=null&&Xe("scrollend",e),i.onClick!=null&&(e.onclick=zi),e=!0):e=!1,e||La(t,!0)}function g0(t){for(en=t.return;en;)switch(en.tag){case 5:case 31:case 13:Zn=!1;return;case 27:case 3:Zn=!0;return;default:en=en.return}}function Tr(t){if(t!==en)return!1;if(!Qe)return g0(t),Qe=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Ed(t.type,t.memoizedProps)),n=!n),n&&St&&La(t),g0(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(317));St=im(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(317));St=im(t)}else e===27?(e=St,Ia(t.type)?(t=Cd,Cd=null,St=t):St=e):St=en?Jn(t.stateNode.nextSibling):null;return!0}function fr(){St=en=null,Qe=!1}function Pu(){var t=ya;return t!==null&&(_n===null?_n=t:_n.push.apply(_n,t),ya=null),t}function Ao(t){ya===null?ya=[t]:ya.push(t)}var ed=gi(null),yr=null,Bi=null;function ca(t,e,n){gt(ed,e._currentValue),e._currentValue=n}function Gi(t){t._currentValue=ed.current,Kt(ed)}function td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function nd(t,e,n,i){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var r=a.dependencies;if(r!==null){var s=a.child;r=r.firstContext;e:for(;r!==null;){var o=r;r=a;for(var l=0;l<e.length;l++)if(o.context===e[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),td(r.return,n,t),i||(s=null);break e}r=o.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(Y(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),td(s,n,t),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Us(t,e,n,i){t=null;for(var a=e,r=!1;a!==null;){if(!r){if(a.flags&524288)r=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(Y(387));if(s=s.memoizedProps,s!==null){var o=a.type;Bn(a.pendingProps.value,s.value)||(t!==null?t.push(o):t=[o])}}else if(a===fc.current){if(s=a.alternate,s===null)throw Error(Y(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(No):t=[No])}a=a.return}t!==null&&nd(e,t,n,i),e.flags|=262144}function vc(t){for(t=t.firstContext;t!==null;){if(!Bn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){yr=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function tn(t){return Ag(yr,t)}function ml(t,e){return yr===null&&dr(t),Ag(t,e)}function Ag(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Bi===null){if(t===null)throw Error(Y(308));Bi=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Bi=Bi.next=e;return n}var ny=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},iy=kt.unstable_scheduleCallback,ay=kt.unstable_NormalPriority,Ht={$$typeof:Pi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qh(){return{controller:new ny,data:new Map,refCount:0}}function jo(t){t.refCount--,t.refCount===0&&iy(ay,function(){t.controller.abort()})}var uo=null,id=0,ps=0,rs=null;function ry(t,e){if(uo===null){var n=uo=[];id=0,ps=gp(),rs={status:"pending",value:void 0,then:function(i){n.push(i)}}}return id++,e.then(_0,_0),e}function _0(){if(--id===0&&uo!==null){rs!==null&&(rs.status="fulfilled");var t=uo;uo=null,ps=0,rs=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function sy(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var a=0;a<n.length;a++)(0,n[a])(e)},function(a){for(i.status="rejected",i.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),i}var v0=De.S;De.S=function(t,e){H_=Un(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&ry(t,e),v0!==null&&v0(t,e)};var or=gi(null);function Yh(){var t=or.current;return t!==null?t:mt.pooledCache}function Kl(t,e){e===null?gt(or,or.current):gt(or,e.pool)}function Rg(){var t=Yh();return t===null?null:{parent:Ht._currentValue,pool:t}}var Ns=Error(Y(460)),jh=Error(Y(474)),eu=Error(Y(542)),Sc={then:function(){}};function S0(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cg(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(zi,zi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,y0(t),t;default:if(typeof e.status=="string")e.then(zi,zi);else{if(t=mt,t!==null&&100<t.shellSuspendCounter)throw Error(Y(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=i}},function(i){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,y0(t),t}throw lr=e,Ns}}function $a(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(lr=n,Ns):n}}var lr=null;function b0(){if(lr===null)throw Error(Y(459));var t=lr;return lr=null,t}function y0(t){if(t===Ns||t===eu)throw Error(Y(483))}var ss=null,Ro=0;function xl(t){var e=Ro;return Ro+=1,ss===null&&(ss=[]),Cg(ss,t,e)}function ks(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function gl(t,e){throw e.$$typeof===qS?Error(Y(525)):(t=Object.prototype.toString.call(e),Error(Y(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function wg(t){function e(u,x){if(t){var g=u.deletions;g===null?(u.deletions=[x],u.flags|=16):g.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u){for(var x=new Map;u!==null;)u.key!==null?x.set(u.key,u):x.set(u.index,u),u=u.sibling;return x}function a(u,x){return u=Hi(u,x),u.index=0,u.sibling=null,u}function r(u,x,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<x?(u.flags|=67108866,x):g):(u.flags|=67108866,x)):(u.flags|=1048576,x)}function s(u){return t&&u.alternate===null&&(u.flags|=67108866),u}function o(u,x,g,b){return x===null||x.tag!==6?(x=Lu(g,u.mode,b),x.return=u,x):(x=a(x,g),x.return=u,x)}function l(u,x,g,b){var C=g.type;return C===kr?d(u,x,g.props.children,b,g.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===oa&&$a(C)===x.type)?(x=a(x,g.props),ks(x,g),x.return=u,x):(x=Zl(g.type,g.key,g.props,null,u.mode,b),ks(x,g),x.return=u,x)}function c(u,x,g,b){return x===null||x.tag!==4||x.stateNode.containerInfo!==g.containerInfo||x.stateNode.implementation!==g.implementation?(x=Ou(g,u.mode,b),x.return=u,x):(x=a(x,g.children||[]),x.return=u,x)}function d(u,x,g,b,C){return x===null||x.tag!==7?(x=sr(g,u.mode,b,C),x.return=u,x):(x=a(x,g),x.return=u,x)}function f(u,x,g){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Lu(""+x,u.mode,g),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case cl:return g=Zl(x.type,x.key,x.props,null,u.mode,g),ks(g,x),g.return=u,g;case eo:return x=Ou(x,u.mode,g),x.return=u,x;case oa:return x=$a(x),f(u,x,g)}if(to(x)||Gs(x))return x=sr(x,u.mode,g,null),x.return=u,x;if(typeof x.then=="function")return f(u,xl(x),g);if(x.$$typeof===Pi)return f(u,ml(u,x),g);gl(u,x)}return null}function h(u,x,g,b){var C=x!==null?x.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return C!==null?null:o(u,x,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case cl:return g.key===C?l(u,x,g,b):null;case eo:return g.key===C?c(u,x,g,b):null;case oa:return g=$a(g),h(u,x,g,b)}if(to(g)||Gs(g))return C!==null?null:d(u,x,g,b,null);if(typeof g.then=="function")return h(u,x,xl(g),b);if(g.$$typeof===Pi)return h(u,x,ml(u,g),b);gl(u,g)}return null}function p(u,x,g,b,C){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return u=u.get(g)||null,o(x,u,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case cl:return u=u.get(b.key===null?g:b.key)||null,l(x,u,b,C);case eo:return u=u.get(b.key===null?g:b.key)||null,c(x,u,b,C);case oa:return b=$a(b),p(u,x,g,b,C)}if(to(b)||Gs(b))return u=u.get(g)||null,d(x,u,b,C,null);if(typeof b.then=="function")return p(u,x,g,xl(b),C);if(b.$$typeof===Pi)return p(u,x,g,ml(x,b),C);gl(x,b)}return null}function _(u,x,g,b){for(var C=null,T=null,R=x,N=x=0,E=null;R!==null&&N<g.length;N++){R.index>N?(E=R,R=null):E=R.sibling;var y=h(u,R,g[N],b);if(y===null){R===null&&(R=E);break}t&&R&&y.alternate===null&&e(u,R),x=r(y,x,N),T===null?C=y:T.sibling=y,T=y,R=E}if(N===g.length)return n(u,R),Qe&&Ni(u,N),C;if(R===null){for(;N<g.length;N++)R=f(u,g[N],b),R!==null&&(x=r(R,x,N),T===null?C=R:T.sibling=R,T=R);return Qe&&Ni(u,N),C}for(R=i(R);N<g.length;N++)E=p(R,u,N,g[N],b),E!==null&&(t&&E.alternate!==null&&R.delete(E.key===null?N:E.key),x=r(E,x,N),T===null?C=E:T.sibling=E,T=E);return t&&R.forEach(function(U){return e(u,U)}),Qe&&Ni(u,N),C}function v(u,x,g,b){if(g==null)throw Error(Y(151));for(var C=null,T=null,R=x,N=x=0,E=null,y=g.next();R!==null&&!y.done;N++,y=g.next()){R.index>N?(E=R,R=null):E=R.sibling;var U=h(u,R,y.value,b);if(U===null){R===null&&(R=E);break}t&&R&&U.alternate===null&&e(u,R),x=r(U,x,N),T===null?C=U:T.sibling=U,T=U,R=E}if(y.done)return n(u,R),Qe&&Ni(u,N),C;if(R===null){for(;!y.done;N++,y=g.next())y=f(u,y.value,b),y!==null&&(x=r(y,x,N),T===null?C=y:T.sibling=y,T=y);return Qe&&Ni(u,N),C}for(R=i(R);!y.done;N++,y=g.next())y=p(R,u,N,y.value,b),y!==null&&(t&&y.alternate!==null&&R.delete(y.key===null?N:y.key),x=r(y,x,N),T===null?C=y:T.sibling=y,T=y);return t&&R.forEach(function(I){return e(u,I)}),Qe&&Ni(u,N),C}function m(u,x,g,b){if(typeof g=="object"&&g!==null&&g.type===kr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case cl:e:{for(var C=g.key;x!==null;){if(x.key===C){if(C=g.type,C===kr){if(x.tag===7){n(u,x.sibling),b=a(x,g.props.children),b.return=u,u=b;break e}}else if(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===oa&&$a(C)===x.type){n(u,x.sibling),b=a(x,g.props),ks(b,g),b.return=u,u=b;break e}n(u,x);break}else e(u,x);x=x.sibling}g.type===kr?(b=sr(g.props.children,u.mode,b,g.key),b.return=u,u=b):(b=Zl(g.type,g.key,g.props,null,u.mode,b),ks(b,g),b.return=u,u=b)}return s(u);case eo:e:{for(C=g.key;x!==null;){if(x.key===C)if(x.tag===4&&x.stateNode.containerInfo===g.containerInfo&&x.stateNode.implementation===g.implementation){n(u,x.sibling),b=a(x,g.children||[]),b.return=u,u=b;break e}else{n(u,x);break}else e(u,x);x=x.sibling}b=Ou(g,u.mode,b),b.return=u,u=b}return s(u);case oa:return g=$a(g),m(u,x,g,b)}if(to(g))return _(u,x,g,b);if(Gs(g)){if(C=Gs(g),typeof C!="function")throw Error(Y(150));return g=C.call(g),v(u,x,g,b)}if(typeof g.then=="function")return m(u,x,xl(g),b);if(g.$$typeof===Pi)return m(u,x,ml(u,g),b);gl(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,x!==null&&x.tag===6?(n(u,x.sibling),b=a(x,g),b.return=u,u=b):(n(u,x),b=Lu(g,u.mode,b),b.return=u,u=b),s(u)):n(u,x)}return function(u,x,g,b){try{Ro=0;var C=m(u,x,g,b);return ss=null,C}catch(R){if(R===Ns||R===eu)throw R;var T=wn(29,R,null,u.mode);return T.lanes=b,T.return=u,T}finally{}}}var hr=wg(!0),Dg=wg(!1),la=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ad(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var a=i.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),i.pending=e,e=gc(t),bg(t,null,n),e}return $c(t,i,e,n),gc(t)}function fo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jx(t,n)}}function zu(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var a=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?a=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?a=r=e:r=r.next=e}else a=r=e;n={baseState:i.baseState,firstBaseUpdate:a,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var rd=!1;function ho(){if(rd){var t=rs;if(t!==null)throw t}}function po(t,e,n,i){rd=!1;var a=t.updateQueue;la=!1;var r=a.firstBaseUpdate,s=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?r=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==s&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(r!==null){var f=a.baseState;s=0,d=c=l=null,o=r;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(Ze&h)===h:(i&h)===h){h!==0&&h===ps&&(rd=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var _=t,v=o;h=e;var m=n;switch(v.tag){case 1:if(_=v.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=yt({},f,h);break e;case 2:la=!0}}h=o.callback,h!==null&&(t.flags|=64,p&&(t.flags|=8192),p=a.callbacks,p===null?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,s|=h;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;p=o,o=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=d,r===null&&(a.shared.lanes=0),Pa|=s,t.lanes=s,t.memoizedState=f}}function Ug(t,e){if(typeof t!="function")throw Error(Y(191,t));t.call(e)}function Ng(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Ug(n[t],e)}var ms=gi(null),bc=gi(0);function M0(t,e){t=Zi,gt(bc,t),gt(ms,e),Zi=t|e.baseLanes}function sd(){gt(bc,Zi),gt(ms,ms.current)}function Kh(){Zi=bc.current,Kt(ms),Kt(bc)}var Fn=gi(null),Qn=null;function ua(t){var e=t.alternate;gt(Lt,Lt.current&1),gt(Fn,t),Qn===null&&(e===null||ms.current!==null||e.memoizedState!==null)&&(Qn=t)}function od(t){gt(Lt,Lt.current),gt(Fn,t),Qn===null&&(Qn=t)}function Lg(t){t.tag===22?(gt(Lt,Lt.current),gt(Fn,t),Qn===null&&(Qn=t)):fa()}function fa(){gt(Lt,Lt.current),gt(Fn,Fn.current)}function Cn(t){Kt(Fn),Qn===t&&(Qn=null),Kt(Lt)}var Lt=gi(0);function yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ad(n)||Rd(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qi=0,Fe=null,ft=null,Ft=null,Mc=!1,os=!1,pr=!1,Ec=0,Co=0,ls=null,oy=0;function Dt(){throw Error(Y(321))}function Qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function Jh(t,e,n,i,a,r){return qi=r,Fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,De.H=t===null||t.memoizedState===null?u_:cp,pr=!1,r=n(i,a),pr=!1,os&&(r=Pg(e,n,i,a)),Og(t),r}function Og(t){De.H=wo;var e=ft!==null&&ft.next!==null;if(qi=0,Ft=ft=Fe=null,Mc=!1,Co=0,ls=null,e)throw Error(Y(300));t===null||Gt||(t=t.dependencies,t!==null&&vc(t)&&(Gt=!0))}function Pg(t,e,n,i){Fe=t;var a=0;do{if(os&&(ls=null),Co=0,os=!1,25<=a)throw Error(Y(301));if(a+=1,Ft=ft=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}De.H=f_,r=e(n,i)}while(os);return r}function ly(){var t=De.H,e=t.useState()[0];return e=typeof e.then=="function"?Zo(e):e,t=t.useState()[0],(ft!==null?ft.memoizedState:null)!==t&&(Fe.flags|=1024),e}function $h(){var t=Ec!==0;return Ec=0,t}function ep(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function tp(t){if(Mc){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Mc=!1}qi=0,Ft=ft=Fe=null,os=!1,Co=Ec=0,ls=null}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?Fe.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function zt(){if(ft===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=ft.next;var e=Ft===null?Fe.memoizedState:Ft.next;if(e!==null)Ft=e,ft=t;else{if(t===null)throw Fe.alternate===null?Error(Y(467)):Error(Y(310));ft=t,t={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},Ft===null?Fe.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(t){var e=Co;return Co+=1,ls===null&&(ls=[]),t=Cg(ls,t,e),e=Fe,(Ft===null?e.memoizedState:Ft.next)===null&&(e=e.alternate,De.H=e===null||e.memoizedState===null?u_:cp),t}function nu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zo(t);if(t.$$typeof===Pi)return tn(t)}throw Error(Y(438,String(t)))}function np(t){var e=null,n=Fe.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=Fe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=tu(),Fe.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=YS;return e.index++,n}function Yi(t,e){return typeof e=="function"?e(t):e}function Ql(t){var e=zt();return ip(e,ft,t)}function ip(t,e,n){var i=t.queue;if(i===null)throw Error(Y(311));i.lastRenderedReducer=n;var a=t.baseQueue,r=i.pending;if(r!==null){if(a!==null){var s=a.next;a.next=r.next,r.next=s}e.baseQueue=a=r,i.pending=null}if(r=t.baseState,a===null)t.memoizedState=r;else{e=a.next;var o=s=null,l=null,c=e,d=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(Ze&f)===f:(qi&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===ps&&(d=!0);else if((qi&h)===h){c=c.next,h===ps&&(d=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=r):l=l.next=f,Fe.lanes|=h,Pa|=h;f=c.action,pr&&n(r,f),r=c.hasEagerState?c.eagerState:n(r,f)}else h={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=r):l=l.next=h,Fe.lanes|=f,Pa|=f;c=c.next}while(c!==null&&c!==e);if(l===null?s=r:l.next=o,!Bn(r,t.memoizedState)&&(Gt=!0,d&&(n=rs,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=l,i.lastRenderedState=r}return a===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function Bu(t){var e=zt(),n=e.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=t;var i=n.dispatch,a=n.pending,r=e.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do r=t(r,s.action),s=s.next;while(s!==a);Bn(r,e.memoizedState)||(Gt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,i]}function zg(t,e,n){var i=Fe,a=zt(),r=Qe;if(r){if(n===void 0)throw Error(Y(407));n=n()}else n=e();var s=!Bn((ft||a).memoizedState,n);if(s&&(a.memoizedState=n,Gt=!0),a=a.queue,ap(Ig.bind(null,i,a,t),[t]),a.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(i.flags|=2048,xs(9,{destroy:void 0},Fg.bind(null,i,a,n,e),null),mt===null)throw Error(Y(349));r||qi&127||Bg(i,e,n)}return n}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Fe.updateQueue,e===null?(e=tu(),Fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fg(t,e,n,i){e.value=n,e.getSnapshot=i,Hg(e)&&Gg(t)}function Ig(t,e,n){return n(function(){Hg(e)&&Gg(t)})}function Hg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function Gg(t){var e=br(t,2);e!==null&&vn(e,t,2)}function ld(t){var e=ln();if(typeof t=="function"){var n=t;if(t=n(),pr){pa(!0);try{n()}finally{pa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},e}function Vg(t,e,n,i){return t.baseState=n,ip(t,ft,typeof i=="function"?i:Yi)}function cy(t,e,n,i,a){if(au(t))throw Error(Y(485));if(t=e.action,t!==null){var r={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};De.T!==null?n(!0):r.isTransition=!1,i(r),n=e.pending,n===null?(r.next=e.pending=r,Xg(e,r)):(r.next=n.next,e.pending=n.next=r)}}function Xg(t,e){var n=e.action,i=e.payload,a=t.state;if(e.isTransition){var r=De.T,s={};De.T=s;try{var o=n(a,i),l=De.S;l!==null&&l(s,o),E0(t,e,o)}catch(c){cd(t,e,c)}finally{r!==null&&s.types!==null&&(r.types=s.types),De.T=r}}else try{r=n(a,i),E0(t,e,r)}catch(c){cd(t,e,c)}}function E0(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){T0(t,e,i)},function(i){return cd(t,e,i)}):T0(t,e,n)}function T0(t,e,n){e.status="fulfilled",e.value=n,kg(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Xg(t,n)))}function cd(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,kg(e),e=e.next;while(e!==i)}t.action=null}function kg(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Wg(t,e){return e}function A0(t,e){if(Qe){var n=mt.formState;if(n!==null){e:{var i=Fe;if(Qe){if(St){t:{for(var a=St,r=Zn;a.nodeType!==8;){if(!r){a=null;break t}if(a=Jn(a.nextSibling),a===null){a=null;break t}}r=a.data,a=r==="F!"||r==="F"?a:null}if(a){St=Jn(a.nextSibling),i=a.data==="F!";break e}}La(i)}i=!1}i&&(e=n[0])}}return n=ln(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wg,lastRenderedState:e},n.queue=i,n=o_.bind(null,Fe,i),i.dispatch=n,i=ld(!1),r=lp.bind(null,Fe,!1,i.queue),i=ln(),a={state:e,dispatch:null,action:t,pending:null},i.queue=a,n=cy.bind(null,Fe,a,r,n),a.dispatch=n,i.memoizedState=t,[e,n,!1]}function R0(t){var e=zt();return qg(e,ft,t)}function qg(t,e,n){if(e=ip(t,e,Wg)[0],t=Ql(Yi)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=Zo(e)}catch(s){throw s===Ns?eu:s}else i=e;e=zt();var a=e.queue,r=a.dispatch;return n!==e.memoizedState&&(Fe.flags|=2048,xs(9,{destroy:void 0},uy.bind(null,a,n),null)),[i,r,t]}function uy(t,e){t.action=e}function C0(t){var e=zt(),n=ft;if(n!==null)return qg(e,n,t);zt(),e=e.memoizedState,n=zt();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function xs(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=Fe.updateQueue,e===null&&(e=tu(),Fe.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function Yg(){return zt().memoizedState}function Jl(t,e,n,i){var a=ln();Fe.flags|=t,a.memoizedState=xs(1|e,{destroy:void 0},n,i===void 0?null:i)}function iu(t,e,n,i){var a=zt();i=i===void 0?null:i;var r=a.memoizedState.inst;ft!==null&&i!==null&&Qh(i,ft.memoizedState.deps)?a.memoizedState=xs(e,r,n,i):(Fe.flags|=t,a.memoizedState=xs(1|e,r,n,i))}function w0(t,e){Jl(8390656,8,t,e)}function ap(t,e){iu(2048,8,t,e)}function fy(t){Fe.flags|=4;var e=Fe.updateQueue;if(e===null)e=tu(),Fe.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function jg(t){var e=zt().memoizedState;return fy({ref:e,nextImpl:t}),function(){if(it&2)throw Error(Y(440));return e.impl.apply(void 0,arguments)}}function Zg(t,e){return iu(4,2,t,e)}function Kg(t,e){return iu(4,4,t,e)}function Qg(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jg(t,e,n){n=n!=null?n.concat([t]):null,iu(4,4,Qg.bind(null,e,t),n)}function rp(){}function $g(t,e){var n=zt();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&Qh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function e_(t,e){var n=zt();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&Qh(e,i[1]))return i[0];if(i=t(),pr){pa(!0);try{t()}finally{pa(!1)}}return n.memoizedState=[i,e],i}function sp(t,e,n){return n===void 0||qi&1073741824&&!(Ze&261930)?t.memoizedState=e:(t.memoizedState=n,t=V_(),Fe.lanes|=t,Pa|=t,n)}function t_(t,e,n,i){return Bn(n,e)?n:ms.current!==null?(t=sp(t,n,i),Bn(t,e)||(Gt=!0),t):!(qi&42)||qi&1073741824&&!(Ze&261930)?(Gt=!0,t.memoizedState=n):(t=V_(),Fe.lanes|=t,Pa|=t,e)}function n_(t,e,n,i,a){var r=at.p;at.p=r!==0&&8>r?r:8;var s=De.T,o={};De.T=o,lp(t,!1,e,n);try{var l=a(),c=De.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var d=sy(l,i);mo(t,e,d,On(t))}else mo(t,e,i,On(t))}catch(f){mo(t,e,{then:function(){},status:"rejected",reason:f},On())}finally{at.p=r,s!==null&&o.types!==null&&(s.types=o.types),De.T=s}}function dy(){}function ud(t,e,n,i){if(t.tag!==5)throw Error(Y(476));var a=i_(t).queue;n_(t,a,e,rr,n===null?dy:function(){return a_(t),n(i)})}function i_(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:rr,baseState:rr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:rr},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function a_(t){var e=i_(t);e.next===null&&(e=t.alternate.memoizedState),mo(t,e.next.queue,{},On())}function op(){return tn(No)}function r_(){return zt().memoizedState}function s_(){return zt().memoizedState}function hy(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=On();t=Ma(n);var i=Ea(e,t,n);i!==null&&(vn(i,e,n),fo(i,e,n)),e={cache:qh()},t.payload=e;return}e=e.return}}function py(t,e,n){var i=On();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},au(t)?l_(e,n):(n=Vh(t,e,n,i),n!==null&&(vn(n,t,i),c_(n,e,i)))}function o_(t,e,n){var i=On();mo(t,e,n,i)}function mo(t,e,n,i){var a={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(au(t))l_(e,a);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,o=r(s,n);if(a.hasEagerState=!0,a.eagerState=o,Bn(o,s))return $c(t,e,a,0),mt===null&&Jc(),!1}catch{}finally{}if(n=Vh(t,e,a,i),n!==null)return vn(n,t,i),c_(n,e,i),!0}return!1}function lp(t,e,n,i){if(i={lane:2,revertLane:gp(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},au(t)){if(e)throw Error(Y(479))}else e=Vh(t,n,i,2),e!==null&&vn(e,t,2)}function au(t){var e=t.alternate;return t===Fe||e!==null&&e===Fe}function l_(t,e){os=Mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function c_(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,jx(t,n)}}var wo={readContext:tn,use:nu,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt};wo.useEffectEvent=Dt;var u_={readContext:tn,use:nu,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:w0,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Jl(4194308,4,Qg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Jl(4194308,4,t,e)},useInsertionEffect:function(t,e){Jl(4,2,t,e)},useMemo:function(t,e){var n=ln();e=e===void 0?null:e;var i=t();if(pr){pa(!0);try{t()}finally{pa(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=ln();if(n!==void 0){var a=n(e);if(pr){pa(!0);try{n(e)}finally{pa(!1)}}}else a=e;return i.memoizedState=i.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},i.queue=t,t=t.dispatch=py.bind(null,Fe,t),[i.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:function(t){t=ld(t);var e=t.queue,n=o_.bind(null,Fe,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:rp,useDeferredValue:function(t,e){var n=ln();return sp(n,t,e)},useTransition:function(){var t=ld(!1);return t=n_.bind(null,Fe,t.queue,!0,!1),ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=Fe,a=ln();if(Qe){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=e(),mt===null)throw Error(Y(349));Ze&127||Bg(i,e,n)}a.memoizedState=n;var r={value:n,getSnapshot:e};return a.queue=r,w0(Ig.bind(null,i,r,t),[t]),i.flags|=2048,xs(9,{destroy:void 0},Fg.bind(null,i,r,n,e),null),n},useId:function(){var t=ln(),e=mt.identifierPrefix;if(Qe){var n=di,i=fi;n=(i&~(1<<32-Ln(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Ec++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=oy++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:op,useFormState:A0,useActionState:A0,useOptimistic:function(t){var e=ln();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=lp.bind(null,Fe,!0,n),n.dispatch=e,[t,e]},useMemoCache:np,useCacheRefresh:function(){return ln().memoizedState=hy.bind(null,Fe)},useEffectEvent:function(t){var e=ln(),n={impl:t};return e.memoizedState=n,function(){if(it&2)throw Error(Y(440));return n.impl.apply(void 0,arguments)}}},cp={readContext:tn,use:nu,useCallback:$g,useContext:tn,useEffect:ap,useImperativeHandle:Jg,useInsertionEffect:Zg,useLayoutEffect:Kg,useMemo:e_,useReducer:Ql,useRef:Yg,useState:function(){return Ql(Yi)},useDebugValue:rp,useDeferredValue:function(t,e){var n=zt();return t_(n,ft.memoizedState,t,e)},useTransition:function(){var t=Ql(Yi)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:Zo(t),e]},useSyncExternalStore:zg,useId:r_,useHostTransitionStatus:op,useFormState:R0,useActionState:R0,useOptimistic:function(t,e){var n=zt();return Vg(n,ft,t,e)},useMemoCache:np,useCacheRefresh:s_};cp.useEffectEvent=jg;var f_={readContext:tn,use:nu,useCallback:$g,useContext:tn,useEffect:ap,useImperativeHandle:Jg,useInsertionEffect:Zg,useLayoutEffect:Kg,useMemo:e_,useReducer:Bu,useRef:Yg,useState:function(){return Bu(Yi)},useDebugValue:rp,useDeferredValue:function(t,e){var n=zt();return ft===null?sp(n,t,e):t_(n,ft.memoizedState,t,e)},useTransition:function(){var t=Bu(Yi)[0],e=zt().memoizedState;return[typeof t=="boolean"?t:Zo(t),e]},useSyncExternalStore:zg,useId:r_,useHostTransitionStatus:op,useFormState:C0,useActionState:C0,useOptimistic:function(t,e){var n=zt();return ft!==null?Vg(n,ft,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:np,useCacheRefresh:s_};f_.useEffectEvent=jg;function Fu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fd={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=On(),a=Ma(i);a.payload=e,n!=null&&(a.callback=n),e=Ea(t,a,i),e!==null&&(vn(e,t,i),fo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=On(),a=Ma(i);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Ea(t,a,i),e!==null&&(vn(e,t,i),fo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=On(),i=Ma(n);i.tag=2,e!=null&&(i.callback=e),e=Ea(t,i,n),e!==null&&(vn(e,t,n),fo(e,t,n))}};function D0(t,e,n,i,a,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,r,s):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,i)||!Eo(a,r):!0}function U0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fd.enqueueReplaceState(e,e.state,null)}function mr(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=yt({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function d_(t){xc(t)}function h_(t){console.error(t)}function p_(t){xc(t)}function Tc(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function N0(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function dd(t,e,n){return n=Ma(n),n.tag=3,n.payload={element:null},n.callback=function(){Tc(t,e)},n}function m_(t){return t=Ma(t),t.tag=3,t}function x_(t,e,n,i){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var r=i.value;t.payload=function(){return a(r)},t.callback=function(){N0(e,n,i)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){N0(e,n,i),typeof a!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function my(t,e,n,i,a){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Us(e,n,a,!0),n=Fn.current,n!==null){switch(n.tag){case 31:case 13:return Qn===null?Dc():n.alternate===null&&Ut===0&&(Ut=3),n.flags&=-257,n.flags|=65536,n.lanes=a,i===Sc?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Zu(t,i,a)),!1;case 22:return n.flags|=65536,i===Sc?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Zu(t,i,a)),!1}throw Error(Y(435,n.tag))}return Zu(t,i,a),Dc(),!1}if(Qe)return e=Fn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=a,i!==$f&&(t=Error(Y(422),{cause:i}),Ao(jn(t,n)))):(i!==$f&&(e=Error(Y(423),{cause:i}),Ao(jn(e,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,i=jn(i,n),a=dd(t.stateNode,i,a),zu(t,a),Ut!==4&&(Ut=2)),!1;var r=Error(Y(520),{cause:i});if(r=jn(r,n),_o===null?_o=[r]:_o.push(r),Ut!==4&&(Ut=2),e===null)return!0;i=jn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=dd(n.stateNode,i,t),zu(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Ta===null||!Ta.has(r))))return n.flags|=65536,a&=-a,n.lanes|=a,a=m_(a),x_(a,t,n,i),zu(n,a),!1}n=n.return}while(n!==null);return!1}var up=Error(Y(461)),Gt=!1;function Jt(t,e,n,i){e.child=t===null?Dg(e,null,n,i):hr(e,t.child,n,i)}function L0(t,e,n,i,a){n=n.render;var r=e.ref;if("ref"in i){var s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}else s=i;return dr(e),i=Jh(t,e,n,s,r,a),o=$h(),t!==null&&!Gt?(ep(t,e,a),ji(t,e,a)):(Qe&&o&&kh(e),e.flags|=1,Jt(t,e,i,a),e.child)}function O0(t,e,n,i,a){if(t===null){var r=n.type;return typeof r=="function"&&!Xh(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,g_(t,e,r,i,a)):(t=Zl(n.type,null,i,e,e.mode,a),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!fp(t,a)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(s,i)&&t.ref===e.ref)return ji(t,e,a)}return e.flags|=1,t=Hi(r,i),t.ref=e.ref,t.return=e,e.child=t}function g_(t,e,n,i,a){if(t!==null){var r=t.memoizedProps;if(Eo(r,i)&&t.ref===e.ref)if(Gt=!1,e.pendingProps=i=r,fp(t,a))t.flags&131072&&(Gt=!0);else return e.lanes=t.lanes,ji(t,e,a)}return hd(t,e,n,i,a)}function __(t,e,n,i){var a=i.children,r=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(r=r!==null?r.baseLanes|n:n,t!==null){for(i=e.child=t.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;i=a&~r}else i=0,e.child=null;return P0(t,e,r,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Kl(e,r!==null?r.cachePool:null),r!==null?M0(e,r):sd(),Lg(e);else return i=e.lanes=536870912,P0(t,e,r!==null?r.baseLanes|n:n,n,i)}else r!==null?(Kl(e,r.cachePool),M0(e,r),fa(),e.memoizedState=null):(t!==null&&Kl(e,null),sd(),fa());return Jt(t,e,a,n),e.child}function io(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function P0(t,e,n,i,a){var r=Yh();return r=r===null?null:{parent:Ht._currentValue,pool:r},e.memoizedState={baseLanes:n,cachePool:r},t!==null&&Kl(e,null),sd(),Lg(e),t!==null&&Us(t,e,i,!0),e.childLanes=a,null}function $l(t,e){return e=Ac({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function z0(t,e,n){return hr(e,t.child,null,n),t=$l(e,e.pendingProps),t.flags|=2,Cn(e),e.memoizedState=null,t}function xy(t,e,n){var i=e.pendingProps,a=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(Qe){if(i.mode==="hidden")return t=$l(e,i),e.lanes=536870912,io(null,t);if(od(e),(t=St)?(t=uv(t,Zn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Na!==null?{id:fi,overflow:di}:null,retryLane:536870912,hydrationErrors:null},n=Mg(t),n.return=e,e.child=n,en=e,St=null)):t=null,t===null)throw La(e);return e.lanes=536870912,null}return $l(e,i)}var r=t.memoizedState;if(r!==null){var s=r.dehydrated;if(od(e),a)if(e.flags&256)e.flags&=-257,e=z0(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(Y(558));else if(Gt||Us(t,e,n,!1),a=(n&t.childLanes)!==0,Gt||a){if(i=mt,i!==null&&(s=Zx(i,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,br(t,s),vn(i,t,s),up;Dc(),e=z0(t,e,n)}else t=r.treeContext,St=Jn(s.nextSibling),en=e,Qe=!0,ya=null,Zn=!1,t!==null&&Tg(e,t),e=$l(e,i),e.flags|=4096;return e}return t=Hi(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function ec(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Y(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function hd(t,e,n,i,a){return dr(e),n=Jh(t,e,n,i,void 0,a),i=$h(),t!==null&&!Gt?(ep(t,e,a),ji(t,e,a)):(Qe&&i&&kh(e),e.flags|=1,Jt(t,e,n,a),e.child)}function B0(t,e,n,i,a,r){return dr(e),e.updateQueue=null,n=Pg(e,i,n,a),Og(t),i=$h(),t!==null&&!Gt?(ep(t,e,r),ji(t,e,r)):(Qe&&i&&kh(e),e.flags|=1,Jt(t,e,n,r),e.child)}function F0(t,e,n,i,a){if(dr(e),e.stateNode===null){var r=Jr,s=n.contextType;typeof s=="object"&&s!==null&&(r=tn(s)),r=new n(i,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=fd,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=i,r.state=e.memoizedState,r.refs={},Zh(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?tn(s):Jr,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Fu(e,n,s,i),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&fd.enqueueReplaceState(r,r.state,null),po(e,i,r,a),ho(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){r=e.stateNode;var o=e.memoizedProps,l=mr(n,o);r.props=l;var c=r.context,d=n.contextType;s=Jr,typeof d=="object"&&d!==null&&(s=tn(d));var f=n.getDerivedStateFromProps;d=typeof f=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==s)&&U0(e,r,i,s),la=!1;var h=e.memoizedState;r.state=h,po(e,i,r,a),ho(),c=e.memoizedState,o||h!==c||la?(typeof f=="function"&&(Fu(e,n,f,i),c=e.memoizedState),(l=la||D0(e,n,l,i,h,c,s))?(d||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),r.props=i,r.state=c,r.context=s,i=l):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{r=e.stateNode,ad(t,e),s=e.memoizedProps,d=mr(n,s),r.props=d,f=e.pendingProps,h=r.context,c=n.contextType,l=Jr,typeof c=="object"&&c!==null&&(l=tn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==f||h!==l)&&U0(e,r,i,l),la=!1,h=e.memoizedState,r.state=h,po(e,i,r,a),ho();var p=e.memoizedState;s!==f||h!==p||la||t!==null&&t.dependencies!==null&&vc(t.dependencies)?(typeof o=="function"&&(Fu(e,n,o,i),p=e.memoizedState),(d=la||D0(e,n,d,i,h,p,l)||t!==null&&t.dependencies!==null&&vc(t.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),r.props=i,r.state=p,r.context=l,i=d):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return r=i,ec(t,e),i=(e.flags&128)!==0,r||i?(r=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&i?(e.child=hr(e,t.child,null,a),e.child=hr(e,null,n,a)):Jt(t,e,n,a),e.memoizedState=r.state,t=e.child):t=ji(t,e,a),t}function I0(t,e,n,i){return fr(),e.flags|=256,Jt(t,e,n,i),e.child}var Iu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hu(t){return{baseLanes:t,cachePool:Rg()}}function Gu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Dn),t}function v_(t,e,n){var i=e.pendingProps,a=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Lt.current&2)!==0),s&&(a=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(Qe){if(a?ua(e):fa(),(t=St)?(t=uv(t,Zn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Na!==null?{id:fi,overflow:di}:null,retryLane:536870912,hydrationErrors:null},n=Mg(t),n.return=e,e.child=n,en=e,St=null)):t=null,t===null)throw La(e);return Rd(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,a?(fa(),a=e.mode,o=Ac({mode:"hidden",children:o},a),i=sr(i,a,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=Hu(n),i.childLanes=Gu(t,s,n),e.memoizedState=Iu,io(null,i)):(ua(e),pd(e,o))}var l=t.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(r)e.flags&256?(ua(e),e.flags&=-257,e=Vu(t,e,n)):e.memoizedState!==null?(fa(),e.child=t.child,e.flags|=128,e=null):(fa(),o=i.fallback,a=e.mode,i=Ac({mode:"visible",children:i.children},a),o=sr(o,a,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,hr(e,t.child,null,n),i=e.child,i.memoizedState=Hu(n),i.childLanes=Gu(t,s,n),e.memoizedState=Iu,e=io(null,i));else if(ua(e),Rd(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,i=Error(Y(419)),i.stack="",i.digest=s,Ao({value:i,source:null,stack:null}),e=Vu(t,e,n)}else if(Gt||Us(t,e,n,!1),s=(n&t.childLanes)!==0,Gt||s){if(s=mt,s!==null&&(i=Zx(s,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,br(t,i),vn(s,t,i),up;Ad(o)||Dc(),e=Vu(t,e,n)}else Ad(o)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,St=Jn(o.nextSibling),en=e,Qe=!0,ya=null,Zn=!1,t!==null&&Tg(e,t),e=pd(e,i.children),e.flags|=4096);return e}return a?(fa(),o=i.fallback,a=e.mode,l=t.child,c=l.sibling,i=Hi(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=Hi(c,o):(o=sr(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,io(null,i),i=e.child,o=t.child.memoizedState,o===null?o=Hu(n):(a=o.cachePool,a!==null?(l=Ht._currentValue,a=a.parent!==l?{parent:l,pool:l}:a):a=Rg(),o={baseLanes:o.baseLanes|n,cachePool:a}),i.memoizedState=o,i.childLanes=Gu(t,s,n),e.memoizedState=Iu,io(t.child,i)):(ua(e),n=t.child,t=n.sibling,n=Hi(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function pd(t,e){return e=Ac({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ac(t,e){return t=wn(22,t,null,e),t.lanes=0,t}function Vu(t,e,n){return hr(e,t.child,null,n),t=pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function H0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),td(t.return,e,n)}function Xu(t,e,n,i,a,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:a,treeForkCount:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=a,s.treeForkCount=r)}function S_(t,e,n){var i=e.pendingProps,a=i.revealOrder,r=i.tail;i=i.children;var s=Lt.current,o=(s&2)!==0;if(o?(s=s&1|2,e.flags|=128):s&=1,gt(Lt,s),Jt(t,e,i,n),i=Qe?To:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&H0(t,n,e);else if(t.tag===19)H0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=e.child,a=null;n!==null;)t=n.alternate,t!==null&&yc(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=e.child,e.child=null):(a=n.sibling,n.sibling=null),Xu(e,!1,a,n,r,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=e.child,e.child=null;a!==null;){if(t=a.alternate,t!==null&&yc(t)===null){e.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}Xu(e,!0,n,null,r,i);break;case"together":Xu(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pa|=e.lanes,!(n&e.childLanes))if(t!==null){if(Us(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(Y(153));if(e.child!==null){for(t=e.child,n=Hi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&vc(t)))}function gy(t,e,n){switch(e.tag){case 3:dc(e,e.stateNode.containerInfo),ca(e,Ht,t.memoizedState.cache),fr();break;case 27:case 5:Vf(e);break;case 4:dc(e,e.stateNode.containerInfo);break;case 10:ca(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,od(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(ua(e),e.flags|=128,null):n&e.child.childLanes?v_(t,e,n):(ua(e),t=ji(t,e,n),t!==null?t.sibling:null);ua(e);break;case 19:var a=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Us(t,e,n,!1),i=(n&e.childLanes)!==0),a){if(i)return S_(t,e,n);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),gt(Lt,Lt.current),i)break;return null;case 22:return e.lanes=0,__(t,e,n,e.pendingProps);case 24:ca(e,Ht,t.memoizedState.cache)}return ji(t,e,n)}function b_(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Gt=!0;else{if(!fp(t,n)&&!(e.flags&128))return Gt=!1,gy(t,e,n);Gt=!!(t.flags&131072)}else Gt=!1,Qe&&e.flags&1048576&&Eg(e,To,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=$a(e.elementType),e.type=t,typeof t=="function")Xh(t)?(i=mr(t,i),e.tag=1,e=F0(null,e,t,i,n)):(e.tag=0,e=hd(null,e,t,i,n));else{if(t!=null){var a=t.$$typeof;if(a===wh){e.tag=11,e=L0(null,e,t,i,n);break e}else if(a===Dh){e.tag=14,e=O0(null,e,t,i,n);break e}}throw e=Hf(t)||t,Error(Y(306,e,""))}}return e;case 0:return hd(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,a=mr(i,e.pendingProps),F0(t,e,i,a,n);case 3:e:{if(dc(e,e.stateNode.containerInfo),t===null)throw Error(Y(387));i=e.pendingProps;var r=e.memoizedState;a=r.element,ad(t,e),po(e,i,null,n);var s=e.memoizedState;if(i=s.cache,ca(e,Ht,i),i!==r.cache&&nd(e,[Ht],n,!0),ho(),i=s.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=I0(t,e,i,n);break e}else if(i!==a){a=jn(Error(Y(424)),e),Ao(a),e=I0(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(St=Jn(t.firstChild),en=e,Qe=!0,ya=null,Zn=!0,n=Dg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(fr(),i===a){e=ji(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 26:return ec(t,e),t===null?(n=sm(e.type,null,e.pendingProps,null))?e.memoizedState=n:Qe||(n=e.type,t=e.pendingProps,i=Oc(ba.current).createElement(n),i[$t]=e,i[bn]=t,nn(i,n,t),Zt(i),e.stateNode=i):e.memoizedState=sm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Vf(e),t===null&&Qe&&(i=e.stateNode=fv(e.type,e.pendingProps,ba.current),en=e,Zn=!0,a=St,Ia(e.type)?(Cd=a,St=Jn(i.firstChild)):St=a),Jt(t,e,e.pendingProps.children,n),ec(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&Qe&&((a=i=St)&&(i=Yy(i,e.type,e.pendingProps,Zn),i!==null?(e.stateNode=i,en=e,St=Jn(i.firstChild),Zn=!1,a=!0):a=!1),a||La(e)),Vf(e),a=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,i=r.children,Ed(a,r)?i=null:s!==null&&Ed(a,s)&&(e.flags|=32),e.memoizedState!==null&&(a=Jh(t,e,ly,null,null,n),No._currentValue=a),ec(t,e),Jt(t,e,i,n),e.child;case 6:return t===null&&Qe&&((t=n=St)&&(n=jy(n,e.pendingProps,Zn),n!==null?(e.stateNode=n,en=e,St=null,t=!0):t=!1),t||La(e)),null;case 13:return v_(t,e,n);case 4:return dc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=hr(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return L0(t,e,e.type,e.pendingProps,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,ca(e,e.type,i.value),Jt(t,e,i.children,n),e.child;case 9:return a=e.type._context,i=e.pendingProps.children,dr(e),a=tn(a),i=i(a),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return O0(t,e,e.type,e.pendingProps,n);case 15:return g_(t,e,e.type,e.pendingProps,n);case 19:return S_(t,e,n);case 31:return xy(t,e,n);case 22:return __(t,e,n,e.pendingProps);case 24:return dr(e),i=tn(Ht),t===null?(a=Yh(),a===null&&(a=mt,r=qh(),a.pooledCache=r,r.refCount++,r!==null&&(a.pooledCacheLanes|=n),a=r),e.memoizedState={parent:i,cache:a},Zh(e),ca(e,Ht,a)):(t.lanes&n&&(ad(t,e),po(e,null,null,n),ho()),a=t.memoizedState,r=e.memoizedState,a.parent!==i?(a={parent:i,cache:i},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),ca(e,Ht,i)):(i=r.cache,ca(e,Ht,i),i!==a.cache&&nd(e,[Ht],n,!0))),Jt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(Y(156,e.tag))}function Si(t){t.flags|=4}function ku(t,e,n,i,a){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(W_())t.flags|=8192;else throw lr=Sc,jh}else t.flags&=-16777217}function G0(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!pv(e))if(W_())t.flags|=8192;else throw lr=Sc,jh}function _l(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?qx():536870912,t.lanes|=e,gs|=e)}function Ws(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags&65011712,i|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,i|=a.subtreeFlags,i|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _y(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return vt(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Gi(Ht),fs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Tr(e)?Si(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Pu())),vt(e),null;case 26:var a=e.type,r=e.memoizedState;return t===null?(Si(e),r!==null?(vt(e),G0(e,r)):(vt(e),ku(e,a,null,i,n))):r?r!==t.memoizedState?(Si(e),vt(e),G0(e,r)):(vt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Si(e),vt(e),ku(e,a,t,i,n)),null;case 27:if(hc(e),n=ba.current,a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Si(e);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return vt(e),null}t=mi.current,Tr(e)?x0(e):(t=fv(a,i,n),e.stateNode=t,Si(e))}return vt(e),null;case 5:if(hc(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Si(e);else{if(!i){if(e.stateNode===null)throw Error(Y(166));return vt(e),null}if(r=mi.current,Tr(e))x0(e);else{var s=Oc(ba.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?s.createElement(a,{is:i.is}):s.createElement(a)}}r[$t]=e,r[bn]=i;e:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break e;for(;s.sibling===null;){if(s.return===null||s.return===e)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=r;e:switch(nn(r,a,i),a){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Si(e)}}return vt(e),ku(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Si(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Y(166));if(t=ba.current,Tr(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,a=en,a!==null)switch(a.tag){case 27:case 5:i=a.memoizedProps}t[$t]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||ov(t.nodeValue,n)),t||La(e,!0)}else t=Oc(t).createTextNode(i),t[$t]=e,e.stateNode=t}return vt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=Tr(e),n!==null){if(t===null){if(!i)throw Error(Y(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Y(557));t[$t]=e}else fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),t=!1}else n=Pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Cn(e),e):(Cn(e),null);if(e.flags&128)throw Error(Y(558))}return vt(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=Tr(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(Y(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Y(317));a[$t]=e}else fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),a=!1}else a=Pu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Cn(e),e):(Cn(e),null)}return Cn(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,a=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(a=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==a&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),_l(e,e.updateQueue),vt(e),null);case 4:return fs(),t===null&&_p(e.stateNode.containerInfo),vt(e),null;case 10:return Gi(e.type),vt(e),null;case 19:if(Kt(Lt),i=e.memoizedState,i===null)return vt(e),null;if(a=(e.flags&128)!==0,r=i.rendering,r===null)if(a)Ws(i,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=yc(t),r!==null){for(e.flags|=128,Ws(i,!1),t=r.updateQueue,e.updateQueue=t,_l(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)yg(n,t),n=n.sibling;return gt(Lt,Lt.current&1|2),Qe&&Ni(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Un()>Cc&&(e.flags|=128,a=!0,Ws(i,!1),e.lanes=4194304)}else{if(!a)if(t=yc(r),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,_l(e,t),Ws(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!Qe)return vt(e),null}else 2*Un()-i.renderingStartTime>Cc&&n!==536870912&&(e.flags|=128,a=!0,Ws(i,!1),e.lanes=4194304);i.isBackwards?(r.sibling=e.child,e.child=r):(t=i.last,t!==null?t.sibling=r:e.child=r,i.last=r)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Un(),t.sibling=null,n=Lt.current,gt(Lt,a?n&1|2:n&1),Qe&&Ni(e,i.treeForkCount),t):(vt(e),null);case 22:case 23:return Cn(e),Kh(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),n=e.updateQueue,n!==null&&_l(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Kt(or),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Gi(Ht),vt(e),null;case 25:return null;case 30:return null}throw Error(Y(156,e.tag))}function vy(t,e){switch(Wh(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(Ht),fs(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return hc(e),null;case 31:if(e.memoizedState!==null){if(Cn(e),e.alternate===null)throw Error(Y(340));fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Cn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Y(340));fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Kt(Lt),null;case 4:return fs(),null;case 10:return Gi(e.type),null;case 22:case 23:return Cn(e),Kh(),t!==null&&Kt(or),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Gi(Ht),null;case 25:return null;default:return null}}function y_(t,e){switch(Wh(e),e.tag){case 3:Gi(Ht),fs();break;case 26:case 27:case 5:hc(e);break;case 4:fs();break;case 31:e.memoizedState!==null&&Cn(e);break;case 13:Cn(e);break;case 19:Kt(Lt);break;case 10:Gi(e.type);break;case 22:case 23:Cn(e),Kh(),t!==null&&Kt(or);break;case 24:Gi(Ht)}}function Ko(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var a=i.next;n=a;do{if((n.tag&t)===t){i=void 0;var r=n.create,s=n.inst;i=r(),s.destroy=i}n=n.next}while(n!==a)}}catch(o){st(e,e.return,o)}}function Oa(t,e,n){try{var i=e.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var r=a.next;i=r;do{if((i.tag&t)===t){var s=i.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,a=e;var l=n,c=o;try{c()}catch(d){st(a,l,d)}}}i=i.next}while(i!==r)}}catch(d){st(e,e.return,d)}}function M_(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Ng(e,n)}catch(i){st(t,t.return,i)}}}function E_(t,e,n){n.props=mr(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){st(t,e,i)}}function xo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(a){st(t,e,a)}}function hi(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(a){st(t,e,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){st(t,e,a)}else n.current=null}function T_(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(a){st(t,t.return,a)}}function Wu(t,e,n){try{var i=t.stateNode;Gy(i,t.type,n,e),i[bn]=e}catch(a){st(t,t.return,a)}}function A_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ia(t.type)||t.tag===4}function qu(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||A_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ia(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zi));else if(i!==4&&(i===27&&Ia(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function Rc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Ia(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Rc(t,e,n),t=t.sibling;t!==null;)Rc(t,e,n),t=t.sibling}function R_(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);nn(e,i,n),e[$t]=t,e[bn]=n}catch(r){st(t,t.return,r)}}var Li=!1,It=!1,Yu=!1,V0=typeof WeakSet=="function"?WeakSet:Set,jt=null;function Sy(t,e){if(t=t.containerInfo,yd=Fc,t=pg(t),Hh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||a!==0&&f.nodeType!==3||(o=s+a),f!==r||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===a&&(o=s),h===r&&++d===i&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:t,selectionRange:n},Fc=!1,jt=e;jt!==null;)if(e=jt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,jt=t;else for(;jt!==null;){switch(e=jt,r=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,a=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var _=mr(n.type,a);t=i.getSnapshotBeforeUpdate(_,r),i.__reactInternalSnapshotBeforeUpdate=t}catch(v){st(n,n.return,v)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Td(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Td(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(Y(163))}if(t=e.sibling,t!==null){t.return=e.return,jt=t;break}jt=e.return}}function C_(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n),i&4&&Ko(5,n);break;case 1:if(yi(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){st(n,n.return,s)}else{var a=mr(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(a,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){st(n,n.return,s)}}i&64&&M_(n),i&512&&xo(n,n.return);break;case 3:if(yi(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Ng(t,e)}catch(s){st(n,n.return,s)}}break;case 27:e===null&&i&4&&R_(n);case 26:case 5:yi(t,n),e===null&&i&4&&T_(n),i&512&&xo(n,n.return);break;case 12:yi(t,n);break;case 31:yi(t,n),i&4&&U_(t,n);break;case 13:yi(t,n),i&4&&N_(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=wy.bind(null,n),Zy(t,n))));break;case 22:if(i=n.memoizedState!==null||Li,!i){e=e!==null&&e.memoizedState!==null||It,a=Li;var r=It;Li=i,(It=e)&&!r?wi(t,n,(n.subtreeFlags&8772)!==0):yi(t,n),Li=a,It=r}break;case 30:break;default:yi(t,n)}}function w_(t){var e=t.alternate;e!==null&&(t.alternate=null,w_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Oh(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Et=null,gn=!1;function bi(t,e,n){for(n=n.child;n!==null;)D_(t,e,n),n=n.sibling}function D_(t,e,n){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Xo,n)}catch{}switch(n.tag){case 26:It||hi(n,e),bi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:It||hi(n,e);var i=Et,a=gn;Ia(n.type)&&(Et=n.stateNode,gn=!1),bi(t,e,n),So(n.stateNode),Et=i,gn=a;break;case 5:It||hi(n,e);case 6:if(i=Et,a=gn,Et=null,bi(t,e,n),Et=i,gn=a,Et!==null)if(gn)try{(Et.nodeType===9?Et.body:Et.nodeName==="HTML"?Et.ownerDocument.body:Et).removeChild(n.stateNode)}catch(r){st(n,e,r)}else try{Et.removeChild(n.stateNode)}catch(r){st(n,e,r)}break;case 18:Et!==null&&(gn?(t=Et,tm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),bs(t)):tm(Et,n.stateNode));break;case 4:i=Et,a=gn,Et=n.stateNode.containerInfo,gn=!0,bi(t,e,n),Et=i,gn=a;break;case 0:case 11:case 14:case 15:Oa(2,n,e),It||Oa(4,n,e),bi(t,e,n);break;case 1:It||(hi(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&E_(n,e,i)),bi(t,e,n);break;case 21:bi(t,e,n);break;case 22:It=(i=It)||n.memoizedState!==null,bi(t,e,n),It=i;break;default:bi(t,e,n)}}function U_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bs(t)}catch(n){st(e,e.return,n)}}}function N_(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bs(t)}catch(n){st(e,e.return,n)}}function by(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new V0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new V0),e;default:throw Error(Y(435,t.tag))}}function vl(t,e){var n=by(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var a=Dy.bind(null,t,i);i.then(a,a)}})}function pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i],r=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(Ia(o.type)){Et=o.stateNode,gn=!1;break e}break;case 5:Et=o.stateNode,gn=!1;break e;case 3:case 4:Et=o.stateNode.containerInfo,gn=!0;break e}o=o.return}if(Et===null)throw Error(Y(160));D_(r,s,a),Et=null,gn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)L_(e,t),e=e.sibling}var ri=null;function L_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pn(e,t),mn(t),i&4&&(Oa(3,t,t.return),Ko(3,t),Oa(5,t,t.return));break;case 1:pn(e,t),mn(t),i&512&&(It||n===null||hi(n,n.return)),i&64&&Li&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var a=ri;if(pn(e,t),mn(t),i&512&&(It||n===null||hi(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,a=a.ownerDocument||a;t:switch(i){case"title":r=a.getElementsByTagName("title")[0],(!r||r[qo]||r[$t]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=a.createElement(i),a.head.insertBefore(r,a.querySelector("head > title"))),nn(r,i,n),r[$t]=t,Zt(r),i=r;break e;case"link":var s=lm("link","href",a).get(i+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(r=s[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}r=a.createElement(i),nn(r,i,n),a.head.appendChild(r);break;case"meta":if(s=lm("meta","content",a).get(i+(n.content||""))){for(o=0;o<s.length;o++)if(r=s[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}r=a.createElement(i),nn(r,i,n),a.head.appendChild(r);break;default:throw Error(Y(468,i))}r[$t]=t,Zt(r),i=r}t.stateNode=i}else cm(a,t.type,t.stateNode);else t.stateNode=om(a,i,t.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?cm(a,t.type,t.stateNode):om(a,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Wu(t,t.memoizedProps,n.memoizedProps)}break;case 27:pn(e,t),mn(t),i&512&&(It||n===null||hi(n,n.return)),n!==null&&i&4&&Wu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(pn(e,t),mn(t),i&512&&(It||n===null||hi(n,n.return)),t.flags&32){a=t.stateNode;try{hs(a,"")}catch(_){st(t,t.return,_)}}i&4&&t.stateNode!=null&&(a=t.memoizedProps,Wu(t,a,n!==null?n.memoizedProps:a)),i&1024&&(Yu=!0);break;case 6:if(pn(e,t),mn(t),i&4){if(t.stateNode===null)throw Error(Y(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(_){st(t,t.return,_)}}break;case 3:if(ic=null,a=ri,ri=Pc(e.containerInfo),pn(e,t),ri=a,mn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bs(e.containerInfo)}catch(_){st(t,t.return,_)}Yu&&(Yu=!1,O_(t));break;case 4:i=ri,ri=Pc(t.stateNode.containerInfo),pn(e,t),mn(t),ri=i;break;case 12:pn(e,t),mn(t);break;case 31:pn(e,t),mn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vl(t,i)));break;case 13:pn(e,t),mn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ru=Un()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vl(t,i)));break;case 22:a=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=Li,d=It;if(Li=c||a,It=d||l,pn(e,t),It=d,Li=c,mn(t),i&8192)e:for(e=t.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(n===null||l||Li||It||er(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(r=l.stateNode,a)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=l.stateNode;var f=l.memoizedProps.style,h=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(_){st(l,l.return,_)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=a?"":l.memoizedProps}catch(_){st(l,l.return,_)}}}else if(e.tag===18){if(n===null){l=e;try{var p=l.stateNode;a?nm(p,!0):nm(l.stateNode,!1)}catch(_){st(l,l.return,_)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,vl(t,n))));break;case 19:pn(e,t),mn(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,vl(t,i)));break;case 30:break;case 21:break;default:pn(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(A_(i)){n=i;break}i=i.return}if(n==null)throw Error(Y(160));switch(n.tag){case 27:var a=n.stateNode,r=qu(t);Rc(t,r,a);break;case 5:var s=n.stateNode;n.flags&32&&(hs(s,""),n.flags&=-33);var o=qu(t);Rc(t,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,c=qu(t);md(t,c,l);break;default:throw Error(Y(161))}}catch(d){st(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function O_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;O_(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function yi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)C_(t,e.alternate,e),e=e.sibling}function er(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Oa(4,e,e.return),er(e);break;case 1:hi(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&E_(e,e.return,n),er(e);break;case 27:So(e.stateNode);case 26:case 5:hi(e,e.return),er(e);break;case 22:e.memoizedState===null&&er(e);break;case 30:er(e);break;default:er(e)}t=t.sibling}}function wi(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,a=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:wi(a,r,n),Ko(4,r);break;case 1:if(wi(a,r,n),i=r,a=i.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(c){st(i,i.return,c)}if(i=r,a=i.updateQueue,a!==null){var o=i.stateNode;try{var l=a.shared.hiddenCallbacks;if(l!==null)for(a.shared.hiddenCallbacks=null,a=0;a<l.length;a++)Ug(l[a],o)}catch(c){st(i,i.return,c)}}n&&s&64&&M_(r),xo(r,r.return);break;case 27:R_(r);case 26:case 5:wi(a,r,n),n&&i===null&&s&4&&T_(r),xo(r,r.return);break;case 12:wi(a,r,n);break;case 31:wi(a,r,n),n&&s&4&&U_(a,r);break;case 13:wi(a,r,n),n&&s&4&&N_(a,r);break;case 22:r.memoizedState===null&&wi(a,r,n),xo(r,r.return);break;case 30:break;default:wi(a,r,n)}e=e.sibling}}function dp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&jo(n))}function hp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&jo(t))}function ti(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)P_(t,e,n,i),e=e.sibling}function P_(t,e,n,i){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ti(t,e,n,i),a&2048&&Ko(9,e);break;case 1:ti(t,e,n,i);break;case 3:ti(t,e,n,i),a&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&jo(t)));break;case 12:if(a&2048){ti(t,e,n,i),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,o=r.onPostCommit;typeof o=="function"&&o(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){st(e,e.return,l)}}else ti(t,e,n,i);break;case 31:ti(t,e,n,i);break;case 13:ti(t,e,n,i);break;case 23:break;case 22:r=e.stateNode,s=e.alternate,e.memoizedState!==null?r._visibility&2?ti(t,e,n,i):go(t,e):r._visibility&2?ti(t,e,n,i):(r._visibility|=2,Vr(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),a&2048&&dp(s,e);break;case 24:ti(t,e,n,i),a&2048&&hp(e.alternate,e);break;default:ti(t,e,n,i)}}function Vr(t,e,n,i,a){for(a=a&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var r=t,s=e,o=n,l=i,c=s.flags;switch(s.tag){case 0:case 11:case 15:Vr(r,s,o,l,a),Ko(8,s);break;case 23:break;case 22:var d=s.stateNode;s.memoizedState!==null?d._visibility&2?Vr(r,s,o,l,a):go(r,s):(d._visibility|=2,Vr(r,s,o,l,a)),a&&c&2048&&dp(s.alternate,s);break;case 24:Vr(r,s,o,l,a),a&&c&2048&&hp(s.alternate,s);break;default:Vr(r,s,o,l,a)}e=e.sibling}}function go(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,a=i.flags;switch(i.tag){case 22:go(n,i),a&2048&&dp(i.alternate,i);break;case 24:go(n,i),a&2048&&hp(i.alternate,i);break;default:go(n,i)}e=e.sibling}}var ao=8192;function Ar(t,e,n){if(t.subtreeFlags&ao)for(t=t.child;t!==null;)z_(t,e,n),t=t.sibling}function z_(t,e,n){switch(t.tag){case 26:Ar(t,e,n),t.flags&ao&&t.memoizedState!==null&&oM(n,ri,t.memoizedState,t.memoizedProps);break;case 5:Ar(t,e,n);break;case 3:case 4:var i=ri;ri=Pc(t.stateNode.containerInfo),Ar(t,e,n),ri=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=ao,ao=16777216,Ar(t,e,n),ao=i):Ar(t,e,n));break;default:Ar(t,e,n)}}function B_(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function qs(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];jt=i,I_(i,t)}B_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)F_(t),t=t.sibling}function F_(t){switch(t.tag){case 0:case 11:case 15:qs(t),t.flags&2048&&Oa(9,t,t.return);break;case 3:qs(t);break;case 12:qs(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,tc(t)):qs(t);break;default:qs(t)}}function tc(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];jt=i,I_(i,t)}B_(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Oa(8,e,e.return),tc(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,tc(e));break;default:tc(e)}t=t.sibling}}function I_(t,e){for(;jt!==null;){var n=jt;switch(n.tag){case 0:case 11:case 15:Oa(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:jo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,jt=i;else e:for(n=t;jt!==null;){i=jt;var a=i.sibling,r=i.return;if(w_(i),i===n){jt=null;break e}if(a!==null){a.return=r,jt=a;break e}jt=r}}}var yy={getCacheForType:function(t){var e=tn(Ht),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return tn(Ht).controller.signal}},My=typeof WeakMap=="function"?WeakMap:Map,it=0,mt=null,ke=null,Ze=0,rt=0,Rn=null,xa=!1,Ls=!1,pp=!1,Zi=0,Ut=0,Pa=0,cr=0,mp=0,Dn=0,gs=0,_o=null,_n=null,xd=!1,ru=0,H_=0,Cc=1/0,wc=null,Ta=null,Vt=0,Aa=null,_s=null,Vi=0,gd=0,_d=null,G_=null,vo=0,vd=null;function On(){return it&2&&Ze!==0?Ze&-Ze:De.T!==null?gp():Kx()}function V_(){if(Dn===0)if(!(Ze&536870912)||Qe){var t=fl;fl<<=1,!(fl&3932160)&&(fl=262144),Dn=t}else Dn=536870912;return t=Fn.current,t!==null&&(t.flags|=32),Dn}function vn(t,e,n){(t===mt&&(rt===2||rt===9)||t.cancelPendingCommit!==null)&&(vs(t,0),ga(t,Ze,Dn,!1)),Wo(t,n),(!(it&2)||t!==mt)&&(t===mt&&(!(it&2)&&(cr|=n),Ut===4&&ga(t,Ze,Dn,!1)),_i(t))}function X_(t,e,n){if(it&6)throw Error(Y(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||ko(t,e),a=i?Ay(t,e):ju(t,e,!0),r=i;do{if(a===0){Ls&&!i&&ga(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!Ey(n)){a=ju(t,e,!1),r=!1;continue}if(a===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;e:{var o=t;a=_o;var l=o.current.memoizedState.isDehydrated;if(l&&(vs(o,s).flags|=256),s=ju(o,s,!1),s!==2){if(pp&&!l){o.errorRecoveryDisabledLanes|=r,cr|=r,a=4;break e}r=_n,_n=a,r!==null&&(_n===null?_n=r:_n.push.apply(_n,r))}a=s}if(r=!1,a!==2)continue}}if(a===1){vs(t,0),ga(t,e,0,!0);break}e:{switch(i=t,r=a,r){case 0:case 1:throw Error(Y(345));case 4:if((e&4194048)!==e)break;case 6:ga(i,e,Dn,!xa);break e;case 2:_n=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((e&62914560)===e&&(a=ru+300-Un(),10<a)){if(ga(i,e,Dn,!xa),jc(i,0,!0)!==0)break e;Vi=e,i.timeoutHandle=cv(X0.bind(null,i,n,_n,wc,xd,e,Dn,cr,gs,xa,r,"Throttled",-0,0),a);break e}X0(i,n,_n,wc,xd,e,Dn,cr,gs,xa,r,null,-0,0)}}break}while(!0);_i(t)}function X0(t,e,n,i,a,r,s,o,l,c,d,f,h,p){if(t.timeoutHandle=-1,f=e.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},z_(e,r,f);var _=(r&62914560)===r?ru-Un():(r&4194048)===r?H_-Un():0;if(_=lM(f,_),_!==null){Vi=r,t.cancelPendingCommit=_(W0.bind(null,t,e,r,n,i,a,s,o,l,d,f,null,h,p)),ga(t,r,s,!c);return}}W0(t,e,r,n,i,a,s,o,l)}function Ey(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var a=n[i],r=a.getSnapshot;a=a.value;try{if(!Bn(r(),a))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ga(t,e,n,i){e&=~mp,e&=~cr,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var a=e;0<a;){var r=31-Ln(a),s=1<<r;i[r]=-1,a&=~s}n!==0&&Yx(t,n,e)}function su(){return it&6?!0:(Qo(0),!1)}function xp(){if(ke!==null){if(rt===0)var t=ke.return;else t=ke,Bi=yr=null,tp(t),ss=null,Ro=0,t=ke;for(;t!==null;)y_(t.alternate,t),t=t.return;ke=null}}function vs(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,ky(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Vi=0,xp(),mt=t,ke=n=Hi(t.current,null),Ze=e,rt=0,Rn=null,xa=!1,Ls=ko(t,e),pp=!1,gs=Dn=mp=cr=Pa=Ut=0,_n=_o=null,xd=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var a=31-Ln(i),r=1<<a;e|=t[a],i&=~r}return Zi=e,Jc(),n}function k_(t,e){Fe=null,De.H=wo,e===Ns||e===eu?(e=b0(),rt=3):e===jh?(e=b0(),rt=4):rt=e===up?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Rn=e,ke===null&&(Ut=1,Tc(t,jn(e,t.current)))}function W_(){var t=Fn.current;return t===null?!0:(Ze&4194048)===Ze?Qn===null:(Ze&62914560)===Ze||Ze&536870912?t===Qn:!1}function q_(){var t=De.H;return De.H=wo,t===null?wo:t}function Y_(){var t=De.A;return De.A=yy,t}function Dc(){Ut=4,xa||(Ze&4194048)!==Ze&&Fn.current!==null||(Ls=!0),!(Pa&134217727)&&!(cr&134217727)||mt===null||ga(mt,Ze,Dn,!1)}function ju(t,e,n){var i=it;it|=2;var a=q_(),r=Y_();(mt!==t||Ze!==e)&&(wc=null,vs(t,e)),e=!1;var s=Ut;e:do try{if(rt!==0&&ke!==null){var o=ke,l=Rn;switch(rt){case 8:xp(),s=6;break e;case 3:case 2:case 9:case 6:Fn.current===null&&(e=!0);var c=rt;if(rt=0,Rn=null,ts(t,o,l,c),n&&Ls){s=0;break e}break;default:c=rt,rt=0,Rn=null,ts(t,o,l,c)}}Ty(),s=Ut;break}catch(d){k_(t,d)}while(!0);return e&&t.shellSuspendCounter++,Bi=yr=null,it=i,De.H=a,De.A=r,ke===null&&(mt=null,Ze=0,Jc()),s}function Ty(){for(;ke!==null;)j_(ke)}function Ay(t,e){var n=it;it|=2;var i=q_(),a=Y_();mt!==t||Ze!==e?(wc=null,Cc=Un()+500,vs(t,e)):Ls=ko(t,e);e:do try{if(rt!==0&&ke!==null){e=ke;var r=Rn;t:switch(rt){case 1:rt=0,Rn=null,ts(t,e,r,1);break;case 2:case 9:if(S0(r)){rt=0,Rn=null,k0(e);break}e=function(){rt!==2&&rt!==9||mt!==t||(rt=7),_i(t)},r.then(e,e);break e;case 3:rt=7;break e;case 4:rt=5;break e;case 7:S0(r)?(rt=0,Rn=null,k0(e)):(rt=0,Rn=null,ts(t,e,r,7));break;case 5:var s=null;switch(ke.tag){case 26:s=ke.memoizedState;case 5:case 27:var o=ke;if(s?pv(s):o.stateNode.complete){rt=0,Rn=null;var l=o.sibling;if(l!==null)ke=l;else{var c=o.return;c!==null?(ke=c,ou(c)):ke=null}break t}}rt=0,Rn=null,ts(t,e,r,5);break;case 6:rt=0,Rn=null,ts(t,e,r,6);break;case 8:xp(),Ut=6;break e;default:throw Error(Y(462))}}Ry();break}catch(d){k_(t,d)}while(!0);return Bi=yr=null,De.H=i,De.A=a,it=n,ke!==null?0:(mt=null,Ze=0,Jc(),Ut)}function Ry(){for(;ke!==null&&!KS();)j_(ke)}function j_(t){var e=b_(t.alternate,t,Zi);t.memoizedProps=t.pendingProps,e===null?ou(t):ke=e}function k0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=B0(n,e,e.pendingProps,e.type,void 0,Ze);break;case 11:e=B0(n,e,e.pendingProps,e.type.render,e.ref,Ze);break;case 5:tp(e);default:y_(n,e),e=ke=yg(e,Zi),e=b_(n,e,Zi)}t.memoizedProps=t.pendingProps,e===null?ou(t):ke=e}function ts(t,e,n,i){Bi=yr=null,tp(e),ss=null,Ro=0;var a=e.return;try{if(my(t,a,e,n,Ze)){Ut=1,Tc(t,jn(n,t.current)),ke=null;return}}catch(r){if(a!==null)throw ke=a,r;Ut=1,Tc(t,jn(n,t.current)),ke=null;return}e.flags&32768?(Qe||i===1?t=!0:Ls||Ze&536870912?t=!1:(xa=t=!0,(i===2||i===9||i===3||i===6)&&(i=Fn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Z_(e,t)):ou(e)}function ou(t){var e=t;do{if(e.flags&32768){Z_(e,xa);return}t=e.return;var n=_y(e.alternate,e,Zi);if(n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Ut===0&&(Ut=5)}function Z_(t,e){do{var n=vy(t.alternate,t);if(n!==null){n.flags&=32767,ke=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ke=t;return}ke=t=n}while(t!==null);Ut=6,ke=null}function W0(t,e,n,i,a,r,s,o,l){t.cancelPendingCommit=null;do lu();while(Vt!==0);if(it&6)throw Error(Y(327));if(e!==null){if(e===t.current)throw Error(Y(177));if(r=e.lanes|e.childLanes,r|=Gh,sb(t,n,r,s,o,l),t===mt&&(ke=mt=null,Ze=0),_s=e,Aa=t,Vi=n,gd=r,_d=a,G_=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,Uy(pc,function(){return ev(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=De.T,De.T=null,a=at.p,at.p=2,s=it,it|=4;try{Sy(t,e,n)}finally{it=s,at.p=a,De.T=i}}Vt=1,K_(),Q_(),J_()}}function K_(){if(Vt===1){Vt=0;var t=Aa,e=_s,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=De.T,De.T=null;var i=at.p;at.p=2;var a=it;it|=4;try{L_(e,t);var r=Md,s=pg(t.containerInfo),o=r.focusedElem,l=r.selectionRange;if(s!==o&&o&&o.ownerDocument&&hg(o.ownerDocument.documentElement,o)){if(l!==null&&Hh(o)){var c=l.start,d=l.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var f=o.ownerDocument||document,h=f&&f.defaultView||window;if(h.getSelection){var p=h.getSelection(),_=o.textContent.length,v=Math.min(l.start,_),m=l.end===void 0?v:Math.min(l.end,_);!p.extend&&v>m&&(s=m,m=v,v=s);var u=h0(o,v),x=h0(o,m);if(u&&x&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==x.node||p.focusOffset!==x.offset)){var g=f.createRange();g.setStart(u.node,u.offset),p.removeAllRanges(),v>m?(p.addRange(g),p.extend(x.node,x.offset)):(g.setEnd(x.node,x.offset),p.addRange(g))}}}}for(f=[],p=o;p=p.parentNode;)p.nodeType===1&&f.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var b=f[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}Fc=!!yd,Md=yd=null}finally{it=a,at.p=i,De.T=n}}t.current=e,Vt=2}}function Q_(){if(Vt===2){Vt=0;var t=Aa,e=_s,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=De.T,De.T=null;var i=at.p;at.p=2;var a=it;it|=4;try{C_(t,e.alternate,e)}finally{it=a,at.p=i,De.T=n}}Vt=3}}function J_(){if(Vt===4||Vt===3){Vt=0,QS();var t=Aa,e=_s,n=Vi,i=G_;e.subtreeFlags&10256||e.flags&10256?Vt=5:(Vt=0,_s=Aa=null,$_(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(Ta=null),Lh(n),e=e.stateNode,Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Xo,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=De.T,a=at.p,at.p=2,De.T=null;try{for(var r=t.onRecoverableError,s=0;s<i.length;s++){var o=i[s];r(o.value,{componentStack:o.stack})}}finally{De.T=e,at.p=a}}Vi&3&&lu(),_i(t),a=t.pendingLanes,n&261930&&a&42?t===vd?vo++:(vo=0,vd=t):vo=0,Qo(0)}}function $_(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,jo(e)))}function lu(){return K_(),Q_(),J_(),ev()}function ev(){if(Vt!==5)return!1;var t=Aa,e=gd;gd=0;var n=Lh(Vi),i=De.T,a=at.p;try{at.p=32>n?32:n,De.T=null,n=_d,_d=null;var r=Aa,s=Vi;if(Vt=0,_s=Aa=null,Vi=0,it&6)throw Error(Y(331));var o=it;if(it|=4,F_(r.current),P_(r,r.current,s,n),it=o,Qo(0,!1),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Xo,r)}catch{}return!0}finally{at.p=a,De.T=i,$_(t,e)}}function q0(t,e,n){e=jn(n,e),e=dd(t.stateNode,e,2),t=Ea(t,e,2),t!==null&&(Wo(t,2),_i(t))}function st(t,e,n){if(t.tag===3)q0(t,t,n);else for(;e!==null;){if(e.tag===3){q0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ta===null||!Ta.has(i))){t=jn(n,t),n=m_(2),i=Ea(e,n,2),i!==null&&(x_(n,i,e,t),Wo(i,2),_i(i));break}}e=e.return}}function Zu(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new My;var a=new Set;i.set(e,a)}else a=i.get(e),a===void 0&&(a=new Set,i.set(e,a));a.has(n)||(pp=!0,a.add(n),t=Cy.bind(null,t,e,n),e.then(t,t))}function Cy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,mt===t&&(Ze&n)===n&&(Ut===4||Ut===3&&(Ze&62914560)===Ze&&300>Un()-ru?!(it&2)&&vs(t,0):mp|=n,gs===Ze&&(gs=0)),_i(t)}function tv(t,e){e===0&&(e=qx()),t=br(t,e),t!==null&&(Wo(t,e),_i(t))}function wy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tv(t,n)}function Dy(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(Y(314))}i!==null&&i.delete(e),tv(t,n)}function Uy(t,e){return Uh(t,e)}var Uc=null,Xr=null,Sd=!1,Nc=!1,Ku=!1,_a=0;function _i(t){t!==Xr&&t.next===null&&(Xr===null?Uc=Xr=t:Xr=Xr.next=t),Nc=!0,Sd||(Sd=!0,Ly())}function Qo(t,e){if(!Ku&&Nc){Ku=!0;do for(var n=!1,i=Uc;i!==null;){if(t!==0){var a=i.pendingLanes;if(a===0)var r=0;else{var s=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-Ln(42|t)+1)-1,r&=a&~(s&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Y0(i,r))}else r=Ze,r=jc(i,i===mt?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(r&3)||ko(i,r)||(n=!0,Y0(i,r));i=i.next}while(n);Ku=!1}}function Ny(){nv()}function nv(){Nc=Sd=!1;var t=0;_a!==0&&Xy()&&(t=_a);for(var e=Un(),n=null,i=Uc;i!==null;){var a=i.next,r=iv(i,e);r===0?(i.next=null,n===null?Uc=a:n.next=a,a===null&&(Xr=n)):(n=i,(t!==0||r&3)&&(Nc=!0)),i=a}Vt!==0&&Vt!==5||Qo(t),_a!==0&&(_a=0)}function iv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,a=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-Ln(r),o=1<<s,l=a[s];l===-1?(!(o&n)||o&i)&&(a[s]=rb(o,e)):l<=e&&(t.expiredLanes|=o),r&=~o}if(e=mt,n=Ze,n=jc(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(rt===2||rt===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Eu(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||ko(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Eu(i),Lh(n)){case 2:case 8:n=kx;break;case 32:n=pc;break;case 268435456:n=Wx;break;default:n=pc}return i=av.bind(null,t),n=Uh(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Eu(i),t.callbackPriority=2,t.callbackNode=null,2}function av(t,e){if(Vt!==0&&Vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(lu()&&t.callbackNode!==n)return null;var i=Ze;return i=jc(t,t===mt?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(X_(t,i,e),iv(t,Un()),t.callbackNode!=null&&t.callbackNode===n?av.bind(null,t):null)}function Y0(t,e){if(lu())return null;X_(t,e,!0)}function Ly(){Wy(function(){it&6?Uh(Xx,Ny):nv()})}function gp(){if(_a===0){var t=ps;t===0&&(t=ul,ul<<=1,!(ul&261888)&&(ul=256)),_a=t}return _a}function j0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ql(""+t)}function Z0(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Oy(t,e,n,i,a){if(e==="submit"&&n&&n.stateNode===a){var r=j0((a[bn]||null).action),s=i.submitter;s&&(e=(e=s[bn]||null)?j0(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var o=new Zc("action","action",null,i,a);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(_a!==0){var l=s?Z0(a,s):new FormData(a);ud(n,{pending:!0,data:l,method:a.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=s?Z0(a,s):new FormData(a),ud(n,{pending:!0,data:l,method:a.method,action:r},r,l))},currentTarget:a}]})}}for(var Qu=0;Qu<Jf.length;Qu++){var Ju=Jf[Qu],Py=Ju.toLowerCase(),zy=Ju[0].toUpperCase()+Ju.slice(1);li(Py,"on"+zy)}li(xg,"onAnimationEnd");li(gg,"onAnimationIteration");li(_g,"onAnimationStart");li("dblclick","onDoubleClick");li("focusin","onFocus");li("focusout","onBlur");li(Jb,"onTransitionRun");li($b,"onTransitionStart");li(ey,"onTransitionCancel");li(vg,"onTransitionEnd");ds("onMouseEnter",["mouseout","mouseover"]);ds("onMouseLeave",["mouseout","mouseover"]);ds("onPointerEnter",["pointerout","pointerover"]);ds("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],a=i.event;i=i.listeners;e:{var r=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){xc(d)}a.currentTarget=null,r=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&a.isPropagationStopped())break e;r=o,a.currentTarget=c;try{r(a)}catch(d){xc(d)}a.currentTarget=null,r=l}}}}function Xe(t,e){var n=e[kf];n===void 0&&(n=e[kf]=new Set);var i=t+"__bubble";n.has(i)||(sv(e,t,2,!1),n.add(i))}function $u(t,e,n){var i=0;e&&(i|=4),sv(n,t,i,e)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function _p(t){if(!t[Sl]){t[Sl]=!0,Qx.forEach(function(n){n!=="selectionchange"&&(By.has(n)||$u(n,!1,t),$u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sl]||(e[Sl]=!0,$u("selectionchange",!1,e))}}function sv(t,e,n,i){switch(vv(e)){case 2:var a=fM;break;case 8:a=dM;break;default:a=yp}n=a.bind(null,e,n,t),a=void 0,!Zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),i?a!==void 0?t.addEventListener(e,n,{capture:!0,passive:a}):t.addEventListener(e,n,!0):a!==void 0?t.addEventListener(e,n,{passive:a}):t.addEventListener(e,n,!1)}function ef(t,e,n,i,a){var r=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===a)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;o!==null;){if(s=qr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){i=r=s;continue e}o=o.parentNode}}i=i.return}rg(function(){var c=r,d=zh(n),f=[];e:{var h=Sg.get(t);if(h!==void 0){var p=Zc,_=t;switch(t){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":p=Db;break;case"focusin":_="focus",p=wu;break;case"focusout":_="blur",p=wu;break;case"beforeblur":case"afterblur":p=wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=i0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_b;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Lb;break;case xg:case gg:case _g:p=bb;break;case vg:p=Pb;break;case"scroll":case"scrollend":p=xb;break;case"wheel":p=Bb;break;case"copy":case"cut":case"paste":p=Mb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=r0;break;case"toggle":case"beforetoggle":p=Ib}var v=(e&4)!==0,m=!v&&(t==="scroll"||t==="scrollend"),u=v?h!==null?h+"Capture":null:h;v=[];for(var x=c,g;x!==null;){var b=x;if(g=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||g===null||u===null||(b=yo(x,u),b!=null&&v.push(Uo(x,b,g))),m)break;x=x.return}0<v.length&&(h=new p(h,_,null,n,d),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==jf&&(_=n.relatedTarget||n.fromElement)&&(qr(_)||_[ws]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?qr(_):null,_!==null&&(m=Vo(_),v=_.tag,_!==m||v!==5&&v!==27&&v!==6)&&(_=null)):(p=null,_=c),p!==_)){if(v=i0,b="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(v=r0,b="onPointerLeave",u="onPointerEnter",x="pointer"),m=p==null?h:no(p),g=_==null?h:no(_),h=new v(b,x+"leave",p,n,d),h.target=m,h.relatedTarget=g,b=null,qr(d)===c&&(v=new v(u,x+"enter",_,n,d),v.target=g,v.relatedTarget=m,b=v),m=b,p&&_)t:{for(v=Fy,u=p,x=_,g=0,b=u;b;b=v(b))g++;b=0;for(var C=x;C;C=v(C))b++;for(;0<g-b;)u=v(u),g--;for(;0<b-g;)x=v(x),b--;for(;g--;){if(u===x||x!==null&&u===x.alternate){v=u;break t}u=v(u),x=v(x)}v=null}else v=null;p!==null&&K0(f,h,p,v,!1),_!==null&&m!==null&&K0(f,m,_,v,!0)}}e:{if(h=c?no(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=c0;else if(l0(h))if(fg)T=Zb;else{T=Yb;var R=qb}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&Ph(c.elementType)&&(T=c0):T=jb;if(T&&(T=T(t,c))){ug(f,T,n,d);break e}R&&R(t,h,c),t==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&Yf(h,"number",h.value)}switch(R=c?no(c):window,t){case"focusin":(l0(R)||R.contentEditable==="true")&&(Zr=R,Kf=c,co=null);break;case"focusout":co=Kf=Zr=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,p0(f,n,d);break;case"selectionchange":if(Qb)break;case"keydown":case"keyup":p0(f,n,d)}var N;if(Ih)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else jr?lg(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(og&&n.locale!=="ko"&&(jr||E!=="onCompositionStart"?E==="onCompositionEnd"&&jr&&(N=sg()):(ma=d,Bh="value"in ma?ma.value:ma.textContent,jr=!0)),R=Lc(c,E),0<R.length&&(E=new a0(E,t,null,n,d),f.push({event:E,listeners:R}),N?E.data=N:(N=cg(n),N!==null&&(E.data=N)))),(N=Gb?Vb(t,n):Xb(t,n))&&(E=Lc(c,"onBeforeInput"),0<E.length&&(R=new a0("onBeforeInput","beforeinput",null,n,d),f.push({event:R,listeners:E}),R.data=N)),Oy(f,t,c,n,d)}rv(f,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Lc(t,e){for(var n=e+"Capture",i=[];t!==null;){var a=t,r=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||r===null||(a=yo(t,n),a!=null&&i.unshift(Uo(t,a,r)),a=yo(t,e),a!=null&&i.push(Uo(t,a,r))),t.tag===3)return i;t=t.return}return[]}function Fy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function K0(t,e,n,i,a){for(var r=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,a?(c=yo(n,r),c!=null&&s.unshift(Uo(n,c,l))):a||(c=yo(n,r),c!=null&&s.push(Uo(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Iy=/\r\n?/g,Hy=/\u0000|\uFFFD/g;function Q0(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(Hy,"")}function ov(t,e){return e=Q0(e),Q0(t)===e}function ut(t,e,n,i,a,r){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||hs(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&hs(t,""+i);break;case"className":hl(t,"class",i);break;case"tabIndex":hl(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":hl(t,n,i);break;case"style":ag(t,i,r);break;case"data":if(e!=="object"){hl(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=ql(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&ut(t,e,"name",a.name,a,null),ut(t,e,"formEncType",a.formEncType,a,null),ut(t,e,"formMethod",a.formMethod,a,null),ut(t,e,"formTarget",a.formTarget,a,null)):(ut(t,e,"encType",a.encType,a,null),ut(t,e,"method",a.method,a,null),ut(t,e,"target",a.target,a,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=ql(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=zi);break;case"onScroll":i!=null&&Xe("scroll",t);break;case"onScrollEnd":i!=null&&Xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=ql(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":Xe("beforetoggle",t),Xe("toggle",t),Wl(t,"popover",i);break;case"xlinkActuate":vi(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":vi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":vi(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":vi(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":vi(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":vi(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":vi(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":vi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":vi(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Wl(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=pb.get(n)||n,Wl(t,n,i))}}function bd(t,e,n,i,a,r){switch(n){case"style":ag(t,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(a.children!=null)throw Error(Y(60));t.innerHTML=n}}break;case"children":typeof i=="string"?hs(t,i):(typeof i=="number"||typeof i=="bigint")&&hs(t,""+i);break;case"onScroll":i!=null&&Xe("scroll",t);break;case"onScrollEnd":i!=null&&Xe("scrollend",t);break;case"onClick":i!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jx.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),e=n.slice(2,a?n.length-7:void 0),r=t[bn]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,a),typeof i=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,a);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):Wl(t,n,i)}}}function nn(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xe("error",t),Xe("load",t);var i=!1,a=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,e));default:ut(t,e,r,s,n,null)}}a&&ut(t,e,"srcSet",n.srcSet,n,null),i&&ut(t,e,"src",n.src,n,null);return;case"input":Xe("invalid",t);var o=r=s=a=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":l=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(Y(137,e));break;default:ut(t,e,i,d,n,null)}}tg(t,r,o,l,c,s,a,!1);return;case"select":Xe("invalid",t),i=s=r=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":r=o;break;case"defaultValue":s=o;break;case"multiple":i=o;default:ut(t,e,a,o,n,null)}e=r,n=s,t.multiple=!!i,e!=null?is(t,!!i,e,!1):n!=null&&is(t,!!i,n,!0);return;case"textarea":Xe("invalid",t),r=a=i=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":i=o;break;case"defaultValue":a=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Y(91));break;default:ut(t,e,s,o,n,null)}ig(t,i,a,r);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ut(t,e,l,i,n,null)}return;case"dialog":Xe("beforetoggle",t),Xe("toggle",t),Xe("cancel",t),Xe("close",t);break;case"iframe":case"object":Xe("load",t);break;case"video":case"audio":for(i=0;i<Do.length;i++)Xe(Do[i],t);break;case"image":Xe("error",t),Xe("load",t);break;case"details":Xe("toggle",t);break;case"embed":case"source":case"link":Xe("error",t),Xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,e));default:ut(t,e,c,i,n,null)}return;default:if(Ph(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&bd(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&ut(t,e,o,i,n,null))}function Gy(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,r=null,s=null,o=null,l=null,c=null,d=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&f!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=f;default:i.hasOwnProperty(p)||ut(t,e,p,null,i,f)}}for(var h in i){var p=i[h];if(f=n[h],i.hasOwnProperty(h)&&(p!=null||f!=null))switch(h){case"type":r=p;break;case"name":a=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Y(137,e));break;default:p!==f&&ut(t,e,h,p,i,f)}}qf(t,s,o,l,c,d,r,a);return;case"select":p=s=o=h=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||ut(t,e,r,null,i,l)}for(a in i)if(r=i[a],l=n[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":h=r;break;case"defaultValue":o=r;break;case"multiple":s=r;default:r!==l&&ut(t,e,a,r,i,l)}e=o,n=s,i=p,h!=null?is(t,!!n,h,!1):!!i!=!!n&&(e!=null?is(t,!!n,e,!0):is(t,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ut(t,e,o,null,i,a)}for(s in i)if(a=i[s],r=n[s],i.hasOwnProperty(s)&&(a!=null||r!=null))switch(s){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(Y(91));break;default:a!==r&&ut(t,e,s,a,i,r)}ng(t,h,p);return;case"option":for(var _ in n)if(h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:ut(t,e,_,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:ut(t,e,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var v in n)h=n[v],n.hasOwnProperty(v)&&h!=null&&!i.hasOwnProperty(v)&&ut(t,e,v,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Y(137,e));break;default:ut(t,e,c,h,i,p)}return;default:if(Ph(e)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&bd(t,e,m,void 0,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h===void 0&&p===void 0||bd(t,e,d,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&ut(t,e,u,null,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h==null&&p==null||ut(t,e,f,h,i,p)}function J0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var a=n[i],r=a.transferSize,s=a.initiatorType,o=a.duration;if(r&&o&&J0(s)){for(s=0,o=a.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var d=l.transferSize,f=l.initiatorType;d&&J0(f)&&(l=l.responseEnd,s+=d*(l<o?1:(o-c)/(l-c)))}if(--i,e+=8*(r+s)/(a.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var yd=null,Md=null;function Oc(t){return t.nodeType===9?t:t.ownerDocument}function $0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lv(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tf=null;function Xy(){var t=window.event;return t&&t.type==="popstate"?t===tf?!1:(tf=t,!0):(tf=null,!1)}var cv=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,Wy=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(t){return em.resolve(null).then(t).catch(qy)}:cv;function qy(t){setTimeout(function(){throw t})}function Ia(t){return t==="head"}function tm(t,e){var n=e,i=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(a),bs(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")So(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,So(n);for(var r=n.firstChild;r;){var s=r.nextSibling,o=r.nodeName;r[qo]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&So(t.ownerDocument.body);n=a}while(n);bs(e)}function nm(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Td(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Td(n),Oh(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Yy(t,e,n,i){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[qo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Jn(t.nextSibling),t===null)break}return null}function jy(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Jn(t.nextSibling),t===null))return null;return t}function uv(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Jn(t.nextSibling),t===null))return null;return t}function Ad(t){return t.data==="$?"||t.data==="$~"}function Rd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Zy(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Cd=null;function im(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Jn(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function fv(t,e,n){switch(e=Oc(n),t){case"html":if(t=e.documentElement,!t)throw Error(Y(452));return t;case"head":if(t=e.head,!t)throw Error(Y(453));return t;case"body":if(t=e.body,!t)throw Error(Y(454));return t;default:throw Error(Y(451))}}function So(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Oh(t)}var $n=new Map,rm=new Set;function Pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $i=at.d;at.d={f:Ky,r:Qy,D:Jy,C:$y,L:eM,m:tM,X:iM,S:nM,M:aM};function Ky(){var t=$i.f(),e=su();return t||e}function Qy(t){var e=Ds(t);e!==null&&e.tag===5&&e.type==="form"?a_(e):$i.r(t)}var Os=typeof document>"u"?null:document;function dv(t,e,n){var i=Os;if(i&&typeof e=="string"&&e){var a=Yn(e);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),rm.has(a)||(rm.add(a),t={rel:t,crossOrigin:n,href:e},i.querySelector(a)===null&&(e=i.createElement("link"),nn(e,"link",t),Zt(e),i.head.appendChild(e)))}}function Jy(t){$i.D(t),dv("dns-prefetch",t,null)}function $y(t,e){$i.C(t,e),dv("preconnect",t,e)}function eM(t,e,n){$i.L(t,e,n);var i=Os;if(i&&t&&e){var a='link[rel="preload"][as="'+Yn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+Yn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+Yn(n.imageSizes)+'"]')):a+='[href="'+Yn(t)+'"]';var r=a;switch(e){case"style":r=Ss(t);break;case"script":r=Ps(t)}$n.has(r)||(t=yt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),$n.set(r,t),i.querySelector(a)!==null||e==="style"&&i.querySelector(Jo(r))||e==="script"&&i.querySelector($o(r))||(e=i.createElement("link"),nn(e,"link",t),Zt(e),i.head.appendChild(e)))}}function tM(t,e){$i.m(t,e);var n=Os;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Yn(i)+'"][href="'+Yn(t)+'"]',r=a;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ps(t)}if(!$n.has(r)&&(t=yt({rel:"modulepreload",href:t},e),$n.set(r,t),n.querySelector(a)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector($o(r)))return}i=n.createElement("link"),nn(i,"link",t),Zt(i),n.head.appendChild(i)}}}function nM(t,e,n){$i.S(t,e,n);var i=Os;if(i&&t){var a=ns(i).hoistableStyles,r=Ss(t);e=e||"default";var s=a.get(r);if(!s){var o={loading:0,preload:null};if(s=i.querySelector(Jo(r)))o.loading=5;else{t=yt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=$n.get(r))&&vp(t,n);var l=s=i.createElement("link");Zt(l),nn(l,"link",t),l._p=new Promise(function(c,d){l.onload=c,l.onerror=d}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,nc(s,e,i)}s={type:"stylesheet",instance:s,count:1,state:o},a.set(r,s)}}}function iM(t,e){$i.X(t,e);var n=Os;if(n&&t){var i=ns(n).hoistableScripts,a=Ps(t),r=i.get(a);r||(r=n.querySelector($o(a)),r||(t=yt({src:t,async:!0},e),(e=$n.get(a))&&Sp(t,e),r=n.createElement("script"),Zt(r),nn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function aM(t,e){$i.M(t,e);var n=Os;if(n&&t){var i=ns(n).hoistableScripts,a=Ps(t),r=i.get(a);r||(r=n.querySelector($o(a)),r||(t=yt({src:t,async:!0,type:"module"},e),(e=$n.get(a))&&Sp(t,e),r=n.createElement("script"),Zt(r),nn(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(a,r))}}function sm(t,e,n,i){var a=(a=ba.current)?Pc(a):null;if(!a)throw Error(Y(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Ss(n.href),n=ns(a).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Ss(n.href);var r=ns(a).hoistableStyles,s=r.get(t);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=a.querySelector(Jo(t)))&&!r._p&&(s.instance=r,s.state.loading=5),$n.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},$n.set(t,n),r||rM(a,t,n,s.state))),e&&i===null)throw Error(Y(528,""));return s}if(e&&i!==null)throw Error(Y(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ps(n),n=ns(a).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,t))}}function Ss(t){return'href="'+Yn(t)+'"'}function Jo(t){return'link[rel="stylesheet"]['+t+"]"}function hv(t){return yt({},t,{"data-precedence":t.precedence,precedence:null})}function rM(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),nn(e,"link",n),Zt(e),t.head.appendChild(e))}function Ps(t){return'[src="'+Yn(t)+'"]'}function $o(t){return"script[async]"+t}function om(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Yn(n.href)+'"]');if(i)return e.instance=i,Zt(i),i;var a=yt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Zt(i),nn(i,"style",a),nc(i,n.precedence,t),e.instance=i;case"stylesheet":a=Ss(n.href);var r=t.querySelector(Jo(a));if(r)return e.state.loading|=4,e.instance=r,Zt(r),r;i=hv(n),(a=$n.get(a))&&vp(i,a),r=(t.ownerDocument||t).createElement("link"),Zt(r);var s=r;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),nn(r,"link",i),e.state.loading|=4,nc(r,n.precedence,t),e.instance=r;case"script":return r=Ps(n.src),(a=t.querySelector($o(r)))?(e.instance=a,Zt(a),a):(i=n,(a=$n.get(r))&&(i=yt({},n),Sp(i,a)),t=t.ownerDocument||t,a=t.createElement("script"),Zt(a),nn(a,"link",i),t.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(Y(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,nc(i,n.precedence,t));return e.instance}function nc(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=i.length?i[i.length-1]:null,r=a,s=0;s<i.length;s++){var o=i[s];if(o.dataset.precedence===e)r=o;else if(r!==a)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function vp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Sp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var ic=null;function lm(t,e,n){if(ic===null){var i=new Map,a=ic=new Map;a.set(n,i)}else a=ic,i=a.get(n),i||(i=new Map,a.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var r=n[a];if(!(r[qo]||r[$t]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var o=i.get(s);o?o.push(r):i.set(s,[r])}}return i}function cm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function sM(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function pv(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function oM(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Ss(i.href),r=e.querySelector(Jo(a));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=zc.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=r,Zt(r);return}r=e.ownerDocument||e,i=hv(i),(a=$n.get(a))&&vp(i,a),r=r.createElement("link"),Zt(r);var s=r;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),nn(r,"link",i),n.instance=r}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=zc.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var nf=0;function lM(t,e){return t.stylesheets&&t.count===0&&ac(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4+e);0<t.imgBytes&&nf===0&&(nf=62500*Vy());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ac(t,t.stylesheets),t.unsuspend)){var r=t.unsuspend;t.unsuspend=null,r()}},(t.imgBytes>nf?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(a)}}:null}function zc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ac(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bc=null;function ac(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bc=new Map,e.forEach(cM,t),Bc=null,zc.call(t))}function cM(t,e){if(!(e.state.loading&4)){var n=Bc.get(t);if(n)var i=n.get(null);else{n=new Map,Bc.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<a.length;r++){var s=a[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),i=s)}i&&n.set(null,i)}a=e.instance,s=a.getAttribute("data-precedence"),r=n.get(s)||i,r===i&&n.set(null,a),n.set(s,a),this.count++,i=zc.bind(this),a.addEventListener("load",i),a.addEventListener("error",i),r?r.parentNode.insertBefore(a,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),e.state.loading|=4}}var No={$$typeof:Pi,Provider:null,Consumer:null,_currentValue:rr,_currentValue2:rr,_threadCount:0};function uM(t,e,n,i,a,r,s,o,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tu(0),this.hiddenUpdates=Tu(null),this.identifierPrefix=i,this.onUncaughtError=a,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function mv(t,e,n,i,a,r,s,o,l,c,d,f){return t=new uM(t,e,n,s,l,c,d,f,o),e=1,r===!0&&(e|=24),r=wn(3,null,null,e),t.current=r,r.stateNode=t,e=qh(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:e},Zh(r),t}function xv(t){return t?(t=Jr,t):Jr}function gv(t,e,n,i,a,r){a=xv(a),i.context===null?i.context=a:i.pendingContext=a,i=Ma(e),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=Ea(t,i,e),n!==null&&(vn(n,t,e),fo(n,t,e))}function um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){um(t,e),(t=t.alternate)&&um(t,e)}function _v(t){if(t.tag===13||t.tag===31){var e=br(t,67108864);e!==null&&vn(e,t,67108864),bp(t,67108864)}}function fm(t){if(t.tag===13||t.tag===31){var e=On();e=Nh(e);var n=br(t,e);n!==null&&vn(n,t,e),bp(t,e)}}var Fc=!0;function fM(t,e,n,i){var a=De.T;De.T=null;var r=at.p;try{at.p=2,yp(t,e,n,i)}finally{at.p=r,De.T=a}}function dM(t,e,n,i){var a=De.T;De.T=null;var r=at.p;try{at.p=8,yp(t,e,n,i)}finally{at.p=r,De.T=a}}function yp(t,e,n,i){if(Fc){var a=wd(i);if(a===null)ef(t,e,i,Ic,n),dm(t,i);else if(pM(a,t,e,n,i))i.stopPropagation();else if(dm(t,i),e&4&&-1<hM.indexOf(t)){for(;a!==null;){var r=Ds(a);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Ja(r.pendingLanes);if(s!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-Ln(s);o.entanglements[1]|=l,s&=~l}_i(r),!(it&6)&&(Cc=Un()+500,Qo(0))}}break;case 31:case 13:o=br(r,2),o!==null&&vn(o,r,2),su(),bp(r,2)}if(r=wd(i),r===null&&ef(t,e,i,Ic,n),r===a)break;a=r}a!==null&&i.stopPropagation()}else ef(t,e,i,null,n)}}function wd(t){return t=zh(t),Mp(t)}var Ic=null;function Mp(t){if(Ic=null,t=qr(t),t!==null){var e=Vo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Fx(e),t!==null)return t;t=null}else if(n===31){if(t=Ix(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ic=t,null}function vv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(JS()){case Xx:return 2;case kx:return 8;case pc:case $S:return 32;case Wx:return 268435456;default:return 32}default:return 32}}var Dd=!1,Ra=null,Ca=null,wa=null,Lo=new Map,Oo=new Map,da=[],hM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dm(t,e){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function Ys(t,e,n,i,a,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[a]},e!==null&&(e=Ds(e),e!==null&&_v(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),t)}function pM(t,e,n,i,a){switch(e){case"focusin":return Ra=Ys(Ra,t,e,n,i,a),!0;case"dragenter":return Ca=Ys(Ca,t,e,n,i,a),!0;case"mouseover":return wa=Ys(wa,t,e,n,i,a),!0;case"pointerover":var r=a.pointerId;return Lo.set(r,Ys(Lo.get(r)||null,t,e,n,i,a)),!0;case"gotpointercapture":return r=a.pointerId,Oo.set(r,Ys(Oo.get(r)||null,t,e,n,i,a)),!0}return!1}function Sv(t){var e=qr(t.target);if(e!==null){var n=Vo(e);if(n!==null){if(e=n.tag,e===13){if(e=Fx(n),e!==null){t.blockedOn=e,Kp(t.priority,function(){fm(n)});return}}else if(e===31){if(e=Ix(n),e!==null){t.blockedOn=e,Kp(t.priority,function(){fm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wd(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);jf=i,n.target.dispatchEvent(i),jf=null}else return e=Ds(n),e!==null&&_v(e),t.blockedOn=n,!1;e.shift()}return!0}function hm(t,e,n){rc(t)&&n.delete(e)}function mM(){Dd=!1,Ra!==null&&rc(Ra)&&(Ra=null),Ca!==null&&rc(Ca)&&(Ca=null),wa!==null&&rc(wa)&&(wa=null),Lo.forEach(hm),Oo.forEach(hm)}function bl(t,e){t.blockedOn===e&&(t.blockedOn=null,Dd||(Dd=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,mM)))}var yl=null;function pm(t){yl!==t&&(yl=t,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,function(){yl===t&&(yl=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],a=t[e+2];if(typeof i!="function"){if(Mp(i||n)===null)continue;break}var r=Ds(n);r!==null&&(t.splice(e,3),e-=3,ud(r,{pending:!0,data:a,method:n.method,action:i},i,a))}}))}function bs(t){function e(l){return bl(l,t)}Ra!==null&&bl(Ra,t),Ca!==null&&bl(Ca,t),wa!==null&&bl(wa,t),Lo.forEach(e),Oo.forEach(e);for(var n=0;n<da.length;n++){var i=da[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<da.length&&(n=da[0],n.blockedOn===null);)Sv(n),n.blockedOn===null&&da.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var a=n[i],r=n[i+1],s=a[bn]||null;if(typeof r=="function")s||pm(n);else if(s){var o=null;if(r&&r.hasAttribute("formAction")){if(a=r,s=r[bn]||null)o=s.formAction;else if(Mp(a)!==null)continue}else o=s.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),pm(n)}}}function bv(){function t(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function e(){a!==null&&(a(),a=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),a!==null&&(a(),a=null)}}}function Ep(t){this._internalRoot=t}cu.prototype.render=Ep.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Y(409));var n=e.current,i=On();gv(n,i,t,e,null,null)};cu.prototype.unmount=Ep.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gv(t.current,2,null,t,null,null),su(),e[ws]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<da.length&&e!==0&&e<da[n].priority;n++);da.splice(n,0,t),n===0&&Sv(t)}};var mm=zx.version;if(mm!=="19.2.0")throw Error(Y(527,mm,"19.2.0"));at.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Y(188)):(t=Object.keys(t).join(","),Error(Y(268,t)));return t=WS(e),t=t!==null?Hx(t):null,t=t===null?null:t.stateNode,t};var xM={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:De,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Xo=Ml.inject(xM),Nn=Ml}catch{}}qc.createRoot=function(t,e){if(!Bx(t))throw Error(Y(299));var n=!1,i="",a=d_,r=h_,s=p_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=mv(t,1,!1,null,null,n,i,null,a,r,s,bv),t[ws]=e.current,_p(t),new Ep(e)};qc.hydrateRoot=function(t,e,n){if(!Bx(t))throw Error(Y(299));var i=!1,a="",r=d_,s=h_,o=p_,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=mv(t,1,!0,e,n??null,i,a,l,r,s,o,bv),e.context=xv(null),n=e.current,i=On(),i=Nh(i),a=Ma(i),a.callback=null,Ea(n,a,i),n=i,e.current.lanes=n,Wo(e,n),_i(e),t[ws]=e.current,_p(t),new cu(e)};qc.version="19.2.0";function yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yv)}catch(t){console.error(t)}}yv(),Dx.exports=qc;var gM=Dx.exports;const _M=vx(gM);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Po.apply(this,arguments)}var va;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(va||(va={}));const xm="popstate";function vM(t){t===void 0&&(t={});function e(i,a){let{pathname:r,search:s,hash:o}=i.location;return Ud("",{pathname:r,search:s,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){return typeof a=="string"?a:Hc(a)}return bM(e,n,null,t)}function Nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SM(){return Math.random().toString(36).substr(2,8)}function gm(t,e){return{usr:t.state,key:t.key,idx:e}}function Ud(t,e,n,i){return n===void 0&&(n=null),Po({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zs(e):e,{state:n,key:e&&e.key||i||SM()})}function Hc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function zs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function bM(t,e,n,i){i===void 0&&(i={});let{window:a=document.defaultView,v5Compat:r=!1}=i,s=a.history,o=va.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(Po({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){o=va.Pop;let m=d(),u=m==null?null:m-c;c=m,l&&l({action:o,location:v.location,delta:u})}function h(m,u){o=va.Push;let x=Ud(v.location,m,u);c=d()+1;let g=gm(x,c),b=v.createHref(x);try{s.pushState(g,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;a.location.assign(b)}r&&l&&l({action:o,location:v.location,delta:1})}function p(m,u){o=va.Replace;let x=Ud(v.location,m,u);c=d();let g=gm(x,c),b=v.createHref(x);s.replaceState(g,"",b),r&&l&&l({action:o,location:v.location,delta:0})}function _(m){let u=a.location.origin!=="null"?a.location.origin:a.location.href,x=typeof m=="string"?m:Hc(m);return x=x.replace(/ $/,"%20"),Nt(u,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,u)}let v={get action(){return o},get location(){return t(a,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(xm,f),l=m,()=>{a.removeEventListener(xm,f),l=null}},createHref(m){return e(a,m)},createURL:_,encodeLocation(m){let u=_(m);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:p,go(m){return s.go(m)}};return v}var _m;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_m||(_m={}));function yM(t,e,n){return n===void 0&&(n="/"),MM(t,e,n)}function MM(t,e,n,i){let a=typeof e=="string"?zs(e):e,r=ys(a.pathname||"/",n);if(r==null)return null;let s=Ev(t);EM(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=PM(r);o=LM(s[l],c)}return o}function Ev(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let a=(r,s,o)=>{let l={relativePath:o===void 0?r.path||"":o,caseSensitive:r.caseSensitive===!0,childrenIndex:s,route:r};l.relativePath.startsWith("/")&&(Nt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Da([i,l.relativePath]),d=n.concat(l);r.children&&r.children.length>0&&(Nt(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ev(r.children,e,d,c)),!(r.path==null&&!r.index)&&e.push({path:c,score:UM(c,r.index),routesMeta:d})};return t.forEach((r,s)=>{var o;if(r.path===""||!((o=r.path)!=null&&o.includes("?")))a(r,s);else for(let l of Tv(r.path))a(r,s,l)}),e}function Tv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(i.length===0)return a?[r,""]:[r];let s=Tv(i.join("/")),o=[];return o.push(...s.map(l=>l===""?r:[r,l].join("/"))),a&&o.push(...s),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function EM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const TM=/^:[\w-]+$/,AM=3,RM=2,CM=1,wM=10,DM=-2,vm=t=>t==="*";function UM(t,e){let n=t.split("/"),i=n.length;return n.some(vm)&&(i+=DM),e&&(i+=RM),n.filter(a=>!vm(a)).reduce((a,r)=>a+(TM.test(r)?AM:r===""?CM:wM),i)}function NM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,a)=>i===e[a])?t[t.length-1]-e[e.length-1]:0}function LM(t,e,n){let{routesMeta:i}=t,a={},r="/",s=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=r==="/"?e:e.slice(r.length)||"/",f=Nd({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!f)return null;Object.assign(a,f.params),s.push({params:a,pathname:Da([r,f.pathname]),pathnameBase:IM(Da([r,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(r=Da([r,f.pathnameBase]))}return s}function Nd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=OM(t.path,t.caseSensitive,t.end),a=e.match(n);if(!a)return null;let r=a[0],s=r.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:i.reduce((c,d,f)=>{let{paramName:h,isOptional:p}=d;if(h==="*"){let v=o[f]||"";s=r.slice(0,r.length-v.length).replace(/(.)\/+$/,"$1")}const _=o[f];return p&&!_?c[h]=void 0:c[h]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:s,pattern:t}}function OM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function PM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ys(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function zM(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:a=""}=typeof t=="string"?zs(t):t;return{pathname:n?n.startsWith("/")?n:BM(n,e):e,search:HM(i),hash:GM(a)}}function BM(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function af(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function FM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Av(t,e){let n=FM(t);return e?n.map((i,a)=>a===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Rv(t,e,n,i){i===void 0&&(i=!1);let a;typeof t=="string"?a=zs(t):(a=Po({},t),Nt(!a.pathname||!a.pathname.includes("?"),af("?","pathname","search",a)),Nt(!a.pathname||!a.pathname.includes("#"),af("#","pathname","hash",a)),Nt(!a.search||!a.search.includes("#"),af("#","search","hash",a)));let r=t===""||a.pathname==="",s=r?"/":a.pathname,o;if(s==null)o=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;a.pathname=h.join("/")}o=f>=0?e[f]:"/"}let l=zM(a,o),c=s&&s!=="/"&&s.endsWith("/"),d=(r||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Da=t=>t.join("/").replace(/\/\/+/g,"/"),IM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),HM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,GM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Cv=["post","put","patch","delete"];new Set(Cv);const XM=["get",...Cv];new Set(XM);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},zo.apply(this,arguments)}const uu=fe.createContext(null),wv=fe.createContext(null),Ha=fe.createContext(null),fu=fe.createContext(null),Mr=fe.createContext({outlet:null,matches:[],isDataRoute:!1}),Dv=fe.createContext(null);function kM(t,e){let{relative:n}=e===void 0?{}:e;el()||Nt(!1);let{basename:i,navigator:a}=fe.useContext(Ha),{hash:r,pathname:s,search:o}=du(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Da([i,s])),a.createHref({pathname:l,search:o,hash:r})}function el(){return fe.useContext(fu)!=null}function tl(){return el()||Nt(!1),fe.useContext(fu).location}function Uv(t){fe.useContext(Ha).static||fe.useLayoutEffect(t)}function WM(){let{isDataRoute:t}=fe.useContext(Mr);return t?a3():qM()}function qM(){el()||Nt(!1);let t=fe.useContext(uu),{basename:e,future:n,navigator:i}=fe.useContext(Ha),{matches:a}=fe.useContext(Mr),{pathname:r}=tl(),s=JSON.stringify(Av(a,n.v7_relativeSplatPath)),o=fe.useRef(!1);return Uv(()=>{o.current=!0}),fe.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let f=Rv(c,JSON.parse(s),r,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Da([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,s,r,t])}function du(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=fe.useContext(Ha),{matches:a}=fe.useContext(Mr),{pathname:r}=tl(),s=JSON.stringify(Av(a,i.v7_relativeSplatPath));return fe.useMemo(()=>Rv(t,JSON.parse(s),r,n==="path"),[t,s,r,n])}function YM(t,e){return jM(t,e)}function jM(t,e,n,i){el()||Nt(!1);let{navigator:a}=fe.useContext(Ha),{matches:r}=fe.useContext(Mr),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=tl(),d;if(e){var f;let m=typeof e=="string"?zs(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||Nt(!1),d=m}else d=c;let h=d.pathname||"/",p=h;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let _=yM(t,{pathname:p}),v=$M(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Da([l,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Da([l,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),r,n,i);return e&&v?fe.createElement(fu.Provider,{value:{location:zo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:va.Pop}},v):v}function ZM(){let t=i3(),e=VM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return fe.createElement(fe.Fragment,null,fe.createElement("h2",null,"Unexpected Application Error!"),fe.createElement("h3",{style:{fontStyle:"italic"}},e),n?fe.createElement("pre",{style:a},n):null,null)}const KM=fe.createElement(ZM,null);class QM extends fe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?fe.createElement(Mr.Provider,{value:this.props.routeContext},fe.createElement(Dv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function JM(t){let{routeContext:e,match:n,children:i}=t,a=fe.useContext(uu);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),fe.createElement(Mr.Provider,{value:e},i)}function $M(t,e,n,i){var a;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var r;if(!n)return null;if(n.errors)t=n.matches;else if((r=i)!=null&&r.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,o=(a=n)==null?void 0:a.errors;if(o!=null){let d=s.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||Nt(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:h,errors:p}=n,_=f.route.loader&&h[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||_){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,h)=>{let p,_=!1,v=null,m=null;n&&(p=o&&f.route.id?o[f.route.id]:void 0,v=f.route.errorElement||KM,l&&(c<0&&h===0?(r3("route-fallback"),_=!0,m=null):c===h&&(_=!0,m=f.route.hydrateFallbackElement||null)));let u=e.concat(s.slice(0,h+1)),x=()=>{let g;return p?g=v:_?g=m:f.route.Component?g=fe.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,fe.createElement(JM,{match:f,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?fe.createElement(QM,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:x(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):x()},null)}var Nv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Nv||{}),Lv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Lv||{});function e3(t){let e=fe.useContext(uu);return e||Nt(!1),e}function t3(t){let e=fe.useContext(wv);return e||Nt(!1),e}function n3(t){let e=fe.useContext(Mr);return e||Nt(!1),e}function Ov(t){let e=n3(),n=e.matches[e.matches.length-1];return n.route.id||Nt(!1),n.route.id}function i3(){var t;let e=fe.useContext(Dv),n=t3(),i=Ov();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function a3(){let{router:t}=e3(Nv.UseNavigateStable),e=Ov(Lv.UseNavigateStable),n=fe.useRef(!1);return Uv(()=>{n.current=!0}),fe.useCallback(function(a,r){r===void 0&&(r={}),n.current&&(typeof a=="number"?t.navigate(a):t.navigate(a,zo({fromRouteId:e},r)))},[t,e])}const Sm={};function r3(t,e,n){Sm[t]||(Sm[t]=!0)}function s3(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Di(t){Nt(!1)}function o3(t){let{basename:e="/",children:n=null,location:i,navigationType:a=va.Pop,navigator:r,static:s=!1,future:o}=t;el()&&Nt(!1);let l=e.replace(/^\/*/,"/"),c=fe.useMemo(()=>({basename:l,navigator:r,static:s,future:zo({v7_relativeSplatPath:!1},o)}),[l,o,r,s]);typeof i=="string"&&(i=zs(i));let{pathname:d="/",search:f="",hash:h="",state:p=null,key:_="default"}=i,v=fe.useMemo(()=>{let m=ys(d,l);return m==null?null:{location:{pathname:m,search:f,hash:h,state:p,key:_},navigationType:a}},[l,d,f,h,p,_,a]);return v==null?null:fe.createElement(Ha.Provider,{value:c},fe.createElement(fu.Provider,{children:n,value:v}))}function l3(t){let{children:e,location:n}=t;return YM(Ld(e),n)}new Promise(()=>{});function Ld(t,e){e===void 0&&(e=[]);let n=[];return fe.Children.forEach(t,(i,a)=>{if(!fe.isValidElement(i))return;let r=[...e,a];if(i.type===fe.Fragment){n.push.apply(n,Ld(i.props.children,r));return}i.type!==Di&&Nt(!1),!i.props.index||!i.props.children||Nt(!1);let s={id:i.props.id||r.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(s.children=Ld(i.props.children,r)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gc(){return Gc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Gc.apply(this,arguments)}function Pv(t,e){if(t==null)return{};var n={},i=Object.keys(t),a,r;for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function c3(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function u3(t,e){return t.button===0&&(!e||e==="_self")&&!c3(t)}const f3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],d3=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],h3="6";try{window.__reactRouterVersion=h3}catch{}const p3=fe.createContext({isTransitioning:!1}),m3="startTransition",bm=FS[m3];function x3(t){let{basename:e,children:n,future:i,window:a}=t,r=fe.useRef();r.current==null&&(r.current=vM({window:a,v5Compat:!0}));let s=r.current,[o,l]=fe.useState({action:s.action,location:s.location}),{v7_startTransition:c}=i||{},d=fe.useCallback(f=>{c&&bm?bm(()=>l(f)):l(f)},[l,c]);return fe.useLayoutEffect(()=>s.listen(d),[s,d]),fe.useEffect(()=>s3(i),[i]),fe.createElement(o3,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s,future:i})}const g3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zv=fe.forwardRef(function(e,n){let{onClick:i,relative:a,reloadDocument:r,replace:s,state:o,target:l,to:c,preventScrollReset:d,viewTransition:f}=e,h=Pv(e,f3),{basename:p}=fe.useContext(Ha),_,v=!1;if(typeof c=="string"&&_3.test(c)&&(_=c,g3))try{let g=new URL(window.location.href),b=c.startsWith("//")?new URL(g.protocol+c):new URL(c),C=ys(b.pathname,p);b.origin===g.origin&&C!=null?c=C+b.search+b.hash:v=!0}catch{}let m=kM(c,{relative:a}),u=S3(c,{replace:s,state:o,target:l,preventScrollReset:d,relative:a,viewTransition:f});function x(g){i&&i(g),g.defaultPrevented||u(g)}return fe.createElement("a",Gc({},h,{href:_||m,onClick:v||r?i:x,ref:n,target:l}))}),ym=fe.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:a=!1,className:r="",end:s=!1,style:o,to:l,viewTransition:c,children:d}=e,f=Pv(e,d3),h=du(l,{relative:f.relative}),p=tl(),_=fe.useContext(wv),{navigator:v,basename:m}=fe.useContext(Ha),u=_!=null&&b3(h)&&c===!0,x=v.encodeLocation?v.encodeLocation(h).pathname:h.pathname,g=p.pathname,b=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;a||(g=g.toLowerCase(),b=b?b.toLowerCase():null,x=x.toLowerCase()),b&&m&&(b=ys(b,m)||b);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let T=g===x||!s&&g.startsWith(x)&&g.charAt(C)==="/",R=b!=null&&(b===x||!s&&b.startsWith(x)&&b.charAt(x.length)==="/"),N={isActive:T,isPending:R,isTransitioning:u},E=T?i:void 0,y;typeof r=="function"?y=r(N):y=[r,T?"active":null,R?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let U=typeof o=="function"?o(N):o;return fe.createElement(zv,Gc({},f,{"aria-current":E,className:y,ref:n,style:U,to:l,viewTransition:c}),typeof d=="function"?d(N):d)});var Od;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Od||(Od={}));var Mm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mm||(Mm={}));function v3(t){let e=fe.useContext(uu);return e||Nt(!1),e}function S3(t,e){let{target:n,replace:i,state:a,preventScrollReset:r,relative:s,viewTransition:o}=e===void 0?{}:e,l=WM(),c=tl(),d=du(t,{relative:s});return fe.useCallback(f=>{if(u3(f,n)){f.preventDefault();let h=i!==void 0?i:Hc(c)===Hc(d);l(t,{replace:h,state:a,preventScrollReset:r,relative:s,viewTransition:o})}},[c,l,d,i,a,n,t,r,s,o])}function b3(t,e){e===void 0&&(e={});let n=fe.useContext(p3);n==null&&Nt(!1);let{basename:i}=v3(Od.useViewTransitionState),a=du(t,{relative:e.relative});if(!n.isTransitioning)return!1;let r=ys(n.currentLocation.pathname,i)||n.currentLocation.pathname,s=ys(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Nd(a.pathname,s)!=null||Nd(a.pathname,r)!=null}function y3(){const[t,e]=fe.useState(!1),n=[{name:"Home",path:"/"},{name:"Fees",path:"/fees"},{name:"Admissions",path:"/admissions"},{name:"Gallery",path:"/gallery"},{name:"Contact",path:"/contact"},{name:"Faculty",path:"/faculty"},{name:"Login",path:"/login"}];return z.jsxs("header",{className:"w-full fixed top-0 left-0 z-50 bg-blue-900 text-white shadow",children:[z.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between px-6 py-4",children:[z.jsx(zv,{to:"/",className:"text-2xl font-bold text-yellow-300",children:"Siddartha Model High School"}),z.jsx("nav",{className:"hidden md:flex gap-8",children:n.map(i=>z.jsx(ym,{to:i.path,className:({isActive:a})=>`hover:text-yellow-300 transition ${a?"text-yellow-300 font-semibold":""}`,children:i.name},i.name))}),z.jsx("button",{className:"md:hidden text-2xl",onClick:()=>e(!t),children:"☰"})]}),t&&z.jsx("div",{className:"md:hidden bg-blue-800 px-6 pb-4 animate-slideDown",children:z.jsx("nav",{className:"flex flex-col gap-4",children:n.map(i=>z.jsx(ym,{to:i.path,onClick:()=>e(!1),className:({isActive:a})=>`hover:text-yellow-300 transition ${a?"text-yellow-300 font-semibold":""}`,children:i.name},i.name))})})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tp="181",M3=0,Em=1,E3=2,Bv=1,T3=2,Ui=3,za=0,Sn=1,Oi=2,Xi=0,cs=1,Tm=2,Am=3,Rm=4,A3=5,nr=100,R3=101,C3=102,w3=103,D3=104,U3=200,N3=201,L3=202,O3=203,Pd=204,zd=205,P3=206,z3=207,B3=208,F3=209,I3=210,H3=211,G3=212,V3=213,X3=214,Bd=0,Fd=1,Id=2,Ms=3,Hd=4,Gd=5,Vd=6,Xd=7,Fv=0,k3=1,W3=2,Ua=0,q3=1,Y3=2,j3=3,Z3=4,K3=5,Q3=6,J3=7,Iv=300,Es=301,Ts=302,kd=303,Wd=304,hu=306,qd=1e3,Fi=1001,Yd=1002,Pn=1003,$3=1004,El=1005,Kn=1006,rf=1007,ar=1008,Ki=1009,Hv=1010,Gv=1011,Bo=1012,Ap=1013,xr=1014,Ii=1015,Bs=1016,Rp=1017,Cp=1018,Fo=1020,Vv=35902,Xv=35899,kv=1021,Wv=1022,oi=1023,Io=1026,Ho=1027,qv=1028,wp=1029,Dp=1030,Up=1031,Np=1033,sc=33776,oc=33777,lc=33778,cc=33779,jd=35840,Zd=35841,Kd=35842,Qd=35843,Jd=36196,$d=37492,eh=37496,th=37808,nh=37809,ih=37810,ah=37811,rh=37812,sh=37813,oh=37814,lh=37815,ch=37816,uh=37817,fh=37818,dh=37819,hh=37820,ph=37821,mh=36492,xh=36494,gh=36495,_h=36283,vh=36284,Sh=36285,bh=36286,e1=3200,t1=3201,n1=0,i1=1,ha="",Vn="srgb",As="srgb-linear",Vc="linear",ct="srgb",Rr=7680,Cm=519,a1=512,r1=513,s1=514,Yv=515,o1=516,l1=517,c1=518,u1=519,wm=35044,Dm="300 es",pi=2e3,Xc=2001;function jv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function kc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function f1(){const t=kc("canvas");return t.style.display="block",t}const Um={};function Nm(...t){const e="THREE."+t.shift();console.log(e,...t)}function Be(...t){const e="THREE."+t.shift();console.warn(e,...t)}function Ot(...t){const e="THREE."+t.shift();console.error(e,...t)}function Go(...t){const e=t.join(" ");e in Um||(Um[e]=!0,Be(...t))}function d1(t,e,n){return new Promise(function(i,a){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}class Fs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const r=a.indexOf(n);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,yh=180/Math.PI;function nl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function Ke(t,e,n){return Math.max(e,Math.min(n,t))}function h1(t,e){return(t%e+e)%e}function of(t,e,n){return(1-n)*t+n*e}function js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,n=0){ht.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6],this.y=a[1]*n+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),a=Math.sin(n),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*a+e.x,this.y=r*a+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class il{constructor(e=0,n=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=a}static slerpFlat(e,n,i,a,r,s,o){let l=i[a+0],c=i[a+1],d=i[a+2],f=i[a+3],h=r[s+0],p=r[s+1],_=r[s+2],v=r[s+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o>=1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=v;return}if(f!==v||l!==h||c!==p||d!==_){let m=l*h+c*p+d*_+f*v;m<0&&(h=-h,p=-p,_=-_,v=-v,m=-m);let u=1-o;if(m<.9995){const x=Math.acos(m),g=Math.sin(x);u=Math.sin(u*x)/g,o=Math.sin(o*x)/g,l=l*u+h*o,c=c*u+p*o,d=d*u+_*o,f=f*u+v*o}else{l=l*u+h*o,c=c*u+p*o,d=d*u+_*o,f=f*u+v*o;const x=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=x,c*=x,d*=x,f*=x}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,a,r,s){const o=i[a],l=i[a+1],c=i[a+2],d=i[a+3],f=r[s],h=r[s+1],p=r[s+2],_=r[s+3];return e[n]=o*_+d*f+l*p-c*h,e[n+1]=l*_+d*h+c*f-o*p,e[n+2]=c*_+d*p+o*h-l*f,e[n+3]=d*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,a){return this._x=e,this._y=n,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(a/2),f=o(r/2),h=l(i/2),p=l(a/2),_=l(r/2);switch(s){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],a=n[4],r=n[8],s=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(r-c)*p,this._z=(s-a)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(r-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(s-a)/p,this._x=(r+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,n/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,a=e._y,r=e._z,s=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*o+a*c-r*l,this._y=a*d+s*l+r*o-i*c,this._z=r*d+s*c+i*l-a*o,this._w=s*d-i*o-a*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,a=e._y,r=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,a=-a,r=-r,s=-s,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,n=Math.sin(n*c)/d,this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+a*n,this._z=this._z*l+r*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*a,this.y=r[1]*n+r[4]*i+r[7]*a,this.z=r[2]*n+r[5]*i+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=e.elements,s=1/(r[3]*n+r[7]*i+r[11]*a+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*a+r[12])*s,this.y=(r[1]*n+r[5]*i+r[9]*a+r[13])*s,this.z=(r[2]*n+r[6]*i+r[10]*a+r[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,a=this.z,r=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*a-o*i),d=2*(o*n-r*a),f=2*(r*i-s*n);return this.x=n+l*c+s*f-o*d,this.y=i+l*d+o*c-r*f,this.z=a+l*f+r*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,a=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*a,this.y=r[1]*n+r[5]*i+r[9]*a,this.z=r[2]*n+r[6]*i+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,a=e.y,r=e.z,s=n.x,o=n.y,l=n.z;return this.x=a*l-r*o,this.y=r*s-i*l,this.z=i*o-a*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lf.copy(this).projectOnVector(e),this.sub(lf)}reflect(e){return this.sub(lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return n*n+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const a=Math.sin(n)*e;return this.x=a*Math.sin(i),this.y=Math.cos(n)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lf=new X,Lm=new il;class Ie{constructor(e,n,i,a,r,s,o,l,c){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c)}set(e,n,i,a,r,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=o,d[3]=n,d[4]=r,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=a[0],m=a[3],u=a[6],x=a[1],g=a[4],b=a[7],C=a[2],T=a[5],R=a[8];return r[0]=s*v+o*x+l*C,r[3]=s*m+o*g+l*T,r[6]=s*u+o*b+l*R,r[1]=c*v+d*x+f*C,r[4]=c*m+d*g+f*T,r[7]=c*u+d*b+f*R,r[2]=h*v+p*x+_*C,r[5]=h*m+p*g+_*T,r[8]=h*u+p*b+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*o*c-i*r*d+i*o*l+a*r*c-a*s*l}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,h=o*l-d*r,p=c*r-s*l,_=n*f+i*h+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(a*c-d*i)*v,e[2]=(o*i-a*s)*v,e[3]=h*v,e[4]=(d*n-a*l)*v,e[5]=(a*r-o*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(s*n-i*r)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,a,r,s,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-a*c,a*l,-a*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(cf.makeScale(e,n)),this}rotate(e){return this.premultiply(cf.makeRotation(-e)),this}translate(e,n){return this.premultiply(cf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<9;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cf=new Ie,Om=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p1(){const t={enabled:!0,workingColorSpace:As,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===ct&&(a.r=ki(a.r),a.g=ki(a.g),a.b=ki(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ct&&(a.r=us(a.r),a.g=us(a.g),a.b=us(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ha?Vc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[As]:{primaries:e,whitePoint:i,transfer:Vc,toXYZ:Om,fromXYZ:Pm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Om,fromXYZ:Pm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),t}const tt=p1();function ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cr;class m1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Cr===void 0&&(Cr=kc("canvas")),Cr.width=e.width,Cr.height=e.height;const a=Cr.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=Cr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=kc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ki(r[s]/255)*255;return i.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let x1=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=nl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(uf(a[s].image)):r.push(uf(a[s]))}else r=uf(a);i.url=r}return n||(e.images[this.uuid]=i),i}}function uf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?m1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let g1=0;const ff=new X;class un extends Fs{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Fi,a=Fi,r=Kn,s=ar,o=oi,l=Ki,c=un.DEFAULT_ANISOTROPY,d=ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=nl(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ff).x}get height(){return this.source.getSize(ff).y}get depth(){return this.source.getSize(ff).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Iv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Iv;un.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,a=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,a){return this.x=e,this.y=n,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*a+s[12]*r,this.y=s[1]*n+s[5]*i+s[9]*a+s[13]*r,this.z=s[2]*n+s[6]*i+s[10]*a+s[14]*r,this.w=s[3]*n+s[7]*i+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,a,r;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,b=(p+1)/2,C=(u+1)/2,T=(d+h)/4,R=(f+v)/4,N=(_+m)/4;return g>b&&g>C?g<.01?(i=0,a=.707106781,r=.707106781):(i=Math.sqrt(g),a=T/i,r=R/i):b>C?b<.01?(i=.707106781,a=0,r=.707106781):(a=Math.sqrt(b),i=T/a,r=N/a):C<.01?(i=.707106781,a=.707106781,r=0):(r=Math.sqrt(C),i=R/r,a=N/r),this.set(i,a,r,n),this}let x=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(f-v)/x,this.z=(h-d)/x,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ke(this.x,e.x,n.x),this.y=Ke(this.y,e.y,n.y),this.z=Ke(this.z,e.z,n.z),this.w=Ke(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ke(this.x,e,n),this.y=Ke(this.y,e,n),this.z=Ke(this.z,e,n),this.w=Ke(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _1 extends Fs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const a={width:e,height:n,depth:i.depth},r=new un(a);this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Lp(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends _1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Zv extends un{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class v1 extends un{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class al{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ni):ni.fromBufferAttribute(r,s),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tl.copy(i.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Al.subVectors(this.max,Zs),wr.subVectors(e.a,Zs),Dr.subVectors(e.b,Zs),Ur.subVectors(e.c,Zs),ta.subVectors(Dr,wr),na.subVectors(Ur,Dr),Wa.subVectors(wr,Ur);let n=[0,-ta.z,ta.y,0,-na.z,na.y,0,-Wa.z,Wa.y,ta.z,0,-ta.x,na.z,0,-na.x,Wa.z,0,-Wa.x,-ta.y,ta.x,0,-na.y,na.x,0,-Wa.y,Wa.x,0];return!df(n,wr,Dr,Ur,Al)||(n=[1,0,0,0,1,0,0,0,1],!df(n,wr,Dr,Ur,Al))?!1:(Rl.crossVectors(ta,na),n=[Rl.x,Rl.y,Rl.z],df(n,wr,Dr,Ur,Al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new X,new X,new X,new X,new X,new X,new X,new X],ni=new X,Tl=new al,wr=new X,Dr=new X,Ur=new X,ta=new X,na=new X,Wa=new X,Zs=new X,Al=new X,Rl=new X,qa=new X;function df(t,e,n,i,a){for(let r=0,s=t.length-3;r<=s;r+=3){qa.fromArray(t,r);const o=a.x*Math.abs(qa.x)+a.y*Math.abs(qa.y)+a.z*Math.abs(qa.z),l=e.dot(qa),c=n.dot(qa),d=i.dot(qa);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const S1=new al,Ks=new X,hf=new X;class Op{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):S1.setFromPoints(e).getCenter(i);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),a=(i-this.radius)*.5;this.center.addScaledVector(Ks,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(hf)),this.expandByPoint(Ks.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ei=new X,pf=new X,Cl=new X,ia=new X,mf=new X,wl=new X,xf=new X;class b1{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,a){pf.copy(e).add(n).multiplyScalar(.5),Cl.copy(n).sub(e).normalize(),ia.copy(this.origin).sub(pf);const r=e.distanceTo(n)*.5,s=-this.direction.dot(Cl),o=ia.dot(this.direction),l=-ia.dot(Cl),c=ia.lengthSq(),d=Math.abs(1-s*s);let f,h,p,_;if(d>0)if(f=s*l-o,h=s*o-l,_=r*d,f>=0)if(h>=-_)if(h<=_){const v=1/d;f*=v,h*=v,p=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-s*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(f=Math.max(0,-(s*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+h*(h+2*l)+c);else h=s>0?-r:r,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(pf).addScaledVector(Cl,h),p}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),a=Ei.dot(Ei)-i*i,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,a,r,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||r>a||((r>i||isNaN(i))&&(i=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>a)||((o>i||i!==i)&&(i=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,a,r){mf.subVectors(n,e),wl.subVectors(i,e),xf.crossVectors(mf,wl);let s=this.direction.dot(xf),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ia.subVectors(this.origin,e);const l=o*this.direction.dot(wl.crossVectors(ia,wl));if(l<0)return null;const c=o*this.direction.dot(mf.cross(ia));if(c<0||l+c>s)return null;const d=-o*ia.dot(xf);return d<0?null:this.at(d/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,n,i,a,r,s,o,l,c,d,f,h,p,_,v,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,a,r,s,o,l,c,d,f,h,p,_,v,m)}set(e,n,i,a,r,s,o,l,c,d,f,h,p,_,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=a,u[1]=r,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,a=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),s=1/Nr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*a,n[1]=i[1]*a,n[2]=i[2]*a,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,a=e.y,r=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=s*d,p=s*f,_=o*d,v=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-v*c,n[9]=-o*l,n[2]=v-h*c,n[6]=_+p*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,v=c*f;n[0]=h+v*o,n[4]=_*o-p,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-o,n[2]=p*o-_,n[6]=v+h*o,n[10]=s*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,v=c*f;n[0]=h-v*o,n[4]=-s*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=s*d,n[9]=v-h*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const h=s*d,p=s*f,_=o*d,v=o*f;n[0]=l*d,n[4]=_*c-p,n[8]=h*c+v,n[1]=l*f,n[5]=v*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,_=o*l,v=o*c;n[0]=l*d,n[4]=v-h*f,n[8]=_*f+p,n[1]=f,n[5]=s*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*f+_,n[10]=h-v*f}else if(e.order==="XZY"){const h=s*l,p=s*c,_=o*l,v=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+v,n[5]=s*d,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*d,n[10]=v*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y1,e,M1)}lookAt(e,n,i){const a=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),aa.crossVectors(i,Tn),aa.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),aa.crossVectors(i,Tn)),aa.normalize(),Dl.crossVectors(Tn,aa),a[0]=aa.x,a[4]=Dl.x,a[8]=Tn.x,a[1]=aa.y,a[5]=Dl.y,a[9]=Tn.y,a[2]=aa.z,a[6]=Dl.z,a[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,a=n.elements,r=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],u=i[14],x=i[3],g=i[7],b=i[11],C=i[15],T=a[0],R=a[4],N=a[8],E=a[12],y=a[1],U=a[5],I=a[9],W=a[13],Q=a[2],q=a[6],O=a[10],V=a[14],B=a[3],J=a[7],ne=a[11],Se=a[15];return r[0]=s*T+o*y+l*Q+c*B,r[4]=s*R+o*U+l*q+c*J,r[8]=s*N+o*I+l*O+c*ne,r[12]=s*E+o*W+l*V+c*Se,r[1]=d*T+f*y+h*Q+p*B,r[5]=d*R+f*U+h*q+p*J,r[9]=d*N+f*I+h*O+p*ne,r[13]=d*E+f*W+h*V+p*Se,r[2]=_*T+v*y+m*Q+u*B,r[6]=_*R+v*U+m*q+u*J,r[10]=_*N+v*I+m*O+u*ne,r[14]=_*E+v*W+m*V+u*Se,r[3]=x*T+g*y+b*Q+C*B,r[7]=x*R+g*U+b*q+C*J,r[11]=x*N+g*I+b*O+C*ne,r[15]=x*E+g*W+b*V+C*Se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],a=e[8],r=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],u=e[15];return _*(+r*l*f-a*c*f-r*o*h+i*c*h+a*o*p-i*l*p)+v*(+n*l*p-n*c*h+r*s*h-a*s*p+a*c*d-r*l*d)+m*(+n*c*f-n*o*p-r*s*f+i*s*p+r*o*d-i*c*d)+u*(-a*o*d-n*l*f+n*o*h+a*s*f-i*s*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],a=e[2],r=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],u=e[15],x=f*m*c-v*h*c+v*l*p-o*m*p-f*l*u+o*h*u,g=_*h*c-d*m*c-_*l*p+s*m*p+d*l*u-s*h*u,b=d*v*c-_*f*c+_*o*p-s*v*p-d*o*u+s*f*u,C=_*f*l-d*v*l-_*o*h+s*v*h+d*o*m-s*f*m,T=n*x+i*g+a*b+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=x*R,e[1]=(v*h*r-f*m*r-v*a*p+i*m*p+f*a*u-i*h*u)*R,e[2]=(o*m*r-v*l*r+v*a*c-i*m*c-o*a*u+i*l*u)*R,e[3]=(f*l*r-o*h*r-f*a*c+i*h*c+o*a*p-i*l*p)*R,e[4]=g*R,e[5]=(d*m*r-_*h*r+_*a*p-n*m*p-d*a*u+n*h*u)*R,e[6]=(_*l*r-s*m*r-_*a*c+n*m*c+s*a*u-n*l*u)*R,e[7]=(s*h*r-d*l*r+d*a*c-n*h*c-s*a*p+n*l*p)*R,e[8]=b*R,e[9]=(_*f*r-d*v*r-_*i*p+n*v*p+d*i*u-n*f*u)*R,e[10]=(s*v*r-_*o*r+_*i*c-n*v*c-s*i*u+n*o*u)*R,e[11]=(d*o*r-s*f*r-d*i*c+n*f*c+s*i*p-n*o*p)*R,e[12]=C*R,e[13]=(d*v*a-_*f*a+_*i*h-n*v*h-d*i*m+n*f*m)*R,e[14]=(_*o*a-s*v*a-_*i*l+n*v*l+s*i*m-n*o*m)*R,e[15]=(s*f*a-d*o*a+d*i*l-n*f*l-s*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,a=e.y,r=e.z;return n[0]*=i,n[4]*=a,n[8]*=r,n[1]*=i,n[5]*=a,n[9]*=r,n[2]*=i,n[6]*=a,n[10]*=r,n[3]*=i,n[7]*=a,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,a))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),a=Math.sin(n),r=1-i,s=e.x,o=e.y,l=e.z,c=r*s,d=r*o;return this.set(c*s+i,c*o-a*l,c*l+a*o,0,c*o+a*l,d*o+i,d*l-a*s,0,c*l-a*o,d*l+a*s,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,a,r,s){return this.set(1,i,r,0,e,1,s,0,n,a,1,0,0,0,0,1),this}compose(e,n,i){const a=this.elements,r=n._x,s=n._y,o=n._z,l=n._w,c=r+r,d=s+s,f=o+o,h=r*c,p=r*d,_=r*f,v=s*d,m=s*f,u=o*f,x=l*c,g=l*d,b=l*f,C=i.x,T=i.y,R=i.z;return a[0]=(1-(v+u))*C,a[1]=(p+b)*C,a[2]=(_-g)*C,a[3]=0,a[4]=(p-b)*T,a[5]=(1-(h+u))*T,a[6]=(m+x)*T,a[7]=0,a[8]=(_+g)*R,a[9]=(m-x)*R,a[10]=(1-(h+v))*R,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,i){const a=this.elements;let r=Nr.set(a[0],a[1],a[2]).length();const s=Nr.set(a[4],a[5],a[6]).length(),o=Nr.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],ii.copy(this);const c=1/r,d=1/s,f=1/o;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=d,ii.elements[5]*=d,ii.elements[6]*=d,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,n.setFromRotationMatrix(ii),i.x=r,i.y=s,i.z=o,this}makePerspective(e,n,i,a,r,s,o=pi,l=!1){const c=this.elements,d=2*r/(n-e),f=2*r/(i-a),h=(n+e)/(n-e),p=(i+a)/(i-a);let _,v;if(l)_=r/(s-r),v=s*r/(s-r);else if(o===pi)_=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===Xc)_=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,a,r,s,o=pi,l=!1){const c=this.elements,d=2/(n-e),f=2/(i-a),h=-(n+e)/(n-e),p=-(i+a)/(i-a);let _,v;if(l)_=1/(s-r),v=s/(s-r);else if(o===pi)_=-2/(s-r),v=-(s+r)/(s-r);else if(o===Xc)_=-1/(s-r),v=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let a=0;a<16;a++)if(n[a]!==i[a])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Nr=new X,ii=new Xt,y1=new X(0,0,0),M1=new X(1,1,1),aa=new X,Dl=new X,Tn=new X,zm=new Xt,Bm=new il;class Qi{constructor(e=0,n=0,i=0,a=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,a=this._order){return this._x=e,this._y=n,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],l=a[1],c=a[5],d=a[9],f=a[2],h=a[6],p=a[10];switch(n){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class Kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E1=0;const Fm=new X,Lr=new il,Ti=new Xt,Ul=new X,Qs=new X,T1=new X,A1=new il,Im=new X(1,0,0),Hm=new X(0,1,0),Gm=new X(0,0,1),Vm={type:"added"},R1={type:"removed"},Or={type:"childadded",child:null},gf={type:"childremoved",child:null};class zn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=nl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new X,n=new Qi,i=new il,a=new X(1,1,1);function r(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Xt},normalMatrix:{value:new Ie}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(Im,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,n){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Im,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ul.copy(e):Ul.set(e,n,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Qs,Ul,this.up):Ti.lookAt(Ul,Qs,this.up),this.quaternion.setFromRotationMatrix(Ti),a&&(Ti.extractRotation(a.matrixWorld),Lr.setFromRotationMatrix(Ti),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),Or.child=e,this.dispatchEvent(Or),Or.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(R1),gf.child=e,this.dispatchEvent(gf),gf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,T1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,A1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(r(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=a,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}zn.DEFAULT_UP=new X(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new X,Ai=new X,_f=new X,Ri=new X,Pr=new X,zr=new X,Xm=new X,vf=new X,Sf=new X,bf=new X,yf=new Pt,Mf=new Pt,Ef=new Pt;class si{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,a){a.subVectors(i,n),ai.subVectors(e,n),a.cross(ai);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,n,i,a,r){ai.subVectors(a,n),Ai.subVectors(i,n),_f.subVectors(e,n);const s=ai.dot(ai),o=ai.dot(Ai),l=ai.dot(_f),c=Ai.dot(Ai),d=Ai.dot(_f),f=s*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,p=(c*l-o*d)*h,_=(s*d-o*l)*h;return r.set(1-p-_,_,p)}static containsPoint(e,n,i,a){return this.getBarycoord(e,n,i,a,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,i,a,r,s,o,l){return this.getBarycoord(e,n,i,a,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(s,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,n,i,a,r,s){return yf.setScalar(0),Mf.setScalar(0),Ef.setScalar(0),yf.fromBufferAttribute(e,n),Mf.fromBufferAttribute(e,i),Ef.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(yf,r.x),s.addScaledVector(Mf,r.y),s.addScaledVector(Ef,r.z),s}static isFrontFacing(e,n,i,a){return ai.subVectors(i,n),Ai.subVectors(e,n),ai.cross(Ai).dot(a)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,a){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,i,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ai.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,a,r){return si.getInterpolation(e,this.a,this.b,this.c,n,i,a,r)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,a=this.b,r=this.c;let s,o;Pr.subVectors(a,i),zr.subVectors(r,i),vf.subVectors(e,i);const l=Pr.dot(vf),c=zr.dot(vf);if(l<=0&&c<=0)return n.copy(i);Sf.subVectors(e,a);const d=Pr.dot(Sf),f=zr.dot(Sf);if(d>=0&&f<=d)return n.copy(a);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Pr,s);bf.subVectors(e,r);const p=Pr.dot(bf),_=zr.dot(bf);if(_>=0&&p<=_)return n.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(zr,o);const m=d*_-p*f;if(m<=0&&f-d>=0&&p-_>=0)return Xm.subVectors(r,a),o=(f-d)/(f-d+(p-_)),n.copy(a).addScaledVector(Xm,o);const u=1/(m+v+h);return s=v*u,o=h*u,n.copy(i).addScaledVector(Pr,s).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ra={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function Tf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class dt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,a=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,a),this}setHSL(e,n,i,a=tt.workingColorSpace){if(e=h1(e,1),n=Ke(n,0,1),i=Ke(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,s=2*i-r;this.r=Tf(s,r,e+1/3),this.g=Tf(s,r,e),this.b=Tf(s,r,e-1/3)}return tt.colorSpaceToWorking(this,a),this}setStyle(e,n=Vn){function i(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(r,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=Qv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return tt.workingToColorSpace(rn.copy(this),e),Math.round(Ke(rn.r*255,0,255))*65536+Math.round(Ke(rn.g*255,0,255))*256+Math.round(Ke(rn.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(rn.copy(this),n);const i=rn.r,a=rn.g,r=rn.b,s=Math.max(i,a,r),o=Math.min(i,a,r);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(a-r)/f+(a<r?6:0);break;case a:l=(r-i)/f+2;break;case r:l=(i-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Vn){tt.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,a=rn.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,n,i){return this.getHSL(ra),this.setHSL(ra.h+e,ra.s+n,ra.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ra),e.getHSL(Nl);const i=of(ra.h,Nl.h,n),a=of(ra.s,Nl.s,n),r=of(ra.l,Nl.l,n);return this.setHSL(i,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,a=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*a,this.g=r[1]*n+r[4]*i+r[7]*a,this.b=r[2]*n+r[5]*i+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new dt;dt.NAMES=Qv;let C1=0;class pu extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C1++}),this.uuid=nl(),this.name="",this.type="Material",this.blending=cs,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=zd,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rr,this.stencilZFail=Rr,this.stencilZPass=Rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==za&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pd&&(i.blendSrc=this.blendSrc),this.blendDst!==zd&&(i.blendDst=this.blendDst),this.blendEquation!==nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(r){const s=[];for(const o in r){const l=r[o];delete l.metadata,s.push(l)}return s}if(n){const r=a(e.textures),s=a(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const a=n.length;i=new Array(a);for(let r=0;r!==a;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jv extends pu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new X,Ll=new ht;let w1=0;class xi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:w1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wm,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=n.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(e),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=xn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=js(n,this.array)),n}setX(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=js(n,this.array)),n}setY(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=js(n,this.array)),n}setW(e,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,a){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),a=xn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,n,i,a,r){return e*=this.itemSize,this.normalized&&(n=xn(n,this.array),i=xn(i,this.array),a=xn(a,this.array),r=xn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}}class $v extends xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class eS extends xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ur extends xi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let D1=0;const Hn=new Xt,Af=new zn,Br=new X,An=new al,Js=new al,Yt=new X;class Ga extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=nl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jv(e)?eS:$v)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ie().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Af.lookAt(e),Af.updateMatrix(),this.applyMatrix4(Af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new ur(i,3))}else{const i=Math.min(e.length,n.count);for(let a=0;a<i;a++){const r=e[a];n.setXYZ(a,r.x,r.y,r.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,a=n.length;i<a;i++){const r=n[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Op);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const o=n[r];Js.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(An.min,Js.min),An.expandByPoint(Yt),Yt.addVectors(An.max,Js.max),An.expandByPoint(Yt)):(An.expandByPoint(Js.min),An.expandByPoint(Js.max))}An.getCenter(i);let a=0;for(let r=0,s=e.count;r<s;r++)Yt.fromBufferAttribute(e,r),a=Math.max(a,i.distanceToSquared(Yt));if(n)for(let r=0,s=n.length;r<s;r++){const o=n[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Yt.fromBufferAttribute(o,c),l&&(Br.fromBufferAttribute(e,c),Yt.add(Br)),a=Math.max(a,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,a=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new X,l[N]=new X;const c=new X,d=new X,f=new X,h=new ht,p=new ht,_=new ht,v=new X,m=new X;function u(N,E,y){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,E),f.fromBufferAttribute(i,y),h.fromBufferAttribute(r,N),p.fromBufferAttribute(r,E),_.fromBufferAttribute(r,y),d.sub(c),f.sub(c),p.sub(h),_.sub(h);const U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(v.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(U),o[N].add(v),o[E].add(v),o[y].add(v),l[N].add(m),l[E].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let N=0,E=x.length;N<E;++N){const y=x[N],U=y.start,I=y.count;for(let W=U,Q=U+I;W<Q;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const g=new X,b=new X,C=new X,T=new X;function R(N){C.fromBufferAttribute(a,N),T.copy(C);const E=o[N];g.copy(E),g.sub(C.multiplyScalar(C.dot(E))).normalize(),b.crossVectors(T,E);const U=b.dot(l[N])<0?-1:1;s.setXYZW(N,g.x,g.y,g.z,U)}for(let N=0,E=x.length;N<E;++N){const y=x[N],U=y.start,I=y.count;for(let W=U,Q=U+I;W<Q;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const a=new X,r=new X,s=new X,o=new X,l=new X,c=new X,d=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,m),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)a.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),d.subVectors(s,r),f.subVectors(a,r),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Yt.fromBufferAttribute(e,n),Yt.normalize(),e.setXYZ(n,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new xi(h,d,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ga,i=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,i);n.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(n))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const km=new Xt,Ya=new b1,Ol=new Op,Wm=new X,Pl=new X,zl=new X,Bl=new X,Rf=new X,Fl=new X,qm=new X,Il=new X;class Ba extends zn{constructor(e=new Ga,n=new Jv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const a=n[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){const i=this.geometry,a=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){Fl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(Rf.fromBufferAttribute(f,e),s?Fl.addScaledVector(Rf,d):Fl.addScaledVector(Rf.sub(n),d))}n.add(Fl)}return n}raycast(e,n){const i=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(r),Ya.copy(e.ray).recast(e.near),!(Ol.containsPoint(Ya.origin)===!1&&(Ya.intersectSphere(Ol,Wm)===null||Ya.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(km.copy(r).invert(),Ya.copy(e.ray).applyMatrix4(km),!(i.boundingBox!==null&&Ya.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ya)))}_computeIntersections(e,n,i){let a;const r=this.geometry,s=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,v=h.length;_<v;_++){const m=h[_],u=s[m.materialIndex],x=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,C=g;b<C;b+=3){const T=o.getX(b),R=o.getX(b+1),N=o.getX(b+2);a=Hl(this,u,e,i,c,d,f,T,R,N),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const x=o.getX(m),g=o.getX(m+1),b=o.getX(m+2);a=Hl(this,s,e,i,c,d,f,x,g,b),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,v=h.length;_<v;_++){const m=h[_],u=s[m.materialIndex],x=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=x,C=g;b<C;b+=3){const T=b,R=b+1,N=b+2;a=Hl(this,u,e,i,c,d,f,T,R,N),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,n.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,u=v;m<u;m+=3){const x=m,g=m+1,b=m+2;a=Hl(this,s,e,i,c,d,f,x,g,b),a&&(a.faceIndex=Math.floor(m/3),n.push(a))}}}}function U1(t,e,n,i,a,r,s,o){let l;if(e.side===Sn?l=i.intersectTriangle(s,r,a,!0,o):l=i.intersectTriangle(a,r,s,e.side===za,o),l===null)return null;Il.copy(o),Il.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Il);return c<n.near||c>n.far?null:{distance:c,point:Il.clone(),object:t}}function Hl(t,e,n,i,a,r,s,o,l,c){t.getVertexPosition(o,Pl),t.getVertexPosition(l,zl),t.getVertexPosition(c,Bl);const d=U1(t,e,n,i,Pl,zl,Bl,qm);if(d){const f=new X;si.getBarycoord(qm,Pl,zl,Bl,f),a&&(d.uv=si.getInterpolatedAttribute(a,o,l,c,f,new ht)),r&&(d.uv1=si.getInterpolatedAttribute(r,o,l,c,f,new ht)),s&&(d.normal=si.getInterpolatedAttribute(s,o,l,c,f,new X),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};si.getNormal(Pl,zl,Bl,h.normal),d.face=h,d.barycoord=f}return d}class rl extends Ga{constructor(e=1,n=1,i=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,s,r,0),_("z","y","x",1,-1,i,n,-e,s,r,1),_("x","z","y",1,1,e,i,n,a,s,2),_("x","z","y",1,-1,e,i,-n,a,s,3),_("x","y","z",1,-1,e,n,i,a,r,4),_("x","y","z",-1,-1,e,n,-i,a,r,5),this.setIndex(l),this.setAttribute("position",new ur(c,3)),this.setAttribute("normal",new ur(d,3)),this.setAttribute("uv",new ur(f,2));function _(v,m,u,x,g,b,C,T,R,N,E){const y=b/R,U=C/N,I=b/2,W=C/2,Q=T/2,q=R+1,O=N+1;let V=0,B=0;const J=new X;for(let ne=0;ne<O;ne++){const Se=ne*U-W;for(let Ge=0;Ge<q;Ge++){const $e=Ge*y-I;J[v]=$e*x,J[m]=Se*g,J[u]=Q,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[u]=T>0?1:-1,d.push(J.x,J.y,J.z),f.push(Ge/R),f.push(1-ne/N),V+=1}}for(let ne=0;ne<N;ne++)for(let Se=0;Se<R;Se++){const Ge=h+Se+q*ne,$e=h+Se+q*(ne+1),Je=h+(Se+1)+q*(ne+1),nt=h+(Se+1)+q*ne;l.push(Ge,$e,nt),l.push($e,Je,nt),B+=6}o.addGroup(p,B,E),p+=B,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const a=t[n][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=a.clone():Array.isArray(a)?e[n][i]=a.slice():e[n][i]=a}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Rs(t[n]);for(const a in i)e[a]=i[a]}return e}function N1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function tS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const L1={clone:Rs,merge:on};var O1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends pu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O1,this.fragmentShader=P1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=N1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?n.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[a]={type:"m4",value:s.toArray()}:n.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class nS extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sa=new X,Ym=new ht,jm=new ht;class qn extends nS{constructor(e=50,n=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yh*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sa.x,sa.y).multiplyScalar(-e/sa.z),sa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sa.x,sa.y).multiplyScalar(-e/sa.z)}getViewSize(e,n){return this.getViewBounds(e,Ym,jm),n.subVectors(jm,Ym)}setViewOffset(e,n,i,a,r,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*n,a=this.aspect*i,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*a/l,n-=s.offsetY*i/c,a*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Ir=1;class z1 extends zn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Fr,Ir,e,n);a.layers=this.layers,this.add(a);const r=new qn(Fr,Ir,e,n);r.layers=this.layers,this.add(r);const s=new qn(Fr,Ir,e,n);s.layers=this.layers,this.add(s);const o=new qn(Fr,Ir,e,n);o.layers=this.layers,this.add(o);const l=new qn(Fr,Ir,e,n);l.layers=this.layers,this.add(l);const c=new qn(Fr,Ir,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,a,r,s,o,l]=n;for(const c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xc)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(n,r),e.setRenderTarget(i,1,a),e.render(n,s),e.setRenderTarget(i,2,a),e.render(n,o),e.setRenderTarget(i,3,a),e.render(n,l),e.setRenderTarget(i,4,a),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class iS extends un{constructor(e=[],n=Es,i,a,r,s,o,l,c,d){super(e,n,i,a,r,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class B1 extends gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new iS(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new rl(5,5,5),r=new Ji({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Xi});r.uniforms.tEquirect.value=n;const s=new Ba(a,r),o=n.minFilter;return n.minFilter===ar&&(n.minFilter=Kn),new z1(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,a);e.setRenderTarget(r)}}class Gl extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F1={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let a=null,r=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(e.targetRaySpace,i),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F1)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Gl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class I1 extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class H1 extends un{constructor(e=null,n=1,i=1,a,r,s,o,l,c=Pn,d=Pn,f,h){super(null,s,o,l,c,d,a,r,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wf=new X,G1=new X,V1=new Ie;class tr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,a){return this.normal.set(e,n,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const a=wf.subVectors(i,n).cross(G1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(wf),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||V1.getNormalMatrix(e),a=this.coplanarPoint(wf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ja=new Op,X1=new ht(.5,.5),Vl=new X;class aS{constructor(e=new tr,n=new tr,i=new tr,a=new tr,r=new tr,s=new tr){this.planes=[e,n,i,a,r,s]}set(e,n,i,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi,i=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],h=r[6],p=r[7],_=r[8],v=r[9],m=r[10],u=r[11],x=r[12],g=r[13],b=r[14],C=r[15];if(a[0].setComponents(c-s,p-d,u-_,C-x).normalize(),a[1].setComponents(c+s,p+d,u+_,C+x).normalize(),a[2].setComponents(c+o,p+f,u+v,C+g).normalize(),a[3].setComponents(c-o,p-f,u-v,C-g).normalize(),i)a[4].setComponents(l,h,m,b).normalize(),a[5].setComponents(c-l,p-h,u-m,C-b).normalize();else if(a[4].setComponents(c-l,p-h,u-m,C-b).normalize(),n===pi)a[5].setComponents(c+l,p+h,u+m,C+b).normalize();else if(n===Xc)a[5].setComponents(l,h,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ja.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ja)}intersectsSprite(e){ja.center.set(0,0,0);const n=X1.distanceTo(e.center);return ja.radius=.7071067811865476+n,ja.applyMatrix4(e.matrixWorld),this.intersectsSphere(ja)}intersectsSphere(e){const n=this.planes,i=e.center,a=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const a=n[i];if(Vl.x=a.normal.x>0?e.max.x:e.min.x,Vl.y=a.normal.y>0?e.max.y:e.min.y,Vl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rS extends un{constructor(e,n,i=xr,a,r,s,o=Pn,l=Pn,c,d=Io,f=1){if(d!==Io&&d!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,a,r,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class sS extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mu extends Ga{constructor(e=1,n=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:a};const r=e/2,s=n/2,o=Math.floor(i),l=Math.floor(a),c=o+1,d=l+1,f=e/o,h=n/l,p=[],_=[],v=[],m=[];for(let u=0;u<d;u++){const x=u*h-s;for(let g=0;g<c;g++){const b=g*f-r;_.push(b,-x,0),v.push(0,0,1),m.push(g/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<o;x++){const g=x+c*u,b=x+c*(u+1),C=x+1+c*(u+1),T=x+1+c*u;p.push(g,b,T),p.push(b,C,T)}this.setIndex(p),this.setAttribute("position",new ur(_,3)),this.setAttribute("normal",new ur(v,3)),this.setAttribute("uv",new ur(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}class k1 extends pu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W1 extends pu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class q1 extends nS{constructor(e=-1,n=1,i=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=i-e,s=i+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Y1 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Zm(t,e,n,i){const a=j1(i);switch(n){case kv:return t*e;case qv:return t*e/a.components*a.byteLength;case wp:return t*e/a.components*a.byteLength;case Dp:return t*e*2/a.components*a.byteLength;case Up:return t*e*2/a.components*a.byteLength;case Wv:return t*e*3/a.components*a.byteLength;case oi:return t*e*4/a.components*a.byteLength;case Np:return t*e*4/a.components*a.byteLength;case sc:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:case Qd:return Math.max(t,16)*Math.max(e,8)/4;case jd:case Kd:return Math.max(t,8)*Math.max(e,8)/2;case Jd:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case oh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mh:case xh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _h:case vh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Sh:case bh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function j1(t){switch(t){case Ki:case Hv:return{byteLength:1,components:1};case Bo:case Gv:case Bs:return{byteLength:2,components:1};case Rp:case Cp:return{byteLength:2,components:4};case xr:case Ap:case Ii:return{byteLength:4,components:1};case Vv:case Xv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function oS(){let t=null,e=!1,n=null,i=null;function a(r,s){n(r,s),i=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Z1(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];t.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:a,remove:r,update:s}}var K1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,J1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,iE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,rE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,uE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,SE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AE="gl_FragColor = linearToOutputTexel( gl_FragColor );",RE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,VE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_T=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ST=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ET=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,IT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,WT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,S2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,R2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:K1,alphahash_pars_fragment:Q1,alphamap_fragment:J1,alphamap_pars_fragment:$1,alphatest_fragment:eE,alphatest_pars_fragment:tE,aomap_fragment:nE,aomap_pars_fragment:iE,batching_pars_vertex:aE,batching_vertex:rE,begin_vertex:sE,beginnormal_vertex:oE,bsdfs:lE,iridescence_fragment:cE,bumpmap_pars_fragment:uE,clipping_planes_fragment:fE,clipping_planes_pars_fragment:dE,clipping_planes_pars_vertex:hE,clipping_planes_vertex:pE,color_fragment:mE,color_pars_fragment:xE,color_pars_vertex:gE,color_vertex:_E,common:vE,cube_uv_reflection_fragment:SE,defaultnormal_vertex:bE,displacementmap_pars_vertex:yE,displacementmap_vertex:ME,emissivemap_fragment:EE,emissivemap_pars_fragment:TE,colorspace_fragment:AE,colorspace_pars_fragment:RE,envmap_fragment:CE,envmap_common_pars_fragment:wE,envmap_pars_fragment:DE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:VE,envmap_vertex:NE,fog_vertex:LE,fog_pars_vertex:OE,fog_fragment:PE,fog_pars_fragment:zE,gradientmap_pars_fragment:BE,lightmap_pars_fragment:FE,lights_lambert_fragment:IE,lights_lambert_pars_fragment:HE,lights_pars_begin:GE,lights_toon_fragment:XE,lights_toon_pars_fragment:kE,lights_phong_fragment:WE,lights_phong_pars_fragment:qE,lights_physical_fragment:YE,lights_physical_pars_fragment:jE,lights_fragment_begin:ZE,lights_fragment_maps:KE,lights_fragment_end:QE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:$E,logdepthbuf_pars_vertex:eT,logdepthbuf_vertex:tT,map_fragment:nT,map_pars_fragment:iT,map_particle_fragment:aT,map_particle_pars_fragment:rT,metalnessmap_fragment:sT,metalnessmap_pars_fragment:oT,morphinstance_vertex:lT,morphcolor_vertex:cT,morphnormal_vertex:uT,morphtarget_pars_vertex:fT,morphtarget_vertex:dT,normal_fragment_begin:hT,normal_fragment_maps:pT,normal_pars_fragment:mT,normal_pars_vertex:xT,normal_vertex:gT,normalmap_pars_fragment:_T,clearcoat_normal_fragment_begin:vT,clearcoat_normal_fragment_maps:ST,clearcoat_pars_fragment:bT,iridescence_pars_fragment:yT,opaque_fragment:MT,packing:ET,premultiplied_alpha_fragment:TT,project_vertex:AT,dithering_fragment:RT,dithering_pars_fragment:CT,roughnessmap_fragment:wT,roughnessmap_pars_fragment:DT,shadowmap_pars_fragment:UT,shadowmap_pars_vertex:NT,shadowmap_vertex:LT,shadowmask_pars_fragment:OT,skinbase_vertex:PT,skinning_pars_vertex:zT,skinning_vertex:BT,skinnormal_vertex:FT,specularmap_fragment:IT,specularmap_pars_fragment:HT,tonemapping_fragment:GT,tonemapping_pars_fragment:VT,transmission_fragment:XT,transmission_pars_fragment:kT,uv_pars_fragment:WT,uv_pars_vertex:qT,uv_vertex:YT,worldpos_vertex:jT,background_vert:ZT,background_frag:KT,backgroundCube_vert:QT,backgroundCube_frag:JT,cube_vert:$T,cube_frag:e2,depth_vert:t2,depth_frag:n2,distanceRGBA_vert:i2,distanceRGBA_frag:a2,equirect_vert:r2,equirect_frag:s2,linedashed_vert:o2,linedashed_frag:l2,meshbasic_vert:c2,meshbasic_frag:u2,meshlambert_vert:f2,meshlambert_frag:d2,meshmatcap_vert:h2,meshmatcap_frag:p2,meshnormal_vert:m2,meshnormal_frag:x2,meshphong_vert:g2,meshphong_frag:_2,meshphysical_vert:v2,meshphysical_frag:S2,meshtoon_vert:b2,meshtoon_frag:y2,points_vert:M2,points_frag:E2,shadow_vert:T2,shadow_frag:A2,sprite_vert:R2,sprite_frag:C2},le={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ui={basic:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new dt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:on([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:on([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:on([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new dt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:on([le.points,le.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:on([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:on([le.common,le.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:on([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:on([le.sprite,le.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:on([le.common,le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:on([le.lights,le.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ui.physical={uniforms:on([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Xl={r:0,b:0,g:0},Za=new Qi,w2=new Xt;function D2(t,e,n,i,a,r,s){const o=new dt(0);let l=r===!0?0:1,c,d,f=null,h=0,p=null;function _(g){let b=g.isScene===!0?g.background:null;return b&&b.isTexture&&(b=(g.backgroundBlurriness>0?n:e).get(b)),b}function v(g){let b=!1;const C=_(g);C===null?u(o,l):C&&C.isColor&&(u(C,1),b=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,b){const C=_(b);C&&(C.isCubeTexture||C.mapping===hu)?(d===void 0&&(d=new Ba(new rl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Rs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Za.copy(b.backgroundRotation),Za.x*=-1,Za.y*=-1,Za.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Za.y*=-1,Za.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(w2.makeRotationFromEuler(Za)),d.material.toneMapped=tt.getTransfer(C.colorSpace)!==ct,(f!==C||h!==C.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ba(new mu(2,2),new Ji({name:"BackgroundMaterial",uniforms:Rs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=tt.getTransfer(C.colorSpace)!==ct,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,b){g.getRGB(Xl,tS(t)),i.buffers.color.setClear(Xl.r,Xl.g,Xl.b,b,s)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,b=1){o.set(g),l=b,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:v,addToRenderList:m,dispose:x}}function U2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},a=h(null);let r=a,s=!1;function o(y,U,I,W,Q){let q=!1;const O=f(W,I,U);r!==O&&(r=O,c(r.object)),q=p(y,W,I,Q),q&&_(y,W,I,Q),Q!==null&&e.update(Q,t.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,b(y,U,I,W),Q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function f(y,U,I){const W=I.wireframe===!0;let Q=i[y.id];Q===void 0&&(Q={},i[y.id]=Q);let q=Q[U.id];q===void 0&&(q={},Q[U.id]=q);let O=q[W];return O===void 0&&(O=h(l()),q[W]=O),O}function h(y){const U=[],I=[],W=[];for(let Q=0;Q<n;Q++)U[Q]=0,I[Q]=0,W[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:I,attributeDivisors:W,object:y,attributes:{},index:null}}function p(y,U,I,W){const Q=r.attributes,q=U.attributes;let O=0;const V=I.getAttributes();for(const B in V)if(V[B].location>=0){const ne=Q[B];let Se=q[B];if(Se===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),ne===void 0||ne.attribute!==Se||Se&&ne.data!==Se.data)return!0;O++}return r.attributesNum!==O||r.index!==W}function _(y,U,I,W){const Q={},q=U.attributes;let O=0;const V=I.getAttributes();for(const B in V)if(V[B].location>=0){let ne=q[B];ne===void 0&&(B==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),B==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));const Se={};Se.attribute=ne,ne&&ne.data&&(Se.data=ne.data),Q[B]=Se,O++}r.attributes=Q,r.attributesNum=O,r.index=W}function v(){const y=r.newAttributes;for(let U=0,I=y.length;U<I;U++)y[U]=0}function m(y){u(y,0)}function u(y,U){const I=r.newAttributes,W=r.enabledAttributes,Q=r.attributeDivisors;I[y]=1,W[y]===0&&(t.enableVertexAttribArray(y),W[y]=1),Q[y]!==U&&(t.vertexAttribDivisor(y,U),Q[y]=U)}function x(){const y=r.newAttributes,U=r.enabledAttributes;for(let I=0,W=U.length;I<W;I++)U[I]!==y[I]&&(t.disableVertexAttribArray(I),U[I]=0)}function g(y,U,I,W,Q,q,O){O===!0?t.vertexAttribIPointer(y,U,I,Q,q):t.vertexAttribPointer(y,U,I,W,Q,q)}function b(y,U,I,W){v();const Q=W.attributes,q=I.getAttributes(),O=U.defaultAttributeValues;for(const V in q){const B=q[V];if(B.location>=0){let J=Q[V];if(J===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(J=y.instanceColor)),J!==void 0){const ne=J.normalized,Se=J.itemSize,Ge=e.get(J);if(Ge===void 0)continue;const $e=Ge.buffer,Je=Ge.type,nt=Ge.bytesPerElement,Z=Je===t.INT||Je===t.UNSIGNED_INT||J.gpuType===Ap;if(J.isInterleavedBufferAttribute){const ee=J.data,me=ee.stride,ze=J.offset;if(ee.isInstancedInterleavedBuffer){for(let ye=0;ye<B.locationSize;ye++)u(B.location+ye,ee.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<B.locationSize;ye++)m(B.location+ye);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ye=0;ye<B.locationSize;ye++)g(B.location+ye,Se/B.locationSize,Je,ne,me*nt,(ze+Se/B.locationSize*ye)*nt,Z)}else{if(J.isInstancedBufferAttribute){for(let ee=0;ee<B.locationSize;ee++)u(B.location+ee,J.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<B.locationSize;ee++)m(B.location+ee);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ee=0;ee<B.locationSize;ee++)g(B.location+ee,Se/B.locationSize,Je,ne,Se*nt,Se/B.locationSize*ee*nt,Z)}}else if(O!==void 0){const ne=O[V];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(B.location,ne);break;case 3:t.vertexAttrib3fv(B.location,ne);break;case 4:t.vertexAttrib4fv(B.location,ne);break;default:t.vertexAttrib1fv(B.location,ne)}}}}x()}function C(){N();for(const y in i){const U=i[y];for(const I in U){const W=U[I];for(const Q in W)d(W[Q].object),delete W[Q];delete U[I]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const U=i[y.id];for(const I in U){const W=U[I];for(const Q in W)d(W[Q].object),delete W[Q];delete U[I]}delete i[y.id]}function R(y){for(const U in i){const I=i[U];if(I[y.id]===void 0)continue;const W=I[y.id];for(const Q in W)d(W[Q].object),delete W[Q];delete I[y.id]}}function N(){E(),s=!0,r!==a&&(r=a,c(r.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:N,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function N2(t,e,n){let i;function a(c){i=c}function r(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function s(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let _=0;_<f;_++)p+=d[_];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)s(c[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=d[v]*h[v];n.update(_,i,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function L2(t,e,n,i){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(R){return!(R!==oi&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const N=R===Bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ki&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ii&&!N)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(Be("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:x,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:C,maxSamples:T}}function O2(t){const e=this;let n=null,i=0,a=!1,r=!1;const s=new tr,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||a;return a=h,i=f.length,p},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!a||_===null||_.length===0||r&&!m)r?d(null):c();else{const x=r?0:i,g=x*4;let b=u.clippingState||null;l.value=b,b=d(_,h,g,p);for(let C=0;C!==g;++C)b[C]=n[C];u.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const u=p+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,b=p;g!==v;++g,b+=4)s.copy(f[g]).applyMatrix4(x,o),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function P2(t){let e=new WeakMap;function n(s,o){return o===kd?s.mapping=Es:o===Wd&&(s.mapping=Ts),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===kd||o===Wd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new B1(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",a),n(c.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Sa=4,Km=[.125,.215,.35,.446,.526,.582],ir=20,z2=512,$s=new q1,Qm=new dt;let Df=null,Uf=0,Nf=0,Lf=!1;const B2=new X;class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,a=100,r={}){const{size:s=256,position:o=B2}=r;Df=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ex(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Df,Uf,Nf),this._renderer.xr.enabled=Lf,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Df=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:Bs,format:oi,colorSpace:As,depthBuffer:!1},a=$m(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$m(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F2(r)),this._blurMaterial=H2(r,e,n)}return a}_compileMaterial(e){const n=new Ba(new Ga,e);this._renderer.compile(n,$s)}_sceneToCubeUV(e,n,i,a,r){const l=new qn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Qm),f.toneMapping=Ua,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ba(new rl,new Jv({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let u=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,u=!0):(m.color.copy(Qm),u=!0);for(let g=0;g<6;g++){const b=g%3;b===0?(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[g],r.y,r.z)):b===1?(l.up.set(0,0,c[g]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[g],r.z)):(l.up.set(0,c[g],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[g]));const C=this._cubeSize;Hr(a,b*C,g>2?C:0,C,C),f.setRenderTarget(a),u&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,a=e.mapping===Es||e.mapping===Ts;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ex());const r=a?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,$s)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let r=1;r<a;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const a=this._renderer,r=this._pingPongRenderTarget;if(this._ggxMaterial===null){const x=3*Math.max(this._cubeSize,16),g=4*this._cubeSize;this._ggxMaterial=I2(this._lodMax,x,g)}const s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),h=.05+c*.95,p=f*h,{_lodMax:_}=this,v=this._sizeLods[i],m=3*v*(i>_-Sa?i-_+Sa:0),u=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=_-n,Hr(r,m,u,3*v,2*v),a.setRenderTarget(r),a.render(o,$s),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Hr(e,m,u,3*v,2*v),a.setRenderTarget(e),a.render(o,$s)}_blur(e,n,i,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,a,"latitudinal",r),this._halfBlur(s,e,i,i,a,"longitudinal",r)}_halfBlur(e,n,i,a,r,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[a];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ir-1),v=r/_,m=isFinite(r)?1+Math.floor(d*v):ir;m>ir&&Be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const u=[];let x=0;for(let R=0;R<ir;++R){const N=R/v,E=Math.exp(-N*N/2);u.push(E),R===0?x+=E:R<m&&(x+=2*E)}for(let R=0;R<u.length;R++)u[R]=u[R]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const b=this._sizeLods[a],C=3*b*(a>g-Sa?a-g+Sa:0),T=4*(this._cubeSize-b);Hr(n,C,T,3*b,2*b),l.setRenderTarget(n),l.render(f,$s)}}function F2(t){const e=[],n=[],i=[];let a=t;const r=t-Sa+1+Km.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let l=1/o;s>t-Sa?l=Km[s-t+Sa-1]:s===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,v=3,m=2,u=1,x=new Float32Array(v*_*p),g=new Float32Array(m*_*p),b=new Float32Array(u*_*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,N=T>2?0:-1,E=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];x.set(E,v*_*T),g.set(h,m*_*T);const y=[T,T,T,T,T,T];b.set(y,u*_*T)}const C=new Ga;C.setAttribute("position",new xi(x,v)),C.setAttribute("uv",new xi(g,m)),C.setAttribute("faceIndex",new xi(b,u)),i.push(new Ba(C,null)),a>Sa&&a--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $m(t,e,n){const i=new gr(t,e,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hr(t,e,n,i,a){t.viewport.set(e,n,i,a),t.scissor.set(e,n,i,a)}function I2(t,e,n){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function H2(t,e,n){const i=new Float32Array(ir),a=new X(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ex(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function tx(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function G2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===kd||l===Wd,d=l===Es||l===Ts;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Jm(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&a(p)?(n===null&&(n=new Jm(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function a(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function V2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const a=t.getExtension(i);return e[i]=a,a}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const a=n(i);return a===null&&Go("WebGLRenderer: "+i+" extension not supported."),a}}}function X2(t,e,n,i){const a={},r=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",s),delete a[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const x=p.array;v=p.version;for(let g=0,b=x.length;g<b;g+=3){const C=x[g+0],T=x[g+1],R=x[g+2];h.push(C,T,T,R,R,C)}}else if(_!==void 0){const x=_.array;v=_.version;for(let g=0,b=x.length/3-1;g<b;g+=3){const C=g+0,T=g+1,R=g+2;h.push(C,T,T,R,R,C)}}else return;const m=new(jv(h)?eS:$v)(h,1);m.version=v;const u=r.get(f);u&&e.remove(u),r.set(f,m)}function d(f){const h=r.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function k2(t,e,n){let i;function a(h){i=h}let r,s;function o(h){r=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,r,h*s),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,r,h*s,_),n.update(p,i,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function f(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/s,p[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,h,0,v,0,_);let u=0;for(let x=0;x<_;x++)u+=p[x]*v[x];n.update(u,i,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function W2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",s);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:i}}function q2(t,e,n){const i=new WeakMap,a=new Pt;function r(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let y=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let C=o.attributes.position.count*b,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*T*4*f),N=new Zv(R,C,T,f);N.type=Ii,N.needsUpdate=!0;const E=b*4;for(let U=0;U<f;U++){const I=u[U],W=x[U],Q=g[U],q=C*T*4*U;for(let O=0;O<I.count;O++){const V=O*E;_===!0&&(a.fromBufferAttribute(I,O),R[q+V+0]=a.x,R[q+V+1]=a.y,R[q+V+2]=a.z,R[q+V+3]=0),v===!0&&(a.fromBufferAttribute(W,O),R[q+V+4]=a.x,R[q+V+5]=a.y,R[q+V+6]=a.z,R[q+V+7]=0),m===!0&&(a.fromBufferAttribute(Q,O),R[q+V+8]=a.x,R[q+V+9]=a.y,R[q+V+10]=a.z,R[q+V+11]=Q.itemSize===4?a.w:1)}}h={count:f,texture:N,size:new ht(C,T)},i.set(o,h),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function Y2(t,e,n,i){let a=new WeakMap;function r(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return f}function s(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:s}}const lS=new un,nx=new rS(1,1),cS=new Zv,uS=new v1,fS=new iS,ix=[],ax=[],rx=new Float32Array(16),sx=new Float32Array(9),ox=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const a=e*n;let r=ix[a];if(r===void 0&&(r=new Float32Array(a),ix[a]=r),e!==0){i.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(r,o)}return r}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gu(t,e){let n=ax[e];n===void 0&&(n=new Int32Array(e),ax[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function j2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function K2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function J2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Wt(n,i))return;ox.set(i),t.uniformMatrix2fv(this.addr,!1,ox),qt(n,i)}}function $2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Wt(n,i))return;sx.set(i),t.uniformMatrix3fv(this.addr,!1,sx),qt(n,i)}}function eA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Wt(n,i))return;rx.set(i),t.uniformMatrix4fv(this.addr,!1,rx),qt(n,i)}}function tA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),qt(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),qt(n,e)}}function aA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),qt(n,e)}}function rA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function sA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),qt(n,e)}}function oA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),qt(n,e)}}function lA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),qt(n,e)}}function cA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a);let r;this.type===t.SAMPLER_2D_SHADOW?(nx.compareFunction=Yv,r=nx):r=lS,n.setTexture2D(e||r,a)}function uA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture3D(e||uS,a)}function fA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTextureCube(e||fS,a)}function dA(t,e,n){const i=this.cache,a=n.allocateTextureUnit();i[0]!==a&&(t.uniform1i(this.addr,a),i[0]=a),n.setTexture2DArray(e||cS,a)}function hA(t){switch(t){case 5126:return j2;case 35664:return Z2;case 35665:return K2;case 35666:return Q2;case 35674:return J2;case 35675:return $2;case 35676:return eA;case 5124:case 35670:return tA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return rA;case 36294:return sA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return dA}}function pA(t,e){t.uniform1fv(this.addr,e)}function mA(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function xA(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function gA(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function _A(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vA(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function SA(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bA(t,e){t.uniform1iv(this.addr,e)}function yA(t,e){t.uniform2iv(this.addr,e)}function MA(t,e){t.uniform3iv(this.addr,e)}function EA(t,e){t.uniform4iv(this.addr,e)}function TA(t,e){t.uniform1uiv(this.addr,e)}function AA(t,e){t.uniform2uiv(this.addr,e)}function RA(t,e){t.uniform3uiv(this.addr,e)}function CA(t,e){t.uniform4uiv(this.addr,e)}function wA(t,e,n){const i=this.cache,a=e.length,r=gu(n,a);Wt(i,r)||(t.uniform1iv(this.addr,r),qt(i,r));for(let s=0;s!==a;++s)n.setTexture2D(e[s]||lS,r[s])}function DA(t,e,n){const i=this.cache,a=e.length,r=gu(n,a);Wt(i,r)||(t.uniform1iv(this.addr,r),qt(i,r));for(let s=0;s!==a;++s)n.setTexture3D(e[s]||uS,r[s])}function UA(t,e,n){const i=this.cache,a=e.length,r=gu(n,a);Wt(i,r)||(t.uniform1iv(this.addr,r),qt(i,r));for(let s=0;s!==a;++s)n.setTextureCube(e[s]||fS,r[s])}function NA(t,e,n){const i=this.cache,a=e.length,r=gu(n,a);Wt(i,r)||(t.uniform1iv(this.addr,r),qt(i,r));for(let s=0;s!==a;++s)n.setTexture2DArray(e[s]||cS,r[s])}function LA(t){switch(t){case 5126:return pA;case 35664:return mA;case 35665:return xA;case 35666:return gA;case 35674:return _A;case 35675:return vA;case 35676:return SA;case 5124:case 35670:return bA;case 35667:case 35671:return yA;case 35668:case 35672:return MA;case 35669:case 35673:return EA;case 5125:return TA;case 36294:return AA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return NA}}class OA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hA(n.type)}}class PA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LA(n.type)}}class zA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,n[o.id],i)}}}const Of=/(\w+)(\])?(\[|\.)?/g;function lx(t,e){t.seq.push(e),t.map[e.id]=e}function BA(t,e,n){const i=t.name,a=i.length;for(Of.lastIndex=0;;){const r=Of.exec(i),s=Of.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){lx(n,c===void 0?new OA(o,t,e):new PA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new zA(o),lx(n,f)),n=f}}}class uc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=e.getActiveUniform(n,a),s=e.getUniformLocation(n,r.name);BA(r,s,this)}}setValue(e,n,i,a){const r=this.map[n];r!==void 0&&r.setValue(e,i,a)}setOptional(e,n,i){const a=n[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,n,i,a){for(let r=0,s=n.length;r!==s;++r){const o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const i=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in n&&i.push(s)}return i}}function cx(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const FA=37297;let IA=0;function HA(t,e){const n=t.split(`
`),i=[],a=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let s=a;s<r;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}const ux=new Ie;function GA(t){tt._getMatrix(ux,tt.workingColorSpace,t);const e=`mat3( ${ux.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case Vc:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function fx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+HA(t.getShaderSource(e),o)}else return r}function VA(t,e){const n=GA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function XA(t,e){let n;switch(e){case q3:n="Linear";break;case Y3:n="Reinhard";break;case j3:n="Cineon";break;case Z3:n="ACESFilmic";break;case Q3:n="AgX";break;case J3:n="Neutral";break;case K3:n="Custom";break;default:Be("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const kl=new X;function kA(){tt.getLuminanceCoefficients(kl);const t=kl.x.toFixed(4),e=kl.y.toFixed(4),n=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function qA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function YA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=t.getActiveAttrib(e,a),s=r.name;let o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[s]={type:r.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function ro(t){return t!==""}function dx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(t){return t.replace(jA,KA)}const ZA=new Map;function KA(t,e){let n=He[e];if(n===void 0){const i=ZA.get(e);if(i!==void 0)n=He[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mh(n)}const QA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function px(t){return t.replace(QA,JA)}function JA(t,e,n,i){let a="";for(let r=parseInt(e);r<parseInt(n);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function mx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $A(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===T3?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function eR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function nR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Fv:e="ENVMAP_BLENDING_MULTIPLY";break;case k3:e="ENVMAP_BLENDING_MIX";break;case W3:e="ENVMAP_BLENDING_ADD";break}return e}function iR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aR(t,e,n,i){const a=t.getContext(),r=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=$A(n),c=eR(n),d=tR(n),f=nR(n),h=iR(n),p=WA(n),_=qA(r),v=a.createProgram();let m,u,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ro).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ro).join(`
`),u.length>0&&(u+=`
`)):(m=[mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),u=[mx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ua?"#define TONE_MAPPING":"",n.toneMapping!==Ua?He.tonemapping_pars_fragment:"",n.toneMapping!==Ua?XA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,VA("linearToOutputTexel",n.outputColorSpace),kA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ro).join(`
`)),s=Mh(s),s=dx(s,n),s=hx(s,n),o=Mh(o),o=dx(o,n),o=hx(o,n),s=px(s),o=px(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=x+m+s,b=x+u+o,C=cx(a,a.VERTEX_SHADER,g),T=cx(a,a.FRAGMENT_SHADER,b);a.attachShader(v,C),a.attachShader(v,T),n.index0AttributeName!==void 0?a.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function R(U){if(t.debug.checkShaderErrors){const I=a.getProgramInfoLog(v)||"",W=a.getShaderInfoLog(C)||"",Q=a.getShaderInfoLog(T)||"",q=I.trim(),O=W.trim(),V=Q.trim();let B=!0,J=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,v,C,T);else{const ne=fx(a,C,"vertex"),Se=fx(a,T,"fragment");Ot("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+q+`
`+ne+`
`+Se)}else q!==""?Be("WebGLProgram: Program Info Log:",q):(O===""||V==="")&&(J=!1);J&&(U.diagnostics={runnable:B,programLog:q,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:u}})}a.deleteShader(C),a.deleteShader(T),N=new uc(a,v),E=YA(a,v)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(v,FA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let rR=0;class sR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(n),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oR(e),n.set(e,i)),i}}class oR{constructor(e){this.id=rR++,this.code=e,this.usedTimes=0}}function lR(t,e,n,i,a,r,s){const o=new Kv,l=new sR,c=new Set,d=[],f=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,U,I,W){const Q=I.fog,q=W.geometry,O=E.isMeshStandardMaterial?I.environment:null,V=(E.isMeshStandardMaterial?n:e).get(E.envMap||O),B=V&&V.mapping===hu?V.image.height:null,J=_[E.type];E.precision!==null&&(p=a.getMaxPrecision(E.precision),p!==E.precision&&Be("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ne=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Se=ne!==void 0?ne.length:0;let Ge=0;q.morphAttributes.position!==void 0&&(Ge=1),q.morphAttributes.normal!==void 0&&(Ge=2),q.morphAttributes.color!==void 0&&(Ge=3);let $e,Je,nt,Z;if(J){const ot=ui[J];$e=ot.vertexShader,Je=ot.fragmentShader}else $e=E.vertexShader,Je=E.fragmentShader,l.update(E),nt=l.getVertexShaderID(E),Z=l.getFragmentShaderID(E);const ee=t.getRenderTarget(),me=t.state.buffers.depth.getReversed(),ze=W.isInstancedMesh===!0,ye=W.isBatchedMesh===!0,We=!!E.map,Qt=!!E.matcap,Ve=!!V,Mt=!!E.aoMap,w=!!E.lightMap,qe=!!E.bumpMap,Ye=!!E.normalMap,xt=!!E.displacementMap,_e=!!E.emissiveMap,Tt=!!E.metalnessMap,Ee=!!E.roughnessMap,Oe=E.anisotropy>0,A=E.clearcoat>0,S=E.dispersion>0,F=E.iridescence>0,j=E.sheen>0,$=E.transmission>0,k=Oe&&!!E.anisotropyMap,be=A&&!!E.clearcoatMap,ce=A&&!!E.clearcoatNormalMap,Te=A&&!!E.clearcoatRoughnessMap,ve=F&&!!E.iridescenceMap,te=F&&!!E.iridescenceThicknessMap,re=j&&!!E.sheenColorMap,we=j&&!!E.sheenRoughnessMap,Re=!!E.specularMap,he=!!E.specularColorMap,Ne=!!E.specularIntensityMap,D=$&&!!E.transmissionMap,ue=$&&!!E.thicknessMap,se=!!E.gradientMap,oe=!!E.alphaMap,ie=E.alphaTest>0,K=!!E.alphaHash,xe=!!E.extensions;let Le=Ua;E.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Le=t.toneMapping);const _t={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:$e,fragmentShader:Je,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ye,batchingColor:ye&&W._colorsTexture!==null,instancing:ze,instancingColor:ze&&W.instanceColor!==null,instancingMorph:ze&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:As,alphaToCoverage:!!E.alphaToCoverage,map:We,matcap:Qt,envMap:Ve,envMapMode:Ve&&V.mapping,envMapCubeUVHeight:B,aoMap:Mt,lightMap:w,bumpMap:qe,normalMap:Ye,displacementMap:h&&xt,emissiveMap:_e,normalMapObjectSpace:Ye&&E.normalMapType===i1,normalMapTangentSpace:Ye&&E.normalMapType===n1,metalnessMap:Tt,roughnessMap:Ee,anisotropy:Oe,anisotropyMap:k,clearcoat:A,clearcoatMap:be,clearcoatNormalMap:ce,clearcoatRoughnessMap:Te,dispersion:S,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:te,sheen:j,sheenColorMap:re,sheenRoughnessMap:we,specularMap:Re,specularColorMap:he,specularIntensityMap:Ne,transmission:$,transmissionMap:D,thicknessMap:ue,gradientMap:se,opaque:E.transparent===!1&&E.blending===cs&&E.alphaToCoverage===!1,alphaMap:oe,alphaTest:ie,alphaHash:K,combine:E.combine,mapUv:We&&v(E.map.channel),aoMapUv:Mt&&v(E.aoMap.channel),lightMapUv:w&&v(E.lightMap.channel),bumpMapUv:qe&&v(E.bumpMap.channel),normalMapUv:Ye&&v(E.normalMap.channel),displacementMapUv:xt&&v(E.displacementMap.channel),emissiveMapUv:_e&&v(E.emissiveMap.channel),metalnessMapUv:Tt&&v(E.metalnessMap.channel),roughnessMapUv:Ee&&v(E.roughnessMap.channel),anisotropyMapUv:k&&v(E.anisotropyMap.channel),clearcoatMapUv:be&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:re&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(E.sheenRoughnessMap.channel),specularMapUv:Re&&v(E.specularMap.channel),specularColorMapUv:he&&v(E.specularColorMap.channel),specularIntensityMapUv:Ne&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:ue&&v(E.thicknessMap.channel),alphaMapUv:oe&&v(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ye||Oe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!q.attributes.uv&&(We||oe),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:W.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ge,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:We&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===ct,decodeVideoTextureEmissive:_e&&E.emissiveMap.isVideoTexture===!0&&tt.getTransfer(E.emissiveMap.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Oi,flipSided:E.side===Sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function u(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const U in E.defines)y.push(U),y.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(x(y,E),g(y,E),y.push(t.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function g(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function b(E){const y=_[E.type];let U;if(y){const I=ui[y];U=L1.clone(I.uniforms)}else U=E.uniforms;return U}function C(E,y){let U;for(let I=0,W=d.length;I<W;I++){const Q=d[I];if(Q.cacheKey===y){U=Q,++U.usedTimes;break}}return U===void 0&&(U=new aR(t,y,E,r),d.push(U)),U}function T(E){if(--E.usedTimes===0){const y=d.indexOf(E);d[y]=d[d.length-1],d.pop(),E.destroy()}}function R(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:b,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:d,dispose:N}}function cR(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function i(s){t.delete(s)}function a(s,o,l){t.get(s)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:a,dispose:r}}function uR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function xx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gx(){const t=[];let e=0;const n=[],i=[],a=[];function r(){e=0,n.length=0,i.length=0,a.length=0}function s(f,h,p,_,v,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=v,u.group=m),e++,u}function o(f,h,p,_,v,m){const u=s(f,h,p,_,v,m);p.transmission>0?i.push(u):p.transparent===!0?a.push(u):n.push(u)}function l(f,h,p,_,v,m){const u=s(f,h,p,_,v,m);p.transmission>0?i.unshift(u):p.transparent===!0?a.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||uR),i.length>1&&i.sort(h||xx),a.length>1&&a.sort(h||xx)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:a,init:r,push:o,unshift:l,finish:d,sort:c}}function fR(){let t=new WeakMap;function e(i,a){const r=t.get(i);let s;return r===void 0?(s=new gx,t.set(i,[s])):a>=r.length?(s=new gx,r.push(s)):s=r[a],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function dR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new dt};break;case"SpotLight":n={position:new X,direction:new X,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function hR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pR=0;function mR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function xR(t){const e=new dR,n=hR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const a=new X,r=new Xt,s=new Xt;function o(c){let d=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,v=0,m=0,u=0,x=0,g=0,b=0,C=0,T=0,R=0;c.sort(mR);for(let E=0,y=c.length;E<y;E++){const U=c[E],I=U.color,W=U.intensity,Q=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=I.r*W,f+=I.g*W,h+=I.b*W;else if(U.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(U.sh.coefficients[O],W);R++}else if(U.isDirectionalLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,B=n.get(U);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,i.directionalShadow[p]=B,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=U.shadow.matrix,x++}i.directional[p]=O,p++}else if(U.isSpotLight){const O=e.get(U);O.position.setFromMatrixPosition(U.matrixWorld),O.color.copy(I).multiplyScalar(W),O.distance=Q,O.coneCos=Math.cos(U.angle),O.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),O.decay=U.decay,i.spot[v]=O;const V=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,V.updateMatrices(U),U.castShadow&&T++),i.spotLightMatrix[v]=V.matrix,U.castShadow){const B=n.get(U);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,i.spotShadow[v]=B,i.spotShadowMap[v]=q,b++}v++}else if(U.isRectAreaLight){const O=e.get(U);O.color.copy(I).multiplyScalar(W),O.halfWidth.set(U.width*.5,0,0),O.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=O,m++}else if(U.isPointLight){const O=e.get(U);if(O.color.copy(U.color).multiplyScalar(U.intensity),O.distance=U.distance,O.decay=U.decay,U.castShadow){const V=U.shadow,B=n.get(U);B.shadowIntensity=V.intensity,B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=U.shadow.matrix,g++}i.point[_]=O,_++}else if(U.isHemisphereLight){const O=e.get(U);O.skyColor.copy(U.color).multiplyScalar(W),O.groundColor.copy(U.groundColor).multiplyScalar(W),i.hemi[u]=O,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==x||N.numPointShadows!==g||N.numSpotShadows!==b||N.numSpotMaps!==C||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=b+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,N.directionalLength=p,N.pointLength=_,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=x,N.numPointShadows=g,N.numSpotShadows=b,N.numSpotMaps=C,N.numLightProbes=R,i.version=pR++)}function l(c,d){let f=0,h=0,p=0,_=0,v=0;const m=d.matrixWorldInverse;for(let u=0,x=c.length;u<x;u++){const g=c[u];if(g.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),f++}else if(g.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(g.matrixWorld),a.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(m),s.identity(),r.copy(g.matrixWorld),r.premultiply(m),s.extractRotation(r),b.halfWidth.set(g.width*.5,0,0),b.halfHeight.set(0,g.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),_++}else if(g.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(g.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function _x(t){const e=new xR(t),n=[],i=[];function a(d){c.camera=d,n.length=0,i.length=0}function r(d){n.push(d)}function s(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:s}}function gR(t){let e=new WeakMap;function n(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new _x(t),e.set(a,[o])):r>=s.length?(o=new _x(t),s.push(o)):o=s[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const _R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function SR(t,e,n){let i=new aS;const a=new ht,r=new ht,s=new Pt,o=new k1({depthPacking:t1}),l=new W1,c={},d=n.maxTextureSize,f={[za]:Sn,[Sn]:za,[Oi]:Oi},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:_R,fragmentShader:vR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ga;_.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ba(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bv;let u=this.type;this.render=function(T,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),y=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Xi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const W=u!==Ui&&this.type===Ui,Q=u===Ui&&this.type!==Ui;for(let q=0,O=T.length;q<O;q++){const V=T[q],B=V.shadow;if(B===void 0){Be("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const J=B.getFrameExtents();if(a.multiply(J),r.copy(B.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(r.x=Math.floor(d/J.x),a.x=r.x*J.x,B.mapSize.x=r.x),a.y>d&&(r.y=Math.floor(d/J.y),a.y=r.y*J.y,B.mapSize.y=r.y)),B.map===null||W===!0||Q===!0){const Se=this.type!==Ui?{minFilter:Pn,magFilter:Pn}:{};B.map!==null&&B.map.dispose(),B.map=new gr(a.x,a.y,Se),B.map.texture.name=V.name+".shadowMap",B.camera.updateProjectionMatrix()}t.setRenderTarget(B.map),t.clear();const ne=B.getViewportCount();for(let Se=0;Se<ne;Se++){const Ge=B.getViewport(Se);s.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),I.viewport(s),B.updateMatrices(V,Se),i=B.getFrustum(),b(R,N,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Ui&&x(B,N),B.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(E,y,U)};function x(T,R){const N=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gr(a.x,a.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,N,h,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,N,p,v,null)}function g(T,R,N,E){let y=null;const U=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)y=U;else if(y=N.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=y.uuid,W=R.uuid;let Q=c[I];Q===void 0&&(Q={},c[I]=Q);let q=Q[W];q===void 0&&(q=y.clone(),Q[W]=q,R.addEventListener("dispose",C)),y=q}if(y.visible=R.visible,y.wireframe=R.wireframe,E===Ui?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:f[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=t.properties.get(y);I.light=N}return y}function b(T,R,N,E,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Ui)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const W=e.update(T),Q=T.material;if(Array.isArray(Q)){const q=W.groups;for(let O=0,V=q.length;O<V;O++){const B=q[O],J=Q[B.materialIndex];if(J&&J.visible){const ne=g(T,J,E,y);T.onBeforeShadow(t,T,R,N,W,ne,B),t.renderBufferDirect(N,null,W,ne,T,B),T.onAfterShadow(t,T,R,N,W,ne,B)}}}else if(Q.visible){const q=g(T,Q,E,y);T.onBeforeShadow(t,T,R,N,W,q,null),t.renderBufferDirect(N,null,W,q,T,null),T.onAfterShadow(t,T,R,N,W,q,null)}}const I=T.children;for(let W=0,Q=I.length;W<Q;W++)b(I[W],R,N,E,y)}function C(T){T.target.removeEventListener("dispose",C);for(const N in c){const E=c[N],y=T.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const bR={[Bd]:Fd,[Id]:Vd,[Hd]:Xd,[Ms]:Gd,[Fd]:Bd,[Vd]:Id,[Xd]:Hd,[Gd]:Ms};function yR(t,e){function n(){let D=!1;const ue=new Pt;let se=null;const oe=new Pt(0,0,0,0);return{setMask:function(ie){se!==ie&&!D&&(t.colorMask(ie,ie,ie,ie),se=ie)},setLocked:function(ie){D=ie},setClear:function(ie,K,xe,Le,_t){_t===!0&&(ie*=Le,K*=Le,xe*=Le),ue.set(ie,K,xe,Le),oe.equals(ue)===!1&&(t.clearColor(ie,K,xe,Le),oe.copy(ue))},reset:function(){D=!1,se=null,oe.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,se=null,oe=null,ie=null;return{setReversed:function(K){if(ue!==K){const xe=e.get("EXT_clip_control");K?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ue=K;const Le=ie;ie=null,this.setClear(Le)}},getReversed:function(){return ue},setTest:function(K){K?ee(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(K){se!==K&&!D&&(t.depthMask(K),se=K)},setFunc:function(K){if(ue&&(K=bR[K]),oe!==K){switch(K){case Bd:t.depthFunc(t.NEVER);break;case Fd:t.depthFunc(t.ALWAYS);break;case Id:t.depthFunc(t.LESS);break;case Ms:t.depthFunc(t.LEQUAL);break;case Hd:t.depthFunc(t.EQUAL);break;case Gd:t.depthFunc(t.GEQUAL);break;case Vd:t.depthFunc(t.GREATER);break;case Xd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=K}},setLocked:function(K){D=K},setClear:function(K){ie!==K&&(ue&&(K=1-K),t.clearDepth(K),ie=K)},reset:function(){D=!1,se=null,oe=null,ie=null,ue=!1}}}function a(){let D=!1,ue=null,se=null,oe=null,ie=null,K=null,xe=null,Le=null,_t=null;return{setTest:function(ot){D||(ot?ee(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(ot){ue!==ot&&!D&&(t.stencilMask(ot),ue=ot)},setFunc:function(ot,ci,ei){(se!==ot||oe!==ci||ie!==ei)&&(t.stencilFunc(ot,ci,ei),se=ot,oe=ci,ie=ei)},setOp:function(ot,ci,ei){(K!==ot||xe!==ci||Le!==ei)&&(t.stencilOp(ot,ci,ei),K=ot,xe=ci,Le=ei)},setLocked:function(ot){D=ot},setClear:function(ot){_t!==ot&&(t.clearStencil(ot),_t=ot)},reset:function(){D=!1,ue=null,se=null,oe=null,ie=null,K=null,xe=null,Le=null,_t=null}}}const r=new n,s=new i,o=new a,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,u=null,x=null,g=null,b=null,C=null,T=null,R=new dt(0,0,0),N=0,E=!1,y=null,U=null,I=null,W=null,Q=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=V>=2);let J=null,ne={};const Se=t.getParameter(t.SCISSOR_BOX),Ge=t.getParameter(t.VIEWPORT),$e=new Pt().fromArray(Se),Je=new Pt().fromArray(Ge);function nt(D,ue,se,oe){const ie=new Uint8Array(4),K=t.createTexture();t.bindTexture(D,K),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<se;xe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(ue+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return K}const Z={};Z[t.TEXTURE_2D]=nt(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=nt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=nt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=nt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),s.setFunc(Ms),qe(!1),Ye(Em),ee(t.CULL_FACE),Mt(Xi);function ee(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function me(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function ze(D,ue){return f[D]!==ue?(t.bindFramebuffer(D,ue),f[D]=ue,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function ye(D,ue){let se=p,oe=!1;if(D){se=h.get(ue),se===void 0&&(se=[],h.set(ue,se));const ie=D.textures;if(se.length!==ie.length||se[0]!==t.COLOR_ATTACHMENT0){for(let K=0,xe=ie.length;K<xe;K++)se[K]=t.COLOR_ATTACHMENT0+K;se.length=ie.length,oe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,oe=!0);oe&&t.drawBuffers(se)}function We(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const Qt={[nr]:t.FUNC_ADD,[R3]:t.FUNC_SUBTRACT,[C3]:t.FUNC_REVERSE_SUBTRACT};Qt[w3]=t.MIN,Qt[D3]=t.MAX;const Ve={[U3]:t.ZERO,[N3]:t.ONE,[L3]:t.SRC_COLOR,[Pd]:t.SRC_ALPHA,[I3]:t.SRC_ALPHA_SATURATE,[B3]:t.DST_COLOR,[P3]:t.DST_ALPHA,[O3]:t.ONE_MINUS_SRC_COLOR,[zd]:t.ONE_MINUS_SRC_ALPHA,[F3]:t.ONE_MINUS_DST_COLOR,[z3]:t.ONE_MINUS_DST_ALPHA,[H3]:t.CONSTANT_COLOR,[G3]:t.ONE_MINUS_CONSTANT_COLOR,[V3]:t.CONSTANT_ALPHA,[X3]:t.ONE_MINUS_CONSTANT_ALPHA};function Mt(D,ue,se,oe,ie,K,xe,Le,_t,ot){if(D===Xi){v===!0&&(me(t.BLEND),v=!1);return}if(v===!1&&(ee(t.BLEND),v=!0),D!==A3){if(D!==m||ot!==E){if((u!==nr||b!==nr)&&(t.blendEquation(t.FUNC_ADD),u=nr,b=nr),ot)switch(D){case cs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tm:t.blendFunc(t.ONE,t.ONE);break;case Am:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ot("WebGLState: Invalid blending: ",D);break}else switch(D){case cs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Am:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rm:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",D);break}x=null,g=null,C=null,T=null,R.set(0,0,0),N=0,m=D,E=ot}return}ie=ie||ue,K=K||se,xe=xe||oe,(ue!==u||ie!==b)&&(t.blendEquationSeparate(Qt[ue],Qt[ie]),u=ue,b=ie),(se!==x||oe!==g||K!==C||xe!==T)&&(t.blendFuncSeparate(Ve[se],Ve[oe],Ve[K],Ve[xe]),x=se,g=oe,C=K,T=xe),(Le.equals(R)===!1||_t!==N)&&(t.blendColor(Le.r,Le.g,Le.b,_t),R.copy(Le),N=_t),m=D,E=!1}function w(D,ue){D.side===Oi?me(t.CULL_FACE):ee(t.CULL_FACE);let se=D.side===Sn;ue&&(se=!se),qe(se),D.blending===cs&&D.transparent===!1?Mt(Xi):Mt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const oe=D.stencilWrite;o.setTest(oe),oe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_e(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){y!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),y=D)}function Ye(D){D!==M3?(ee(t.CULL_FACE),D!==U&&(D===Em?t.cullFace(t.BACK):D===E3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),U=D}function xt(D){D!==I&&(O&&t.lineWidth(D),I=D)}function _e(D,ue,se){D?(ee(t.POLYGON_OFFSET_FILL),(W!==ue||Q!==se)&&(t.polygonOffset(ue,se),W=ue,Q=se)):me(t.POLYGON_OFFSET_FILL)}function Tt(D){D?ee(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function Ee(D){D===void 0&&(D=t.TEXTURE0+q-1),J!==D&&(t.activeTexture(D),J=D)}function Oe(D,ue,se){se===void 0&&(J===null?se=t.TEXTURE0+q-1:se=J);let oe=ne[se];oe===void 0&&(oe={type:void 0,texture:void 0},ne[se]=oe),(oe.type!==D||oe.texture!==ue)&&(J!==se&&(t.activeTexture(se),J=se),t.bindTexture(D,ue||Z[D]),oe.type=D,oe.texture=ue)}function A(){const D=ne[J];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function F(){try{t.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function j(){try{t.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function $(){try{t.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function k(){try{t.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function be(){try{t.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ce(){try{t.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Te(){try{t.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ve(){try{t.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function te(){try{t.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function re(D){$e.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),$e.copy(D))}function we(D){Je.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Je.copy(D))}function Re(D,ue){let se=c.get(ue);se===void 0&&(se=new WeakMap,c.set(ue,se));let oe=se.get(D);oe===void 0&&(oe=t.getUniformBlockIndex(ue,D.name),se.set(D,oe))}function he(D,ue){const oe=c.get(ue).get(D);l.get(ue)!==oe&&(t.uniformBlockBinding(ue,oe,D.__bindingPointIndex),l.set(ue,oe))}function Ne(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},J=null,ne={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,u=null,x=null,g=null,b=null,C=null,T=null,R=new dt(0,0,0),N=0,E=!1,y=null,U=null,I=null,W=null,Q=null,$e.set(0,0,t.canvas.width,t.canvas.height),Je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ee,disable:me,bindFramebuffer:ze,drawBuffers:ye,useProgram:We,setBlending:Mt,setMaterial:w,setFlipSided:qe,setCullFace:Ye,setLineWidth:xt,setPolygonOffset:_e,setScissorTest:Tt,activeTexture:Ee,bindTexture:Oe,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:ve,texImage3D:te,updateUBOMapping:Re,uniformBlockBinding:he,texStorage2D:ce,texStorage3D:Te,texSubImage2D:j,texSubImage3D:$,compressedTexSubImage2D:k,compressedTexSubImage3D:be,scissor:re,viewport:we,reset:Ne}}function MR(t,e,n,i,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return p?new OffscreenCanvas(A,S):kc("canvas")}function v(A,S,F){let j=1;const $=Oe(A);if(($.width>F||$.height>F)&&(j=F/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const k=Math.floor(j*$.width),be=Math.floor(j*$.height);f===void 0&&(f=_(k,be));const ce=S?_(k,be):f;return ce.width=k,ce.height=be,ce.getContext("2d").drawImage(A,0,0,k,be),Be("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+be+")."),ce}else return"data"in A&&Be("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(A,S,F,j,$=!1){if(A!==null){if(t[A]!==void 0)return t[A];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let k=S;if(S===t.RED&&(F===t.FLOAT&&(k=t.R32F),F===t.HALF_FLOAT&&(k=t.R16F),F===t.UNSIGNED_BYTE&&(k=t.R8)),S===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.R8UI),F===t.UNSIGNED_SHORT&&(k=t.R16UI),F===t.UNSIGNED_INT&&(k=t.R32UI),F===t.BYTE&&(k=t.R8I),F===t.SHORT&&(k=t.R16I),F===t.INT&&(k=t.R32I)),S===t.RG&&(F===t.FLOAT&&(k=t.RG32F),F===t.HALF_FLOAT&&(k=t.RG16F),F===t.UNSIGNED_BYTE&&(k=t.RG8)),S===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.RG8UI),F===t.UNSIGNED_SHORT&&(k=t.RG16UI),F===t.UNSIGNED_INT&&(k=t.RG32UI),F===t.BYTE&&(k=t.RG8I),F===t.SHORT&&(k=t.RG16I),F===t.INT&&(k=t.RG32I)),S===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.RGB8UI),F===t.UNSIGNED_SHORT&&(k=t.RGB16UI),F===t.UNSIGNED_INT&&(k=t.RGB32UI),F===t.BYTE&&(k=t.RGB8I),F===t.SHORT&&(k=t.RGB16I),F===t.INT&&(k=t.RGB32I)),S===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(k=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(k=t.RGBA16UI),F===t.UNSIGNED_INT&&(k=t.RGBA32UI),F===t.BYTE&&(k=t.RGBA8I),F===t.SHORT&&(k=t.RGBA16I),F===t.INT&&(k=t.RGBA32I)),S===t.RGB&&(F===t.UNSIGNED_INT_5_9_9_9_REV&&(k=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(k=t.R11F_G11F_B10F)),S===t.RGBA){const be=$?Vc:tt.getTransfer(j);F===t.FLOAT&&(k=t.RGBA32F),F===t.HALF_FLOAT&&(k=t.RGBA16F),F===t.UNSIGNED_BYTE&&(k=be===ct?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(k=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(k=t.RGB5_A1)}return(k===t.R16F||k===t.R32F||k===t.RG16F||k===t.RG32F||k===t.RGBA16F||k===t.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function b(A,S){let F;return A?S===null||S===xr||S===Fo?F=t.DEPTH24_STENCIL8:S===Ii?F=t.DEPTH32F_STENCIL8:S===Bo&&(F=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xr||S===Fo?F=t.DEPTH_COMPONENT24:S===Ii?F=t.DEPTH_COMPONENT32F:S===Bo&&(F=t.DEPTH_COMPONENT16),F}function C(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pn&&A.minFilter!==Kn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){const S=A.target;S.removeEventListener("dispose",T),N(S),S.isVideoTexture&&d.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),y(S)}function N(A){const S=i.get(A);if(S.__webglInit===void 0)return;const F=A.source,j=h.get(F);if(j){const $=j[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(A),Object.keys(j).length===0&&h.delete(F)}i.remove(A)}function E(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const F=A.source,j=h.get(F);delete j[S.__cacheKey],s.memory.textures--}function y(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let $=0;$<S.__webglFramebuffer[j].length;$++)t.deleteFramebuffer(S.__webglFramebuffer[j][$]);else t.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)t.deleteFramebuffer(S.__webglFramebuffer[j]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=A.textures;for(let j=0,$=F.length;j<$;j++){const k=i.get(F[j]);k.__webglTexture&&(t.deleteTexture(k.__webglTexture),s.memory.textures--),i.remove(F[j])}i.remove(A)}let U=0;function I(){U=0}function W(){const A=U;return A>=a.maxTextures&&Be("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),U+=1,A}function Q(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){const F=i.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){const j=A.image;if(j===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,A,S);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+S)}function O(A,S){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Z(F,A,S);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+S)}function V(A,S){const F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Z(F,A,S);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+S)}function B(A,S){const F=i.get(A);if(A.version>0&&F.__version!==A.version){ee(F,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+S)}const J={[qd]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Yd]:t.MIRRORED_REPEAT},ne={[Pn]:t.NEAREST,[$3]:t.NEAREST_MIPMAP_NEAREST,[El]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[rf]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},Se={[a1]:t.NEVER,[u1]:t.ALWAYS,[r1]:t.LESS,[Yv]:t.LEQUAL,[s1]:t.EQUAL,[c1]:t.GEQUAL,[o1]:t.GREATER,[l1]:t.NOTEQUAL};function Ge(A,S){if(S.type===Ii&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Kn||S.magFilter===rf||S.magFilter===El||S.magFilter===ar||S.minFilter===Kn||S.minFilter===rf||S.minFilter===El||S.minFilter===ar)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,J[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,J[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,J[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ne[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pn||S.minFilter!==El&&S.minFilter!==ar||S.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function $e(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",T));const j=S.source;let $=h.get(j);$===void 0&&($={},h.set(j,$));const k=Q(S);if(k!==A.__cacheKey){$[k]===void 0&&($[k]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,F=!0),$[k].usedTimes++;const be=$[A.__cacheKey];be!==void 0&&($[A.__cacheKey].usedTimes--,be.usedTimes===0&&E(S)),A.__cacheKey=k,A.__webglTexture=$[k].texture}return F}function Je(A,S,F){return Math.floor(Math.floor(A/F)/S)}function nt(A,S,F,j){const k=A.updateRanges;if(k.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,F,j,S.data);else{k.sort((te,re)=>te.start-re.start);let be=0;for(let te=1;te<k.length;te++){const re=k[be],we=k[te],Re=re.start+re.count,he=Je(we.start,S.width,4),Ne=Je(re.start,S.width,4);we.start<=Re+1&&he===Ne&&Je(we.start+we.count-1,S.width,4)===he?re.count=Math.max(re.count,we.start+we.count-re.start):(++be,k[be]=we)}k.length=be+1;const ce=t.getParameter(t.UNPACK_ROW_LENGTH),Te=t.getParameter(t.UNPACK_SKIP_PIXELS),ve=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let te=0,re=k.length;te<re;te++){const we=k[te],Re=Math.floor(we.start/4),he=Math.ceil(we.count/4),Ne=Re%S.width,D=Math.floor(Re/S.width),ue=he,se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Ne,D,ue,se,F,j,S.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function Z(A,S,F){let j=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=t.TEXTURE_3D);const $=$e(A,S),k=S.source;n.bindTexture(j,A.__webglTexture,t.TEXTURE0+F);const be=i.get(k);if(k.version!==be.__version||$===!0){n.activeTexture(t.TEXTURE0+F);const ce=tt.getPrimaries(tt.workingColorSpace),Te=S.colorSpace===ha?null:tt.getPrimaries(S.colorSpace),ve=S.colorSpace===ha||ce===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let te=v(S.image,!1,a.maxTextureSize);te=Ee(S,te);const re=r.convert(S.format,S.colorSpace),we=r.convert(S.type);let Re=g(S.internalFormat,re,we,S.colorSpace,S.isVideoTexture);Ge(j,S);let he;const Ne=S.mipmaps,D=S.isVideoTexture!==!0,ue=be.__version===void 0||$===!0,se=k.dataReady,oe=C(S,te);if(S.isDepthTexture)Re=b(S.format===Ho,S.type),ue&&(D?n.texStorage2D(t.TEXTURE_2D,1,Re,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Re,te.width,te.height,0,re,we,null));else if(S.isDataTexture)if(Ne.length>0){D&&ue&&n.texStorage2D(t.TEXTURE_2D,oe,Re,Ne[0].width,Ne[0].height);for(let ie=0,K=Ne.length;ie<K;ie++)he=Ne[ie],D?se&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,re,we,he.data):n.texImage2D(t.TEXTURE_2D,ie,Re,he.width,he.height,0,re,we,he.data);S.generateMipmaps=!1}else D?(ue&&n.texStorage2D(t.TEXTURE_2D,oe,Re,te.width,te.height),se&&nt(S,te,re,we)):n.texImage2D(t.TEXTURE_2D,0,Re,te.width,te.height,0,re,we,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Re,Ne[0].width,Ne[0].height,te.depth);for(let ie=0,K=Ne.length;ie<K;ie++)if(he=Ne[ie],S.format!==oi)if(re!==null)if(D){if(se)if(S.layerUpdates.size>0){const xe=Zm(he.width,he.height,S.format,S.type);for(const Le of S.layerUpdates){const _t=he.data.subarray(Le*xe/he.data.BYTES_PER_ELEMENT,(Le+1)*xe/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Le,he.width,he.height,1,re,_t)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,te.depth,re,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Re,he.width,he.height,te.depth,0,he.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,he.width,he.height,te.depth,re,we,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Re,he.width,he.height,te.depth,0,re,we,he.data)}else{D&&ue&&n.texStorage2D(t.TEXTURE_2D,oe,Re,Ne[0].width,Ne[0].height);for(let ie=0,K=Ne.length;ie<K;ie++)he=Ne[ie],S.format!==oi?re!==null?D?se&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,re,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Re,he.width,he.height,0,he.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?se&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,he.width,he.height,re,we,he.data):n.texImage2D(t.TEXTURE_2D,ie,Re,he.width,he.height,0,re,we,he.data)}else if(S.isDataArrayTexture)if(D){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,Re,te.width,te.height,te.depth),se)if(S.layerUpdates.size>0){const ie=Zm(te.width,te.height,S.format,S.type);for(const K of S.layerUpdates){const xe=te.data.subarray(K*ie/te.data.BYTES_PER_ELEMENT,(K+1)*ie/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,te.width,te.height,1,re,we,xe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,re,we,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,te.width,te.height,te.depth,0,re,we,te.data);else if(S.isData3DTexture)D?(ue&&n.texStorage3D(t.TEXTURE_3D,oe,Re,te.width,te.height,te.depth),se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,re,we,te.data)):n.texImage3D(t.TEXTURE_3D,0,Re,te.width,te.height,te.depth,0,re,we,te.data);else if(S.isFramebufferTexture){if(ue)if(D)n.texStorage2D(t.TEXTURE_2D,oe,Re,te.width,te.height);else{let ie=te.width,K=te.height;for(let xe=0;xe<oe;xe++)n.texImage2D(t.TEXTURE_2D,xe,Re,ie,K,0,re,we,null),ie>>=1,K>>=1}}else if(Ne.length>0){if(D&&ue){const ie=Oe(Ne[0]);n.texStorage2D(t.TEXTURE_2D,oe,Re,ie.width,ie.height)}for(let ie=0,K=Ne.length;ie<K;ie++)he=Ne[ie],D?se&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,re,we,he):n.texImage2D(t.TEXTURE_2D,ie,Re,re,we,he);S.generateMipmaps=!1}else if(D){if(ue){const ie=Oe(te);n.texStorage2D(t.TEXTURE_2D,oe,Re,ie.width,ie.height)}se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re,we,te)}else n.texImage2D(t.TEXTURE_2D,0,Re,re,we,te);m(S)&&u(j),be.__version=k.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ee(A,S,F){if(S.image.length!==6)return;const j=$e(A,S),$=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);const k=i.get($);if($.version!==k.__version||j===!0){n.activeTexture(t.TEXTURE0+F);const be=tt.getPrimaries(tt.workingColorSpace),ce=S.colorSpace===ha?null:tt.getPrimaries(S.colorSpace),Te=S.colorSpace===ha||be===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,re=[];for(let K=0;K<6;K++)!ve&&!te?re[K]=v(S.image[K],!0,a.maxCubemapSize):re[K]=te?S.image[K].image:S.image[K],re[K]=Ee(S,re[K]);const we=re[0],Re=r.convert(S.format,S.colorSpace),he=r.convert(S.type),Ne=g(S.internalFormat,Re,he,S.colorSpace),D=S.isVideoTexture!==!0,ue=k.__version===void 0||j===!0,se=$.dataReady;let oe=C(S,we);Ge(t.TEXTURE_CUBE_MAP,S);let ie;if(ve){D&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Ne,we.width,we.height);for(let K=0;K<6;K++){ie=re[K].mipmaps;for(let xe=0;xe<ie.length;xe++){const Le=ie[xe];S.format!==oi?Re!==null?D?se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Le.width,Le.height,Re,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,Ne,Le.width,Le.height,0,Le.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,0,0,Le.width,Le.height,Re,he,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe,Ne,Le.width,Le.height,0,Re,he,Le.data)}}}else{if(ie=S.mipmaps,D&&ue){ie.length>0&&oe++;const K=Oe(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(te){D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,re[K].width,re[K].height,Re,he,re[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,re[K].width,re[K].height,0,Re,he,re[K].data);for(let xe=0;xe<ie.length;xe++){const _t=ie[xe].image[K].image;D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,_t.width,_t.height,Re,he,_t.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,Ne,_t.width,_t.height,0,Re,he,_t.data)}}else{D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,he,re[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,Re,he,re[K]);for(let xe=0;xe<ie.length;xe++){const Le=ie[xe];D?se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,0,0,Re,he,Le.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,xe+1,Ne,Re,he,Le.image[K])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),k.__version=$.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function me(A,S,F,j,$,k){const be=r.convert(F.format,F.colorSpace),ce=r.convert(F.type),Te=g(F.internalFormat,be,ce,F.colorSpace),ve=i.get(S),te=i.get(F);if(te.__renderTarget=S,!ve.__hasExternalTextures){const re=Math.max(1,S.width>>k),we=Math.max(1,S.height>>k);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,k,Te,re,we,S.depth,0,be,ce,null):n.texImage2D($,k,Te,re,we,0,be,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),_e(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,$,te.__webglTexture,0,xt(S)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,$,te.__webglTexture,k),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(A,S,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const j=S.depthTexture,$=j&&j.isDepthTexture?j.type:null,k=b(S.stencilBuffer,$),be=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=xt(S);_e(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,k,S.width,S.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,k,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,k,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,A)}else{const j=S.textures;for(let $=0;$<j.length;$++){const k=j[$],be=r.convert(k.format,k.colorSpace),ce=r.convert(k.type),Te=g(k.internalFormat,be,ce,k.colorSpace),ve=xt(S);F&&_e(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Te,S.width,S.height):_e(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,Te,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Te,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ye(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const $=j.__webglTexture,k=xt(S);if(S.depthTexture.format===Io)_e(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(S.depthTexture.format===Ho)_e(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function We(A){const S=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=j}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const j=A.texture.mipmaps;j&&j.length>0?ye(S.__webglFramebuffer[0],A):ye(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=t.createRenderbuffer(),ze(S.__webglDepthbuffer[j],A,!1);else{const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=S.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,k)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),ze(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,k)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qt(A,S,F){const j=i.get(A);S!==void 0&&me(j.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&We(A)}function Ve(A){const S=A.texture,F=i.get(A),j=i.get(S);A.addEventListener("dispose",R);const $=A.textures,k=A.isWebGLCubeRenderTarget===!0,be=$.length>1;if(be||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=S.version,s.memory.textures++),k){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let Te=0;Te<S.mipmaps.length;Te++)F.__webglFramebuffer[ce][Te]=t.createFramebuffer()}else F.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)F.__webglFramebuffer[ce]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(be)for(let ce=0,Te=$.length;ce<Te;ce++){const ve=i.get($[ce]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&_e(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<$.length;ce++){const Te=$[ce];F.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const ve=r.convert(Te.format,Te.colorSpace),te=r.convert(Te.type),re=g(Te.internalFormat,ve,te,Te.colorSpace,A.isXRRenderTarget===!0),we=xt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,re,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),ze(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(k){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)me(F.__webglFramebuffer[ce][Te],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te);else me(F.__webglFramebuffer[ce],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let ce=0,Te=$.length;ce<Te;ce++){const ve=$[ce],te=i.get(ve);let re=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(re=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,te.__webglTexture),Ge(re,ve),me(F.__webglFramebuffer,A,ve,t.COLOR_ATTACHMENT0+ce,re,0),m(ve)&&u(re)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ce=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,j.__webglTexture),Ge(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)me(F.__webglFramebuffer[Te],A,S,t.COLOR_ATTACHMENT0,ce,Te);else me(F.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,ce,0);m(S)&&u(ce),n.unbindTexture()}A.depthBuffer&&We(A)}function Mt(A){const S=A.textures;for(let F=0,j=S.length;F<j;F++){const $=S[F];if(m($)){const k=x(A),be=i.get($).__webglTexture;n.bindTexture(k,be),u(k),n.unbindTexture()}}}const w=[],qe=[];function Ye(A){if(A.samples>0){if(_e(A)===!1){const S=A.textures,F=A.width,j=A.height;let $=t.COLOR_BUFFER_BIT;const k=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(A),ce=S.length>1;if(ce)for(let ve=0;ve<S.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Te=A.texture.mipmaps;Te&&Te.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const te=i.get(S[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,F,j,0,0,F,j,$,t.NEAREST),l===!0&&(w.length=0,qe.length=0,w.push(t.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(w.push(k),qe.push(k),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,qe)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,w))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ve=0;ve<S.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const te=i.get(S[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function xt(A){return Math.min(a.maxSamples,A.samples)}function _e(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Tt(A){const S=s.render.frame;d.get(A)!==S&&(d.set(A,S),A.update())}function Ee(A,S){const F=A.colorSpace,j=A.format,$=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==As&&F!==ha&&(tt.getTransfer(F)===ct?(j!==oi||$!==Ki)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",F)),S}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=Qt,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_e}function ER(t,e){function n(i,a=ha){let r;const s=tt.getTransfer(a);if(i===Ki)return t.UNSIGNED_BYTE;if(i===Rp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Cp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hv)return t.BYTE;if(i===Gv)return t.SHORT;if(i===Bo)return t.UNSIGNED_SHORT;if(i===Ap)return t.INT;if(i===xr)return t.UNSIGNED_INT;if(i===Ii)return t.FLOAT;if(i===Bs)return t.HALF_FLOAT;if(i===kv)return t.ALPHA;if(i===Wv)return t.RGB;if(i===oi)return t.RGBA;if(i===Io)return t.DEPTH_COMPONENT;if(i===Ho)return t.DEPTH_STENCIL;if(i===qv)return t.RED;if(i===wp)return t.RED_INTEGER;if(i===Dp)return t.RG;if(i===Up)return t.RG_INTEGER;if(i===Np)return t.RGBA_INTEGER;if(i===sc||i===oc||i===lc||i===cc)if(s===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===sc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===sc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jd||i===Zd||i===Kd||i===Qd)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qd)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jd||i===$d||i===eh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Jd||i===$d)return s===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===th||i===nh||i===ih||i===ah||i===rh||i===sh||i===oh||i===lh||i===ch||i===uh||i===fh||i===dh||i===hh||i===ph)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===th)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ih)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ah)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===oh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ch)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hh)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ph)return s===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mh||i===xh||i===gh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mh)return s===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_h||i===vh||i===Sh||i===bh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===_h)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const TR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new sS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:TR,fragmentShader:AR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ba(new mu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CR extends Fs{constructor(e,n){super();const i=this;let a=null,r=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new RR,u={},x=n.getContextAttributes();let g=null,b=null;const C=[],T=[],R=new ht;let N=null;const E=new qn;E.viewport=new Pt;const y=new qn;y.viewport=new Pt;const U=[E,y],I=new Y1;let W=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=C[Z];return ee===void 0&&(ee=new Cf,C[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=C[Z];return ee===void 0&&(ee=new Cf,C[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=C[Z];return ee===void 0&&(ee=new Cf,C[Z]=ee),ee.getHandSpace()};function q(Z){const ee=T.indexOf(Z.inputSource);if(ee===-1)return;const me=C[ee];me!==void 0&&(me.update(Z.inputSource,Z.frame,c||s),me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",O),a.removeEventListener("inputsourceschange",V);for(let Z=0;Z<C.length;Z++){const ee=T[Z];ee!==null&&(T[Z]=null,C[Z].disconnect(ee))}W=null,Q=null,m.reset();for(const Z in u)delete u[Z];e.setRenderTarget(g),p=null,h=null,f=null,a=null,b=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(a,n)),f},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",O),a.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ze=null,ye=null;x.depth&&(ye=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=x.stencil?Ho:Io,ze=x.stencil?Fo:xr);const We={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(We),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new gr(h.textureWidth,h.textureHeight,{format:oi,type:Ki,depthTexture:new rS(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,n,me),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new gr(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(o),nt.setContext(a),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(Z){for(let ee=0;ee<Z.removed.length;ee++){const me=Z.removed[ee],ze=T.indexOf(me);ze>=0&&(T[ze]=null,C[ze].disconnect(me))}for(let ee=0;ee<Z.added.length;ee++){const me=Z.added[ee];let ze=T.indexOf(me);if(ze===-1){for(let We=0;We<C.length;We++)if(We>=T.length){T.push(me),ze=We;break}else if(T[We]===null){T[We]=me,ze=We;break}if(ze===-1)break}const ye=C[ze];ye&&ye.connect(me)}}const B=new X,J=new X;function ne(Z,ee,me){B.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(me.matrixWorld);const ze=B.distanceTo(J),ye=ee.projectionMatrix.elements,We=me.projectionMatrix.elements,Qt=ye[14]/(ye[10]-1),Ve=ye[14]/(ye[10]+1),Mt=(ye[9]+1)/ye[5],w=(ye[9]-1)/ye[5],qe=(ye[8]-1)/ye[0],Ye=(We[8]+1)/We[0],xt=Qt*qe,_e=Qt*Ye,Tt=ze/(-qe+Ye),Ee=Tt*-qe;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ee),Z.translateZ(Tt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ye[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const Oe=Qt+Tt,A=Ve+Tt,S=xt-Ee,F=_e+(ze-Ee),j=Mt*Ve/A*Oe,$=w*Ve/A*Oe;Z.projectionMatrix.makePerspective(S,F,j,$,Oe,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ee=Z.near,me=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(me=m.depthFar)),I.near=y.near=E.near=ee,I.far=y.far=E.far=me,(W!==I.near||Q!==I.far)&&(a.updateRenderState({depthNear:I.near,depthFar:I.far}),W=I.near,Q=I.far),I.layers.mask=Z.layers.mask|6,E.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const ze=Z.parent,ye=I.cameras;Se(I,ze);for(let We=0;We<ye.length;We++)Se(ye[We],ze);ye.length===2?ne(I,E,y):I.projectionMatrix.copy(E.projectionMatrix),Ge(Z,I,ze)};function Ge(Z,ee,me){me===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=yh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(Z){return u[Z]};let $e=null;function Je(Z,ee){if(d=ee.getViewerPose(c||s),_=ee,d!==null){const me=d.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ze=!1;me.length!==I.cameras.length&&(I.cameras.length=0,ze=!0);for(let Ve=0;Ve<me.length;Ve++){const Mt=me[Ve];let w=null;if(p!==null)w=p.getViewport(Mt);else{const Ye=f.getViewSubImage(h,Mt);w=Ye.viewport,Ve===0&&(e.setRenderTargetTextures(b,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(b))}let qe=U[Ve];qe===void 0&&(qe=new qn,qe.layers.enable(Ve),qe.viewport=new Pt,U[Ve]=qe),qe.matrix.fromArray(Mt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(Mt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(w.x,w.y,w.width,w.height),Ve===0&&(I.matrix.copy(qe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ze===!0&&I.cameras.push(qe)}const ye=a.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Ve=f.getDepthInformation(me[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,a.renderState)}if(ye&&ye.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Ve=0;Ve<me.length;Ve++){const Mt=me[Ve].camera;if(Mt){let w=u[Mt];w||(w=new sS,u[Mt]=w);const qe=f.getCameraImage(Mt);w.sourceTexture=qe}}}}for(let me=0;me<C.length;me++){const ze=T[me],ye=C[me];ze!==null&&ye!==void 0&&ye.update(ze,ee,c||s)}$e&&$e(Z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const nt=new oS;nt.setAnimationLoop(Je),this.setAnimationLoop=function(Z){$e=Z},this.dispose=function(){}}}const Ka=new Qi,wR=new Xt;function DR(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,tS(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,x,g,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),d(m,u)):u.isMeshStandardMaterial?(r(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,b)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),v(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,x,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Sn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Sn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const x=e.get(u),g=x.envMap,b=x.envMapRotation;g&&(m.envMap.value=g,Ka.copy(b),Ka.x*=-1,Ka.y*=-1,Ka.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ka.y*=-1,Ka.z*=-1),m.envMapRotation.value.setFromMatrix4(wR.makeRotationFromEuler(Ka)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=g*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Sn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const x=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function UR(t,e,n,i){let a={},r={},s=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,g){const b=g.program;i.uniformBlockBinding(x,b)}function c(x,g){let b=a[x.id];b===void 0&&(_(x),b=d(x),a[x.id]=b,x.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(x,C);const T=e.render.frame;r[x.id]!==T&&(h(x),r[x.id]=T)}function d(x){const g=f();x.__bindingPointIndex=g;const b=t.createBuffer(),C=x.__size,T=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,b),b}function f(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const g=a[x.id],b=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let T=0,R=b.length;T<R;T++){const N=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,y=N.length;E<y;E++){const U=N[E];if(p(U,T,E,C)===!0){const I=U.__offset,W=Array.isArray(U.value)?U.value:[U.value];let Q=0;for(let q=0;q<W.length;q++){const O=W[q],V=v(O);typeof O=="number"||typeof O=="boolean"?(U.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,I+Q,U.__data)):O.isMatrix3?(U.__data[0]=O.elements[0],U.__data[1]=O.elements[1],U.__data[2]=O.elements[2],U.__data[3]=0,U.__data[4]=O.elements[3],U.__data[5]=O.elements[4],U.__data[6]=O.elements[5],U.__data[7]=0,U.__data[8]=O.elements[6],U.__data[9]=O.elements[7],U.__data[10]=O.elements[8],U.__data[11]=0):(O.toArray(U.__data,Q),Q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,g,b,C){const T=x.value,R=g+"_"+b;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{const N=C[R];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return C[R]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function _(x){const g=x.uniforms;let b=0;const C=16;for(let R=0,N=g.length;R<N;R++){const E=Array.isArray(g[R])?g[R]:[g[R]];for(let y=0,U=E.length;y<U;y++){const I=E[y],W=Array.isArray(I.value)?I.value:[I.value];for(let Q=0,q=W.length;Q<q;Q++){const O=W[Q],V=v(O),B=b%C,J=B%V.boundary,ne=B+J;b+=J,ne!==0&&C-ne<V.storage&&(b+=C-ne),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=V.storage}}}const T=b%C;return T>0&&(b+=C-T),x.__size=b,x.__cache={},this}function v(x){const g={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(g.boundary=4,g.storage=4):x.isVector2?(g.boundary=8,g.storage=8):x.isVector3||x.isColor?(g.boundary=16,g.storage=12):x.isVector4?(g.boundary=16,g.storage=16):x.isMatrix3?(g.boundary=48,g.storage=48):x.isMatrix4?(g.boundary=64,g.storage=64):x.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",x),g}function m(x){const g=x.target;g.removeEventListener("dispose",m);const b=s.indexOf(g.__bindingPointIndex);s.splice(b,1),t.deleteBuffer(a[g.id]),delete a[g.id],delete r[g.id]}function u(){for(const x in a)t.deleteBuffer(a[x]);s=[],a={},r={}}return{bind:l,update:c,dispose:u}}const NR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ci=null;function LR(){return Ci===null&&(Ci=new H1(NR,32,32,Dp,Bs),Ci.minFilter=Kn,Ci.magFilter=Kn,Ci.wrapS=Fi,Ci.wrapT=Fi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}class OR{constructor(e={}){const{canvas:n=f1(),context:i=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const _=new Set([Np,Up,wp]),v=new Set([Ki,xr,Bo,Fo,Rp,Cp]),m=new Uint32Array(4),u=new Int32Array(4);let x=null,g=null;const b=[],C=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1;this._outputColorSpace=Vn;let N=0,E=0,y=null,U=-1,I=null;const W=new Pt,Q=new Pt;let q=null;const O=new dt(0);let V=0,B=n.width,J=n.height,ne=1,Se=null,Ge=null;const $e=new Pt(0,0,B,J),Je=new Pt(0,0,B,J);let nt=!1;const Z=new aS;let ee=!1,me=!1;const ze=new Xt,ye=new X,We=new Pt,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function Mt(){return y===null?ne:1}let w=i;function qe(M,L){return n.getContext(M,L)}try{const M={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tp}`),n.addEventListener("webglcontextlost",ie,!1),n.addEventListener("webglcontextrestored",K,!1),n.addEventListener("webglcontextcreationerror",xe,!1),w===null){const L="webgl2";if(w=qe(L,M),w===null)throw qe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let Ye,xt,_e,Tt,Ee,Oe,A,S,F,j,$,k,be,ce,Te,ve,te,re,we,Re,he,Ne,D,ue;function se(){Ye=new V2(w),Ye.init(),Ne=new ER(w,Ye),xt=new L2(w,Ye,e,Ne),_e=new yR(w,Ye),xt.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),Tt=new W2(w),Ee=new cR,Oe=new MR(w,Ye,_e,Ee,xt,Ne,Tt),A=new P2(T),S=new G2(T),F=new Z1(w),D=new U2(w,F),j=new X2(w,F,Tt,D),$=new Y2(w,j,F,Tt),we=new q2(w,xt,Oe),ve=new O2(Ee),k=new lR(T,A,S,Ye,xt,D,ve),be=new DR(T,Ee),ce=new fR,Te=new gR(Ye),re=new D2(T,A,S,_e,$,p,l),te=new SR(T,$,xt),ue=new UR(w,Tt,xt,_e),Re=new N2(w,Ye,Tt),he=new k2(w,Ye,Tt),Tt.programs=k.programs,T.capabilities=xt,T.extensions=Ye,T.properties=Ee,T.renderLists=ce,T.shadowMap=te,T.state=_e,T.info=Tt}se();const oe=new CR(T,w);this.xr=oe,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const M=Ye.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ye.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(M){M!==void 0&&(ne=M,this.setSize(B,J,!1))},this.getSize=function(M){return M.set(B,J)},this.setSize=function(M,L,H=!0){if(oe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,J=L,n.width=Math.floor(M*ne),n.height=Math.floor(L*ne),H===!0&&(n.style.width=M+"px",n.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(B*ne,J*ne).floor()},this.setDrawingBufferSize=function(M,L,H){B=M,J=L,ne=H,n.width=Math.floor(M*H),n.height=Math.floor(L*H),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(W)},this.getViewport=function(M){return M.copy($e)},this.setViewport=function(M,L,H,G){M.isVector4?$e.set(M.x,M.y,M.z,M.w):$e.set(M,L,H,G),_e.viewport(W.copy($e).multiplyScalar(ne).round())},this.getScissor=function(M){return M.copy(Je)},this.setScissor=function(M,L,H,G){M.isVector4?Je.set(M.x,M.y,M.z,M.w):Je.set(M,L,H,G),_e.scissor(Q.copy(Je).multiplyScalar(ne).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(M){_e.setScissorTest(nt=M)},this.setOpaqueSort=function(M){Se=M},this.setTransparentSort=function(M){Ge=M},this.getClearColor=function(M){return M.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,H=!0){let G=0;if(M){let P=!1;if(y!==null){const ae=y.texture.format;P=_.has(ae)}if(P){const ae=y.texture.type,de=v.has(ae),ge=re.getClearColor(),pe=re.getClearAlpha(),Ce=ge.r,Ue=ge.g,Me=ge.b;de?(m[0]=Ce,m[1]=Ue,m[2]=Me,m[3]=pe,w.clearBufferuiv(w.COLOR,0,m)):(u[0]=Ce,u[1]=Ue,u[2]=Me,u[3]=pe,w.clearBufferiv(w.COLOR,0,u))}else G|=w.COLOR_BUFFER_BIT}L&&(G|=w.DEPTH_BUFFER_BIT),H&&(G|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ie,!1),n.removeEventListener("webglcontextrestored",K,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),re.dispose(),ce.dispose(),Te.dispose(),Ee.dispose(),A.dispose(),S.dispose(),$.dispose(),D.dispose(),ue.dispose(),k.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Pp),oe.removeEventListener("sessionend",zp),Va.stop()};function ie(M){M.preventDefault(),Nm("WebGLRenderer: Context Lost."),R=!0}function K(){Nm("WebGLRenderer: Context Restored."),R=!1;const M=Tt.autoReset,L=te.enabled,H=te.autoUpdate,G=te.needsUpdate,P=te.type;se(),Tt.autoReset=M,te.enabled=L,te.autoUpdate=H,te.needsUpdate=G,te.type=P}function xe(M){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Le(M){const L=M.target;L.removeEventListener("dispose",Le),_t(L)}function _t(M){ot(M),Ee.remove(M)}function ot(M){const L=Ee.get(M).programs;L!==void 0&&(L.forEach(function(H){k.releaseProgram(H)}),M.isShaderMaterial&&k.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,H,G,P,ae){L===null&&(L=Qt);const de=P.isMesh&&P.matrixWorld.determinant()<0,ge=hS(M,L,H,G,P);_e.setMaterial(G,de);let pe=H.index,Ce=1;if(G.wireframe===!0){if(pe=j.getWireframeAttribute(H),pe===void 0)return;Ce=2}const Ue=H.drawRange,Me=H.attributes.position;let je=Ue.start*Ce,lt=(Ue.start+Ue.count)*Ce;ae!==null&&(je=Math.max(je,ae.start*Ce),lt=Math.min(lt,(ae.start+ae.count)*Ce)),pe!==null?(je=Math.max(je,0),lt=Math.min(lt,pe.count)):Me!=null&&(je=Math.max(je,0),lt=Math.min(lt,Me.count));const Ct=lt-je;if(Ct<0||Ct===1/0)return;D.setup(P,G,ge,H,pe);let wt,pt=Re;if(pe!==null&&(wt=F.get(pe),pt=he,pt.setIndex(wt)),P.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Mt()),pt.setMode(w.LINES)):pt.setMode(w.TRIANGLES);else if(P.isLine){let Ae=G.linewidth;Ae===void 0&&(Ae=1),_e.setLineWidth(Ae*Mt()),P.isLineSegments?pt.setMode(w.LINES):P.isLineLoop?pt.setMode(w.LINE_LOOP):pt.setMode(w.LINE_STRIP)}else P.isPoints?pt.setMode(w.POINTS):P.isSprite&&pt.setMode(w.TRIANGLES);if(P.isBatchedMesh)if(P._multiDrawInstances!==null)Go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount,P._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))pt.renderMultiDraw(P._multiDrawStarts,P._multiDrawCounts,P._multiDrawCount);else{const Ae=P._multiDrawStarts,At=P._multiDrawCounts,et=P._multiDrawCount,Mn=pe?F.get(pe).bytesPerElement:1,Er=Ee.get(G).currentProgram.getUniforms();for(let En=0;En<et;En++)Er.setValue(w,"_gl_DrawID",En),pt.render(Ae[En]/Mn,At[En])}else if(P.isInstancedMesh)pt.renderInstances(je,Ct,P.count);else if(H.isInstancedBufferGeometry){const Ae=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,At=Math.min(H.instanceCount,Ae);pt.renderInstances(je,Ct,At)}else pt.render(je,Ct)};function ci(M,L,H){M.transparent===!0&&M.side===Oi&&M.forceSinglePass===!1?(M.side=Sn,M.needsUpdate=!0,ol(M,L,H),M.side=za,M.needsUpdate=!0,ol(M,L,H),M.side=Oi):ol(M,L,H)}this.compile=function(M,L,H=null){H===null&&(H=M),g=Te.get(H),g.init(L),C.push(g),H.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(g.pushLight(P),P.castShadow&&g.pushShadow(P))}),M!==H&&M.traverseVisible(function(P){P.isLight&&P.layers.test(L.layers)&&(g.pushLight(P),P.castShadow&&g.pushShadow(P))}),g.setupLights();const G=new Set;return M.traverse(function(P){if(!(P.isMesh||P.isPoints||P.isLine||P.isSprite))return;const ae=P.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const ge=ae[de];ci(ge,H,P),G.add(ge)}else ci(ae,H,P),G.add(ae)}),g=C.pop(),G},this.compileAsync=function(M,L,H=null){const G=this.compile(M,L,H);return new Promise(P=>{function ae(){if(G.forEach(function(de){Ee.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){P(M);return}setTimeout(ae,10)}Ye.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let ei=null;function dS(M){ei&&ei(M)}function Pp(){Va.stop()}function zp(){Va.start()}const Va=new oS;Va.setAnimationLoop(dS),typeof self<"u"&&Va.setContext(self),this.setAnimationLoop=function(M){ei=M,oe.setAnimationLoop(M),M===null?Va.stop():Va.start()},oe.addEventListener("sessionstart",Pp),oe.addEventListener("sessionend",zp),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(L),L=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,L,y),g=Te.get(M,C.length),g.init(L),C.push(g),ze.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Z.setFromProjectionMatrix(ze,pi,L.reversedDepth),me=this.localClippingEnabled,ee=ve.init(this.clippingPlanes,me),x=ce.get(M,b.length),x.init(),b.push(x),oe.enabled===!0&&oe.isPresenting===!0){const ae=T.xr.getDepthSensingMesh();ae!==null&&_u(ae,L,-1/0,T.sortObjects)}_u(M,L,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(Se,Ge),Ve=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ve&&re.addToRenderList(x,M),this.info.render.frame++,ee===!0&&ve.beginShadows();const H=g.state.shadowsArray;te.render(H,M,L),ee===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=x.opaque,P=x.transmissive;if(g.setupLights(),L.isArrayCamera){const ae=L.cameras;if(P.length>0)for(let de=0,ge=ae.length;de<ge;de++){const pe=ae[de];Fp(G,P,M,pe)}Ve&&re.render(M);for(let de=0,ge=ae.length;de<ge;de++){const pe=ae[de];Bp(x,M,pe,pe.viewport)}}else P.length>0&&Fp(G,P,M,L),Ve&&re.render(M),Bp(x,M,L);y!==null&&E===0&&(Oe.updateMultisampleRenderTarget(y),Oe.updateRenderTargetMipmap(y)),M.isScene===!0&&M.onAfterRender(T,M,L),D.resetDefaultState(),U=-1,I=null,C.pop(),C.length>0?(g=C[C.length-1],ee===!0&&ve.setGlobalState(T.clippingPlanes,g.state.camera)):g=null,b.pop(),b.length>0?x=b[b.length-1]:x=null};function _u(M,L,H,G){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Z.intersectsSprite(M)){G&&We.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ze);const de=$.update(M),ge=M.material;ge.visible&&x.push(M,de,ge,H,We.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Z.intersectsObject(M))){const de=$.update(M),ge=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),We.copy(M.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),We.copy(de.boundingSphere.center)),We.applyMatrix4(M.matrixWorld).applyMatrix4(ze)),Array.isArray(ge)){const pe=de.groups;for(let Ce=0,Ue=pe.length;Ce<Ue;Ce++){const Me=pe[Ce],je=ge[Me.materialIndex];je&&je.visible&&x.push(M,de,je,H,We.z,Me)}}else ge.visible&&x.push(M,de,ge,H,We.z,null)}}const ae=M.children;for(let de=0,ge=ae.length;de<ge;de++)_u(ae[de],L,H,G)}function Bp(M,L,H,G){const{opaque:P,transmissive:ae,transparent:de}=M;g.setupLightsView(H),ee===!0&&ve.setGlobalState(T.clippingPlanes,H),G&&_e.viewport(W.copy(G)),P.length>0&&sl(P,L,H),ae.length>0&&sl(ae,L,H),de.length>0&&sl(de,L,H),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Fp(M,L,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[G.id]===void 0&&(g.state.transmissionRenderTarget[G.id]=new gr(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Bs:Ki,minFilter:ar,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ae=g.state.transmissionRenderTarget[G.id],de=G.viewport||W;ae.setSize(de.z*T.transmissionResolutionScale,de.w*T.transmissionResolutionScale);const ge=T.getRenderTarget(),pe=T.getActiveCubeFace(),Ce=T.getActiveMipmapLevel();T.setRenderTarget(ae),T.getClearColor(O),V=T.getClearAlpha(),V<1&&T.setClearColor(16777215,.5),T.clear(),Ve&&re.render(H);const Ue=T.toneMapping;T.toneMapping=Ua;const Me=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),g.setupLightsView(G),ee===!0&&ve.setGlobalState(T.clippingPlanes,G),sl(M,H,G),Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let lt=0,Ct=L.length;lt<Ct;lt++){const wt=L[lt],{object:pt,geometry:Ae,material:At,group:et}=wt;if(At.side===Oi&&pt.layers.test(G.layers)){const Mn=At.side;At.side=Sn,At.needsUpdate=!0,Ip(pt,H,G,Ae,At,et),At.side=Mn,At.needsUpdate=!0,je=!0}}je===!0&&(Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae))}T.setRenderTarget(ge,pe,Ce),T.setClearColor(O,V),Me!==void 0&&(G.viewport=Me),T.toneMapping=Ue}function sl(M,L,H){const G=L.isScene===!0?L.overrideMaterial:null;for(let P=0,ae=M.length;P<ae;P++){const de=M[P],{object:ge,geometry:pe,group:Ce}=de;let Ue=de.material;Ue.allowOverride===!0&&G!==null&&(Ue=G),ge.layers.test(H.layers)&&Ip(ge,L,H,pe,Ue,Ce)}}function Ip(M,L,H,G,P,ae){M.onBeforeRender(T,L,H,G,P,ae),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),P.onBeforeRender(T,L,H,G,M,ae),P.transparent===!0&&P.side===Oi&&P.forceSinglePass===!1?(P.side=Sn,P.needsUpdate=!0,T.renderBufferDirect(H,L,G,P,M,ae),P.side=za,P.needsUpdate=!0,T.renderBufferDirect(H,L,G,P,M,ae),P.side=Oi):T.renderBufferDirect(H,L,G,P,M,ae),M.onAfterRender(T,L,H,G,P,ae)}function ol(M,L,H){L.isScene!==!0&&(L=Qt);const G=Ee.get(M),P=g.state.lights,ae=g.state.shadowsArray,de=P.state.version,ge=k.getParameters(M,P.state,ae,L,H),pe=k.getProgramCacheKey(ge);let Ce=G.programs;G.environment=M.isMeshStandardMaterial?L.environment:null,G.fog=L.fog,G.envMap=(M.isMeshStandardMaterial?S:A).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ce===void 0&&(M.addEventListener("dispose",Le),Ce=new Map,G.programs=Ce);let Ue=Ce.get(pe);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===de)return Gp(M,ge),Ue}else ge.uniforms=k.getUniforms(M),M.onBeforeCompile(ge,T),Ue=k.acquireProgram(ge,pe),Ce.set(pe,Ue),G.uniforms=ge.uniforms;const Me=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=ve.uniform),Gp(M,ge),G.needsLights=mS(M),G.lightsStateVersion=de,G.needsLights&&(Me.ambientLightColor.value=P.state.ambient,Me.lightProbe.value=P.state.probe,Me.directionalLights.value=P.state.directional,Me.directionalLightShadows.value=P.state.directionalShadow,Me.spotLights.value=P.state.spot,Me.spotLightShadows.value=P.state.spotShadow,Me.rectAreaLights.value=P.state.rectArea,Me.ltc_1.value=P.state.rectAreaLTC1,Me.ltc_2.value=P.state.rectAreaLTC2,Me.pointLights.value=P.state.point,Me.pointLightShadows.value=P.state.pointShadow,Me.hemisphereLights.value=P.state.hemi,Me.directionalShadowMap.value=P.state.directionalShadowMap,Me.directionalShadowMatrix.value=P.state.directionalShadowMatrix,Me.spotShadowMap.value=P.state.spotShadowMap,Me.spotLightMatrix.value=P.state.spotLightMatrix,Me.spotLightMap.value=P.state.spotLightMap,Me.pointShadowMap.value=P.state.pointShadowMap,Me.pointShadowMatrix.value=P.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function Hp(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=uc.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function Gp(M,L){const H=Ee.get(M);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.batchingColor=L.batchingColor,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function hS(M,L,H,G,P){L.isScene!==!0&&(L=Qt),Oe.resetTextureUnits();const ae=L.fog,de=G.isMeshStandardMaterial?L.environment:null,ge=y===null?T.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:As,pe=(G.isMeshStandardMaterial?S:A).get(G.envMap||de),Ce=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ue=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Me=!!H.morphAttributes.position,je=!!H.morphAttributes.normal,lt=!!H.morphAttributes.color;let Ct=Ua;G.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Ct=T.toneMapping);const wt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pt=wt!==void 0?wt.length:0,Ae=Ee.get(G),At=g.state.lights;if(ee===!0&&(me===!0||M!==I)){const sn=M===I&&G.id===U;ve.setState(G,M,sn)}let et=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==At.state.version||Ae.outputColorSpace!==ge||P.isBatchedMesh&&Ae.batching===!1||!P.isBatchedMesh&&Ae.batching===!0||P.isBatchedMesh&&Ae.batchingColor===!0&&P.colorTexture===null||P.isBatchedMesh&&Ae.batchingColor===!1&&P.colorTexture!==null||P.isInstancedMesh&&Ae.instancing===!1||!P.isInstancedMesh&&Ae.instancing===!0||P.isSkinnedMesh&&Ae.skinning===!1||!P.isSkinnedMesh&&Ae.skinning===!0||P.isInstancedMesh&&Ae.instancingColor===!0&&P.instanceColor===null||P.isInstancedMesh&&Ae.instancingColor===!1&&P.instanceColor!==null||P.isInstancedMesh&&Ae.instancingMorph===!0&&P.morphTexture===null||P.isInstancedMesh&&Ae.instancingMorph===!1&&P.morphTexture!==null||Ae.envMap!==pe||G.fog===!0&&Ae.fog!==ae||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ve.numPlanes||Ae.numIntersection!==ve.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Ue||Ae.morphTargets!==Me||Ae.morphNormals!==je||Ae.morphColors!==lt||Ae.toneMapping!==Ct||Ae.morphTargetsCount!==pt)&&(et=!0):(et=!0,Ae.__version=G.version);let Mn=Ae.currentProgram;et===!0&&(Mn=ol(G,L,P));let Er=!1,En=!1,Hs=!1;const Rt=Mn.getUniforms(),dn=Ae.uniforms;if(_e.useProgram(Mn.program)&&(Er=!0,En=!0,Hs=!0),G.id!==U&&(U=G.id,En=!0),Er||I!==M){_e.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Rt.setValue(w,"projectionMatrix",M.projectionMatrix),Rt.setValue(w,"viewMatrix",M.matrixWorldInverse);const hn=Rt.map.cameraPosition;hn!==void 0&&hn.setValue(w,ye.setFromMatrixPosition(M.matrixWorld)),xt.logarithmicDepthBuffer&&Rt.setValue(w,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(w,"isOrthographic",M.isOrthographicCamera===!0),I!==M&&(I=M,En=!0,Hs=!0)}if(P.isSkinnedMesh){Rt.setOptional(w,P,"bindMatrix"),Rt.setOptional(w,P,"bindMatrixInverse");const sn=P.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Rt.setValue(w,"boneTexture",sn.boneTexture,Oe))}P.isBatchedMesh&&(Rt.setOptional(w,P,"batchingTexture"),Rt.setValue(w,"batchingTexture",P._matricesTexture,Oe),Rt.setOptional(w,P,"batchingIdTexture"),Rt.setValue(w,"batchingIdTexture",P._indirectTexture,Oe),Rt.setOptional(w,P,"batchingColorTexture"),P._colorsTexture!==null&&Rt.setValue(w,"batchingColorTexture",P._colorsTexture,Oe));const In=H.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&we.update(P,H,Mn),(En||Ae.receiveShadow!==P.receiveShadow)&&(Ae.receiveShadow=P.receiveShadow,Rt.setValue(w,"receiveShadow",P.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(dn.envMap.value=pe,dn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&L.environment!==null&&(dn.envMapIntensity.value=L.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=LR()),En&&(Rt.setValue(w,"toneMappingExposure",T.toneMappingExposure),Ae.needsLights&&pS(dn,Hs),ae&&G.fog===!0&&be.refreshFogUniforms(dn,ae),be.refreshMaterialUniforms(dn,G,ne,J,g.state.transmissionRenderTarget[M.id]),uc.upload(w,Hp(Ae),dn,Oe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(uc.upload(w,Hp(Ae),dn,Oe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(w,"center",P.center),Rt.setValue(w,"modelViewMatrix",P.modelViewMatrix),Rt.setValue(w,"normalMatrix",P.normalMatrix),Rt.setValue(w,"modelMatrix",P.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const sn=G.uniformsGroups;for(let hn=0,vu=sn.length;hn<vu;hn++){const Xa=sn[hn];ue.update(Xa,Mn),ue.bind(Xa,Mn)}}return Mn}function pS(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function mS(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(M,L,H){const G=Ee.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Ee.get(M.texture).__webglTexture=L,Ee.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:H,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){const H=Ee.get(M);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0};const xS=w.createFramebuffer();this.setRenderTarget=function(M,L=0,H=0){y=M,N=L,E=H;let G=!0,P=null,ae=!1,de=!1;if(M){const pe=Ee.get(M);if(pe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(w.FRAMEBUFFER,null),G=!1;else if(pe.__webglFramebuffer===void 0)Oe.setupRenderTarget(M);else if(pe.__hasExternalTextures)Oe.rebindTextures(M,Ee.get(M.texture).__webglTexture,Ee.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Me=M.depthTexture;if(pe.__boundDepthTexture!==Me){if(Me!==null&&Ee.has(Me)&&(M.width!==Me.image.width||M.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(M)}}const Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const Ue=Ee.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[L])?P=Ue[L][H]:P=Ue[L],ae=!0):M.samples>0&&Oe.useMultisampledRTT(M)===!1?P=Ee.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?P=Ue[H]:P=Ue,W.copy(M.viewport),Q.copy(M.scissor),q=M.scissorTest}else W.copy($e).multiplyScalar(ne).floor(),Q.copy(Je).multiplyScalar(ne).floor(),q=nt;if(H!==0&&(P=xS),_e.bindFramebuffer(w.FRAMEBUFFER,P)&&G&&_e.drawBuffers(M,P),_e.viewport(W),_e.scissor(Q),_e.setScissorTest(q),ae){const pe=Ee.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,pe.__webglTexture,H)}else if(de){const pe=L;for(let Ce=0;Ce<M.textures.length;Ce++){const Ue=Ee.get(M.textures[Ce]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Ce,Ue.__webglTexture,H,pe)}}else if(M!==null&&H!==0){const pe=Ee.get(M.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,pe.__webglTexture,H)}U=-1},this.readRenderTargetPixels=function(M,L,H,G,P,ae,de,ge=0){if(!(M&&M.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe){_e.bindFramebuffer(w.FRAMEBUFFER,pe);try{const Ce=M.textures[ge],Ue=Ce.format,Me=Ce.type;if(!xt.textureFormatReadable(Ue)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Me)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-G&&H>=0&&H<=M.height-P&&(M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),w.readPixels(L,H,G,P,Ne.convert(Ue),Ne.convert(Me),ae))}finally{const Ce=y!==null?Ee.get(y).__webglFramebuffer:null;_e.bindFramebuffer(w.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(M,L,H,G,P,ae,de,ge=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ee.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe)if(L>=0&&L<=M.width-G&&H>=0&&H<=M.height-P){_e.bindFramebuffer(w.FRAMEBUFFER,pe);const Ce=M.textures[ge],Ue=Ce.format,Me=Ce.type;if(!xt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,je),w.bufferData(w.PIXEL_PACK_BUFFER,ae.byteLength,w.STREAM_READ),M.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),w.readPixels(L,H,G,P,Ne.convert(Ue),Ne.convert(Me),0);const lt=y!==null?Ee.get(y).__webglFramebuffer:null;_e.bindFramebuffer(w.FRAMEBUFFER,lt);const Ct=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await d1(w,Ct,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,je),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ae),w.deleteBuffer(je),w.deleteSync(Ct),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,H=0){const G=Math.pow(2,-H),P=Math.floor(M.image.width*G),ae=Math.floor(M.image.height*G),de=L!==null?L.x:0,ge=L!==null?L.y:0;Oe.setTexture2D(M,0),w.copyTexSubImage2D(w.TEXTURE_2D,H,0,0,de,ge,P,ae),_e.unbindTexture()};const gS=w.createFramebuffer(),_S=w.createFramebuffer();this.copyTextureToTexture=function(M,L,H=null,G=null,P=0,ae=null){ae===null&&(P!==0?(Go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=P,P=0):ae=0);let de,ge,pe,Ce,Ue,Me,je,lt,Ct;const wt=M.isCompressedTexture?M.mipmaps[ae]:M.image;if(H!==null)de=H.max.x-H.min.x,ge=H.max.y-H.min.y,pe=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,Ue=H.min.y,Me=H.isBox3?H.min.z:0;else{const In=Math.pow(2,-P);de=Math.floor(wt.width*In),ge=Math.floor(wt.height*In),M.isDataArrayTexture?pe=wt.depth:M.isData3DTexture?pe=Math.floor(wt.depth*In):pe=1,Ce=0,Ue=0,Me=0}G!==null?(je=G.x,lt=G.y,Ct=G.z):(je=0,lt=0,Ct=0);const pt=Ne.convert(L.format),Ae=Ne.convert(L.type);let At;L.isData3DTexture?(Oe.setTexture3D(L,0),At=w.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Oe.setTexture2DArray(L,0),At=w.TEXTURE_2D_ARRAY):(Oe.setTexture2D(L,0),At=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const et=w.getParameter(w.UNPACK_ROW_LENGTH),Mn=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Er=w.getParameter(w.UNPACK_SKIP_PIXELS),En=w.getParameter(w.UNPACK_SKIP_ROWS),Hs=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,wt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,wt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ce),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ue),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Me);const Rt=M.isDataArrayTexture||M.isData3DTexture,dn=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){const In=Ee.get(M),sn=Ee.get(L),hn=Ee.get(In.__renderTarget),vu=Ee.get(sn.__renderTarget);_e.bindFramebuffer(w.READ_FRAMEBUFFER,hn.__webglFramebuffer),_e.bindFramebuffer(w.DRAW_FRAMEBUFFER,vu.__webglFramebuffer);for(let Xa=0;Xa<pe;Xa++)Rt&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.get(M).__webglTexture,P,Me+Xa),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ee.get(L).__webglTexture,ae,Ct+Xa)),w.blitFramebuffer(Ce,Ue,de,ge,je,lt,de,ge,w.DEPTH_BUFFER_BIT,w.NEAREST);_e.bindFramebuffer(w.READ_FRAMEBUFFER,null),_e.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(P!==0||M.isRenderTargetTexture||Ee.has(M)){const In=Ee.get(M),sn=Ee.get(L);_e.bindFramebuffer(w.READ_FRAMEBUFFER,gS),_e.bindFramebuffer(w.DRAW_FRAMEBUFFER,_S);for(let hn=0;hn<pe;hn++)Rt?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,In.__webglTexture,P,Me+hn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,In.__webglTexture,P),dn?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,sn.__webglTexture,ae,Ct+hn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,sn.__webglTexture,ae),P!==0?w.blitFramebuffer(Ce,Ue,de,ge,je,lt,de,ge,w.COLOR_BUFFER_BIT,w.NEAREST):dn?w.copyTexSubImage3D(At,ae,je,lt,Ct+hn,Ce,Ue,de,ge):w.copyTexSubImage2D(At,ae,je,lt,Ce,Ue,de,ge);_e.bindFramebuffer(w.READ_FRAMEBUFFER,null),_e.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else dn?M.isDataTexture||M.isData3DTexture?w.texSubImage3D(At,ae,je,lt,Ct,de,ge,pe,pt,Ae,wt.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(At,ae,je,lt,Ct,de,ge,pe,pt,wt.data):w.texSubImage3D(At,ae,je,lt,Ct,de,ge,pe,pt,Ae,wt):M.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ae,je,lt,de,ge,pt,Ae,wt.data):M.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ae,je,lt,wt.width,wt.height,pt,wt.data):w.texSubImage2D(w.TEXTURE_2D,ae,je,lt,de,ge,pt,Ae,wt);w.pixelStorei(w.UNPACK_ROW_LENGTH,et),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Mn),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Er),w.pixelStorei(w.UNPACK_SKIP_ROWS,En),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Hs),ae===0&&L.generateMipmaps&&w.generateMipmap(At),_e.unbindTexture()},this.initRenderTarget=function(M){Ee.get(M).__webglFramebuffer===void 0&&Oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){N=0,E=0,y=null,_e.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}function PR(){const t=fe.useRef(null);return fe.useEffect(()=>{const e=t.current;if(!e)return;const n=new I1,i=new qn(75,window.innerWidth/window.innerHeight,.1,1e3),a=new OR({alpha:!0});a.setSize(window.innerWidth,window.innerHeight),e.appendChild(a.domElement),i.position.z=5;const r=()=>{requestAnimationFrame(r),a.render(n,i)};r();const s=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s),e.contains(a.domElement)&&e.removeChild(a.domElement),a.dispose()}},[]),z.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full -z-10"})}function zR(){return z.jsxs("section",{className:"px-6 md:px-10 py-20 text-white max-w-6xl mx-auto",children:[z.jsxs("div",{className:"text-center mb-16",children:[z.jsx("h1",{className:"text-5xl font-bold text-yellow-300 mb-4",children:"Siddartha Model High School"}),z.jsx("p",{className:"opacity-90 text-lg max-w-3xl mx-auto",children:"Quality education, experienced teachers, modern classrooms, and a safe learning environment for every child."})]}),z.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[z.jsxs("div",{className:"bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-lg",children:[z.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Experienced Faculty"}),z.jsx("p",{className:"opacity-80",children:"Highly qualified teachers guiding students for a better future."})]}),z.jsxs("div",{className:"bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-lg",children:[z.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Modern Facilities"}),z.jsx("p",{className:"opacity-80",children:"Smart classrooms, labs, sports, and child-friendly campus."})]}),z.jsxs("div",{className:"bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-lg",children:[z.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Holistic Learning"}),z.jsx("p",{className:"opacity-80",children:"Focus on academics, activities, discipline, and values."})]})]})]})}function BR(){const t=[{cls:"Nursery to U.K.G",t1:"₹9,000",t2:"₹9,000",t3:"₹9,000",total:"₹27,000"},{cls:"1st to 5th Class",t1:"₹10,000",t2:"₹9,000",t3:"₹9,000",total:"₹28,000"},{cls:"6th to 7th Class",t1:"₹10,000",t2:"₹10,000",t3:"₹10,000",total:"₹30,000"},{cls:"8th to 9th Class",t1:"₹10,500",t2:"₹10,000",t3:"₹10,000",total:"₹30,500"},{cls:"10th Class",t1:"₹13,000",t2:"₹13,000",t3:"₹13,000",total:"₹39,000"}],e=[{zone:"Zone A (0–3 km)",bus:"₹900 / month"},{zone:"Zone B (3–6 km)",bus:"₹1,100 / month"},{zone:"Zone C (6–10 km)",bus:"₹1,300 / month"}];return z.jsxs("div",{className:"px-6 md:px-12 py-10 text-white",children:[z.jsx("h1",{className:"text-4xl font-bold text-yellow-300 mb-6",children:"Fee Structure"}),z.jsxs("div",{className:"bg-white/10 p-6 border border-white/20 rounded-xl mb-10 backdrop-blur-lg",children:[z.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Tuition Fees"}),z.jsx("div",{className:"overflow-x-auto",children:z.jsxs("table",{className:"min-w-full text-left",children:[z.jsx("thead",{children:z.jsxs("tr",{className:"border-b border-white/20",children:[z.jsx("th",{className:"p-3",children:"Class"}),z.jsx("th",{className:"p-3",children:"Term 1"}),z.jsx("th",{className:"p-3",children:"Term 2"}),z.jsx("th",{className:"p-3",children:"Term 3"}),z.jsx("th",{className:"p-3",children:"Total"})]})}),z.jsx("tbody",{children:t.map(n=>z.jsxs("tr",{className:"border-b border-white/10 hover:bg-white/5",children:[z.jsx("td",{className:"p-3",children:n.cls}),z.jsx("td",{className:"p-3",children:n.t1}),z.jsx("td",{className:"p-3",children:n.t2}),z.jsx("td",{className:"p-3",children:n.t3}),z.jsx("td",{className:"p-3 text-yellow-300 font-semibold",children:n.total})]},n.cls))})]})})]}),z.jsxs("div",{className:"bg-white/10 p-6 border border-white/20 rounded-xl mb-10 backdrop-blur-lg",children:[z.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Transport Fees"}),z.jsx("div",{className:"grid md:grid-cols-3 gap-4",children:e.map(n=>z.jsxs("div",{className:"bg-white/10 p-4 border border-white/10 rounded-xl",children:[z.jsx("p",{className:"font-semibold",children:n.zone}),z.jsx("p",{className:"text-yellow-300",children:n.bus})]},n.zone))})]}),z.jsxs("div",{className:"bg-white/10 p-6 border border-white/20 rounded-xl backdrop-blur-lg",children:[z.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Notes"}),z.jsxs("ul",{className:"list-disc pl-5 opacity-80 space-y-2",children:[z.jsx("li",{children:"UPI / Net Banking / Cheque accepted."}),z.jsx("li",{children:"Late fee ₹50 per week."}),z.jsx("li",{children:"Transport availability depends on route."})]})]})]})}function FR(){const t=["Collect the admission form from the office or download online.","Fill the form and attach recent passport-size photos.","Submit birth certificate, address proof, and previous report card (if applicable).","Attend interaction/assessment with the academic team.","Pay admission + first term fee to confirm the seat."],e=["Birth Certificate (Mandatory)","Aadhaar Card (Student & Parent)","Address Proof","Transfer Certificate (for Classes II and above)","Recent Passport Photos (3)"];return z.jsxs("section",{className:"px-6 md:px-10 py-16 max-w-6xl mx-auto",children:[z.jsx("h1",{className:"text-4xl font-bold mb-6",children:"Admissions – 2025–26"}),z.jsx("p",{className:"opacity-80 mb-10 max-w-3xl",children:"We follow a transparent, student-first admission process. Seats are allotted on a first-come-first-served basis subject to eligibility."}),z.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mb-12",children:[z.jsxs("div",{className:"bg-white/10 rounded-2xl border border-white/20 backdrop-blur-lg p-6",children:[z.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Admission Steps"}),z.jsx("ol",{className:"list-decimal pl-5 space-y-2 opacity-90",children:t.map(n=>z.jsx("li",{children:n},n))})]}),z.jsxs("div",{className:"bg-white/10 rounded-2xl border border-white/20 backdrop-blur-lg p-6",children:[z.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Required Documents"}),z.jsx("ul",{className:"list-disc pl-5 space-y-2 opacity-90",children:e.map(n=>z.jsx("li",{children:n},n))})]})]}),z.jsxs("div",{className:"bg-white/10 rounded-2xl border border-white/20 backdrop-blur-lg p-6",children:[z.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Admission Enquiry"}),z.jsxs("form",{className:"grid md:grid-cols-2 gap-4",children:[z.jsx("input",{className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3",placeholder:"Student Name"}),z.jsx("input",{className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3",placeholder:"Parent Mobile"}),z.jsx("input",{className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3",placeholder:"Applying For Class"}),z.jsx("input",{className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3",placeholder:"Branch Preference"}),z.jsx("textarea",{className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3 md:col-span-2",rows:"4",placeholder:"Message / Questions"}),z.jsx("button",{type:"button",className:"bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition w-max",children:"Submit Enquiry"})]})]})]})}function IR(){const t=["https://images.unsplash.com/photo-1509062522246-3755977927d7","https://images.unsplash.com/photo-1523050854058-8df90110c9f1","https://images.unsplash.com/photo-1531219432768-9f540ce91ef3","https://images.unsplash.com/photo-1488521787991-ed7bbaae773c","https://images.unsplash.com/photo-1500534623283-312aade485b7","https://images.unsplash.com/photo-1535909339361-9b0a5749a1c9"];return z.jsxs("section",{className:"px-6 md:px-10 py-16 text-white max-w-7xl mx-auto",children:[z.jsx("h1",{className:"text-4xl font-bold mb-10 text-yellow-300",children:"School Gallery"}),z.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 gap-6",children:t.map((e,n)=>z.jsx("div",{className:"relative group rounded-xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg hover:scale-105 transition-transform",children:z.jsx("img",{src:e,className:"w-full h-56 object-cover group-hover:opacity-80 transition",alt:"Gallery"})},n))})]})}function HR(){return z.jsxs("section",{className:"px-6 md:px-10 py-16 max-w-6xl mx-auto text-white",children:[z.jsx("h1",{className:"text-4xl font-bold mb-6",children:"Contact Us"}),z.jsxs("div",{className:"grid md:grid-cols-2 gap-10",children:[z.jsxs("div",{className:"bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-lg",children:[z.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"School Address"}),z.jsx("p",{className:"opacity-80",children:"123 Cartoon Lane"}),z.jsx("p",{className:"opacity-80",children:"Dream City, India"}),z.jsx("h2",{className:"text-2xl font-semibold mt-6 mb-2",children:"Phone"}),z.jsx("p",{className:"opacity-80",children:"+91 98765 43210"}),z.jsx("h2",{className:"text-2xl font-semibold mt-6 mb-2",children:"Email"}),z.jsx("p",{className:"opacity-80",children:"info@siddarthmodel.edu"})]}),z.jsxs("form",{className:"bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-lg grid gap-4",children:[z.jsx("input",{className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3",placeholder:"Your Name"}),z.jsx("input",{className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3",placeholder:"Email Address"}),z.jsx("input",{className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3",placeholder:"Mobile Number"}),z.jsx("textarea",{className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3",rows:"4",placeholder:"Message"}),z.jsx("button",{type:"button",className:"bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition",children:"Send Message"})]})]})]})}function GR(){return z.jsx("section",{className:"px-6 md:px-10 py-20 text-white flex justify-center",children:z.jsxs("div",{className:"bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md",children:[z.jsx("h1",{className:"text-3xl font-bold text-center text-yellow-300 mb-6",children:"Admin Login"}),z.jsxs("form",{className:"grid gap-5",children:[z.jsxs("div",{children:[z.jsx("label",{className:"block mb-2 opacity-80",children:"Email"}),z.jsx("input",{type:"email",className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3 w-full",placeholder:"admin@example.com"})]}),z.jsxs("div",{children:[z.jsx("label",{className:"block mb-2 opacity-80",children:"Password"}),z.jsx("input",{type:"password",className:"bg-white/10 border border-white/20 rounded-lg px-4 py-3 w-full",placeholder:"Enter password"})]}),z.jsx("button",{type:"button",className:"bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-300 transition",onClick:()=>alert("Login clicked"),children:"Login"})]})]})})}function VR(){return z.jsxs("section",{className:"px-6 md:px-10 py-16 text-white",children:[z.jsx("h1",{className:"text-4xl font-bold mb-6",children:"Admin Dashboard"}),z.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[z.jsxs("div",{className:"bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-lg",children:[z.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Total Students"}),z.jsx("p",{className:"text-3xl font-bold text-yellow-300",children:"512"})]}),z.jsxs("div",{className:"bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-lg",children:[z.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Teachers"}),z.jsx("p",{className:"text-3xl font-bold text-yellow-300",children:"42"})]}),z.jsxs("div",{className:"bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-lg",children:[z.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Branches"}),z.jsx("p",{className:"text-3xl font-bold text-yellow-300",children:"3"})]})]}),z.jsxs("div",{className:"mt-10 bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-lg",children:[z.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Recent Activity"}),z.jsxs("ul",{className:"space-y-2 opacity-80",children:[z.jsx("li",{children:"New Admission request submitted."}),z.jsx("li",{children:"Fee receipt uploaded for Class 8."}),z.jsx("li",{children:"Exam schedule updated for Class 10."})]})]})]})}function XR(){const t=[{name:"Mr. K. Indra Reddy",role:"Chairman",img:"/staff/indra.jpg"},{name:"Mrs. K. Naga Laxmi",role:"Vice Chairperson",img:"/staff/nagalaxmi.jpg"},{name:"S. Nagarjuna Reddy",role:"Director",img:"/staff/nagarjuna.jpg"}];return z.jsxs("section",{className:"min-h-screen px-10 py-20 text-white bg-gradient-to-b from-blue-900 to-blue-950 relative overflow-hidden",children:[z.jsx("div",{className:"absolute top-10 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"}),z.jsx("div",{className:"absolute bottom-20 right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"}),z.jsx("h2",{className:"text-5xl font-bold mb-16 text-center drop-shadow-lg",children:"Faculty & Staff"}),z.jsx("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10",children:t.map(e=>z.jsxs("div",{className:`group bg-white/10 hover:bg-white/20 transition border border-white/20 p-8 rounded-2xl backdrop-blur-xl shadow-2xl \r
                       hover:-translate-y-2 hover:shadow-blue-500/40 hover:scale-[1.03] duration-300`,children:[z.jsx("img",{src:e.img,alt:e.name,className:`w-36 h-36 rounded-full mx-auto mb-4 border-4 border-white/30 object-cover \r
                         group-hover:scale-110 transition duration-300`}),z.jsx("h3",{className:"text-2xl font-semibold text-center",children:e.name}),z.jsx("p",{className:"text-center opacity-80",children:e.role})]},e.name))})]})}function kR(){return z.jsxs("div",{className:"relative z-10 min-h-screen",children:[z.jsx(PR,{}),z.jsx(y3,{}),z.jsx("div",{className:"pt-24",children:z.jsxs(l3,{children:[z.jsx(Di,{path:"/",element:z.jsx(zR,{})}),z.jsx(Di,{path:"/fees",element:z.jsx(BR,{})}),z.jsx(Di,{path:"/admissions",element:z.jsx(FR,{})}),z.jsx(Di,{path:"/gallery",element:z.jsx(IR,{})}),z.jsx(Di,{path:"/contact",element:z.jsx(HR,{})}),z.jsx(Di,{path:"/login",element:z.jsx(GR,{})}),z.jsx(Di,{path:"/dashboard",element:z.jsx(VR,{})}),z.jsx(Di,{path:"/faculty",element:z.jsx(XR,{})})]})})]})}_M.createRoot(document.getElementById("root")).render(z.jsx(wx.StrictMode,{children:z.jsx(x3,{children:z.jsx(kR,{})})}));
