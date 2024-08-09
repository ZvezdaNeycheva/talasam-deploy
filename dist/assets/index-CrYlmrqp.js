function Yc(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Gc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ka={exports:{}},cl={},Sa={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr=Symbol.for("react.element"),Xc=Symbol.for("react.portal"),Zc=Symbol.for("react.fragment"),Jc=Symbol.for("react.strict_mode"),bc=Symbol.for("react.profiler"),ef=Symbol.for("react.provider"),tf=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),lf=Symbol.for("react.memo"),of=Symbol.for("react.lazy"),Jo=Symbol.iterator;function uf(e){return e===null||typeof e!="object"?null:(e=Jo&&e[Jo]||e["@@iterator"],typeof e=="function"?e:null)}var Ea={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ca=Object.assign,_a={};function sn(e,t,n){this.props=e,this.context=t,this.refs=_a,this.updater=n||Ea}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ia(){}Ia.prototype=sn.prototype;function to(e,t,n){this.props=e,this.context=t,this.refs=_a,this.updater=n||Ea}var no=to.prototype=new Ia;no.constructor=to;Ca(no,sn.prototype);no.isPureReactComponent=!0;var bo=Array.isArray,Ta=Object.prototype.hasOwnProperty,ro={current:null},Na={key:!0,ref:!0,__self:!0,__source:!0};function za(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Ta.call(t,r)&&!Na.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:tr,type:e,key:i,ref:o,props:l,_owner:ro.current}}function af(e,t){return{$$typeof:tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function lo(e){return typeof e=="object"&&e!==null&&e.$$typeof===tr}function sf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var eu=/\/+/g;function Ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?sf(""+e.key):t.toString(36)}function Ir(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case tr:case Xc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Ll(o,0):r,bo(l)?(n="",e!=null&&(n=e.replace(eu,"$&/")+"/"),Ir(l,t,n,"",function(c){return c})):l!=null&&(lo(l)&&(l=af(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(eu,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",bo(e))for(var u=0;u<e.length;u++){i=e[u];var a=r+Ll(i,u);o+=Ir(i,t,n,a,l)}else if(a=uf(e),typeof a=="function")for(e=a.call(e),u=0;!(i=e.next()).done;)i=i.value,a=r+Ll(i,u++),o+=Ir(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ar(e,t,n){if(e==null)return e;var r=[],l=0;return Ir(e,r,"","",function(i){return t.call(n,i,l++)}),r}function cf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},Tr={transition:null},ff={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Tr,ReactCurrentOwner:ro};function Ra(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:ar,forEach:function(e,t,n){ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ar(e,function(){t++}),t},toArray:function(e){return ar(e,function(t){return t})||[]},only:function(e){if(!lo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=sn;R.Fragment=Zc;R.Profiler=bc;R.PureComponent=to;R.StrictMode=Jc;R.Suspense=rf;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ff;R.act=Ra;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ca({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=ro.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Ta.call(t,a)&&!Na.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:tr,type:e.type,key:l,ref:i,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:tf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ef,_context:e},e.Consumer=e};R.createElement=za;R.createFactory=function(e){var t=za.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:nf,render:e}};R.isValidElement=lo;R.lazy=function(e){return{$$typeof:of,_payload:{_status:-1,_result:e},_init:cf}};R.memo=function(e,t){return{$$typeof:lf,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Tr.transition;Tr.transition={};try{e()}finally{Tr.transition=t}};R.unstable_act=Ra;R.useCallback=function(e,t){return se.current.useCallback(e,t)};R.useContext=function(e){return se.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return se.current.useDeferredValue(e)};R.useEffect=function(e,t){return se.current.useEffect(e,t)};R.useId=function(){return se.current.useId()};R.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return se.current.useMemo(e,t)};R.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};R.useRef=function(e){return se.current.useRef(e)};R.useState=function(e){return se.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return se.current.useTransition()};R.version="18.3.1";Sa.exports=R;var C=Sa.exports;const La=Gc(C),df=Yc({__proto__:null,default:La},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf=C,xf=Symbol.for("react.element"),hf=Symbol.for("react.fragment"),gf=Object.prototype.hasOwnProperty,mf=pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vf={key:!0,ref:!0,__self:!0,__source:!0};function Oa(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)gf.call(t,r)&&!vf.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:xf,type:e,key:i,ref:o,props:l,_owner:mf.current}}cl.Fragment=hf;cl.jsx=Oa;cl.jsxs=Oa;ka.exports=cl;var F=ka.exports,oi={},Fa={exports:{}},Pe={},qa={exports:{}},ja={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,N){var z=E.length;E.push(N);e:for(;0<z;){var H=z-1>>>1,Z=E[H];if(0<l(Z,N))E[H]=N,E[z]=Z,z=H;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var N=E[0],z=E.pop();if(z!==N){E[0]=z;e:for(var H=0,Z=E.length,or=Z>>>1;H<or;){var vt=2*(H+1)-1,Rl=E[vt],yt=vt+1,ur=E[yt];if(0>l(Rl,z))yt<Z&&0>l(ur,Rl)?(E[H]=ur,E[yt]=z,H=yt):(E[H]=Rl,E[vt]=z,H=vt);else if(yt<Z&&0>l(ur,z))E[H]=ur,E[yt]=z,H=yt;else break e}}return N}function l(E,N){var z=E.sortIndex-N.sortIndex;return z!==0?z:E.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();e.unstable_now=function(){return o.now()-u}}var a=[],c=[],p=1,x=null,h=3,m=!1,v=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(E){for(var N=n(c);N!==null;){if(N.callback===null)r(c);else if(N.startTime<=E)r(c),N.sortIndex=N.expirationTime,t(a,N);else break;N=n(c)}}function g(E){if(P=!1,d(E),!v)if(n(a)!==null)v=!0,Nl(w);else{var N=n(c);N!==null&&zl(g,N.startTime-E)}}function w(E,N){v=!1,P&&(P=!1,f(T),T=-1),m=!0;var z=h;try{for(d(N),x=n(a);x!==null&&(!(x.expirationTime>N)||E&&!Te());){var H=x.callback;if(typeof H=="function"){x.callback=null,h=x.priorityLevel;var Z=H(x.expirationTime<=N);N=e.unstable_now(),typeof Z=="function"?x.callback=Z:x===n(a)&&r(a),d(N)}else r(a);x=n(a)}if(x!==null)var or=!0;else{var vt=n(c);vt!==null&&zl(g,vt.startTime-N),or=!1}return or}finally{x=null,h=z,m=!1}}var _=!1,I=null,T=-1,V=5,L=-1;function Te(){return!(e.unstable_now()-L<V)}function pn(){if(I!==null){var E=e.unstable_now();L=E;var N=!0;try{N=I(!0,E)}finally{N?xn():(_=!1,I=null)}}else _=!1}var xn;if(typeof s=="function")xn=function(){s(pn)};else if(typeof MessageChannel<"u"){var Zo=new MessageChannel,Kc=Zo.port2;Zo.port1.onmessage=pn,xn=function(){Kc.postMessage(null)}}else xn=function(){k(pn,0)};function Nl(E){I=E,_||(_=!0,xn())}function zl(E,N){T=k(function(){E(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Nl(w))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var N=3;break;default:N=h}var z=h;h=N;try{return E()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var z=h;h=E;try{return N()}finally{h=z}},e.unstable_scheduleCallback=function(E,N,z){var H=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?H+z:H):z=H,E){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,E={id:p++,callback:N,priorityLevel:E,startTime:z,expirationTime:Z,sortIndex:-1},z>H?(E.sortIndex=z,t(c,E),n(a)===null&&E===n(c)&&(P?(f(T),T=-1):P=!0,zl(g,z-H))):(E.sortIndex=Z,t(a,E),v||m||(v=!0,Nl(w))),E},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(E){var N=h;return function(){var z=h;h=N;try{return E.apply(this,arguments)}finally{h=z}}}})(ja);qa.exports=ja;var yf=qa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf=C,ye=yf;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ma=new Set,jn={};function Ot(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(jn[e]=t,e=0;e<t.length;e++)Ma.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ui=Object.prototype.hasOwnProperty,wf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tu={},nu={};function kf(e){return ui.call(nu,e)?!0:ui.call(tu,e)?!1:wf.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function Sf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ef(e,t,n,r){if(t===null||typeof t>"u"||Sf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var io=/[\-:]([a-z])/g;function oo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(io,oo);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(io,oo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(io,oo);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function uo(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ef(t,n,l,r)&&(n=null),r||l===null?kf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xe=Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),ao=Symbol.for("react.strict_mode"),ai=Symbol.for("react.profiler"),Da=Symbol.for("react.provider"),Ua=Symbol.for("react.context"),so=Symbol.for("react.forward_ref"),si=Symbol.for("react.suspense"),ci=Symbol.for("react.suspense_list"),co=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),$a=Symbol.for("react.offscreen"),ru=Symbol.iterator;function hn(e){return e===null||typeof e!="object"?null:(e=ru&&e[ru]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,Ol;function Sn(e){if(Ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var Fl=!1;function ql(e,t){if(!e||Fl)return"";Fl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,u=i.length-1;1<=o&&0<=u&&l[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(l[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||l[o]!==i[u]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=u);break}}}finally{Fl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sn(e):""}function Cf(e){switch(e.tag){case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 2:case 15:return e=ql(e.type,!1),e;case 11:return e=ql(e.type.render,!1),e;case 1:return e=ql(e.type,!0),e;default:return""}}function fi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Mt:return"Portal";case ai:return"Profiler";case ao:return"StrictMode";case si:return"Suspense";case ci:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ua:return(e.displayName||"Context")+".Consumer";case Da:return(e._context.displayName||"Context")+".Provider";case so:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case co:return t=e.displayName||null,t!==null?t:fi(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return fi(e(t))}catch{}}return null}function _f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fi(t);case 8:return t===ao?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ba(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function If(e){var t=Ba(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function cr(e){e._valueTracker||(e._valueTracker=If(e))}function Aa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ba(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ur(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function di(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Wa(e,t){t=t.checked,t!=null&&uo(e,"checked",t,!1)}function pi(e,t){Wa(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xi(e,t.type,n):t.hasOwnProperty("defaultValue")&&xi(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function iu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xi(e,t,n){(t!=="number"||Ur(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var En=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function hi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ou(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(En(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function Va(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function uu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ha(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ha(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fr,Qa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tf=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Tf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function Ka(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function Ya(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ka(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Nf=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mi(e,t){if(t){if(Nf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function vi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pi=null,Xt=null,Zt=null;function au(e){if(e=lr(e)){if(typeof Pi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=hl(t),Pi(e.stateNode,e.type,t))}}function Ga(e){Xt?Zt?Zt.push(e):Zt=[e]:Xt=e}function Xa(){if(Xt){var e=Xt,t=Zt;if(Zt=Xt=null,au(e),t)for(e=0;e<t.length;e++)au(t[e])}}function Za(e,t){return e(t)}function Ja(){}var jl=!1;function ba(e,t,n){if(jl)return e(t,n);jl=!0;try{return Za(e,t,n)}finally{jl=!1,(Xt!==null||Zt!==null)&&(Ja(),Xa())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var wi=!1;if(Qe)try{var gn={};Object.defineProperty(gn,"passive",{get:function(){wi=!0}}),window.addEventListener("test",gn,gn),window.removeEventListener("test",gn,gn)}catch{wi=!1}function zf(e,t,n,r,l,i,o,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var Tn=!1,$r=null,Br=!1,ki=null,Rf={onError:function(e){Tn=!0,$r=e}};function Lf(e,t,n,r,l,i,o,u,a){Tn=!1,$r=null,zf.apply(Rf,arguments)}function Of(e,t,n,r,l,i,o,u,a){if(Lf.apply(this,arguments),Tn){if(Tn){var c=$r;Tn=!1,$r=null}else throw Error(y(198));Br||(Br=!0,ki=c)}}function Ft(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function es(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function su(e){if(Ft(e)!==e)throw Error(y(188))}function Ff(e){var t=e.alternate;if(!t){if(t=Ft(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return su(l),e;if(i===r)return su(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,u=l.child;u;){if(u===n){o=!0,n=l,r=i;break}if(u===r){o=!0,r=l,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=l;break}if(u===r){o=!0,r=i,n=l;break}u=u.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function ts(e){return e=Ff(e),e!==null?ns(e):null}function ns(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ns(e);if(t!==null)return t;e=e.sibling}return null}var rs=ye.unstable_scheduleCallback,cu=ye.unstable_cancelCallback,qf=ye.unstable_shouldYield,jf=ye.unstable_requestPaint,Q=ye.unstable_now,Mf=ye.unstable_getCurrentPriorityLevel,po=ye.unstable_ImmediatePriority,ls=ye.unstable_UserBlockingPriority,Ar=ye.unstable_NormalPriority,Df=ye.unstable_LowPriority,is=ye.unstable_IdlePriority,fl=null,Ue=null;function Uf(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(fl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Af,$f=Math.log,Bf=Math.LN2;function Af(e){return e>>>=0,e===0?32:31-($f(e)/Bf|0)|0}var dr=64,pr=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var u=o&~l;u!==0?r=Cn(u):(i&=o,i!==0&&(r=Cn(i)))}else o=n&~l,o!==0?r=Cn(o):i!==0&&(r=Cn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),l=1<<n,r|=e[n],t&=~l;return r}function Wf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Oe(i),u=1<<o,a=l[o];a===-1?(!(u&n)||u&r)&&(l[o]=Wf(u,t)):a<=t&&(e.expiredLanes|=u),i&=~u}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function os(){var e=dr;return dr<<=1,!(dr&4194240)&&(dr=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Hf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Oe(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function xo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var q=0;function us(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var as,ho,ss,cs,fs,Ei=!1,xr=[],it=null,ot=null,ut=null,Un=new Map,$n=new Map,et=[],Qf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":ut=null;break;case"pointerover":case"pointerout":Un.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$n.delete(t.pointerId)}}function mn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=lr(t),t!==null&&ho(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Kf(e,t,n,r,l){switch(t){case"focusin":return it=mn(it,e,t,n,r,l),!0;case"dragenter":return ot=mn(ot,e,t,n,r,l),!0;case"mouseover":return ut=mn(ut,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Un.set(i,mn(Un.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,$n.set(i,mn($n.get(i)||null,e,t,n,r,l)),!0}return!1}function ds(e){var t=kt(e.target);if(t!==null){var n=Ft(t);if(n!==null){if(t=n.tag,t===13){if(t=es(n),t!==null){e.blockedOn=t,fs(e.priority,function(){ss(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Nr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yi=r,n.target.dispatchEvent(r),yi=null}else return t=lr(n),t!==null&&ho(t),e.blockedOn=n,!1;t.shift()}return!0}function du(e,t,n){Nr(e)&&n.delete(t)}function Yf(){Ei=!1,it!==null&&Nr(it)&&(it=null),ot!==null&&Nr(ot)&&(ot=null),ut!==null&&Nr(ut)&&(ut=null),Un.forEach(du),$n.forEach(du)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ei||(Ei=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,Yf)))}function Bn(e){function t(l){return vn(l,e)}if(0<xr.length){vn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&vn(it,e),ot!==null&&vn(ot,e),ut!==null&&vn(ut,e),Un.forEach(t),$n.forEach(t),n=0;n<et.length;n++)r=et[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)ds(n),n.blockedOn===null&&et.shift()}var Jt=Xe.ReactCurrentBatchConfig,Vr=!0;function Gf(e,t,n,r){var l=q,i=Jt.transition;Jt.transition=null;try{q=1,go(e,t,n,r)}finally{q=l,Jt.transition=i}}function Xf(e,t,n,r){var l=q,i=Jt.transition;Jt.transition=null;try{q=4,go(e,t,n,r)}finally{q=l,Jt.transition=i}}function go(e,t,n,r){if(Vr){var l=Ci(e,t,n,r);if(l===null)Kl(e,t,r,Hr,n),fu(e,r);else if(Kf(l,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<Qf.indexOf(e)){for(;l!==null;){var i=lr(l);if(i!==null&&as(i),i=Ci(e,t,n,r),i===null&&Kl(e,t,r,Hr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Kl(e,t,r,null,n)}}var Hr=null;function Ci(e,t,n,r){if(Hr=null,e=fo(r),e=kt(e),e!==null)if(t=Ft(e),t===null)e=null;else if(n=t.tag,n===13){if(e=es(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hr=e,null}function ps(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mf()){case po:return 1;case ls:return 4;case Ar:case Df:return 16;case is:return 536870912;default:return 16}default:return 16}}var nt=null,mo=null,zr=null;function xs(){if(zr)return zr;var e,t=mo,n=t.length,r,l="value"in nt?nt.value:nt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return zr=l.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hr(){return!0}function pu(){return!1}function we(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hr:pu,this.isPropagationStopped=pu,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hr)},persist:function(){},isPersistent:hr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vo=we(cn),rr=A({},cn,{view:0,detail:0}),Zf=we(rr),Dl,Ul,yn,dl=A({},rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yn&&(yn&&e.type==="mousemove"?(Dl=e.screenX-yn.screenX,Ul=e.screenY-yn.screenY):Ul=Dl=0,yn=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Ul}}),xu=we(dl),Jf=A({},dl,{dataTransfer:0}),bf=we(Jf),ed=A({},rr,{relatedTarget:0}),$l=we(ed),td=A({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),nd=we(td),rd=A({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ld=we(rd),id=A({},cn,{data:0}),hu=we(id),od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ud={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ad={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ad[e])?!!t[e]:!1}function yo(){return sd}var cd=A({},rr,{key:function(e){if(e.key){var t=od[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ud[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yo,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fd=we(cd),dd=A({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gu=we(dd),pd=A({},rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yo}),xd=we(pd),hd=A({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gd=we(hd),md=A({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vd=we(md),yd=[9,13,27,32],Po=Qe&&"CompositionEvent"in window,Nn=null;Qe&&"documentMode"in document&&(Nn=document.documentMode);var Pd=Qe&&"TextEvent"in window&&!Nn,hs=Qe&&(!Po||Nn&&8<Nn&&11>=Nn),mu=" ",vu=!1;function gs(e,t){switch(e){case"keyup":return yd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ms(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ut=!1;function wd(e,t){switch(e){case"compositionend":return ms(t);case"keypress":return t.which!==32?null:(vu=!0,mu);case"textInput":return e=t.data,e===mu&&vu?null:e;default:return null}}function kd(e,t){if(Ut)return e==="compositionend"||!Po&&gs(e,t)?(e=xs(),zr=mo=nt=null,Ut=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hs&&t.locale!=="ko"?null:t.data;default:return null}}var Sd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sd[e.type]:t==="textarea"}function vs(e,t,n,r){Ga(r),t=Qr(t,"onChange"),0<t.length&&(n=new vo("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var zn=null,An=null;function Ed(e){Ns(e,0)}function pl(e){var t=At(e);if(Aa(t))return e}function Cd(e,t){if(e==="change")return t}var ys=!1;if(Qe){var Bl;if(Qe){var Al="oninput"in document;if(!Al){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),Al=typeof Pu.oninput=="function"}Bl=Al}else Bl=!1;ys=Bl&&(!document.documentMode||9<document.documentMode)}function wu(){zn&&(zn.detachEvent("onpropertychange",Ps),An=zn=null)}function Ps(e){if(e.propertyName==="value"&&pl(An)){var t=[];vs(t,An,e,fo(e)),ba(Ed,t)}}function _d(e,t,n){e==="focusin"?(wu(),zn=t,An=n,zn.attachEvent("onpropertychange",Ps)):e==="focusout"&&wu()}function Id(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(An)}function Td(e,t){if(e==="click")return pl(t)}function Nd(e,t){if(e==="input"||e==="change")return pl(t)}function zd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:zd;function Wn(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ui.call(t,l)||!qe(e[l],t[l]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Su(e,t){var n=ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ku(n)}}function ws(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ws(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ks(){for(var e=window,t=Ur();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ur(e.document)}return t}function wo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rd(e){var t=ks(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ws(n.ownerDocument.documentElement,n)){if(r!==null&&wo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Su(n,i);var o=Su(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ld=Qe&&"documentMode"in document&&11>=document.documentMode,$t=null,_i=null,Rn=null,Ii=!1;function Eu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ii||$t==null||$t!==Ur(r)||(r=$t,"selectionStart"in r&&wo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rn&&Wn(Rn,r)||(Rn=r,r=Qr(_i,"onSelect"),0<r.length&&(t=new vo("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$t)))}function gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bt={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionend:gr("Transition","TransitionEnd")},Wl={},Ss={};Qe&&(Ss=document.createElement("div").style,"AnimationEvent"in window||(delete Bt.animationend.animation,delete Bt.animationiteration.animation,delete Bt.animationstart.animation),"TransitionEvent"in window||delete Bt.transitionend.transition);function xl(e){if(Wl[e])return Wl[e];if(!Bt[e])return e;var t=Bt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ss)return Wl[e]=t[n];return e}var Es=xl("animationend"),Cs=xl("animationiteration"),_s=xl("animationstart"),Is=xl("transitionend"),Ts=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){Ts.set(e,t),Ot(t,[e])}for(var Vl=0;Vl<Cu.length;Vl++){var Hl=Cu[Vl],Od=Hl.toLowerCase(),Fd=Hl[0].toUpperCase()+Hl.slice(1);ht(Od,"on"+Fd)}ht(Es,"onAnimationEnd");ht(Cs,"onAnimationIteration");ht(_s,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Is,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function _u(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Of(r,t,void 0,e),e.currentTarget=null}function Ns(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var u=r[o],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==i&&l.isPropagationStopped())break e;_u(l,u,c),i=a}else for(o=0;o<r.length;o++){if(u=r[o],a=u.instance,c=u.currentTarget,u=u.listener,a!==i&&l.isPropagationStopped())break e;_u(l,u,c),i=a}}}if(Br)throw e=ki,Br=!1,ki=null,e}function M(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var r=e+"__bubble";n.has(r)||(zs(t,e,2,!1),n.add(r))}function Ql(e,t,n){var r=0;t&&(r|=4),zs(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[mr]){e[mr]=!0,Ma.forEach(function(n){n!=="selectionchange"&&(qd.has(n)||Ql(n,!1,e),Ql(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Ql("selectionchange",!1,t))}}function zs(e,t,n,r){switch(ps(t)){case 1:var l=Gf;break;case 4:l=Xf;break;default:l=go}n=l.bind(null,t,n,e),l=void 0,!wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Kl(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;u!==null;){if(o=kt(u),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}u=u.parentNode}}r=r.return}ba(function(){var c=i,p=fo(n),x=[];e:{var h=Ts.get(e);if(h!==void 0){var m=vo,v=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":m=fd;break;case"focusin":v="focus",m=$l;break;case"focusout":v="blur",m=$l;break;case"beforeblur":case"afterblur":m=$l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=bf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=xd;break;case Es:case Cs:case _s:m=nd;break;case Is:m=gd;break;case"scroll":m=Zf;break;case"wheel":m=vd;break;case"copy":case"cut":case"paste":m=ld;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=gu}var P=(t&4)!==0,k=!P&&e==="scroll",f=P?h!==null?h+"Capture":null:h;P=[];for(var s=c,d;s!==null;){d=s;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Dn(s,f),g!=null&&P.push(Hn(s,g,d)))),k)break;s=s.return}0<P.length&&(h=new m(h,v,null,n,p),x.push({event:h,listeners:P}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==yi&&(v=n.relatedTarget||n.fromElement)&&(kt(v)||v[Ke]))break e;if((m||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?kt(v):null,v!==null&&(k=Ft(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(P=xu,g="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(P=gu,g="onPointerLeave",f="onPointerEnter",s="pointer"),k=m==null?h:At(m),d=v==null?h:At(v),h=new P(g,s+"leave",m,n,p),h.target=k,h.relatedTarget=d,g=null,kt(p)===c&&(P=new P(f,s+"enter",v,n,p),P.target=d,P.relatedTarget=k,g=P),k=g,m&&v)t:{for(P=m,f=v,s=0,d=P;d;d=jt(d))s++;for(d=0,g=f;g;g=jt(g))d++;for(;0<s-d;)P=jt(P),s--;for(;0<d-s;)f=jt(f),d--;for(;s--;){if(P===f||f!==null&&P===f.alternate)break t;P=jt(P),f=jt(f)}P=null}else P=null;m!==null&&Iu(x,h,m,P,!1),v!==null&&k!==null&&Iu(x,k,v,P,!0)}}e:{if(h=c?At(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var w=Cd;else if(yu(h))if(ys)w=Nd;else{w=Id;var _=_d}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=Td);if(w&&(w=w(e,c))){vs(x,w,n,p);break e}_&&_(e,h,c),e==="focusout"&&(_=h._wrapperState)&&_.controlled&&h.type==="number"&&xi(h,"number",h.value)}switch(_=c?At(c):window,e){case"focusin":(yu(_)||_.contentEditable==="true")&&($t=_,_i=c,Rn=null);break;case"focusout":Rn=_i=$t=null;break;case"mousedown":Ii=!0;break;case"contextmenu":case"mouseup":case"dragend":Ii=!1,Eu(x,n,p);break;case"selectionchange":if(Ld)break;case"keydown":case"keyup":Eu(x,n,p)}var I;if(Po)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ut?gs(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(hs&&n.locale!=="ko"&&(Ut||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ut&&(I=xs()):(nt=p,mo="value"in nt?nt.value:nt.textContent,Ut=!0)),_=Qr(c,T),0<_.length&&(T=new hu(T,e,null,n,p),x.push({event:T,listeners:_}),I?T.data=I:(I=ms(n),I!==null&&(T.data=I)))),(I=Pd?wd(e,n):kd(e,n))&&(c=Qr(c,"onBeforeInput"),0<c.length&&(p=new hu("onBeforeInput","beforeinput",null,n,p),x.push({event:p,listeners:c}),p.data=I))}Ns(x,t)})}function Hn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dn(e,n),i!=null&&r.unshift(Hn(e,i,l)),i=Dn(e,t),i!=null&&r.push(Hn(e,i,l))),e=e.return}return r}function jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Iu(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,l?(a=Dn(n,i),a!=null&&o.unshift(Hn(n,a,u))):l||(a=Dn(n,i),a!=null&&o.push(Hn(n,a,u)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var jd=/\r\n?/g,Md=/\u0000|\uFFFD/g;function Tu(e){return(typeof e=="string"?e:""+e).replace(jd,`
`).replace(Md,"")}function vr(e,t,n){if(t=Tu(t),Tu(e)!==t&&n)throw Error(y(425))}function Kr(){}var Ti=null,Ni=null;function zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ri=typeof setTimeout=="function"?setTimeout:void 0,Dd=typeof clearTimeout=="function"?clearTimeout:void 0,Nu=typeof Promise=="function"?Promise:void 0,Ud=typeof queueMicrotask=="function"?queueMicrotask:typeof Nu<"u"?function(e){return Nu.resolve(null).then(e).catch($d)}:Ri;function $d(e){setTimeout(function(){throw e})}function Yl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Bn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var fn=Math.random().toString(36).slice(2),De="__reactFiber$"+fn,Qn="__reactProps$"+fn,Ke="__reactContainer$"+fn,Li="__reactEvents$"+fn,Bd="__reactListeners$"+fn,Ad="__reactHandles$"+fn;function kt(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[De]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zu(e);e!==null;){if(n=e[De])return n;e=zu(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[De]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function At(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function hl(e){return e[Qn]||null}var Oi=[],Wt=-1;function gt(e){return{current:e}}function D(e){0>Wt||(e.current=Oi[Wt],Oi[Wt]=null,Wt--)}function j(e,t){Wt++,Oi[Wt]=e.current,e.current=t}var xt={},oe=gt(xt),pe=gt(!1),Tt=xt;function nn(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function xe(e){return e=e.childContextTypes,e!=null}function Yr(){D(pe),D(oe)}function Ru(e,t,n){if(oe.current!==xt)throw Error(y(168));j(oe,t),j(pe,n)}function Rs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,_f(e)||"Unknown",l));return A({},n,r)}function Gr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Tt=oe.current,j(oe,e),j(pe,pe.current),!0}function Lu(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=Rs(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,D(pe),D(oe),j(oe,e)):D(pe),j(pe,n)}var Ae=null,gl=!1,Gl=!1;function Ls(e){Ae===null?Ae=[e]:Ae.push(e)}function Wd(e){gl=!0,Ls(e)}function mt(){if(!Gl&&Ae!==null){Gl=!0;var e=0,t=q;try{var n=Ae;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ae=null,gl=!1}catch(l){throw Ae!==null&&(Ae=Ae.slice(e+1)),rs(po,mt),l}finally{q=t,Gl=!1}}return null}var Vt=[],Ht=0,Xr=null,Zr=0,ke=[],Se=0,Nt=null,We=1,Ve="";function Pt(e,t){Vt[Ht++]=Zr,Vt[Ht++]=Xr,Xr=e,Zr=t}function Os(e,t,n){ke[Se++]=We,ke[Se++]=Ve,ke[Se++]=Nt,Nt=e;var r=We;e=Ve;var l=32-Oe(r)-1;r&=~(1<<l),n+=1;var i=32-Oe(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,We=1<<32-Oe(t)+l|n<<l|r,Ve=i+e}else We=1<<i|n<<l|r,Ve=e}function ko(e){e.return!==null&&(Pt(e,1),Os(e,1,0))}function So(e){for(;e===Xr;)Xr=Vt[--Ht],Vt[Ht]=null,Zr=Vt[--Ht],Vt[Ht]=null;for(;e===Nt;)Nt=ke[--Se],ke[Se]=null,Ve=ke[--Se],ke[Se]=null,We=ke[--Se],ke[Se]=null}var ve=null,me=null,U=!1,Le=null;function Fs(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ve=e,me=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ve=e,me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Nt!==null?{id:We,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ve=e,me=null,!0):!1;default:return!1}}function Fi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function qi(e){if(U){var t=me;if(t){var n=t;if(!Ou(e,t)){if(Fi(e))throw Error(y(418));t=at(n.nextSibling);var r=ve;t&&Ou(e,t)?Fs(r,n):(e.flags=e.flags&-4097|2,U=!1,ve=e)}}else{if(Fi(e))throw Error(y(418));e.flags=e.flags&-4097|2,U=!1,ve=e}}}function Fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function yr(e){if(e!==ve)return!1;if(!U)return Fu(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!zi(e.type,e.memoizedProps)),t&&(t=me)){if(Fi(e))throw qs(),Error(y(418));for(;t;)Fs(e,t),t=at(t.nextSibling)}if(Fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){me=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}me=null}}else me=ve?at(e.stateNode.nextSibling):null;return!0}function qs(){for(var e=me;e;)e=at(e.nextSibling)}function rn(){me=ve=null,U=!1}function Eo(e){Le===null?Le=[e]:Le.push(e)}var Vd=Xe.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var u=l.refs;o===null?delete u[i]:u[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function Pr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qu(e){var t=e._init;return t(e._payload)}function js(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function l(f,s){return f=dt(f,s),f.index=0,f.sibling=null,f}function i(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,s,d,g){return s===null||s.tag!==6?(s=ni(d,f.mode,g),s.return=f,s):(s=l(s,d),s.return=f,s)}function a(f,s,d,g){var w=d.type;return w===Dt?p(f,s,d.props.children,g,d.key):s!==null&&(s.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Je&&qu(w)===s.type)?(g=l(s,d.props),g.ref=Pn(f,s,d),g.return=f,g):(g=Dr(d.type,d.key,d.props,null,f.mode,g),g.ref=Pn(f,s,d),g.return=f,g)}function c(f,s,d,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=ri(d,f.mode,g),s.return=f,s):(s=l(s,d.children||[]),s.return=f,s)}function p(f,s,d,g,w){return s===null||s.tag!==7?(s=_t(d,f.mode,g,w),s.return=f,s):(s=l(s,d),s.return=f,s)}function x(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=ni(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case sr:return d=Dr(s.type,s.key,s.props,null,f.mode,d),d.ref=Pn(f,null,s),d.return=f,d;case Mt:return s=ri(s,f.mode,d),s.return=f,s;case Je:var g=s._init;return x(f,g(s._payload),d)}if(En(s)||hn(s))return s=_t(s,f.mode,d,null),s.return=f,s;Pr(f,s)}return null}function h(f,s,d,g){var w=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return w!==null?null:u(f,s,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case sr:return d.key===w?a(f,s,d,g):null;case Mt:return d.key===w?c(f,s,d,g):null;case Je:return w=d._init,h(f,s,w(d._payload),g)}if(En(d)||hn(d))return w!==null?null:p(f,s,d,g,null);Pr(f,d)}return null}function m(f,s,d,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,u(s,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sr:return f=f.get(g.key===null?d:g.key)||null,a(s,f,g,w);case Mt:return f=f.get(g.key===null?d:g.key)||null,c(s,f,g,w);case Je:var _=g._init;return m(f,s,d,_(g._payload),w)}if(En(g)||hn(g))return f=f.get(d)||null,p(s,f,g,w,null);Pr(s,g)}return null}function v(f,s,d,g){for(var w=null,_=null,I=s,T=s=0,V=null;I!==null&&T<d.length;T++){I.index>T?(V=I,I=null):V=I.sibling;var L=h(f,I,d[T],g);if(L===null){I===null&&(I=V);break}e&&I&&L.alternate===null&&t(f,I),s=i(L,s,T),_===null?w=L:_.sibling=L,_=L,I=V}if(T===d.length)return n(f,I),U&&Pt(f,T),w;if(I===null){for(;T<d.length;T++)I=x(f,d[T],g),I!==null&&(s=i(I,s,T),_===null?w=I:_.sibling=I,_=I);return U&&Pt(f,T),w}for(I=r(f,I);T<d.length;T++)V=m(I,f,T,d[T],g),V!==null&&(e&&V.alternate!==null&&I.delete(V.key===null?T:V.key),s=i(V,s,T),_===null?w=V:_.sibling=V,_=V);return e&&I.forEach(function(Te){return t(f,Te)}),U&&Pt(f,T),w}function P(f,s,d,g){var w=hn(d);if(typeof w!="function")throw Error(y(150));if(d=w.call(d),d==null)throw Error(y(151));for(var _=w=null,I=s,T=s=0,V=null,L=d.next();I!==null&&!L.done;T++,L=d.next()){I.index>T?(V=I,I=null):V=I.sibling;var Te=h(f,I,L.value,g);if(Te===null){I===null&&(I=V);break}e&&I&&Te.alternate===null&&t(f,I),s=i(Te,s,T),_===null?w=Te:_.sibling=Te,_=Te,I=V}if(L.done)return n(f,I),U&&Pt(f,T),w;if(I===null){for(;!L.done;T++,L=d.next())L=x(f,L.value,g),L!==null&&(s=i(L,s,T),_===null?w=L:_.sibling=L,_=L);return U&&Pt(f,T),w}for(I=r(f,I);!L.done;T++,L=d.next())L=m(I,f,T,L.value,g),L!==null&&(e&&L.alternate!==null&&I.delete(L.key===null?T:L.key),s=i(L,s,T),_===null?w=L:_.sibling=L,_=L);return e&&I.forEach(function(pn){return t(f,pn)}),U&&Pt(f,T),w}function k(f,s,d,g){if(typeof d=="object"&&d!==null&&d.type===Dt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case sr:e:{for(var w=d.key,_=s;_!==null;){if(_.key===w){if(w=d.type,w===Dt){if(_.tag===7){n(f,_.sibling),s=l(_,d.props.children),s.return=f,f=s;break e}}else if(_.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Je&&qu(w)===_.type){n(f,_.sibling),s=l(_,d.props),s.ref=Pn(f,_,d),s.return=f,f=s;break e}n(f,_);break}else t(f,_);_=_.sibling}d.type===Dt?(s=_t(d.props.children,f.mode,g,d.key),s.return=f,f=s):(g=Dr(d.type,d.key,d.props,null,f.mode,g),g.ref=Pn(f,s,d),g.return=f,f=g)}return o(f);case Mt:e:{for(_=d.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=l(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=ri(d,f.mode,g),s.return=f,f=s}return o(f);case Je:return _=d._init,k(f,s,_(d._payload),g)}if(En(d))return v(f,s,d,g);if(hn(d))return P(f,s,d,g);Pr(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=l(s,d),s.return=f,f=s):(n(f,s),s=ni(d,f.mode,g),s.return=f,f=s),o(f)):n(f,s)}return k}var ln=js(!0),Ms=js(!1),Jr=gt(null),br=null,Qt=null,Co=null;function _o(){Co=Qt=br=null}function Io(e){var t=Jr.current;D(Jr),e._currentValue=t}function ji(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bt(e,t){br=e,Co=Qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},Qt===null){if(br===null)throw Error(y(308));Qt=e,br.dependencies={lanes:0,firstContext:e}}else Qt=Qt.next=e;return t}var St=null;function To(e){St===null?St=[e]:St.push(e)}function Ds(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,To(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var be=!1;function No(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Us(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function st(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,To(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xo(e,n)}}function ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var l=e.updateQueue;be=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var p=e.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==o&&(u===null?p.firstBaseUpdate=c:u.next=c,p.lastBaseUpdate=a))}if(i!==null){var x=l.baseState;o=0,p=c=a=null,u=i;do{var h=u.lane,m=u.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:m,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var v=e,P=u;switch(h=t,m=n,P.tag){case 1:if(v=P.payload,typeof v=="function"){x=v.call(m,x,h);break e}x=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=P.payload,h=typeof v=="function"?v.call(m,x,h):v,h==null)break e;x=A({},x,h);break e;case 2:be=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,h=l.effects,h===null?l.effects=[u]:h.push(u))}else m={eventTime:m,lane:h,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(c=p=m,a=x):p=p.next=m,o|=h;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;h=u,u=h.next,h.next=null,l.lastBaseUpdate=h,l.shared.pending=null}}while(!0);if(p===null&&(a=x),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=p,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Rt|=o,e.lanes=o,e.memoizedState=x}}function Mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var ir={},$e=gt(ir),Kn=gt(ir),Yn=gt(ir);function Et(e){if(e===ir)throw Error(y(174));return e}function zo(e,t){switch(j(Yn,t),j(Kn,e),j($e,ir),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:gi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=gi(t,e)}D($e),j($e,t)}function on(){D($e),D(Kn),D(Yn)}function $s(e){Et(Yn.current);var t=Et($e.current),n=gi(t,e.type);t!==n&&(j(Kn,e),j($e,n))}function Ro(e){Kn.current===e&&(D($e),D(Kn))}var $=gt(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xl=[];function Lo(){for(var e=0;e<Xl.length;e++)Xl[e]._workInProgressVersionPrimary=null;Xl.length=0}var Or=Xe.ReactCurrentDispatcher,Zl=Xe.ReactCurrentBatchConfig,zt=0,B=null,Y=null,J=null,nl=!1,Ln=!1,Gn=0,Hd=0;function re(){throw Error(y(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Fo(e,t,n,r,l,i){if(zt=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Or.current=e===null||e.memoizedState===null?Gd:Xd,e=n(r,l),Ln){i=0;do{if(Ln=!1,Gn=0,25<=i)throw Error(y(301));i+=1,J=Y=null,t.updateQueue=null,Or.current=Zd,e=n(r,l)}while(Ln)}if(Or.current=rl,t=Y!==null&&Y.next!==null,zt=0,J=Y=B=null,nl=!1,t)throw Error(y(300));return e}function qo(){var e=Gn!==0;return Gn=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?B.memoizedState=J=e:J=J.next=e,J}function Ie(){if(Y===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=J===null?B.memoizedState:J.next;if(t!==null)J=t,Y=e;else{if(e===null)throw Error(y(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},J===null?B.memoizedState=J=e:J=J.next=e}return J}function Xn(e,t){return typeof t=="function"?t(e):t}function Jl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=Y,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var u=o=null,a=null,c=i;do{var p=c.lane;if((zt&p)===p)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var x={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=x,o=r):a=a.next=x,B.lanes|=p,Rt|=p}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=u,qe(r,t.memoizedState)||(de=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,B.lanes|=i,Rt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=Ie(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);qe(i,t.memoizedState)||(de=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Bs(){}function As(e,t){var n=B,r=Ie(),l=t(),i=!qe(r.memoizedState,l);if(i&&(r.memoizedState=l,de=!0),r=r.queue,jo(Hs.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Zn(9,Vs.bind(null,n,r,l,t),void 0,null),b===null)throw Error(y(349));zt&30||Ws(n,t,l)}return l}function Ws(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vs(e,t,n,r){t.value=n,t.getSnapshot=r,Qs(t)&&Ks(e)}function Hs(e,t,n){return n(function(){Qs(t)&&Ks(e)})}function Qs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function Ks(e){var t=Ye(e,1);t!==null&&Fe(t,e,1,-1)}function Du(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:e},t.queue=e,e=e.dispatch=Yd.bind(null,B,e),[t.memoizedState,e]}function Zn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ys(){return Ie().memoizedState}function Fr(e,t,n,r){var l=Me();B.flags|=e,l.memoizedState=Zn(1|t,n,void 0,r===void 0?null:r)}function ml(e,t,n,r){var l=Ie();r=r===void 0?null:r;var i=void 0;if(Y!==null){var o=Y.memoizedState;if(i=o.destroy,r!==null&&Oo(r,o.deps)){l.memoizedState=Zn(t,n,i,r);return}}B.flags|=e,l.memoizedState=Zn(1|t,n,i,r)}function Uu(e,t){return Fr(8390656,8,e,t)}function jo(e,t){return ml(2048,8,e,t)}function Gs(e,t){return ml(4,2,e,t)}function Xs(e,t){return ml(4,4,e,t)}function Zs(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Js(e,t,n){return n=n!=null?n.concat([e]):null,ml(4,4,Zs.bind(null,t,e),n)}function Mo(){}function bs(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ec(e,t){var n=Ie();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Oo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tc(e,t,n){return zt&21?(qe(n,t)||(n=os(),B.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function Qd(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=Zl.transition;Zl.transition={};try{e(!1),t()}finally{q=n,Zl.transition=r}}function nc(){return Ie().memoizedState}function Kd(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e))lc(t,n);else if(n=Ds(e,t,n,r),n!==null){var l=ae();Fe(n,e,r,l),ic(n,t,r)}}function Yd(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))lc(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,u=i(o,n);if(l.hasEagerState=!0,l.eagerState=u,qe(u,o)){var a=t.interleaved;a===null?(l.next=l,To(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=Ds(e,t,l,r),n!==null&&(l=ae(),Fe(n,e,r,l),ic(n,t,r))}}function rc(e){var t=e.alternate;return e===B||t!==null&&t===B}function lc(e,t){Ln=nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ic(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,xo(e,n)}}var rl={readContext:_e,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},Gd={readContext:_e,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:Uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fr(4194308,4,Zs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fr(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Kd.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:Du,useDebugValue:Mo,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=Du(!1),t=e[0];return e=Qd.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,l=Me();if(U){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),b===null)throw Error(y(349));zt&30||Ws(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Uu(Hs.bind(null,r,i,e),[e]),r.flags|=2048,Zn(9,Vs.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Me(),t=b.identifierPrefix;if(U){var n=Ve,r=We;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xd={readContext:_e,useCallback:bs,useContext:_e,useEffect:jo,useImperativeHandle:Js,useInsertionEffect:Gs,useLayoutEffect:Xs,useMemo:ec,useReducer:Jl,useRef:Ys,useState:function(){return Jl(Xn)},useDebugValue:Mo,useDeferredValue:function(e){var t=Ie();return tc(t,Y.memoizedState,e)},useTransition:function(){var e=Jl(Xn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Bs,useSyncExternalStore:As,useId:nc,unstable_isNewReconciler:!1},Zd={readContext:_e,useCallback:bs,useContext:_e,useEffect:jo,useImperativeHandle:Js,useInsertionEffect:Gs,useLayoutEffect:Xs,useMemo:ec,useReducer:bl,useRef:Ys,useState:function(){return bl(Xn)},useDebugValue:Mo,useDeferredValue:function(e){var t=Ie();return Y===null?t.memoizedState=e:tc(t,Y.memoizedState,e)},useTransition:function(){var e=bl(Xn)[0],t=Ie().memoizedState;return[e,t]},useMutableSource:Bs,useSyncExternalStore:As,useId:nc,unstable_isNewReconciler:!1};function ze(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vl={isMounted:function(e){return(e=e._reactInternals)?Ft(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ft(e),i=He(r,l);i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Fe(t,e,l,r),Lr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ft(e),i=He(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=st(e,i,l),t!==null&&(Fe(t,e,l,r),Lr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ft(e),l=He(n,r);l.tag=2,t!=null&&(l.callback=t),t=st(e,l,r),t!==null&&(Fe(t,e,r,n),Lr(t,e,r))}};function $u(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Wn(n,r)||!Wn(l,i):!0}function oc(e,t,n){var r=!1,l=xt,i=t.contextType;return typeof i=="object"&&i!==null?i=_e(i):(l=xe(t)?Tt:oe.current,r=t.contextTypes,i=(r=r!=null)?nn(e,l):xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function Di(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},No(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=_e(i):(i=xe(t)?Tt:oe.current,l.context=nn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Mi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&vl.enqueueReplaceState(l,l.state,null),el(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function un(e,t){try{var n="",r=t;do n+=Cf(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function ei(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ui(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Jd=typeof WeakMap=="function"?WeakMap:Map;function uc(e,t,n){n=He(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,Gi=r),Ui(e,t)},n}function ac(e,t,n){n=He(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ui(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ui(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Au(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Jd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=d1.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=He(-1,1),t.tag=2,st(n,t,1))),n.lanes|=1),e)}var bd=Xe.ReactCurrentOwner,de=!1;function ue(e,t,n,r){t.child=e===null?Ms(t,null,n,r):ln(t,e.child,n,r)}function Hu(e,t,n,r,l){n=n.render;var i=t.ref;return bt(t,l),r=Fo(e,t,n,r,i,l),n=qo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(U&&n&&ko(t),t.flags|=1,ue(e,t,r,l),t.child)}function Qu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Ho(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,sc(e,t,i,r,l)):(e=Dr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(o,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=dt(i,r),e.ref=t.ref,e.return=t,t.child=e}function sc(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Wn(i,r)&&e.ref===t.ref)if(de=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return $i(e,t,n,r,l)}function cc(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Yt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(Yt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,j(Yt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,j(Yt,ge),ge|=r;return ue(e,t,l,n),t.child}function fc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $i(e,t,n,r,l){var i=xe(n)?Tt:oe.current;return i=nn(t,i),bt(t,l),n=Fo(e,t,n,r,i,l),r=qo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(U&&r&&ko(t),t.flags|=1,ue(e,t,n,l),t.child)}function Ku(e,t,n,r,l){if(xe(n)){var i=!0;Gr(t)}else i=!1;if(bt(t,l),t.stateNode===null)qr(e,t),oc(t,n,r),Di(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,u=t.memoizedProps;o.props=u;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=_e(c):(c=xe(n)?Tt:oe.current,c=nn(t,c));var p=n.getDerivedStateFromProps,x=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";x||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Bu(t,o,r,c),be=!1;var h=t.memoizedState;o.state=h,el(t,r,o,l),a=t.memoizedState,u!==r||h!==a||pe.current||be?(typeof p=="function"&&(Mi(t,n,p,r),a=t.memoizedState),(u=be||$u(t,n,u,r,h,a,c))?(x||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=u):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Us(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:ze(t.type,u),o.props=c,x=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=_e(a):(a=xe(n)?Tt:oe.current,a=nn(t,a));var m=n.getDerivedStateFromProps;(p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==x||h!==a)&&Bu(t,o,r,a),be=!1,h=t.memoizedState,o.state=h,el(t,r,o,l);var v=t.memoizedState;u!==x||h!==v||pe.current||be?(typeof m=="function"&&(Mi(t,n,m,r),v=t.memoizedState),(c=be||$u(t,n,c,r,h,v,a)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Bi(e,t,n,r,i,l)}function Bi(e,t,n,r,l,i){fc(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Lu(t,n,!1),Ge(e,t,i);r=t.stateNode,bd.current=t;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=ln(t,e.child,null,i),t.child=ln(t,null,u,i)):ue(e,t,u,i),t.memoizedState=r.state,l&&Lu(t,n,!0),t.child}function dc(e){var t=e.stateNode;t.pendingContext?Ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ru(e,t.context,!1),zo(e,t.containerInfo)}function Yu(e,t,n,r,l){return rn(),Eo(l),t.flags|=256,ue(e,t,n,r),t.child}var Ai={dehydrated:null,treeContext:null,retryLane:0};function Wi(e){return{baseLanes:e,cachePool:null,transitions:null}}function pc(e,t,n){var r=t.pendingProps,l=$.current,i=!1,o=(t.flags&128)!==0,u;if((u=o)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),j($,l&1),e===null)return qi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=wl(o,r,0,null),e=_t(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wi(n),t.memoizedState=Ai,e):Do(t,o));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return e1(e,t,o,r,u,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=dt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?i=dt(u,i):(i=_t(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Wi(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Ai,r}return i=e.child,e=i.sibling,r=dt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Do(e,t){return t=wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wr(e,t,n,r){return r!==null&&Eo(r),ln(t,e.child,null,n),e=Do(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function e1(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=ei(Error(y(422))),wr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=wl({mode:"visible",children:r.children},l,0,null),i=_t(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&ln(t,e.child,null,o),t.child.memoizedState=Wi(o),t.memoizedState=Ai,i);if(!(t.mode&1))return wr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(y(419)),r=ei(i,r,void 0),wr(e,t,o,r)}if(u=(o&e.childLanes)!==0,de||u){if(r=b,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Fe(r,e,l,-1))}return Vo(),r=ei(Error(y(421))),wr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=p1.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,me=at(l.nextSibling),ve=t,U=!0,Le=null,e!==null&&(ke[Se++]=We,ke[Se++]=Ve,ke[Se++]=Nt,We=e.id,Ve=e.overflow,Nt=t),t=Do(t,r.children),t.flags|=4096,t)}function Gu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ji(e.return,t,n)}function ti(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function xc(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ue(e,t,r.children,n),r=$.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gu(e,n,t);else if(e.tag===19)Gu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j($,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ti(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&tl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ti(t,!0,n,null,i);break;case"together":ti(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function t1(e,t,n){switch(t.tag){case 3:dc(t),rn();break;case 5:$s(t);break;case 1:xe(t.type)&&Gr(t);break;case 4:zo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;j(Jr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j($,$.current&1),t.flags|=128,null):n&t.child.childLanes?pc(e,t,n):(j($,$.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);j($,$.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return xc(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),j($,$.current),r)break;return null;case 22:case 23:return t.lanes=0,cc(e,t,n)}return Ge(e,t,n)}var hc,Vi,gc,mc;hc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};gc=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et($e.current);var i=null;switch(n){case"input":l=di(e,l),r=di(e,r),i=[];break;case"select":l=A({},l,{value:void 0}),r=A({},r,{value:void 0}),i=[];break;case"textarea":l=hi(e,l),r=hi(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Kr)}mi(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(o in u)!u.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&u[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jn.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&M("scroll",e),i||u===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};mc=function(e,t,n,r){n!==r&&(t.flags|=4)};function wn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function n1(e,t,n){var r=t.pendingProps;switch(So(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return xe(t.type)&&Yr(),le(t),null;case 3:return r=t.stateNode,on(),D(pe),D(oe),Lo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(yr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Ji(Le),Le=null))),Vi(e,t),le(t),null;case 5:Ro(t);var l=Et(Yn.current);if(n=t.type,e!==null&&t.stateNode!=null)gc(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return le(t),null}if(e=Et($e.current),yr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[De]=t,r[Qn]=i,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(l=0;l<_n.length;l++)M(_n[l],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":lu(r,i),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},M("invalid",r);break;case"textarea":ou(r,i),M("invalid",r)}mi(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&vr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&vr(r.textContent,u,e),l=["children",""+u]):jn.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&M("scroll",r)}switch(n){case"input":cr(r),iu(r,i,!0);break;case"textarea":cr(r),uu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Kr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ha(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[De]=t,e[Qn]=r,hc(e,t,!1,!1),t.stateNode=e;e:{switch(o=vi(n,r),n){case"dialog":M("cancel",e),M("close",e),l=r;break;case"iframe":case"object":case"embed":M("load",e),l=r;break;case"video":case"audio":for(l=0;l<_n.length;l++)M(_n[l],e);l=r;break;case"source":M("error",e),l=r;break;case"img":case"image":case"link":M("error",e),M("load",e),l=r;break;case"details":M("toggle",e),l=r;break;case"input":lu(e,r),l=di(e,r),M("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=A({},r,{value:void 0}),M("invalid",e);break;case"textarea":ou(e,r),l=hi(e,r),M("invalid",e);break;default:l=r}mi(n,l),u=l;for(i in u)if(u.hasOwnProperty(i)){var a=u[i];i==="style"?Ya(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Qa(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Mn(e,a):typeof a=="number"&&Mn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jn.hasOwnProperty(i)?a!=null&&i==="onScroll"&&M("scroll",e):a!=null&&uo(e,i,a,o))}switch(n){case"input":cr(e),iu(e,r,!1);break;case"textarea":cr(e),uu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Kr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)mc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Et(Yn.current),Et($e.current),yr(t)){if(r=t.stateNode,n=t.memoizedProps,r[De]=t,(i=r.nodeValue!==n)&&(e=ve,e!==null))switch(e.tag){case 3:vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[De]=t,t.stateNode=r}return le(t),null;case 13:if(D($),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&me!==null&&t.mode&1&&!(t.flags&128))qs(),rn(),t.flags|=98560,i=!1;else if(i=yr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[De]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),i=!1}else Le!==null&&(Ji(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||$.current&1?G===0&&(G=3):Vo())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return on(),Vi(e,t),e===null&&Vn(t.stateNode.containerInfo),le(t),null;case 10:return Io(t.type._context),le(t),null;case 17:return xe(t.type)&&Yr(),le(t),null;case 19:if(D($),i=t.memoizedState,i===null)return le(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)wn(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=tl(e),o!==null){for(t.flags|=128,wn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j($,$.current&1|2),t.child}e=e.sibling}i.tail!==null&&Q()>an&&(t.flags|=128,r=!0,wn(i,!1),t.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!U)return le(t),null}else 2*Q()-i.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,r=!0,wn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Q(),t.sibling=null,n=$.current,j($,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Wo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function r1(e,t){switch(So(t),t.tag){case 1:return xe(t.type)&&Yr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),D(pe),D(oe),Lo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ro(t),null;case 13:if(D($),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D($),null;case 4:return on(),null;case 10:return Io(t.type._context),null;case 22:case 23:return Wo(),null;case 24:return null;default:return null}}var kr=!1,ie=!1,l1=typeof WeakSet=="function"?WeakSet:Set,S=null;function Kt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Hi(e,t,n){try{n()}catch(r){W(e,t,r)}}var Xu=!1;function i1(e,t){if(Ti=Vr,e=ks(),wo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,a=-1,c=0,p=0,x=e,h=null;t:for(;;){for(var m;x!==n||l!==0&&x.nodeType!==3||(u=o+l),x!==i||r!==0&&x.nodeType!==3||(a=o+r),x.nodeType===3&&(o+=x.nodeValue.length),(m=x.firstChild)!==null;)h=x,x=m;for(;;){if(x===e)break t;if(h===n&&++c===l&&(u=o),h===i&&++p===r&&(a=o),(m=x.nextSibling)!==null)break;x=h,h=x.parentNode}x=m}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ni={focusedElem:e,selectionRange:n},Vr=!1,S=t;S!==null;)if(t=S,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,S=e;else for(;S!==null;){t=S;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var P=v.memoizedProps,k=v.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?P:ze(t.type,P),k);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,S=e;break}S=t.return}return v=Xu,Xu=!1,v}function On(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Hi(t,n,i)}l=l.next}while(l!==r)}}function yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function vc(e){var t=e.alternate;t!==null&&(e.alternate=null,vc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[De],delete t[Qn],delete t[Li],delete t[Bd],delete t[Ad])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function Zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Kr));else if(r!==4&&(e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function Yi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yi(e,t,n),e=e.sibling;e!==null;)Yi(e,t,n),e=e.sibling}var ee=null,Re=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Pc(e,t,n),n=n.sibling}function Pc(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(fl,n)}catch{}switch(n.tag){case 5:ie||Kt(n,t);case 6:var r=ee,l=Re;ee=null,Ze(e,t,n),ee=r,Re=l,ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Re?(e=ee,n=n.stateNode,e.nodeType===8?Yl(e.parentNode,n):e.nodeType===1&&Yl(e,n),Bn(e)):Yl(ee,n.stateNode));break;case 4:r=ee,l=Re,ee=n.stateNode.containerInfo,Re=!0,Ze(e,t,n),ee=r,Re=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Hi(n,t,o),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!ie&&(Kt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){W(n,t,u)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Ze(e,t,n),ie=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Ju(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new l1),t.forEach(function(r){var l=x1.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ne(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,u=o;e:for(;u!==null;){switch(u.tag){case 5:ee=u.stateNode,Re=!1;break e;case 3:ee=u.stateNode.containerInfo,Re=!0;break e;case 4:ee=u.stateNode.containerInfo,Re=!0;break e}u=u.return}if(ee===null)throw Error(y(160));Pc(i,o,l),ee=null,Re=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){W(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ne(t,e),je(e),r&4){try{On(3,e,e.return),yl(3,e)}catch(P){W(e,e.return,P)}try{On(5,e,e.return)}catch(P){W(e,e.return,P)}}break;case 1:Ne(t,e),je(e),r&512&&n!==null&&Kt(n,n.return);break;case 5:if(Ne(t,e),je(e),r&512&&n!==null&&Kt(n,n.return),e.flags&32){var l=e.stateNode;try{Mn(l,"")}catch(P){W(e,e.return,P)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&Wa(l,i),vi(u,o);var c=vi(u,i);for(o=0;o<a.length;o+=2){var p=a[o],x=a[o+1];p==="style"?Ya(l,x):p==="dangerouslySetInnerHTML"?Qa(l,x):p==="children"?Mn(l,x):uo(l,p,x,c)}switch(u){case"input":pi(l,i);break;case"textarea":Va(l,i);break;case"select":var h=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?Gt(l,!!i.multiple,m,!1):h!==!!i.multiple&&(i.defaultValue!=null?Gt(l,!!i.multiple,i.defaultValue,!0):Gt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Qn]=i}catch(P){W(e,e.return,P)}}break;case 6:if(Ne(t,e),je(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(P){W(e,e.return,P)}}break;case 3:if(Ne(t,e),je(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(P){W(e,e.return,P)}break;case 4:Ne(t,e),je(e);break;case 13:Ne(t,e),je(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Bo=Q())),r&4&&Ju(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(c=ie)||p,Ne(t,e),ie=c):Ne(t,e),je(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(S=e,p=e.child;p!==null;){for(x=S=p;S!==null;){switch(h=S,m=h.child,h.tag){case 0:case 11:case 14:case 15:On(4,h,h.return);break;case 1:Kt(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(P){W(r,n,P)}}break;case 5:Kt(h,h.return);break;case 22:if(h.memoizedState!==null){ea(x);continue}}m!==null?(m.return=h,S=m):ea(x)}p=p.sibling}e:for(p=null,x=e;;){if(x.tag===5){if(p===null){p=x;try{l=x.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=x.stateNode,a=x.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=Ka("display",o))}catch(P){W(e,e.return,P)}}}else if(x.tag===6){if(p===null)try{x.stateNode.nodeValue=c?"":x.memoizedProps}catch(P){W(e,e.return,P)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;p===x&&(p=null),x=x.return}p===x&&(p=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Ne(t,e),je(e),r&4&&Ju(e);break;case 21:break;default:Ne(t,e),je(e)}}function je(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yc(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mn(l,""),r.flags&=-33);var i=Zu(e);Yi(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Zu(e);Ki(e,u,o);break;default:throw Error(y(161))}}catch(a){W(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function o1(e,t,n){S=e,kc(e)}function kc(e,t,n){for(var r=(e.mode&1)!==0;S!==null;){var l=S,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||kr;if(!o){var u=l.alternate,a=u!==null&&u.memoizedState!==null||ie;u=kr;var c=ie;if(kr=o,(ie=a)&&!c)for(S=l;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?ta(l):a!==null?(a.return=o,S=a):ta(l);for(;i!==null;)S=i,kc(i),i=i.sibling;S=l,kr=u,ie=c}bu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,S=i):bu(e)}}function bu(e){for(;S!==null;){var t=S;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ze(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Mu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Mu(t,o,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var x=p.dehydrated;x!==null&&Bn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ie||t.flags&512&&Qi(t)}catch(h){W(t,t.return,h)}}if(t===e){S=null;break}if(n=t.sibling,n!==null){n.return=t.return,S=n;break}S=t.return}}function ea(e){for(;S!==null;){var t=S;if(t===e){S=null;break}var n=t.sibling;if(n!==null){n.return=t.return,S=n;break}S=t.return}}function ta(e){for(;S!==null;){var t=S;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(a){W(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){W(t,l,a)}}var i=t.return;try{Qi(t)}catch(a){W(t,i,a)}break;case 5:var o=t.return;try{Qi(t)}catch(a){W(t,o,a)}}}catch(a){W(t,t.return,a)}if(t===e){S=null;break}var u=t.sibling;if(u!==null){u.return=t.return,S=u;break}S=t.return}}var u1=Math.ceil,ll=Xe.ReactCurrentDispatcher,Uo=Xe.ReactCurrentOwner,Ce=Xe.ReactCurrentBatchConfig,O=0,b=null,K=null,te=0,ge=0,Yt=gt(0),G=0,Jn=null,Rt=0,Pl=0,$o=0,Fn=null,fe=null,Bo=0,an=1/0,Be=null,il=!1,Gi=null,ct=null,Sr=!1,rt=null,ol=0,qn=0,Xi=null,jr=-1,Mr=0;function ae(){return O&6?Q():jr!==-1?jr:jr=Q()}function ft(e){return e.mode&1?O&2&&te!==0?te&-te:Vd.transition!==null?(Mr===0&&(Mr=os()),Mr):(e=q,e!==0||(e=window.event,e=e===void 0?16:ps(e.type)),e):1}function Fe(e,t,n,r){if(50<qn)throw qn=0,Xi=null,Error(y(185));nr(e,n,r),(!(O&2)||e!==b)&&(e===b&&(!(O&2)&&(Pl|=n),G===4&&tt(e,te)),he(e,r),n===1&&O===0&&!(t.mode&1)&&(an=Q()+500,gl&&mt()))}function he(e,t){var n=e.callbackNode;Vf(e,t);var r=Wr(e,e===b?te:0);if(r===0)n!==null&&cu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cu(n),t===1)e.tag===0?Wd(na.bind(null,e)):Ls(na.bind(null,e)),Ud(function(){!(O&6)&&mt()}),n=null;else{switch(us(r)){case 1:n=po;break;case 4:n=ls;break;case 16:n=Ar;break;case 536870912:n=is;break;default:n=Ar}n=zc(n,Sc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Sc(e,t){if(jr=-1,Mr=0,O&6)throw Error(y(327));var n=e.callbackNode;if(en()&&e.callbackNode!==n)return null;var r=Wr(e,e===b?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ul(e,r);else{t=r;var l=O;O|=2;var i=Cc();(b!==e||te!==t)&&(Be=null,an=Q()+500,Ct(e,t));do try{c1();break}catch(u){Ec(e,u)}while(!0);_o(),ll.current=i,O=l,K!==null?t=0:(b=null,te=0,t=G)}if(t!==0){if(t===2&&(l=Si(e),l!==0&&(r=l,t=Zi(e,l))),t===1)throw n=Jn,Ct(e,0),tt(e,r),he(e,Q()),n;if(t===6)tt(e,r);else{if(l=e.current.alternate,!(r&30)&&!a1(l)&&(t=ul(e,r),t===2&&(i=Si(e),i!==0&&(r=i,t=Zi(e,i))),t===1))throw n=Jn,Ct(e,0),tt(e,r),he(e,Q()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,fe,Be);break;case 3:if(tt(e,r),(r&130023424)===r&&(t=Bo+500-Q(),10<t)){if(Wr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ri(wt.bind(null,e,fe,Be),t);break}wt(e,fe,Be);break;case 4:if(tt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Oe(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*u1(r/1960))-r,10<r){e.timeoutHandle=Ri(wt.bind(null,e,fe,Be),r);break}wt(e,fe,Be);break;case 5:wt(e,fe,Be);break;default:throw Error(y(329))}}}return he(e,Q()),e.callbackNode===n?Sc.bind(null,e):null}function Zi(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=ul(e,t),e!==2&&(t=fe,fe=n,t!==null&&Ji(t)),e}function Ji(e){fe===null?fe=e:fe.push.apply(fe,e)}function a1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!qe(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~$o,t&=~Pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function na(e){if(O&6)throw Error(y(327));en();var t=Wr(e,0);if(!(t&1))return he(e,Q()),null;var n=ul(e,t);if(e.tag!==0&&n===2){var r=Si(e);r!==0&&(t=r,n=Zi(e,r))}if(n===1)throw n=Jn,Ct(e,0),tt(e,t),he(e,Q()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,fe,Be),he(e,Q()),null}function Ao(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(an=Q()+500,gl&&mt())}}function Lt(e){rt!==null&&rt.tag===0&&!(O&6)&&en();var t=O;O|=1;var n=Ce.transition,r=q;try{if(Ce.transition=null,q=1,e)return e()}finally{q=r,Ce.transition=n,O=t,!(O&6)&&mt()}}function Wo(){ge=Yt.current,D(Yt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dd(n)),K!==null)for(n=K.return;n!==null;){var r=n;switch(So(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yr();break;case 3:on(),D(pe),D(oe),Lo();break;case 5:Ro(r);break;case 4:on();break;case 13:D($);break;case 19:D($);break;case 10:Io(r.type._context);break;case 22:case 23:Wo()}n=n.return}if(b=e,K=e=dt(e.current,null),te=ge=t,G=0,Jn=null,$o=Pl=Rt=0,fe=Fn=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}St=null}return e}function Ec(e,t){do{var n=K;try{if(_o(),Or.current=rl,nl){for(var r=B.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}nl=!1}if(zt=0,J=Y=B=null,Ln=!1,Gn=0,Uo.current=null,n===null||n.return===null){G=1,Jn=t,K=null;break}e:{var i=e,o=n.return,u=n,a=t;if(t=te,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,p=u,x=p.tag;if(!(p.mode&1)&&(x===0||x===11||x===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var m=Wu(o);if(m!==null){m.flags&=-257,Vu(m,o,u,i,t),m.mode&1&&Au(i,c,t),t=m,a=c;var v=t.updateQueue;if(v===null){var P=new Set;P.add(a),t.updateQueue=P}else v.add(a);break e}else{if(!(t&1)){Au(i,c,t),Vo();break e}a=Error(y(426))}}else if(U&&u.mode&1){var k=Wu(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Vu(k,o,u,i,t),Eo(un(a,u));break e}}i=a=un(a,u),G!==4&&(G=2),Fn===null?Fn=[i]:Fn.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=uc(i,a,t);ju(i,f);break e;case 1:u=a;var s=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ct===null||!ct.has(d)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=ac(i,u,t);ju(i,g);break e}}i=i.return}while(i!==null)}Ic(n)}catch(w){t=w,K===n&&n!==null&&(K=n=n.return);continue}break}while(!0)}function Cc(){var e=ll.current;return ll.current=rl,e===null?rl:e}function Vo(){(G===0||G===3||G===2)&&(G=4),b===null||!(Rt&268435455)&&!(Pl&268435455)||tt(b,te)}function ul(e,t){var n=O;O|=2;var r=Cc();(b!==e||te!==t)&&(Be=null,Ct(e,t));do try{s1();break}catch(l){Ec(e,l)}while(!0);if(_o(),O=n,ll.current=r,K!==null)throw Error(y(261));return b=null,te=0,G}function s1(){for(;K!==null;)_c(K)}function c1(){for(;K!==null&&!qf();)_c(K)}function _c(e){var t=Nc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Ic(e):K=t,Uo.current=null}function Ic(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=r1(n,t),n!==null){n.flags&=32767,K=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,K=null;return}}else if(n=n1(n,t,ge),n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);G===0&&(G=5)}function wt(e,t,n){var r=q,l=Ce.transition;try{Ce.transition=null,q=1,f1(e,t,n,r)}finally{Ce.transition=l,q=r}return null}function f1(e,t,n,r){do en();while(rt!==null);if(O&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Hf(e,i),e===b&&(K=b=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sr||(Sr=!0,zc(Ar,function(){return en(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ce.transition,Ce.transition=null;var o=q;q=1;var u=O;O|=4,Uo.current=null,i1(e,n),wc(n,e),Rd(Ni),Vr=!!Ti,Ni=Ti=null,e.current=n,o1(n),jf(),O=u,q=o,Ce.transition=i}else e.current=n;if(Sr&&(Sr=!1,rt=e,ol=l),i=e.pendingLanes,i===0&&(ct=null),Uf(n.stateNode),he(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(il)throw il=!1,e=Gi,Gi=null,e;return ol&1&&e.tag!==0&&en(),i=e.pendingLanes,i&1?e===Xi?qn++:(qn=0,Xi=e):qn=0,mt(),null}function en(){if(rt!==null){var e=us(ol),t=Ce.transition,n=q;try{if(Ce.transition=null,q=16>e?16:e,rt===null)var r=!1;else{if(e=rt,rt=null,ol=0,O&6)throw Error(y(331));var l=O;for(O|=4,S=e.current;S!==null;){var i=S,o=i.child;if(S.flags&16){var u=i.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(S=c;S!==null;){var p=S;switch(p.tag){case 0:case 11:case 15:On(8,p,i)}var x=p.child;if(x!==null)x.return=p,S=x;else for(;S!==null;){p=S;var h=p.sibling,m=p.return;if(vc(p),p===c){S=null;break}if(h!==null){h.return=m,S=h;break}S=m}}}var v=i.alternate;if(v!==null){var P=v.child;if(P!==null){v.child=null;do{var k=P.sibling;P.sibling=null,P=k}while(P!==null)}}S=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,S=o;else e:for(;S!==null;){if(i=S,i.flags&2048)switch(i.tag){case 0:case 11:case 15:On(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,S=f;break e}S=i.return}}var s=e.current;for(S=s;S!==null;){o=S;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,S=d;else e:for(o=s;S!==null;){if(u=S,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:yl(9,u)}}catch(w){W(u,u.return,w)}if(u===o){S=null;break e}var g=u.sibling;if(g!==null){g.return=u.return,S=g;break e}S=u.return}}if(O=l,mt(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(fl,e)}catch{}r=!0}return r}finally{q=n,Ce.transition=t}}return!1}function ra(e,t,n){t=un(n,t),t=uc(e,t,1),e=st(e,t,1),t=ae(),e!==null&&(nr(e,1,t),he(e,t))}function W(e,t,n){if(e.tag===3)ra(e,e,n);else for(;t!==null;){if(t.tag===3){ra(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=un(n,e),e=ac(t,e,1),t=st(t,e,1),e=ae(),t!==null&&(nr(t,1,e),he(t,e));break}}t=t.return}}function d1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,b===e&&(te&n)===n&&(G===4||G===3&&(te&130023424)===te&&500>Q()-Bo?Ct(e,0):$o|=n),he(e,t)}function Tc(e,t){t===0&&(e.mode&1?(t=pr,pr<<=1,!(pr&130023424)&&(pr=4194304)):t=1);var n=ae();e=Ye(e,t),e!==null&&(nr(e,t,n),he(e,n))}function p1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Tc(e,n)}function x1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Tc(e,n)}var Nc;Nc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,t1(e,t,n);de=!!(e.flags&131072)}else de=!1,U&&t.flags&1048576&&Os(t,Zr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qr(e,t),e=t.pendingProps;var l=nn(t,oe.current);bt(t,n),l=Fo(null,t,r,e,l,n);var i=qo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(i=!0,Gr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,No(t),l.updater=vl,t.stateNode=l,l._reactInternals=t,Di(t,r,e,n),t=Bi(null,t,r,!0,i,n)):(t.tag=0,U&&i&&ko(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=g1(r),e=ze(r,e),l){case 0:t=$i(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Hu(null,t,r,e,n);break e;case 14:t=Qu(null,t,r,ze(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),$i(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Ku(e,t,r,l,n);case 3:e:{if(dc(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Us(e,t),el(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=un(Error(y(423)),t),t=Yu(e,t,r,n,l);break e}else if(r!==l){l=un(Error(y(424)),t),t=Yu(e,t,r,n,l);break e}else for(me=at(t.stateNode.containerInfo.firstChild),ve=t,U=!0,Le=null,n=Ms(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),r===l){t=Ge(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return $s(t),e===null&&qi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,zi(r,l)?o=null:i!==null&&zi(r,i)&&(t.flags|=32),fc(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&qi(t),null;case 13:return pc(e,t,n);case 4:return zo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),Hu(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,j(Jr,r._currentValue),r._currentValue=o,i!==null)if(qe(i.value,o)){if(i.children===l.children&&!pe.current){t=Ge(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=He(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?a.next=a:(a.next=p.next,p.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ji(i.return,n,t),u.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(y(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),ji(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,bt(t,n),l=_e(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=ze(r,t.pendingProps),l=ze(r.type,l),Qu(e,t,r,l,n);case 15:return sc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ze(r,l),qr(e,t),t.tag=1,xe(r)?(e=!0,Gr(t)):e=!1,bt(t,n),oc(t,r,l),Di(t,r,l,n),Bi(null,t,r,!0,e,n);case 19:return xc(e,t,n);case 22:return cc(e,t,n)}throw Error(y(156,t.tag))};function zc(e,t){return rs(e,t)}function h1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new h1(e,t,n,r)}function Ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function g1(e){if(typeof e=="function")return Ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===so)return 11;if(e===co)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Dr(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Ho(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dt:return _t(n.children,l,i,t);case ao:o=8,l|=8;break;case ai:return e=Ee(12,n,t,l|2),e.elementType=ai,e.lanes=i,e;case si:return e=Ee(13,n,t,l),e.elementType=si,e.lanes=i,e;case ci:return e=Ee(19,n,t,l),e.elementType=ci,e.lanes=i,e;case $a:return wl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Da:o=10;break e;case Ua:o=9;break e;case so:o=11;break e;case co:o=14;break e;case Je:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function _t(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function wl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=$a,e.lanes=n,e.stateNode={isHidden:!1},e}function ni(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function ri(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function m1(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Qo(e,t,n,r,l,i,o,u,a){return e=new m1(e,t,n,u,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ee(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},No(i),e}function v1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rc(e){if(!e)return xt;e=e._reactInternals;e:{if(Ft(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(xe(n))return Rs(e,n,t)}return t}function Lc(e,t,n,r,l,i,o,u,a){return e=Qo(n,r,!0,e,l,i,o,u,a),e.context=Rc(null),n=e.current,r=ae(),l=ft(n),i=He(r,l),i.callback=t??null,st(n,i,l),e.current.lanes=l,nr(e,l,r),he(e,r),e}function kl(e,t,n,r){var l=t.current,i=ae(),o=ft(l);return n=Rc(n),t.context===null?t.context=n:t.pendingContext=n,t=He(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=st(l,t,o),e!==null&&(Fe(e,l,o,i),Lr(e,l,o)),o}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function la(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ko(e,t){la(e,t),(e=e.alternate)&&la(e,t)}function y1(){return null}var Oc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yo(e){this._internalRoot=e}Sl.prototype.render=Yo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));kl(e,t,null,null)};Sl.prototype.unmount=Yo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lt(function(){kl(null,e,null,null)}),t[Ke]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=cs();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&ds(e)}};function Go(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ia(){}function P1(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=al(o);i.call(c)}}var o=Lc(t,r,e,0,null,!1,!1,"",ia);return e._reactRootContainer=o,e[Ke]=o.current,Vn(e.nodeType===8?e.parentNode:e),Lt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=al(a);u.call(c)}}var a=Qo(e,0,!1,null,null,!1,!1,"",ia);return e._reactRootContainer=a,e[Ke]=a.current,Vn(e.nodeType===8?e.parentNode:e),Lt(function(){kl(t,a,n,r)}),a}function Cl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var u=l;l=function(){var a=al(o);u.call(a)}}kl(t,o,e,l)}else o=P1(n,t,e,l,r);return al(o)}as=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cn(t.pendingLanes);n!==0&&(xo(t,n|1),he(t,Q()),!(O&6)&&(an=Q()+500,mt()))}break;case 13:Lt(function(){var r=Ye(e,1);if(r!==null){var l=ae();Fe(r,e,1,l)}}),Ko(e,1)}};ho=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ae();Fe(t,e,134217728,n)}Ko(e,134217728)}};ss=function(e){if(e.tag===13){var t=ft(e),n=Ye(e,t);if(n!==null){var r=ae();Fe(n,e,t,r)}Ko(e,t)}};cs=function(){return q};fs=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Pi=function(e,t,n){switch(t){case"input":if(pi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=hl(r);if(!l)throw Error(y(90));Aa(r),pi(r,l)}}}break;case"textarea":Va(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};Za=Ao;Ja=Lt;var w1={usingClientEntryPoint:!1,Events:[lr,At,hl,Ga,Xa,Ao]},kn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k1={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ts(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||y1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{fl=Er.inject(k1),Ue=Er}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Go(t))throw Error(y(200));return v1(e,t,null,n)};Pe.createRoot=function(e,t){if(!Go(e))throw Error(y(299));var n=!1,r="",l=Oc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Qo(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Yo(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ts(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Lt(e)};Pe.hydrate=function(e,t,n){if(!El(t))throw Error(y(200));return Cl(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Go(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Oc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Lc(t,null,e,1,n??null,l,!1,i,o),e[Ke]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Sl(t)};Pe.render=function(e,t,n){if(!El(t))throw Error(y(200));return Cl(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!El(e))throw Error(y(40));return e._reactRootContainer?(Lt(function(){Cl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};Pe.unstable_batchedUpdates=Ao;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!El(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return Cl(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function Fc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fc)}catch(e){console.error(e)}}Fc(),Fa.exports=Pe;var S1=Fa.exports,oa=S1;oi.createRoot=oa.createRoot,oi.hydrateRoot=oa.hydrateRoot;/**
 * @remix-run/router v1.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bn(){return bn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bn.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const ua="popstate";function E1(e){e===void 0&&(e={});function t(r,l){let{pathname:i,search:o,hash:u}=r.location;return bi("",{pathname:i,search:o,hash:u},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:jc(l)}return _1(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function C1(){return Math.random().toString(36).substr(2,8)}function aa(e,t){return{usr:e.state,key:e.key,idx:t}}function bi(e,t,n,r){return n===void 0&&(n=null),bn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?dn(t):t,{state:n,key:t&&t.key||r||C1()})}function jc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function dn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function _1(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,u=lt.Pop,a=null,c=p();c==null&&(c=0,o.replaceState(bn({},o.state,{idx:c}),""));function p(){return(o.state||{idx:null}).idx}function x(){u=lt.Pop;let k=p(),f=k==null?null:k-c;c=k,a&&a({action:u,location:P.location,delta:f})}function h(k,f){u=lt.Push;let s=bi(P.location,k,f);c=p()+1;let d=aa(s,c),g=P.createHref(s);try{o.pushState(d,"",g)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;l.location.assign(g)}i&&a&&a({action:u,location:P.location,delta:1})}function m(k,f){u=lt.Replace;let s=bi(P.location,k,f);c=p();let d=aa(s,c),g=P.createHref(s);o.replaceState(d,"",g),i&&a&&a({action:u,location:P.location,delta:0})}function v(k){let f=l.location.origin!=="null"?l.location.origin:l.location.href,s=typeof k=="string"?k:jc(k);return s=s.replace(/ $/,"%20"),X(f,"No window.location.(origin|href) available to create URL for href: "+s),new URL(s,f)}let P={get action(){return u},get location(){return e(l,o)},listen(k){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(ua,x),a=k,()=>{l.removeEventListener(ua,x),a=null}},createHref(k){return t(l,k)},createURL:v,encodeLocation(k){let f=v(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:m,go(k){return o.go(k)}};return P}var sa;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sa||(sa={}));function I1(e,t,n){return n===void 0&&(n="/"),T1(e,t,n,!1)}function T1(e,t,n,r){let l=typeof t=="string"?dn(t):t,i=Uc(l.pathname||"/",n);if(i==null)return null;let o=Mc(e);N1(o);let u=null;for(let a=0;u==null&&a<o.length;++a){let c=$1(i);u=D1(o[a],c,r)}return u}function Mc(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,u)=>{let a={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(X(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=It([r,a.relativePath]),p=n.concat(a);i.children&&i.children.length>0&&(X(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Mc(i.children,t,p,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:j1(c,i.index),routesMeta:p})};return e.forEach((i,o)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))l(i,o);else for(let a of Dc(i.path))l(i,o,a)}),t}function Dc(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=Dc(r.join("/")),u=[];return u.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&u.push(...o),u.map(a=>e.startsWith("/")&&a===""?"/":a)}function N1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:M1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const z1=/^:[\w-]+$/,R1=3,L1=2,O1=1,F1=10,q1=-2,ca=e=>e==="*";function j1(e,t){let n=e.split("/"),r=n.length;return n.some(ca)&&(r+=q1),t&&(r+=L1),n.filter(l=>!ca(l)).reduce((l,i)=>l+(z1.test(i)?R1:i===""?O1:F1),r)}function M1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function D1(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let u=0;u<r.length;++u){let a=r[u],c=u===r.length-1,p=i==="/"?t:t.slice(i.length)||"/",x=fa({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},p),h=a.route;if(!x&&c&&n&&!r[r.length-1].route.index&&(x=fa({path:a.relativePath,caseSensitive:a.caseSensitive,end:!1},p)),!x)return null;Object.assign(l,x.params),o.push({params:l,pathname:It([i,x.pathname]),pathnameBase:Q1(It([i,x.pathnameBase])),route:h}),x.pathnameBase!=="/"&&(i=It([i,x.pathnameBase]))}return o}function fa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=U1(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),u=l.slice(1);return{params:r.reduce((c,p,x)=>{let{paramName:h,isOptional:m}=p;if(h==="*"){let P=u[x]||"";o=i.slice(0,i.length-P.length).replace(/(.)\/+$/,"$1")}const v=u[x];return m&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function U1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),qc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,u,a)=>(r.push({paramName:u,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function $1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Uc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function B1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?dn(e):e;return{pathname:n?n.startsWith("/")?n:A1(n,t):t,search:K1(r),hash:Y1(l)}}function A1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function li(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function W1(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function V1(e,t){let n=W1(e);return t?n.map((r,l)=>l===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function H1(e,t,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=dn(e):(l=bn({},e),X(!l.pathname||!l.pathname.includes("?"),li("?","pathname","search",l)),X(!l.pathname||!l.pathname.includes("#"),li("#","pathname","hash",l)),X(!l.search||!l.search.includes("#"),li("#","search","hash",l)));let i=e===""||l.pathname==="",o=i?"/":l.pathname,u;if(o==null)u=n;else{let x=t.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),x-=1;l.pathname=h.join("/")}u=x>=0?t[x]:"/"}let a=B1(l,u),c=o&&o!=="/"&&o.endsWith("/"),p=(i||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||p)&&(a.pathname+="/"),a}const It=e=>e.join("/").replace(/\/\/+/g,"/"),Q1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),K1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Y1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function G1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $c=["post","put","patch","delete"];new Set($c);const X1=["get",...$c];new Set(X1);/**
 * React Router v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function er(){return er=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},er.apply(this,arguments)}const Xo=C.createContext(null),Z1=C.createContext(null),_l=C.createContext(null),Il=C.createContext(null),qt=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Bc=C.createContext(null);function Tl(){return C.useContext(Il)!=null}function Ac(){return Tl()||X(!1),C.useContext(Il).location}function Wc(e){C.useContext(_l).static||C.useLayoutEffect(e)}function J1(){let{isDataRoute:e}=C.useContext(qt);return e?dp():b1()}function b1(){Tl()||X(!1);let e=C.useContext(Xo),{basename:t,future:n,navigator:r}=C.useContext(_l),{matches:l}=C.useContext(qt),{pathname:i}=Ac(),o=JSON.stringify(V1(l,n.v7_relativeSplatPath)),u=C.useRef(!1);return Wc(()=>{u.current=!0}),C.useCallback(function(c,p){if(p===void 0&&(p={}),!u.current)return;if(typeof c=="number"){r.go(c);return}let x=H1(c,JSON.parse(o),i,p.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:It([t,x.pathname])),(p.replace?r.replace:r.push)(x,p.state,p)},[t,r,o,i,e])}function ep(){let{matches:e}=C.useContext(qt),t=e[e.length-1];return t?t.params:{}}function tp(e,t){return np(e,t)}function np(e,t,n,r){Tl()||X(!1);let{navigator:l}=C.useContext(_l),{matches:i}=C.useContext(qt),o=i[i.length-1],u=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=Ac(),p;if(t){var x;let k=typeof t=="string"?dn(t):t;a==="/"||(x=k.pathname)!=null&&x.startsWith(a)||X(!1),p=k}else p=c;let h=p.pathname||"/",m=h;if(a!=="/"){let k=a.replace(/^\//,"").split("/");m="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let v=I1(e,{pathname:m}),P=up(v&&v.map(k=>Object.assign({},k,{params:Object.assign({},u,k.params),pathname:It([a,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?a:It([a,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&P?C.createElement(Il.Provider,{value:{location:er({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:lt.Pop}},P):P}function rp(){let e=fp(),t=G1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:l},n):null,null)}const lp=C.createElement(rp,null);class ip extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(qt.Provider,{value:this.props.routeContext},C.createElement(Bc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function op(e){let{routeContext:t,match:n,children:r}=e,l=C.useContext(Xo);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(qt.Provider,{value:t},r)}function up(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,u=(l=n)==null?void 0:l.errors;if(u!=null){let p=o.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);p>=0||X(!1),o=o.slice(0,Math.min(o.length,p+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let x=o[p];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(c=p),x.route.id){let{loaderData:h,errors:m}=n,v=x.route.loader&&h[x.route.id]===void 0&&(!m||m[x.route.id]===void 0);if(x.route.lazy||v){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((p,x,h)=>{let m,v=!1,P=null,k=null;n&&(m=u&&x.route.id?u[x.route.id]:void 0,P=x.route.errorElement||lp,a&&(c<0&&h===0?(v=!0,k=null):c===h&&(v=!0,k=x.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,h+1)),s=()=>{let d;return m?d=P:v?d=k:x.route.Component?d=C.createElement(x.route.Component,null):x.route.element?d=x.route.element:d=p,C.createElement(op,{match:x,routeContext:{outlet:p,matches:f,isDataRoute:n!=null},children:d})};return n&&(x.route.ErrorBoundary||x.route.errorElement||h===0)?C.createElement(ip,{location:n.location,revalidation:n.revalidation,component:P,error:m,children:s(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):s()},null)}var Vc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vc||{}),sl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(sl||{});function ap(e){let t=C.useContext(Xo);return t||X(!1),t}function sp(e){let t=C.useContext(Z1);return t||X(!1),t}function cp(e){let t=C.useContext(qt);return t||X(!1),t}function Hc(e){let t=cp(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function fp(){var e;let t=C.useContext(Bc),n=sp(sl.UseRouteError),r=Hc(sl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function dp(){let{router:e}=ap(Vc.UseNavigateStable),t=Hc(sl.UseNavigateStable),n=C.useRef(!1);return Wc(()=>{n.current=!0}),C.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,er({fromRouteId:t},i)))},[e,t])}function Qc(e){X(!1)}function pp(e){let{basename:t="/",children:n=null,location:r,navigationType:l=lt.Pop,navigator:i,static:o=!1,future:u}=e;Tl()&&X(!1);let a=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:a,navigator:i,static:o,future:er({v7_relativeSplatPath:!1},u)}),[a,u,i,o]);typeof r=="string"&&(r=dn(r));let{pathname:p="/",search:x="",hash:h="",state:m=null,key:v="default"}=r,P=C.useMemo(()=>{let k=Uc(p,a);return k==null?null:{location:{pathname:k,search:x,hash:h,state:m,key:v},navigationType:l}},[a,p,x,h,m,v,l]);return P==null?null:C.createElement(_l.Provider,{value:c},C.createElement(Il.Provider,{children:n,value:P}))}function xp(e){let{children:t,location:n}=e;return tp(eo(t),n)}new Promise(()=>{});function eo(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,l)=>{if(!C.isValidElement(r))return;let i=[...t,l];if(r.type===C.Fragment){n.push.apply(n,eo(r.props.children,i));return}r.type!==Qc&&X(!1),!r.props.index||!r.props.children||X(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=eo(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.26.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const hp="6";try{window.__reactRouterVersion=hp}catch{}const gp="startTransition",da=df[gp];function mp(e){let{basename:t,children:n,future:r,window:l}=e,i=C.useRef();i.current==null&&(i.current=E1({window:l,v5Compat:!0}));let o=i.current,[u,a]=C.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},p=C.useCallback(x=>{c&&da?da(()=>a(x)):a(x)},[a,c]);return C.useLayoutEffect(()=>o.listen(p),[o,p]),C.createElement(pp,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:o,future:r})}var pa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(pa||(pa={}));var xa;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xa||(xa={}));const vp={pages:{1:{text:`Нещо не е наред...
        Да, нещо не е наред — усещаш го още преди да си се събудил напълно. Сякаш вместо върху познатия сламеник в горската си колиба сега лежиш някъде другаде. Но това е невъзможно, казваш си ти. Как бих могъл да се пренеса на друго място? По вълшебство ли?
  
        И отваряш очи.
        
        В следващия миг скачаш от разхвърляното легло и се оглеждаш смаяно. Този път предчувствието не те е излъгало. Наистина си попаднал другаде — в някаква непозната схлупена колиба с едно-единствено зацапано прозорче, през което едва се процеждат утринните лъчи.
        
        Що за дяволия? Как си се озовал тук?`,choices:[{text:"Почесваш се озадачено по тила, после излизаш от колибата и попадаш на 85. ",nextPage:85}]},2:{text:"— Чакай сега да видим с какво разполагаме — промърморва Гадолини и започва да рови из торбата.",choices:[{text:"Ако имаш стоножка в бурканче, мини на 113. ",nextPage:113,requiresItem:{item:"centipede",quantity:1}},{text:"Ако имаш лула на мира, продължи на 159. ",nextPage:159,requiresItem:{item:"pipe",quantity:1}},{text:"Ако имаш царевица, прехвърли се на 192. ",nextPage:192,requiresItem:{item:"corn",quantity:1}},{text:"Ако нямаш нищо от изброеното, попадаш на 203. ",nextPage:203}],moreText:"А ако имаш два или три от тези предмети, избери с кой си готов да се разделиш и премини на съответния епизод."},3:{text:`— Абе, ще ни излапат с парцалите, като не се вслушвате в гласа на разума — мърмори Хухавел и с усилие гази напред.

        А наоколо главите на блатните таласъми идват все по-близо. Внезапно един от тях отваря уста и изрича с квакащ глас:
        
        — Какви сте вие, добри хора, и по каква работа минавате през нашето блато?
        
        Какво ще му отговориш? `,choices:[{text:"Че сте търговци — мини на 20.  ",nextPage:20},{text:"Че сте мирни пътници — продължи на 35. ",nextPage:35},{text:"Че сте отряд командоси, тръгнали на тайна акция срещу таласъмите на Дървеняк Първи — попадаш на 50. ",nextPage:50},{text:"Че не е тяхна работа — прехвърли се на 66. ",nextPage:66}]},4:{text:`— Бях огнедишащ, обаче вече не съм — въздъхва змеят. — Остарях, изнемощях… На, гледай!
        
        Той разтваря широко грамадната си паст и почва да съска като кипнал чайник, но въпреки всички усилия от гърлото му излитат само две-три облачета пушек.
        
        — А пък бях страшен звяр — тъжно клати глава змеят. — Ако ме видят сега, за смях ще стана. Затуй съм се заврял под земята — да не ми гледат срама.
        
        — Това е защото не гледаш научно на нещата! — упреква го Хухавел и се обръща към теб. — Шефе, дай една царевица!`,choices:[{text:"Ако имаш царевица и се съгласиш да я дадеш на Хухавел, мини на 23. ",requiresItem:{item:"corn",quantity:1},removeFromInventory:{item:"corn",quantity:1},nextPage:23},{text:"В противен случай продължи на 45. ",nextPage:45}]},5:{text:`— Тишина! — извикваш ти. — След като сте ме избрали за външен министър, чуйте какво ще ви кажа. Сатанинските планове на Дървеняк не бива да се осъществят в никакъв случай. И с това ще се заема лично аз. Още утре потеглям към новия замък на таласъмите. Искам в ранни зори насред селото да се явят всички доброволци за участие в тази опасна, но почетна мисия.
        
        Чукундуртите изревават възторжено.
        
        — Жална им майка на таласъмите! — коментира някой до теб. — Ще се оталасъмчат набързо.
        
        Друг перва министър-предателя по главата.
        
        — Видя ли бе? Това се казва министър, а не предател като тебе. Ако не беше той, как щяхме да разкрием плановете на Дървеняк?
        
        През целия следобед настроението в селото е тържествено. Чукундуртите те разнасят на ръце и пеят революционни песни. Привечер предлагат да те настанят като скъп гост в най-хубавата колиба. Обещават дори да ти осигурят течаща вода и централно отопление.
        
        Силно си изненадан, че в това село има такива модерни удобства, но какво ли не може да се очаква от чукундуртите. Решавай сега каква колиба ще избереш.`,choices:[{text:"С течаща вода и централно отопление — мини на 26. ",nextPage:26},{text:"Само с течаща вода — продължи на 58. ",nextPage:58},{text:"Само с централно отопление — попадаш на 91. ",nextPage:91},{text:"Без такива глезотии — прехвърли се на 109. ",nextPage:109}]},6:{text:"Имал ли си нещастието преди малко да бъдеш ранен с вилица в ръката?",choices:[{text:"Да — мини на 230. ",nextPage:230,requiresCondition:{condition:"injuredWithFork"}},{text:"Не — продължи на 284. ",nextPage:284,requiresCondition:{condition:"healthy"}}]},7:{text:"Минавал ли си вече по този път?",choices:[{text:"Да — продължи на 33. ",nextPage:33,visitedPages:8},{text:"Не — прехвърли се на 8. ",nextPage:8}]},8:{text:`Без колебание повеждаш дружината си по лявото разклонение. Може и да са прави чукундуртите — все пак гъбената чорбица е хубаво нещо. Скоро пътят започва постепенно да завива надясно и навлиза в рядка горичка.
        
        — По такива места растат най-хубавите гъби — развълнувано обявява Бабаитко. — Пък и камъкът сигурно не лъжеше. Слушай, шефе, дай да потърсим. Тя работата, няма да избяга.`,choices:[{text:"Ако се съгласиш да потърсите гъби, мини на 24. ",nextPage:24},{text:"Ако не искаш да губиш време за подобни глупости, продължи на 49. ",nextPage:49}]},9:{text:`— Аман от суха вода! — ядосва се таласъмът и запокитва шишенцето в кладенеца. — Вие подигравате ли ми се? Марш веднага оттук! Никаква вода за вас!
        
        — Дай да му опаля един, бе шефе! — моли се Бабаитко.`,choices:[{text:"Ако му разрешиш да го стори, мини на 208. ",nextPage:208},{text:"Ако се откажеш от водата и продължиш пътешествието, мини на 177. ",nextPage:177}]},10:{text:"О, любезний читателю! С това свое решение ти показа, че наистина в гърдите ти бие сърце на чукундурт. Не ще и дума, очаква те трудна, но славна съдба. Тепърва ще бъдеш оплюван всекидневно от целокупния чукундуртски народ. Ако издържиш на изпитанията достатъчно дълго, подир време току-виж си станал министър на простите работи. Но така или иначе това вече е съвсем друга история. Твоето приключение привършва дотук.",choices:[],end:!0},11:{text:"Добре, но как да му помогнеш? Сега е моментът да провериш с какво разполагаш.",choices:[{text:"Ако имаш чифт вехти панталони и искаш да ги дадеш на Мишемориус, мини на 34. ",nextPage:34,requiresItem:"oldTrousers",removeFromInventory:{item:"oldTrousers",quantity:1}},{text:"Ако имаш шишенце с универсален разтворител и го използваш, за да отлепиш панталоните му от стола, продължи на 48. ",nextPage:48,requiresItem:"bottleOfSolvent",removeFromInventory:{item:"bottleOfSolvent",quantity:1}},{text:"А ако нямаш нито едното, нито другото, прехвърли се на 87. ",nextPage:87}]},12:{text:`Щом отхапваш парченце от жълтата гъба, по цялото ти тяло пробягва непоносим сърбеж и виждаш как короните на дърветата стремително падат насреща ти. Не! Дърветата са неподвижни, но самият ти си израснал невероятно, тъй че сега главата ти се подава над върхарите им.
        
        — Леле, шефе! — уплашено подвиква Фърчилан. — Какво стана? Ами че в тоя вид хич не ставаш за тайна мисия! Ще те зърнат отдалече.
        Уви, Фърчилан е прав. Ще трябва да се откажеш от приключението… освен ако рискуваш още веднъж да опиташ някоя от вълшебните гъби. Друга възможност просто нямаш. Коя от гъбите ще избереш? `,choices:[{text:"Синя — продължи на 57. ",nextPage:57},{text:"Червена — попадаш на 29. ",nextPage:29},{text:"Зелена — прехвърли се на 200. ",nextPage:200},{text:"Черна — отгърни на 53. ",nextPage:53}]},13:{text:`— Хвърляй царевицата, шефе! — отчаяно се провиква Гадолини.
        Разбираш гениалната му идея и незабавно хвърляш царевицата на стъпалата, сетне продължаваш да бягаш надолу.
        Колко кочана царевица си хвърлил? `,choices:[{text:"Един — мини по свой избор на 217, 227 или 242.",nextPage:[217,227,242],requiresItem:{item:"corn",quantity:1},removeFromInventory:{item:"corn",quantity:1}},{text:"Два — продължи на 206 или 259.",nextPage:[206,259],requiresItem:{item:"corn",quantity:2},removeFromInventory:{item:"corn",quantity:2}},{text:"Три — прехвърли се на 250.",nextPage:250,requiresItem:{item:"corn",quantity:3},removeFromInventory:{item:"corn",quantity:3}}]},14:{text:"Не, това блато никак не ти се нрави. Повеждаш обратно дружината си и един час по-късно наближавате… всъщност какво наближавате?",choices:[{text:"Кръстопътя — мини на 75.",nextPage:75},{text:"Сливането на левия и средния път — продължи на 40.",nextPage:40}]},15:{text:`Щом отваряш торбата, отвътре добродушно те поглежда патката на Хухавел.

        — Къш, птицо проклета! — крясваш ти, после се обръщаш към чукундуртите и свирепо питаш: — Какво търси тук това животно?

        — Не е животно, а птица, сам го каза преди малко — поправя те Хухавел. — Турнах я вътре, щото иначе е много неудобно. Нали разбираш, шефе, патката под мишница и торбата на другото рамо. Хич не върви, значи.

        Да, но се оказва, че патката не разбира от дисциплина. Изкълвала е двата домата и тъкмо се готви да начене царевицата.

        — И най-умният чукундурт пак си остава чукундурт — въздъхваш ти. — Стига толкова! Отсега нататък аз ще нося торбата.`,choices:[{text:"Отбележи си загубата на двата домата и премини на 138.",nextPage:138,removeFromInventory:{item:"tomato",quantity:2}}]},16:{text:"— Чакай сега да видим с какво разполагаме — промърморва Фърчилан и започва да рови из торбата.",choices:[{text:"Ако имаш домат, мини на 78.",nextPage:78,requiresItem:{item:"tomato",quantity:1},removeFromInventory:{item:"tomato",quantity:1}},{text:"Ако имаш диня, продължи на 126.",nextPage:126,requiresItem:{item:"watermelon",quantity:1},removeFromInventory:{item:"watermelon",quantity:1}},{text:"Ако нямаш нищо от изброеното, попадаш на 203.",nextPage:203}],moreText:"А ако имаш и двете, избери с кое си готов да се разделиш и премини на съответния епизод."},17:{text:`Щом отхапваш от синята гъба, мигновено те побиват ледени тръпки и сякаш стремително пропадаш надолу. Не! Просто се смаляваш! За броени секунди изчезваш сред тревата.

        След упорито ровене чукундуртите най-сетне те откриват. Бабаитко те поема върху дланта си и укоризнено поклаща глава.

        — Е, каква стана тя, шефе? Май мисията отива към провал, щото в тоя вид не ми е ясно как ще се биеш с таласъмите.

        Уви, Бабаитко е прав. Ще трябва да се откажеш от приключението… освен ако рискуваш още веднъж да опиташ някоя от вълшебните гъби. Друга възможност просто нямаш. Коя от гъбите ще избереш?`,choices:[{text:"Жълта — продължи на 67.",nextPage:67},{text:"Червена — попадаш на 29.",nextPage:29},{text:"Зелена — прехвърли се на 82.",nextPage:82},{text:"Черна — отгърни на 53.",nextPage:53}]},18:{text:"След доста усилия импровизираната манерка е готова.",choices:[{text:"Отбележи си, че нямаш вече диня и премини на 194.",nextPage:194,removeFromInventory:{item:"watermelon",quantity:1}}]},19:{text:`Щом те виждат отново в колибата, министрите моментално падат на колене и започват да блъскат чела в земята.

        — Върна се, великодушни наш благодетелю!

        — Спасителю!

        — Бащице!

        — Значи ще станеш министър на външните работи, нали!`,choices:[{text:"Продължи на 102.",nextPage:102}]},20:{text:`— Еха-а-а-а, търговци! — възторжено се провиква таласъмът. — Грабители на народа значи! Кърлежи! Кръвопийци! Напред, братя таласъми! Да ограбим награбеното от народа!

        И блатните таласъми се устремяват към вас. Предводителят им спира на няколко крачки от вас и пита:

        — Е, ще предадете ли доброволно цялото си имущество, или да ви принудим със сила?`,choices:[{text:"— Аз викам да им го дадем, шефе — обажда се Хухавел.",nextPage:28},{text:"— Не, да се бием — възразява Бабаитко.",nextPage:41},{text:"— По-добре да бягаме — предлага Фърчилан.",nextPage:54}]},21:{text:"Когато се свестяваш, лежиш в тясна килия, а около теб седят унило четиримата чукундурти.",choices:[{text:"Попадал ли си вече в затвора?",nextPage:285,requiresCondition:"jailed"},{text:"Не — продължи на 132.",nextPage:132}]},22:{text:`Бабаитко гордо се изпъчва и пристъпва към вехтошаря.
      
          — Слушай сега, старче. Обмислих нещата и гледай сега как ще уредим сделката. Ти, значи, ми даваш всичките тези вехтории.
      
          Настава тишина. Старчето изчаква малко, после пита:
      
          — А на мен каква ще ми е ползата?
      
          Бабаитко свива едрия си юмрук и го поднася към носа му.
      
          — Ползата ще ти е в това, че няма да те опердаша. Разбра ли?
      
          — О, такава ли била работата? — усмихва се старчето. — Ами тъй кажи, бе човек! Заповядай, заповядай! Чакай само да ти постеля това килимче, че да не стъпваш по прашната земя.
      
          И без да се бави, вехтошарят пъргаво разпъва пред себе си килимчето — кръгло и абсолютно черно. Бабаитко ви хвърля през рамо победоносен поглед, после пристъпва напред… и с ужасен писък пропада в земята.
      
          Няколко секунди стоиш вкаменен от изумление. Сетне осъзнаваш — това не е никакво килимче, а преносима дупка.
      
          — Помо-о-о-ощ! — долита от земните недра отчаяният рев на Бабаитко. — Измъкнете ме оттук!
      
          — Като много знаеш да се репчиш, там ще стоиш — подвиква отгоре старчето. — Ей сега пак ще навия дупката и ще си останеш завинаги под земята.
      
          С много молби и увещания най-сетне успявате да се споразумеете — срещу два кочана царевица старчето ви разрешава да измъкнете Бабаитко. Щом излиза отново на бял свят, едрият чукундурт се отдръпва засрамено настрани.
      
          Отбележи си загубата на двата кочана царевица и избери на кого ще повериш да води сделката.
      `,removeFromInventory:{item:"corn",quantity:2},choices:[{text:"Гадолини — продължи на 47.",nextPage:47},{text:"Хухавел — попадаш на 61.",nextPage:61},{text:"Фърчилан — прехвърли се на 94.",nextPage:94},{text:"Сам ще водиш сделката — отгърни на 119.",nextPage:119}]},23:{text:`— Слушай сега — почва да обяснява Хухавел. — Можеш ли да лапнеш малко жарава от огъня?
      
          — Мога, как да не мога — кимва змеят и за доказателство налапва половината жарава.
      
          — Ха сега лапни и това — подава му царевицата Хухавел. — И чакай да видиш какво ще стане.
      
          В течение на една минута не се случва нищо. Сетне, по всички закони на науката, царевицата се превръща в пуканки с оглушителен трясък. Ошашавен, змеят отскача настрани и почва да клати глава като куче, лапнало пчела.
      
          — Сега е моментът! — провиква се Фърчилан. — Да бягаме!
      
          — Чакайте! — протестира Хухавел. — Недейте да бягате! Това е недоразумение. Всичко ще обясня.
      
          Кого ще послушаш?
`,choices:[{text:"Фърчилан — мини на 32.",nextPage:32},{text:"Хухавел — продължи на 56.",nextPage:56}]},24:{text:`
          Или все пак камъкът ви е излъгал, или просто от вас не стават гъбари. След дълго лутане из гората най-сетне откривате само няколко гъби. При това странни — едри и шарени. Всяка в различен цвят — жълта, синя, зелена, червена и черна. 
          Бабаитко боязливо оглежда чудноватите гъби и прошепва: 
          — Не ми харесва тая работа, шефе. Гъбите май са вълшебни. 
          — Абе, стига си говорил глупости! — прекъсва го Фърчилан. — Дай сега бързичко да си ги опечем. 
          — И като станеш после на жаба, ще видиш едни гъби — мрачно заявява Гадолини. — Вие както щете, ама аз вълшебни гъби не ям. 
          Гадолини определено е прав. Дори и да не са вълшебни, гъбите може да са отровни. Затова категорично забраняваш всякакво ядене. 
          Имаш ли книжката „Вълшебните гъби по нашите земи“? 
          `,choices:[{text:"Да — мини на 63. ",nextPage:63,requiresItem:{item:"book",quantity:1}},{text:"Не — продължи на 98. ",nextPage:98}]},25:{text:`
            Когато огледалцето му казва, че е най-красив на земята, таласъмът изпада във възторг. Без повече да ви обръща внимание, той се отдръпва настрани с безценната придобивка.  
            `,choices:[{text:"Напълваш съдинката си с вода и преминаваш на 177. ",addToInventory:[{item:"water",quantity:1}],nextPage:177}]},26:{text:`
            Още щом влизаш в колибата, разбираш какво са имали предвид, като говореха за централно отопление — огнището се намира точно в средата. Обаче колкото и да се оглеждаш, не виждаш никъде нито капка вода. 
— Къде ви е течащата вода? — обръщаш се ти към министъра на разните работи. 
Той размахва ръка нагоре. 
— Виждаш ли я онази дупка горе на тавана? Като завали, през нея ще ти тече колкото искаш. 
— Чукундуртска ви работа — заявяваш ти и се приготвяш за сън. 
Уви, нощта не е твърде приятна. Малко преди полунощ започва да вали като из ведро, а проклетата дупка се намира точно над огнището. Естествено, огънят изгасва и ти чак до сутринта зъзнеш, омотан като пашкул в парцаливите завивки. Когато се развиделява, дъждът спира, но злото вече е сторено — гърлото те боли и кихаш на поразия.
            `,choices:[{text:" Отбележи си, че си настинал и премини на 155.  ",nextPage:155}]},27:{text:`
      — Я, пак идат нашите приятели! — радостно ви посрещат блатните таласъми. — Ама вие какво така само обикаляте насам-натам? 
      — Тя, работата на командосите, не е лесна — гордо заявява Бабаитко. 
      И вие спокойно прекосявате блатото. В коя посока отивате? 
            `,choices:[{text:" Напред, където би трябвало да е замъкът на таласъмите — мини на 144. ",nextPage:144},{text:" Обратно към кръстопътя — продължи на 171. ",nextPage:171}]},28:{text:`
      Няма как, предаваш на старшия таласъм всичките си придобивки. 
— Ехе-е-е-е! — радостно възкликва той. — Я гледай колко богатства са натрупали експлоататорите на трудовия народ! А сега да ми се махате от главата! Вървете напред, оттук нататък става по-плитко. 
И наистина, скоро започвате да излизате от блатото. 
В коя посока вървите? 
            `,emptyInventory:!0,choices:[{text:" Напред, където би трябвало да е замъкът на таласъмите — мини на 144. ",nextPage:144},{text:" Обратно към кръстопътя — продължи на 171. ",nextPage:171}]},29:{text:`
      Щом отхапваш от червената гъба, за миг ти се завива свят, обзема те чувство на неописуема лекота… и после виждаш как чукундуртите стремително се отдалечават надолу. Но всъщност самият ти летиш нагоре в небето, където лекият ветрец те подема и те отнася надалеч. Уви, експериментите са завършили неуспешно — още дълги дни ще се носиш из облаците, докато магията престане и постепенно се спуснеш на земята. 
Така или иначе твоето приключение завършва дотук. 
            `,choices:[],end:!0},30:{text:`
      Продължавате напред по коридора и след малко се озовавате в огромно подземие, пълно с бъчви. Наоколо се носи тежкият дъх на вино. 
— Винце, шефе, винце! — развълнувано възкликва Бабаитко. — Дай да си пийнем малко! 
— За кураж — подкрепя го Фърчилан. 
— И блясък в очите — допълва Хухавел. 
Поглеждаш ги строго. 
— Никакво пиянство не разрешавам при изпълнение на служебните задължения! 
— Е-е-е, що си такъв, бе шефе? — въздъхва Гадолини. — Ние само по мъничко. Обещавам ти да пием с мярка. 
            `,choices:[{text:"Ако разрешиш на чукундуртите да пийнат с мярка, мини на 253. ",nextPage:253},{text:"Ако забраниш категорично, продължи на 261. ",nextPage:261}]},31:{text:`
      — Хубаво де, стига сте хленчили! — викваш ти с цяло гърло, за да надвикаш плача на уплашените чукундурти. — Ама обяснете все пак… 
— Министрите ще ти обяснят! — провиква се тълпата и с възторжени възгласи те грабва на ръце. 
Преди да се опомниш, вече седиш в някаква колиба, а насреща ти са застанали в почтителни пози двамата белобради чукундурти. Зад тях смутено се свива трети — по-дрипав и по-мръсен от всички останали. 
— Кои сте вие? — питаш ти с леко нетърпение. — Ще ми обясни ли най-сетне някой какво става? 
— О, спасителю наш, аз съм министърът на разните работи — отговаря първият старец. 
— А пък аз съм министърът на другите работи — покланя се до земята вторият, при което неволно си застъпва брадата и се захлупва по нос. 
Тъй като третият гузно мълчи, ти отново питаш: 
— Ами онзи зад вас? 
— А, остави го — небрежно махва с ръка министърът на разните работи. — Той е министър-предател. 
— Да не искаш да кажеш „министър-председател“? 
— А, не, точно министър-предател — обажда се министърът на другите работи, който вече е успял да се изправи. 
— Че за какво ви е министър-предател? — изненадваш се ти. 
— О, много е важен, благодетелю! — обяснява министърът на разните работи. — Тъй и тъй нещата не вървят. Ако си нямаме министър-предател, по кого ще плюе народът? 
— Е, ваша си работа — свиваш рамене ти. — А сега кой ще ми обясни от какво трябва да ви спасявам. 
— Обяснявай ти — обръща се към колегата си министърът на другите работи. — Обясненията спадат към разните работи. 
— А, не, ти обяснявай! — сопва се онзи. — Обясненията са към другите работи. 
— Слушайте, ако не получа незабавно обяснение, ставам и си тръгвам — заплашително изричаш ти. — Пък да видим дали после и тримата няма да ви направят министър-предатели. 
Заплахата явно е много страшна, защото тримата почват да обясняват един през друг: 
— Таласъмите! 
— Те, те! Пратиха ни дипломатическа нота! 
— Искат да ни оберат! 
— Данъци! 
— Дървеняк Първи! 
— Момент! — намесваш се ти. — Какъв е тоя Дървеняк Първи? Имаше навремето един Тиквеняк Първи, обаче той отдавна е на онзи свят. 
— А пък Дървеняк е негов син — плахо обяснява министърът на разните работи. — Обявил се е за цар на таласъмите. 
— И е изградил нов замък вместо онзи, дето ти го разруши — добавя министърът на другите работи. 
— Ама под земята, та никой не го знае къде се намира — обажда се министър-предателят. 
Разперваш ръце. 
— Е, хубаво. Ами аз с какво мога дави помогна? 
— Ще ни станеш министър на външните работи! — възкликват тримата в хор. — Като предприемеш дипломатически мерки, Дървеняк ще се уплаши от теб и няма да ни граби. 
            `,choices:[{text:"Ако си съгласен да станеш чукундуртски министър на външните работи, мини на 102. ",nextPage:102},{text:"Ако откажеш, продължи на 121. ",nextPage:121}]},32:{text:`
      — Сега не е моментът за обяснения! — викваш ти. — Не виждаш ли, че щом се опомни, ще ни излапа? 
И всички хуквате… накъде впрочем? 
            `,choices:[{text:"Напред, където би трябвало да е замъкът на таласъмите — мини на 68. ",nextPage:68},{text:"Към кръстопътя — продължи на 89.  ",nextPage:89}]},33:{text:`
      Скоро наближавате горичката, където Бабаитко предлагаше да берете гъби. Е, набрахте ли? 
            `,choices:[{text:"Да — мини на 46. ",nextPage:46},{text:"Не — продължи на 71. ",nextPage:71}]},34:{text:`
      След по-малко от минута грейналият Мишемориус обува панталоните и радостно започва да подскача из стаята.              `,choices:[{text:"Отбележи си, че вече нямаш вехти панталони и продължи на 128.",removeFromInventory:{item:"oldTrousers",quantity:1},nextPage:128}]},35:{text:`
      — Мирни ли? — оглежда те подозрително таласъмът. — Те, всички така разправят, пък после се оказват я разбойници, я някакви други злодеи. С какво ще докажеш, че сте мирни пътници? 
                  `,choices:[{text:"Ако имаш лула на мира, мини на 86. ",requiresItem:"pipe",nextPage:86},{text:"В противен случай премини по свой избор на 103 или 129. ",nextPage:[103,129]}]},36:{text:`
      Отваряш торбата и се хващаш за главата. Бабаитко е нахвърлял вътре провизиите по най-калпавия начин: първо доматите, върху тях царевицата, сетне сапуна, цвеклото, динята и най-отгоре се мъдри тежката лула на мира. Естествено, доматите са станали на пюре, а динята е цепната. Налага се спешно да изядете похабените провизии. 
      — Край! — заявяваш ти. — Отсега нататък сам ще нося торбата. 
            `,choices:[{text:"Отбележи си загубата на доматите и динята, а след това премини на 138. ",removeFromInventory:[{item:"tomato",quantity:2},{item:"watermelon",quantity:1}],nextPage:138}]},37:{text:`
      Както вече бе казано, лулата на мира е издълбана от цял пън. Щом грабва тежкото дърво, Бабаитко започва да раздава свирепи удари наляво и надясно. 
      — Ха така! — пъхти едрият чукундурт. — На ти на тебе по куфалницата! А на теб по кубето! Ето ти и на теб, да не речеш, че ми се свиди. 
      Пред страховитата му ярост таласъмите безславно удрят на бяг. След минута от тях няма и следа — всички са се изпокрили в тинята. 
      — Да вървим! — нареждаш ти. — И по-бързо, че току-виж се върнали с подкрепления. 
      Продължавате напред. Постепенно блатото става по-плитко и скоро излизате на отсрещния бряг. 
      Накъде сте се отправили? 
                  `,choices:[{text:"Напред, където би трябвало да е замъкът на таласъмите — мини на 144. ",nextPage:144},{text:"Към кръстопътя — продължи на 171. ",nextPage:171}]},38:{text:`
      — Дай сапуна, шефе! — отчаяно се провиква Гадолини. 
      — Баш сега ли реши да се миеш? — изръмжава Бабаитко. 
      — Ти си трай! — срязва го Гадолини. — Давай сапуна, шефе, ако ти е мил животът! 
      Не разбираш какво иска да прави, но изпълняваш молбата му. И след миг проумяваш. Гениалният Гадолини трескаво почва да маже стъпалата със сапун. 
      — А сега бързо надолу! — подканва ви той, когато привършва. 
      Отново побягвате. Изведнъж горе се раздава трясък и трополене. Успех! Таласъмът е попаднал на хлъзгавите стъпала! Прилепвате се към стената и след секунди грамадното му туловище прелита покрай вас с невъобразима скорост. Сетне нейде отдолу долита нов трясък и настава тишина. 
            `,choices:[{text:"Продължи на 263. ",nextPage:263}]},39:{text:`
      Какво пък, тук ти избираш. Щом така си решил, попадаш право в края на приключението. А краят е следният: 
      Напускаш чукундуртите и след дълъг път се прибираш в своята колиба насред гората. През следващите дни не забелязваш нищо нередно. Но около една седмица по-късно листата на дърветата започват да пожълтяват. От изворите блика странна вода — блудкава, миризлива и съвсем суха. Разбираш, че Дървеняк Първи е осъществил зловещите планове на своя баща — да унищожи цялата гора. Уви, вече е късно да сториш каквото и да било. След още една седмица дърветата са голи като през късна есен. Гледката на загиващата гора е ужасна. С болка на сърце започваш да се приготвяш за път. Тук вече не може да се живее. Ще трябва да се преселиш другаде, а мъртвата гора ще остане завинаги царство на таласъмите. 
          `,end:!0},40:{text:`
      Спирате за кратка почивка на мястото, където се сливат левият и средният път. Накъде ще продължиш сега? 
       `,choices:[{text:`
          Напред, където би трябвало да е замъкът на таласъмите — мини на 157. 
          `,nextPage:157},{text:`
          Обратно по средния път — продължи на 141. 
          `,nextPage:141}]},41:{text:`
      — Напред, отмъстители! — провикваш се ти. — Сега ще им дадем да разберат. 
      И всички, дори плашливият Хухавел, се хвърлят в схватката. Но врагът има числено превъзходство, а освен това се бие на собствена територия. Постепенно таласъмският обръч започва да се затяга около вас. 
      И в този момент Бабаитко надава загадъчен вик: 
      — Къде е лулата на мира? 
      Имаш ли все още лула на мира? И ще я дадеш ли на Бабаитко? 
             `,choices:[{text:`
          Да — мини на 37.  
          `,requiresItem:{item:"pipe",quantity:1},nextPage:37},{text:`
          Не — продължи на 62. 
          `,nextPage:62}]},42:{text:`
      Щом хапваш парченце от зелената гъба, мигновено те обзема чувство на неописуема тежест и ти рухваш пред смаяните чукундурти. Бабаитко се опитва да те повдигне, после отчаяно махва с ръка. 
      — Е, шефе, май работата приключва дотук. Как ще се бориш срещу таласъмите, като не можеш да се държиш на краката си? 
      Уви, Бабаитко е прав. Ще трябва да се откажеш от приключението… освен ако рискуваш още веднъж да опиташ някоя от вълшебните гъби. Друга възможност просто нямаш. Коя от гъбите ще избереш? 
             `,choices:[{text:`
          Жълта — продължи на 101.
          `,nextPage:101},{text:`
          Червена — попадаш на 112.
          `,nextPage:112},{text:`
          Синя — прехвърли се на 125.
          `,nextPage:125},{text:`
          Черна — отгърни на 53. 
          `,nextPage:53}].filter(e=>e.nextPage!==null)},43:{text:`
      Докато вървите напред през гората, мракът наоколо се сгъстява. Повява се хладен ветрец, нейде между дърветата се обажда бухал. 
      — Ама и ние накъде сме тръгнали? — плахо мърмори Хухавел. — Що ли не си стояхме у дома… 
      — Я да млъкваш! — скарва му се Бабаитко. — Че ако взема… 
      — Знам — прекъсва го Хухавел. — Ще ми опалиш един по кубето. 
      — Не позна! — ухилва се Бабаитко. — По кофата! 
      — Тихо! — прошепва изведнъж Гадолини. — Виждам светлина! 
      И наистина, отпред между дърветата потрепва червеникавата светлинка на пламъци. Отправяте се натам и след малко различавате трима таласъми, седнали край малък огън. Зад тях се тъмнее широкият вход на пещера. 
      — Това трябва да е подземният замък! — шепнешком възкликва Фърчилан. — Да ги нападнем ли? 
      За разлика от друг път Бабаитко не е настроен войнствено. 
      — Ще ги нападнеш, ама като ти опалят един — възразява той. — Я го виж онзи в средата какъв е як. 
      Вярно, средният таласъм е грамаден. Щом и Бабаитко не смее да го нападне, по-добре ще е да не влизате в сражение. 
      — Остави аз да ги забаламосам, шефе — предлага Гадолини. — Такъв номер ще им врътна, че свят да им се завие. 
      — То, ако е за баламосване, и аз мога — обажда се Фърчилан. — Нека аз, шефе! 
      — Аз пък викам да ги изчакаме да заспят и тогава да се промъкнем тихичко — предлага Хухавел. 
      Чие предложение ще приемеш? 
             `,choices:[{text:`
          На Гадолини — мини на 2. 
          `,nextPage:2},{text:`
          На Фърчилан — продължи на 16.  
          `,nextPage:16},{text:`
          На Хухавел — прехвърли се на 60.   
          `,nextPage:60}]},44:{text:`
      Лесно е да се каже, но не е чак толкова просто да се осъществи. Нямаш представа накъде да тръгнеш. Поемаш напосоки и през целия ден се луташ из гори и пущинаци. Май съвсем си се заблудил, защото местата стават все по-непознати. 
      Пада мрак и се налага да пренощуваш в набързо струпана колиба от клони. Ала този път съдбата явно не е добре настроена към теб. Малко след полунощ от небето се посипва пороен дъжд. За сън и дума не може да става. Свит в мизерното си убежище, ти зъзнеш и напразно се мъчиш да намериш място, където да не капе вода. Призори гърлото те боли и кихаш на поразия. 
             `,choices:[{text:`
          Настинал си. Отбележи си това и премини на 99. 
          `,changeCondition:{sick:!0,healthy:!1},nextPage:99}]},45:{text:`
      — Добре бе, шефе — въздъхва Хухавел. — Ами поне лулата на мира няма ли да ми дадеш? 
             `,choices:[{text:`
          Ако имаш лула на мира и се съгласиш да я дадеш на Хухавел, мини на 76. 
          `,requiresItem:{item:"pipe",quantity:1},nextPage:76},{text:`
          В противен случай продължи на 95. 
          `,nextPage:95}]},46:{text:`
      А познаваш ли свойствата на вълшебните гъби? 
                    `,choices:[{text:`
          Да — мини на 220. 
          `,requiresItem:{item:"book",quantity:1},nextPage:220},{text:`
          Не — продължи на 59.          `,nextPage:59}]},47:{text:`
      Гадолини пристъпва напред, оглежда вехториите и уверено посочва: 
      — Взимам това, това и това. 
      И той грабва три от предметите. 
      — Чакай, чакай — хваща го старчето за наметалото. — Ами какво ще ми платиш? 
      — Ще ти платя бе, човек, няма страшно! — успокоява го Гадолини. — Все ще се спазарим някак. Ама знаеш ли какво? Нещо не ми харесват тия трите стоки. Я си ги вземи, пък ми дай ето онези три. 
      Речено-сторено. Гадолини пъргаво оставя трите предмета и грабва вместо тях нови три. Сетне понечва да си тръгне. Старчето отново се вкопчва в наметалото му. 
      — Стой! Първо трябва да ми платиш! 
      — Какво да ти платя? — изненадва се Гадолини. — Нали срещу тези трите неща ти дадох онези три. Натурална размяна, значи. Пито-платено, дето се вика. 
      — Ама ти и онези не си ми платил! — отчаяно виква старчето. 
      — Че как да ти ги платя, като не съм ги взел? — възразява Гадолини. 
      — Нещо не е наред тук, така да знаеш! — сърдито заявява старчето и почва да пресмята нещо на пръсти, като си шепне тихичко. 
      Гадолини го оставя да умува и гордо се приближава към теб, за да покаже спечеленото — чифт вехти панталони, стоножка в бурканче и книжката „Вълшебните гъби по нашите земи“. 
      Пред вас старчето продължава да шепне тихичко и да се чеше с всичка сила по главата, но накрая унило махва с ръка, после се обръща към теб. 
      — Че ме измамихте, измамихте ме, ама не мога да разбера как. Нейсе. Ела да направим още една сделка, обаче тоя път нищо не давам, преди да платиш. 
             `,addToInventory:[{item:"book",quantity:1},{item:"centipede",quantity:1},{item:"oldTrousers",quantity:1}],choices:[{text:`
          Ако искаш да търгуваш с вехтошаря, мини на 119. 
          `,nextPage:119},{text:`
          Ако смяташ, че е крайно време да си тръгвате, прехвърли се на 158. 
          `,nextPage:158}]},48:{text:`
      Налага се да употребиш целия разтворител, но само след десет минути Мишемориус е отлепен от стола и радостно подскача из стаята. 
      `,choices:[{text:`
          Отбележи си, че вече нямаш разтворител. Ако искаш, можеш да запазиш празното шишенце. След това премини на 128. 
          `,removeFromInventory:{item:"bottleOfSolvent",quantity:1},addToInventory:[{item:"bottleEmpty",quantity:1}],nextPage:128}]},49:{text:`
      — Гъби, глупости! — скарваш се ти. — Я да вървим напред, че кой знае още колко път ни чака. 
      — Прав е шефът — подкрепя те Фърчилан. — Няма какво да се мотаем с разни гъби. 
             `,choices:[{text:`
          Премини на 172.           `,nextPage:172}]},50:{text:`
      — Брях! — зяпва блатният таласъм. — Не думайте! 
      — Ще думаме колкото си щем, щото е вярно — гордо отговаря Бабаитко. 
      — Ами като е тъй, бъдете ни скъпи гости за малко — радостно предлага таласъмът. — Нашият цар много ще се радва да ви види. Никога не е виждал командоси. 
              `,choices:[{text:`
          Ако приемеш поканата, мини на 72. 
          `,nextPage:72},{text:`
          Ако предпочиташ да откажеш, продължи на 93.          `,nextPage:93}]},51:{text:`
      Точно по пладне ти стоиш в края на ливадата край чукундуртското село. До тебе са се свили разтреперани тримата министри, но освен тях наоколо не се мярка жива душа. Всички чукундурти са се изпокрили вдън земя. Изглежда, че не ти вярват много въпреки всички ентусиазирани уверения от тази сутрин. 
      — Идат! — възкликва министър-предателят и пъргаво се укрива зад гърба ти. 
      Другите двама незабавно го избутват настрани и заемат безопасното място. Но ти не им обръщаш внимание, защото погледът ти е прикован към горичката отвъд ливадата. Измежду дърветата един след друг започват да излизат въоръжени до зъби таласъми. Тихичко подсвирваш от изненада. Трябва да са поне стотина на брой. И цялата тази сган заплашително се задава насреща ти. 
      Вече се чудиш дали да не си плюеш на петите, когато таласъмите спират на десет крачки от теб. Предводителят им се обръща с гръб към теб, размахва дебела сопа и всички други пропяват в хор: 
      — Со-о-о-о-ол! 
      Сетне настава тишина. 
      — Каква сол бе, каква сол? — уплашено подвиква министър-предателят. — Сол ли искате да ви дадем? 
      — Това е нота, тикво зелена! — обяснява водачът на таласъмите. — Дипломатическа нота, ако искаш да знаеш. 
      — И какво означава? — пита с изтънял глас министърът на другите работи. 
      — Означава, че ако до един час не ни предадете всичките си хранителни запаси, ще ви натъпчем в миша дупка. 
      — Не ща! — провиква се министърът на разните работи. — Страх ме е от мишките! 
      — Ти мълчи! — прекъсва го неговият колега и се обръща към таласъма. — Ама чакай сега, любезни, то не може така. Ако ни вземете всичко, какво ще ядем през зимата? 
      — Трънки! — изхилва се някой от ордата таласъми. 
      — И глогинки! — добавя друг. 
      — Печени! — уточнява трети. 
      Е, нещата май тръгват от зле по-зле. И за съжаление в момента всичко зависи от теб. Какво ще направиш сега? 
             `,choices:[{text:`
          Ще се съгласиш да предадеш на таласъмите всички хранителни запаси — мини на 96. 
          `,nextPage:96},{text:`
          Ще отхвърлиш претенциите им — продължи на 114.           `,nextPage:114}]},52:{text:`
      Двамата почват да си разменят през прозорчето все по-обидни реплики. Накрая надзирателят не издържа, отключва килията, нахълтва с размахана тояга… и Бабаитко го просва още с първия удар. 
      — Да бягаме! — провикваш се ти. 
      Изтичвате по къс коридор, отваряте една врата и се озовавате в нов, по-широк коридор. В едната посока той се спуска полегато към земните дълбини. От другата страна забелязваш наблизо стълбище, което води нагоре — несъмнено това е изходът. А точно срещу себе си забелязваш врата в стената на коридора. Какво ще направиш сега? 
             `,choices:[{text:`
          Ще провериш какво има зад вратата отсреща — мини на 225. 
          `,nextPage:225},{text:`
          Ще се измъкнеш по стълбището нагоре и ще се откажеш от опасното приключение — продължи на 39. 
          `,nextPage:39},{text:`
          Ще тръгнеш по коридора към вътрешността на подземния замък — попадаш на 30. 
          `,nextPage:30}]},53:{text:`
      Само това не биваше да правиш! Щом отхапваш от черната гъба, по тялото ти пробягват ледени тръпки и след броени секунди рухваш мъртъв пред ужасените погледи на чукундуртите. Това е краят на твоето приключение. 
      Лека ти пръст, доблестни храбрецо!  
             `,choices:[{text:`
          Но за да не започваш цялата история отначало, върни се на 136.`,nextPage:136}]},54:{text:`
      — Да бягаме! — провикваш се ти и повеждаш чукундуртите в отстъпление. 
      — А, бягат! — изревава водачът на блатните таласъми. — Дръжте експлоататорите, братя! 
      И цялата тумба се хвърля подир вас. 
      Сега всичко зависи от съдбата. Избери продължението — 130 или 151. 
             `,choices:[{text:`
          Mини на 130.
          `,nextPage:130},{text:`
          Mини на 151.
          `,nextPage:151}]},55:{text:`
      — Тишина! — извикваш ти. — След като сте ме избрали за външен министър, чуйте какво ще ви кажа. Сатанинските планове на Дървеняк не бива да се осъществят в никакъв случай. И с това ще се заема лично аз. Още тази сутрин потеглям към новия замък на таласъмите. Искам след половин час насред селото да се явят всички доброволци за участие в тази опасна, но почетна мисия. 
      Чукундуртите изревават възторжено. 
      — Жална им майка на таласъмите! — коментира някой до теб. — Ще се оталасъмчат набързо. 
      Друг перва министър-предателя по главата. 
      — Видя ли бе? Това се казва министър, а не предател като тебе. 
       
      През следващите десетина минути настроението в селото е тържествено. Чукундуртите те разнасят на ръце и пеят революционни песни. Но когато наближава часът за събиране на доброволците, тълпата почва да оредява. Ту един, ту друг се сеща за някаква спешна работа и изчезва между колибите. Накрая оставаш съвсем сам насред селото. И тъкмо се каниш да теглиш една ругатня по адрес на чукундуртската храброст, когато към теб се задават тримата министри, придружени от четирима млади чукундурти. 
             `,choices:[{text:`
          Продължи на 184. 
          `,nextPage:184}]},56:{text:`
      Макар че сърцето ти се свива от тревога, правиш знак на останалите да изчакат. В това време Хухавел пристъпва напред. 
      — Ще те излапам, буболечка такава! — яростно изревава змеят. — Суров ще те излапам, та ако ще да се разболея! Да ми погодиш такъв номер! 
      — Ча-ча-чакай бе, н-н-няма такава работа — заеква Хухавел. — Не разбра ли к-к-какъв номер се получи? Може и да не си огнедишащ, но ще бъдеш единственият в света картечен змей. Вече видя как става. Трябва само да си намериш отнякъде царевица — и готово! 
      Змеят зяпва от почуда. 
      — Вярно бе! Брей, имало умни хора… пардон, умни чукундурти на тоя свят. Значи картечен змей, а? Да сте живи и здрави, скъпи приятели. Хайде, вървете си със здраве. Срамота ще е да ви ям след такава услуга. 
      И вие поемате… накъде впрочем? 
             `,choices:[{text:`
          Напред, където би трябвало да е замъкът на таласъмите — мини на 81. 
          `,nextPage:81},{text:`
          Към кръстопътя — продължи на 108. 
          `,nextPage:108}]},57:{text:`
      Отхапваш от синята гъба със страх, но този път явно си имал късмет, защото след броени секунди си възвръщаш предишните размери. 
             `,choices:[{text:`
          Ако искаш да продължиш експериментите, върни се на 136.           `,nextPage:136},{text:`
          Ако предпочиташ да не рискуваш повече, мини на 154. 
          `,nextPage:154}]},58:{text:`
      Влизаш в колибата и се оглеждаш, но не виждаш никъде нито капка вода. 
      — Къде ви е течащата вода? — обръщаш се ти към министъра на разните работи. 
      Той размахва ръка нагоре. 
      — Виждаш ли я онази дупка горе на тавана? Като завали, през нея ще ти тече колкото искаш. 
      — Чукундуртска ви работа — заявяваш ти и се приготвяш за сън. 
      Уви, нощта не е твърде приятна. Малко преди полунощ започва да вали като из ведро и през дупката се изсипва истински водопад. За щастие леглото е близо до огнището. Хвърляш в огъня няколко едри цепеници, омотаваш се в парцаливите завивки и криво-ляво изкарваш до сутринта, когато дъждът спира. 
             `,choices:[{text:`
          Продължи на 155. 
          `,nextPage:155}]},59:{text:`
      Ако си успял да се снабдиш с книгата „Вълшебните гъби по нашите земи“, можеш да се консултираш с нея.  
             `,choices:[{text:`
          За целта премини на 83. `,requiresItem:{item:"book",quantity:1},nextPage:83},{text:`
          В противен случай продължи на 104. 
          `,nextPage:104}]},60:{text:`
      Не се налага да чакате дълго. Половин час по-късно таласъмите звучно хъркат край огъня и вие започвате да се промъквате към входа на пещерата. 
      Настинал ли си? 
             `,choices:[{text:`
          Да — мини на 189. 
          `,requiresCondition:{condition:"sick"},nextPage:189},{text:`
          Не — продължи на 254.
          `,requiresCondition:{condition:"healthy"},nextPage:254}]},61:{text:`
      — Сега ще видите какво е бизнес! — гордо заявява Хухавел, после пристъпва към старчето и се впуска в пазарлък. 
      Резултатът от бизнеса обаче се оказва плачевен. След пет минути всичките ви хранителни запаси (включително сапунът) преминават у старчето. Остават ви само лулата на мира и патката на Хухавел. 
      В замяна Хухавел получава усуканата джаджа. 
      — И за какво ти е туй желязо? — пита Фърчилан. 
      — Ами… де да знам… — запъва се Хухавел. — Ама я го виж само какво е интересно. Едно усукано такова… 
      — Диване! — перва го по главата Гадолини. — За нищо не те бива! Слушай, шефе, дай сега и аз да опитам в бизнеса. 
      След провала на Хухавел не изпитваш особено желание да се доверяваш на когото и да било от чукундуртите. Но пък кой знае, може Гадолини да излезе по-добър търговец. 
             `,emptyInventory:!0,addToInventory:[{item:"duck",quantity:1},{item:"twistedTrinket",quantity:1},{item:"pipe",quantity:1}],choices:[{text:`
          Ако му разрешиш да опита нова сделка, мини на 47. 
          `,nextPage:47},{text:`
          Ако опиташ сам да се пазариш със старчето, продължи на 119. 
          `,nextPage:119},{text:`
          Ако смяташ, че е крайно време да си тръгвате, прехвърли се на 158. 
          `,nextPage:158}]},62:{text:`
      Твоите командоси проявяват чудеса от храброст, но битката се развива все по-зле. Още миг и ще падне заветният хълм, както е казал поетът. 
— Да бягаме! — провикваш се ти и повеждаш чукундуртите в отстъпление. 
Но сега всичко зависи от съдбата. Избери продължението — 130 или 151. 
      `,choices:[{text:"130",nextPage:130},{text:"151.",nextPage:151}]},63:{text:`
      Чудесно е, когато имаш полезен наръчник. Разгръщаш книгата и от нея узнаваш, че гъбите наистина са вълшебни. А свойствата им са следните: 
      ЖЪЛТА ГЪБА — увеличава онзи, който хапне от нея. 
      СИНЯ ГЪБА — смалява многократно консуматора си. 
      ЧЕРВЕНА ГЪБА — силно намалява теглото. 
      ЗЕЛЕНА ГЪБА — увеличава теглото. 
      ЧЕРНА ГЪБА — невероятно отровна, убива жертвата за броени минути. 
      Запомни добре тези свойства, а след това продължи на 111. 
      `,mushroomProperties:!0,choices:[{text:"111",nextPage:111}]},64:{text:`
      Преди да му обясниш за какво служи подаръкът, таласъмът изхрупва макарона и доволно кимва. 
— М-м-м! Вкусно! Швейцарски е, нали? Хайде, наливайте си вода и изчезвайте. 
Напълваш съдинката си с вода и преминаваш на 177.
      `,choices:[{text:"177",nextPage:177}]},65:{text:`
      С отчаяно усилие разблъскваш тълпата и хукваш да бягаш, следван по петите от стотици разплакани чукундурти. За щастие гората не е далече и след няколко минути намираш убежище в нея. Един по един преследвачите изостават, докато накрая откриваш, че вече си сам. Спираш и избърсваш потта от челото си. Ама че чукундуртска история! 
      Е, сега не ти остава нищо друго, освен да се прибереш у дома. За да го сториш, премини на 44. 
      `,choices:[{text:"44",nextPage:44}]},66:{text:`
      — Какво? — възмутено се провиква таласъмът. — Не било наша работа, а? Братя, тия агресори оскърбяват нашата таласъмска гордост! Напред! Да отмъстим за поруганата си чест! 
И блатните таласъми се устремяват към вас. 
— Да бягаме, шефе! — уплашено подвиква Хухавел. — Да се спасяваме, додето сме цели! 
— Вярно — подкрепя го Фърчилан. — Дето е казал народът, бежанова майка не плаче. 
— Да се бием! — възразява Бабаитко. — Ще видят те, като им опаля един по китарите! 
Кого ще послушаш? 
      `,choices:[{text:"Бабаитко — прехвърли се на 41.",nextPage:41},{text:"Хухавел и Фърчилан — продължи на 130 или 151.",nextPage:[130,151]}]},67:{text:`
      Щом отхапваш парченце от жълтата гъба, по цялото ти тяло пробягва непоносим сърбеж и виждаш как короните на дърветата стремително падат насреща ти. Не! Дърветата са неподвижни, но самият ти си възвръщаш предишните размери. Въздъхваш от облекчение. Този път май имаше късмет.  
      `,choices:[{text:"Ако искаш да продължиш експериментите, върни се на 136.",nextPage:136},{text:"Ако предпочиташ да не рискуваш повече, мини на 154.",nextPage:154}]},68:{text:`
      Свирепият рев на змея зад вас е толкова добър стимул за тичане, че вие спирате чак когато тунелът остава далече назад.  
      `,choices:[{text:" Продължи на 81.",nextPage:81}]},69:{text:`
      Откриваш, че тревогата ти не е била напразна. Разсеяният Фърчилан е изръсил някъде един кочан царевица. 
— Край! — сърдито заявяваш ти. — Отсега нататък сам ще си нося торбата. Не ща повече чукундуртски истории! 
      `,choices:[{text:"Отбележи си загубата на царевицата и премини на 138. ",nextPage:138,removeFromInventory:{item:"corn",quantity:1}}]},70:{text:`
      — Не е моя работа, а? — обижда се таласъмът. — Махай ми се тогава от кухнята, додето не съм повикал стражата! 
Нямаш никакво желание да се срещаш със стражата, затова побързваш да напуснеш. 
      `,choices:[{text:"Мини на 255. ",nextPage:255}]},71:{text:`
      — Шефе, аз пак ти викам, дай да наберем малко гъби — умолително се обажда Бабаитко. — Гъбата е хубаво нещо. Полезно, значи.  
 `,choices:[{text:"Ако този път се съгласиш да потърсите гъби, мини на 24.",nextPage:24},{text:"Ако не искаш да губиш време за подобни глупости, продължи на 49.",nextPage:49}]},72:{text:`
      Поемате след блатните таласъми и скоро излизате на малко кално островче, където върху прогнил пън седи стар, съсухрен таласъм, наметнат с мухлясала мантия. Всички останали таласъми се просват по очи. 
— О, велики царю, доведохме тези хора… — започва предводителят им. 
— Чукундурти — поправя го Хухавел. 
— … тези чукундурти, защото са славни командоси, тръгнали на тайна мисия срещу Дървеняк Първи. 
— Брях! — смайва се царят на свой ред. — Значи командоси! И то тръгнали срещу Дървеняк! Добре сте ми дошли, скъпи гости! Враговете на моя враг са мои приятели. 
— Шефе! — прошепва Хухавел. — Дай да изпушим с това старче лулата на мира. Така ще закрепим добрите отношения. 
 `,choices:[{text:`Ако имаш лула на мира и искаш да я използваш, мини на 79. 
          `,nextPage:79},{text:"В противен случай продължи на 90.",nextPage:90}]},73:{text:`
— Е? — настоява министърът на разните работи. — Съгласен ли си? Кога поемаш новия пост? 
— Когато цъфнат налъмите — дипломатично отговаряш ти. 
— Добре де, ще почакаме — въздъхва министърът на другите работи и се обръща към колегата си. — Слушай, бягай да сложиш един налъм във вода, че да знаем кога ще стане… Чакай! Какво е това? 
Откъм гората долитат революционни песни и след малко чукундуртите се завръщат, мъкнейки между себе си нещастния министър-предател. 
— Дайте пинсети! — провиква се един от тях. 
— Ама чакайте! — пищи жертвата. — Нали подадох оставка! Вече не съм министър-предател! 
Аргументът му е солиден и чукундуртите се объркват. 
— Ами сега? 
— Как да му оскубем брадата, като вече не е предател? 
— Нищо бе, първо да я оскубем, пък после ще му мислим! 
— Не! Имам идея! Дайте пак да го назначим! 
— Не ща-а-а-а! — изревава министър-предателят. — Вече подадох оставка! Ако ще ме назначавате, искам да стана министър на тайните работи! 
Наоколо избухва смях. 
— Ти ли бе? Че какво разбираш ти от тайни работи? 
— Открих една голяма тайна! — доверително съобщава клетникът. — Научих плановете на Дървеняк! 
— Грънци си научил! — обажда се някой. — Баш на теб ли ще ти кажат такава тайна? 
Но личи, че тълпата е разколебана. Министър-предателят използва момента, за да се хвърли в нозете ти. 
— Чуй ме, повелителю! Чуй каква тайна научих и вярвам, че ще ме спасиш от страшната участ!  
 `,choices:[{text:"Мини на 142. ",nextPage:142}]},74:{text:`
      Нагазвате в блатото, но щом от тинята изникват главите на блатните таласъми, твоите спътници категорично отказват да продължат напред. 
      — Ти както щеш, шефе, обаче аз се връщам обратно — заявява Хухавел. 
      — И аз — обажда се Бабаитко. 
      Е, щом дори Бабаитко не желае да рискува, ще трябва да се съобразиш с народното мнение.  
 `,choices:[{text:"Продължи на 205. ",nextPage:205}]},75:{text:`
  Отново заставате на кръстопътя и оглеждате познатия надпис: 
НАЛЯВО АКО ТРЪГНЕШ — 
ЗА ГЪБИ ЩЕ ХОДИШ 
 
НАДЯСНО АКО ТРЪГНЕШ — 
НИКЪДЕ НЯМА ДА СТИГНЕШ 
 
НАПРАВО АКО ТРЪГНЕШ — 
ГЛАВАТА СИ ЩЕ ЗАГУБИШ 
Накъде ще тръгнеш сега?  
 `,choices:[{text:"Надясно — мини на 117.",nextPage:117},{text:"Направо — продължи на 88.",nextPage:88}]},76:{text:`
      Хухавел грабва една главня от огъня, сръчно запалва грамадната лула и я връчва на змея. Чудовището любопитно оглежда странното творение. 
      — Това пък какво е? 
      — Ще видиш — уверява го Хухавел. — Само смукни яко. 
      — Много яко — обажда се Гадолини. — В петите да те удари. 
      Змеят засмуква и… 
      Избери продължението — 118 или 160. 
 `,choices:[{text:"118",nextPage:118},{text:"160",nextPage:160}]},77:{text:`
      Става ти съвестно. Горките чукундурти са останали без хранителни запаси и през зимата наистина току-виж изпукали от глад. Очевидно това беше бедата, от която искаха да ги спасиш. И ти се струва, че ако беше останал при тях, таласъмите нямаше да ги ограбят. 
— Добре — кимваш ти. — Злодеянията на Дървеняк не бива да останат безнаказани. Тръгвам с вас. Но най-напред дайте да се запознаем. 
— Казвам се Гадолини и съм майстор на гадните трикове — покланя се мрачният чукундурт. — Такъв номер мога да врътна всекиму, че свят да му се завие. 
— Аз съм Бабаитко — пристъпва до него едрият чукундурт, който стърчи с две глави над останалите. — Може и да не ме бива по гадните номера, ама когото цапардосам, свитки ще му изхвръкнат от очите. 
— То не може така — обажда се до него хилав чукундурт, гушнал под мишница проскубана бяла патка. — Насилието не решава нещата. Ум трябва, ум! Аз, драги ни предводителю, се казвам Хухавел и съм най-умният чукундурт в цялото село. 
— Затова те пратиха да пасеш патките, нали? — ехидно се обажда Гадолини. 
— Че какво? — обижда се Хухавел. — То и за тая работа ум трябва. Какво като са патки, и те душа носят… 
— Добре де, не се препирайте — прекъсваш ги ти и се обръщаш към четвъртия чукундурт, който е строен и дългокрак. — А ти, младежо, с какво можеш да се похвалиш? 
— Аз съм Фърчилан — представя се той. — С ум и сила не мога да се похваля, ама умея да бягам. И това е важно, нали така? 
— Тъй, тъй — подкрепя го Гадолини. — Като стане напечено, той пръв ще си плюе на петите. 
— Тихо! — подвикваш ти. — Значи отсега нататък ние петимата сме група командоси под кодовото название „Чукундуртски отмъстители“. Обаче сигурно не сте се сетили, че за из пътя ще ни трябват провизии. 
— Абе, то… за сещане сетихме се — промърморва Фърчилан. — Ама нали таласъмите ометоха всичко. Ето с какво разполагаме. 
И той ти показва три кочана царевица. 
Бабаитко на свой ред измъква от грамадния си джоб едно цвекло. 
— Това е свещеният чукундур — шепнешком обяснява той. — Задигнах го от селския храм. Голям грях си турих на душата, ама какво да се прави — делото иска жертви. 
Кимваш и се обръщаш към другите, но Бабаитко те хваща за рамото. 
— Чакай, има и още нещо. Я гледай тук. 
 
С тия думи той измъква от другия си джоб нещо като издълбан пън, от който стърчи кух израстък. 
— Това пък какво е? — изненадваш се ти. 
— Лулата на мира — гордо отвръща той. — Знае ли човек накъде могат да избият работите? Ако решим да водим мирни преговори, ще ни трябва нещо такова. 
Сетне той се отдръпва, за да стори място на Гадолини, който измъква изпод плаща си два зрели домата. 
И накрая Хухавел триумфално ти показва вехта торба, в която е скътал едра, напращяла диня и калъп домашен сапун. 
— И сапуна ли броите към провизиите? — изненадваш се ти. 
— Като ни засвирят коремите от глад, няма къде да се дяваме. И сапун ще жвакаме — обажда се Бабаитко. 
— Не си прави майтап с хигиената! — скарва му се Хухавел. — Без сапун закъде сме? Нали трябва да си мием ръцете преди ядене. 
— Ако има какво да ядем — ухилва се Гадолини. 
— Ама и вие сте едни чукундурти! — скарваш им се ти. — Нямате никаква организация на работата. Съберете всички запаси в торбата и един да ги носи. 
Идеята обаче поражда първите разногласия в отряд „Чукундуртски отмъстители“. Всеки от четиримата ти спътници претендира за честта да носи торбата с провизиите. 
— Ум трябва за тая работа! — заявява категорично Хухавел. — Затова аз съм най-подходящ. 
— Не се ли виждаш, че си слаботелесен, бе нещастнико? — перва го по главата Бабаитко. — Аз трябва да нося торбата, защото съм най-як. 
Гадолини и Фърчилан също излагат солидни аргументи в своя полза. Чудиш се кого да избереш за тази важна задача. Дали пък сам да не носиш торбата? Но пък от друга страна… някак не върви да се превиваш под товара, а твоите подчинени да вървят с ръце в джобовете. 
Така или иначе, трябва да избереш. Отбележи кого си назначил да носи торбата, запиши подробно всички налични запаси и продължи на 244. 
— Кой ще носи торбата?
  `,addToInventory:[{item:"bag",quantity:1},{item:"duck",quantity:1},{item:"corn",quantity:3},{item:"watermelon",quantity:1},{item:"tomato",quantity:2},{item:"beetroot",quantity:1},{item:"pipe",quantity:1},{item:"soap",quantity:1}],choices:[{text:"Хухавел ",nextPage:244,bagCarrier:"Хухавел"},{text:"Бабаитко",nextPage:244,bagCarrier:"Бабаитко"},{text:"Фърчилан ",nextPage:244,bagCarrier:"Фърчилан"},{text:"Гадолини ",nextPage:244,bagCarrier:"Гадолини"},{text:"Самият ти ",nextPage:244,bagCarrier:"самият ти"}]},78:{text:`
      Фърчилан поема домата и безстрашно се отправя към огъня. Щом го зърва в полумрака, едрият таласъм надава свиреп рев: 
      — Стой! Кой? 
      — Ще видиш ти кой! — отвръща Фърчилан и замахва. 
      Със сочен плясък доматът се размазва по физиономията на таласъма. Онзи скача на крака и изревава: 
      — Дръжте негодника! 
      Но Фърчилан вече тича презглава към закрилата на дърветата. Таласъмите хукват подир него и изчезват в мрака. 
      През следващите няколко минути от гората долитат само злобни крясъци и пукот на строшени вейки. Ала внезапно Фърчилан изниква пред вас и ви махва с ръка. 
      — По-бързо! Да влизаме! Заблудих ги, обаче няма да е задълго. 
  `,choices:[{text:`
          Премини на 139. 
          `,nextPage:139}]},79:{text:`
      По твое нареждане Бабаитко пъргаво разпалва лулата на мира и я слага пред царя на блатните таласъми. Старчето любопитно оглежда димящия пън. 
— Каква е тая чудесия, драги командоси? 
— Смукни, смукни — подканва го Гадолини. — Ама яко смукни, че да те удари чак в петите. 
Царят смуква… и с оглушителна кашлица се катурва в блатото. Наоколо избухват диви крясъци: 
— Атентат! 
— Убиха ни царя! 
— Терористи! 
— Лумпени! 
— Дръжте ги! 
— Да отмъстим за негово величество! 
Сега има само един изход — да се спасявате с бягство обратно към брега. И вие хуквате през блатото, като зарязвате лулата на мира (отбележи си тази загуба). 
Но сега всичко зависи от съдбата. Избери продължението — 130 или 151. 
 
  `,choices:[{text:`
          130
          `,nextPage:130},{text:`
          151
          `,nextPage:151}]},80:{text:`
  
  `,choices:[{text:`
          Премини на 105. 
          `,nextPage:105}]},81:{text:`
      Пътят отново върви през гора, но дърветата стават все по-редки. Половин час след като сте напуснали тунела, виждате на една поляна край пътя голяма къща от бял камък.  
  `,choices:[{text:`
          Ако искаш да я посетите, мини на 120.
          `,nextPage:120},{text:`
          В противен случай продължи на 134. `,nextPage:134}]},82:{text:`
      Щом хапваш парченце от зелената гъба, мигновено те обзема чувство на неописуема тежест и ти се изръсваш от дланта на Бабаитко. Резултатът от дребните размери и огромното тегло е печален — пробиваш земята и хлътваш в някаква къртичина, където слисаните чукундурти така и не успяват да те намерят. След дълго и безплодно търсене те поемат обратно към своето село. Уви, експериментите са завършили неуспешно — още дълги дни ще бродиш сред тревите, докато магията престане и постепенно си възвърнеш предишните размери. 
      Така или иначе твоето приключение завършва дотук.   `,choices:[],end:!0},83:{text:`
      Чудесно е, когато имаш полезен наръчник. Разгръщаш книгата и от нея узнаваш, че вълшебните гъби, които сте набрали, имат следните свойства: 
      ЖЪЛТА ГЪБА — увеличава онзи, който хапне от нея. 
      СИНЯ ГЪБА — смалява многократно консуматора си. 
      ЧЕРВЕНА ГЪБА — силно намалява теглото. 
      ЗЕЛЕНА ГЪБА — увеличава теглото. 
      ЧЕРНА ГЪБА — невероятно отровна, убива жертвата за броени минути. 
        `,choices:[{text:`
          Запомни добре тези свойства, а след това продължи на 220. 
          `,nextPage:220}]},84:{text:`
      — Стига глупости! — викваш ти. — Да се спасяваме! 
      Ала вече е късно. Докато тичаш надолу, изведнъж усещаш как те сграбчват две огромни лапи. Сетне върху главата ти се стоварва тежък юмрук и губиш съзнание. 
        `,choices:[{text:`
          Премини на 21. 
          `,nextPage:21}]},85:{text:`
      В първия момент слънчевите лъчи те заслепяват, тъй че не успяваш да видиш нищо. Но още преди да си направил и една крачка извън колибата, в ушите ти нахлува възторжен рев: 
      — УРРРРРРРРАААААААААА! 
      Разтъркваш очи и когато ги разтваряш, различаваш пред себе си парцалива тълпа от чукундурти. Вятърът развява над главите им опърпани знамена, хоругви и лозунги. Обаче, преди да разчетеш какво е написано по тях, цялата тълпа се бухва на колене. Най-отпред двама старци с чорлави бели бради възторжено протягат ръце към теб. 
      — Благодетелю наш! — възкликва единият. 
      — Спасителю! — приглася му вторият с глас, който скърца като несмазана врата. — Бащице наш! Слънце на чукундуртския небосклон! 
      — Чакайте малко! — объркано възразяваш ти. — Никакво слънце не съм, особено пък на чукундуртския небосклон. Обяснете ми как попаднах тук. 
      — Ами че ние те отвлякохме! — възторжено обяснява първият старец. 
      — Не бе, на гости те поканихме — бързо се намесва другият, като го смушква с лакът в ребрата. — Тъй де, скъп гост… слънце на чукундуртския… 
      — Кога сте ме поканили? — питаш отново ти. — Нещо не помня да съм ви виждал. 
      — Е, ама бива ли чак такива формалности между приятели? — ухилва се старият чукундурт. — Ако толкоз държиш — ето, сега те каним. Бъди ни скъп гост… един вид радост ненагледна… 
      — Не ни изоставяй! — жално се проточва глас откъм тълпата. 
      Нищо не разбираш. Поне едно обаче изглежда ясно — чукундуртите нямат лоши намерения. Е, отмъкнали са те през нощта, но какво да ги правиш — чукундуртска им работа. Въпросът е друг: ще се съгласиш ли да им бъдеш гост? 
        `,choices:[{text:`
          Да — мини на 133. 
          `,nextPage:133},{text:`
          Не — продължи на 179. 
          `,nextPage:179}]},86:{text:`
      Измъкваш лулата на мира и я размахваш пред очите му. 
      — Виждаш ли го това? Как няма да сме мирни пътници, като носим лула на мира? 
      — Което си е вярно, вярно си е — признава таласъмът. — Ама все пак трябваше да ви проверим що за стока сте. Нали знаеш, проверката е висш израз на доверие. Не помня кой го беше казал, ама е бил умен човек. Е, хайде, вървете си по пътя. Напред става по-плитко. 
      И наистина, скоро започвате да излизате от блатото. Накъде сте се отправили всъщност? 
        `,choices:[{text:`
          Напред, където би трябвало да е замъкът на таласъмите — мини на 144. 
          `,nextPage:144},{text:`
          Към кръстопътя — продължи на 171.           `,nextPage:171}]},87:{text:`
      — Видя се то, че нищо не можем да направим, ами хайде да вървим — подканва те Фърчилан. 
      — Чакай бе! — възразява Хухавел. — Не можем да го зарежем току-тъй! За науката е страдал, дето се вика. Дайте поне да му оставим провизиите, че да не умре от глад. 
      — Всичките ли? — трепва Бабаитко. 
      — Всичките! — категорично отговаря Хухавел. — Ние все ще намерим нещо за ядене, ама този клетник… 
        `,choices:[{text:`
          Ако си съгласен да оставите всичките си провизии на Мишемориус, мини на 135. 
          `,nextPage:135},{text:`
          Ако не искаш да го сториш, продължи на 168. 
          `,nextPage:168}]},88:{text:`
      След кратко колебание посочваш напред. 
— Ама недей така, бе шефе! — жално се обажда Хухавел. — Нали видя какво пише — главите си ще загубим. 
— За пораженческа пропаганда при военно положение се полага смърт чрез обесване — сплашва го Гадолини и Хухавел млъква. 
Около половин час вървите през вековна гора, но ненадейно пътят започва да слиза надолу. След малко пред вас се появява входът на мрачен тунел. Гората наоколо е непроходимо гъста, тъй че подземието е единственият път напред. 
Влизали ли сте вече в това подземие? 
        `,choices:[{text:`
          Да — мини на 116.  
          `,nextPage:116,visitedPages:116},{text:`
          Не — продължи на 97. 
          `,nextPage:97}]},89:{text:`
      Свирепият рев на змея зад вас е толкова добър стимул за тичане, че вие не спирате додето не стигате на кръстопътя. 
        `,choices:[{text:`
          Продължи на 131. 
          `,nextPage:131}]},90:{text:`
      — Трай си! — прошепваш ти на Хухавел и се обръщаш към царя. — Изненадвате ме, ваше величество. Как тъй Дървеняк да ви е враг? Нали сте все таласъми, една кръв, дето се вика. 
      — Да, ама ние сме ВОДНИ таласъми! — натъртва старчето. — А пък Дървеняк ненавижда водата. Впрочем, забравих, че сте чужденци. Чуйте, драги командоси, страшната тайна на Дървеняковия род. Всички в този род са прокълнати да умрат от вода. И баща му така умря — като се захвана да спира горските извори. А на Дървеняк му е предречено, че ще издъхне моментално, ако го поръси и капка вода. Затова измисли всички тия глупости със сухата вода. Ама и Мишемориус е виновен, дето му се поведе по акъла. Уж е умен чародей, пък тръгнал да другарува с Дървеняк. 
        `,choices:[{text:`
          Добре е да запомниш тази страшна тайна. След това премини на 115. 
          `,changeSecret:{show:!0},nextPage:115}]},91:{text:`
      Още щом влизаш в колибата, разбираш какво са имали предвид, като говореха за централно отопление — огнището се намира точно в средата. Усмихваш се, свиваш рамене и се приготвяш за сън. 
      Леглото е кораво, а завивките вехти и парцаливи, но един юнак като теб не обръща внимание на подобни дреболии. Призори се събуждаш бодър и свеж. 
        `,choices:[{text:`
          Мини на 155. 
          `,nextPage:155}]},92:{text:`
      — Какво можеш да сториш с това килимче, жалка твар? — хили се Дървеняк и връхлита насреща ти. — Сега ще те убия собственоръчно! 
      Светкавично хвърляш дупката пред него… и царят на таласъмите пропада през пода на залата. Изглежда, че отдолу е имало подземна река, защото от дълбините долита цамбуркане, отчаян писък… а сетне настава тишина. Сбъдна се древното предсказание (за което може да си чувал, а може и да не си) — че Дървеняк ще умре от вода. 
        `,choices:[{text:`
          Продължи на 295. 
          `,nextPage:295}]},93:{text:`
      — Ей, язък! — тюхка се таласъмът. — Веднъж и ние да видим живи командоси, пък то… Ама вие сигурно бързате, щом имате толкова важна мисия. Е, здраве да е. Вървете напред, оттук нататък става по-плитко. 
      И наистина, скоро започвате да излизате от блатото. Но накъде сте се отправили всъщност? 
        `,choices:[{text:`
          Напред, където би трябвало да е замъкът на таласъмите — мини на 144. 
          `,nextPage:144},{text:`
          Към кръстопътя — продължи на 171. 
          `,nextPage:171}]},94:{text:`
      Фърчилан урежда нещата напълно по чукундуртски. Пристъпва напред, грабва нещо от купчината и хуква да бяга с мълниеносна бързина, следван от възмутените крясъци на старчето. (Когато на връщане го откриете в клисурата, ще се окаже, че е задигнал кривия макарон.) 
      — Ама вие май сте крадци! — навъсва се старчето, след като спира да крещи. 
      — Не сме! — възразява Гадолини. — Онзи негодник вече не е наш. Заклеймяваме го, значи, за морално разложение и го изключваме от редовете си. 
      — Дано, дано — промърморва старчето, после се обръща към теб. — Хайде, ела да правим търговия като хората. И вече без номера, че ако се ядосам лошо ще стане. 
      — Слушай, шефе, нека аз да опитам — прошепва ти Гадолини. — Голям съм търговец, значи! Да видиш само каква далавера ще извъртя! 
        `,addToInventory:[{item:"macaron",quantity:1}],choices:[{text:`
          Ако му разрешиш да води сделката, мини на 47. 
          `,nextPage:47},{text:`
          Ако предпочиташ сам да търгуваш, продължи на 119. 
          `,nextPage:119},{text:`
          А ако търговията повече не те интересува, прехвърли се на 158. 
          `,nextPage:158}]},95:{text:`
      Хухавел свива рамене. 
      — Е, щом е така, нищо не мога да направя. 
      Лоша работа! Ако не искате да бъдете изядени, някой трябва да се справи със змея. На кого ще се довериш? 
        `,choices:[{text:`
          На Бабаитко — мини на 166. 
          `,nextPage:118},{text:`
          На Гадолини — попадаш на 198. 
          `,nextPage:118},{text:`
          На Фърчилан — прехвърли се на 214. 
          `,nextPage:118}]},96:{text:`
      — Бащице! — отчаяно изревава министърът на разните работи, когато чува решението ти. — Недей така, бе! Нали ще изпукаме от глад! 
      — Да мълчиш, че инак ще идеш при мишките! — заплашваш го ти и той покорно млъква. 
      Отсреща старшият таласъм се обръща към своите подчинени и надава пронизителен крясък: 
      — Рота-а-а-а, миррррррно! Слушай моята команда! За разграбване на чукундуртското село — бего-о-о-ом марш! 
      И ордата таласъми се втурва напред. 
      Един час по-късно селото е разграбено до последната трошица. Таласъмите се оттеглят, прегърбени под тежестта на кошове, кошници, бохчи, денкове, вързопи, делви, дамаджани и бъчонки. Постепенно чукундуртите почват да се измъкват от скривалищата си. Питаш се какво ли ще кажат за решението ти да ги изоставиш на таласъмския произвол. Но за твоя голяма изненада всички се зъбят и плюят не срещу теб, а срещу министър-предателя. 
      — Пу! Не те е срам! 
      — И това ми било министър! 
      — Предател на националните идеали! 
      — Ренегат! 
      — Ама чакайте! — изпищява министър-предателят, понеже вижда, че става напечено. — Аз… такова… 
      — Никакво такова! 
      — Дайте да му оскубем брадата! — предлага някой. — Косъм по косъм! 
      — Да я оскубем! — единодушно изревава тълпата. — Той е виновен! 
      Хубава работа! Ще се намесиш ли, за да отървеш нещастника от неприятната съдба, която му се готви? 
        `,choices:[{text:`
          Да — мини на 127. 
          `,nextPage:127},{text:`
          Не — продължи на 161. 
          `,nextPage:161}]},97:{text:`
      Чукундуртите боязливо протягат шии и се взират напред в мрака. 
      — Казвах ви аз — промърморва Хухавел. — Тук ще ни изгният костите. 
        `,choices:[{text:`
          Ако поведеш чукундуртите напред по тунела, мини на 110. 
          `,nextPage:110},{text:`
          Ако предпочиташ да се върнеш назад, попадаш на 122. 
          `,nextPage:122}]},98:{text:`
      Гъбите наистина изглеждат вълшебни. По принцип това е полезна находка, но за съжаление няма как да узнаеш качествата им. Освен ако… решиш да проведеш експеримент. 
      Възможностите са две — или да използваш за опитно животно патката на Хухавел (ако все още е с вас), или да изпробваш гъбите върху себе си. Колкото до чукундуртите, те категорично отказват да хапнат и парченце. 
      И тъй, какво ще решиш? 
        `,choices:[{text:`
          Експеримент с патката — мини на 123. 
          `,requiresItem:{item:"duck",quantity:1},nextPage:123},{text:`
          Експеримент върху себе си — продължи на 136. 
          `,nextPage:136},{text:`
          Не искаш да рискуваш — прехвърли се на 154. 
          `,nextPage:154}]},99:{text:`
      Когато се разсъмва, ти отново поемаш през пущинака и изведнъж спираш поразен. Между дърветата пред теб се мержелее… селото на чукундуртите. Май вчера цял ден си обикалял в кръг. 
      Нямаш желание да се появяваш безславно в селото. Но за твой късмет откъм колибите се задават четирима млади чукундурти. Когато наближават, ти излизаш насреща им и размахваш ръка. 
      — Добра среща! 
      — Абе, не е много добра, ама щом си рекъл… — промърморва единият от тях, дребен чукундурт с мрачна физиономия и дрипаво черно наметало. 
      — Защо? — изненадваш се ти. — Да не е станало нещо? 
      — Много неща станаха — отвръща друг чукундурт, който стиска под мишница бяла патка. — След като ти си тръгна, дойдоха таласъмите и обраха де каквото имаше за ядене в селото. 
      — И сега ще изпукаме от глад — жално се обажда най-едрият в групата. 
      — Чакай, чакай — намесва се четвъртият, мършав и дългокрак. — То това не е най-важното. Друго има. Таласъмите рекоха, че техният цар Дървеняк Първи… 
      — Какъв Дървеняк? — трепваш ти. — Да не бъркаш нещо? Имаше навремето един Тиквеняк Първи, ама той отдавна замина в небитието. 
      — Не ме прекъсвай — сопва се чукундуртът. — Дървеняк е негов син и се е обявил за цар на таласъмите. Даже е изградил нов замък, обаче под земята, та да не се открива лесно. Чакай сега, докъде бях стигнал? Видя ли как ме обърка! А, да! Дървеняк Първи си е осигурил подкрепата на великия чародей Мишемориус. А Мишемориус е изобретил страшно нещо — суха вода. Даже направил голяма машина за нейното производство и сега я монтирали в замъка на Дървеняк Първи. Щом заработела тая машина, цялата гора щяла да изсъхне. 
      Гледай ти! Значи Дървеняк е решил да осъществи зловещите планове на баща си. Пустите му таласъми — не мирясват и това си е! 
      — А вие накъде сте тръгнали? — питаш ти. 
      — Ами… такова… — смутено отговаря едрият чукундурт. — Другите в селото само се вайкат, ама ние решихме да тръгнем по дирите на таласъмите. Ще открием замъка и ще му разкажем играта на Дървеняк. Ама ха! Суха вода щял да прави, сухарът му със сухар! 
      — Слушай, защо не ни станеш командир? — въодушевено предлага онзи с патката. — Ще станем боен отряд и ще се наречем „Чукундуртски отмъстители“. 
        `,choices:[{text:`
          Ако се съгласиш да тръгнеш на опасния поход срещу таласъмите, мини на 77. 
          `,nextPage:77},{text:`
          Ако откажеш, продължи на 39. 
          `,nextPage:39}]},100:{text:`
      Таласъмът незабавно грабва царевицата и започва да я хрупа както е сурова. 
      — Ей, много кораво бе! — мръщи се той. — Ама хайде, от мен да мине. Наливайте си вода и изчезвайте. 
        `,choices:[{text:`
          Напълваш съдинката си с вода и преминаваш на 177. 
          `,nextPage:177}]},101:{text:`
      С храбростта на отчаянието отхапваш от жълтата гъба. Тутакси по тялото ти пробягва сърбеж… и изведнъж се увеличаваш десетократно. 
      — Ама какви ги правиш, бе шефе? — вайка се Хухавел. — И преди не можехме да те помръднем, а пък сега — хич. 
      Не ти остава друг избор, освен да продължиш с експериментите. Каква гъба ще изпробваш сега? 
        `,choices:[{text:`
          Червена — попадаш на 146. 
          `,nextPage:146},{text:`
          Синя — прехвърли се на 167. 
          `,nextPage:167},{text:`
          Черна — отгърни на 53. 
          `,nextPage:53}]},102:{text:`
      — Е, убедихте ме — уморено казваш ти. — А сега край на празните приказки! Обяснете как стоят нещата. Нали едно време бяхте съюзници с таласъмите. Защо сега се боите от тях? 
      — Че бяхме съюзници, бяхме — признава министърът на другите работи. — Обаче като рухна техният замък, решихме да развалим съюза. 
      — И да станем честни — обажда се министър-предателят. 
      — Ти трай, предател такъв! — прекъсва го министърът на разните работи. — Туй аз щях да го кажа, честността е от моята компетенция… Станахме честни, значи, и вече не крадем. 
      — Само от време на време, колкото да не е без хич — уточнява министърът на другите работи. — И лъжем само на нечетни дати. Щото „нечетни“ звучи почти като „нечестни“. Ама иначе станахме съвсем почтени чукундурти и не вървеше да другаруваме с таласъмите. 
      — А пък сега те ни заплашват — жално се обажда министър-предателят. — Искат да им предадем всичките си хранителни запаси. 
      — И като дойде зимата, ще изпукаме от глад — проплакват в хор другите двама министри. 
      Навъсваш се. Работата става сериозна. 
      — И кога трябва да им предадете всичките си запаси? 
      — Ами че днес — бързо отговаря министърът на разните работи. — Точно по пладне. Нали затуй те открад… такова де, поканихме на гости. 
      — Обаче ти ще ни спасиш, нали? — обажда се министър-предателят с глас на професионален подмазвач. — Ти си най-великият юнак по тия земи. Потомците песни ще пеят за теб! 
      Не знаеш дали ще пеят песни за теб. Ясно е само едно: днес по пладне чукундуртите ще си имат големи неприятности. А заедно с тях и ти, след като прие да им станеш министър. 
        `,choices:[{text:`
          Премини на 51. 
          `,nextPage:51}]},103:{text:`
      — Нямам с какво да ти докажа, добри ми таласъме — отвръщаш ти. — Имаш само честната ми дума. 
      Таласъмът се колебае още малко, после махва с ръка. 
      — Хайде, от мен да мине. Пък друг път ако имате път насам, да си носите удостоверение, че сте мирни. Надлежно подписано и подпечатано от съответните власти. Нищо де, сега си вървете по пътя. Напред става по-плитко. 
      И наистина, скоро започвате да излизате от блатото. Но накъде сте се отправили всъщност? 
        `,choices:[{text:`
          Напред, където би трябвало да е замъкът на таласъмите — мини на 144. 
          `,nextPage:144},{text:`
          Към кръстопътя — продължи на 171. 
          `,nextPage:171}]},104:{text:`
      Жалко, но така и няма да узнаеш какви свойства имат вълшебните гъби. Нищо де, здраве да е… 
        `,choices:[{text:`
          Продължи на 220. 
          `,nextPage:220}]},105:{text:`
      Тревогата ти обаче се оказва напразна. С провизиите всичко е наред.   `,choices:[{text:`
          Можеш спокойно да продължиш на 138.          `,nextPage:138}]},106:{text:`
      Докато се колебаеш какво да направиш, върху твоя отряд се нахвърлят десетки, може би стотици таласъми и въпреки отчаяната съпротива след броени минути се озовавате в тясна и мрачна килия. 
  `,choices:[{text:`
          Продължи на 285.  `,changeCondition:{jailed:!0},nextPage:285}]},107:{text:`
      Отчупваш малко парченце от жълтата гъба и го поднасяш пред човката на патката. Кротката птица с удоволствие поглъща угощението… и мигновено израства до грамадни размери. 
      — Въх! — възкликва Гадолини и отскача назад. — Чудовище! 
      — Пати-пати-пати — боязливо протяга ръка напред Хухавел. — Ела при батко да те погали. 
      Патката извива глава на една страна, оглежда го внимателно и изведнъж посяга да го клъвне. С писък на ужас Хухавел хуква да бяга, сподирен от останалите чукундурти. Побягваш и ти, защото нямаш никакво желание да се превърнеш в храна за патици. 
      Когато прекратявате бягството, патката е изчезнала нейде из гората. 
      — Отиде ми горкото хайванче! — вайка се Хухавел. 
      — Я да мълчиш, че ще ти опаля един по канчето! — сопва се Бабаитко. — Хайванче! То цяла годзила… 
      — Шефе, аз спасих гъбите — обажда се Гадолини. — С риск за живота си, значи. 
      Е гъбите са налице, обаче въпросът е дали ще посмееш да ги изпробваш върху себе си. Ако поемеш този риск, мини на 136. 
      Ако предпочиташ да не го правиш, продължи на 154. 
        `,removeFromInventory:{item:"duck",quantity:1},choices:[{text:`
          118
          `,nextPage:118}]},108:{text:`
      Изпроводени от благодарния змей, вие бодро се отправяте към кръстопътя. 
        `,choices:[{text:`
          Продължи на 131. 
          `,nextPage:131}]},109:{text:`
      Колибата се оказва мизерна и тясна. Леглото е кораво, а завивките вехти и парцаливи, но един юнак като теб не обръща внимание на подобни дреболии. Лягаш да спиш и призори се събуждаш бодър и свеж. 
              `,choices:[{text:`
          Мини на 155. 
          `,nextPage:155}]},110:{text:`
      Събираш кураж и повеждаш дружината си напред в мрака. Впрочем, тъмнината не е съвсем пълна — тук-там в свода на тунела са пробити отдушници и през тях проникват бледи лъчи. Бавно и предпазливо крачите по неравния под, отрупан с паднали камъни. Ала ненадейно пред вас се надига грамаден силует, който почти запълва тунела. Две огнени очи просветват в мрака и прокънтява страховит рев: 
      — Не мърдайте! Сега ще ви изям! 
      — Да бягаме, шефе! — виква Хухавел. 
      — Как тъй ще бягаме? — възразява Бабаитко. — С какво право ще ме плаши това добиче? Като му опаля един по кофата, ще види то кого ще яде! 
      Чие мнение ще послушаш? 
        `,choices:[{text:`
          На Хухавел — мини на 124. 
          `,nextPage:124},{text:`
          На Бабаитко — продължи на 147. 
          `,nextPage:147}]},111:{text:`
      Прибираш вълшебните гъби и махваш с ръка на чукундуртите. 
      — Хайде да тръгваме, че кой знае още колко път ни чака. 
        `,choices:[{text:`
          Премини на 172. 
          `,nextPage:172}]},112:{text:`
      Отхапваш от червената гъба със страх, но този път явно си имал късмет, защото след броени секунди си възвръщаш предишната лекота. 
        `,choices:[{text:`
          Ако искаш да продължиш експериментите, върни се на 136.  
          `,nextPage:136},{text:`
          Ако предпочиташ да не рискуваш повече, мини на 154.       
          `,nextPage:154}]},113:{text:`
      Гадолини поема бурканчето, после подава глава от храстите и надава заплашителен вик: 
      — Предайте се! Обкръжени сте! Ако до трийсет секунди не обявите капитулация, ще ви обстрелваме с лазерно оръжие! 
      — Лъжеш! — виква в отговор едрият таласъм. 
      — Тъй ли? — озъбва се Гадолини. — Я пратете някой да види с очите си! 
      След дълго препиране таласъмите избутват към вас най-дребния. Той боязливо пристъпва напред, присвива очи и се взира в бурканчето, което Гадолини му пъхва под носа. После уплашено виква: 
      — Абе, тука нещо лази! 
      — Знаех си аз! — изпищява едрият таласъм. — Ще ни обстрелват с лазери! Бягайте да бягаме! 
      След пет секунди от таласъмите няма и следа, само откъм горския мрак долита пукотът на строшени вейки. 
      — Видяхте ли какъв номер им врътнах? — гордо се ухилва Гадолини. — Хайде сега да влизаме. 
        `,choices:[{text:`
          Мини на 219. 
          `,nextPage:219}]},114:{text:`
      — Тихо! — решително се провикваш ти. — Тая работа няма да стане! 
      Водачът на таласъмите заплашително се изпъчва пред теб. Обзема те страх, но знаеш много добре, че не бива да отстъпваш. Трябва да ги сплашиш, иначе работите ще тръгнат зле. 
      — Ти пък кой си? — пита таласъмът. 
      Въпреки тревогата, ти намираш сили да се разсмееш. 
      — Питаш кой съм, нещастнико! Аз съм онзи, който освободи горските извори! Онзи, който победи самия Тиквеняк и разруши гнусното ви свърталище! 
      — Въх! — възкликва някой от таласъмите. 
      — Ако не се откажете незабавно от нахалните си претенции, ще ви покажа къде зимуват раците! — приключваш ти и гордо скръстваш ръце. 
      Слисаният таласъм прави крачка назад и обръща глава към подчинените си. 
      — Някой да знае къде зимуват раците? 
      — Не питай, шефе, че по-лошо ще стане! — подвиква писклив глас от задните редици. — Чини ми се, че няма да е приятно място. Я по-добре да си ходим. 
      — Млък! — яростно изревава старшият таласъм. — Тук аз заповядвам. Мирррррно! Слушай моята команда! На когото му е мила кожата — към гората бегом ма-а-а-а-арш! 
      Личи си, че таласъмите са дисциплиниран отряд. Още преди да е заглъхнал викът на командира, всички се втурват презглава към гората. Изпровождаш ги с поглед и въздъхваш от облекчение. Ала нещо ти подсказва, че събитията не са приключили. 
      И наистина. След малко от храстите се подава един таласъм. Той размахва клечка, върху която е завързана мръсна кърпа, после боязливо тръгва през ливадата. 
      — Хей, аз съм парламентьор! — подвиква таласъмът отдалече. — Нали виждате бялото знаме? 
      — На мен ми прилича на сиво, но нейсе — отвръщаш ти. — Казвай каквото имаш за казване, че ми омръзна да се разправям с таласъми. 
      — Слушай сега — намига таласъмът и леко те побутва с лакът в ребрата. — Дай да уредим далаверата, а? Ти ни пускаш да разграбим селото, а пък ние все някак ще се отблагодарим. Твоето не се губи, брато! 
      — Я да ми се губиш от очите! — ядосано възкликваш ти и вдигаш ръка. 
      Таласъмът светкавично отскача на десетина крачки и се озъбва: 
      — Тъй, а! Ще биеш парламентьор! Ние с добро, пък той… Ама ще видиш ти! Само да знаеш какво е намислил негово величество Дървеняк Първи! От тая гора и един пън няма да остане. Да те видим после какво ще правиш! 
      И понеже замахваш отново, таласъмът захвърля парцала и побягва към гората. 
      — Благодетелю наш! — изревава министърът на разните работи и се втурва да целува едната ти ръка, докато колегата му е сграбчил другата. — Ама ти наистина ги прогони! Благословена да е десницата ти! 
      — И левицата! — обажда се министърът на другите работи. 
      — И целият организъм — обобщава министър-предателят, който по липса на друго се е захванал с краката ти. 
      Скарваш им се и ги буташ настрани, но не можеш да удържиш усмивката си. Първият тур от преговорите е завършил в твоя полза. 
         `,choices:[{text:`
          Мини на 149.
          `,nextPage:149}]},115:{text:`
      След още малко любезни приказки със стария цар ти се сбогуваш и повеждаш дружината си към отсрещния бряг. Блатото постепенно става все по-плитко и най-сетне стъпвате на твърда земя. 
        `,choices:[{text:`
          Ако отивате напред, където би трябвало да е замъкът на таласъмите, мини на 144. 
          `,nextPage:144},{text:`
          Ако сте се отправили обратно към кръстопътя, продължи на 171. 
          `,nextPage:171}]},116:{text:`
      А какви са отношенията ви със змея? 
        `,choices:[{text:`
          Добри — мини на 143. 
          `,nextPage:143},{text:`
          Не твърде добри — продължи на 162. 
          `,nextPage:162}]},117:{text:`
      Минавал ли си вече по този път? 
      `,choices:[{text:`
          Да — продължи на 152.  
          `,nextPage:152},{text:`
          Не — прехвърли се на 174. 
          `,nextPage:174}]},118:{text:`
      Змеят разтваря огромната си паст и пуска облак зловонен пушек. След това с недоумение поглежда Хухавел. 
      — И какво? 
      — Как какво, как какво! — вълнува се Хухавел. — Не разбра ли какъв номер се получи? Може и да не си огнедишащ, но гледай само каква пушилка вдигаш с тая чудесия. Като я видят, всички ще бягат презглава. 
      — Вярно бе! Брей, имало умни хора… пардон, умни чукундурти на тоя свят. Да сте живи и здрави, скъпи приятели. Хайде, вървете си със здраве. Срамота ще е да ви ям след такава услуга. 
      Отбележи си, че лулата остава при змея. А след това повеждаш своята дружина… накъде впрочем? 
            `,removeFromInventory:{item:"pipe",quantity:1},choices:[{text:`
          Напред, където би трябвало да е замъкът на таласъмите — мини на 81. 
          `,nextPage:81},{text:`
          Към кръстопътя — продължи на 108.
          `,nextPage:108}]},119:{text:`
      — Виж сега как ще уредим нещата — казва старчето. — И ти нямаш пари, и аз нямам. Обаче, за да вървят нещата, всеки ще си определи цената на стоките, пък после ще ги разменяме. 
      И след дълъг пазарлък двамата се споразумявате за следния ценоразпис: 
      ТВОИ СТОКИ: 
      ДОМАТ — 1 грош 
      КОЧАН ЦАРЕВИЦА — 2 гроша 
      ЧУКУНДУР (ЦВЕКЛО) — 3 гроша 
      САПУН — 4 гроша 
      ДИНЯ — 5 гроша 
      ЛУЛА НА МИРА — 8 гроша 
      ПАТКА (макар че Хухавел отчаяно протестира срещу нейното включване в сделката) — 12 гроша 
      СТОКИ НА СТАРЧЕТО 
      КРАТУНКА — 1 грош. 
      ОГЛЕДАЛЦЕ — 3 гроша. 
      КРИВ МАКАРОН — 2 гроша. 
      ПРЕНОСИМА ДУПКА (защото всъщност навитото килимче се оказва точно това) — 5 гроша. 
      КНИЖКА „ВЪЛШЕБНИТЕ ГЪБИ ПО НАШИТЕ ЗЕМИ“ — 2 гроша. 
      СТОНОЖКА В БУРКАНЧЕ — 1 грош. 
      ШИШЕНЦЕ С УНИВЕРСАЛЕН РАЗТВОРИТЕЛ — 2 гроша. 
      ШИШЕНЦЕ СЪС СУХА ВОДА — 2 гроша. 
      ВЕХТИ ПАНТАЛОНИ — 1 грош. 
      УСУКАНА ДЖАДЖА — 4 гроша. 
      Естествено, в зависимост от предишните събития може някои стоки да не са налице. Това знаеш най-добре самият ти. А и не е задължително да продаваш всичко, с което разполагаш — може тепърва да ти потрябва. Така или иначе, сега остава да проведеш сделката, а след като запишеш какво си придобил, ще трябва да минеш на 158, за да поведеш отряда си обратно към кръстопътя.  `,trade:!0,choices:[{text:`
          158
          `,nextPage:158}]},120:{text:`
      Посещавал ли си вече тази къща? 
        `,choices:[{text:`
          Да — мини на 137.
          `,nextPage:137},{text:`
          Не — продължи на 150.           `,nextPage:150}]},121:{text:`
      — Няма да стане тая работа! — решително заявяваш ти и пред слисаните погледи на министрите излизаш от колибата. 
      Ала отвън те чакат жалните чукундуртски тълпи. Усетили накъде отиват нещата, те надават отчаян вой: 
      — Бащице… 
      — Слънце на чукундуртския небосклон… 
      — Закъде сме без теб?… 
      — Като слънцето и въздуха… 
      — Убий ни, но не си тръгвай… 
      Май трудно ще си пробиеш път през опечаленото множество. 
        `,choices:[{text:`
          Ако решиш да се върнеш в колибата и да приемеш предложението, мини на 19. 
          `,nextPage:19},{text:`
          Ако държиш на всяка цена да се измъкнеш от чукундуртското село, продължи на 65.          `,nextPage:65}]},122:{text:`
      — Право да ви кажа, и на мен не ми харесва тая дупка — въздъхваш ти. — Хайде да си вървим. 
      Видимо ободрени, чукундуртите поемат след теб обратно. Но накъде е това „обратно“? 
        `,choices:[{text:`
          Към кръстопътя — мини на 131. 
          `,nextPage:131},{text:`
          Към бялата къща — продължи на 81. 
          `,nextPage:81}]},123:{text:`
      — Ама как тъй, шефе! — изпищява Хухавел, когато узнава за решението ти. — Ще умориш горкото хайванче! 
      — Трай бе, стипца такава! — скарва му се Фърчилан. — Ама че диване! Хората живота си дават за правото дело, пък на него една патка му се свиди. 
      — Лесно ти е на теб — хленчи Хухавел. — Нали нищо не ти взимат… 
      Така или иначе съпротивата му е сломена и той мрачно сяда настрани. А сега е време да решиш каква гъба ще дадеш на патката. 
      Синя — продължи на 140. 
      Червена — попадаш на 164. 
      Зелена — прехвърли се на 176. 
      Черна — отгърни на 193.  `,choices:[{text:`
          Жълта — мини на 107. 
          `,nextPage:118},{text:`
          118
          `,nextPage:118},{text:`
          118
          `,nextPage:118},{text:`
          118
          `,nextPage:118},{text:`
          118
          `,nextPage:118}]},124:{text:`
      Храбростта е хубаво нещо, но не и когато си изправен пред чудовищен звяр в подземие с един-единствен изход. Затова тичешком повеждаш дружината си обратно… но накъде впрочем е това „обратно“?
      `,choices:[{text:`
          Към бялата къща — мини на 68.
          `,nextPage:68},{text:`
          Към кръстопътя — продължи на 89.
          `,nextPage:89}]},125:{text:`
      Щом хапваш парченце от синята гъба, мигновено се смаляваш като мравка и изчезваш пред смаяните погледи на чукундуртите. А резултатът от дребните размери и огромното тегло е печален — пробиваш земята и хлътваш в някаква къртичина, където слисаните чукундурти така и не успяват да те намерят. След дълго и безплодно търсене те поемат обратно към своето село. Уви, експериментите са завършили неуспешно — още дълги дни ще бродиш сред тревите, докато магията престане и постепенно си възвърнеш предишните размери. 
      Така или иначе твоето приключение завършва дотук.
      `,choices:[{text:`
          Към началото — мини на 1.
          `,nextPage:1}]},126:{text:`
      Фърчилан поема динята и безстрашно се отправя към огъня. Щом го зърва в полумрака, едрият таласъм надава свиреп рев: 
      — Стой! Кой? 
      — Ще видиш ти кой! — отвръща Фърчилан, после вдига динята с две ръце и замахва. 
      Със звучно пращене зрелият плод се разбива в главата на таласъма и по физиономията му плъзва лепкав сок. Онзи скача на крака и изревава: 
      — Дръжте негодника! 
      Но Фърчилан вече тича презглава към закрилата на дърветата. Таласъмите хукват подир него и изчезват в мрака. 
      През следващите няколко минути от гората долитат само злобни крясъци и пукот на строшени вейки. Ала внезапно Фърчилан изниква пред вас и ви махва с ръка. 
      — По-бързо! Да влизаме! Заблудих ги, обаче няма да е задълго. 
      `,choices:[{text:`
          Премини на 139.
          `,nextPage:139}]},127:{text:`
      С няколко скока се озоваваш пред разгневената тълпа и разперваш ръце. 
      — Стойте! Той не е виновен! 
      — Не съм, не съм! — потвърждава министър-предателят, след като се е сгушил на сигурно място зад гърба ти. — Даже напротив, сторих велико добро на целия чукундуртски народ. Открих една голяма тайна — какви са плановете на Дървеняк! 
      — Грънци си научил! — обажда се някой. — Баш на теб ли ще ти кажат такава тайна? 
      Но личи, че тълпата е разколебана. Министър-предателят използва момента, за да се хвърли в нозете ти. 
      — Чуй ме, повелителю! Чуй каква тайна научих и вярвам, че ще ме спасиш от страшната участ! 
      `,choices:[{text:`
          Мини на 142.
          `,nextPage:142}]},128:{text:`
      — С какво мога да ви услужа, спасители мои? — бодро пита Мишемориус. — Не ми остана нищо, с което да възнаградя доблестната ви постъпка. Проклетите таласъми всичко разграбиха. 
      Забелязваш в ъгъла да се търкаля празна кратунка. Ако искаш, можеш да я вземеш, чародеят няма да има нищо против. 
      Имаш ли вълшебни гъби? 
      `,addToInventory:{item:"groud",quantity:1},choices:[{text:`
          Да — мини на 156.
          `,nextPage:156},{text:`
          Не — продължи на 183.
          `,nextPage:183}]},129:{text:`
      — Нямам с какво да ти докажа, добри ми таласъме — отвръщаш ти. — Имаш само честната ми дума. 
      Таласъмът се навъсва. 
      — Ама че народ се е навъдил! Марш назад, като нямате доказателства! Тук не пускаме съмнителни типове като вас. Пък друг път, ако имате път насам, да си носите удостоверение, че сте мирни. Надлежно подписано и подпечатано от съответните власти. 
      Явно е, че таласъмите няма да ви пуснат.  
      `,choices:[{text:`
          Ако решиш, че е най-разумно да се върнете, мини на 205.          `,nextPage:205},{text:`
          Ако искаш да си пробиете път напред с бой, продължи на 41.
          `,nextPage:41}]},130:{text:`
      С отчаян бяг се измъквате на твърда земя. Блатните таласъми ви изпращат с подигравателни крясъци. Нищо де, нека викат колкото си щат. Важното е, че им се изплъзнахте. 
      Няма как, не успяхте да минете блатото и трябва да поемете обратно. В коя посока е това? 
      `,choices:[{text:`
          Към кръстопътя — мини на 171.
          `,nextPage:171},{text:`
          Към сливането на левия и средния път — продължи на 144.
          `,nextPage:144}]},131:{text:`
      Ето че отново сте на кръстопътя и оглеждате познатия надпис: 
      НАЛЯВО АКО ТРЪГНЕШ — 
      ЗА ГЪБИ ЩЕ ХОДИШ
      
      НАДЯСНО АКО ТРЪГНЕШ — 
      НИКЪДЕ НЯМА ДА СТИГНЕШ
      
      НАПРАВО АКО ТРЪГНЕШ — 
      ГЛАВАТА СИ ЩЕ ЗАГУБИШ
      Накъде ще тръгнеш сега? 
      `,choices:[{text:`
          Надясно — мини на 117.
          `,nextPage:117},{text:`
          Наляво — продължи на 7.
          `,nextPage:7}]},132:{text:`
      — Това е положението, шефе — печално подсмръква Бабаитко. — Сега сме политически затворници. Ама, знаеш ли, има и нещо добро. Не са ни взели торбата. 
      Пристъпваш към вратата на килията и надникваш навън през тясното прозорче. Изведнъж сърцето ти трепва. На една кука, забита в отсрещната стена, виси връзка ключове. Протягаш ръка през прозорчето, но Фърчилан поклаща глава. 
      — Няма да стане, шефе. Далече е. Аз уж имам най-дълги ръце, обаче колкото и да се мъчих, нищо не излезе. 
      Фърчилан е прав. Ще трябва да си послужиш с нещо. Но какво можеш да измъкнеш от торбата сега? 
      `,choices:[{text:`
          Права джаджа — мини на 170.
          `,requiresItems:[{item:"straigthTrinket",quantity:1}],nextPage:170},{text:`
          Усукана джаджа — продължи на 265.
          `,requiresItems:[{item:"twistedTrinket",quantity:1}],nextPage:265},{text:`
          Крив макарон — прехвърли се на 278.
          `,requiresItems:[{item:"macaron",quantity:1}],nextPage:278},{text:`
          Преносима дупка — попадаш на 286.
          `,requiresItems:[{item:"hole",quantity:1}],nextPage:286},{text:`
          Ако нямаш нито един от изброените предмети, отгърни на 262.
          `,nextPage:262}]},133:{text:`
      — Добре де — въздъхваш ти. — Щом толкова настоявате, ще ви гостувам. 
      — И ще ни помогнеш! — провиква се някой. — Ще спасиш клетия ни чукундуртски народ! Нали, благодетелю? 
      Отново се объркваш. 
      — Че как да ви помогна? 
      — Абе, ти само се съгласи, пък другото е лесно — обаждат се от задните редици. — За юнак като теб туй е фасулска работа. 
      Цялата история те смущава все повече и повече. Не стига, че са те откраднали в потайна доба, ами и трябва да ги спасяваш от нещо. Е, какво ще правиш сега? 
      `,choices:[{text:`
          Ако се съгласиш да помогнеш на чукундуртите, мини на 31. 
          `,nextPage:31},{text:`
          Ако откажеш, продължи на 179.
          `,nextPage:179}]},134:{text:`
      Бялата къща остава зад вас. Продължавате напред през гората и не след дълго забелязвате, че с вашия път се слива още един, който води назад. Доколкото можеш да прецениш, това трябва да е лявото отклонение. 
      `,choices:[{text:`
          Ако решиш да се върнете по него към кръстопътя, мини на 210.           `,nextPage:210},{text:`
          Ако продължиш напред, където би трябвало да е замъкът на таласъмите, прехвърли се на 157.
          `,nextPage:157}]},135:{text:`
      Когато изсипваш на масата оскъдните запаси, Мишемориус пак се разплаква — този път от благодарност. 
      — Каква доблест! — хълца нещастният чародей. — Какво благородство към един окаян клетник! Как да ти се отблагодаря, щедри човече? Проклетите таласъми всичко разграбиха. Ето, вземи поне това. 
      И той измъква измежду книгите някаква странна метална джаджа — права и гладка. 
      — Какво е това? — изненадано питаш ти. 
      — Част от машината за производство на суха вода — обяснява Мишемориус. — Друго нямам. Вземи я, все ще ти свърши работа. 
      Ако искаш да приемеш подаръка, запиши си, че вече имаш права джаджа. А имаш ли и усукана джаджа? 
      `,addToInventory:{item:"straigthTrinket",quantity:1},choices:[{text:`
          Да — мини на 191.
          `,requiresItems:[{item:"twistedTrinket",quantity:1}],nextPage:191},{text:`
          Не — продължи на 212.
          `,nextPage:212}]},136:{text:`
      Каква гъба ще опиташ сега? 
      `,choices:[{text:`
          Жълта — мини на 12.
          `,nextPage:12},{text:`
          Синя — продължи на 17.
          `,nextPage:17},{text:`
          Червена — попадаш на 29.
          `,nextPage:29},{text:`
          Зелена — прехвърли се на 42.
          `,nextPage:42},{text:`
          Черна — отгърни на 53.
          `,nextPage:53}]},137:{text:`
      Премахнали ли сте охраната пред вратата? 
      `,choices:[{text:`
          Да — мини на 173.
          `,nextPage:173},{text:`
          Не — продължи на 201.
          `,nextPage:201}]},138:{text:`
      След кратка почивка отново повеждаш чукундуртите напред и скоро забелязвате път — стар, каменист и разбит, но все пак път. Макар да не забелязваш следи, ти не се съмняваш, че таласъмите са минали по него. 
      Ала един час по-късно работата се усложнява. Достигате кръстопът с три отклонения. Наблизо се издига обрасъл с мъх камък, върху който едва успяваш да разчетеш древен надпис: 
        НАЛЯВО АКО ТРЪГНЕШ — 
        ЗА ГЪБИ ЩЕ ХОДИШ 
        
        НАДЯСНО АКО ТРЪГНЕШ — 
        НИКЪДЕ НЯМА ДА СТИГНЕШ 
        
        НАПРАВО АКО ТРЪГНЕШ — 
        ГЛАВАТА СИ ЩЕ ЗАГУБИШ
      — Шефе, дай да тръгнем наляво! — обажда се Бабаитко. — Гъбите са хубаво нещо. 
      — Особено печени — подкрепя го Фърчилан. 
      — Или на чорбица — добавя Хухавел. — Баба ми правеше много хубава гъбена чорбица. 
      Не им обръщаш внимание. Сега не ти е до гъбена чорба. Трябва да избереш верния път. И тъй, накъде ще тръгнеш? 
      `,choices:[{text:`
          Наляво — мини на 7.
          `,nextPage:7},{text:`
          Направо — продължи на 88.
          `,nextPage:88},{text:`
          Надясно — попадаш на 117.
          `,nextPage:117}]},139:{text:`
      Без да губите време, вие се втурвате напред, хлътвате в пещерата и побягвате надолу по някаква стръмна каменна стълба. Но Фърчилан е бил прав — не разполагате с много време. Изведнъж зад вас се раздават тежките стъпки на едрия таласъм. Заканителните му викове отекват под свода на стълбището. 
      `,choices:[{text:`
          Продължи на 246.
          `,nextPage:246}]},140:{text:`
      Отчупваш малко парченце от синята гъба и го поднасяш пред човката на патката. Кротката птица с удоволствие поглъща угощението… и пред очите ви се смалява до микроскопични размери. След миг тревата я поглъща. С жален писък Хухавел се хвърля по корем и почва да рови из буренаците, но напразно. Патката е изчезнала безследно. 
      — Отиде ми горкото хайванче! — вайка се Хухавел. 
      — Я да мълчиш, че ще ти опаля един по канчето! — сопва се Бабаитко. — Голяма работа, една патка! 
      Е, няма как, налага се да отбележиш, че оставате без патката на Хухавел.  
      `,removeFromInventory:{item:"duck",quantity:1},choices:[{text:`
          Ако искаш да разбереш действието на останалите гъби, вече няма друга възможност, освен да ги изпробваш върху себе си. За да сториш това, мини на 136.          `,nextPage:136},{text:`
          Ако предпочиташ да не го правиш, продължи на 154.
          `,nextPage:154}]},141:{text:`
      Поемате по средния път и половин час по-късно забелязвате на една поляна край пътя голяма къща от бял камък.
      `,choices:[{text:`
          Ако искаш да я посетите, мини на 120.
          `,nextPage:120},{text:`
          В противен случай продължи на 185.
          `,nextPage:185}]},142:{text:`
      — Разказвай! — кимваш ти. 
      — Ужасна е тази тайна, предводителю наш — изрича с треперещ глас министър-предателят. — Докато таласъмите тършуваха из селото, аз се разприказвах с един от тях. Нали от малък съм си общителен… 
      — Ти не разтягай локуми, ами давай по същество — провиква се някой от навалицата. — Какво научи? 
      — Гибел е надвиснала над главите ни! — театрално възкликва нещастникът и започва да скубе сплъстената си коса. — О, немилосърдна съдба, докога ще тормозиш нас, клетите чукундурти? Знайте, скъпи сънародници, че Дървеняк Първи си е осигурил подкрепата на великия чародей Мишемориус! 
      Над тълпата се разнася стон. 
      — Спукана ни е работата! 
      — По-добре да бягаме вдън гори Тилилейски! 
      — Щом и Мишемориус е срещу нас, за нула време ще ни направят на бъзе и коприва! 
      — Чакайте, чакайте! — намесва се един здравомислещ чукундурт. — Туй са само празни приказки. Ами доказателства? 
      Министър-предателят протяга ръка нагоре. В шепата му блести малко шишенце. 
      — Ето го доказателството! Задигнах го от джоба на таласъма… нали от малък съм си сръчен… Знаете ли какво е това? 
      — Откъде ще знаем, като не си ни казал? — логично отбелязва някой. 
      — Суха вода! Изобретена лично от Мишемориус! И таласъмът каза още, че Мишемориус е направил голяма машина за производство на суха вода. Сега я монтирали в замъка на Дървеняк Първи. Щом заработела тая машина, цялата гора щяла да изсъхне. 
      — Брех! Не думай! — възкликва най-близкият чукундурт. — Я дай, дай да видя! 
      И преди да се намесиш, шишенцето плъзва от ръка на ръка. Когато разблъскваш чукундуртите и успяваш да се добереш до него, на дъното са останали само няколко капки. Ала след като ги изсипваш върху дланта си, всяко съмнение изчезва. Водата наистина е съвсем суха — мирише на гнило и изобщо не мокри. 
      Наоколо чукундуртите унило обсъждат вестта. Преобладават две мнения. Първо — че цялата гора е обречена на гибел. И второ — че за всичко е виновен министър-предателят. Някой дори отново предлага да му оскубят брадата, но на другите не им е до забавления. 
      `,choices:[{text:`
          Ако смяташ, че трябва незабавно да предприемеш нещо срещу пъкления план на Дървеняк, мини на 5.
          `,nextPage:5},{text:`
          Ако оставиш царя на таласъмите да върши каквото си иска, продължи на 39.
          `,nextPage:39}]},143:{text:`
      — Бре! — изненадва се змеят, като ви вижда. — Пак ли сте вие? Нищо де, минавайте си колкото щете, и с пръст няма да ви пипна. Ние, змейовете, помним доброто. 
      Още веднъж се сбогувате с него, прекосявате тунела и продължавате. Накъде сте се отправили? 
      `,choices:[{text:`
          Напред, където би трябвало да е замъкът на таласъмите — мини на 81.
          `,nextPage:81},{text:`
          Към кръстопътя — продължи на 108.
          `,nextPage:108}]},144:{text:`
      След като стъпвате на сушата, вие изцеждате дрехите си и продължавате по пътя. Наоколо отново се простират сенчести гори. Ала внезапно пътят се слива с още един — доколкото можеш да прецениш, това е средното разклонение, което идва от кръстопътя. 
      Накъде ще се отправиш сега? 
      `,choices:[{text:`
          Напред, където би трябвало да е замъкът на таласъмите — мини на 157.
          `,nextPage:157},{text:`
          Обратно към кръстопътя по средния път — продължи на 141.
          `,nextPage:141}]},145:{text:`
      Преди да му обясниш, че сапунът служи за лична хигиена, таласъмът го захапва и доволно кимва. 
      — М-м-м! Вкусно! Швейцарски е, нали? Хайде, наливайте си вода и изчезвайте. 
        `,choices:[{text:`
          Напълваш съдинката си с вода и преминаваш на 177. 
          `,nextPage:177}]},146:{text:`
      Няма как, трябва да продължиш. Отхапваш от червената гъба… и с радост усещаш как чувството за тежест изчезва. Е, поне от тази неприятност се отърва. Но остават грамадните размери… и избор само между две гъби — синя и черна. Коя от тях ще изпробваш? 
      `,choices:[{text:`
          Синя — прехвърли се на 181.
          `,nextPage:181},{text:`
          Черна — отгърни на 53.
          `,nextPage:53}]},147:{text:`
  Прав е Бабаитко! От къде на къде ще ви яде този звяр? Без да показваш, че те е страх, ти пристъпваш напред и строго питаш: 
  — Кой си ти и с какво право си позволяваш да плашиш мирните пътници? Ще ни ядеш, а? Ами че това е престъпление! 
  — Не е, не е! — ухилва се чудовището и протяга покрай вас огромната си опашка, за да ви препречи пътя назад. — Аз съм змей-горянин. Обявили са ме за застрашен вид, даже в Червената книга съм записан. Тъй че в името на екологията ще трябва да се прежалите. 
  — Пусни ме, шефе! — репчи се Бабаитко. — Пусни ме да му опаля един по цафарата, че да помни кога е ял чукундурти! 
  — Не бе, шефе — плахо се моли Хухавел. — Дай с разум да действаме. Аз ще се разбера с тоя звяр. 
  Останалите двама чукундурти също претендират да оправят положението. На кого ще се довериш? 
  `,choices:[{text:`
      На Бабаитко — мини на 166.
      `,nextPage:166},{text:`
      На Хухавел — продължи на 180.
      `,nextPage:180},{text:`
      На Гадолини — попадаш на 198.
      `,nextPage:198},{text:`
      На Фърчилан — прехвърли се на 214.
      `,nextPage:214}]},148:{text:`
  — Уф! — недоволно промърморва таласъмът. — Навъдили се едни подмазвачи! Я да ми се махате от кухнята, додето не съм викнал стражата! 
  Нямаш никакво желание да се срещаш със стражата, затова побързваш да напуснеш. 
  `,choices:[{text:`
      Мини на 255.
      `,nextPage:255}]},149:{text:`
  При новината за твоята победа из селото избухва неописуемо ликуване. Най-напред чукундуртите се захващат да те разнасят на ръце, като пеят с все сила революционни маршове. Когато това им омръзва, организират народни песни и танци, а сетне пристъпват към импровизиран банкет. Личи си, че умеят и обичат да правят банкети — ядат, та чак ушите им пукат. 
  Привечер благодарните чукундурти предлагат да те настанят като скъп гост в най-хубавата колиба. Обещават дори да ти осигурят течаща вода и централно отопление. 
  Силно си изненадан, че в това село има такива модерни удобства, но какво ли не може да се очаква от чукундуртите. Решавай сега каква колиба ще избереш. 
  `,choices:[{text:`
      С течаща вода и централно отопление — мини на 26.
      `,nextPage:26},{text:`
      Само с течаща вода — продължи на 58.
      `,nextPage:58},{text:`
      Само с централно отопление — попадаш на 91.
      `,nextPage:91},{text:`
      Без такива глезотии — прехвърли се на 109.
      `,nextPage:109}]},150:{text:`
  По твое нареждане чукундуртите се приближават към къщата бавно и безшумно. Оказва се, че тази предпазна мярка е била съвсем разумна. След малко различавате между храстите, че пред вратата са застанали на пост двама въоръжени таласъми.
  — Да ги нападнем, шефе — бързо предлага Фърчилан.
  — И аз тъй викам — подкрепя го Бабаитко. — Като им опаля един по бъклицата…
  — Абе, дайте да не си дирим белята — възразява Хухавел. — Не виждате ли, че това не е замъкът на Дървеняк? Ясно ни рекоха, че замъкът е под земята.
  Хухавел безспорно има право. Това не е замъкът на Дървеняк. Ако все пак решиш да нападнете таласъмите, мини на 178.
  Ако предпочиташ да се върнете на пътя и да продължите, реши накъде ще се отправите:
  `,choices:[{text:`
      Напред, където би трябвало да е замъкът на таласъмите — мини на 134.
      `,nextPage:134},{text:`
      Обратно към кръстопътя — продължи на 185.
      `,nextPage:185},{text:`
      Нападнете таласъмите — мини на 178.
      `,nextPage:178}]},151:{text:`
  Уви, в тинестата вода таласъмите са по-бързи и след кратка, ожесточена схватка всички бивате омотани с въжета. Под строга охрана ви отвеждат при царя на блатните таласъми, където набързо бивате обвинени в тероризъм, шпионаж, идеологическа диверсия, подстрекателство и незаконно преминаване на границата.
  Като политически затворници само след час се озовавате в клетка на малко кално островче. Някой ден сигурно ще успеете да избягате, но това няма да стане скоро. За жалост твоята мисия завърши с провал.
  `,end:!0,choices:[]},152:{text:`
  Не знам какво си очаквал, но в малката долина не откриваш абсолютно нищо. Старчето сякаш е потънало вдън земя. Остава ти само да поведеш своята дружина обратно към кръстопътя.
  `,choices:[{text:`
      Мини на 187.
      `,nextPage:187}]},153:{text:`
  Вече сте съвсем близо до пещерата, когато в нощната тишина се раздава оглушителното грачене на патката.
  — Стой! — долита откъм огъня свиреп рев. — Кой там?
  `,choices:[{text:`
      Продължи на 232.
      `,nextPage:232}]},154:{text:`
  — Никакви рискове! — заявяваш ти. — Кой знае какво още може да ни се случи. Хайде да си вървим по пътя.
  Ако искаш, можеш да прибереш вълшебните гъби. А ако не знаеш какво е действието им, може би ще е по-добре да ги изхвърлиш. Впрочем, изборът е твой. Запиши си го, след това премини на 172.
  `,choices:[{text:`
      Мини на 172.
      `,nextPage:172}]},155:{text:`
  Позволил ли си на таласъмите да ограбят хранителните запаси?
  `,choices:[{text:`
      Да — мини на 169.
      `,nextPage:169},{text:`
      Не — продължи на 190.
      `,nextPage:190}]},156:{text:`
  А познаваш ли свойствата на вълшебните гъби?
  `,choices:[{text:`
      Да — мини на 183.
      `,nextPage:183},{text:`
      Не — продължи на 165.
      `,nextPage:165}]},157:{text:`
  Отряд „Чукундуртски отмъстители“ неуморно продължава напред през гората. Слънцето вече клони към залез, когато забелязвате край пътя стар кладенец. 
  `,choices:[{text:`
      Ако имаш кратунка и искаш да си налееш вода — мини на 194.
      `,requiresItem:[{item:"groud",quantity:1}],removeFromInventory:{item:"groud",quantity:1},nextPage:194},{text:`
      Ако нямаш кратунка, но имаш шишенце с универсален разтворител, може да пожертваш съдържанието и да си налееш чиста вода — мини на 194.
      `,requiresItem:[{item:"bottleOfSolvent",quantity:1}],removeFromInventory:{item:"bottleOfSolvent",quantity:1},addToInventory:{item:"bottleOfWater",quantity:1},nextPage:194},,{text:`
      Ако нямаш кратунка, но имаш шишенце със суха вода, може да пожертваш съдържанието и да си налееш чиста вода — мини на 194.
      `,requiresItem:[{item:"dryWater",quantity:1}],removeFromInventory:{item:"dryWater",quantity:1},addToInventory:{item:"bottleOfWater",quantity:1},nextPage:194},{text:`
      Ако нямаш никаква подходяща съдинка (или не искаш да се лишаваш от съдържанието на шишенцето) — продължи на 240.
      `,nextPage:240}]},158:{text:`
  — Е, хайде, старче, остани си със здраве — казваш ти и се обръщаш към спътниците си. — Дружина, ходом марш към кръстопътя!
  Чукундуртите послушно поемат през клисурата. (Ако Фърчилан е избягал, след малко ще го откриете да се спотайва между камънаците с плячката си — кривия макарон.)
  `,choices:[{text:`
      Мини на 187.
      `,nextPage:187}]},159:{text:`
  Гадолини измъква лулата на мира, после хваща Бабаитко за ръката и го повежда към огъня. Щом ги зърва в полумрака, едрият таласъм надава свиреп рев:
  — Стой! Кой?
  — Свой — безгрижно отвръща Гадолини.
  — Как тъй свой? — не се успокоява таласъмът. — Кои сте вие?
  — Абе ти не разбираш ли от дума? — тросва се Гадолини. — Свои сме. Хулигани. Хем от най-големите.
  Таласъмът се ухилва.
  — А стига бе! От мен по-голям хулиган няма по тия места.
  — Добре де, като си такъв хулиган, знаеш ли хулиганските номера? — пита Гадолини. — Познаваш ли ударите?
  — И още как? — гордо отвръща таласъмът. — Ей на това му се вика „традиция“.
  С едната ръка той опъва назад палеца и показалеца на другата и плясва с тях Бабаитко по челото.
  — Бива си те — съгласява се Гадолини. — Хайде сега, Бабаитко, покажи на кое му се вика „парен чук“.
  Без да чака втора покана, Бабаитко полага длан върху главата на таласъма и удря отгоре с юмрук.
  — А пък на туй му се вика „черешки“ — бодро заявява таласъмът и като подвива показалци, звънва с тях Бабаитко по ушите.
  — А пък на туй му се вика „изтребител“ — не остава по-назад Бабаитко и му нанася плъзгащ удар с длан по темето.
  — А пък на туй му се вика „тантерица“ — обявява таласъмът и го удря със свит лакът по гърба, като в следващата секунда разгъва ръка и го бухва с юмрук по тила.
  — А пак на туй му се вика гьостерица! — възкликва Гадолини и пъхва лулата в ръката на Бабаитко.
  Тежкото дърво се стоварва с глух пукот върху главата на таласъма. Две-три секунди той стои като вкаменен, после подбелва очи и рухва край огъня. Щом виждат поражението на шефа си, останалите таласъми изчезват в гората с отчаяни писъци.
  — Видяхте ли какъв номер им врътнах? — гордо се ухилва Гадолини. — Да помнят друг път, че тютюнопушенето е вредно за тяхното здраве. Хайде сега да влизаме.
  `,choices:[{text:`
      Мини на 219.
      `,nextPage:219}]},160:{text:`
Страховита кашлица разтърсва чудовището. Слисан и полузадушен, змеят изригва огромен облак зловонен пушек и се търкулва край стената.
— Сега е моментът! — провиква се Фърчилан. — Да бягаме!
— Чакайте! — протестира Хухавел. — Недейте да бягате! Това е недоразумение. Всичко ще обясня.
Кого ще послушаш?
  `,choices:[{text:"Фърчилан — мини на 32.",nextPage:32},{text:"Хухавел — продължи на 175.",nextPage:175}]},161:{text:`
Пред лицето на всенародния гняв министър-предателят реагира светкавично.
— Подавам оставка! — изпищява той и хуква към гората, преследван от десетки разгневени чукундурти.
Когато потерята се изгубва между дърветата, министърът на другите работи те побутва и се ухилва.
— Видя ли колко е хубаво да има министър-предател? Каквото и да стане, все той остава на топа на устата.
— Да, ама сега какво ще правим? — обажда се министърът на разните работи. — Нали го чу, подаде си оставката. Значи изпадаме в правителствена криза.
Двамата се замислят дълбоко, после едновременно се обръщат към теб.
— Слушай, почтени. Вече нямаме нужда от министър на външните работи. Тъй и тъй имаш опит в държавните дела, дай да те направим министър-предател.
  `,choices:[{text:"Приемеш предложението — мини на 10.",nextPage:10},{text:"Откажеш — продължи на 73.",nextPage:73}]},162:{text:`
Повеждаш дружината си през мрака, но само след десетина крачки Хухавел заявява:
— Ти както щеш, шефе, обаче аз с оня змей повече не искам да си имам работа. Ще ни излапа с парцалите и окото му няма да мигне.
— И аз тъй мисля — подкрепя го Бабаитко.
Е, щом дори храбрият Бабаитко се бои, нямаш друг изход, освен да поемете обратно. Впрочем, накъде е това „обратно“?
  `,choices:[{text:"Към кръстопътя — мини на 131.",nextPage:131},{text:"Към бялата къща — попадаш на 81.",nextPage:81}]},163:{text:`
— Какви са тия книги, като не знам да чета? — ядосва се таласъмът и запокитва подаръка в кладенеца. — Вие подигравате ли ми се? Марш веднага оттук! Никаква вода за вас!
— Дай да му опаля един, бе шефе! — моли се Бабаитко.
  `,choices:[{text:"Разрешиш на Бабаитко да го стори — мини на 208.",nextPage:208},{text:"Откажеш от водата и продължиш пътешествието — мини на 177.",nextPage:177}]},164:{text:`
Отчупваш малко парченце от червената гъба и го поднасяш пред човката на патката. Кротката птица с удоволствие поглъща угощението… и мигновено започва да се възнася нагоре от ръцете на Хухавел.
— Олекна! — слисано се провиква чукундуртът. — Олеле, отиде ми хайванчето!
И той отчаяно започва да подскача с протегнати ръце. Но вече нищо не може да се направи. Патката се издига над върхарите на дърветата и лекият ветрец я понася надалеч.
Е, няма как, налага се да отбележиш, че оставате без патката на Хухавел.
  `,removeFromInventory:{item:"duck",quantity:1},choices:[{text:" Ако искаш да разбереш действието на останалите гъби, вече няма друга възможност, освен да ги изпробваш върху себе си. За да сториш това, мини на 136.",nextPage:136},{text:"Ако предпочиташ да не го правиш, продължи на 154.",nextPage:154}]},165:{text:`
Щом изваждаш гъбите от торбата, Мишемориус се ококорва.
— Я! Вълшебни гъби! Отдавна не бях виждал, те се намират много трудно. А знаеш ли как се употребяват?
— Не — отвръщаш ти. — Тъкмо за това исках да те питам.
Чародеят присвива очи и се почесва по тила.
— Чакай да си припомня. Да, точно така… Слушай сега и запомни внимателно. Ако лапнеш от жълтата гъба, ще пораснеш неимоверно. Ама не го прави, много неудобства ще ти създаде. Синята гъба пък ще те смали като мравка. От червената гъба ще олекнеш толкова, че може да хвръкнеш като балон. А от зелената ще натежиш като олово. От черната обаче да не си посмял да хапнеш! Тя е страшно отровна!

  `,choices:[{text:"Благодариш му за консултацията и преминаваш на 183.",nextPage:183}]},166:{text:`
— Ела бе, животно! — заканва се Бабаитко. — Ела да ти опаля един по фонтанелата!
Но вместо това змеят го перва с лапа по главата и Бабаитко замаяно отстъпва назад.
— Тъй, а! — обидено мърмори чукундуртът. — Като си по-голям и ще биеш! Ама аз като повикам батко, ще видиш ти!
— Батко му е по-хилав от мен — доверително ти прошепва Хухавел.
И тъй, първият опит за съпротива се провали. На кого от своите спътници ще се довериш сега?
  `,choices:[{text:"На Хухавел — продължи на 180.",nextPage:180},{text:"На Гадолини — попадаш на 198.",nextPage:198},{text:"На Фърчилан — прехвърли се на 214.",nextPage:214}]},167:{text:`
Няма как, трябва да продължиш. Отхапваш от синята гъба… и с радост усещаш как се смаляваш до предишните размери. Е, поне от тази неприятност се отърва. Но остава непоносимата тежест… и избор само между две гъби — червена и черна. Коя от тях ще изпробваш?
  `,choices:[{text:"Червена — прехвърли се на 195.",nextPage:195},{text:"Черна — отгърни на 53.",nextPage:53}]},168:{text:`
— Хайде, без излишни инициативи! — скарваш се ти на Хухавел. — Тук аз командвам.
— Точно тъй, шефе — подкрепя те Бабаитко. — Като му опаля един по канчето, ще види той едни провизии!
  `,choices:[{text:"Продължи на 212.",nextPage:212}]},169:{text:`
Ставаш и се отправяш към средата на селото, но не откриваш жива душа. Само тук-там от колибите плахо надничат неколцина чукундурти. Както личи, няма да има наплив от доброволци за опасната мисия. Тъкмо се каниш да теглиш една ругатня по адрес на чукундуртската храброст, когато към теб се задават тримата министри, придружени от четирима млади чукундурти.
  `,choices:[{text:"Продължи на 184.",nextPage:184}]},170:{text:`
  Пъхваш правата джаджа през прозорчето, после протягаш ръка… и успех! След миг ключовете са в ръцете ти. Трескаво отключваш килията и кимваш на спътниците си. 
  — Да бягаме! 
  Изтичвате по къс коридор, отваряте една врата и се озовавате в нов, по-широк коридор. В едната посока той се спуска полегато към земните дълбини. От другата страна забелязваш наблизо стълбище, което води нагоре — несъмнено това е изходът. А точно срещу себе си забелязваш врата в стената на коридора. Какво ще направиш сега? 
  `,choices:[{text:`
      Ще провериш какво има зад вратата отсреща — мини на 225. 
      `,nextPage:225},{text:`
      Ще се измъкнеш по стълбището нагоре и ще се откажеш от опасното приключение — продължи на 39. 
      `,nextPage:39},{text:`
      Ще тръгнеш по коридора към вътрешността на подземния замък — попадаш на 30. 
      `,nextPage:30}]},171:{text:`
  След като стъпвате на сушата, вие изцеждате дрехите си и продължавате напред. Минавал ли си вече по този път (макар и в обратната посока)? 
  `,choices:[{text:`
      Да — продължи на 33. 
      `,nextPage:33},{text:`
      Не — мини на 75.  
      `,nextPage:75}]},172:{text:`
  Трима от спътниците ти веднага се отправят напред, но Хухавел още се мотае и наднича тук-там из храсталаците. Сърдито му подвикваш: 
  — Абе, ти чу ли какво казах? 
  — Или искаш да ти опаля един по кубето? — допълва Бабаитко. 
  — Ама аз билки търся — оправдава се Хухавел. — Таквоз… за настинка… или за ухобол… Тя, баба ми, беше голяма билкарка, та от малък ги познавам… 
  `,choices:[{text:`
      Ако му разрешиш да потърси билки, мини на 188. 
      `,nextPage:188},{text:`
      В противен случай продължи на 207. 
      `,nextPage:207}]},173:{text:`
  А Мишемориус още ли е пленник на стола си? 
   `,choices:[{text:`
      Да — мини на 229. 
      `,nextPage:229},{text:`
      Не — продължи на 256.
      `,nextPage:256}]},174:{text:`
  — Дайте да тръгнем надясно, пък да видим какво ще стане — предлагаш ти. 
  — Ама нали пише, че доникъде няма да стигнем — обажда се Бабаитко. — Тогава за какво… 
  — Много ти разбира главата! — прекъсва го Гадолини. — Ами че това може да е номер. За заблуда на противника. 
  — Абе, не се офлянквайте, ами да вървим! — нетърпеливо възкликва Фърчилан. — Като не стигнем доникъде, можем пак да се върнем. 
  И ти решително повеждаш славния си отряд по десния път. 
  Половин час по-късно пътят навлиза в тясна клисура. Скалните стени стават все по-високи. От сянката наоколо лъха влажен хлад. 
  — Видяхте ли, бе? — мърмори Бабаитко. — Казвах ви аз, ама като не слушате… 
  Ала внезапно пред вас се появява малка долина, оградена от стръмни канари. И което е най-удивително — наблизо е седнало дрипаво старче, а на тревата пред него се валят най-различни вехтории. 
  — Добра среща, драги пътници — усмихва се старчето под мустак. — И вие, значи, рекохте да видите дали наистина няма да стигнете доникъде. Е, така си е. От тая долина има само един изход — обратно към кръстопътя. 
  Изпъшкваш от досада и се обръщаш към чукундуртите. 
  — Хайде да си вървим, отмъстители. 
  — Чакайте, чакайте малко — размахва ръка старчето. — Тъй и тъй сте дошли, защо не вземете да купите нещо? Аз съм вехтошар, ще знаете. От туй си изкарвам хляба. На един продам, от друг купя… Огледайте стоката, току-виж нещо ви влязло в работа. 
  — Ама ние нямаме пари — срамежливо признава Хухавел. 
  — Нищо де! Като нямате пари, размяна можем да направим. Вие вадите каквото носите в оная торба, пък все ще се спазарим. 
  Хвърляш поглед върху вехториите на тревата. Като че няма нищо особено: кратунка, огледалце, крив макарон, навито черно килимче, опърпана книжка, стоножка в бурканче, шишенца с бистра и мътна течност, вехти панталони и някакво криво, усукано желязо. Бабаитко любопитно наднича през рамото ти. 
  — Каква е тая усукана джаджа? — пита той. 
  — Не знам — свива рамене старчето. — Даде ми я един таласъм срещу две шепи джанки. Ама я виж това огледалце. Питай го кой е най-красив. 
  Бабаитко поема огледалцето, опулва се насреща му и неуверено изрича: 
  — Огледалце, огледалце, кой е най-красив на земята? 
  — Ти, Бабаитко, си най-красив — отговаря тъничко гласче. — Ако те види малката Снежанка, дето е при седемте джуджета, шапката ще й хвръкне! 
  — Каква е тая Снежанка? — недоумява чукундуртът. 
  Старчето махва с ръка. 
  — А, то е дълга история. Някакви семейни разправии с мащеха и прочие. Я вземи сега да надникнеш през тоя крив макарон. 
  Бабаитко надниква през макарона и ахва. 
  — Брех! Ами че туй съм аз! И са ме избрали за министър на големите работи! Каква е тая чудесия? 
  — Така е то, хубавите работи само през крив макарон се виждат — мъдро обяснява старчето, после се обръща към теб. — Е, ще търгуваме ли? 
  — Нека аз, нека аз! — провиква се Бабаитко. 
  — Да бе, ти! — презрително го поглежда Гадолини. — С тая дървена глава само си за търговец. Хитрост е необходима, хитрост! 
  — Не, ум! — възразява Хухавел. 
  — И бърза реакция — добавя Фърчилан. 
  На кого ще повериш търговските преговори? 
  `,choices:[{text:`
      На Бабаитко — мини на 22.
      `,nextPage:22},{text:`
      На Гадолини — продължи на 47.
      `,nextPage:47},{text:`
      На Хухавел — попадаш на 61.
      `,nextPage:61},{text:`
      На Фърчилан — прехвърли се на 94.
      `,nextPage:94},{text:`
      Сам ще водиш сделката — отгърни на 119.
      `,nextPage:119}]},175:{text:`
Макар че сърцето ти се свива от тревога, правиш знак на останалите да изчакат. В това време Хухавел пристъпва напред.
— Ще те излапам, буболечка такава! — яростно изревава змеят. — Суров ще те излапам, та ако ще да се разболея! Да ми погодиш такъв номер!
— Ча-ча-чакай бе, н-н-няма такава работа — заеква Хухавел. — Не разбра ли к-к-какъв номер се получи? Може и да не си огнедишащ, но гледай само каква пушилка вдигаш с тая чудесия. Като я видят, всички ще бягат презглава.
Змеят зяпва от почуда.
— Вярно бе! Брей, имало умни хора… пардон, умни чукундурти на тоя свят. Да сте живи и здрави, скъпи приятели. Хайде, вървете си със здраве. Срамота ще е да ви ям след такава услуга.
Отбележи си, че лулата остава при змея. А след това повеждаш своята дружина… накъде впрочем?
  `,removeFromInventory:{item:"pipe",quantity:1},choices:[{text:`
      Напред, където би трябвало да е замъкът на таласъмите — мини на 81.
      `,nextPage:81},{text:`
      Към кръстопътя — продължи на 108.
      `,nextPage:108}]},176:{text:`
Отчупваш малко парченце от зелената гъба и го поднасяш пред човката на патката. Кротката птица с удоволствие поглъща угощението… сетне моментално се изръсва от ръцете на Хухавел и рухва долу с глух тътен.
— Брех, натежа! — слисано се провиква чукундуртът. — Като олово натежа пустата му патка! Ами сега как ще я нося?
— Нищо — утешава го Гадолини. — Може пък някоя друга гъба да я оправи.
— Мислиш ли? — жално подсмръква Хухавел и се обръща към теб с надежда. — Да опитаме, а, шефе?
  `,choices:[{text:`
      Ако продължиш да експериментираш с патката, мини на 202.
      `,nextPage:202},{text:`
      Ако се откажеш, продължи на 218.
      `,nextPage:218}]},177:{text:`
Обръщате гръб на кладенеца и продължавате… накъде впрочем?
  `,choices:[{text:`
      Напред, където би трябвало да е замъкът на таласъмите — мини на 43.
      `,nextPage:43},{text:`
      Назад, по посока кръстопътя — продължи на 251.
      `,nextPage:251}]},178:{text:`
Очевидно единият от таласъмите е много благоразумен. Щом твоята дружина изскача от храстите с войнствени крясъци, той моментално си плюе на петите и изчезва в гората. Другият се опитва да окаже съпротива, но Бабаитко още с първия удар го праща в страната на сънищата. Таласъмът глухо ахва и се сгромолясва в нозете ви. Битката е спечелена!
Спираш пред вратата на бялата къща… и сърцето ти се свива. Отвътре долитат горчиви ридания.
Ако искаш да влезеш в къщата, мини на 209.
Ако предпочиташ да се върнеш на пътя и да продължиш, реши накъде ще се отправите:
  `,choices:[{text:`
      Ако искаш да влезеш в къщата, мини на 209.
      `,nextPage:209},{text:`
      Напред, където би трябвало да е замъкът на таласъмите — мини на 134.
      `,nextPage:134},{text:`
      Обратно към кръстопътя — продължи на 185.
      `,nextPage:185}]},179:{text:`
— Никакви такива! — ядосваш се ти. — Да сте ме поканили като хората! Хайде сега, останете си със здраве, а аз се прибирам у дома.
И макар че нямаш представа накъде точно трябва да вървиш, ти се упътваш към края на селото. Но само след двайсетина крачки в нозете ти се хвърля ридаеща тълпа чукундурти, чукундуртки и малки, уплашени чукундуртчета.
— Бащице! — вият те като на погребение. — На кого ни оставяш? Как ще живеем без теб? Постой поне за няколко дни! В теб ни е цялата надежда!
Неволно ти става жал за тия окаяни сиромаси. 
  `,choices:[{text:`
      Ако решиш да отстъпиш пред молбите им, мини на 31.
      `,nextPage:31},{text:`
      Ако си непреклонен, продължи на 65.
      `,nextPage:65}]},180:{text:`
Макар че трепери като лист, Хухавел храбро пристъпва напред и строго оглежда змея.
— Слушай сега, драги! Не може то така! Как тъй ще ни ядеш сурови? Знаеш ли колко болести се хващат от сурова храна? Според както казва науката…
— Няма такава работа — ухилва се змеят. — Запалил съм си огънче и ще ви опека.
При тия думи той ви придърпва с опашката си зад близкия завой на тунела, където наистина гори огън.
Работата май съвсем се обърка! Ще оставиш ли Хухавел да продължава умните си ходове?
  `,choices:[{text:`
      Да — мини на 222.
      `,nextPage:222},{text:`
      Не — продължи на 236.
      `,nextPage:236}]},181:{text:`
Успех! Парченце от синята гъба те смалява до предишните размери и ти най-сетне въздъхваш от облекчение. 
  `,choices:[{text:`
      Ако все още имаш смелостта да експериментираш с вълшебните гъби, върни се на 136.
      `,nextPage:136},{text:`
      Ако не желаеш повече да рискуваш, продължи на 154.
      `,nextPage:154}]},182:{text:`
— Уплашихме ли те, шефе? — изхилва се Гадолини. — Не бой се, туй беше само за майтап. Пием по още една глътка и тръгваме.
Ала в този момент вратата в дъното се отваря и насреща ви изникват четирима грамадни таласъми.
— Тия пък кои са? — възкликва най-едрият. — Бас държа, че са шпиони.
— Да бе! — присмива му се вторият по големина. — На теб все шпиони ти се привиждат. Ако бяха шпиони, щяха да се спотайват, а не да пият, все едно са си у дома.
— Точно така — потвърдил Гадолини. — Никакви шпиони не сме, а дегустатори, поканени да проверим качеството на виното. Гледайте, не пием нито с чаши, нито с паници, а със специални мерки. Да знаем, един вид, колко сме изпили.
— Ама кой ви е поканил? — недоумява едрият таласъм.
Другият го перва по главата.
— Ама че си прост! Отговорникът по вината ги е поканил, кой друг?
— Точно така — кимва Гадолини.
— Ами добре — промърморва едрият. — Тъкмо го видях преди малко да идва насам. Той ще потвърди, че ги е поканил и всичко е наред. Пък докато дойде… я да си пийнем и ние.
Прехапваш устни. Положението става крайно неприятно. Ако дойде отговорникът по вината, ще бъдете разобличени незабавно. Имаш ли билка-кандилка?
  `,choices:[{text:`
      Имаш ли билка-кандилка? Ако да, мини на 264.
      `,requiresItem:{item:"herb",quantity:1},removeFromInventory:{item:"herb",quantity:1},nextPage:264},{text:`
      Не — продължи на 279.
      `,nextPage:279}]},183:{text:`
— Ама какво да ви дам за спомен, бе? — мърмори чародеят и рови между книгите по масата. — Какво да ви дам? Всичко разграбиха тия пусти таласъми! А! Ето, вземи поне това.
И той измъква измежду книгите някаква странна метална джаджа — права и гладка.
— Какво е това? — изненадано питаш ти.
— Част от машината за производство на суха вода — обяснява Мишемориус. — Друго нямам. Вземи я, все ще ти свърши работа.
Ако искаш да приемеш подаръка, запиши си, че вече имаш права джаджа. А имаш ли и усукана джаджа?
  `,addToInventory:{item:"straightTrinket",quantity:1},choices:[{text:`
      Ако да, мини на 216.
      `,requiresItem:{item:"twistedTrinket",quantity:1},nextPage:216},{text:`
      Ако не, продължи на 237.
      `,nextPage:237}]},184:{text:`
— Ето! — гордо възкликва министърът на разните работи. — Виж само какви левенти ти намерихме! Цветът на чукундуртската младеж! Доброволци и половина!
— Да-да! Лесно ти е на теб! — обажда се един от доброволците, дребен чукундурт с черен плащ и мрачна физиономия. — Само знаеш да плямпаш. Доброволци, ама друг път! Изобщо нямаше да тръгнем, ако не беше заплашил, че ще ни отлюспиш от племето.
— Не го слушай, спасителю наш! — ухилва се министърът на другите работи. — Той само така си приказва. А пък всъщност изгаря от нетърпение да тръгне срещу врага. Бой последен е този, дето се вика… Свястно момче, от мен да го знаеш. Казва се Гадолини и е майстор на гадните трикове. Такъв номер може да ти врътне, че свят ще ти се завие.
— Е, Гадолини, добре дошъл в екипа — казваш ти. — Ами останалите?
— Аз съм Бабаитко — пристъпва напред един едър чукундурт, който стърчи с две глави над останалите. — Може и да не ме бива по гадните номера, ама когото цапардосам, свитки ще му изхвръкнат от очите.
— То не може така — обажда се до него хилав чукундурт, гушнал под мишница проскубана бяла патка. — Насилието не решава нещата. Ум трябва, ум! Аз, драги ни предводителю, се казвам Хухавел и съм най-умният чукундурт в цялото село.
— Затова те пратиха да пасеш патките, нали? — ехидно се обажда Гадолини.
— Че какво? — обижда се Хухавел. — То и за тая работа ум трябва. Какво като са патки, и те душа носят…
— Добре де, не се препирайте — прекъсваш ги ти и се обръщаш към последния доброволец, който е строен и дългокрак. — А ти, младежо, с какво можеш да се похвалиш?
— Аз съм Фърчилан — представя се той. — С ум и сила не мога да се похваля, ама умея да бягам. И това е важно, нали така?
— Тъй, тъй — подкрепя го Гадолини. — Като стане напечено, той пръв ще си плюе на петите.
— Тихо! — подвикваш ти. — Добре, приемам ви за командоси от бойния отряд „Чукундуртски отмъстители“. Потегляме след малко. Остава само още една дребна подробност. За из пътя ще ни трябват провизии.
При тия думи обръщаш поглед към министъра на разните работи, но той се свива и почва да мънка:
— Ама… спасителю наш… нали разбираш… нищо не е останало в селото…
— Не ме интересува! — повишаваш глас ти. — Заповядвам да преровите цялото село! Все някъде ще е останало нещо за ядене.
Стреснати от твоята строгост, министрите и доброволците се втурват между колибите. Когато след четвърт час се завръщат, резултатът е печален. А именно:
Хухавел носи празна торба.
Фърчилан стиска три кочана царевица.
Бабаитко мъкне под мишница едра, напращяла диня.
Гадолини крепи в шепи два домата.
Министърът на разните работи носи голямо цвекло.
— Това е свещеният чукундур — шепнешком обяснява той. — Задигнах го от селския храм. Голям грях си турих на душата, ама какво да се прави — делото иска жертви.
Министърът на другите работи е нарамил нещо като издълбан пън, от който стърчи кух израстък.
— Това пък какво е? — изненадваш се ти.
— Лулата на мира — гордо отвръща той. — Нали си министър на външните работи. Ако решиш да водиш мирни преговори, ще се нуждаеш от нещо такова.
Последен пристига министър-предателят с парче домашен сапун. Поглеждаш го строго.
— И това ли се води към провизиите?
— Като ни засвирят коремите от глад, няма къде да се дяваме. И сапун ще жвакаме — обажда се Бабаитко.
— Не си прави майтап с хигиената! — скарва му се Хухавел. — Без сапун закъде сме? Нали трябва да си мием ръцете преди ядене.
— Ако има какво да ядем — ухилва се Гадолини.
Е, това е положението. Запиши си наличните провизии и след това премини на 197.
  `,addToInventory:[{item:"bag",quantity:1},{item:"duck",quantity:1},{item:"corn",quantity:3},{item:"watermelon",quantity:1},{item:"tomato",quantity:2},{item:"beetroot",quantity:1},{item:"pipe",quantity:1},{item:"soap",quantity:1}],choices:[{text:`
      Запиши си наличните провизии и след това премини на 197.
      `,nextPage:197}]},185:{text:`
Около половин час вървите през вековна гора, но ненадейно пътят започва да слиза надолу. След малко пред вас се появява входът на мрачен тунел. Гората наоколо е непроходимо гъста, тъй че подземието е единственият път напред.
Влизали ли сте вече в това подземие?
  `,choices:[{text:`
       Ако да, мини на 116.
      `,nextPage:116},{text:`
      Не — продължи на 97.
      `,nextPage:97}]},186:{text:`
— Каква е тая гадна буболечка? — ядосва се таласъмът и запокитва подаръка в кладенеца. — Вие подигравате ли ми се? Марш веднага оттук! Никаква вода за вас!
— Дай да му опаля един, бе шефе! — моли се Бабаитко.
  `,choices:[{text:`
      Ако му разрешиш да го стори, мини на 208.
      `,nextPage:208},{text:`
      Ако се откажеш от водата и продължиш пътешествието, мини на 177.
      `,nextPage:177}]},187:{text:`
Половин час по-късно отново спирате на кръстопътя и оглеждате познатия надпис.

НАЛЯВО АКО ТРЪГНЕШ — 
ЗА ГЪБИ ЩЕ ХОДИШ 
 
НАДЯСНО АКО ТРЪГНЕШ — 
НИКЪДЕ НЯМА ДА СТИГНЕШ 
 
НАПРАВО АКО ТРЪГНЕШ — 
ГЛАВАТА СИ ЩЕ ЗАГУБИШ 

Накъде ще тръгнеш сега?
  `,choices:[{text:`
      Наляво — мини на 7.
      `,nextPage:7},{text:`
      Направо — продължи на 88.
      `,nextPage:88}]},188:{text:`
Хухавел дълго лази на четири крака и най-сетне победоносно се завръща с някакво стръкче.
— Уф! — ядосва се Фърчилан. — Толкова време изгубихме заради една тревичка.
— Ама това е полезна билка! — защитава се Хухавел. — Викат й билка-кандилка. Ако я сложиш на някого във виното, или в ракията да речем, моментално пада кьоркютук пиян.
  `,addToInventory:{item:"herb",quantity:1},choices:[{text:`
      Ако решиш, можеш да прибереш тази билка. След това продължи на 220.
      `,nextPage:220}]},189:{text:`
Вече сте съвсем близо до пещерата, когато усещаш ужасен сърбеж в носа. След миг кихавицата ти отеква в нощната тишина като топовен гърмеж.
— Стой! — долита откъм огъня свиреп рев. — Кой там?
  `,choices:[{text:`
      Продължи на 232.
      `,nextPage:232}]},190:{text:`
Ставаш и тръгваш към изхода на колибата, но още преди да си излязъл, чуваш ужасни писъци. Гласът ти се струва познат — май принадлежи на министър-предателя. Изтичваш навън и откриваш, че не си се излъгал. Цялото село се е струпало около нещастния министър. Неколцина по-яки чукундурти го държат притиснат на земята, а наоколо се раздават гневни викове:
— Предател!
— Той е виновен!
— Дайте пинсети да му оскубем брадата!
— И да го нашарим с коприва! На голо!
— Милост, братя чукундурти! — дере се клетникът. — Не съм виновен! Те другите министри го направиха!
— Стойте! — намесваш се ти. — Каква е тая саморазправа?
— Той е виновен! — обажда се един чукундурт. — Заради него тая зима ще изпукаме от глад.
— Как тъй ще изпукате? — изненадваш се ти. — Нали вчера прогоних таласъмите!
Тълпата избутва към теб министъра на разните работи. Той забива поглед в земята, пристъпва от крак на крак и започва да мънка.
— Ами, такова… Ние, значи, с колегата по другите работи… тъй да се каже… предприехме една брилянтна дипломатическа акция.
— Каква акция? — питаш ти и те обзема лошо предчувствие.
— То… таквоз… рекохме да се помирим с таласъмите. През нощта ги пуснахме да оберат запасите, а пък те обещаха да не ни закачат.
— Тиквеници! — избухваш ти. — Дървета с дървета! Чукундури! Защо не ме събудихте?
— А, не сме чукундури — намесва се министърът на другите работи. — Чукундурти сме, има едно „т“ към края. Пък не те събудихме, щото… ами… щото се уплашихме. Знаеш ли като дойдоха по тъмно, какви страхотии разправяха? — Изведнъж той започва да скубе брадата си и да хленчи с тъничък глас: — Гибел е надвиснала над главите ни! О, немилосърдна съдба, докога ще тормозиш нас, клетите чукундурти? Знайте, скъпи сънародници, че Дървеняк Първи си е осигурил подкрепата на великия чародей Мишемориус!
Над тълпата се разнася стон.
— Спукана ни е работата!
— По-добре да бягаме вдън гори Тилилейски!
— Щом и Мишемориус е срещу нас, за нула време ще ни направят на бъзе и коприва!
— Чакайте, чакайте! — намесва се един здравомислещ чукундурт. — Туй са само празни приказки. Ами доказателства?
Министърът протяга ръка напред. В шепата му блести малко шишенце.
— Ето го доказателството! Задигнах го от джоба на старшия таласъм… нали от малък съм си сръчен… Знаете ли какво е това?
— Откъде ще знаем, като не си ни казал? — логично отбелязва някой.
— Суха вода! Изобретена лично от Мишемориус! И таласъмите казаха още, че Мишемориус е направил голяма машина за производство на суха вода. Сега я монтирали в замъка на Дървеняк Първи. Щом заработела тая машина, цялата гора щяла да изсъхне.
— Брех! Не думай! — възкликва най-близкият чукундурт. — Я дай, дай да видя!
И преди да се намесиш, шишенцето плъзва от ръка на ръка. Когато разблъскваш чукундуртите и успяваш да се добереш до него, на дъното са останали само няколко капки. Ала след като ги изсипваш върху дланта си, всяко съмнение изчезва. Водата наистина е съвсем суха — мирише на гнило и изобщо не мокри.
Наоколо чукундуртите унило обсъждат вестта. Преобладават две мнения. Първо — че цялата гора е обречена на гибел. И второ — че за всичко е виновен министър-предателят. Някой дори отново предлага да му оскубят брадата, но на другите не им е до забавления. 
  `,choices:[{text:`
      Ако смяташ, че трябва незабавно да предприемеш нещо срещу пъкления план на Дървеняк, мини на 55.
      `,nextPage:55},{text:`
      Ако оставиш царя на таласъмите да върши каквото си иска, продължи на 39.
      `,nextPage:39}]},191:{text:`
— Я чакай малко! — трепваш ти и измъкваш от торбата усуканата джаджа. — Ами това знаеш ли какво е?
— Знам, как да не знам — отвръща Мишемориус. — И това е част от машината, само че се оказа сбъркана. Като я монтирах, машината произвеждаше само обикновена вода. Затова я махнах и изработих другата. Сигурно някой от таласъмите я е отмъкнал, когато разграбиха дома ми и ме оставиха на моята клета съдба… О, нещастен ази…
Чародеят отново се разплаква и повече не успяваш да изкопчиш от него нито дума.
  `,choices:[{text:`
      Продължи на 226.
      `,nextPage:226}]},192:{text:`
Гадолини поема царевицата и безстрашно се отправя към огъня. Щом го зърва в полумрака, едрият таласъм надава свиреп рев:
— Стой! Кой?
— Свой — безгрижно отвръща Гадолини.
— Как тъй свой? — не се успокоява таласъмът. — Кой си ти?
— Не питай кой съм, а какво ви нося — отвръща Гадолини и размахва царевицата. — Ето ви тука нещо за хапване.
Таласъмите почват да се облизват, но Гадолини им се скарва:
— Ехей, закъде сте се разбързали? Първо туй нещо трябва да се изпече. Ето, като го сложим в жаравата и ще стане една вкусотия, пръстите да си оближете.
Продължавайки да се облизват, таласъмите се надвесват над огъня. Ала само след две-три минути радостта им отстъпва място на ужас, защото изведнъж царевичните зърна се превръщат в пуканки с оглушителен трясък.
— Вражеско нападение! — изпищява Гадолини. — Обстрелват ни! Спасявайте се, братя!
След пет секунди от таласъмите няма и следа, само откъм горския мрак долита пукотът на строшени вейки.
— Видяхте ли какъв номер им врътнах? — гордо се ухилва Гадолини. — Хайде сега да влизаме.
  `,choices:[{text:`
      Мини на 219.
      `,nextPage:219}]},193:{text:`
Отчупваш малко парченце от черната гъба и го поднасяш пред човката на патката. Кротката птица с удоволствие поглъща угощението… и след по-малко от минута се катурва мъртва. Хухавел надава отчаян рев.
Е, няма какво да се прави. Отбележи си, че вече не разполагате с патка и реши какво ще правиш сега.
  `,removeFromInventory:{item:"duck",quantity:1},choices:[{text:`
      Ще експериментираш с останалите гъби върху себе си — мини на 136.
      `,nextPage:136},{text:`
      Отказваш се от рискованите опити — продължи на 154.
      `,nextPage:154}]},194:{text:`
Приближавате се до кладенеца и Бабаитко като най-як започва да върти колелото. Обаче работата се оказва по-трудна, отколкото е предполагал.
— Абе, много тежи тая пуста кофа! — пъхти чукундуртът. — С камъни ли са я напълнили?
Не с камъни, а със съвсем друго, както се оказва. Когато най-сетне кофата достига ръба на кладенеца, в нея седи… таласъм.
— По заповед на негово величество Дървеняк Първи употребата на мокра вода е забранена в цялата област! — строго изрича той. — Марш оттук!
— Шефе, нека му опаля един по цафарата — предлага Бабаитко. — Да види той как се забранява!
— Не, шефе! — прекъсва го Хухавел. — Да не почваме с насилие още отсега. Дай да го подкупим, а?
Кого ще послушаш?
  `,choices:[{text:`
      Бабаитко — мини на 208.
      `,nextPage:208},{text:`
      Хухавел — продължи на 234.
      `,nextPage:234},{text:`
      Ако се откажеш от водата и продължиш пътешествието, мини на 177.
      `,nextPage:177}]},195:{text:`
Успех! Парченце от червената гъба прогонва ужасната тежест и ти най-сетне въздъхваш от облекчение. 
  `,choices:[{text:`
      Ако все още имаш смелостта да експериментираш с вълшебните гъби, върни се на 136.
      `,nextPage:136},{text:`
      Ако не желаеш повече да рискуваш, продължи на 154.
      `,nextPage:154}]},196:{text:`
— Ваше величество! — пронизително се провиква един от таласъмите. — Тъкмо такава джаджа ни трябваше за машината!
— Аха! — ухилва се Дървеняк. — Значи сам ми донесе инструмента за моето дело, нещастнико! Е сега ще станеш свидетел на триумфа ми. Дръжте го!
Преди да сторите каквото и да било, върху вас се нахвърля цяла тълпа таласъми. Стиснати здраво от десетки ръце, вече не можете и да помръднете. Майсторите сръчно монтират усуканата джаджа в грамадната машина и след малко шефът им козирува пред Дървеняк.
— Готово, ваше величество. Машината за производство на суха вода е в пълна изправност.
Дървеняк ти хвърля злобна усмивка, после пристъпва към машината и дръпва един голям лост. След миг отвътре бликва воняща суха вода.
— А сега ги затворете в тъмницата! — заповядва царят на таласъмите.
  `,choices:[{text:`
      Премини на 285.
      `,nextPage:285}]},197:{text:`
Първите разногласия в отряд „Чукундуртски отмъстители“ избухват още преди да сте тръгнали. Всеки от четирите ти спътници претендира за честта да носи торбата с провизиите.
— Ум трябва за тая работа! — заявява категорично Хухавел. — Затова аз съм най-подходящ.
— Не се ли виждаш, че си слаботелесен, бе нещастнико? — перва го по главата Бабаитко. — Аз трябва да нося торбата, защото съм най-як.
Гадолини и Фърчилан също излагат солидни аргументи в своя полза. Чудиш се кого да избереш за тази важна задача. Дали пък сам да не носиш торбата? Но пък от друга страна… някак не върви да се превиваш под товара, а твоите подчинени да вървят с ръце в джобовете.
Така или иначе, трябва да избереш. Отбележи кого си назначил да носи торбата и продължи на 211.
  `,choices:[{text:"Хухавел ",nextPage:211,bagCarrier:"Хухавел"},{text:"Бабаитко",nextPage:211,bagCarrier:"Бабаитко"},{text:"Фърчилан ",nextPage:211,bagCarrier:"Фърчилан"},{text:"Гадолини ",nextPage:211,bagCarrier:"Гадолини"},{text:"Самият ти ",nextPage:211,bagCarrier:"самият ти"}]},198:{text:`
Гадолини пристъпва напред и жално поглежда змея.
— Слушай, няма ли да размислиш, а? Не е човешко да ни ядеш.
— А човешко ли е да стоя гладен? — изръмжава змеят. — Хич не ми се молете, ще ви ям!
— Добре де — въздъхва Гадолини. — Щом е тъй, аз съм съгласен.
Бре, каква стана тя! Предателство в собствените ви редици! 
  `,choices:[{text:`
      Ако незабавно отнемеш думата на Гадолини, мини на 223.
      `,nextPage:223},{text:`
      Ако го оставиш да говори, продължи на 241.
      `,nextPage:241}]},199:{text:`
— Имам си вече, драги! — ухилва се таласъмът и посочва дрипавите си панталони. — Предложи нещо друго!
— Да ти пеем? — предлага Бабаитко.
— Не! — отвръща таласъмът. — Не ми се пее.
`,choices:[{text:`
      Върни се на 234 и направи нов избор.
      `,nextPage:234}]},200:{text:`
С храбростта на отчаянието отхапваш от зелената гъба. Тутакси те изпълва чувство на непоносима тежест и ти се сгромолясваш пред слисаните чукундурти.
— Ама какви ги правиш, бе шефе? — вайка се Хухавел. — Ти май съвсем обърка конците!
Не ти остава друг избор, освен да продължиш с експериментите. Каква гъба ще изпробваш сега?
  `,choices:[{text:`
      Червена — попадаш на 146.
      `,nextPage:146},{text:`
      Синя — прехвърли се на 167.
      `,nextPage:167},{text:`
      Черна — отгърни на 53.
      `,nextPage:53}]},201:{text:`
Двамата таласъми още стоят пред вратата. Ако сега желаеш да ги нападнете, мини на 178.
Ако предпочиташ да се върнете на пътя и да продължите, реши накъде ще се отправите:
  `,choices:[{text:`
      Ако желаеш да ги нападнете, мини на 178.
      `,nextPage:178},{text:`
      Напред, където би трябвало да е замъкът на таласъмите — мини на 134.
      `,nextPage:134},{text:`
      Обратно към кръстопътя — продължи на 185.
      `,nextPage:185}]},202:{text:`
Каква гъба ще дадеш сега на патката?
  `,choices:[{text:`
      Жълта — мини на 107.
      `,nextPage:107},{text:`
      Синя — продължи на 140.
      `,nextPage:140},{text:`
      Червена — попадаш на 224.
      `,nextPage:224},{text:`
      Отново зелена — прехвърли се на 233.
      `,nextPage:233},{text:`
      Черна — отгърни на 193.
      `,nextPage:193}]},203:{text:`
— Язък! — въздъхва чукундуртът. — Страшен план имах, ама сега нищо не мога да направя.
  `,choices:[{text:`
      Върни се на 43 и направи нов избор.
      `,nextPage:43}]},204:{text:`
— Голяма работа, блато! — махва с ръка Бабаитко. — Ще го прецапаме, колко му е! Нали, шефе?
И четиримата обръщат към теб въпросителни погледи.
  `,choices:[{text:`
      Ако решиш да прегазиш блатото, мини на 239.
      `,nextPage:239},{text:`
      Ако предпочиташ да се върнеш продължи на 14.
      `,nextPage:14}]},205:{text:`
— Абе, я да си обираме крушите, додето сме живи — решаваш ти и бързо повеждаш своята дружина към сушата.
Няма как, не успяхте да минете блатото и трябва да поемете обратно. В коя посока е това?
  `,choices:[{text:`
      Към кръстопътя — мини на 171.
      `,nextPage:171},{text:`
      Към сливането на левия и средния път — продължи на 144.
      `,nextPage:144}]},206:{text:`
  `,choices:[{text:`
      Продължи на 250.
      `,nextPage:250}]},207:{text:`
— Никакви билки! — кипваш ти. — Тръгвай, че ей сега ще разреша на Бабаитко да ти опали един по кубето.
— И по врата, шефе, и по врата — подсказва Гадолини.
Хухавел свива рамене и покорно тръгва напред.
  `,choices:[{text:`
      Мини на 220.
      `,nextPage:220}]},208:{text:`
След един як удар на Бабаитко таласъмът полита с писък надолу и изчезва в мрака. Отдолу долита звучно цамбуркане.
— Ама ха! — мърмори Бабаитко. — Той ще ми забранява на мене!
  `,choices:[{text:`
      Запасяваш се с вода и преминаваш на 177.
      `,addToInventory:{item:"water",quantity:1},nextPage:177}]},209:{text:`
Щом отваряш вратата, риданията стават още по-силни. Пристъпваш напред в полумрачната стая и виждаш маса, отрупана с дебели старинни томове в кожена подвързия. Зад масата седи облян в сълзи прегърбен старец с черни одежди. Приближаваш се до него и питаш:
— Кой си ти, добри човече? И защо ридаеш тъй отчаяно?
— Аз съм нещастният Мишемориус — изплаква старецът. — Някога бях могъщ чародей, а вижте какъв клетник съм сега. И всичко това, само защото допуснах фаталната глупост да си имам работа с Дървеняк Първи.
— Значи Мишемориус, а? — озъбва се Бабаитко. — Дето изобретил сухата вода! Каквото и да са ти сторили таласъмите — хак ти е! Като ти опаля един по делвата, ще видиш как се изобретява!
— Точно така, хак му е! — обажда се и Гадолини. — Хайде да изчезваме, че онзи таласъм може да доведе подкрепления. 
  `,choices:[{text:`
      Ако си съгласен с двамата и оставиш Мишемориус на печалната му участ, мини на 226.
      `,nextPage:226},{text:`
      Ако желаеш да научиш какво е сполетяло чародея, продължи на 243.
      `,nextPage:243}]},210:{text:`
По този път почвата става все по-мочурлива и ненадейно насреща ви се изпречва блато.
Нагазвали ли сте вече в това блато? 
  `,choices:[{text:`
      Да — мини на 252.
      `,nextPage:252},{text:`
      Не — продължи на 204.
      `,nextPage:204}]},211:{text:`
Остава само още един въпрос — в каква посока да търсите замъка на таласъмите. Нямаш представа къде може да се намира. Но когато споделяш колебанията си, министър-предателят се обажда:
— Аз ги видях, повелителю! На запад тръгнаха. Пък не вярвам замъкът да е много далече. Инак, както се бяха натоварили, нямаше да стигнат до него.
И наистина, когато излизате в западния край на селото, без труд забелязваш следите на таласъмската орда.
— Напред, отмъстители! — провикваш се ти и повеждаш напред малката си дружина.
  `,choices:[{text:`
      Продължи на 244.
      `,nextPage:244}]},212:{text:`
— Ах, клета моя съдба! — отново се разплаква Мишемориус. — О, нещастен ази…
Повече не успяваш да изкопчиш от него нито една дума. Очевидно е, че да стоите тук ще бъде само празна загуба на време.
  `,choices:[{text:`
      Премини на 226.
      `,nextPage:226}]},213:{text:`
Всеизвестно е, че таласъмите ужасно обичат гъби. Дървеняк лакомо налапва гъбата… и изведнъж пораства толкова, че главата му опира в свода на залата.
— Някакъв номер ли се опитваше да ми направиш, нищожество? — изревава царят на таласъмите с див смях. — Е, не успя!
Сетне огромният му юмрук се стоварва върху теб.
Когато се свестяваш, лежиш в тясна килия, а около теб седят унило четиримата чукундурти.
  `,choices:[{text:`
      Продължи на 285.
      `,nextPage:285}]},214:{text:`
Фърчилан пристъпва напред и безстрашно поглежда змея.
— Добре де, ще ни ядеш. Съгласен съм. Като ти е толкоз мерак — яж ни.
Ахваш. Не си очаквал един от верните ти чукундурти да изрече подобни думи. 
  `,choices:[{text:`
      Ако незабавно отнемеш думата на Фърчилан, мини на 228.
      `,nextPage:228},{text:`
      Ако го оставиш да говори, продължи на 247.
      `,nextPage:247}]},215:{text:`
— Каква е тая джаджа? — ядосва се таласъмът и те халосва с нея по главата, а после я запокитва в кладенеца. — Вие подигравате ли ми се? Марш веднага оттук! Никаква вода за вас!
— Дай да му опаля един, бе шефе! — моли се Бабаитко. 
  `,choices:[{text:`
      Ако му разрешиш да го стори, мини на 208.
      `,nextPage:208},{text:`
      Ако се откажеш от водата и продължиш пътешествието, мини на 177.
      `,nextPage:177}]},216:{text:`
— Я чакай малко! — трепваш ти и измъкваш от торбата усуканата джаджа. — Ами това знаеш ли какво е?
— Знам, как да не знам — отвръща Мишемориус. — И това е част от машината, само че се оказа сбъркана. Като я монтирах, машината произвеждаше само обикновена вода. Затова я махнах и изработих другата. Сигурно някой от таласъмите я е отмъкнал, когато разграбиха дома ми.
  `,choices:[{text:`
      Продължи на 237.
      `,nextPage:237}]},217:{text:`
  `,choices:[{text:`
      Мини на 227.
      `,nextPage:227}]},218:{text:`
Патката наистина тежи като олово и ще трябва да я изоставите. Ако това е решението ти, отбележи си го.
  `,choices:[{text:`
      Ако си размислил и искаш да дадеш на патката някоя от другите гъби, мини на 202.
      `,nextPage:202},{text:`
      Ако решиш да експериментираш с гъбите върху себе си, продължи на 136.
      `,removeFromInventory:{item:"duck",quantity:1},nextPage:136},{text:`
      А ако не искаш да рискуваш, ще попаднеш на 154.
      `,removeFromInventory:{item:"duck",quantity:1},nextPage:154}]},219:{text:`
Предпазливо се вмъквате в пещерата и започвате слизане по дълго и стръмно каменно стълбище.
— Нямат ли край тия стъпала, бе? — пуфти Бабаитко.
Оказва се, че имат. Най-сетне спирате в подножието на стълбището.
  `,choices:[{text:`
      Продължи на 270.
      `,nextPage:270}]},220:{text:`
Накъде отивате? 
  `,choices:[{text:`
      Напред, където би трябвало да е замъкът на таласъмите — мини на 231.
      `,nextPage:231},{text:`
      Обратно към кръстопътя — продължи на 75.
      `,nextPage:75}]},221:{text:`
Подаваш тежката лула на Бабаитко, който моментално започва да раздава свирепи удари наляво и надясно. След по-малко от минута таласъмите са натъркаляни между бъчвите.

— Да би мирно седяло, не би чудо видяло — мъдро заявява Гадолини. — Хайде да вървим.
Отправяте се към вратата в дъното, но ненадейно забелязваш отстрани друга малка вратичка. 
  `,choices:[{text:`
      Ако искаш да провериш какво има зад малката вратичка, мини на 260.
      `,nextPage:260},{text:`
      Ако предпочиташ да продължите напред, прехвърли се на 281.
      `,nextPage:281}]},222:{text:`
— Че за какво ти е огън? — озадачава се Хухавел. — Според както казва науката, змейовете са огнедишащи животни. Само като ни пуснеш две-три пламъчета…
„Въх!“, както казват чукундуртите. По всичко личи, че Хухавел ще забатачи работата. 
  `,choices:[{text:`
      Ако незабавно го прекъснеш, мини на 236.
      `,nextPage:236},{text:`
      Ако го оставиш да говори, продължи на 4.
      `,nextPage:4}]},223:{text:`
Бързо запушваш устата на Гадолини и го дръпваш назад.
— Ама чакай бе, шефе! — протестира той. — Аз… таквоз…
— Млък! — строго заповядваш ти и се обръщаш към останалите. На кого ще се довериш, след като Гадолини не оправда доверието ти? 
  `,choices:[{text:`
      На Бабаитко — мини на 166.
      `,nextPage:166},{text:`
      На Хухавел — продължи на 180.
      `,nextPage:180},{text:`
      На Фърчилан — прехвърли се на 214.
      `,nextPage:214}]},224:{text:`
Патката с апетит поглъща парченцето от червената гъба, но не забелязвате никакъв ефект. Хухавел я попипва и надава радостен вик:
— Олекнала е! Оправи се, милото ми хайванче!
— Видя ли, бе! — перва го по главата Гадолини. — Шефът си знае работата. Ама ти само хленчиш…
Обнадежден от успеха, ти се приготвяш за нов експеримент. Каква гъба ще дадеш сега на патката? 
  `,choices:[{text:`
      Жълта — мини на 107.
      `,nextPage:107},{text:`
      Синя — продължи на 140.
      `,nextPage:140},{text:`
      Черна — отгърни на 193.
      `,nextPage:193},{text:`
      Ако се откажеш от опитите с животни и искаш да изпробваш гъбите върху себе си, ще попаднеш на 136.
      `,nextPage:136},{text:`
      А ако не желаеш повече да експериментираш, прехвърли се на 154.
      `,nextPage:154}]},225:{text:`
Озовавате се в голяма кухня, където върху огъня ври казан с мазна чорба. На стената зад печката е закован надпис: „Тук се готви за негово величество Дървеняк Първи“. Усещаш познатата неприятна миризма — явно тук готвят със суха вода.
— Ама че гадост! — възкликва Фърчилан. — Хайде да се махаме. 
  `,choices:[{text:`
      Ако искаш веднага да напуснеш кухнята, мини на 255.
      `,nextPage:255},{text:`
      Ако искаш преди това да хвърлиш в чорбата сапун (стига да го имаш), продължи на 266.
      `,requiresItem:{item:"soap",quantity:1},nextPage:266},{text:`
      Ако имаш черна гъба и я пуснеш в казана, прехвърли се на 274.
      `,requiresItem:{item:"mushroomBlack",quantity:1},nextPage:274}]},226:{text:`
Напускате ридаещия Мишемориус и се връщате на пътя. Накъде ще продължите сега? 
  `,choices:[{text:`
      Напред, където би трябвало да е замъкът на таласъмите — мини на 134.
      `,nextPage:134},{text:`
      Обратно към кръстопътя — продължи на 185.
      `,nextPage:185}]},227:{text:`
Уви, планът ти не успява. Вероятно таласъмът е прескочил стъпалото със заложения капан. Така или иначе, докато тичаш надолу, изведнъж усещаш как те сграбчват две огромни лапи. Сетне върху главата ти се стоварва тежък юмрук и губиш съзнание.
  `,choices:[{text:`
      Премини на 21.
      `,nextPage:21}]},228:{text:`
Бързо сритваш Фърчилан в глезена и го дръпваш назад.
— Чакай, бе шефе! — протестира той. — Аз имах план.
— Знам ги аз твоите планове — скарваш му се ти. — От много хитрости всички ще идем в търбуха на змея.
Уви, точно това е перспективата, ако някой от другите чукундурти не се окаже по-съобразителен от Фърчилан. На кого ще се довериш сега? 
  `,choices:[{text:`
      На Бабаитко — мини на 166.
      `,nextPage:166},{text:`
      На Хухавел — продължи на 180.
      `,nextPage:180},{text:`
      На Гадолини — попадаш на 198.
      `,nextPage:198}]},229:{text:`
Заварваш Мишемориус все в същото печално положение. Клетият чародей само ридае и не успяваш да изтръгнеш от него нито една дума. Май беше съвсем излишно да идваш дотук. Освен ако си намерил с какво да му помогнеш. 
  `,choices:[{text:`
      Ако имаш чифт вехти панталони, мини на 34.
      `,requiresItem:{item:"oldTrousers",quantity:1},nextPage:34},{text:`
      Ако имаш шишенце с универсален разтворител, попадаш на 48.
      `,requiresItem:{item:"bottleOfSolvent",quantity:1},nextPage:48},{text:`
      Ако нямаш нито едното, нито другото, ще трябва да си вървиш. Продължи на 226.
      `,nextPage:226}]},230:{text:`
Раната не е сериозна, но се оказва пагубна в твоето положение. Защото когато замахваш да запокитиш тежкия снаряд срещу Дървеняк, ръката ти трепва. Динята се изплъзва и с пращене се разбива върху каменния под. 
  `,choices:[{text:`
      Не ти остава нищо друго, освен светкавично да се върнеш на 283 и да потърсиш ново решение.
      `,nextPage:283}]},231:{text:`
Отряд „Чукундуртски отмъстители“ продължава напред с бодра крачка. Постепенно пътят завива все по-надясно и доколкото можеш да прецениш, вероятно води успоредно на средния път. Но почвата започва да става мочурлива и не след дълго се изправяте пред блато.
Нагазвали ли сте вече в това блато?
  `,choices:[{text:`
      Да — мини на 252.
      `,nextPage:252},{text:`
      Не — продължи на 204.
      `,nextPage:204}]},232:{text:`
Провал! Сега само бързината може да ви помогне. Втурвате се напред, хлътвате в пещерата и побягвате надолу по някаква стръмна каменна стълба. Но зад вас трополят тежките стъпки на едрия таласъм. Заканителните му викове кънтят под свода на стълбището.
  `,choices:[{text:`
      Продължи на 246.
      `,nextPage:246}]},233:{text:`
Онова, което се случва, можеше да се предвиди. Щом патката лапва ново парченце от зелената гъба, тежестта й се увеличава многократно и тя с трясък пропада вдън земя. Хухавел с писък се хвърля към бездънната яма, но любимото му хайванче е изчезнало навеки в земните недра. Отбележи си, че оставате без патка. 
  `,removeFromInventory:{item:"duck",quantity:1},choices:[{text:`
      Ако искаш да експериментираш с останалите гъби върху себе си, мини на 136.
      `,nextPage:136},{text:`
      Ако предпочиташ да не рискуваш, продължи на 154.
      `,nextPage:154}]},234:{text:`
— Виж какво, драги — казваш ти. — Не може ли да си затвориш очите? Пък ние ще ти се отблагодарим за водата.
— Подкуп, а? — крясва таласъмът. — Ще подкупвате един служител на негово величество Дървеняк Първи! Може! Давай каквото ще даваш.
Какво ще му дадеш?
  `,choices:[{text:`
      Шишенце суха вода — мини на 9.
      `,requiresItem:{item:"dryWater",quantity:1},nextPage:9},{text:`
      Огледалце — продължи на 25.
      `,requiresItem:{item:"mirror",quantity:1},nextPage:25},{text:`
      Крив макарон — прехвърли се на 64.
      `,requiresItem:{item:"macaron",quantity:1},nextPage:64},{text:`
      Кочан царевица — попадаш на 100.
      `,requiresItem:{item:"corn",quantity:1},nextPage:100},{text:`
      Калъп сапун — отгърни на 145.
      `,requiresItem:{item:"soap",quantity:1},nextPage:145},{text:`
      Книжка „Вълшебните гъби по нашите земи“ — премини на 163.
      `,requiresItem:{item:"book",quantity:1},nextPage:163},{text:`
      Стоножка в бурканче — продължи на 186.
      `,requiresItem:{item:"centipede",quantity:1},nextPage:186},{text:`
      Чифт вехти панталони — отгърни на 199.
      `,requiresItem:{item:"oldTrousers",quantity:1},nextPage:199},{text:`
      Усукана джаджа  — попадаш на 215.
      `,requiresItem:{item:"twistedTrinket",quantity:1},nextPage:215},,{text:`
      Права джаджа  — попадаш на 215.
      `,requiresItem:{item:"straightTrinket",quantity:1},nextPage:215},{text:`
      Ако се откажеш от водата и продължиш пътешествието, мини на 177.
      `,nextPage:177}]},235:{text:`
— Я! — зяпва таласъмът. — Ама вие значи сте врагове на Дървеняк! Бравос! Тъй му се пада на проклетника! Толкоз години ме тормози… Аз съм, дето се вика, баш-бая главен готвач, пък той ще ме кара да готвя със суха вода! Сухоежбина ще ме кара да готвя, дървенякът му с дървеняк…
— Къде можем да го намерим? — обажда се Фърчилан.
Таласъмът махва с ръка.
— Лесно ще го намерите. То, сегашният замък не е голям като едно време. Вървете все направо и ще стигнете при Дървеняк.
  `,choices:[{text:`
      Мини на 255.
      `,nextPage:255}]},236:{text:`
Бързо пристъпваш напред и запушваш устата на Хухавел. Не можеш да се надяваш на него в тази ситуация. На кого ще се довериш в такъв случай? 
  `,choices:[{text:`
      На Бабаитко — мини на 166.
      `,nextPage:166},{text:`
      На Гадолини — попадаш на 198.
      `,nextPage:198},{text:`
      На Фърчилан — прехвърли се на 214.
      `,nextPage:214}]},237:{text:`
Напускате благодарния Мишемориус и се връщате на пътя. Накъде ще продължите сега?
  `,choices:[{text:`
      Напред, където би трябвало да е замъкът на таласъмите — мини на 134.
      `,nextPage:134},{text:`
      Обратно към кръстопътя — продължи на 185.
      `,nextPage:185}]},238:{text:`
Под напора на Бабаитко вратичката изпращява и се отваря. Чукундуртите прекрачват навътре… и ахват в един глас.
Попаднали сте в царството на изобилието. От тавана висят гроздове суджуци и пушени бутове, наоколо се извисяват качета сланина и сирене, край стените се трупат камари от пити кашкавал. По-нататък смътно различаваш чували, кошове, сандъци… Ясно е като бял ден, че сте попадали в склада за хранителни припаси.
— Еха-а-а! — провиква се Бабаитко. — Сега ще се наядем като хората… пардон, като чукундуртите!
В очите на цялата ти дружина пламва алчен блясък.
  `,choices:[{text:`
      Продължи на 272.
      `,nextPage:272}]},239:{text:`
— Напред, отмъстители! — призоваваш ти и пръв тръгваш напред.
Подир теб всички нагазват в блатото. Впрочем, не всички — Гадолини е подкупил Бабаитко да го носи на гърба си срещу парче вехт канап. Отначало калната вода стига само до глезените ви, но малко по малко стига до коленете, до кръста…
— Ще се издавим, шефе! — уплашено подвиква Хухавел. — Да се връщаме, а?
— Няма страшно! — успокоява го Гадолини от раменете на Бабаитко. — Малко вода няма да ни навреди.
Кого ще подкрепиш? 
  `,choices:[{text:`
      Хухавел — мини на 205.
      `,nextPage:205},{text:`
      Гадолини — продължи на 249.
      `,nextPage:249}]},240:{text:`
Оглеждаш кладенеца и махваш с ръка.
— Добре беше да налеем малко вода, но няма в какво.
— Слушай, шефе, от издълбана диня става чудесна манерка — обажда се Хухавел.
Поглеждаш го с изненада. Гледай го ти, чукундуртът му с чукундурт! Той бил и изобретателен! 
  `,choices:[{text:`
      Ако имаш диня и я пожертваш, за да си изработиш манерка, продължи на 18.
      `,requiresItem:{item:"watermelon",quantity:1},removeFromInventory:{item:"watermelon",quantity:1},nextPage:18},{text:`
      В противен случай ще трябва да се откажеш от водата и да продължиш напред — на 43.
      `,nextPage:43}]},241:{text:`
Макар и чукундурт, Гадолини не може да е чак толкова прост. Оставяш го да говори и с изтръпнало сърце изчакваш да видиш как ще се развият нещата.
— Е, тъй да бъде — скръбно подсмръква Гадолини. — Като ще ни ядеш, поне да е по-бързо. Хайде сега затвори очите и кажи „А-а-а-а“.
Змеят послушно затваря очи и зяпва широко. Гадолини извръща глава, намига ви и вие хуквате обратно в посоката, от която сте дошли. Впрочем, коя е тази посока?
  `,choices:[{text:`
      Към кръстопътя — мини на 89.
      `,nextPage:89},{text:`
      Към бялата къща — продължи на 68.
      `,nextPage:68}]},242:{text:`
Мини на 250.
  `,choices:[{text:`
      Мини на 250.
      `,nextPage:250}]},243:{text:`
— Всичко започна съвсем невинно — хлипа Мишемориус. — Напоследък страдам от ревматизъм, та влагата взе да ме дразни. И почнах да си мисля колко хубаво би било да изобретя разни сухи работи. Сухо вино, сух салам, сухо мляко, суха супа… Обаче за всичко това трябваше да има суха вода. Е, аз съм голям изобретател. Седнах и създадох сухата вода.
— Велик учен, шефе! — възкликва Хухавел и се обръща към чародея. — А после какво стана?
— После се появи онзи проклет Дървеняк — изплаква Мишемориус. — Излъга ме, че щял да прави фабрика за суха супа. А пък аз като последен глупак се хванах на въдицата и му направих машина за производство на суха вода. Едва по-късно узнах какви са в действителност сатанинските му планове. Ала вече нищо не можех да сторя.
— Как тъй? — изненадва се Фърчилан. — Нали уж си чародей? С една-две магии можеш да разгониш таласъмите.
Мишемориус се разплаква още по-силно.
— Можех. Но ако знаете само какво чудовищно коварство проявиха! Първо ми строшиха магическия жезъл, а после… после… Не, нямам сили да го изкажа!
— Кажи де, кажи — утешава го Хухавел. — Не си първият мъченик на науката.
— Залепиха ми панталона с туткал за стола — изплаква най-сетне Мишемориус. — И сега не мога да мръдна оттук.
— Ами че свали го тоя проклет панталон — предлага Хухавел.
Мишемориус подсмръква жално.
— Да-да! И къде ще ходя без гащи? Да ми се смеят хората. Вижте го, ще рекат, уж голям чародей, пък без гащи тръгнал.
Хухавел се замисля, после изтичва навън и след малко се връща с панталоните на поваления таласъм.
— Ето, вземи това.
Но панталоните са толкова мръсни и дрипави, че чародеят само им хвърля един поглед и унило поклаща глава.
— Абе, тук ще си стоя. Тя моята свърши…
И той отново се разплаква.
— Да си вървим, шефе — предлага Бабаитко. — Нали ти рекох, хак му е. Друг път да знае как се изобретява. 
  `,choices:[{text:`
      Ако си съгласен да оставиш Мишемориус на печалната му участ, мини на 226.
      `,nextPage:226},{text:`
      Ако искаш да помогнеш на нещастника, продължи на 11.
      `,nextPage:11}]},244:{text:`
През цялото утро неуморно вървите напред през ливади, горички, пущинаци, поточета и долчинки. Тук-там различавате дирята на таласъмите, но когато наближава пладне, почвата става камениста и следите изчезват. Продължавате в същата посока, макар че вече нищо не ви подсказва дали сте на прав път или не.
— Уф, изморих се — промърморва по някое време Бабаитко. — Дайте да спрем за почивка и да хапнем по нещо.
— Никакви такива! — строго възразяваш ти. — Ако искате, ще спрем да починем. Обаче съдържанието на торбата ще пазим за краен случай.
При тия думи те обзема лека тревога. Трябва да провериш какво става с торбата. На кого си поверил да я носи?
  `,choices:[{text:`
      На Хухавел — мини на 15.
      `,requiresBagCarrier:"Хухавел",nextPage:15},{text:`
      На Бабаитко — продължи на 36.
      `,requiresBagCarrier:"Бабаитко",nextPage:36},{text:`
      На Фърчилан — прехвърли се на 69.
      `,requiresBagCarrier:"Фърчилан",nextPage:69},{text:`
      На Гадолини — попадаш на 80.
      `,requiresBagCarrier:"Гадолини",nextPage:80},{text:`
      Сам носиш торбата — отгърни на 105.
      `,requiresBagCarrier:"самият ти",nextPage:105}]},245:{text:`
  С нисък поклон таласъмът отваря една врата и посочва навътре. 
  — Заповядайте, скъпи гости! Радост наша ненагледна, дето се вика… 
  Прекрачвате прага… и се озовавате в тясна килия. Преди да реагирате, вратата се захлопва зад вас. През тясното прозорче върху нея наднича ухилената физиономия на таласъма. 
  — Шпиони сте, познах ви от пръв поглед — киска се той. — Ама и аз не съм вчерашен. Е, полежете си сега тук. Друго не заслужавате! 
  И таласъмът се отдалечава по мрачния коридор. 
  Пристъпваш към вратата на килията и надникваш навън през тясното прозорче. Изведнъж сърцето ти трепва. На една кука, забита в отсрещната стена, виси връзка ключове. Провираш ръка през отвора, ала колкото и да се протягаш, не ти достига поне една педя, за да докоснеш ключовете. 
  Очевидно ще трябва да си послужиш с нещо. Но какво можеш да измъкнеш от торбата сега? 
  `,choices:[{text:`
      Права джаджа — мини на 170. 
      `,requiresItem:{item:"straightTrinket",quantity:1},removeFromInventory:{item:"straightTrinket",quantity:1},nextPage:170},{text:`
      Усукана джаджа — продължи на 265. 
      `,requiresItem:{item:"twistedTrinket",quantity:1},removeFromInventory:{item:"twistedTrinket",quantity:1},nextPage:265},{text:`
      Крив макарон — прехвърли се на 278. 
      `,requiresItem:{item:"macaron",quantity:1},removeFromInventory:{item:"macaron",quantity:1},nextPage:278},{text:`
      Преносима дупка — попадаш на 286. 
      `,requiresItem:{item:"hole",quantity:1},removeFromInventory:{item:"hole",quantity:1},nextPage:118},{text:`
      Ако нямаш нито един от изброените предмети, отгърни на 262. 
      `,nextPage:118}]},246:{text:`
Ако имаш царевица, мини на 13.
Ако имаш сапун, продължи на 38.
А ако имаш и двете, избери с кое предпочиташ да се разделиш и премини на съответния епизод.
Ако нямаш нито едното, нито другото, попадаш на 84.
  `,choices:[{text:`
      Ако имаш царевица, мини на 13.
      `,requiresItem:{item:"corn",quantity:1},removeFromInventory:{item:"corn",quantity:1},nextPage:13},{text:`
      Ако имаш сапун, продължи на 38.
      `,requiresItem:{item:"soap",quantity:1},removeFromInventory:{item:"soap",quantity:1},nextPage:38},{text:`
      Ако нямаш нито едното, нито другото, попадаш на 84.
      `,nextPage:84}]},247:{text:`
— Ама все пак трябва да има някакъв ред — строго продължава Фърчилан. — Не може то така безразборно да е яде.
— Че какъв ред да има? — обърква се змеят. — Аз ако ви река да се подредите, знаеш ли какво ще стане? Всеки ще се натиска да е последен.
— Точно така — кимва Фърчилан. — Затова подреждането трябва да става по обективни критерии. Знаеш ли какво ще направим? Конкурс.
— Конкурс… — глуповато повтаря змеят и поклаща глава. — Добре, ама как ще го направим?
— Много просто — усмихва се Фърчилан. — Ние четиримата си уреждаме надбягване до отсрещния край на тунела. Който стигне последен — него ще изядеш пръв. Един вид обратна класация. Ти си умен змей, разбираш ги тия работи.
— Вярно, много съм умен — кимва змеят. — Бягайте да ви видя.
— Внимание! — провиква се Фърчилан. — Едно, две, три, старт!
Всички светкавично се втурвате покрай змея. Вече сте се отдалечили доста от него, когато зад вас избухва оглушителен рев:
— Хе-е-е-ей! Вие май ме измамихте! Чакайте!
Но сега не сте в настроение да чакате. Тичате с всичка сила… накъде всъщност? 
  `,choices:[{text:`
      Напред, където би трябвало да е замъкът на таласъмите — мини на 68.
      `,nextPage:68},{text:`
      Към кръстопътя — продължи на 89.
      `,nextPage:89}]},248:{text:`
Всеизвестно е, че таласъмите ужасно обичат гъби. Дървеняк лакомо налапва гъбата… и изведнъж се смалява като мравка.
— И това ми било цар! — ухилва се презрително Бабаитко. — Пу!
И той заплюва микроскопичния таласъм.
Може би знаеш, а може би и не, но според едно древно предсказание Дървеняк ще умре от вода. А какво друго е слюнката, освен вода? Раздава се тъничък, пронизителен писък и царят на таласъмите изчезва навеки от лицето на земята.
  `,choices:[{text:`
      Продължи на 295.
      `,nextPage:295}]},249:{text:`
Вече сте нагазили до гърди, когато от тинята наоколо започват да надничат странни физиономии — зелени и пъпчиви, с грамадни жабешки очи.
— Олеле, блатни таласъми! — изписква Хухавел. — Да бягаме назад!
— Ама не бойте се, бе! — обажда се отвисоко Гадолини. — Нищо няма да ни сторят. Те са кротки твари, не са като сухоземните таласъми. Дайте да си вървим по пътя, пък те и с пръст няма да ни пипнат.
Чие мнение ти се вижда по-приемливо?
  `,choices:[{text:`
      На Хухавел — мини на 205.
      `,nextPage:205},{text:`
      На Гадолини — продължи на 3.
      `,nextPage:3}]},250:{text:`
Изведнъж горе се раздава трясък и трополене. Успех! Таласъмът е стъпил върху царевицата! Прилепвате се към стената и след секунди грамадното му туловище прелита покрай вас с невъобразима скорост. Сетне нейде отдолу долита нов трясък и настава тишина.
  `,choices:[{text:`
      Продължи на 263.
      `,nextPage:263}]},251:{text:`
Скоро достигате сливането на двата пътя. По кой от тях ще продължиш? 
  `,choices:[{text:`
      Направо по средния път — мини на 141.
      `,nextPage:141},{text:`
      Надясно по отклонението, което беше ляво, когато го гледахте от кръстопътя — продължи на 210.
      `,nextPage:210}]},252:{text:`
А какви са отношенията ви с блатните таласъми?
  `,choices:[{text:`
      Добри — мини на 27.
      `,nextPage:27},{text:`
      Не твърде добри — продължи на 74.
      `,nextPage:74}]},253:{text:`
Косата ти настръхва, когато разбираш какво е имал предвид Гадолини, като говореше за пиене „с мярка“. Край бъчвите се търкалят няколко тенекиени мерки по един литър. Чукундуртите бодро ги грабват и само след минута пред очите ти се разиграва етюд на тема „Пиянството на един народ“.
  `,choices:[{text:`
      Продължението — 182 или 272.
      `,nextPage:[182,272]}]},254:{text:`
С вас ли е патката на Хухавел?
  `,choices:[{text:`
      Да — мини на 153.
      `,requiresItem:{item:"duck",quantity:1},nextPage:153},{text:`
      Не — продължи на 219.
      `,nextPage:219}]},255:{text:`
След като напускате кухнята, ти оглеждаш отсрещната врата. 
  `,choices:[{text:`
      Ако искаш да видиш какво има зад нея, мини на 257.
      `,nextPage:257},{text:`
      Ако предпочиташ да продължиш направо по коридора, прехвърли се на 30.
      `,nextPage:30}]},256:{text:`
Мишемориус ви посреща бодър и радостен. Но от посещението тук няма кой знае каква полза. От чародея вече не можете да научите нищо важно. Все пак трябва да отбележим, че зърваш в ъгъла да се търкаля празна кратунка. Ако искаш, можеш да я вземеш.
  `,choices:[{text:`
      Продължи на 237.
      `,addToInventory:{item:"groud",quantity:1},nextPage:237}]},257:{text:`
Отваряте вратата и попадате в коридор с няколко врати. Срещу вас слисано мига стар таласъм с връзка ключове на пояса. Няколко секунди той ви зяпа изненадано, после погледът му спира върху лицето ти.
— Скъпи гости! — ахва внезапно таласъмът. — Тъкмо вас чаках! Елате, елате! 
  `,choices:[{text:`
      Ако искаш да го последвате, мини на 245.
      `,nextPage:245},{text:`
      Ако предпочиташ да отклониш поканата, продължи на 268.
      `,nextPage:268}]},258:{text:`
От устните на Дървеняк излита злобен смях.
— Тъй ли? Та нима имаш дарове, достойни за велик цар като мен?
Какво ще измъкнеш от торбата? 
  `,choices:[{text:`
      Вълшебна гъба — мини на 269.
      `,nextPage:269},{text:`
      Крив макарон — продължи на 276.
      `,requiresItem:{item:"macaron",quantity:1},nextPage:276},{text:`
      Огледалце — прехвърли се на 282.
      `,requiresItem:{item:"mirror",quantity:1},nextPage:282},{text:`
      Стоножка в бурканче — попадаш на 288.
      `,requiresItem:{item:"centipede",quantity:1},nextPage:288},{text:`
      Усукана джаджа — отгърни на 290.
      `,requiresItem:{item:"twistedTrinket",quantity:1},nextPage:290},{text:`
      Права джаджа — премини на 196.
      `,requiresItem:{item:"straightTrinket",quantity:1},nextPage:196},{text:`
      Ако нямаш нищо от изброеното, ще трябва да се биеш — продължи на 283.
      `,nextPage:283}]},259:{text:`
Мини на 227.
  `,choices:[{text:`
      227.
      `,nextPage:227}]},260:{text:`
Вратичката обаче е заключена, тъй че всичките ви опити да я отворите завършват с неуспех.
— Абе, я да вземем да я изкъртим! — ядосва се Бабаитко. — Какво ще ми се опъва! 
  `,choices:[{text:`
      Ако му разрешиш да изкърти вратата, мини на 238.
      `,nextPage:238},{text:`
      Ако предпочиташ да продължите напред, прехвърли се на 281.
      `,nextPage:281}]},261:{text:`
Повеждаш мърморещите чукундурти към отсрещната врата… и изведнъж застиваш, защото вратата се отваря и насреща ви изникват четирима грамадни таласъми.
— Хей, вие! — крясва най-едрият. — Какво търсите тук?
Този път дори хитрият Гадолини се обърква.
— Ами ние… такова…
— Шпиони! — изревава таласъмът. — Дръжте ги!
Без да чакат втора покана, таласъмите се втурват напред и започва люта схватка.
  `,choices:[{text:`
      Ако имаш лула на мира, мини на 221.
      `,requiresItem:{item:"pipe",quantity:1},nextPage:221},{text:`
      В противен случай продължи на 277.
      `,nextPage:277}]},262:{text:`
— Абе, спукана ни е работата, ами дайте поне да си попеем — предлага Бабаитко.
Поглеждаш го изненадано. Чукундуртска му работа! На тебе ти се плаче, а той иска да пеете.
  `,choices:[{text:`
      Ако все пак се съгласиш с предложението, мини на 271.
      `,nextPage:271},{text:`
      Ако не ти е до песни, продължи на 285.
      `,nextPage:285}]},263:{text:`
В подножието на стълбата откривате неподвижното тяло на таласъма. Забил се е с пълна скорост в стената и сега няма вероятност да се свести, преди да минат поне пет-шест часа.
  `,choices:[{text:`
      Продължи на 270.
      `,nextPage:270}]},264:{text:`
— Правилно! — възкликваш ти. — Пийнете си, драги приятели, докато дойде нашият скъп отговорник по вината.
И с тия думи ти наливаш на таласъмите по една пълна мярка вино, като не забравяш да добавиш и по стръкче от билката.
— Какви са тия треволяци? — подозрително пита едрият таласъм.
— Специална подправка за по-добър вкус на виното — успокояваш го ти. — Наша дегустаторска тайна.
Билката се оказва направо вълшебна. След по-малко от две минути таласъмите лежат мъртвопияни.
— Хайде, не се мотайте, ами дайте да изчезваме, додето не е дошъл онзи отговорник по вината — подканва ви Фърчилан.
Предложението му бива прието единодушно. Отправяте се към вратата в дъното, но ненадейно забелязваш отстрани друга малка вратичка. 
  `,choices:[{text:`
      Ако искаш да провериш какво има зад нея, мини на 260.
      `,nextPage:260},{text:`
      Ако предпочиташ да продължите напред, прехвърли се на 281.
      `,nextPage:281}]},265:{text:`
Усуканата джаджа изобщо не може да мине през прозорчето, тъй че трябва да се върнеш на 132 и да направиш нов избор.
  `,choices:[{text:`
      132      `,nextPage:132}]},266:{text:`
Ненадейно измежду купищата паници на съседната маса се появява съвсем дребен таласъм, въоръжен с вилица и кафеник.
— Какво пусна в казана? — подозрително пита той.
Какво ще му отговориш?
  `,choices:[{text:`
      „Не е твоя работа“ — мини на 70.
      `,nextPage:70},{text:`
      „Много вкусна подправка за царската трапеза“ — продължи на 148.
      `,nextPage:148},{text:`
      „Сапун, та дано да му преседне на проклетия Дървеняк“ — попадаш на 235.
      `,nextPage:235},{text:`
      Без излишни приказки ще пернеш ситния таласъм по главата — прехвърли се на 293.
      `,nextPage:293}]},267:{text:`
Първото, което виждаш, е един висок и мършав таласъм, облечен в черно. Желязната корона върху главата му е недвусмислено доказателство, че стоиш пред Дървеняк Първи. Зад него са се струпали десетки, може би дори стотици таласъми. За момент в очите му проблясва изненада, ала веднага след това я заменя дива злоба.
— Знам кой си! — виква царят на таласъмите. — Ти погуби клетия ми татко. Сега ще загинеш от царската ми десница! Затова ли си дошъл, нещастнико? Е, ще си го получиш!
Какво ще му отговориш?
  `,choices:[{text:`
      Че идваш с дарове и предложение за мир — мини на 258.
      `,nextPage:258},{text:`
      Че си дошъл да го унищожиш и смяташ да успееш — продължи на 283.
      `,nextPage:283}]},268:{text:`
— Не сега, някой друг път — любезно отговаряш ти и извеждаш дружината си обратно. 
  `,choices:[{text:`
      Ако искаш да видиш какво има зад отсрещната врата, мини на 225.
      `,nextPage:225},{text:`
      Ако продължиш напред по коридора, прехвърли се на 30.
      `,nextPage:30}]},269:{text:`
Помисли много внимателно! Ако не познаваш свойствата на вълшебните гъби, може би ще е по-разумно да се върнеш на 258 и да направиш нов избор. А ако си решил твърдо, избирай каква гъба ще дадеш на Дървеняк. 
  `,choices:[{text:`
      Жълта — мини на 213.
      `,nextPage:213},{text:`
      Синя — продължи на 248.
      `,nextPage:248},{text:`
      Червена — прехвърли се на 273.
      `,nextPage:273},{text:`
      Зелена — попадаш на 287.
      `,nextPage:287},{text:`
      Черна — отгърни на 292.
      `,nextPage:292}]},270:{text:`
Коридорът пред вас се спуска плавно надолу. Осветяват го мътните лъчи на факли, прикрепени тук-там към стените. Повеждаш своята дружина напред, но след малко забелязваш две врати — отляво и отдясно.
Ако продължиш напред по коридора, мини на 30.
Ако искаш да влезеш в някоя от вратите, избирай:
  `,choices:[{text:`
      Ако продължиш напред по коридора, мини на 30.
      `,nextPage:30},{text:`
      Лявата — мини на 225.
      `,nextPage:225},{text:`
      Дясната — продължи на 257.
      `,nextPage:257}]},271:{text:`
Речено-сторено. Подбирате подходяща за случая песен и след малко цялата тъмница се тресе от задружните ви гласове:
Вземи ме, главо дебе-ела!
Вземи ме, главо дебе-ела!
Вземи ме, главо де-ебела, йох аман-аман
въ-ъв твойта тясна панде-ела!
Но едва сте стигнали до втория куплет, когато през прозорчето на вратата надниква стар, брадясал таласъм.
— Ей, диванета! Как тъй ще ми обиждате панделата? И кого наричате „глава дебела“?
— Когото си искаме, него наричаме — предизвикателно отговаря Бабаитко.
— Когото си искате, ама ако вляза, лошо ви се пише — изръмжава таласъмът.
— Ела де, ела! — репчи се Бабаитко. — Като ти опаля един по зелката…
Хухавел те дръпва за ръкава.
— Шефе, кажи му да си трае, че по-лошо ще стане!
Ще послушаш ли Хухавел? 
  `,choices:[{text:`
      Да — мини на 291.
      `,nextPage:291},{text:`
      Не — продължи на 52.
      `,nextPage:52}]},272:{text:`
Така и не успяваш да се пребориш с чукундуртската лакомия. Петнайсет минути по-късно всичките ти спътници лежат неподвижни, с издути тумбаци и напълно откъснати от действителността.
Ненадейно вратата в дъното се отваря и към вас се задават четирима грамадни таласъми.
— Ха! — изненадва се най-едрият. — Тия пък кои са? Бас държа, че са шпиони. Да ги заловим!
Без да чакат втора покана, таласъмите се втурват напред и още първият удар те поваля в безсъзнание.
  `,choices:[{text:`
      Мини на 21.
      `,nextPage:21}]},273:{text:`
Всеизвестно е, че таласъмите ужасно обичат гъби. Дървеняк лакомо налапва гъбата… и изведнъж полита към свода на залата, където увисва в нелепа поза.
— Проклетници! — яростно крещи царят на таласъмите. — На балон ме направиха! Дръжте ги! В тъмницата!
Стотици таласъми се нахвърлят върху вас и въпреки яростната съпротива след няколко минути попадате в тясна килия.
  `,choices:[{text:`
      Мини на 285.
      `,nextPage:285}]},274:{text:`
Ненадейно измежду купищата паници на съседната маса се появява съвсем дребен таласъм, въоръжен с вилица и кафеник.
— Какво пусна в казана? — подозрително пита той.
Какво ще му отговориш?
  `,choices:[{text:`
      „Не е твоя работа“ — мини на 70.
      `,nextPage:70},{text:`
      „Много вкусна подправка за царската трапеза“ — продължи на 148.
      `,nextPage:148},{text:`
      „Отрова, та дано да пукне проклетият Дървеняк“ — попадаш на 235.
      `,nextPage:235},{text:`
      Без излишни приказки ще пернеш ситния таласъм по главата — прехвърли се на 293.
      `,nextPage:293}]},275:{text:`
Без колебание отваряш вратата и се промъкваш през нея, следван от чукундуртите. Смътно различаваш просторна зала, сред която се извисява огромна машина. Множество таласъми се суетят около странното приспособление.
— Насам! — прошепва Гадолини и те придърпва настрани.
Трескаво пролазвате към стената и се укривате зад машината. В същия момент от другата страна долита свиреп крясък:
— Некадърници! Всичките ще ви избеся! На кол ще ви побия!
— Ама недейте така, ваше величество — жално ломоти тънък гласец. — Ние полагаме всички усилия!
— Като ги полагате, защо не работи машината? — пита свирепият глас.
— Ами то… техниката… тя не е проста работа…
Ненадейно вратата изскърцва и из залата се раздава вик:
— Ваше величество! Шпиони! Видели са ги да идват насам!
— Претърсете всичко! — заповядва гневният глас. — Намерете ми ги под дърво и камък!
Побиват те ледени тръпки. Обречени сте! Но по-добре да загинете в бой, отколкото да се свивате като мишки в капан.
— След мен, отмъстители! — извикваш ти и изскачаш от скривалището.
  `,choices:[{text:`
      Продължи на 267.
      `,nextPage:267}]},276:{text:`
Преди да обясниш за какво служи макаронът, Дървеняк го изхрупва и се навъсва.
— Вкусно, но съвсем не е подарък, достоен за цар като мен. Само това ли имаш, нещастнико? 
  `,choices:[{text:`
      Ако искаш да му предложиш по-подходящ подарък, върни се на 258 и направи нов избор.
      `,nextPage:258},{text:`
      Ако смяташ, че е време да го нападнеш, продължи на 283.
      `,nextPage:283}]},277:{text:`
Твоите чукундурти се бият като лъвове, ала личи, че предимството е на страната на таласъмите. Впрочем, ти така и не дочакваш да разбереш как е завършила схватката, защото жесток удар по главата те поваля в безсъзнание.
  `,choices:[{text:`
      Мини на 21.
      `,nextPage:21}]},278:{text:`
Протягаш до болка ръка… и наистина успяваш да закачиш ключовете. Но щом опитваш да ги смъкнеш от куката, крехкият макарон се строшава. 
  `,removeFromInventory:{item:"macaron",quantity:1},choices:[{text:`
      Отбележи си загубата му и се върни на 132 за нов избор.      `,nextPage:132}]},279:{text:`
— Пийнете си, пийнете си — кимваш ти. — А пък ние да вървим, че и друга работа ни чака.
— Стой! — крясва едрият. — Накъде така? Ще стоите докато разберем дали наистина сте дегустатори.
— Я да си затваряш устата, че като ти опаля един по манерката… — заканва се Бабаитко.
— Ти ли ще ми опалиш, бе, запъртък? — озъбва се едрият таласъм. — Шпионин с шпионин!
Преди да сториш каквото и да било, избухва люта битка. 
  `,choices:[{text:`
      Ако имаш лула на мира, мини на 221.
      `,requiresItem:{item:"pipe",quantity:1},nextPage:221},{text:`
      В противен случай продължи на 277.
      `,nextPage:277}]},280:{text:`
Когато вижда в ръцете ти съдинката, Дървеняк се разтреперва цял и от устните му излита див рев:
— Милост! Милост!
Ала ти без колебания плисваш водата право в лицето му.
  `,choices:[{text:`
      Мини на 294.
      `,nextPage:294}]},281:{text:`
Озовавате се в нов коридор, който продължава плавно да слиза надолу към земните недра. Минавате край едно разклонение и ти се питаш дали да не тръгнете по него, ала веднага се отказваш, когато забелязваш изрисувана едра стрелка и под нея надпис: КЪМ СПАЛНИТЕ ПОМЕЩЕНИЯ. Тъй че повеждаш чукундуртите право напред.
Коридорът прави завой и завършва с поредната врата. Докато се колебаеш дали да я отвориш, изотзад долита тропот. Няма време за колебание. Каквото и да ви очаква от другата страна, трябва да влезете.
  `,choices:[{text:`
      Премини на 275.
      `,nextPage:275}]},282:{text:`
— Само да не е някакъв номер — подозрително промърморва Дървеняк, после се опулва срещу огледалцето и пита: — Огледалце, огледалце, кой е най-красив на земята?
За беда огледалцето отговаря категорично:
— Ти, Дървеняк, си надарен с несъмнена красота, ала далеч по-красив от тебе е малкият Бабаитко!
— Негоднико! — изревава Дървеняк. — Ти ми се подиграваш с това огледалце! Сега ще умреш!
  `,choices:[{text:`
      Продължи на 283.
      `,nextPage:283}]},283:{text:`
Решението ти е доблестно, ала едва сега откриваш, че не разполагаш с оръжие. Ще трябва да се биеш с подръчни средства. Какво ще измъкнеш от торбата?
  `,choices:[{text:`
      Чукундур (цвекло) — мини на 289.
      `,requiresItem:{item:"beetroot",quantity:1},nextPage:289},{text:`
      Съдинка с вода — продължи на 280.
      `,requiresItem:{item:"water",quantity:1},nextPage:280},{text:`
      Усукана джаджа — прехвърли се на 290.
      `,requiresItem:{item:"twistedTrinket",quantity:1},nextPage:290},{text:`
      Права джаджа — попадаш на 196.
      `,requiresItem:{item:"straightTrinket",quantity:1},nextPage:196},{text:`
      Диня — отгърни на 6.
      `,requiresItem:{item:"watermelon",quantity:1},nextPage:6},{text:`
      Преносима дупка — премини на 92.
      `,requiresItem:{item:"hole",quantity:1},nextPage:92},{text:`
      Ако нямаш нищо от изброеното, продължи на 106.
      `,nextPage:106}]},284:{text:`
— На ти, негоднико! — свирепо изреваваш ти и с всичка сила захвърляш динята.
Зрелият плод с пращене се разбива в главата на Дървеняк. По царската физиономия бликва сладък сок. А после…
Може би знаеш, а може би и не, но според едно древно предсказание Дървеняк ще умре от вода. А какво друго е сокът на динята, освен вода? Раздава се оглушителен писък и царят на таласъмите изчезва навеки от лицето на земята.
  `,choices:[{text:`
      Продължи на 295.
      `,nextPage:295}]},285:{text:`
Уви, този път нищо не можеш да сториш. Ти и твоите верни чукундурти ще прекарате дълги месеци в тъмницата под най-строга охрана. А когато най-сетне успеете да избягате, ще заварите навън само опустошена гора. Пъкленото дело на Дървеняк е приключило и ти не успя да му попречиш.
  `,choices:[],end:!0},286:{text:`
Разгъваш дупката, лепваш я на стената… и пред теб се появява широк отвор. Обръщаш се и кимваш на спътниците си.
— Да бягаме!
Едва когато се озоваваш от другата страна, откриваш един неприятен факт — няма начин да прибереш дупката. Би могъл да го сториш само откъм килията, а това означава да останеш вътре. Е, няма как, ще трябва да се примириш със загубата.
Изтичвате по къс коридор, отваряте една врата и се озовавате в нов, по-широк коридор. В едната посока той се спуска полегато към земните дълбини. От другата страна забелязваш наблизо стълбище, което води нагоре — несъмнено това е изходът. А точно срещу себе си забелязваш врата в стената на коридора. Какво ще направиш сега?
  `,choices:[{text:`
      Ще провериш какво има зад вратата отсреща — мини на 225.
      `,nextPage:225},{text:`
      Ще се измъкнеш по стълбището нагоре и ще се откажеш от опасното приключение — продължи на 39.
      `,nextPage:39},{text:`
      Ще тръгнеш по коридора към вътрешността на подземния замък — попадаш на 30.
      `,nextPage:30}]},287:{text:`
Всеизвестно е, че таласъмите ужасно обичат гъби. Дървеняк лакомо налапва гъбата… и изведнъж с трясък се проваля през пода на залата. Изглежда, че отдолу е имало подземна река, защото от дълбините долита цамбуркане, отчаян писък… а сетне настава тишина. Сбъдна се древното предсказание (за което може да си чувал, а може и да не си) — че Дървеняк ще умре от вода.
  `,choices:[{text:`
      Продължи на 295.
      `,nextPage:295}]},288:{text:`
— Каква е тая гадост? — навъсва се Дървеняк. — Ти подиграваш ли се с мен? 
  `,choices:[{text:`
      Ако искаш да му предложиш по-подходящ подарък, върни се на 258 и направи нов избор.
      `,nextPage:258},{text:`
      Ако смяташ, че е време да го нападнеш, продължи на 283.
      `,nextPage:283}]},289:{text:`
Отчаяно измъкваш цвеклото и замахваш срещу царя на таласъмите. Ала в този момент се случва нещо неописуемо.
Над цвеклото избухва ослепително сияние и във въздуха се появява безплътният образ на стар, достолепен чукундурт в бели одежди. Хухавел, Бабаитко, Фърчилан и Гадолини веднага се просват по очи с пронизителен вик:
— Духът на свещения чукундур!
Из залата се разнася тътнещият глас на духа:
— Дървеняк, ти стори велики злини на моя верен народ. Дойде време да плащаш!
В ръцете му се появява златна съдинка с вода.
— Милост! — изпищява царят на таласъмите.
Ала духът на свещения чукундур без колебание плисва съдинката право в лицето му и изчезва.
  `,choices:[{text:`
      Продължи на 294.
      `,nextPage:294}]},290:{text:`
— Ваше величество! — пронизително се провиква един от таласъмите. — Тъкмо такава джаджа ни трябваше за машината!
— Аха! — ухилва се Дървеняк. — Значи сам ми донесе инструмента за моето дело, нещастнико! Е, сега ще станеш свидетел на триумфа ми. Дръжте го!
Преди да сторите каквото и да било, върху вас се нахвърля цяла тълпа таласъми. Стиснати здраво от десетки ръце, вече не можете и да помръднете. Майсторите сръчно монтират усуканата джаджа в грамадната машина и след малко шефът им козирува пред Дървеняк.
— Готово, ваше величество. Машината за производство на суха вода е в пълна изправност.
Дървеняк ти хвърля злобна усмивка, после пристъпва към машината и дръпва един голям лост.
Клетият Дървеняк! Той не знае онова, което може би си научил от Мишемориус (а може и да не си го научил, но поне сега ще го разбереш). Усуканата джаджа е дефектна. С нея машината е в състояние да произвежда само най-обикновена вода.
И наистина, след миг право върху слисания цар на таласъмите бликва струя бистра вода.
  `,choices:[{text:`
      Мини на 294.
      `,nextPage:294}]},291:{text:`
— Я млъквай! — скарваш се ти на Бабаитко и чукундуртът обидено се отдръпва в ъгъла.
Възцарява се печално настроение. Вече не ви е до песни.
  `,choices:[{text:`
      Мини на 285.
      `,nextPage:285}]},292:{text:`
Всеизвестно е, че таласъмите ужасно обичат гъби. Дървеняк лакомо налапва гъбата… и изведнъж с див писък рухва на пода в предсмъртна агония. Може случайно да си чувал древното предсказание, че царят на таласъмите щял да умре от вода. Е, какво да се прави — понякога и предсказанията грешат.
  `,choices:[{text:`
      Мини на 295.
      `,nextPage:295}]},293:{text:`
— Ще биеш, а? — пискливо виква таласъмът. — Като съм по-малък и ще ме биеш, така ли? Сега ще ти дам да разбереш!
И той с всичка сила забива вилицата в ръката ти. Ахваш от изненада и посягаш да го удариш, но таласъмът пъргаво скача от масата и изчезва в някаква миша дупка.
Оглеждаш още веднъж кухнята, но не виждаш нищо интересно и преминаваш на 255.
  `,choices:[{text:`
      Премини на 255.
      `,nextPage:255}]},294:{text:`
Щом първите капки вода докосват Дървеняк, царят на таласъмите надава пронизителен писък и започва да се топи. След броени секунди от него остава само локва мътна, зловонна течност.
Може би знаеш, а може би и не, но според едно древно предсказание Дървеняк ще умре от вода. И сега това предсказание се сбъдна — благодарение на теб!
  `,choices:[{text:`
      Продължи на 295.
      `,nextPage:295}]},295:{text:`
Виждайки гибелта на своя цар, таласъмите с писъци се хвърлят в нозете ти.
— Милост, господарю!
— Не ни затривай!
— Челяд имаме!
— Каквото заповядаш, това ще сторим!
— Само ни пощади!
— Тишина! — провикваш се ти. — Чуйте моята воля! Ще пощадя жалкия ви живот, но само при едно условие: да върнете всичко ограбено там, откъдето сте го задигнали. Инак ще си имате работа с мен! Запомнихте ли?
— Браво, шефе! — прошепва Гадолини. — Голям номер му врътна на оня гадник. По-добър и аз не можех да извъртя.
Което си е истина — истина е. Но Дървеняк заслужи своята гибел. А ти… е, твоето приключение завършва дотук. Остава да се прибереш в своята колиба насред гората и да заживееш спокойно. Поне за известно време. Кой знае, някой ден може пак да тръгнеш по пътеката на приключенията…
  
КРАЙ
  `,choices:[],end:!0}}};function ii(e,t){return e[t.item]>=t.quantity}function Cr(e,t,n){e.bag.hasOwnProperty(t)?e.bag[t]+=n:e.bag[t]=n}function _r(e,t){const{item:n,quantity:r}=t;e.bag.hasOwnProperty(n)&&(e.bag[n]>r?e.bag[n]-=r:delete e.bag[n])}function yp(e){return e.bag={},e.bag}function Pp(e,t){["Хухавел","Бабаитко","Гадолини","Фърчилан","самият ти"].includes(t)&&(e.bagCarrier=t)}function ha(e){return e.bagCarrier}function ga(e,t){return e[t]}function wp(e,t){e.condition={...e.condition,...t}}function kp(e){e.bag={},e.gold=0,e.bagCarrier="",e.condition={healthy:!0,sick:!1,injuredWithFork:!1,jailed:!1},e.mushroomProperties={yellow:{description:"увеличава онзи, който хапне от нея.",show:!1},blue:{description:"смалява многократно консуматора си.",show:!1},red:{description:"силно намалява теглото.",show:!1},green:{description:"увеличава теглото.",show:!1},black:{description:"невероятно отровна, убива жертвата за броени минути.",show:!1}},e.secret={show:!1,text:"Според едно древно предсказание на Дървеняк му е предречено, че ще издъхне моментално, ако го поръси и капка вода."},e.visitedPages=[]}function Sp(e,t){e.visitedPages.includes(t)||e.visitedPages.push(t)}function ma(e,t){return e.visitedPages.includes(t)}const va={bag:{},gold:0,bagCarrier:"",condition:{healthy:!0,sick:!1,injuredWithFork:!1,jailed:!1},mushroomProperties:{yellow:{description:"увеличава онзи, който хапне от нея.",show:!1},blue:{description:"смалява многократно консуматора си.",show:!1},red:{description:"силно намалява теглото.",show:!1},green:{description:"увеличава теглото.",show:!1},black:{description:"невероятно отровна, убива жертвата за броени минути.",show:!1}},secret:{show:!1,text:"Според едно древно предсказание на Дървеняк му е предречено, че ще издъхне моментално, ако го поръси и капка вода."},visitedPages:[]},ya=({title:e,inventory:t,onTrade:n,tradeAction:r,prices:l})=>{const[i,o]=C.useState({}),u=c=>{o(p=>({...p,[c]:(p[c]||1)>1?(p[c]||1)-1:1}))},a=c=>{o(p=>({...p,[c]:(p[c]||1)<t.bag[c]?(p[c]||1)+1:t.bag[c]}))};return F.jsxs("div",{children:[F.jsx("h3",{children:e}),F.jsxs("ul",{children:[F.jsxs("div",{children:["Gold: ",t.gold]}),Object.keys(t.bag).map(c=>F.jsxs("li",{children:[c,F.jsx("button",{className:"quantity-minus",onClick:()=>u(c)}),"(x",i[c]||1,")",F.jsx("button",{className:"quantity-plus",onClick:()=>a(c)}),"Price: ",r==="Buy"?l[c].buy*(i[c]||1):l[c].sell*(i[c]||1),F.jsx("button",{className:"trade-action",onClick:()=>n(c,i[c]||1),children:r})]},c))]})]})},Ep={bag:{gourd:1,mirror:1,macaron:1,hole:1,book:1,centipede:1,shampoo:1,dryWater:1,oldTrousers:1,twistedTrinket:1},prices:{gourd:{buy:1,sell:1},mirror:{buy:3,sell:3},macaron:{buy:2,sell:2},hole:{buy:5,sell:5},book:{buy:2,sell:2},centipede:{buy:1,sell:1},shampoo:{buy:2,sell:2},dryWater:{buy:2,sell:2},oldTrousers:{buy:1,sell:1},twistedTrinket:{buy:4,sell:4},tomato:{buy:1,sell:1},corn:{buy:2,sell:2},beetroot:{buy:3,sell:3},soap:{buy:4,sell:4},watermelon:{buy:5,sell:5},pipe:{buy:8,sell:8},duck:{buy:12,sell:12}},gold:50};function Pa(e,t){e.gold+=t}function wa(e,t){if(e.gold-t<0){console.log("Not enough gold");return}e.gold-=t}const Cp=()=>{const{page:e}=ep(),t=J1(),[n,r]=C.useState(parseInt(e,10)||1),[l,i]=C.useState(!1),[o,u]=C.useState({...va}),[a,c]=C.useState({...Ep}),p=vp.pages[n];C.useEffect(()=>{e&&r(parseInt(e,10))},[e]),C.useEffect(()=>{t(`/game/${n}`,{replace:!0})},[n,t]),C.useEffect(()=>{n!==1&&(p.removeFromInventory&&(p.removeFromInventory.forEach(f=>{_r(o,f)}),u({...o})),p.addToInventory&&(p.addToInventory.forEach(f=>{Cr(o,f.item,f.quantity)}),u({...o})),p.emptyInventory&&(yp(o),u({...o})))},[n,p,o]);const x=(f,s)=>{s.requiresItem&&!ii(o.bag,s.requiresItem)||s.requiresCondition&&!ga(o.condition,s.requiresCondition.condition)||s.requiresBagCarrier&&ha(o)!==s.requiresBagCarrier||s.visitedPages&&!ma(o,s.visitedPages)||(Sp(o,n),r(f),s.addToInventory&&(s.addToInventory.forEach(d=>{Cr(o,d.item,d.quantity)}),u({...o})),s.removeFromInventory&&(_r(o,s.removeFromInventory),u({...o})),s.bagCarrier&&(Pp(o,s.bagCarrier),u({...o})),s.changeCondition&&(wp(o,s.changeCondition),u({...o})),Array.isArray(s.nextPage)?h(s.nextPage):r(s.nextPage))},h=f=>{const s=Math.floor(Math.random()*f.length);r(f[s])},m=p.choices.filter(f=>{const s=!f.requiresItem||ii(o.bag,f.requiresItem),d=!f.requiresCondition||ga(o.condition,f.requiresCondition.condition),g=!f.requiresBagCarrier||ha(o)===f.requiresBagCarrier,w=!f.visitedPages||ma(o,f.visitedPages);return s&&d&&g&&w});if(p.end)return F.jsxs("div",{children:[F.jsx("p",{children:p.text}),F.jsx("button",{onClick:P,children:"Play Again"})]});const v=()=>{i(f=>!f)};function P(){r(1),t("/game/1"),kp(o),u({...va})}const k=(f,s)=>{const d=!o.bag.hasOwnProperty(f),w=(d?a.prices[f].buy:a.prices[f].sell)*s;d?o.gold>=w?(wa(o,w),Cr(o,f,s),_r(a,{item:f,quantity:s}),Pa(a,w)):console.log("Not enough gold to buy"):ii(o.bag,{item:f,quantity:s})?(Pa(o,w),_r(o,{item:f,quantity:s}),Cr(a,f,s),wa(a,w)):console.log("Not enough item to sell"),u({...o}),c({...a})};return F.jsxs("div",{className:"game",children:[F.jsx("h3",{children:n}),F.jsx("p",{children:p==null?void 0:p.text}),m.map((f,s)=>F.jsx("button",{onClick:()=>x(f.nextPage,f),children:f.text},s)),p.moreText&&F.jsx("p",{children:p.moreText}),p.trade&&F.jsx("div",{children:F.jsx("button",{onClick:v,children:"TRADE"})}),l&&F.jsxs("div",{className:"trade",children:[F.jsx("button",{className:"close",onClick:v,children:"close"}),F.jsxs("div",{className:"inventories",children:[F.jsx(ya,{title:"NPC Inventory",inventory:a,onTrade:(f,s)=>k(f,s),tradeAction:"Buy",prices:a.prices}),F.jsx(ya,{title:"Player Inventory",inventory:o,onTrade:(f,s)=>k(f,s),tradeAction:"Sell",prices:a.prices})]})]})]})};function _p(){return F.jsx(mp,{children:F.jsx(xp,{children:F.jsx(Qc,{path:"/game/:page",element:F.jsx(Cp,{})})})})}oi.createRoot(document.getElementById("root")).render(F.jsx(La.StrictMode,{children:F.jsx(_p,{})}));
