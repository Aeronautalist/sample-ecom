function ym(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const n=Object.getOwnPropertyDescriptor(i,o);n&&Object.defineProperty(e,o,n.get?n:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function bm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _h={exports:{}},sa={},xh={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cn=Symbol.for("react.element"),wm=Symbol.for("react.portal"),_m=Symbol.for("react.fragment"),xm=Symbol.for("react.strict_mode"),km=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),zm=Symbol.for("react.suspense"),Em=Symbol.for("react.memo"),Am=Symbol.for("react.lazy"),Pu=Symbol.iterator;function Tm(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var kh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sh=Object.assign,Ch={};function uo(e,t,r){this.props=e,this.context=t,this.refs=Ch,this.updater=r||kh}uo.prototype.isReactComponent={};uo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};uo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function $h(){}$h.prototype=uo.prototype;function kc(e,t,r){this.props=e,this.context=t,this.refs=Ch,this.updater=r||kh}var Sc=kc.prototype=new $h;Sc.constructor=kc;Sh(Sc,uo.prototype);Sc.isPureReactComponent=!0;var Nu=Array.isArray,zh=Object.prototype.hasOwnProperty,Cc={current:null},Eh={key:!0,ref:!0,__self:!0,__source:!0};function Ah(e,t,r){var i,o={},n=null,s=null;if(t!=null)for(i in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(n=""+t.key),t)zh.call(t,i)&&!Eh.hasOwnProperty(i)&&(o[i]=t[i]);var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)o[i]===void 0&&(o[i]=c[i]);return{$$typeof:Cn,type:e,key:n,ref:s,props:o,_owner:Cc.current}}function Pm(e,t){return{$$typeof:Cn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $c(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cn}function Nm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Lu=/\/+/g;function Ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nm(""+e.key):t.toString(36)}function ds(e,t,r,i,o){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(n){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Cn:case wm:s=!0}}if(s)return s=e,o=o(s),e=i===""?"."+Ta(s,0):i,Nu(o)?(r="",e!=null&&(r=e.replace(Lu,"$&/")+"/"),ds(o,t,r,"",function(u){return u})):o!=null&&($c(o)&&(o=Pm(o,r+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Lu,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=i===""?".":i+":",Nu(e))for(var c=0;c<e.length;c++){n=e[c];var l=i+Ta(n,c);s+=ds(n,t,r,l,o)}else if(l=Tm(e),typeof l=="function")for(e=l.call(e),c=0;!(n=e.next()).done;)n=n.value,l=i+Ta(n,c++),s+=ds(n,t,r,l,o);else if(n==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Vn(e,t,r){if(e==null)return e;var i=[],o=0;return ds(e,i,"","",function(n){return t.call(r,n,o++)}),i}function Lm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var tt={current:null},hs={transition:null},Im={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:hs,ReactCurrentOwner:Cc};q.Children={map:Vn,forEach:function(e,t,r){Vn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Vn(e,function(){t++}),t},toArray:function(e){return Vn(e,function(t){return t})||[]},only:function(e){if(!$c(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=uo;q.Fragment=_m;q.Profiler=km;q.PureComponent=kc;q.StrictMode=xm;q.Suspense=zm;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Im;q.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Sh({},e.props),o=e.key,n=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(n=t.ref,s=Cc.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)zh.call(t,l)&&!Eh.hasOwnProperty(l)&&(i[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:Cn,type:e.type,key:o,ref:n,props:i,_owner:s}};q.createContext=function(e){return e={$$typeof:Cm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Sm,_context:e},e.Consumer=e};q.createElement=Ah;q.createFactory=function(e){var t=Ah.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:$m,render:e}};q.isValidElement=$c;q.lazy=function(e){return{$$typeof:Am,_payload:{_status:-1,_result:e},_init:Lm}};q.memo=function(e,t){return{$$typeof:Em,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=hs.transition;hs.transition={};try{e()}finally{hs.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return tt.current.useCallback(e,t)};q.useContext=function(e){return tt.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return tt.current.useDeferredValue(e)};q.useEffect=function(e,t){return tt.current.useEffect(e,t)};q.useId=function(){return tt.current.useId()};q.useImperativeHandle=function(e,t,r){return tt.current.useImperativeHandle(e,t,r)};q.useInsertionEffect=function(e,t){return tt.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return tt.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return tt.current.useMemo(e,t)};q.useReducer=function(e,t,r){return tt.current.useReducer(e,t,r)};q.useRef=function(e){return tt.current.useRef(e)};q.useState=function(e){return tt.current.useState(e)};q.useSyncExternalStore=function(e,t,r){return tt.current.useSyncExternalStore(e,t,r)};q.useTransition=function(){return tt.current.useTransition()};q.version="18.2.0";xh.exports=q;var Ht=xh.exports;const Th=bm(Ht),M=ym({__proto__:null,default:Th},[Ht]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om=Ht,Dm=Symbol.for("react.element"),Rm=Symbol.for("react.fragment"),Mm=Object.prototype.hasOwnProperty,Fm=Om.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bm={key:!0,ref:!0,__self:!0,__source:!0};function Ph(e,t,r){var i,o={},n=null,s=null;r!==void 0&&(n=""+r),t.key!==void 0&&(n=""+t.key),t.ref!==void 0&&(s=t.ref);for(i in t)Mm.call(t,i)&&!Bm.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:Dm,type:e,key:n,ref:s,props:o,_owner:Fm.current}}sa.Fragment=Rm;sa.jsx=Ph;sa.jsxs=Ph;_h.exports=sa;var k=_h.exports,gl={},Nh={exports:{}},St={},Lh={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,W){var K=I.length;I.push(W);e:for(;0<K;){var xe=K-1>>>1,Oe=I[xe];if(0<o(Oe,W))I[xe]=W,I[K]=Oe,K=xe;else break e}}function r(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var W=I[0],K=I.pop();if(K!==W){I[0]=K;e:for(var xe=0,Oe=I.length,Fn=Oe>>>1;xe<Fn;){var ti=2*(xe+1)-1,Aa=I[ti],ri=ti+1,Bn=I[ri];if(0>o(Aa,K))ri<Oe&&0>o(Bn,Aa)?(I[xe]=Bn,I[ri]=K,xe=ri):(I[xe]=Aa,I[ti]=K,xe=ti);else if(ri<Oe&&0>o(Bn,K))I[xe]=Bn,I[ri]=K,xe=ri;else break e}}return W}function o(I,W){var K=I.sortIndex-W.sortIndex;return K!==0?K:I.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;e.unstable_now=function(){return n.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var l=[],u=[],m=1,h=null,p=3,g=!1,y=!1,_=!1,z=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var W=r(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=I)i(u),W.sortIndex=W.expirationTime,t(l,W);else break;W=r(u)}}function w(I){if(_=!1,v(I),!y)if(r(l)!==null)y=!0,Ge(x);else{var W=r(u);W!==null&&mt(w,W.startTime-I)}}function x(I,W){y=!1,_&&(_=!1,b(A),A=-1),g=!0;var K=p;try{for(v(W),h=r(l);h!==null&&(!(h.expirationTime>W)||I&&!ie());){var xe=h.callback;if(typeof xe=="function"){h.callback=null,p=h.priorityLevel;var Oe=xe(h.expirationTime<=W);W=e.unstable_now(),typeof Oe=="function"?h.callback=Oe:h===r(l)&&i(l),v(W)}else i(l);h=r(l)}if(h!==null)var Fn=!0;else{var ti=r(u);ti!==null&&mt(w,ti.startTime-W),Fn=!1}return Fn}finally{h=null,p=K,g=!1}}var S=!1,$=null,A=-1,L=5,T=-1;function ie(){return!(e.unstable_now()-T<L)}function oe(){if($!==null){var I=e.unstable_now();T=I;var W=!0;try{W=$(!0,I)}finally{W?Ae():(S=!1,$=null)}}else S=!1}var Ae;if(typeof f=="function")Ae=function(){f(oe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Be=_e.port2;_e.port1.onmessage=oe,Ae=function(){Be.postMessage(null)}}else Ae=function(){z(oe,0)};function Ge(I){$=I,S||(S=!0,Ae())}function mt(I,W){A=z(function(){I(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Ge(x))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(I){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var K=p;p=W;try{return I()}finally{p=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var K=p;p=I;try{return W()}finally{p=K}},e.unstable_scheduleCallback=function(I,W,K){var xe=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?xe+K:xe):K=xe,I){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=K+Oe,I={id:m++,callback:W,priorityLevel:I,startTime:K,expirationTime:Oe,sortIndex:-1},K>xe?(I.sortIndex=K,t(u,I),r(l)===null&&I===r(u)&&(_?(b(A),A=-1):_=!0,mt(w,K-xe))):(I.sortIndex=Oe,t(l,I),y||g||(y=!0,Ge(x))),I},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(I){var W=p;return function(){var K=p;p=W;try{return I.apply(this,arguments)}finally{p=K}}}})(Ih);Lh.exports=Ih;var Vm=Lh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh=Ht,kt=Vm;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dh=new Set,on={};function ki(e,t){eo(e,t),eo(e+"Capture",t)}function eo(e,t){for(on[e]=t,e=0;e<t.length;e++)Dh.add(t[e])}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vl=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iu={},Ou={};function Um(e){return vl.call(Ou,e)?!0:vl.call(Iu,e)?!1:jm.test(e)?Ou[e]=!0:(Iu[e]=!0,!1)}function Hm(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wm(e,t,r,i){if(t===null||typeof t>"u"||Hm(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,r,i,o,n,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=n,this.removeEmptyString=s}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var zc=/[\-:]([a-z])/g;function Ec(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(zc,Ec);He[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(zc,Ec);He[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(zc,Ec);He[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ac(e,t,r,i){var o=He.hasOwnProperty(t)?He[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wm(t,r,o,i)&&(r=null),i||o===null?Um(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,i=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var yr=Oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jn=Symbol.for("react.element"),Li=Symbol.for("react.portal"),Ii=Symbol.for("react.fragment"),Tc=Symbol.for("react.strict_mode"),yl=Symbol.for("react.profiler"),Rh=Symbol.for("react.provider"),Mh=Symbol.for("react.context"),Pc=Symbol.for("react.forward_ref"),bl=Symbol.for("react.suspense"),wl=Symbol.for("react.suspense_list"),Nc=Symbol.for("react.memo"),Cr=Symbol.for("react.lazy"),Fh=Symbol.for("react.offscreen"),Du=Symbol.iterator;function _o(e){return e===null||typeof e!="object"?null:(e=Du&&e[Du]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Pa;function Do(e){if(Pa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Pa=t&&t[1]||""}return`
`+Pa+e}var Na=!1;function La(e,t){if(!e||Na)return"";Na=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var i=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){i=u}e.call(t.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),n=i.stack.split(`
`),s=o.length-1,c=n.length-1;1<=s&&0<=c&&o[s]!==n[c];)c--;for(;1<=s&&0<=c;s--,c--)if(o[s]!==n[c]){if(s!==1||c!==1)do if(s--,c--,0>c||o[s]!==n[c]){var l=`
`+o[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=c);break}}}finally{Na=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Do(e):""}function Km(e){switch(e.tag){case 5:return Do(e.type);case 16:return Do("Lazy");case 13:return Do("Suspense");case 19:return Do("SuspenseList");case 0:case 2:case 15:return e=La(e.type,!1),e;case 11:return e=La(e.type.render,!1),e;case 1:return e=La(e.type,!0),e;default:return""}}function _l(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ii:return"Fragment";case Li:return"Portal";case yl:return"Profiler";case Tc:return"StrictMode";case bl:return"Suspense";case wl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Mh:return(e.displayName||"Context")+".Consumer";case Rh:return(e._context.displayName||"Context")+".Provider";case Pc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Nc:return t=e.displayName||null,t!==null?t:_l(e.type)||"Memo";case Cr:t=e._payload,e=e._init;try{return _l(e(t))}catch{}}return null}function qm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _l(t);case 8:return t===Tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ym(e){var t=Bh(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,n=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){i=""+s,n.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Un(e){e._valueTracker||(e._valueTracker=Ym(e))}function Vh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Bh(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function Es(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xl(e,t){var r=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ru(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Ur(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function jh(e,t){t=t.checked,t!=null&&Ac(e,"checked",t,!1)}function kl(e,t){jh(e,t);var r=Ur(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Sl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Sl(e,t.type,Ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Sl(e,t,r){(t!=="number"||Es(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ro=Array.isArray;function Ki(e,t,r,i){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Ur(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(Ro(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ur(r)}}function Uh(e,t){var r=Ur(t.value),i=Ur(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function Bu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $l(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Hn,Wh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Hn=Hn||document.createElement("div"),Hn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Hn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function nn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xm=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(e){Xm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bo[t]=Bo[e]})});function Kh(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Bo.hasOwnProperty(e)&&Bo[e]?(""+t).trim():t+"px"}function qh(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,o=Kh(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,o):e[r]=o}}var Qm=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(Qm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function El(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Al=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,qi=null,Yi=null;function Vu(e){if(e=En(e)){if(typeof Tl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=da(t),Tl(e.stateNode,e.type,t))}}function Yh(e){qi?Yi?Yi.push(e):Yi=[e]:qi=e}function Xh(){if(qi){var e=qi,t=Yi;if(Yi=qi=null,Vu(e),t)for(e=0;e<t.length;e++)Vu(t[e])}}function Qh(e,t){return e(t)}function Gh(){}var Ia=!1;function Zh(e,t,r){if(Ia)return e(t,r);Ia=!0;try{return Qh(e,t,r)}finally{Ia=!1,(qi!==null||Yi!==null)&&(Gh(),Xh())}}function sn(e,t){var r=e.stateNode;if(r===null)return null;var i=da(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var Pl=!1;if(pr)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Pl=!1}function Gm(e,t,r,i,o,n,s,c,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var Vo=!1,As=null,Ts=!1,Nl=null,Zm={onError:function(e){Vo=!0,As=e}};function Jm(e,t,r,i,o,n,s,c,l){Vo=!1,As=null,Gm.apply(Zm,arguments)}function eg(e,t,r,i,o,n,s,c,l){if(Jm.apply(this,arguments),Vo){if(Vo){var u=As;Vo=!1,As=null}else throw Error(E(198));Ts||(Ts=!0,Nl=u)}}function Si(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Jh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ju(e){if(Si(e)!==e)throw Error(E(188))}function tg(e){var t=e.alternate;if(!t){if(t=Si(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,i=t;;){var o=r.return;if(o===null)break;var n=o.alternate;if(n===null){if(i=o.return,i!==null){r=i;continue}break}if(o.child===n.child){for(n=o.child;n;){if(n===r)return ju(o),e;if(n===i)return ju(o),t;n=n.sibling}throw Error(E(188))}if(r.return!==i.return)r=o,i=n;else{for(var s=!1,c=o.child;c;){if(c===r){s=!0,r=o,i=n;break}if(c===i){s=!0,i=o,r=n;break}c=c.sibling}if(!s){for(c=n.child;c;){if(c===r){s=!0,r=n,i=o;break}if(c===i){s=!0,i=n,r=o;break}c=c.sibling}if(!s)throw Error(E(189))}}if(r.alternate!==i)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function ep(e){return e=tg(e),e!==null?tp(e):null}function tp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=tp(e);if(t!==null)return t;e=e.sibling}return null}var rp=kt.unstable_scheduleCallback,Uu=kt.unstable_cancelCallback,rg=kt.unstable_shouldYield,ig=kt.unstable_requestPaint,ke=kt.unstable_now,og=kt.unstable_getCurrentPriorityLevel,Ic=kt.unstable_ImmediatePriority,ip=kt.unstable_UserBlockingPriority,Ps=kt.unstable_NormalPriority,ng=kt.unstable_LowPriority,op=kt.unstable_IdlePriority,aa=null,or=null;function sg(e){if(or&&typeof or.onCommitFiberRoot=="function")try{or.onCommitFiberRoot(aa,e,void 0,(e.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:cg,ag=Math.log,lg=Math.LN2;function cg(e){return e>>>=0,e===0?32:31-(ag(e)/lg|0)|0}var Wn=64,Kn=4194304;function Mo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ns(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,o=e.suspendedLanes,n=e.pingedLanes,s=r&268435455;if(s!==0){var c=s&~o;c!==0?i=Mo(c):(n&=s,n!==0&&(i=Mo(n)))}else s=r&~o,s!==0?i=Mo(s):n!==0&&(i=Mo(n));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,n=t&-t,o>=n||o===16&&(n&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Wt(t),o=1<<r,i|=e[r],t&=~o;return i}function ug(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dg(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,n=e.pendingLanes;0<n;){var s=31-Wt(n),c=1<<s,l=o[s];l===-1?(!(c&r)||c&i)&&(o[s]=ug(c,t)):l<=t&&(e.expiredLanes|=c),n&=~c}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function np(){var e=Wn;return Wn<<=1,!(Wn&4194240)&&(Wn=64),e}function Oa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function $n(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wt(t),e[t]=r}function hg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Wt(r),n=1<<o;t[o]=0,i[o]=-1,e[o]=-1,r&=~n}}function Oc(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Wt(r),o=1<<i;o&t|e[i]&t&&(e[i]|=t),r&=~o}}var re=0;function sp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ap,Dc,lp,cp,up,Il=!1,qn=[],Lr=null,Ir=null,Or=null,an=new Map,ln=new Map,zr=[],pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hu(e,t){switch(e){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Ir=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":an.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ln.delete(t.pointerId)}}function ko(e,t,r,i,o,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:n,targetContainers:[o]},t!==null&&(t=En(t),t!==null&&Dc(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function fg(e,t,r,i,o){switch(t){case"focusin":return Lr=ko(Lr,e,t,r,i,o),!0;case"dragenter":return Ir=ko(Ir,e,t,r,i,o),!0;case"mouseover":return Or=ko(Or,e,t,r,i,o),!0;case"pointerover":var n=o.pointerId;return an.set(n,ko(an.get(n)||null,e,t,r,i,o)),!0;case"gotpointercapture":return n=o.pointerId,ln.set(n,ko(ln.get(n)||null,e,t,r,i,o)),!0}return!1}function dp(e){var t=ai(e.target);if(t!==null){var r=Si(t);if(r!==null){if(t=r.tag,t===13){if(t=Jh(r),t!==null){e.blockedOn=t,up(e.priority,function(){lp(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ps(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Al=i,r.target.dispatchEvent(i),Al=null}else return t=En(r),t!==null&&Dc(t),e.blockedOn=r,!1;t.shift()}return!0}function Wu(e,t,r){ps(e)&&r.delete(t)}function mg(){Il=!1,Lr!==null&&ps(Lr)&&(Lr=null),Ir!==null&&ps(Ir)&&(Ir=null),Or!==null&&ps(Or)&&(Or=null),an.forEach(Wu),ln.forEach(Wu)}function So(e,t){e.blockedOn===t&&(e.blockedOn=null,Il||(Il=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,mg)))}function cn(e){function t(o){return So(o,e)}if(0<qn.length){So(qn[0],e);for(var r=1;r<qn.length;r++){var i=qn[r];i.blockedOn===e&&(i.blockedOn=null)}}for(Lr!==null&&So(Lr,e),Ir!==null&&So(Ir,e),Or!==null&&So(Or,e),an.forEach(t),ln.forEach(t),r=0;r<zr.length;r++)i=zr[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<zr.length&&(r=zr[0],r.blockedOn===null);)dp(r),r.blockedOn===null&&zr.shift()}var Xi=yr.ReactCurrentBatchConfig,Ls=!0;function gg(e,t,r,i){var o=re,n=Xi.transition;Xi.transition=null;try{re=1,Rc(e,t,r,i)}finally{re=o,Xi.transition=n}}function vg(e,t,r,i){var o=re,n=Xi.transition;Xi.transition=null;try{re=4,Rc(e,t,r,i)}finally{re=o,Xi.transition=n}}function Rc(e,t,r,i){if(Ls){var o=Ol(e,t,r,i);if(o===null)Wa(e,t,i,Is,r),Hu(e,i);else if(fg(o,e,t,r,i))i.stopPropagation();else if(Hu(e,i),t&4&&-1<pg.indexOf(e)){for(;o!==null;){var n=En(o);if(n!==null&&ap(n),n=Ol(e,t,r,i),n===null&&Wa(e,t,i,Is,r),n===o)break;o=n}o!==null&&i.stopPropagation()}else Wa(e,t,i,null,r)}}var Is=null;function Ol(e,t,r,i){if(Is=null,e=Lc(i),e=ai(e),e!==null)if(t=Si(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Jh(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Is=e,null}function hp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(og()){case Ic:return 1;case ip:return 4;case Ps:case ng:return 16;case op:return 536870912;default:return 16}default:return 16}}var Tr=null,Mc=null,fs=null;function pp(){if(fs)return fs;var e,t=Mc,r=t.length,i,o="value"in Tr?Tr.value:Tr.textContent,n=o.length;for(e=0;e<r&&t[e]===o[e];e++);var s=r-e;for(i=1;i<=s&&t[r-i]===o[n-i];i++);return fs=o.slice(e,1<i?1-i:void 0)}function ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yn(){return!0}function Ku(){return!1}function Ct(e){function t(r,i,o,n,s){this._reactName=r,this._targetInst=o,this.type=i,this.nativeEvent=n,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(r=e[c],this[c]=r?r(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Yn:Ku,this.isPropagationStopped=Ku,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),t}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Ct(ho),zn=me({},ho,{view:0,detail:0}),yg=Ct(zn),Da,Ra,Co,la=me({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Co&&(Co&&e.type==="mousemove"?(Da=e.screenX-Co.screenX,Ra=e.screenY-Co.screenY):Ra=Da=0,Co=e),Da)},movementY:function(e){return"movementY"in e?e.movementY:Ra}}),qu=Ct(la),bg=me({},la,{dataTransfer:0}),wg=Ct(bg),_g=me({},zn,{relatedTarget:0}),Ma=Ct(_g),xg=me({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),kg=Ct(xg),Sg=me({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cg=Ct(Sg),$g=me({},ho,{data:0}),Yu=Ct($g),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ag={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ag[e])?!!t[e]:!1}function Bc(){return Tg}var Pg=me({},zn,{key:function(e){if(e.key){var t=zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Eg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(e){return e.type==="keypress"?ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ng=Ct(Pg),Lg=me({},la,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=Ct(Lg),Ig=me({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),Og=Ct(Ig),Dg=me({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rg=Ct(Dg),Mg=me({},la,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fg=Ct(Mg),Bg=[9,13,27,32],Vc=pr&&"CompositionEvent"in window,jo=null;pr&&"documentMode"in document&&(jo=document.documentMode);var Vg=pr&&"TextEvent"in window&&!jo,fp=pr&&(!Vc||jo&&8<jo&&11>=jo),Qu=" ",Gu=!1;function mp(e,t){switch(e){case"keyup":return Bg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Oi=!1;function jg(e,t){switch(e){case"compositionend":return gp(t);case"keypress":return t.which!==32?null:(Gu=!0,Qu);case"textInput":return e=t.data,e===Qu&&Gu?null:e;default:return null}}function Ug(e,t){if(Oi)return e==="compositionend"||!Vc&&mp(e,t)?(e=pp(),fs=Mc=Tr=null,Oi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fp&&t.locale!=="ko"?null:t.data;default:return null}}var Hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hg[e.type]:t==="textarea"}function vp(e,t,r,i){Yh(i),t=Os(t,"onChange"),0<t.length&&(r=new Fc("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var Uo=null,un=null;function Wg(e){Ep(e,0)}function ca(e){var t=Mi(e);if(Vh(t))return e}function Kg(e,t){if(e==="change")return t}var yp=!1;if(pr){var Fa;if(pr){var Ba="oninput"in document;if(!Ba){var Ju=document.createElement("div");Ju.setAttribute("oninput","return;"),Ba=typeof Ju.oninput=="function"}Fa=Ba}else Fa=!1;yp=Fa&&(!document.documentMode||9<document.documentMode)}function ed(){Uo&&(Uo.detachEvent("onpropertychange",bp),un=Uo=null)}function bp(e){if(e.propertyName==="value"&&ca(un)){var t=[];vp(t,un,e,Lc(e)),Zh(Wg,t)}}function qg(e,t,r){e==="focusin"?(ed(),Uo=t,un=r,Uo.attachEvent("onpropertychange",bp)):e==="focusout"&&ed()}function Yg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ca(un)}function Xg(e,t){if(e==="click")return ca(t)}function Qg(e,t){if(e==="input"||e==="change")return ca(t)}function Gg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Gg;function dn(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var o=r[i];if(!vl.call(t,o)||!qt(e[o],t[o]))return!1}return!0}function td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rd(e,t){var r=td(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=td(r)}}function wp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _p(){for(var e=window,t=Es();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Es(e.document)}return t}function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Zg(e){var t=_p(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&wp(r.ownerDocument.documentElement,r)){if(i!==null&&jc(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,n=Math.min(i.start,o);i=i.end===void 0?n:Math.min(i.end,o),!e.extend&&n>i&&(o=i,i=n,n=o),o=rd(r,n);var s=rd(r,i);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),n>i?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jg=pr&&"documentMode"in document&&11>=document.documentMode,Di=null,Dl=null,Ho=null,Rl=!1;function id(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Rl||Di==null||Di!==Es(i)||(i=Di,"selectionStart"in i&&jc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ho&&dn(Ho,i)||(Ho=i,i=Os(Dl,"onSelect"),0<i.length&&(t=new Fc("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=Di)))}function Xn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ri={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionend:Xn("Transition","TransitionEnd")},Va={},xp={};pr&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function ua(e){if(Va[e])return Va[e];if(!Ri[e])return e;var t=Ri[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in xp)return Va[e]=t[r];return e}var kp=ua("animationend"),Sp=ua("animationiteration"),Cp=ua("animationstart"),$p=ua("transitionend"),zp=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(e,t){zp.set(e,t),ki(t,[e])}for(var ja=0;ja<od.length;ja++){var Ua=od[ja],e0=Ua.toLowerCase(),t0=Ua[0].toUpperCase()+Ua.slice(1);Xr(e0,"on"+t0)}Xr(kp,"onAnimationEnd");Xr(Sp,"onAnimationIteration");Xr(Cp,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr($p,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function nd(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,eg(i,t,void 0,e),e.currentTarget=null}function Ep(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],o=i.event;i=i.listeners;e:{var n=void 0;if(t)for(var s=i.length-1;0<=s;s--){var c=i[s],l=c.instance,u=c.currentTarget;if(c=c.listener,l!==n&&o.isPropagationStopped())break e;nd(o,c,u),n=l}else for(s=0;s<i.length;s++){if(c=i[s],l=c.instance,u=c.currentTarget,c=c.listener,l!==n&&o.isPropagationStopped())break e;nd(o,c,u),n=l}}}if(Ts)throw e=Nl,Ts=!1,Nl=null,e}function ae(e,t){var r=t[jl];r===void 0&&(r=t[jl]=new Set);var i=e+"__bubble";r.has(i)||(Ap(t,e,2,!1),r.add(i))}function Ha(e,t,r){var i=0;t&&(i|=4),Ap(r,e,i,t)}var Qn="_reactListening"+Math.random().toString(36).slice(2);function hn(e){if(!e[Qn]){e[Qn]=!0,Dh.forEach(function(r){r!=="selectionchange"&&(r0.has(r)||Ha(r,!1,e),Ha(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qn]||(t[Qn]=!0,Ha("selectionchange",!1,t))}}function Ap(e,t,r,i){switch(hp(t)){case 1:var o=gg;break;case 4:o=vg;break;default:o=Rc}r=o.bind(null,t,r,e),o=void 0,!Pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Wa(e,t,r,i,o){var n=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var c=i.stateNode.containerInfo;if(c===o||c.nodeType===8&&c.parentNode===o)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;s=s.return}for(;c!==null;){if(s=ai(c),s===null)return;if(l=s.tag,l===5||l===6){i=n=s;continue e}c=c.parentNode}}i=i.return}Zh(function(){var u=n,m=Lc(r),h=[];e:{var p=zp.get(e);if(p!==void 0){var g=Fc,y=e;switch(e){case"keypress":if(ms(r)===0)break e;case"keydown":case"keyup":g=Ng;break;case"focusin":y="focus",g=Ma;break;case"focusout":y="blur",g=Ma;break;case"beforeblur":case"afterblur":g=Ma;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Og;break;case kp:case Sp:case Cp:g=kg;break;case $p:g=Rg;break;case"scroll":g=yg;break;case"wheel":g=Fg;break;case"copy":case"cut":case"paste":g=Cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Xu}var _=(t&4)!==0,z=!_&&e==="scroll",b=_?p!==null?p+"Capture":null:p;_=[];for(var f=u,v;f!==null;){v=f;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,b!==null&&(w=sn(f,b),w!=null&&_.push(pn(f,w,v)))),z)break;f=f.return}0<_.length&&(p=new g(p,y,null,r,m),h.push({event:p,listeners:_}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&r!==Al&&(y=r.relatedTarget||r.fromElement)&&(ai(y)||y[fr]))break e;if((g||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=r.relatedTarget||r.toElement,g=u,y=y?ai(y):null,y!==null&&(z=Si(y),y!==z||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=qu,w="onMouseLeave",b="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(_=Xu,w="onPointerLeave",b="onPointerEnter",f="pointer"),z=g==null?p:Mi(g),v=y==null?p:Mi(y),p=new _(w,f+"leave",g,r,m),p.target=z,p.relatedTarget=v,w=null,ai(m)===u&&(_=new _(b,f+"enter",y,r,m),_.target=v,_.relatedTarget=z,w=_),z=w,g&&y)t:{for(_=g,b=y,f=0,v=_;v;v=Ti(v))f++;for(v=0,w=b;w;w=Ti(w))v++;for(;0<f-v;)_=Ti(_),f--;for(;0<v-f;)b=Ti(b),v--;for(;f--;){if(_===b||b!==null&&_===b.alternate)break t;_=Ti(_),b=Ti(b)}_=null}else _=null;g!==null&&sd(h,p,g,_,!1),y!==null&&z!==null&&sd(h,z,y,_,!0)}}e:{if(p=u?Mi(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var x=Kg;else if(Zu(p))if(yp)x=Qg;else{x=Yg;var S=qg}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=Xg);if(x&&(x=x(e,u))){vp(h,x,r,m);break e}S&&S(e,p,u),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&Sl(p,"number",p.value)}switch(S=u?Mi(u):window,e){case"focusin":(Zu(S)||S.contentEditable==="true")&&(Di=S,Dl=u,Ho=null);break;case"focusout":Ho=Dl=Di=null;break;case"mousedown":Rl=!0;break;case"contextmenu":case"mouseup":case"dragend":Rl=!1,id(h,r,m);break;case"selectionchange":if(Jg)break;case"keydown":case"keyup":id(h,r,m)}var $;if(Vc)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Oi?mp(e,r)&&(A="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&(fp&&r.locale!=="ko"&&(Oi||A!=="onCompositionStart"?A==="onCompositionEnd"&&Oi&&($=pp()):(Tr=m,Mc="value"in Tr?Tr.value:Tr.textContent,Oi=!0)),S=Os(u,A),0<S.length&&(A=new Yu(A,e,null,r,m),h.push({event:A,listeners:S}),$?A.data=$:($=gp(r),$!==null&&(A.data=$)))),($=Vg?jg(e,r):Ug(e,r))&&(u=Os(u,"onBeforeInput"),0<u.length&&(m=new Yu("onBeforeInput","beforeinput",null,r,m),h.push({event:m,listeners:u}),m.data=$))}Ep(h,t)})}function pn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Os(e,t){for(var r=t+"Capture",i=[];e!==null;){var o=e,n=o.stateNode;o.tag===5&&n!==null&&(o=n,n=sn(e,r),n!=null&&i.unshift(pn(e,n,o)),n=sn(e,t),n!=null&&i.push(pn(e,n,o))),e=e.return}return i}function Ti(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sd(e,t,r,i,o){for(var n=t._reactName,s=[];r!==null&&r!==i;){var c=r,l=c.alternate,u=c.stateNode;if(l!==null&&l===i)break;c.tag===5&&u!==null&&(c=u,o?(l=sn(r,n),l!=null&&s.unshift(pn(r,l,c))):o||(l=sn(r,n),l!=null&&s.push(pn(r,l,c)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var i0=/\r\n?/g,o0=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(i0,`
`).replace(o0,"")}function Gn(e,t,r){if(t=ad(t),ad(e)!==t&&r)throw Error(E(425))}function Ds(){}var Ml=null,Fl=null;function Bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vl=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(a0)}:Vl;function a0(e){setTimeout(function(){throw e})}function Ka(e,t){var r=t,i=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(i===0){e.removeChild(o),cn(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=o}while(r);cn(t)}function Dr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var po=Math.random().toString(36).slice(2),ir="__reactFiber$"+po,fn="__reactProps$"+po,fr="__reactContainer$"+po,jl="__reactEvents$"+po,l0="__reactListeners$"+po,c0="__reactHandles$"+po;function ai(e){var t=e[ir];if(t)return t;for(var r=e.parentNode;r;){if(t=r[fr]||r[ir]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=cd(e);e!==null;){if(r=e[ir])return r;e=cd(e)}return t}e=r,r=e.parentNode}return null}function En(e){return e=e[ir]||e[fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function da(e){return e[fn]||null}var Ul=[],Fi=-1;function Qr(e){return{current:e}}function le(e){0>Fi||(e.current=Ul[Fi],Ul[Fi]=null,Fi--)}function se(e,t){Fi++,Ul[Fi]=e.current,e.current=t}var Hr={},Qe=Qr(Hr),at=Qr(!1),fi=Hr;function to(e,t){var r=e.type.contextTypes;if(!r)return Hr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},n;for(n in r)o[n]=t[n];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function lt(e){return e=e.childContextTypes,e!=null}function Rs(){le(at),le(Qe)}function ud(e,t,r){if(Qe.current!==Hr)throw Error(E(168));se(Qe,t),se(at,r)}function Tp(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(E(108,qm(e)||"Unknown",o));return me({},r,i)}function Ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hr,fi=Qe.current,se(Qe,e),se(at,at.current),!0}function dd(e,t,r){var i=e.stateNode;if(!i)throw Error(E(169));r?(e=Tp(e,t,fi),i.__reactInternalMemoizedMergedChildContext=e,le(at),le(Qe),se(Qe,e)):le(at),se(at,r)}var cr=null,ha=!1,qa=!1;function Pp(e){cr===null?cr=[e]:cr.push(e)}function u0(e){ha=!0,Pp(e)}function Gr(){if(!qa&&cr!==null){qa=!0;var e=0,t=re;try{var r=cr;for(re=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}cr=null,ha=!1}catch(o){throw cr!==null&&(cr=cr.slice(e+1)),rp(Ic,Gr),o}finally{re=t,qa=!1}}return null}var Bi=[],Vi=0,Fs=null,Bs=0,zt=[],Et=0,mi=null,ur=1,dr="";function oi(e,t){Bi[Vi++]=Bs,Bi[Vi++]=Fs,Fs=e,Bs=t}function Np(e,t,r){zt[Et++]=ur,zt[Et++]=dr,zt[Et++]=mi,mi=e;var i=ur;e=dr;var o=32-Wt(i)-1;i&=~(1<<o),r+=1;var n=32-Wt(t)+o;if(30<n){var s=o-o%5;n=(i&(1<<s)-1).toString(32),i>>=s,o-=s,ur=1<<32-Wt(t)+o|r<<o|i,dr=n+e}else ur=1<<n|r<<o|i,dr=e}function Uc(e){e.return!==null&&(oi(e,1),Np(e,1,0))}function Hc(e){for(;e===Fs;)Fs=Bi[--Vi],Bi[Vi]=null,Bs=Bi[--Vi],Bi[Vi]=null;for(;e===mi;)mi=zt[--Et],zt[Et]=null,dr=zt[--Et],zt[Et]=null,ur=zt[--Et],zt[Et]=null}var _t=null,bt=null,ce=!1,Ut=null;function Lp(e,t){var r=At(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function hd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_t=e,bt=Dr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_t=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=mi!==null?{id:ur,overflow:dr}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=At(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,_t=e,bt=null,!0):!1;default:return!1}}function Hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wl(e){if(ce){var t=bt;if(t){var r=t;if(!hd(e,t)){if(Hl(e))throw Error(E(418));t=Dr(r.nextSibling);var i=_t;t&&hd(e,t)?Lp(i,r):(e.flags=e.flags&-4097|2,ce=!1,_t=e)}}else{if(Hl(e))throw Error(E(418));e.flags=e.flags&-4097|2,ce=!1,_t=e}}}function pd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_t=e}function Zn(e){if(e!==_t)return!1;if(!ce)return pd(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Bl(e.type,e.memoizedProps)),t&&(t=bt)){if(Hl(e))throw Ip(),Error(E(418));for(;t;)Lp(e,t),t=Dr(t.nextSibling)}if(pd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){bt=Dr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=_t?Dr(e.stateNode.nextSibling):null;return!0}function Ip(){for(var e=bt;e;)e=Dr(e.nextSibling)}function ro(){bt=_t=null,ce=!1}function Wc(e){Ut===null?Ut=[e]:Ut.push(e)}var d0=yr.ReactCurrentBatchConfig;function Vt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var Vs=Qr(null),js=null,ji=null,Kc=null;function qc(){Kc=ji=js=null}function Yc(e){var t=Vs.current;le(Vs),e._currentValue=t}function Kl(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function Qi(e,t){js=e,Kc=ji=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(st=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(Kc!==e)if(e={context:e,memoizedValue:t,next:null},ji===null){if(js===null)throw Error(E(308));ji=e,js.dependencies={lanes:0,firstContext:e}}else ji=ji.next=e;return t}var li=null;function Xc(e){li===null?li=[e]:li.push(e)}function Op(e,t,r,i){var o=t.interleaved;return o===null?(r.next=r,Xc(t)):(r.next=o.next,o.next=r),t.interleaved=r,mr(e,i)}function mr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var $r=!1;function Qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rr(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,Q&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,mr(e,r)}return o=i.interleaved,o===null?(t.next=t,Xc(i)):(t.next=o.next,o.next=t),i.interleaved=t,mr(e,r)}function gs(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Oc(e,r)}}function fd(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var o=null,n=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};n===null?o=n=s:n=n.next=s,r=r.next}while(r!==null);n===null?o=n=t:n=n.next=t}else o=n=t;r={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:n,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Us(e,t,r,i){var o=e.updateQueue;$r=!1;var n=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var l=c,u=l.next;l.next=null,s===null?n=u:s.next=u,s=l;var m=e.alternate;m!==null&&(m=m.updateQueue,c=m.lastBaseUpdate,c!==s&&(c===null?m.firstBaseUpdate=u:c.next=u,m.lastBaseUpdate=l))}if(n!==null){var h=o.baseState;s=0,m=u=l=null,c=n;do{var p=c.lane,g=c.eventTime;if((i&p)===p){m!==null&&(m=m.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var y=e,_=c;switch(p=t,g=r,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(g,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(g,h,p):y,p==null)break e;h=me({},h,p);break e;case 2:$r=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[c]:p.push(c))}else g={eventTime:g,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},m===null?(u=m=g,l=h):m=m.next=g,s|=p;if(c=c.next,c===null){if(c=o.shared.pending,c===null)break;p=c,c=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(m===null&&(l=h),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else n===null&&(o.shared.lanes=0);vi|=s,e.lanes=s,e.memoizedState=h}}function md(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=r,typeof o!="function")throw Error(E(191,o));o.call(i)}}}var Rp=new Oh.Component().refs;function ql(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:me({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var pa={isMounted:function(e){return(e=e._reactInternals)?Si(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=Je(),o=Fr(e),n=hr(i,o);n.payload=t,r!=null&&(n.callback=r),t=Rr(e,n,o),t!==null&&(Kt(t,e,o,i),gs(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=Je(),o=Fr(e),n=hr(i,o);n.tag=1,n.payload=t,r!=null&&(n.callback=r),t=Rr(e,n,o),t!==null&&(Kt(t,e,o,i),gs(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Je(),i=Fr(e),o=hr(r,i);o.tag=2,t!=null&&(o.callback=t),t=Rr(e,o,i),t!==null&&(Kt(t,e,i,r),gs(t,e,i))}};function gd(e,t,r,i,o,n,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,n,s):t.prototype&&t.prototype.isPureReactComponent?!dn(r,i)||!dn(o,n):!0}function Mp(e,t,r){var i=!1,o=Hr,n=t.contextType;return typeof n=="object"&&n!==null?n=Pt(n):(o=lt(t)?fi:Qe.current,i=t.contextTypes,n=(i=i!=null)?to(e,o):Hr),t=new t(r,n),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pa,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=n),t}function vd(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&pa.enqueueReplaceState(t,t.state,null)}function Yl(e,t,r,i){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=Rp,Qc(e);var n=t.contextType;typeof n=="object"&&n!==null?o.context=Pt(n):(n=lt(t)?fi:Qe.current,o.context=to(e,n)),o.state=e.memoizedState,n=t.getDerivedStateFromProps,typeof n=="function"&&(ql(e,t,n,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&pa.enqueueReplaceState(o,o.state,null),Us(e,r,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function $o(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var i=r.stateNode}if(!i)throw Error(E(147,e));var o=i,n=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===n?t.ref:(t=function(s){var c=o.refs;c===Rp&&(c=o.refs={}),s===null?delete c[n]:c[n]=s},t._stringRef=n,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function Jn(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yd(e){var t=e._init;return t(e._payload)}function Fp(e){function t(b,f){if(e){var v=b.deletions;v===null?(b.deletions=[f],b.flags|=16):v.push(f)}}function r(b,f){if(!e)return null;for(;f!==null;)t(b,f),f=f.sibling;return null}function i(b,f){for(b=new Map;f!==null;)f.key!==null?b.set(f.key,f):b.set(f.index,f),f=f.sibling;return b}function o(b,f){return b=Br(b,f),b.index=0,b.sibling=null,b}function n(b,f,v){return b.index=v,e?(v=b.alternate,v!==null?(v=v.index,v<f?(b.flags|=2,f):v):(b.flags|=2,f)):(b.flags|=1048576,f)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function c(b,f,v,w){return f===null||f.tag!==6?(f=el(v,b.mode,w),f.return=b,f):(f=o(f,v),f.return=b,f)}function l(b,f,v,w){var x=v.type;return x===Ii?m(b,f,v.props.children,w,v.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Cr&&yd(x)===f.type)?(w=o(f,v.props),w.ref=$o(b,f,v),w.return=b,w):(w=xs(v.type,v.key,v.props,null,b.mode,w),w.ref=$o(b,f,v),w.return=b,w)}function u(b,f,v,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=tl(v,b.mode,w),f.return=b,f):(f=o(f,v.children||[]),f.return=b,f)}function m(b,f,v,w,x){return f===null||f.tag!==7?(f=pi(v,b.mode,w,x),f.return=b,f):(f=o(f,v),f.return=b,f)}function h(b,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=el(""+f,b.mode,v),f.return=b,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case jn:return v=xs(f.type,f.key,f.props,null,b.mode,v),v.ref=$o(b,null,f),v.return=b,v;case Li:return f=tl(f,b.mode,v),f.return=b,f;case Cr:var w=f._init;return h(b,w(f._payload),v)}if(Ro(f)||_o(f))return f=pi(f,b.mode,v,null),f.return=b,f;Jn(b,f)}return null}function p(b,f,v,w){var x=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:c(b,f,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case jn:return v.key===x?l(b,f,v,w):null;case Li:return v.key===x?u(b,f,v,w):null;case Cr:return x=v._init,p(b,f,x(v._payload),w)}if(Ro(v)||_o(v))return x!==null?null:m(b,f,v,w,null);Jn(b,v)}return null}function g(b,f,v,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(v)||null,c(f,b,""+w,x);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case jn:return b=b.get(w.key===null?v:w.key)||null,l(f,b,w,x);case Li:return b=b.get(w.key===null?v:w.key)||null,u(f,b,w,x);case Cr:var S=w._init;return g(b,f,v,S(w._payload),x)}if(Ro(w)||_o(w))return b=b.get(v)||null,m(f,b,w,x,null);Jn(f,w)}return null}function y(b,f,v,w){for(var x=null,S=null,$=f,A=f=0,L=null;$!==null&&A<v.length;A++){$.index>A?(L=$,$=null):L=$.sibling;var T=p(b,$,v[A],w);if(T===null){$===null&&($=L);break}e&&$&&T.alternate===null&&t(b,$),f=n(T,f,A),S===null?x=T:S.sibling=T,S=T,$=L}if(A===v.length)return r(b,$),ce&&oi(b,A),x;if($===null){for(;A<v.length;A++)$=h(b,v[A],w),$!==null&&(f=n($,f,A),S===null?x=$:S.sibling=$,S=$);return ce&&oi(b,A),x}for($=i(b,$);A<v.length;A++)L=g($,b,A,v[A],w),L!==null&&(e&&L.alternate!==null&&$.delete(L.key===null?A:L.key),f=n(L,f,A),S===null?x=L:S.sibling=L,S=L);return e&&$.forEach(function(ie){return t(b,ie)}),ce&&oi(b,A),x}function _(b,f,v,w){var x=_o(v);if(typeof x!="function")throw Error(E(150));if(v=x.call(v),v==null)throw Error(E(151));for(var S=x=null,$=f,A=f=0,L=null,T=v.next();$!==null&&!T.done;A++,T=v.next()){$.index>A?(L=$,$=null):L=$.sibling;var ie=p(b,$,T.value,w);if(ie===null){$===null&&($=L);break}e&&$&&ie.alternate===null&&t(b,$),f=n(ie,f,A),S===null?x=ie:S.sibling=ie,S=ie,$=L}if(T.done)return r(b,$),ce&&oi(b,A),x;if($===null){for(;!T.done;A++,T=v.next())T=h(b,T.value,w),T!==null&&(f=n(T,f,A),S===null?x=T:S.sibling=T,S=T);return ce&&oi(b,A),x}for($=i(b,$);!T.done;A++,T=v.next())T=g($,b,A,T.value,w),T!==null&&(e&&T.alternate!==null&&$.delete(T.key===null?A:T.key),f=n(T,f,A),S===null?x=T:S.sibling=T,S=T);return e&&$.forEach(function(oe){return t(b,oe)}),ce&&oi(b,A),x}function z(b,f,v,w){if(typeof v=="object"&&v!==null&&v.type===Ii&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case jn:e:{for(var x=v.key,S=f;S!==null;){if(S.key===x){if(x=v.type,x===Ii){if(S.tag===7){r(b,S.sibling),f=o(S,v.props.children),f.return=b,b=f;break e}}else if(S.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Cr&&yd(x)===S.type){r(b,S.sibling),f=o(S,v.props),f.ref=$o(b,S,v),f.return=b,b=f;break e}r(b,S);break}else t(b,S);S=S.sibling}v.type===Ii?(f=pi(v.props.children,b.mode,w,v.key),f.return=b,b=f):(w=xs(v.type,v.key,v.props,null,b.mode,w),w.ref=$o(b,f,v),w.return=b,b=w)}return s(b);case Li:e:{for(S=v.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){r(b,f.sibling),f=o(f,v.children||[]),f.return=b,b=f;break e}else{r(b,f);break}else t(b,f);f=f.sibling}f=tl(v,b.mode,w),f.return=b,b=f}return s(b);case Cr:return S=v._init,z(b,f,S(v._payload),w)}if(Ro(v))return y(b,f,v,w);if(_o(v))return _(b,f,v,w);Jn(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(r(b,f.sibling),f=o(f,v),f.return=b,b=f):(r(b,f),f=el(v,b.mode,w),f.return=b,b=f),s(b)):r(b,f)}return z}var io=Fp(!0),Bp=Fp(!1),An={},nr=Qr(An),mn=Qr(An),gn=Qr(An);function ci(e){if(e===An)throw Error(E(174));return e}function Gc(e,t){switch(se(gn,t),se(mn,e),se(nr,An),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$l(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$l(t,e)}le(nr),se(nr,t)}function oo(){le(nr),le(mn),le(gn)}function Vp(e){ci(gn.current);var t=ci(nr.current),r=$l(t,e.type);t!==r&&(se(mn,e),se(nr,r))}function Zc(e){mn.current===e&&(le(nr),le(mn))}var pe=Qr(0);function Hs(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ya=[];function Jc(){for(var e=0;e<Ya.length;e++)Ya[e]._workInProgressVersionPrimary=null;Ya.length=0}var vs=yr.ReactCurrentDispatcher,Xa=yr.ReactCurrentBatchConfig,gi=0,fe=null,Te=null,De=null,Ws=!1,Wo=!1,vn=0,h0=0;function qe(){throw Error(E(321))}function eu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!qt(e[r],t[r]))return!1;return!0}function tu(e,t,r,i,o,n){if(gi=n,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,vs.current=e===null||e.memoizedState===null?g0:v0,e=r(i,o),Wo){n=0;do{if(Wo=!1,vn=0,25<=n)throw Error(E(301));n+=1,De=Te=null,t.updateQueue=null,vs.current=y0,e=r(i,o)}while(Wo)}if(vs.current=Ks,t=Te!==null&&Te.next!==null,gi=0,De=Te=fe=null,Ws=!1,t)throw Error(E(300));return e}function ru(){var e=vn!==0;return vn=0,e}function tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?fe.memoizedState=De=e:De=De.next=e,De}function Nt(){if(Te===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=De===null?fe.memoizedState:De.next;if(t!==null)De=t,Te=e;else{if(e===null)throw Error(E(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},De===null?fe.memoizedState=De=e:De=De.next=e}return De}function yn(e,t){return typeof t=="function"?t(e):t}function Qa(e){var t=Nt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var i=Te,o=i.baseQueue,n=r.pending;if(n!==null){if(o!==null){var s=o.next;o.next=n.next,n.next=s}i.baseQueue=o=n,r.pending=null}if(o!==null){n=o.next,i=i.baseState;var c=s=null,l=null,u=n;do{var m=u.lane;if((gi&m)===m)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=h,s=i):l=l.next=h,fe.lanes|=m,vi|=m}u=u.next}while(u!==null&&u!==n);l===null?s=i:l.next=c,qt(i,t.memoizedState)||(st=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,r.lastRenderedState=i}if(e=r.interleaved,e!==null){o=e;do n=o.lane,fe.lanes|=n,vi|=n,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ga(e){var t=Nt(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var i=r.dispatch,o=r.pending,n=t.memoizedState;if(o!==null){r.pending=null;var s=o=o.next;do n=e(n,s.action),s=s.next;while(s!==o);qt(n,t.memoizedState)||(st=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),r.lastRenderedState=n}return[n,i]}function jp(){}function Up(e,t){var r=fe,i=Nt(),o=t(),n=!qt(i.memoizedState,o);if(n&&(i.memoizedState=o,st=!0),i=i.queue,iu(Kp.bind(null,r,i,e),[e]),i.getSnapshot!==t||n||De!==null&&De.memoizedState.tag&1){if(r.flags|=2048,bn(9,Wp.bind(null,r,i,o,t),void 0,null),Re===null)throw Error(E(349));gi&30||Hp(r,t,o)}return o}function Hp(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Wp(e,t,r,i){t.value=r,t.getSnapshot=i,qp(t)&&Yp(e)}function Kp(e,t,r){return r(function(){qp(t)&&Yp(e)})}function qp(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!qt(e,r)}catch{return!0}}function Yp(e){var t=mr(e,1);t!==null&&Kt(t,e,1,-1)}function bd(e){var t=tr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yn,lastRenderedState:e},t.queue=e,e=e.dispatch=m0.bind(null,fe,e),[t.memoizedState,e]}function bn(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Xp(){return Nt().memoizedState}function ys(e,t,r,i){var o=tr();fe.flags|=e,o.memoizedState=bn(1|t,r,void 0,i===void 0?null:i)}function fa(e,t,r,i){var o=Nt();i=i===void 0?null:i;var n=void 0;if(Te!==null){var s=Te.memoizedState;if(n=s.destroy,i!==null&&eu(i,s.deps)){o.memoizedState=bn(t,r,n,i);return}}fe.flags|=e,o.memoizedState=bn(1|t,r,n,i)}function wd(e,t){return ys(8390656,8,e,t)}function iu(e,t){return fa(2048,8,e,t)}function Qp(e,t){return fa(4,2,e,t)}function Gp(e,t){return fa(4,4,e,t)}function Zp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jp(e,t,r){return r=r!=null?r.concat([e]):null,fa(4,4,Zp.bind(null,t,e),r)}function ou(){}function ef(e,t){var r=Nt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&eu(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function tf(e,t){var r=Nt();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&eu(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function rf(e,t,r){return gi&21?(qt(r,t)||(r=np(),fe.lanes|=r,vi|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,st=!0),e.memoizedState=r)}function p0(e,t){var r=re;re=r!==0&&4>r?r:4,e(!0);var i=Xa.transition;Xa.transition={};try{e(!1),t()}finally{re=r,Xa.transition=i}}function of(){return Nt().memoizedState}function f0(e,t,r){var i=Fr(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},nf(e))sf(t,r);else if(r=Op(e,t,r,i),r!==null){var o=Je();Kt(r,e,i,o),af(r,t,i)}}function m0(e,t,r){var i=Fr(e),o={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(nf(e))sf(t,o);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var s=t.lastRenderedState,c=n(s,r);if(o.hasEagerState=!0,o.eagerState=c,qt(c,s)){var l=t.interleaved;l===null?(o.next=o,Xc(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}r=Op(e,t,o,i),r!==null&&(o=Je(),Kt(r,e,i,o),af(r,t,i))}}function nf(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function sf(e,t){Wo=Ws=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function af(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Oc(e,r)}}var Ks={readContext:Pt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},g0={readContext:Pt,useCallback:function(e,t){return tr().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:wd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ys(4194308,4,Zp.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ys(4194308,4,e,t)},useInsertionEffect:function(e,t){return ys(4,2,e,t)},useMemo:function(e,t){var r=tr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=tr();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=f0.bind(null,fe,e),[i.memoizedState,e]},useRef:function(e){var t=tr();return e={current:e},t.memoizedState=e},useState:bd,useDebugValue:ou,useDeferredValue:function(e){return tr().memoizedState=e},useTransition:function(){var e=bd(!1),t=e[0];return e=p0.bind(null,e[1]),tr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=fe,o=tr();if(ce){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),Re===null)throw Error(E(349));gi&30||Hp(i,t,r)}o.memoizedState=r;var n={value:r,getSnapshot:t};return o.queue=n,wd(Kp.bind(null,i,n,e),[e]),i.flags|=2048,bn(9,Wp.bind(null,i,n,r,t),void 0,null),r},useId:function(){var e=tr(),t=Re.identifierPrefix;if(ce){var r=dr,i=ur;r=(i&~(1<<32-Wt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=vn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=h0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},v0={readContext:Pt,useCallback:ef,useContext:Pt,useEffect:iu,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Gp,useMemo:tf,useReducer:Qa,useRef:Xp,useState:function(){return Qa(yn)},useDebugValue:ou,useDeferredValue:function(e){var t=Nt();return rf(t,Te.memoizedState,e)},useTransition:function(){var e=Qa(yn)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:jp,useSyncExternalStore:Up,useId:of,unstable_isNewReconciler:!1},y0={readContext:Pt,useCallback:ef,useContext:Pt,useEffect:iu,useImperativeHandle:Jp,useInsertionEffect:Qp,useLayoutEffect:Gp,useMemo:tf,useReducer:Ga,useRef:Xp,useState:function(){return Ga(yn)},useDebugValue:ou,useDeferredValue:function(e){var t=Nt();return Te===null?t.memoizedState=e:rf(t,Te.memoizedState,e)},useTransition:function(){var e=Ga(yn)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:jp,useSyncExternalStore:Up,useId:of,unstable_isNewReconciler:!1};function no(e,t){try{var r="",i=t;do r+=Km(i),i=i.return;while(i);var o=r}catch(n){o=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:t,stack:o,digest:null}}function Za(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Xl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var b0=typeof WeakMap=="function"?WeakMap:Map;function lf(e,t,r){r=hr(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){Ys||(Ys=!0,nc=i),Xl(e,t)},r}function cf(e,t,r){r=hr(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;r.payload=function(){return i(o)},r.callback=function(){Xl(e,t)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(r.callback=function(){Xl(e,t),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function _d(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new b0;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(r)||(o.add(r),e=L0.bind(null,e,t,r),t.then(e,e))}function xd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,r,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=hr(-1,1),t.tag=2,Rr(r,t,1))),r.lanes|=1),e)}var w0=yr.ReactCurrentOwner,st=!1;function Ze(e,t,r,i){t.child=e===null?Bp(t,null,r,i):io(t,e.child,r,i)}function Sd(e,t,r,i,o){r=r.render;var n=t.ref;return Qi(t,o),i=tu(e,t,r,i,n,o),r=ru(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gr(e,t,o)):(ce&&r&&Uc(t),t.flags|=1,Ze(e,t,i,o),t.child)}function Cd(e,t,r,i,o){if(e===null){var n=r.type;return typeof n=="function"&&!hu(n)&&n.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=n,uf(e,t,n,i,o)):(e=xs(r.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!(e.lanes&o)){var s=n.memoizedProps;if(r=r.compare,r=r!==null?r:dn,r(s,i)&&e.ref===t.ref)return gr(e,t,o)}return t.flags|=1,e=Br(n,i),e.ref=t.ref,e.return=t,t.child=e}function uf(e,t,r,i,o){if(e!==null){var n=e.memoizedProps;if(dn(n,i)&&e.ref===t.ref)if(st=!1,t.pendingProps=i=n,(e.lanes&o)!==0)e.flags&131072&&(st=!0);else return t.lanes=e.lanes,gr(e,t,o)}return Ql(e,t,r,i,o)}function df(e,t,r){var i=t.pendingProps,o=i.children,n=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Hi,vt),vt|=r;else{if(!(r&1073741824))return e=n!==null?n.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Hi,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=n!==null?n.baseLanes:r,se(Hi,vt),vt|=i}else n!==null?(i=n.baseLanes|r,t.memoizedState=null):i=r,se(Hi,vt),vt|=i;return Ze(e,t,o,r),t.child}function hf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,r,i,o){var n=lt(r)?fi:Qe.current;return n=to(t,n),Qi(t,o),r=tu(e,t,r,i,n,o),i=ru(),e!==null&&!st?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,gr(e,t,o)):(ce&&i&&Uc(t),t.flags|=1,Ze(e,t,r,o),t.child)}function $d(e,t,r,i,o){if(lt(r)){var n=!0;Ms(t)}else n=!1;if(Qi(t,o),t.stateNode===null)bs(e,t),Mp(t,r,i),Yl(t,r,i,o),i=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Pt(u):(u=lt(r)?fi:Qe.current,u=to(t,u));var m=r.getDerivedStateFromProps,h=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==i||l!==u)&&vd(t,s,i,u),$r=!1;var p=t.memoizedState;s.state=p,Us(t,i,s,o),l=t.memoizedState,c!==i||p!==l||at.current||$r?(typeof m=="function"&&(ql(t,r,m,i),l=t.memoizedState),(c=$r||gd(t,r,c,i,p,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=l),s.props=i,s.state=l,s.context=u,i=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Dp(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:Vt(t.type,c),s.props=u,h=t.pendingProps,p=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Pt(l):(l=lt(r)?fi:Qe.current,l=to(t,l));var g=r.getDerivedStateFromProps;(m=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==h||p!==l)&&vd(t,s,i,l),$r=!1,p=t.memoizedState,s.state=p,Us(t,i,s,o);var y=t.memoizedState;c!==h||p!==y||at.current||$r?(typeof g=="function"&&(ql(t,r,g,i),y=t.memoizedState),(u=$r||gd(t,r,u,i,p,y,l)||!1)?(m||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),i=!1)}return Gl(e,t,r,i,n,o)}function Gl(e,t,r,i,o,n){hf(e,t);var s=(t.flags&128)!==0;if(!i&&!s)return o&&dd(t,r,!1),gr(e,t,n);i=t.stateNode,w0.current=t;var c=s&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&s?(t.child=io(t,e.child,null,n),t.child=io(t,null,c,n)):Ze(e,t,c,n),t.memoizedState=i.state,o&&dd(t,r,!0),t.child}function pf(e){var t=e.stateNode;t.pendingContext?ud(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ud(e,t.context,!1),Gc(e,t.containerInfo)}function zd(e,t,r,i,o){return ro(),Wc(o),t.flags|=256,Ze(e,t,r,i),t.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function Jl(e){return{baseLanes:e,cachePool:null,transitions:null}}function ff(e,t,r){var i=t.pendingProps,o=pe.current,n=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(o&2)!==0),c?(n=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(pe,o&1),e===null)return Wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=i.children,e=i.fallback,n?(i=t.mode,n=t.child,s={mode:"hidden",children:s},!(i&1)&&n!==null?(n.childLanes=0,n.pendingProps=s):n=va(s,i,0,null),e=pi(e,i,r,null),n.return=t,e.return=t,n.sibling=e,t.child=n,t.child.memoizedState=Jl(r),t.memoizedState=Zl,e):nu(t,s));if(o=e.memoizedState,o!==null&&(c=o.dehydrated,c!==null))return _0(e,t,s,i,c,o,r);if(n){n=i.fallback,s=t.mode,o=e.child,c=o.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=l,t.deletions=null):(i=Br(o,l),i.subtreeFlags=o.subtreeFlags&14680064),c!==null?n=Br(c,n):(n=pi(n,s,r,null),n.flags|=2),n.return=t,i.return=t,i.sibling=n,t.child=i,i=n,n=t.child,s=e.child.memoizedState,s=s===null?Jl(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},n.memoizedState=s,n.childLanes=e.childLanes&~r,t.memoizedState=Zl,i}return n=e.child,e=n.sibling,i=Br(n,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function nu(e,t){return t=va({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function es(e,t,r,i){return i!==null&&Wc(i),io(t,e.child,null,r),e=nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _0(e,t,r,i,o,n,s){if(r)return t.flags&256?(t.flags&=-257,i=Za(Error(E(422))),es(e,t,s,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(n=i.fallback,o=t.mode,i=va({mode:"visible",children:i.children},o,0,null),n=pi(n,o,s,null),n.flags|=2,i.return=t,n.return=t,i.sibling=n,t.child=i,t.mode&1&&io(t,e.child,null,s),t.child.memoizedState=Jl(s),t.memoizedState=Zl,n);if(!(t.mode&1))return es(e,t,s,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var c=i.dgst;return i=c,n=Error(E(419)),i=Za(n,i,void 0),es(e,t,s,i)}if(c=(s&e.childLanes)!==0,st||c){if(i=Re,i!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|s)?0:o,o!==0&&o!==n.retryLane&&(n.retryLane=o,mr(e,o),Kt(i,e,o,-1))}return du(),i=Za(Error(E(421))),es(e,t,s,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=I0.bind(null,e),o._reactRetry=t,null):(e=n.treeContext,bt=Dr(o.nextSibling),_t=t,ce=!0,Ut=null,e!==null&&(zt[Et++]=ur,zt[Et++]=dr,zt[Et++]=mi,ur=e.id,dr=e.overflow,mi=t),t=nu(t,i.children),t.flags|=4096,t)}function Ed(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Kl(e.return,t,r)}function Ja(e,t,r,i,o){var n=e.memoizedState;n===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:o}:(n.isBackwards=t,n.rendering=null,n.renderingStartTime=0,n.last=i,n.tail=r,n.tailMode=o)}function mf(e,t,r){var i=t.pendingProps,o=i.revealOrder,n=i.tail;if(Ze(e,t,i.children,r),i=pe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,r,t);else if(e.tag===19)Ed(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(se(pe,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Hs(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Ja(t,!1,o,r,n);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Hs(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Ja(t,!0,r,null,n);break;case"together":Ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),vi|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Br(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Br(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function x0(e,t,r){switch(t.tag){case 3:pf(t),ro();break;case 5:Vp(t);break;case 1:lt(t.type)&&Ms(t);break;case 4:Gc(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;se(Vs,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(se(pe,pe.current&1),t.flags|=128,null):r&t.child.childLanes?ff(e,t,r):(se(pe,pe.current&1),e=gr(e,t,r),e!==null?e.sibling:null);se(pe,pe.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return mf(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(pe,pe.current),i)break;return null;case 22:case 23:return t.lanes=0,df(e,t,r)}return gr(e,t,r)}var gf,ec,vf,yf;gf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ec=function(){};vf=function(e,t,r,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,ci(nr.current);var n=null;switch(r){case"input":o=xl(e,o),i=xl(e,i),n=[];break;case"select":o=me({},o,{value:void 0}),i=me({},i,{value:void 0}),n=[];break;case"textarea":o=Cl(e,o),i=Cl(e,i),n=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ds)}zl(r,i);var s;r=null;for(u in o)if(!i.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var c=o[u];for(s in c)c.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(on.hasOwnProperty(u)?n||(n=[]):(n=n||[]).push(u,null));for(u in i){var l=i[u];if(c=o!=null?o[u]:void 0,i.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(n||(n=[]),n.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(n=n||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(n=n||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(on.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),n||c===l||(n=[])):(n=n||[]).push(u,l))}r&&(n=n||[]).push("style",r);var u=n;(t.updateQueue=u)&&(t.flags|=4)}};yf=function(e,t,r,i){r!==i&&(t.flags|=4)};function zo(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function k0(e,t,r){var i=t.pendingProps;switch(Hc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return lt(t.type)&&Rs(),Ye(t),null;case 3:return i=t.stateNode,oo(),le(at),le(Qe),Jc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ut!==null&&(lc(Ut),Ut=null))),ec(e,t),Ye(t),null;case 5:Zc(t);var o=ci(gn.current);if(r=t.type,e!==null&&t.stateNode!=null)vf(e,t,r,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(E(166));return Ye(t),null}if(e=ci(nr.current),Zn(t)){i=t.stateNode,r=t.type;var n=t.memoizedProps;switch(i[ir]=t,i[fn]=n,e=(t.mode&1)!==0,r){case"dialog":ae("cancel",i),ae("close",i);break;case"iframe":case"object":case"embed":ae("load",i);break;case"video":case"audio":for(o=0;o<Fo.length;o++)ae(Fo[o],i);break;case"source":ae("error",i);break;case"img":case"image":case"link":ae("error",i),ae("load",i);break;case"details":ae("toggle",i);break;case"input":Ru(i,n),ae("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!n.multiple},ae("invalid",i);break;case"textarea":Fu(i,n),ae("invalid",i)}zl(r,n),o=null;for(var s in n)if(n.hasOwnProperty(s)){var c=n[s];s==="children"?typeof c=="string"?i.textContent!==c&&(n.suppressHydrationWarning!==!0&&Gn(i.textContent,c,e),o=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(n.suppressHydrationWarning!==!0&&Gn(i.textContent,c,e),o=["children",""+c]):on.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ae("scroll",i)}switch(r){case"input":Un(i),Mu(i,n,!0);break;case"textarea":Un(i),Bu(i);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(i.onclick=Ds)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hh(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=s.createElement(r,{is:i.is}):(e=s.createElement(r),r==="select"&&(s=e,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):e=s.createElementNS(e,r),e[ir]=t,e[fn]=i,gf(e,t,!1,!1),t.stateNode=e;e:{switch(s=El(r,i),r){case"dialog":ae("cancel",e),ae("close",e),o=i;break;case"iframe":case"object":case"embed":ae("load",e),o=i;break;case"video":case"audio":for(o=0;o<Fo.length;o++)ae(Fo[o],e);o=i;break;case"source":ae("error",e),o=i;break;case"img":case"image":case"link":ae("error",e),ae("load",e),o=i;break;case"details":ae("toggle",e),o=i;break;case"input":Ru(e,i),o=xl(e,i),ae("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=me({},i,{value:void 0}),ae("invalid",e);break;case"textarea":Fu(e,i),o=Cl(e,i),ae("invalid",e);break;default:o=i}zl(r,o),c=o;for(n in c)if(c.hasOwnProperty(n)){var l=c[n];n==="style"?qh(e,l):n==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wh(e,l)):n==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&nn(e,l):typeof l=="number"&&nn(e,""+l):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(on.hasOwnProperty(n)?l!=null&&n==="onScroll"&&ae("scroll",e):l!=null&&Ac(e,n,l,s))}switch(r){case"input":Un(e),Mu(e,i,!1);break;case"textarea":Un(e),Bu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Ur(i.value));break;case"select":e.multiple=!!i.multiple,n=i.value,n!=null?Ki(e,!!i.multiple,n,!1):i.defaultValue!=null&&Ki(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ds)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)yf(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(E(166));if(r=ci(gn.current),ci(nr.current),Zn(t)){if(i=t.stateNode,r=t.memoizedProps,i[ir]=t,(n=i.nodeValue!==r)&&(e=_t,e!==null))switch(e.tag){case 3:Gn(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gn(i.nodeValue,r,(e.mode&1)!==0)}n&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[ir]=t,t.stateNode=i}return Ye(t),null;case 13:if(le(pe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&bt!==null&&t.mode&1&&!(t.flags&128))Ip(),ro(),t.flags|=98560,n=!1;else if(n=Zn(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(E(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(E(317));n[ir]=t}else ro(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ye(t),n=!1}else Ut!==null&&(lc(Ut),Ut=null),n=!0;if(!n)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||pe.current&1?Pe===0&&(Pe=3):du())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return oo(),ec(e,t),e===null&&hn(t.stateNode.containerInfo),Ye(t),null;case 10:return Yc(t.type._context),Ye(t),null;case 17:return lt(t.type)&&Rs(),Ye(t),null;case 19:if(le(pe),n=t.memoizedState,n===null)return Ye(t),null;if(i=(t.flags&128)!==0,s=n.rendering,s===null)if(i)zo(n,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Hs(e),s!==null){for(t.flags|=128,zo(n,!1),i=s.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)n=r,e=i,n.flags&=14680066,s=n.alternate,s===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,e=s.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return se(pe,pe.current&1|2),t.child}e=e.sibling}n.tail!==null&&ke()>so&&(t.flags|=128,i=!0,zo(n,!1),t.lanes=4194304)}else{if(!i)if(e=Hs(s),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),zo(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ce)return Ye(t),null}else 2*ke()-n.renderingStartTime>so&&r!==1073741824&&(t.flags|=128,i=!0,zo(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(r=n.last,r!==null?r.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=ke(),t.sibling=null,r=pe.current,se(pe,i?r&1|2:r&1),t):(Ye(t),null);case 22:case 23:return uu(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?vt&1073741824&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function S0(e,t){switch(Hc(t),t.tag){case 1:return lt(t.type)&&Rs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oo(),le(at),le(Qe),Jc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Zc(t),null;case 13:if(le(pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));ro()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(pe),null;case 4:return oo(),null;case 10:return Yc(t.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var ts=!1,Xe=!1,C0=typeof WeakSet=="function"?WeakSet:Set,O=null;function Ui(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){ye(e,t,i)}else r.current=null}function tc(e,t,r){try{r()}catch(i){ye(e,t,i)}}var Ad=!1;function $0(e,t){if(Ml=Ls,e=_p(),jc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var o=i.anchorOffset,n=i.focusNode;i=i.focusOffset;try{r.nodeType,n.nodeType}catch{r=null;break e}var s=0,c=-1,l=-1,u=0,m=0,h=e,p=null;t:for(;;){for(var g;h!==r||o!==0&&h.nodeType!==3||(c=s+o),h!==n||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===e)break t;if(p===r&&++u===o&&(c=s),p===n&&++m===i&&(l=s),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Fl={focusedElem:e,selectionRange:r},Ls=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,z=y.memoizedState,b=t.stateNode,f=b.getSnapshotBeforeUpdate(t.elementType===t.type?_:Vt(t.type,_),z);b.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ye(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=Ad,Ad=!1,y}function Ko(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var n=o.destroy;o.destroy=void 0,n!==void 0&&tc(t,r,n)}o=o.next}while(o!==i)}}function ma(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function rc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ir],delete t[fn],delete t[jl],delete t[l0],delete t[c0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wf(e){return e.tag===5||e.tag===3||e.tag===4}function Td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ic(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Ds));else if(i!==4&&(e=e.child,e!==null))for(ic(e,t,r),e=e.sibling;e!==null;)ic(e,t,r),e=e.sibling}function oc(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(oc(e,t,r),e=e.sibling;e!==null;)oc(e,t,r),e=e.sibling}var Ve=null,jt=!1;function Sr(e,t,r){for(r=r.child;r!==null;)_f(e,t,r),r=r.sibling}function _f(e,t,r){if(or&&typeof or.onCommitFiberUnmount=="function")try{or.onCommitFiberUnmount(aa,r)}catch{}switch(r.tag){case 5:Xe||Ui(r,t);case 6:var i=Ve,o=jt;Ve=null,Sr(e,t,r),Ve=i,jt=o,Ve!==null&&(jt?(e=Ve,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ve.removeChild(r.stateNode));break;case 18:Ve!==null&&(jt?(e=Ve,r=r.stateNode,e.nodeType===8?Ka(e.parentNode,r):e.nodeType===1&&Ka(e,r),cn(e)):Ka(Ve,r.stateNode));break;case 4:i=Ve,o=jt,Ve=r.stateNode.containerInfo,jt=!0,Sr(e,t,r),Ve=i,jt=o;break;case 0:case 11:case 14:case 15:if(!Xe&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var n=o,s=n.destroy;n=n.tag,s!==void 0&&(n&2||n&4)&&tc(r,t,s),o=o.next}while(o!==i)}Sr(e,t,r);break;case 1:if(!Xe&&(Ui(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(c){ye(r,t,c)}Sr(e,t,r);break;case 21:Sr(e,t,r);break;case 22:r.mode&1?(Xe=(i=Xe)||r.memoizedState!==null,Sr(e,t,r),Xe=i):Sr(e,t,r);break;default:Sr(e,t,r)}}function Pd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new C0),t.forEach(function(i){var o=O0.bind(null,e,i);r.has(i)||(r.add(i),i.then(o,o))})}}function Ft(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];try{var n=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Ve=c.stateNode,jt=!1;break e;case 3:Ve=c.stateNode.containerInfo,jt=!0;break e;case 4:Ve=c.stateNode.containerInfo,jt=!0;break e}c=c.return}if(Ve===null)throw Error(E(160));_f(n,s,o),Ve=null,jt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){ye(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xf(t,e),t=t.sibling}function xf(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ft(t,e),er(e),i&4){try{Ko(3,e,e.return),ma(3,e)}catch(_){ye(e,e.return,_)}try{Ko(5,e,e.return)}catch(_){ye(e,e.return,_)}}break;case 1:Ft(t,e),er(e),i&512&&r!==null&&Ui(r,r.return);break;case 5:if(Ft(t,e),er(e),i&512&&r!==null&&Ui(r,r.return),e.flags&32){var o=e.stateNode;try{nn(o,"")}catch(_){ye(e,e.return,_)}}if(i&4&&(o=e.stateNode,o!=null)){var n=e.memoizedProps,s=r!==null?r.memoizedProps:n,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&n.type==="radio"&&n.name!=null&&jh(o,n),El(c,s);var u=El(c,n);for(s=0;s<l.length;s+=2){var m=l[s],h=l[s+1];m==="style"?qh(o,h):m==="dangerouslySetInnerHTML"?Wh(o,h):m==="children"?nn(o,h):Ac(o,m,h,u)}switch(c){case"input":kl(o,n);break;case"textarea":Uh(o,n);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!n.multiple;var g=n.value;g!=null?Ki(o,!!n.multiple,g,!1):p!==!!n.multiple&&(n.defaultValue!=null?Ki(o,!!n.multiple,n.defaultValue,!0):Ki(o,!!n.multiple,n.multiple?[]:"",!1))}o[fn]=n}catch(_){ye(e,e.return,_)}}break;case 6:if(Ft(t,e),er(e),i&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,n=e.memoizedProps;try{o.nodeValue=n}catch(_){ye(e,e.return,_)}}break;case 3:if(Ft(t,e),er(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{cn(t.containerInfo)}catch(_){ye(e,e.return,_)}break;case 4:Ft(t,e),er(e);break;case 13:Ft(t,e),er(e),o=e.child,o.flags&8192&&(n=o.memoizedState!==null,o.stateNode.isHidden=n,!n||o.alternate!==null&&o.alternate.memoizedState!==null||(lu=ke())),i&4&&Pd(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||m,Ft(t,e),Xe=u):Ft(t,e),er(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(O=e,m=e.child;m!==null;){for(h=O=m;O!==null;){switch(p=O,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ko(4,p,p.return);break;case 1:Ui(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,r=p.return;try{t=i,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){ye(i,r,_)}}break;case 5:Ui(p,p.return);break;case 22:if(p.memoizedState!==null){Ld(h);continue}}g!==null?(g.return=p,O=g):Ld(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{o=h.stateNode,u?(n=o.style,typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"):(c=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=Kh("display",s))}catch(_){ye(e,e.return,_)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ye(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ft(t,e),er(e),i&4&&Pd(e);break;case 21:break;default:Ft(t,e),er(e)}}function er(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(wf(r)){var i=r;break e}r=r.return}throw Error(E(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(nn(o,""),i.flags&=-33);var n=Td(e);oc(e,n,o);break;case 3:case 4:var s=i.stateNode.containerInfo,c=Td(e);ic(e,c,s);break;default:throw Error(E(161))}}catch(l){ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function z0(e,t,r){O=e,kf(e)}function kf(e,t,r){for(var i=(e.mode&1)!==0;O!==null;){var o=O,n=o.child;if(o.tag===22&&i){var s=o.memoizedState!==null||ts;if(!s){var c=o.alternate,l=c!==null&&c.memoizedState!==null||Xe;c=ts;var u=Xe;if(ts=s,(Xe=l)&&!u)for(O=o;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?Id(o):l!==null?(l.return=s,O=l):Id(o);for(;n!==null;)O=n,kf(n),n=n.sibling;O=o,ts=c,Xe=u}Nd(e)}else o.subtreeFlags&8772&&n!==null?(n.return=o,O=n):Nd(e)}}function Nd(e){for(;O!==null;){var t=O;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||ma(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!Xe)if(r===null)i.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Vt(t.type,r.memoizedProps);i.componentDidUpdate(o,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var n=t.updateQueue;n!==null&&md(t,n,i);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}md(t,s,r)}break;case 5:var c=t.stateNode;if(r===null&&t.flags&4){r=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&cn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Xe||t.flags&512&&rc(t)}catch(p){ye(t,t.return,p)}}if(t===e){O=null;break}if(r=t.sibling,r!==null){r.return=t.return,O=r;break}O=t.return}}function Ld(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}function Id(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ma(4,t)}catch(l){ye(t,r,l)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(l){ye(t,o,l)}}var n=t.return;try{rc(t)}catch(l){ye(t,n,l)}break;case 5:var s=t.return;try{rc(t)}catch(l){ye(t,s,l)}}}catch(l){ye(t,t.return,l)}if(t===e){O=null;break}var c=t.sibling;if(c!==null){c.return=t.return,O=c;break}O=t.return}}var E0=Math.ceil,qs=yr.ReactCurrentDispatcher,su=yr.ReactCurrentOwner,Tt=yr.ReactCurrentBatchConfig,Q=0,Re=null,Ce=null,je=0,vt=0,Hi=Qr(0),Pe=0,wn=null,vi=0,ga=0,au=0,qo=null,nt=null,lu=0,so=1/0,lr=null,Ys=!1,nc=null,Mr=null,rs=!1,Pr=null,Xs=0,Yo=0,sc=null,ws=-1,_s=0;function Je(){return Q&6?ke():ws!==-1?ws:ws=ke()}function Fr(e){return e.mode&1?Q&2&&je!==0?je&-je:d0.transition!==null?(_s===0&&(_s=np()),_s):(e=re,e!==0||(e=window.event,e=e===void 0?16:hp(e.type)),e):1}function Kt(e,t,r,i){if(50<Yo)throw Yo=0,sc=null,Error(E(185));$n(e,r,i),(!(Q&2)||e!==Re)&&(e===Re&&(!(Q&2)&&(ga|=r),Pe===4&&Er(e,je)),ct(e,i),r===1&&Q===0&&!(t.mode&1)&&(so=ke()+500,ha&&Gr()))}function ct(e,t){var r=e.callbackNode;dg(e,t);var i=Ns(e,e===Re?je:0);if(i===0)r!==null&&Uu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Uu(r),t===1)e.tag===0?u0(Od.bind(null,e)):Pp(Od.bind(null,e)),s0(function(){!(Q&6)&&Gr()}),r=null;else{switch(sp(i)){case 1:r=Ic;break;case 4:r=ip;break;case 16:r=Ps;break;case 536870912:r=op;break;default:r=Ps}r=Pf(r,Sf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Sf(e,t){if(ws=-1,_s=0,Q&6)throw Error(E(327));var r=e.callbackNode;if(Gi()&&e.callbackNode!==r)return null;var i=Ns(e,e===Re?je:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=Qs(e,i);else{t=i;var o=Q;Q|=2;var n=$f();(Re!==e||je!==t)&&(lr=null,so=ke()+500,hi(e,t));do try{P0();break}catch(c){Cf(e,c)}while(!0);qc(),qs.current=n,Q=o,Ce!==null?t=0:(Re=null,je=0,t=Pe)}if(t!==0){if(t===2&&(o=Ll(e),o!==0&&(i=o,t=ac(e,o))),t===1)throw r=wn,hi(e,0),Er(e,i),ct(e,ke()),r;if(t===6)Er(e,i);else{if(o=e.current.alternate,!(i&30)&&!A0(o)&&(t=Qs(e,i),t===2&&(n=Ll(e),n!==0&&(i=n,t=ac(e,n))),t===1))throw r=wn,hi(e,0),Er(e,i),ct(e,ke()),r;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(E(345));case 2:ni(e,nt,lr);break;case 3:if(Er(e,i),(i&130023424)===i&&(t=lu+500-ke(),10<t)){if(Ns(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){Je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Vl(ni.bind(null,e,nt,lr),t);break}ni(e,nt,lr);break;case 4:if(Er(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var s=31-Wt(i);n=1<<s,s=t[s],s>o&&(o=s),i&=~n}if(i=o,i=ke()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*E0(i/1960))-i,10<i){e.timeoutHandle=Vl(ni.bind(null,e,nt,lr),i);break}ni(e,nt,lr);break;case 5:ni(e,nt,lr);break;default:throw Error(E(329))}}}return ct(e,ke()),e.callbackNode===r?Sf.bind(null,e):null}function ac(e,t){var r=qo;return e.current.memoizedState.isDehydrated&&(hi(e,t).flags|=256),e=Qs(e,t),e!==2&&(t=nt,nt=r,t!==null&&lc(t)),e}function lc(e){nt===null?nt=e:nt.push.apply(nt,e)}function A0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var o=r[i],n=o.getSnapshot;o=o.value;try{if(!qt(n(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Er(e,t){for(t&=~au,t&=~ga,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Wt(t),i=1<<r;e[r]=-1,t&=~i}}function Od(e){if(Q&6)throw Error(E(327));Gi();var t=Ns(e,0);if(!(t&1))return ct(e,ke()),null;var r=Qs(e,t);if(e.tag!==0&&r===2){var i=Ll(e);i!==0&&(t=i,r=ac(e,i))}if(r===1)throw r=wn,hi(e,0),Er(e,t),ct(e,ke()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ni(e,nt,lr),ct(e,ke()),null}function cu(e,t){var r=Q;Q|=1;try{return e(t)}finally{Q=r,Q===0&&(so=ke()+500,ha&&Gr())}}function yi(e){Pr!==null&&Pr.tag===0&&!(Q&6)&&Gi();var t=Q;Q|=1;var r=Tt.transition,i=re;try{if(Tt.transition=null,re=1,e)return e()}finally{re=i,Tt.transition=r,Q=t,!(Q&6)&&Gr()}}function uu(){vt=Hi.current,le(Hi)}function hi(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,n0(r)),Ce!==null)for(r=Ce.return;r!==null;){var i=r;switch(Hc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Rs();break;case 3:oo(),le(at),le(Qe),Jc();break;case 5:Zc(i);break;case 4:oo();break;case 13:le(pe);break;case 19:le(pe);break;case 10:Yc(i.type._context);break;case 22:case 23:uu()}r=r.return}if(Re=e,Ce=e=Br(e.current,null),je=vt=t,Pe=0,wn=null,au=ga=vi=0,nt=qo=null,li!==null){for(t=0;t<li.length;t++)if(r=li[t],i=r.interleaved,i!==null){r.interleaved=null;var o=i.next,n=r.pending;if(n!==null){var s=n.next;n.next=o,i.next=s}r.pending=i}li=null}return e}function Cf(e,t){do{var r=Ce;try{if(qc(),vs.current=Ks,Ws){for(var i=fe.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}Ws=!1}if(gi=0,De=Te=fe=null,Wo=!1,vn=0,su.current=null,r===null||r.return===null){Pe=1,wn=t,Ce=null;break}e:{var n=e,s=r.return,c=r,l=t;if(t=je,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,m=c,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=xd(s);if(g!==null){g.flags&=-257,kd(g,s,c,n,t),g.mode&1&&_d(n,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if(!(t&1)){_d(n,u,t),du();break e}l=Error(E(426))}}else if(ce&&c.mode&1){var z=xd(s);if(z!==null){!(z.flags&65536)&&(z.flags|=256),kd(z,s,c,n,t),Wc(no(l,c));break e}}n=l=no(l,c),Pe!==4&&(Pe=2),qo===null?qo=[n]:qo.push(n),n=s;do{switch(n.tag){case 3:n.flags|=65536,t&=-t,n.lanes|=t;var b=lf(n,l,t);fd(n,b);break e;case 1:c=l;var f=n.type,v=n.stateNode;if(!(n.flags&128)&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Mr===null||!Mr.has(v)))){n.flags|=65536,t&=-t,n.lanes|=t;var w=cf(n,c,t);fd(n,w);break e}}n=n.return}while(n!==null)}Ef(r)}catch(x){t=x,Ce===r&&r!==null&&(Ce=r=r.return);continue}break}while(!0)}function $f(){var e=qs.current;return qs.current=Ks,e===null?Ks:e}function du(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Re===null||!(vi&268435455)&&!(ga&268435455)||Er(Re,je)}function Qs(e,t){var r=Q;Q|=2;var i=$f();(Re!==e||je!==t)&&(lr=null,hi(e,t));do try{T0();break}catch(o){Cf(e,o)}while(!0);if(qc(),Q=r,qs.current=i,Ce!==null)throw Error(E(261));return Re=null,je=0,Pe}function T0(){for(;Ce!==null;)zf(Ce)}function P0(){for(;Ce!==null&&!rg();)zf(Ce)}function zf(e){var t=Tf(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?Ef(e):Ce=t,su.current=null}function Ef(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=S0(r,t),r!==null){r.flags&=32767,Ce=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Ce=null;return}}else if(r=k0(r,t,vt),r!==null){Ce=r;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Pe===0&&(Pe=5)}function ni(e,t,r){var i=re,o=Tt.transition;try{Tt.transition=null,re=1,N0(e,t,r,i)}finally{Tt.transition=o,re=i}return null}function N0(e,t,r,i){do Gi();while(Pr!==null);if(Q&6)throw Error(E(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var n=r.lanes|r.childLanes;if(hg(e,n),e===Re&&(Ce=Re=null,je=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||rs||(rs=!0,Pf(Ps,function(){return Gi(),null})),n=(r.flags&15990)!==0,r.subtreeFlags&15990||n){n=Tt.transition,Tt.transition=null;var s=re;re=1;var c=Q;Q|=4,su.current=null,$0(e,r),xf(r,e),Zg(Fl),Ls=!!Ml,Fl=Ml=null,e.current=r,z0(r),ig(),Q=c,re=s,Tt.transition=n}else e.current=r;if(rs&&(rs=!1,Pr=e,Xs=o),n=e.pendingLanes,n===0&&(Mr=null),sg(r.stateNode),ct(e,ke()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],i(o.value,{componentStack:o.stack,digest:o.digest});if(Ys)throw Ys=!1,e=nc,nc=null,e;return Xs&1&&e.tag!==0&&Gi(),n=e.pendingLanes,n&1?e===sc?Yo++:(Yo=0,sc=e):Yo=0,Gr(),null}function Gi(){if(Pr!==null){var e=sp(Xs),t=Tt.transition,r=re;try{if(Tt.transition=null,re=16>e?16:e,Pr===null)var i=!1;else{if(e=Pr,Pr=null,Xs=0,Q&6)throw Error(E(331));var o=Q;for(Q|=4,O=e.current;O!==null;){var n=O,s=n.child;if(O.flags&16){var c=n.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(O=u;O!==null;){var m=O;switch(m.tag){case 0:case 11:case 15:Ko(8,m,n)}var h=m.child;if(h!==null)h.return=m,O=h;else for(;O!==null;){m=O;var p=m.sibling,g=m.return;if(bf(m),m===u){O=null;break}if(p!==null){p.return=g,O=p;break}O=g}}}var y=n.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var z=_.sibling;_.sibling=null,_=z}while(_!==null)}}O=n}}if(n.subtreeFlags&2064&&s!==null)s.return=n,O=s;else e:for(;O!==null;){if(n=O,n.flags&2048)switch(n.tag){case 0:case 11:case 15:Ko(9,n,n.return)}var b=n.sibling;if(b!==null){b.return=n.return,O=b;break e}O=n.return}}var f=e.current;for(O=f;O!==null;){s=O;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,O=v;else e:for(s=f;O!==null;){if(c=O,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ma(9,c)}}catch(x){ye(c,c.return,x)}if(c===s){O=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,O=w;break e}O=c.return}}if(Q=o,Gr(),or&&typeof or.onPostCommitFiberRoot=="function")try{or.onPostCommitFiberRoot(aa,e)}catch{}i=!0}return i}finally{re=r,Tt.transition=t}}return!1}function Dd(e,t,r){t=no(r,t),t=lf(e,t,1),e=Rr(e,t,1),t=Je(),e!==null&&($n(e,1,t),ct(e,t))}function ye(e,t,r){if(e.tag===3)Dd(e,e,r);else for(;t!==null;){if(t.tag===3){Dd(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){e=no(r,e),e=cf(t,e,1),t=Rr(t,e,1),e=Je(),t!==null&&($n(t,1,e),ct(t,e));break}}t=t.return}}function L0(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&r,Re===e&&(je&r)===r&&(Pe===4||Pe===3&&(je&130023424)===je&&500>ke()-lu?hi(e,0):au|=r),ct(e,t)}function Af(e,t){t===0&&(e.mode&1?(t=Kn,Kn<<=1,!(Kn&130023424)&&(Kn=4194304)):t=1);var r=Je();e=mr(e,t),e!==null&&($n(e,t,r),ct(e,r))}function I0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Af(e,r)}function O0(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(E(314))}i!==null&&i.delete(t),Af(e,r)}var Tf;Tf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||at.current)st=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return st=!1,x0(e,t,r);st=!!(e.flags&131072)}else st=!1,ce&&t.flags&1048576&&Np(t,Bs,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;bs(e,t),e=t.pendingProps;var o=to(t,Qe.current);Qi(t,r),o=tu(null,t,i,e,o,r);var n=ru();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(i)?(n=!0,Ms(t)):n=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Qc(t),o.updater=pa,t.stateNode=o,o._reactInternals=t,Yl(t,i,e,r),t=Gl(null,t,i,!0,n,r)):(t.tag=0,ce&&n&&Uc(t),Ze(null,t,o,r),t=t.child),t;case 16:i=t.elementType;e:{switch(bs(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=R0(i),e=Vt(i,e),o){case 0:t=Ql(null,t,i,e,r);break e;case 1:t=$d(null,t,i,e,r);break e;case 11:t=Sd(null,t,i,e,r);break e;case 14:t=Cd(null,t,i,Vt(i.type,e),r);break e}throw Error(E(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Vt(i,o),Ql(e,t,i,o,r);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Vt(i,o),$d(e,t,i,o,r);case 3:e:{if(pf(t),e===null)throw Error(E(387));i=t.pendingProps,n=t.memoizedState,o=n.element,Dp(e,t),Us(t,i,null,r);var s=t.memoizedState;if(i=s.element,n.isDehydrated)if(n={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){o=no(Error(E(423)),t),t=zd(e,t,i,r,o);break e}else if(i!==o){o=no(Error(E(424)),t),t=zd(e,t,i,r,o);break e}else for(bt=Dr(t.stateNode.containerInfo.firstChild),_t=t,ce=!0,Ut=null,r=Bp(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ro(),i===o){t=gr(e,t,r);break e}Ze(e,t,i,r)}t=t.child}return t;case 5:return Vp(t),e===null&&Wl(t),i=t.type,o=t.pendingProps,n=e!==null?e.memoizedProps:null,s=o.children,Bl(i,o)?s=null:n!==null&&Bl(i,n)&&(t.flags|=32),hf(e,t),Ze(e,t,s,r),t.child;case 6:return e===null&&Wl(t),null;case 13:return ff(e,t,r);case 4:return Gc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=io(t,null,i,r):Ze(e,t,i,r),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Vt(i,o),Sd(e,t,i,o,r);case 7:return Ze(e,t,t.pendingProps,r),t.child;case 8:return Ze(e,t,t.pendingProps.children,r),t.child;case 12:return Ze(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,n=t.memoizedProps,s=o.value,se(Vs,i._currentValue),i._currentValue=s,n!==null)if(qt(n.value,s)){if(n.children===o.children&&!at.current){t=gr(e,t,r);break e}}else for(n=t.child,n!==null&&(n.return=t);n!==null;){var c=n.dependencies;if(c!==null){s=n.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(n.tag===1){l=hr(-1,r&-r),l.tag=2;var u=n.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?l.next=l:(l.next=m.next,m.next=l),u.pending=l}}n.lanes|=r,l=n.alternate,l!==null&&(l.lanes|=r),Kl(n.return,r,t),c.lanes|=r;break}l=l.next}}else if(n.tag===10)s=n.type===t.type?null:n.child;else if(n.tag===18){if(s=n.return,s===null)throw Error(E(341));s.lanes|=r,c=s.alternate,c!==null&&(c.lanes|=r),Kl(s,r,t),s=n.sibling}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===t){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}Ze(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,Qi(t,r),o=Pt(o),i=i(o),t.flags|=1,Ze(e,t,i,r),t.child;case 14:return i=t.type,o=Vt(i,t.pendingProps),o=Vt(i.type,o),Cd(e,t,i,o,r);case 15:return uf(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:Vt(i,o),bs(e,t),t.tag=1,lt(i)?(e=!0,Ms(t)):e=!1,Qi(t,r),Mp(t,i,o),Yl(t,i,o,r),Gl(null,t,i,!0,e,r);case 19:return mf(e,t,r);case 22:return df(e,t,r)}throw Error(E(156,t.tag))};function Pf(e,t){return rp(e,t)}function D0(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,r,i){return new D0(e,t,r,i)}function hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function R0(e){if(typeof e=="function")return hu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pc)return 11;if(e===Nc)return 14}return 2}function Br(e,t){var r=e.alternate;return r===null?(r=At(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function xs(e,t,r,i,o,n){var s=2;if(i=e,typeof e=="function")hu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ii:return pi(r.children,o,n,t);case Tc:s=8,o|=8;break;case yl:return e=At(12,r,t,o|2),e.elementType=yl,e.lanes=n,e;case bl:return e=At(13,r,t,o),e.elementType=bl,e.lanes=n,e;case wl:return e=At(19,r,t,o),e.elementType=wl,e.lanes=n,e;case Fh:return va(r,o,n,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rh:s=10;break e;case Mh:s=9;break e;case Pc:s=11;break e;case Nc:s=14;break e;case Cr:s=16,i=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=At(s,r,t,o),t.elementType=e,t.type=i,t.lanes=n,t}function pi(e,t,r,i){return e=At(7,e,i,t),e.lanes=r,e}function va(e,t,r,i){return e=At(22,e,i,t),e.elementType=Fh,e.lanes=r,e.stateNode={isHidden:!1},e}function el(e,t,r){return e=At(6,e,null,t),e.lanes=r,e}function tl(e,t,r){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M0(e,t,r,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oa(0),this.expirationTimes=Oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oa(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function pu(e,t,r,i,o,n,s,c,l){return e=new M0(e,t,r,c,l),t===1?(t=1,n===!0&&(t|=8)):t=0,n=At(3,null,null,t),e.current=n,n.stateNode=e,n.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(n),e}function F0(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Nf(e){if(!e)return Hr;e=e._reactInternals;e:{if(Si(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(lt(r))return Tp(e,r,t)}return t}function Lf(e,t,r,i,o,n,s,c,l){return e=pu(r,i,!0,e,o,n,s,c,l),e.context=Nf(null),r=e.current,i=Je(),o=Fr(r),n=hr(i,o),n.callback=t??null,Rr(r,n,o),e.current.lanes=o,$n(e,o,i),ct(e,i),e}function ya(e,t,r,i){var o=t.current,n=Je(),s=Fr(o);return r=Nf(r),t.context===null?t.context=r:t.pendingContext=r,t=hr(n,s),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Rr(o,t,s),e!==null&&(Kt(e,o,s,n),gs(e,o,s)),s}function Gs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function fu(e,t){Rd(e,t),(e=e.alternate)&&Rd(e,t)}function B0(){return null}var If=typeof reportError=="function"?reportError:function(e){console.error(e)};function mu(e){this._internalRoot=e}ba.prototype.render=mu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));ya(e,t,null,null)};ba.prototype.unmount=mu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;yi(function(){ya(null,e,null,null)}),t[fr]=null}};function ba(e){this._internalRoot=e}ba.prototype.unstable_scheduleHydration=function(e){if(e){var t=cp();e={blockedOn:null,target:e,priority:t};for(var r=0;r<zr.length&&t!==0&&t<zr[r].priority;r++);zr.splice(r,0,e),r===0&&dp(e)}};function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Md(){}function V0(e,t,r,i,o){if(o){if(typeof i=="function"){var n=i;i=function(){var u=Gs(s);n.call(u)}}var s=Lf(t,i,e,0,null,!1,!1,"",Md);return e._reactRootContainer=s,e[fr]=s.current,hn(e.nodeType===8?e.parentNode:e),yi(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var c=i;i=function(){var u=Gs(l);c.call(u)}}var l=pu(e,0,!1,null,null,!1,!1,"",Md);return e._reactRootContainer=l,e[fr]=l.current,hn(e.nodeType===8?e.parentNode:e),yi(function(){ya(t,l,r,i)}),l}function _a(e,t,r,i,o){var n=r._reactRootContainer;if(n){var s=n;if(typeof o=="function"){var c=o;o=function(){var l=Gs(s);c.call(l)}}ya(t,s,e,o)}else s=V0(r,t,e,o,i);return Gs(s)}ap=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Mo(t.pendingLanes);r!==0&&(Oc(t,r|1),ct(t,ke()),!(Q&6)&&(so=ke()+500,Gr()))}break;case 13:yi(function(){var i=mr(e,1);if(i!==null){var o=Je();Kt(i,e,1,o)}}),fu(e,1)}};Dc=function(e){if(e.tag===13){var t=mr(e,134217728);if(t!==null){var r=Je();Kt(t,e,134217728,r)}fu(e,134217728)}};lp=function(e){if(e.tag===13){var t=Fr(e),r=mr(e,t);if(r!==null){var i=Je();Kt(r,e,t,i)}fu(e,t)}};cp=function(){return re};up=function(e,t){var r=re;try{return re=e,t()}finally{re=r}};Tl=function(e,t,r){switch(t){case"input":if(kl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var o=da(i);if(!o)throw Error(E(90));Vh(i),kl(i,o)}}}break;case"textarea":Uh(e,r);break;case"select":t=r.value,t!=null&&Ki(e,!!r.multiple,t,!1)}};Qh=cu;Gh=yi;var j0={usingClientEntryPoint:!1,Events:[En,Mi,da,Yh,Xh,cu]},Eo={findFiberByHostInstance:ai,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},U0={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ep(e),e===null?null:e.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||B0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{aa=is.inject(U0),or=is}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;St.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gu(t))throw Error(E(200));return F0(e,t,null,r)};St.createRoot=function(e,t){if(!gu(e))throw Error(E(299));var r=!1,i="",o=If;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=pu(e,1,!1,null,null,r,!1,i,o),e[fr]=t.current,hn(e.nodeType===8?e.parentNode:e),new mu(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=ep(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return yi(e)};St.hydrate=function(e,t,r){if(!wa(t))throw Error(E(200));return _a(null,e,t,!0,r)};St.hydrateRoot=function(e,t,r){if(!gu(e))throw Error(E(405));var i=r!=null&&r.hydratedSources||null,o=!1,n="",s=If;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Lf(t,null,e,1,r??null,o,!1,n,s),e[fr]=t.current,hn(e),i)for(e=0;e<i.length;e++)r=i[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new ba(t)};St.render=function(e,t,r){if(!wa(t))throw Error(E(200));return _a(null,e,t,!1,r)};St.unmountComponentAtNode=function(e){if(!wa(e))throw Error(E(40));return e._reactRootContainer?(yi(function(){_a(null,null,e,!1,function(){e._reactRootContainer=null,e[fr]=null})}),!0):!1};St.unstable_batchedUpdates=cu;St.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!wa(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return _a(e,t,r,!1,i)};St.version="18.2.0-next-9e3b772b8-20220608";function Of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of)}catch(e){console.error(e)}}Of(),Nh.exports=St;var H0=Nh.exports,Fd=H0;gl.createRoot=Fd.createRoot,gl.hydrateRoot=Fd.hydrateRoot;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ks=globalThis,vu=ks.ShadowRoot&&(ks.ShadyCSS===void 0||ks.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yu=Symbol(),Bd=new WeakMap;let Df=class{constructor(t,r,i){if(this._$cssResult$=!0,i!==yu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(vu&&t===void 0){const i=r!==void 0&&r.length===1;i&&(t=Bd.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Bd.set(r,t))}return t}toString(){return this.cssText}};const W0=e=>new Df(typeof e=="string"?e:e+"",void 0,yu),B=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((i,o,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new Df(r,e,yu)},K0=(e,t)=>{if(vu)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const i=document.createElement("style"),o=ks.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=r.cssText,e.appendChild(i)}},Vd=vu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const i of t.cssRules)r+=i.cssText;return W0(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:q0,defineProperty:Y0,getOwnPropertyDescriptor:X0,getOwnPropertyNames:Q0,getOwnPropertySymbols:G0,getPrototypeOf:Z0}=Object,Vr=globalThis,jd=Vr.trustedTypes,J0=jd?jd.emptyScript:"",rl=Vr.reactiveElementPolyfillSupport,Xo=(e,t)=>e,ao={toAttribute(e,t){switch(t){case Boolean:e=e?J0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},bu=(e,t)=>!q0(e,t),Ud={attribute:!0,type:String,converter:ao,reflect:!1,hasChanged:bu};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Vr.litPropertyMetadata??(Vr.litPropertyMetadata=new WeakMap);class Ni extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ud){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(t,i,r);o!==void 0&&Y0(this.prototype,t,o)}}static getPropertyDescriptor(t,r,i){const{get:o,set:n}=X0(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const c=o==null?void 0:o.call(this);n.call(this,s),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ud}static _$Ei(){if(this.hasOwnProperty(Xo("elementProperties")))return;const t=Z0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xo("properties"))){const r=this.properties,i=[...Q0(r),...G0(r)];for(const o of i)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[i,o]of r)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const o=this._$Eu(r,i);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)r.unshift(Vd(o))}else t!==void 0&&r.push(Vd(t));return r}static _$Eu(t,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return K0(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(t,r,i){this._$AK(t,i)}_$EC(t,r){var n;const i=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,i);if(o!==void 0&&i.reflect===!0){const s=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:ao).toAttribute(r,i.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var n;const i=this.constructor,o=i._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:ao;this._$Em=o,this[o]=c.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??bu)(this[t],r))return;this.P(t,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,i){this._$AL.has(t)||this._$AL.set(t,r),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,s]of o)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdate)==null?void 0:n.call(o)}),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(r=>this._$EC(r,this[r]))),this._$EU()}updated(t){}firstUpdated(t){}}Ni.elementStyles=[],Ni.shadowRootOptions={mode:"open"},Ni[Xo("elementProperties")]=new Map,Ni[Xo("finalized")]=new Map,rl==null||rl({ReactiveElement:Ni}),(Vr.reactiveElementVersions??(Vr.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo=globalThis,Zs=Qo.trustedTypes,Hd=Zs?Zs.createPolicy("lit-html",{createHTML:e=>e}):void 0,Rf="$lit$",Ar=`lit$${(Math.random()+"").slice(9)}$`,Mf="?"+Ar,ev=`<${Mf}>`,bi=document,_n=()=>bi.createComment(""),xn=e=>e===null||typeof e!="object"&&typeof e!="function",Ff=Array.isArray,tv=e=>Ff(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",il=`[ 	
\f\r]`,Ao=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wd=/-->/g,Kd=/>/g,ii=RegExp(`>|${il}(?:([^\\s"'>=/]+)(${il}*=${il}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qd=/'/g,Yd=/"/g,Bf=/^(?:script|style|textarea|title)$/i,rv=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),C=rv(1),wt=Symbol.for("lit-noChange"),ue=Symbol.for("lit-nothing"),Xd=new WeakMap,ui=bi.createTreeWalker(bi,129);function Vf(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hd!==void 0?Hd.createHTML(t):t}const iv=(e,t)=>{const r=e.length-1,i=[];let o,n=t===2?"<svg>":"",s=Ao;for(let c=0;c<r;c++){const l=e[c];let u,m,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,m=s.exec(l),m!==null);)p=s.lastIndex,s===Ao?m[1]==="!--"?s=Wd:m[1]!==void 0?s=Kd:m[2]!==void 0?(Bf.test(m[2])&&(o=RegExp("</"+m[2],"g")),s=ii):m[3]!==void 0&&(s=ii):s===ii?m[0]===">"?(s=o??Ao,h=-1):m[1]===void 0?h=-2:(h=s.lastIndex-m[2].length,u=m[1],s=m[3]===void 0?ii:m[3]==='"'?Yd:qd):s===Yd||s===qd?s=ii:s===Wd||s===Kd?s=Ao:(s=ii,o=void 0);const g=s===ii&&e[c+1].startsWith("/>")?" ":"";n+=s===Ao?l+ev:h>=0?(i.push(u),l.slice(0,h)+Rf+l.slice(h)+Ar+g):l+Ar+(h===-2?c:g)}return[Vf(e,n+(e[r]||"<?>")+(t===2?"</svg>":"")),i]};class kn{constructor({strings:t,_$litType$:r},i){let o;this.parts=[];let n=0,s=0;const c=t.length-1,l=this.parts,[u,m]=iv(t,r);if(this.el=kn.createElement(u,i),ui.currentNode=this.el.content,r===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=ui.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(Rf)){const p=m[s++],g=o.getAttribute(h).split(Ar),y=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:y[2],strings:g,ctor:y[1]==="."?nv:y[1]==="?"?sv:y[1]==="@"?av:xa}),o.removeAttribute(h)}else h.startsWith(Ar)&&(l.push({type:6,index:n}),o.removeAttribute(h));if(Bf.test(o.tagName)){const h=o.textContent.split(Ar),p=h.length-1;if(p>0){o.textContent=Zs?Zs.emptyScript:"";for(let g=0;g<p;g++)o.append(h[g],_n()),ui.nextNode(),l.push({type:2,index:++n});o.append(h[p],_n())}}}else if(o.nodeType===8)if(o.data===Mf)l.push({type:2,index:n});else{let h=-1;for(;(h=o.data.indexOf(Ar,h+1))!==-1;)l.push({type:7,index:n}),h+=Ar.length-1}n++}}static createElement(t,r){const i=bi.createElement("template");return i.innerHTML=t,i}}function lo(e,t,r=e,i){var s,c;if(t===wt)return t;let o=i!==void 0?(s=r._$Co)==null?void 0:s[i]:r._$Cl;const n=xn(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==n&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),n===void 0?o=void 0:(o=new n(e),o._$AT(e,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=o:r._$Cl=o),o!==void 0&&(t=lo(e,o._$AS(e,t.values),o,i)),t}class ov{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:i}=this._$AD,o=((t==null?void 0:t.creationScope)??bi).importNode(r,!0);ui.currentNode=o;let n=ui.nextNode(),s=0,c=0,l=i[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new Tn(n,n.nextSibling,this,t):l.type===1?u=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(u=new lv(n,this,t)),this._$AV.push(u),l=i[++c]}s!==(l==null?void 0:l.index)&&(n=ui.nextNode(),s++)}return ui.currentNode=bi,o}p(t){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,r),r+=i.strings.length-2):i._$AI(t[r])),r++}}class Tn{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,i,o){this.type=2,this._$AH=ue,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=lo(this,t,r),xn(t)?t===ue||t==null||t===""?(this._$AH!==ue&&this._$AR(),this._$AH=ue):t!==this._$AH&&t!==wt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):tv(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==ue&&xn(this._$AH)?this._$AA.nextSibling.data=t:this.T(bi.createTextNode(t)),this._$AH=t}$(t){var n;const{values:r,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=kn.createElement(Vf(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===o)this._$AH.p(r);else{const s=new ov(o,this),c=s.u(this.options);s.p(r),this.T(c),this._$AH=s}}_$AC(t){let r=Xd.get(t.strings);return r===void 0&&Xd.set(t.strings,r=new kn(t)),r}k(t){Ff(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,o=0;for(const n of t)o===r.length?r.push(i=new Tn(this.S(_n()),this.S(_n()),this,this.options)):i=r[o],i._$AI(n),o++;o<r.length&&(this._$AR(i&&i._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class xa{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,i,o,n){this.type=1,this._$AH=ue,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ue}_$AI(t,r=this,i,o){const n=this.strings;let s=!1;if(n===void 0)t=lo(this,t,r,0),s=!xn(t)||t!==this._$AH&&t!==wt,s&&(this._$AH=t);else{const c=t;let l,u;for(t=n[0],l=0;l<n.length-1;l++)u=lo(this,c[i+l],r,l),u===wt&&(u=this._$AH[l]),s||(s=!xn(u)||u!==this._$AH[l]),u===ue?t=ue:t!==ue&&(t+=(u??"")+n[l+1]),this._$AH[l]=u}s&&!o&&this.j(t)}j(t){t===ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class nv extends xa{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ue?void 0:t}}let sv=class extends xa{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ue)}};class av extends xa{constructor(t,r,i,o,n){super(t,r,i,o,n),this.type=5}_$AI(t,r=this){if((t=lo(this,t,r,0)??ue)===wt)return;const i=this._$AH,o=t===ue&&i!==ue||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==ue&&(i===ue||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class lv{constructor(t,r,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){lo(this,t)}}const ol=Qo.litHtmlPolyfillSupport;ol==null||ol(kn,Tn),(Qo.litHtmlVersions??(Qo.litHtmlVersions=[])).push("3.1.2");const cv=(e,t,r)=>{const i=(r==null?void 0:r.renderBefore)??t;let o=i._$litPart$;if(o===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=o=new Tn(t.insertBefore(_n(),n),n,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Go=class extends Ni{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=cv(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return wt}};var wh;Go._$litElement$=!0,Go.finalized=!0,(wh=globalThis.litElementHydrateSupport)==null||wh.call(globalThis,{LitElement:Go});const nl=globalThis.litElementPolyfillSupport;nl==null||nl({LitElement:Go});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var uv=B`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,dv=B`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,hv=B`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Ci=(e="value")=>(t,r)=>{const i=t.constructor,o=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(n,s,c){var l;const u=i.getPropertyOptions(e),m=typeof u.attribute=="string"?u.attribute:e;if(n===m){const h=u.converter||ao,g=(typeof h=="function"?h:(l=h==null?void 0:h.fromAttribute)!=null?l:ao.fromAttribute)(c,u.type);this[e]!==g&&(this[r]=g)}o.call(this,n,s,c)}},$i=B`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,jf=Object.defineProperty,pv=Object.defineProperties,fv=Object.getOwnPropertyDescriptor,mv=Object.getOwnPropertyDescriptors,Qd=Object.getOwnPropertySymbols,gv=Object.prototype.hasOwnProperty,vv=Object.prototype.propertyIsEnumerable,sl=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Gd=(e,t,r)=>t in e?jf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,br=(e,t)=>{for(var r in t||(t={}))gv.call(t,r)&&Gd(e,r,t[r]);if(Qd)for(var r of Qd(t))vv.call(t,r)&&Gd(e,r,t[r]);return e},Pn=(e,t)=>pv(e,mv(t)),a=(e,t,r,i)=>{for(var o=i>1?void 0:i?fv(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&jf(t,r,o),o},yv=function(e,t){this[0]=e,this[1]=t},bv=e=>{var t=e[sl("asyncIterator")],r=!1,i,o={};return t==null?(t=e[sl("iterator")](),i=n=>o[n]=s=>t[n](s)):(t=t.call(e),i=n=>o[n]=s=>{if(r){if(r=!1,n==="throw")throw s;return s}return r=!0,{done:!1,value:new yv(new Promise(c=>{var l=t[n](s);if(!(l instanceof Object))throw TypeError("Object expected");c(l)}),1)}}),o[sl("iterator")]=()=>o,i("next"),"throw"in t?i("throw"):o.throw=n=>{throw n},"return"in t&&i("return"),o},To=new WeakMap,Po=new WeakMap,No=new WeakMap,al=new WeakSet,os=new WeakMap,wr=class{constructor(e,t){this.handleFormData=r=>{const i=this.options.disabled(this.host),o=this.options.name(this.host),n=this.options.value(this.host),s=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!s&&typeof o=="string"&&o.length>0&&typeof n<"u"&&(Array.isArray(n)?n.forEach(c=>{r.formData.append(o,c.toString())}):r.formData.append(o,n.toString()))},this.handleFormSubmit=r=>{var i;const o=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=To.get(this.form))==null||i.forEach(s=>{this.setUserInteracted(s,!0)})),this.form&&!this.form.noValidate&&!o&&!n(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),os.set(this.host,[])},this.handleInteraction=r=>{const i=os.get(this.host);i.includes(r.type)||i.push(r.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const i of r)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const i of r)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=br({form:r=>{const i=r.form;if(i){const n=r.getRootNode().querySelector(`#${i}`);if(n)return n}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var i;return(i=r.disabled)!=null?i:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,i)=>r.value=i,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),os.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),os.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,To.has(this.form)?To.get(this.form).add(this.host):To.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Po.has(this.form)||(Po.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),No.has(this.form)||(No.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=To.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Po.has(this.form)&&(this.form.reportValidity=Po.get(this.form),Po.delete(this.form)),No.has(this.form)&&(this.form.checkValidity=No.get(this.form),No.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?al.add(e):al.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{t.hasAttribute(i)&&r.setAttribute(i,t.getAttribute(i))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!al.has(t),i=!!t.required;t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},ka=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),wv=Object.freeze(Pn(br({},ka),{valid:!1,valueMissing:!0})),_v=Object.freeze(Pn(br({},ka),{valid:!1,customError:!0})),it=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const i=r.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function xv(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let r="";return[...t].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(r+=i.textContent)}),r}var cc="";function uc(e){cc=e}function kv(e=""){if(!cc){const t=[...document.getElementsByTagName("script")],r=t.find(i=>i.hasAttribute("data-shoelace"));if(r)uc(r.getAttribute("data-shoelace"));else{const i=t.find(n=>/shoelace(\.min)?\.js($|\?)/.test(n.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(n.src));let o="";i&&(o=i.getAttribute("src")),uc(o.split("/").slice(0,-1).join("/"))}}return cc.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Sv={name:"default",resolver:e=>kv(`assets/icons/${e}.svg`)},Cv=Sv,Zd={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},$v={name:"system",resolver:e=>e in Zd?`data:image/svg+xml,${encodeURIComponent(Zd[e])}`:""},zv=$v,Ev=[Cv,zv],dc=[];function Av(e){dc.push(e)}function Tv(e){dc=dc.filter(t=>t!==e)}function Jd(e){return Ev.find(t=>t.name===e)}var Pv=B`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function P(e,t){const r=br({waitUntilFirstUpdate:!1},t);return(i,o)=>{const{update:n}=i,s=Array.isArray(e)?e:[e];i.update=function(c){s.forEach(l=>{const u=l;if(c.has(u)){const m=c.get(u),h=this[u];m!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[o](m,h)}}),n.call(this,c)}}}var V=B`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nv={attribute:!0,type:String,converter:ao,reflect:!1,hasChanged:bu},Lv=(e=Nv,t,r)=>{const{kind:i,metadata:o}=r;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(r.name,e),i==="accessor"){const{name:s}=r;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(s,l,e)},init(c){return c!==void 0&&this.P(s,void 0,e),c}}}if(i==="setter"){const{name:s}=r;return function(c){const l=this[s];t.call(this,c),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+i)};function d(e){return(t,r)=>typeof r=="object"?Lv(e,t,r):((i,o,n)=>{const s=o.hasOwnProperty(n);return o.constructor.createProperty(n,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,n):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(e){return d({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function wu(e){return(t,r)=>{const i=typeof t=="function"?t:t[r];Object.assign(i,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hc=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(e,t){return(r,i,o)=>{const n=s=>{var c;return((c=s.renderRoot)==null?void 0:c.querySelector(e))??null};if(t){const{get:s,set:c}=typeof i=="object"?r:o??(()=>{const l=Symbol();return{get(){return this[l]},set(u){this[l]=u}}})();return hc(r,i,{get(){let l=s.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&c.call(this,l)),l}})}return hc(r,i,{get(){return n(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Iv(e){return(t,r)=>hc(t,r,{async get(){var i;return await this.updateComplete,((i=this.renderRoot)==null?void 0:i.querySelector(e))??null}})}var R=class extends Go{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,br({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const i=customElements.get(e);if(!i){customElements.define(e,class extends t{},r);return}let o=" (unknown version)",n=o;"version"in t&&t.version&&(o=" v"+t.version),"version"in i&&i.version&&(n=" v"+i.version),!(o&&n&&o===n)&&console.warn(`Attempted to register <${e}>${o}, but <${e}>${n} has already been registered.`)}};R.version="2.15.0";R.dependencies={};a([d()],R.prototype,"dir",2);a([d()],R.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ov=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,Uf=e=>e.strings===void 0,Dv={},Rv=(e,t=Dv)=>e._$AH=t;var Lo=Symbol(),ns=Symbol(),ll,cl=new Map,ne=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let i;if(t!=null&&t.spriteSheet){this.svg=C`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const o=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(o),this.svg}try{if(i=await fetch(e,{mode:"cors"}),!i.ok)return i.status===410?Lo:ns}catch{return ns}try{const o=document.createElement("div");o.innerHTML=await i.text();const n=o.firstElementChild;if(((r=n==null?void 0:n.tagName)==null?void 0:r.toLowerCase())!=="svg")return Lo;ll||(ll=new DOMParser);const c=ll.parseFromString(n.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Lo}catch{return Lo}}connectedCallback(){super.connectedCallback(),Av(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Tv(this)}getIconSource(){const e=Jd(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),i=r?Jd(this.library):void 0;if(!t){this.svg=null;return}let o=cl.get(t);if(o||(o=this.resolveIcon(t,i),cl.set(t,o)),!this.initialRender)return;const n=await o;if(n===ns&&cl.delete(t),t===this.getIconSource().url){if(Ov(n)){this.svg=n;return}switch(n){case ns:case Lo:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),(e=i==null?void 0:i.mutator)==null||e.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};ne.styles=[V,Pv];a([U()],ne.prototype,"svg",2);a([d({reflect:!0})],ne.prototype,"name",2);a([d()],ne.prototype,"src",2);a([d()],ne.prototype,"label",2);a([d({reflect:!0})],ne.prototype,"library",2);a([P("label")],ne.prototype,"handleLabelChange",1);a([P(["name","src","library"])],ne.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Nn=e=>(...t)=>({_$litDirective$:e,values:t});let Ln=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,i){this._$Ct=t,this._$AM=r,this._$Ci=i}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=Nn(class extends Ln{constructor(e){var t;if(super(e),e.type!==rr.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var i,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(t)}const r=e.element.classList;for(const n of this.st)n in t||(r.remove(n),this.st.delete(n));for(const n in t){const s=!!t[n];s===this.st.has(n)||(o=this.nt)!=null&&o.has(n)||(s?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return wt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=e=>e??ue;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=Nn(class extends Ln{constructor(e){if(super(e),e.type!==rr.PROPERTY&&e.type!==rr.ATTRIBUTE&&e.type!==rr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Uf(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===wt||t===ue)return t;const r=e.element,i=e.name;if(e.type===rr.PROPERTY){if(t===r[i])return wt}else if(e.type===rr.BOOLEAN_ATTRIBUTE){if(!!t===r.hasAttribute(i))return wt}else if(e.type===rr.ATTRIBUTE&&r.getAttribute(i)===t+"")return wt;return Rv(e),t}});var ze=class extends R{constructor(){super(...arguments),this.formControlController=new wr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new it(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return C`
      <div
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${j({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${D(this.value)}
            .indeterminate=${wi(this.indeterminate)}
            .checked=${wi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?C`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?C`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ze.styles=[V,$i,hv];ze.dependencies={"sl-icon":ne};a([N('input[type="checkbox"]')],ze.prototype,"input",2);a([U()],ze.prototype,"hasFocus",2);a([d()],ze.prototype,"title",2);a([d()],ze.prototype,"name",2);a([d()],ze.prototype,"value",2);a([d({reflect:!0})],ze.prototype,"size",2);a([d({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],ze.prototype,"checked",2);a([d({type:Boolean,reflect:!0})],ze.prototype,"indeterminate",2);a([Ci("checked")],ze.prototype,"defaultChecked",2);a([d({reflect:!0})],ze.prototype,"form",2);a([d({type:Boolean,reflect:!0})],ze.prototype,"required",2);a([d({attribute:"help-text"})],ze.prototype,"helpText",2);a([P("disabled",{waitUntilFirstUpdate:!0})],ze.prototype,"handleDisabledChange",1);a([P(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ze.prototype,"handleStateChange",1);var Mv=B`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const pc=new Set,Fv=new MutationObserver(qf),Wi=new Map;let Hf=document.documentElement.dir||"ltr",Wf=document.documentElement.lang||navigator.language,si;Fv.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Kf(...e){e.map(t=>{const r=t.$code.toLowerCase();Wi.has(r)?Wi.set(r,Object.assign(Object.assign({},Wi.get(r)),t)):Wi.set(r,t),si||(si=t)}),qf()}function qf(){Hf=document.documentElement.dir||"ltr",Wf=document.documentElement.lang||navigator.language,[...pc.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Bv=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){pc.add(this.host)}hostDisconnected(){pc.delete(this.host)}dir(){return`${this.host.dir||Hf}`.toLowerCase()}lang(){return`${this.host.lang||Wf}`.toLowerCase()}getTranslationData(t){var r,i;const o=new Intl.Locale(t.replace(/_/g,"-")),n=o==null?void 0:o.language.toLowerCase(),s=(i=(r=o==null?void 0:o.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&i!==void 0?i:"",c=Wi.get(`${n}-${s}`),l=Wi.get(n);return{locale:o,language:n,region:s,primary:c,secondary:l}}exists(t,r){var i;const{primary:o,secondary:n}=this.getTranslationData((i=r.lang)!==null&&i!==void 0?i:this.lang());return r=Object.assign({includeFallback:!1},r),!!(o&&o[t]||n&&n[t]||r.includeFallback&&si&&si[t])}term(t,...r){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let n;if(i&&i[t])n=i[t];else if(o&&o[t])n=o[t];else if(si&&si[t])n=si[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...r):n}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,r)}};var Yf={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Kf(Yf);var Vv=Yf,Z=class extends Bv{};Kf(Vv);var fo=class extends R{constructor(){super(...arguments),this.localize=new Z(this)}render(){return C`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};fo.styles=[V,Mv];var Xf=new Map,jv=new WeakMap;function Uv(e){return e??{keyframes:[],options:{duration:0}}}function eh(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function te(e,t){Xf.set(e,Uv(t))}function de(e,t,r){const i=jv.get(e);if(i!=null&&i[t])return eh(i[t],r.dir);const o=Xf.get(t);return o?eh(o,r.dir):{keyframes:[],options:{duration:0}}}function be(e,t,r){return new Promise(i=>{if((r==null?void 0:r.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=e.animate(t,Pn(br({},r),{duration:fc()?0:r.duration}));o.addEventListener("cancel",i,{once:!0}),o.addEventListener("finish",i,{once:!0})})}function th(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function fc(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function $e(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{t.cancel(),requestAnimationFrame(r)})))}function Js(e,t){return e.map(r=>Pn(br({},r),{height:r.height==="auto"?`${t}px`:r.height}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function rh(e,t,r){return e?t(e):r==null?void 0:r(e)}var we=class mc extends R{constructor(){super(...arguments),this.localize=new Z(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&t.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await $e(this.childrenContainer);const{keyframes:t,options:r}=de(this,"tree-item.collapse",{dir:this.localize.dir()});await be(this.childrenContainer,Js(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const t=this.parentElement;return!!t&&mc.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await $e(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:r}=de(this,"tree-item.expand",{dir:this.localize.dir()});await be(this.childrenContainer,Js(t,this.childrenContainer.scrollHeight),r),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(r=>mc.isTreeItem(r)&&(t||!r.disabled)):[]}render(){const t=this.localize.dir()==="rtl",r=!this.loading&&(!this.isLeaf||this.lazy);return C`
      <div
        part="base"
        class="${j({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":r,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${j({"tree-item__expand-button":!0,"tree-item__expand-button--visible":r})}
            aria-hidden="true"
          >
            ${rh(this.loading,()=>C` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${rh(this.selectable,()=>C`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${wi(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};we.styles=[V,dv];we.dependencies={"sl-checkbox":ze,"sl-icon":ne,"sl-spinner":fo};a([U()],we.prototype,"indeterminate",2);a([U()],we.prototype,"isLeaf",2);a([U()],we.prototype,"loading",2);a([U()],we.prototype,"selectable",2);a([d({type:Boolean,reflect:!0})],we.prototype,"expanded",2);a([d({type:Boolean,reflect:!0})],we.prototype,"selected",2);a([d({type:Boolean,reflect:!0})],we.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],we.prototype,"lazy",2);a([N("slot:not([name])")],we.prototype,"defaultSlot",2);a([N("slot[name=children]")],we.prototype,"childrenSlot",2);a([N(".tree-item__item")],we.prototype,"itemElement",2);a([N(".tree-item__children")],we.prototype,"childrenContainer",2);a([N(".tree-item__expand-button slot")],we.prototype,"expandButtonSlot",2);a([P("loading",{waitUntilFirstUpdate:!0})],we.prototype,"handleLoadingChange",1);a([P("disabled")],we.prototype,"handleDisabledChange",1);a([P("selected")],we.prototype,"handleSelectedChange",1);a([P("expanded",{waitUntilFirstUpdate:!0})],we.prototype,"handleExpandedChange",1);a([P("expanded",{waitUntilFirstUpdate:!0})],we.prototype,"handleExpandAnimation",1);a([P("lazy",{waitUntilFirstUpdate:!0})],we.prototype,"handleLazyChange",1);var Zi=we;te("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});te("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function Se(e,t,r){const i=o=>Object.is(o,-0)?0:o;return e<t?i(t):e>r?i(r):i(e)}function ih(e,t=!1){function r(n){const s=n.getChildrenItems({includeDisabled:!1});if(s.length){const c=s.every(u=>u.selected),l=s.every(u=>!u.selected&&!u.indeterminate);n.selected=c,n.indeterminate=!c&&!l}}function i(n){const s=n.parentElement;Zi.isTreeItem(s)&&(r(s),i(s))}function o(n){for(const s of n.getChildrenItems())s.selected=t?n.selected||s.selected:!s.disabled&&n.selected,o(s);t&&r(n)}o(e),i(e)}var Zr=class extends R{constructor(){super(),this.selection="single",this.localize=new Z(this),this.clickTarget=null,this.initTreeItem=e=>{e.selectable=this.selection==="multiple",["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(t=>{const r=e.querySelector(`[slot="${t}-icon"]`),i=this.getExpandButtonIcon(t);i&&(r===null?e.append(i):r.hasAttribute("data-default")&&r.replaceWith(i))})},this.handleTreeChanged=e=>{for(const t of e){const r=[...t.addedNodes].filter(Zi.isTreeItem),i=[...t.removedNodes].filter(Zi.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{const t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{const t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Zi.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(e){const r=(e==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(r){const i=r.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${e}-icon`,i}return null}selectItem(e){const t=[...this.selectedItems];if(this.selection==="multiple")e.selected=!e.selected,e.lazy&&(e.expanded=!0),ih(e);else if(this.selection==="single"||e.isLeaf){const i=this.getAllTreeItems();for(const o of i)o.selected=o===e}else this.selection==="leaf"&&(e.expanded=!e.expanded);const r=this.selectedItems;(t.length!==r.length||r.some(i=>!t.includes(i)))&&Promise.all(r.map(i=>i.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(e){e==null||e.focus()}handleKeyDown(e){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(e.key)||e.composedPath().some(o=>{var n;return["input","textarea"].includes((n=o==null?void 0:o.tagName)==null?void 0:n.toLowerCase())}))return;const t=this.getFocusableItems(),r=this.localize.dir()==="ltr",i=this.localize.dir()==="rtl";if(t.length>0){e.preventDefault();const o=t.findIndex(l=>l.matches(":focus")),n=t[o],s=l=>{const u=t[Se(l,0,t.length-1)];this.focusItem(u)},c=l=>{n.expanded=l};e.key==="ArrowDown"?s(o+1):e.key==="ArrowUp"?s(o-1):r&&e.key==="ArrowRight"||i&&e.key==="ArrowLeft"?!n||n.disabled||n.expanded||n.isLeaf&&!n.lazy?s(o+1):c(!0):r&&e.key==="ArrowLeft"||i&&e.key==="ArrowRight"?!n||n.disabled||n.isLeaf||!n.expanded?s(o-1):c(!1):e.key==="Home"?s(0):e.key==="End"?s(t.length-1):(e.key==="Enter"||e.key===" ")&&(n.disabled||this.selectItem(n))}}handleClick(e){const t=e.target,r=t.closest("sl-tree-item"),i=e.composedPath().some(o=>{var n;return(n=o==null?void 0:o.classList)==null?void 0:n.contains("tree-item__expand-button")});!r||r.disabled||t!==this.clickTarget||(i?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const e=this.selection==="multiple",t=this.getAllTreeItems();this.setAttribute("aria-multiselectable",e?"true":"false");for(const r of t)r.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(r=>ih(r,!0)))}get selectedItems(){const e=this.getAllTreeItems(),t=r=>r.selected;return e.filter(t)}getFocusableItems(){const e=this.getAllTreeItems(),t=new Set;return e.filter(r=>{var i;if(r.disabled)return!1;const o=(i=r.parentElement)==null?void 0:i.closest("[role=treeitem]");return o&&(!o.expanded||o.loading||t.has(o))&&t.add(r),!t.has(r)})}render(){return C`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Zr.styles=[V,uv];a([N("slot:not([name])")],Zr.prototype,"defaultSlot",2);a([N("slot[name=expand-icon]")],Zr.prototype,"expandedIconSlot",2);a([N("slot[name=collapse-icon]")],Zr.prototype,"collapsedIconSlot",2);a([d()],Zr.prototype,"selection",2);a([P("selection")],Zr.prototype,"handleSelectionChange",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hv=new Set(["children","localName","ref","style","className"]),oh=new WeakMap,nh=(e,t,r,i,o)=>{const n=o==null?void 0:o[t];n===void 0?(e[t]=r,r==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):r!==i&&((s,c,l)=>{let u=oh.get(s);u===void 0&&oh.set(s,u=new Map);let m=u.get(c);l!==void 0?m===void 0?(u.set(c,m={handleEvent:l}),s.addEventListener(c,m)):m.handleEvent=l:m!==void 0&&(u.delete(c),s.removeEventListener(c,m))})(e,n,r)},F=({react:e,tagName:t,elementClass:r,events:i,displayName:o})=>{const n=new Set(Object.keys(i??{})),s=e.forwardRef((c,l)=>{const u=e.useRef(new Map),m=e.useRef(null),h={},p={};for(const[g,y]of Object.entries(c))Hv.has(g)?h[g==="className"?"class":g]=y:n.has(g)||g in r.prototype?p[g]=y:h[g]=y;return e.useLayoutEffect(()=>{if(m.current===null)return;const g=new Map;for(const y in p)nh(m.current,y,c[y],u.current.get(y),i),u.current.delete(y),g.set(y,c[y]);for(const[y,_]of u.current)nh(m.current,y,void 0,_,i);u.current=g}),e.useLayoutEffect(()=>{var g;(g=m.current)==null||g.removeAttribute("defer-hydration")},[]),h.suppressHydrationWarning=!0,e.createElement(t,{...h,ref:e.useCallback(g=>{m.current=g,typeof l=="function"?l(g):l!==null&&(l.current=g)},[l])})});return s.displayName=o??r.name,s};var Wv="sl-tree";Zr.define("sl-tree");F({tagName:Wv,elementClass:Zr,react:M,events:{onSlSelectionChange:"sl-selection-change"},displayName:"SlTree"});var Kv="sl-tree-item";Zi.define("sl-tree-item");F({tagName:Kv,elementClass:Zi,react:M,events:{onSlExpand:"sl-expand",onSlAfterExpand:"sl-after-expand",onSlCollapse:"sl-collapse",onSlAfterCollapse:"sl-after-collapse",onSlLazyChange:"sl-lazy-change",onSlLazyLoad:"sl-lazy-load"},displayName:"SlTreeItem"});var qv=B`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Sa=class extends R{render(){return C` <slot></slot> `}};Sa.styles=[V,qv];var Yv="sl-visually-hidden";Sa.define("sl-visually-hidden");F({tagName:Yv,elementClass:Sa,react:M,events:{},displayName:"SlVisuallyHidden"});var Xv=B`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function Zo(e,t){function r(o){const n=e.getBoundingClientRect(),s=e.ownerDocument.defaultView,c=n.left+s.scrollX,l=n.top+s.scrollY,u=o.pageX-c,m=o.pageY-l;t!=null&&t.onMove&&t.onMove(u,m)}function i(){document.removeEventListener("pointermove",r),document.removeEventListener("pointerup",i),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",r,{passive:!0}),document.addEventListener("pointerup",i),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&r(t.initialEvent)}var ut=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Zo(this,{onMove:(r,i)=>{let o=this.vertical?i:r;this.primary==="end"&&(o=this.size-o),this.snap&&this.snap.split(" ").forEach(s=>{let c;s.endsWith("%")?c=this.size*(parseFloat(s)/100):c=parseFloat(s),t&&!this.vertical&&(c=this.size-c),o>=c-this.snapThreshold&&o<=c+this.snapThreshold&&(o=c)}),this.position=Se(this.pixelsToPercentage(o),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const r=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=r),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=r),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Se(t,0,100)}}handleResize(e){const{width:t,height:r}=e[0].contentRect;this.size=this.vertical?r:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,o="auto";return this.primary==="end"?r&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${o}`:this.style[e]=`${o} var(--divider-width) ${i}`:r&&!this.vertical?this.style[e]=`${o} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${o}`,this.style[t]="",C`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${D(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ut.styles=[V,Xv];a([N(".divider")],ut.prototype,"divider",2);a([d({type:Number,reflect:!0})],ut.prototype,"position",2);a([d({attribute:"position-in-pixels",type:Number})],ut.prototype,"positionInPixels",2);a([d({type:Boolean,reflect:!0})],ut.prototype,"vertical",2);a([d({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);a([d()],ut.prototype,"primary",2);a([d()],ut.prototype,"snap",2);a([d({type:Number,attribute:"snap-threshold"})],ut.prototype,"snapThreshold",2);a([P("position")],ut.prototype,"handlePositionChange",1);a([P("positionInPixels")],ut.prototype,"handlePositionInPixelsChange",1);a([P("vertical")],ut.prototype,"handleVerticalChange",1);var Qv="sl-split-panel";ut.define("sl-split-panel");F({tagName:Qv,elementClass:ut,react:M,events:{onSlReposition:"sl-reposition"},displayName:"SlSplitPanel"});var Gv=B`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Zv=B`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qf=Symbol.for(""),Jv=e=>{if((e==null?void 0:e.r)===Qf)return e==null?void 0:e._$litStatic$},ea=(e,...t)=>({_$litStatic$:t.reduce((r,i,o)=>r+(n=>{if(n._$litStatic$!==void 0)return n._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${n}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+e[o+1],e[0]),r:Qf}),sh=new Map,ey=e=>(t,...r)=>{const i=r.length;let o,n;const s=[],c=[];let l,u=0,m=!1;for(;u<i;){for(l=t[u];u<i&&(n=r[u],(o=Jv(n))!==void 0);)l+=o+t[++u],m=!0;u!==i&&c.push(n),s.push(l),u++}if(u===i&&s.push(t[i]),m){const h=s.join("$$lit$$");(t=sh.get(h))===void 0&&(s.raw=s,sh.set(h,t=s)),r=c}return e(t,...r)},Jo=ey(C);var Ee=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?ea`a`:ea`button`;return Jo`
      <${t}
        part="base"
        class=${j({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${D(e?void 0:this.disabled)}
        type=${D(e?void 0:"button")}
        href=${D(e?this.href:void 0)}
        target=${D(e?this.target:void 0)}
        download=${D(e?this.download:void 0)}
        rel=${D(e&&this.target?"noreferrer noopener":void 0)}
        role=${D(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${D(this.name)}
          library=${D(this.library)}
          src=${D(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Ee.styles=[V,Zv];Ee.dependencies={"sl-icon":ne};a([N(".icon-button")],Ee.prototype,"button",2);a([U()],Ee.prototype,"hasFocus",2);a([d()],Ee.prototype,"name",2);a([d()],Ee.prototype,"library",2);a([d()],Ee.prototype,"src",2);a([d()],Ee.prototype,"href",2);a([d()],Ee.prototype,"target",2);a([d()],Ee.prototype,"download",2);a([d()],Ee.prototype,"label",2);a([d({type:Boolean,reflect:!0})],Ee.prototype,"disabled",2);var ty=0,Yt=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.attrId=++ty,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,C`
      <div
        part="base"
        class=${j({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Yt.styles=[V,Gv];Yt.dependencies={"sl-icon-button":Ee};a([N(".tab")],Yt.prototype,"tab",2);a([d({reflect:!0})],Yt.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],Yt.prototype,"active",2);a([d({type:Boolean})],Yt.prototype,"closable",2);a([d({type:Boolean,reflect:!0})],Yt.prototype,"disabled",2);a([P("active")],Yt.prototype,"handleActiveChange",1);a([P("disabled")],Yt.prototype,"handleDisabledChange",1);var ry="sl-tab";Yt.define("sl-tab");F({tagName:ry,elementClass:Yt,react:M,events:{onSlClose:"sl-close"},displayName:"SlTab"});var iy=B`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function oy(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var gc=new Set;function ny(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function sy(){const e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(e)||!e?0:e}function en(e){if(gc.add(e),!document.documentElement.classList.contains("sl-scroll-lock")){const t=ny()+sy();document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function tn(e){gc.delete(e),gc.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function vc(e,t,r="vertical",i="smooth"){const o=oy(e,t),n=o.top+t.scrollTop,s=o.left+t.scrollLeft,c=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,u=t.scrollTop,m=t.scrollTop+t.offsetHeight;(r==="horizontal"||r==="both")&&(s<c?t.scrollTo({left:s,behavior:i}):s+e.clientWidth>l&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:i})),(r==="vertical"||r==="both")&&(n<u?t.scrollTo({top:n,behavior:i}):n+e.clientHeight>m&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:i}))}var dt=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((r,i)=>{var o;r[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((o=this.getActiveTab())!=null?o:this.tabs[0],{emitEvents:!1}),i.unobserve(r[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(r=>e.includeDisabled?r.tagName.toLowerCase()==="sl-tab":r.tagName.toLowerCase()==="sl-tab"&&!r.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const r=e.target.closest("sl-tab");(r==null?void 0:r.closest("sl-tab-group"))===this&&r!==null&&this.setActiveTab(r,{scrollBehavior:"smooth"})}handleKeyDown(e){const r=e.target.closest("sl-tab");if((r==null?void 0:r.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&r!==null&&(this.setActiveTab(r,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const o=this.tabs.find(s=>s.matches(":focus")),n=this.localize.dir()==="rtl";if((o==null?void 0:o.tagName.toLowerCase())==="sl-tab"){let s=this.tabs.indexOf(o);e.key==="Home"?s=0:e.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&e.key===(n?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&vc(this.tabs[s],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=br({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach(i=>i.active=i===this.activeTab),this.panels.forEach(i=>{var o;return i.active=i.name===((o=this.activeTab)==null?void 0:o.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&vc(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(r=>r.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,i=this.localize.dir()==="rtl",o=this.getAllTabs(),s=o.slice(0,o.indexOf(e)).reduce((c,l)=>({left:c.left+l.clientWidth,top:c.top+l.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=i?`${-1*s.left}px`:`${s.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${s.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(r=>r.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        class=${j({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?C`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};dt.styles=[V,iy];dt.dependencies={"sl-icon-button":Ee};a([N(".tab-group")],dt.prototype,"tabGroup",2);a([N(".tab-group__body")],dt.prototype,"body",2);a([N(".tab-group__nav")],dt.prototype,"nav",2);a([N(".tab-group__indicator")],dt.prototype,"indicator",2);a([U()],dt.prototype,"hasScrollControls",2);a([d()],dt.prototype,"placement",2);a([d()],dt.prototype,"activation",2);a([d({attribute:"no-scroll-controls",type:Boolean})],dt.prototype,"noScrollControls",2);a([P("noScrollControls",{waitUntilFirstUpdate:!0})],dt.prototype,"updateScrollControls",1);a([P("placement",{waitUntilFirstUpdate:!0})],dt.prototype,"syncIndicator",1);var ay="sl-tab-group";dt.define("sl-tab-group");F({tagName:ay,elementClass:dt,react:M,events:{onSlTabShow:"sl-tab-show",onSlTabHide:"sl-tab-hide"},displayName:"SlTabGroup"});var ly=B`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,We=class extends R{constructor(){super(...arguments),this.formControlController=new wr(this,{value:e=>e.checked?e.value||"on":void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new it(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(e){e.key==="ArrowLeft"&&(e.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),e.key==="ArrowRight"&&(e.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("help-text"),t=this.helpText?!0:!!e;return C`
      <div
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${j({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${D(this.value)}
            .checked=${wi(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};We.styles=[V,$i,ly];a([N('input[type="checkbox"]')],We.prototype,"input",2);a([U()],We.prototype,"hasFocus",2);a([d()],We.prototype,"title",2);a([d()],We.prototype,"name",2);a([d()],We.prototype,"value",2);a([d({reflect:!0})],We.prototype,"size",2);a([d({type:Boolean,reflect:!0})],We.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],We.prototype,"checked",2);a([Ci("checked")],We.prototype,"defaultChecked",2);a([d({reflect:!0})],We.prototype,"form",2);a([d({type:Boolean,reflect:!0})],We.prototype,"required",2);a([d({attribute:"help-text"})],We.prototype,"helpText",2);a([P("checked",{waitUntilFirstUpdate:!0})],We.prototype,"handleCheckedChange",1);a([P("disabled",{waitUntilFirstUpdate:!0})],We.prototype,"handleDisabledChange",1);var cy="sl-switch";We.define("sl-switch");F({tagName:cy,elementClass:We,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlSwitch"});var uy=B`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,dy=0,mo=class extends R{constructor(){super(...arguments),this.attrId=++dy,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return C`
      <slot
        part="base"
        class=${j({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};mo.styles=[V,uy];a([d({reflect:!0})],mo.prototype,"name",2);a([d({type:Boolean,reflect:!0})],mo.prototype,"active",2);a([P("active")],mo.prototype,"handleActiveChange",1);var hy="sl-tab-panel";mo.define("sl-tab-panel");F({tagName:hy,elementClass:mo,react:M,events:{},displayName:"SlTabPanel"});var py=B`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,fy=B`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Wr=Math.min,yt=Math.max,ta=Math.round,ss=Math.floor,Kr=e=>({x:e,y:e}),my={left:"right",right:"left",bottom:"top",top:"bottom"},gy={start:"end",end:"start"};function yc(e,t,r){return yt(e,Wr(t,r))}function go(e,t){return typeof e=="function"?e(t):e}function qr(e){return e.split("-")[0]}function vo(e){return e.split("-")[1]}function Gf(e){return e==="x"?"y":"x"}function _u(e){return e==="y"?"height":"width"}function In(e){return["top","bottom"].includes(qr(e))?"y":"x"}function xu(e){return Gf(In(e))}function vy(e,t,r){r===void 0&&(r=!1);const i=vo(e),o=xu(e),n=_u(o);let s=o==="x"?i===(r?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(s=ra(s)),[s,ra(s)]}function yy(e){const t=ra(e);return[bc(e),t,bc(t)]}function bc(e){return e.replace(/start|end/g,t=>gy[t])}function by(e,t,r){const i=["left","right"],o=["right","left"],n=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return r?t?o:i:t?i:o;case"left":case"right":return t?n:s;default:return[]}}function wy(e,t,r,i){const o=vo(e);let n=by(qr(e),r==="start",i);return o&&(n=n.map(s=>s+"-"+o),t&&(n=n.concat(n.map(bc)))),n}function ra(e){return e.replace(/left|right|bottom|top/g,t=>my[t])}function _y(e){return{top:0,right:0,bottom:0,left:0,...e}}function Zf(e){return typeof e!="number"?_y(e):{top:e,right:e,bottom:e,left:e}}function ia(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function ah(e,t,r){let{reference:i,floating:o}=e;const n=In(t),s=xu(t),c=_u(s),l=qr(t),u=n==="y",m=i.x+i.width/2-o.width/2,h=i.y+i.height/2-o.height/2,p=i[c]/2-o[c]/2;let g;switch(l){case"top":g={x:m,y:i.y-o.height};break;case"bottom":g={x:m,y:i.y+i.height};break;case"right":g={x:i.x+i.width,y:h};break;case"left":g={x:i.x-o.width,y:h};break;default:g={x:i.x,y:i.y}}switch(vo(t)){case"start":g[s]-=p*(r&&u?-1:1);break;case"end":g[s]+=p*(r&&u?-1:1);break}return g}const xy=async(e,t,r)=>{const{placement:i="bottom",strategy:o="absolute",middleware:n=[],platform:s}=r,c=n.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:m,y:h}=ah(u,i,l),p=i,g={},y=0;for(let _=0;_<c.length;_++){const{name:z,fn:b}=c[_],{x:f,y:v,data:w,reset:x}=await b({x:m,y:h,initialPlacement:i,placement:p,strategy:o,middlewareData:g,rects:u,platform:s,elements:{reference:e,floating:t}});m=f??m,h=v??h,g={...g,[z]:{...g[z],...w}},x&&y<=50&&(y++,typeof x=="object"&&(x.placement&&(p=x.placement),x.rects&&(u=x.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):x.rects),{x:m,y:h}=ah(u,p,l)),_=-1)}return{x:m,y:h,placement:p,strategy:o,middlewareData:g}};async function ku(e,t){var r;t===void 0&&(t={});const{x:i,y:o,platform:n,rects:s,elements:c,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:m="viewport",elementContext:h="floating",altBoundary:p=!1,padding:g=0}=go(t,e),y=Zf(g),z=c[p?h==="floating"?"reference":"floating":h],b=ia(await n.getClippingRect({element:(r=await(n.isElement==null?void 0:n.isElement(z)))==null||r?z:z.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(c.floating)),boundary:u,rootBoundary:m,strategy:l})),f=h==="floating"?{...s.floating,x:i,y:o}:s.reference,v=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c.floating)),w=await(n.isElement==null?void 0:n.isElement(v))?await(n.getScale==null?void 0:n.getScale(v))||{x:1,y:1}:{x:1,y:1},x=ia(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:f,offsetParent:v,strategy:l}):f);return{top:(b.top-x.top+y.top)/w.y,bottom:(x.bottom-b.bottom+y.bottom)/w.y,left:(b.left-x.left+y.left)/w.x,right:(x.right-b.right+y.right)/w.x}}const ky=e=>({name:"arrow",options:e,async fn(t){const{x:r,y:i,placement:o,rects:n,platform:s,elements:c,middlewareData:l}=t,{element:u,padding:m=0}=go(e,t)||{};if(u==null)return{};const h=Zf(m),p={x:r,y:i},g=xu(o),y=_u(g),_=await s.getDimensions(u),z=g==="y",b=z?"top":"left",f=z?"bottom":"right",v=z?"clientHeight":"clientWidth",w=n.reference[y]+n.reference[g]-p[g]-n.floating[y],x=p[g]-n.reference[g],S=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let $=S?S[v]:0;(!$||!await(s.isElement==null?void 0:s.isElement(S)))&&($=c.floating[v]||n.floating[y]);const A=w/2-x/2,L=$/2-_[y]/2-1,T=Wr(h[b],L),ie=Wr(h[f],L),oe=T,Ae=$-_[y]-ie,_e=$/2-_[y]/2+A,Be=yc(oe,_e,Ae),Ge=!l.arrow&&vo(o)!=null&&_e!==Be&&n.reference[y]/2-(_e<oe?T:ie)-_[y]/2<0,mt=Ge?_e<oe?_e-oe:_e-Ae:0;return{[g]:p[g]+mt,data:{[g]:Be,centerOffset:_e-Be-mt,...Ge&&{alignmentOffset:mt}},reset:Ge}}}),Sy=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var r,i;const{placement:o,middlewareData:n,rects:s,initialPlacement:c,platform:l,elements:u}=t,{mainAxis:m=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:g="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:_=!0,...z}=go(e,t);if((r=n.arrow)!=null&&r.alignmentOffset)return{};const b=qr(o),f=qr(c)===c,v=await(l.isRTL==null?void 0:l.isRTL(u.floating)),w=p||(f||!_?[ra(c)]:yy(c));!p&&y!=="none"&&w.push(...wy(c,_,y,v));const x=[c,...w],S=await ku(t,z),$=[];let A=((i=n.flip)==null?void 0:i.overflows)||[];if(m&&$.push(S[b]),h){const oe=vy(o,s,v);$.push(S[oe[0]],S[oe[1]])}if(A=[...A,{placement:o,overflows:$}],!$.every(oe=>oe<=0)){var L,T;const oe=(((L=n.flip)==null?void 0:L.index)||0)+1,Ae=x[oe];if(Ae)return{data:{index:oe,overflows:A},reset:{placement:Ae}};let _e=(T=A.filter(Be=>Be.overflows[0]<=0).sort((Be,Ge)=>Be.overflows[1]-Ge.overflows[1])[0])==null?void 0:T.placement;if(!_e)switch(g){case"bestFit":{var ie;const Be=(ie=A.map(Ge=>[Ge.placement,Ge.overflows.filter(mt=>mt>0).reduce((mt,I)=>mt+I,0)]).sort((Ge,mt)=>Ge[1]-mt[1])[0])==null?void 0:ie[0];Be&&(_e=Be);break}case"initialPlacement":_e=c;break}if(o!==_e)return{reset:{placement:_e}}}return{}}}};async function Cy(e,t){const{placement:r,platform:i,elements:o}=e,n=await(i.isRTL==null?void 0:i.isRTL(o.floating)),s=qr(r),c=vo(r),l=In(r)==="y",u=["left","top"].includes(s)?-1:1,m=n&&l?-1:1,h=go(t,e);let{mainAxis:p,crossAxis:g,alignmentAxis:y}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return c&&typeof y=="number"&&(g=c==="end"?y*-1:y),l?{x:g*m,y:p*u}:{x:p*u,y:g*m}}const $y=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var r,i;const{x:o,y:n,placement:s,middlewareData:c}=t,l=await Cy(t,e);return s===((r=c.offset)==null?void 0:r.placement)&&(i=c.arrow)!=null&&i.alignmentOffset?{}:{x:o+l.x,y:n+l.y,data:{...l,placement:s}}}}},zy=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:r,y:i,placement:o}=t,{mainAxis:n=!0,crossAxis:s=!1,limiter:c={fn:z=>{let{x:b,y:f}=z;return{x:b,y:f}}},...l}=go(e,t),u={x:r,y:i},m=await ku(t,l),h=In(qr(o)),p=Gf(h);let g=u[p],y=u[h];if(n){const z=p==="y"?"top":"left",b=p==="y"?"bottom":"right",f=g+m[z],v=g-m[b];g=yc(f,g,v)}if(s){const z=h==="y"?"top":"left",b=h==="y"?"bottom":"right",f=y+m[z],v=y-m[b];y=yc(f,y,v)}const _=c.fn({...t,[p]:g,[h]:y});return{..._,data:{x:_.x-r,y:_.y-i}}}}},Ey=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:r,rects:i,platform:o,elements:n}=t,{apply:s=()=>{},...c}=go(e,t),l=await ku(t,c),u=qr(r),m=vo(r),h=In(r)==="y",{width:p,height:g}=i.floating;let y,_;u==="top"||u==="bottom"?(y=u,_=m===(await(o.isRTL==null?void 0:o.isRTL(n.floating))?"start":"end")?"left":"right"):(_=u,y=m==="end"?"top":"bottom");const z=g-l[y],b=p-l[_],f=!t.middlewareData.shift;let v=z,w=b;if(h){const S=p-l.left-l.right;w=m||f?Wr(b,S):S}else{const S=g-l.top-l.bottom;v=m||f?Wr(z,S):S}if(f&&!m){const S=yt(l.left,0),$=yt(l.right,0),A=yt(l.top,0),L=yt(l.bottom,0);h?w=p-2*(S!==0||$!==0?S+$:yt(l.left,l.right)):v=g-2*(A!==0||L!==0?A+L:yt(l.top,l.bottom))}await s({...t,availableWidth:w,availableHeight:v});const x=await o.getDimensions(n.floating);return p!==x.width||g!==x.height?{reset:{rects:!0}}:{}}}};function Yr(e){return Jf(e)?(e.nodeName||"").toLowerCase():"#document"}function xt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function _r(e){var t;return(t=(Jf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Jf(e){return e instanceof Node||e instanceof xt(e).Node}function vr(e){return e instanceof Element||e instanceof xt(e).Element}function sr(e){return e instanceof HTMLElement||e instanceof xt(e).HTMLElement}function lh(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof xt(e).ShadowRoot}function On(e){const{overflow:t,overflowX:r,overflowY:i,display:o}=Lt(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+r)&&!["inline","contents"].includes(o)}function Ay(e){return["table","td","th"].includes(Yr(e))}function Su(e){const t=Cu(),r=Lt(e);return r.transform!=="none"||r.perspective!=="none"||(r.containerType?r.containerType!=="normal":!1)||!t&&(r.backdropFilter?r.backdropFilter!=="none":!1)||!t&&(r.filter?r.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(r.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(r.contain||"").includes(i))}function Ty(e){let t=co(e);for(;sr(t)&&!Ca(t);){if(Su(t))return t;t=co(t)}return null}function Cu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Ca(e){return["html","body","#document"].includes(Yr(e))}function Lt(e){return xt(e).getComputedStyle(e)}function $a(e){return vr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function co(e){if(Yr(e)==="html")return e;const t=e.assignedSlot||e.parentNode||lh(e)&&e.host||_r(e);return lh(t)?t.host:t}function em(e){const t=co(e);return Ca(t)?e.ownerDocument?e.ownerDocument.body:e.body:sr(t)&&On(t)?t:em(t)}function Sn(e,t,r){var i;t===void 0&&(t=[]),r===void 0&&(r=!0);const o=em(e),n=o===((i=e.ownerDocument)==null?void 0:i.body),s=xt(o);return n?t.concat(s,s.visualViewport||[],On(o)?o:[],s.frameElement&&r?Sn(s.frameElement):[]):t.concat(o,Sn(o,[],r))}function tm(e){const t=Lt(e);let r=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=sr(e),n=o?e.offsetWidth:r,s=o?e.offsetHeight:i,c=ta(r)!==n||ta(i)!==s;return c&&(r=n,i=s),{width:r,height:i,$:c}}function $u(e){return vr(e)?e:e.contextElement}function Ji(e){const t=$u(e);if(!sr(t))return Kr(1);const r=t.getBoundingClientRect(),{width:i,height:o,$:n}=tm(t);let s=(n?ta(r.width):r.width)/i,c=(n?ta(r.height):r.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Py=Kr(0);function rm(e){const t=xt(e);return!Cu()||!t.visualViewport?Py:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ny(e,t,r){return t===void 0&&(t=!1),!r||t&&r!==xt(e)?!1:t}function _i(e,t,r,i){t===void 0&&(t=!1),r===void 0&&(r=!1);const o=e.getBoundingClientRect(),n=$u(e);let s=Kr(1);t&&(i?vr(i)&&(s=Ji(i)):s=Ji(e));const c=Ny(n,r,i)?rm(n):Kr(0);let l=(o.left+c.x)/s.x,u=(o.top+c.y)/s.y,m=o.width/s.x,h=o.height/s.y;if(n){const p=xt(n),g=i&&vr(i)?xt(i):i;let y=p,_=y.frameElement;for(;_&&i&&g!==y;){const z=Ji(_),b=_.getBoundingClientRect(),f=Lt(_),v=b.left+(_.clientLeft+parseFloat(f.paddingLeft))*z.x,w=b.top+(_.clientTop+parseFloat(f.paddingTop))*z.y;l*=z.x,u*=z.y,m*=z.x,h*=z.y,l+=v,u+=w,y=xt(_),_=y.frameElement}}return ia({width:m,height:h,x:l,y:u})}const Ly=[":popover-open",":modal"];function im(e){return Ly.some(t=>{try{return e.matches(t)}catch{return!1}})}function Iy(e){let{elements:t,rect:r,offsetParent:i,strategy:o}=e;const n=o==="fixed",s=_r(i),c=t?im(t.floating):!1;if(i===s||c&&n)return r;let l={scrollLeft:0,scrollTop:0},u=Kr(1);const m=Kr(0),h=sr(i);if((h||!h&&!n)&&((Yr(i)!=="body"||On(s))&&(l=$a(i)),sr(i))){const p=_i(i);u=Ji(i),m.x=p.x+i.clientLeft,m.y=p.y+i.clientTop}return{width:r.width*u.x,height:r.height*u.y,x:r.x*u.x-l.scrollLeft*u.x+m.x,y:r.y*u.y-l.scrollTop*u.y+m.y}}function Oy(e){return Array.from(e.getClientRects())}function om(e){return _i(_r(e)).left+$a(e).scrollLeft}function Dy(e){const t=_r(e),r=$a(e),i=e.ownerDocument.body,o=yt(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=yt(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-r.scrollLeft+om(e);const c=-r.scrollTop;return Lt(i).direction==="rtl"&&(s+=yt(t.clientWidth,i.clientWidth)-o),{width:o,height:n,x:s,y:c}}function Ry(e,t){const r=xt(e),i=_r(e),o=r.visualViewport;let n=i.clientWidth,s=i.clientHeight,c=0,l=0;if(o){n=o.width,s=o.height;const u=Cu();(!u||u&&t==="fixed")&&(c=o.offsetLeft,l=o.offsetTop)}return{width:n,height:s,x:c,y:l}}function My(e,t){const r=_i(e,!0,t==="fixed"),i=r.top+e.clientTop,o=r.left+e.clientLeft,n=sr(e)?Ji(e):Kr(1),s=e.clientWidth*n.x,c=e.clientHeight*n.y,l=o*n.x,u=i*n.y;return{width:s,height:c,x:l,y:u}}function ch(e,t,r){let i;if(t==="viewport")i=Ry(e,r);else if(t==="document")i=Dy(_r(e));else if(vr(t))i=My(t,r);else{const o=rm(e);i={...t,x:t.x-o.x,y:t.y-o.y}}return ia(i)}function nm(e,t){const r=co(e);return r===t||!vr(r)||Ca(r)?!1:Lt(r).position==="fixed"||nm(r,t)}function Fy(e,t){const r=t.get(e);if(r)return r;let i=Sn(e,[],!1).filter(c=>vr(c)&&Yr(c)!=="body"),o=null;const n=Lt(e).position==="fixed";let s=n?co(e):e;for(;vr(s)&&!Ca(s);){const c=Lt(s),l=Su(s);!l&&c.position==="fixed"&&(o=null),(n?!l&&!o:!l&&c.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||On(s)&&!l&&nm(e,s))?i=i.filter(m=>m!==s):o=c,s=co(s)}return t.set(e,i),i}function By(e){let{element:t,boundary:r,rootBoundary:i,strategy:o}=e;const s=[...r==="clippingAncestors"?Fy(t,this._c):[].concat(r),i],c=s[0],l=s.reduce((u,m)=>{const h=ch(t,m,o);return u.top=yt(h.top,u.top),u.right=Wr(h.right,u.right),u.bottom=Wr(h.bottom,u.bottom),u.left=yt(h.left,u.left),u},ch(t,c,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Vy(e){const{width:t,height:r}=tm(e);return{width:t,height:r}}function jy(e,t,r){const i=sr(t),o=_r(t),n=r==="fixed",s=_i(e,!0,n,t);let c={scrollLeft:0,scrollTop:0};const l=Kr(0);if(i||!i&&!n)if((Yr(t)!=="body"||On(o))&&(c=$a(t)),i){const h=_i(t,!0,n,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else o&&(l.x=om(o));const u=s.left+c.scrollLeft-l.x,m=s.top+c.scrollTop-l.y;return{x:u,y:m,width:s.width,height:s.height}}function uh(e,t){return!sr(e)||Lt(e).position==="fixed"?null:t?t(e):e.offsetParent}function sm(e,t){const r=xt(e);if(!sr(e)||im(e))return r;let i=uh(e,t);for(;i&&Ay(i)&&Lt(i).position==="static";)i=uh(i,t);return i&&(Yr(i)==="html"||Yr(i)==="body"&&Lt(i).position==="static"&&!Su(i))?r:i||Ty(e)||r}const Uy=async function(e){const t=this.getOffsetParent||sm,r=this.getDimensions;return{reference:jy(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await r(e.floating)}}};function Hy(e){return Lt(e).direction==="rtl"}const Ss={convertOffsetParentRelativeRectToViewportRelativeRect:Iy,getDocumentElement:_r,getClippingRect:By,getOffsetParent:sm,getElementRects:Uy,getClientRects:Oy,getDimensions:Vy,getScale:Ji,isElement:vr,isRTL:Hy};function Wy(e,t){let r=null,i;const o=_r(e);function n(){var c;clearTimeout(i),(c=r)==null||c.disconnect(),r=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),n();const{left:u,top:m,width:h,height:p}=e.getBoundingClientRect();if(c||t(),!h||!p)return;const g=ss(m),y=ss(o.clientWidth-(u+h)),_=ss(o.clientHeight-(m+p)),z=ss(u),f={rootMargin:-g+"px "+-y+"px "+-_+"px "+-z+"px",threshold:yt(0,Wr(1,l))||1};let v=!0;function w(x){const S=x[0].intersectionRatio;if(S!==l){if(!v)return s();S?s(!1,S):i=setTimeout(()=>{s(!1,1e-7)},100)}v=!1}try{r=new IntersectionObserver(w,{...f,root:o.ownerDocument})}catch{r=new IntersectionObserver(w,f)}r.observe(e)}return s(!0),n}function Ky(e,t,r,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,u=$u(e),m=o||n?[...u?Sn(u):[],...Sn(t)]:[];m.forEach(b=>{o&&b.addEventListener("scroll",r,{passive:!0}),n&&b.addEventListener("resize",r)});const h=u&&c?Wy(u,r):null;let p=-1,g=null;s&&(g=new ResizeObserver(b=>{let[f]=b;f&&f.target===u&&g&&(g.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var v;(v=g)==null||v.observe(t)})),r()}),u&&!l&&g.observe(u),g.observe(t));let y,_=l?_i(e):null;l&&z();function z(){const b=_i(e);_&&(b.x!==_.x||b.y!==_.y||b.width!==_.width||b.height!==_.height)&&r(),_=b,y=requestAnimationFrame(z)}return r(),()=>{var b;m.forEach(f=>{o&&f.removeEventListener("scroll",r),n&&f.removeEventListener("resize",r)}),h==null||h(),(b=g)==null||b.disconnect(),g=null,l&&cancelAnimationFrame(y)}}const qy=zy,Yy=Sy,dh=Ey,Xy=ky,Qy=(e,t,r)=>{const i=new Map,o={platform:Ss,...r},n={...o.platform,_c:i};return xy(e,t,{...o,platform:n})};function Gy(e){return Zy(e)}function ul(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Zy(e){for(let t=e;t;t=ul(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=ul(e);t;t=ul(t)){if(!(t instanceof Element))continue;const r=getComputedStyle(t);if(r.display!=="contents"&&(r.position!=="static"||r.filter!=="none"||t.tagName==="BODY"))return t}return null}function Jy(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var J=class extends R{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),r=this.placement.includes("top")||this.placement.includes("bottom");let i=0,o=0,n=0,s=0,c=0,l=0,u=0,m=0;r?e.top<t.top?(i=e.left,o=e.bottom,n=e.right,s=e.bottom,c=t.left,l=t.top,u=t.right,m=t.top):(i=t.left,o=t.bottom,n=t.right,s=t.bottom,c=e.left,l=e.top,u=e.right,m=e.top):e.left<t.left?(i=e.right,o=e.top,n=t.left,s=t.top,c=e.right,l=e.bottom,u=t.left,m=t.bottom):(i=t.right,o=t.top,n=e.left,s=e.top,c=t.right,l=t.bottom,u=e.left,m=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${o}px`),this.style.setProperty("--hover-bridge-top-right-x",`${n}px`),this.style.setProperty("--hover-bridge-top-right-y",`${s}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${u}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${m}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||Jy(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Ky(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[$y({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(dh({apply:({rects:r})=>{const i=this.sync==="width"||this.sync==="both",o=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${r.reference.width}px`:"",this.popup.style.height=o?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(Yy({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(qy({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(dh({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(Xy({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?r=>Ss.getOffsetParent(r,Gy):Ss.getOffsetParent;Qy(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:Pn(br({},Ss),{getOffsetParent:t})}).then(({x:r,y:i,middlewareData:o,placement:n})=>{const s=getComputedStyle(this).direction==="rtl",c={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];if(this.setAttribute("data-current-placement",n),Object.assign(this.popup.style,{left:`${r}px`,top:`${i}px`}),this.arrow){const l=o.arrow.x,u=o.arrow.y;let m="",h="",p="",g="";if(this.arrowPlacement==="start"){const y=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";m=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=s?y:"",g=s?"":y}else if(this.arrowPlacement==="end"){const y=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=s?"":y,g=s?y:"",p=typeof u=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(g=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",m=typeof u=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(g=typeof l=="number"?`${l}px`:"",m=typeof u=="number"?`${u}px`:"");Object.assign(this.arrowEl.style,{top:m,right:h,bottom:p,left:g,[c]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${j({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${j({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?C`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};J.styles=[V,fy];a([N(".popup")],J.prototype,"popup",2);a([N(".popup__arrow")],J.prototype,"arrowEl",2);a([d()],J.prototype,"anchor",2);a([d({type:Boolean,reflect:!0})],J.prototype,"active",2);a([d({reflect:!0})],J.prototype,"placement",2);a([d({reflect:!0})],J.prototype,"strategy",2);a([d({type:Number})],J.prototype,"distance",2);a([d({type:Number})],J.prototype,"skidding",2);a([d({type:Boolean})],J.prototype,"arrow",2);a([d({attribute:"arrow-placement"})],J.prototype,"arrowPlacement",2);a([d({attribute:"arrow-padding",type:Number})],J.prototype,"arrowPadding",2);a([d({type:Boolean})],J.prototype,"flip",2);a([d({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],J.prototype,"flipFallbackPlacements",2);a([d({attribute:"flip-fallback-strategy"})],J.prototype,"flipFallbackStrategy",2);a([d({type:Object})],J.prototype,"flipBoundary",2);a([d({attribute:"flip-padding",type:Number})],J.prototype,"flipPadding",2);a([d({type:Boolean})],J.prototype,"shift",2);a([d({type:Object})],J.prototype,"shiftBoundary",2);a([d({attribute:"shift-padding",type:Number})],J.prototype,"shiftPadding",2);a([d({attribute:"auto-size"})],J.prototype,"autoSize",2);a([d()],J.prototype,"sync",2);a([d({type:Object})],J.prototype,"autoSizeBoundary",2);a([d({attribute:"auto-size-padding",type:Number})],J.prototype,"autoSizePadding",2);a([d({attribute:"hover-bridge",type:Boolean})],J.prototype,"hoverBridge",2);function et(e,t){return new Promise(r=>{function i(o){o.target===e&&(e.removeEventListener(t,i),r())}e.addEventListener(t,i)})}var Ne=class extends R{constructor(){super(),this.localize=new Z(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=th(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=th(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await $e(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:r,options:i}=de(this,"tooltip.show",{dir:this.localize.dir()});await be(this.popup.popup,r,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await $e(this.body);const{keyframes:r,options:i}=de(this,"tooltip.hide",{dir:this.localize.dir()});await be(this.popup.popup,r,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,et(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,et(this,"sl-after-hide")}render(){return C`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${j({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Ne.styles=[V,py];Ne.dependencies={"sl-popup":J};a([N("slot:not([name])")],Ne.prototype,"defaultSlot",2);a([N(".tooltip__body")],Ne.prototype,"body",2);a([N("sl-popup")],Ne.prototype,"popup",2);a([d()],Ne.prototype,"content",2);a([d()],Ne.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);a([d({type:Number})],Ne.prototype,"distance",2);a([d({type:Boolean,reflect:!0})],Ne.prototype,"open",2);a([d({type:Number})],Ne.prototype,"skidding",2);a([d()],Ne.prototype,"trigger",2);a([d({type:Boolean})],Ne.prototype,"hoist",2);a([P("open",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleOpenChange",1);a([P(["content","distance","hoist","placement","skidding"])],Ne.prototype,"handleOptionsChange",1);a([P("disabled")],Ne.prototype,"handleDisabledChange",1);te("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});te("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var eb="sl-tooltip";Ne.define("sl-tooltip");F({tagName:eb,elementClass:Ne,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlTooltip"});var tb=B`
  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,G=class extends R{constructor(){super(...arguments),this.formControlController=new wr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new it(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top=="number"&&(this.input.scrollTop=e.top),typeof e.left=="number"&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i="preserve"){const o=t??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(e,o,n,i),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${D(this.name)}
              .value=${wi(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${D(this.placeholder)}
              rows=${D(this.rows)}
              minlength=${D(this.minlength)}
              maxlength=${D(this.maxlength)}
              autocapitalize=${D(this.autocapitalize)}
              autocorrect=${D(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${D(this.spellcheck)}
              enterkeyhint=${D(this.enterkeyhint)}
              inputmode=${D(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};G.styles=[V,$i,tb];a([N(".textarea__control")],G.prototype,"input",2);a([U()],G.prototype,"hasFocus",2);a([d()],G.prototype,"title",2);a([d()],G.prototype,"name",2);a([d()],G.prototype,"value",2);a([d({reflect:!0})],G.prototype,"size",2);a([d({type:Boolean,reflect:!0})],G.prototype,"filled",2);a([d()],G.prototype,"label",2);a([d({attribute:"help-text"})],G.prototype,"helpText",2);a([d()],G.prototype,"placeholder",2);a([d({type:Number})],G.prototype,"rows",2);a([d()],G.prototype,"resize",2);a([d({type:Boolean,reflect:!0})],G.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],G.prototype,"readonly",2);a([d({reflect:!0})],G.prototype,"form",2);a([d({type:Boolean,reflect:!0})],G.prototype,"required",2);a([d({type:Number})],G.prototype,"minlength",2);a([d({type:Number})],G.prototype,"maxlength",2);a([d()],G.prototype,"autocapitalize",2);a([d()],G.prototype,"autocorrect",2);a([d()],G.prototype,"autocomplete",2);a([d({type:Boolean})],G.prototype,"autofocus",2);a([d()],G.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],G.prototype,"spellcheck",2);a([d()],G.prototype,"inputmode",2);a([Ci()],G.prototype,"defaultValue",2);a([P("disabled",{waitUntilFirstUpdate:!0})],G.prototype,"handleDisabledChange",1);a([P("rows",{waitUntilFirstUpdate:!0})],G.prototype,"handleRowsChange",1);a([P("value",{waitUntilFirstUpdate:!0})],G.prototype,"handleValueChange",1);var rb="sl-textarea";G.define("sl-textarea");F({tagName:rb,elementClass:G,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlTextarea"});var ib=B`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,xr=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return C`
      <span
        part="base"
        class=${j({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?C`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};xr.styles=[V,ib];xr.dependencies={"sl-icon-button":Ee};a([d({reflect:!0})],xr.prototype,"variant",2);a([d({reflect:!0})],xr.prototype,"size",2);a([d({type:Boolean,reflect:!0})],xr.prototype,"pill",2);a([d({type:Boolean})],xr.prototype,"removable",2);var ob="sl-tag";xr.define("sl-tag");F({tagName:ob,elementClass:xr,react:M,events:{onSlRemove:"sl-remove"},displayName:"SlTag"});var nb=B`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,sb=B`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Jr=class extends R{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=Io(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(e){const t=Io(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(e){const t=Io(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(e){const t=Io(e.target);t==null||t.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),i=Io(t);i&&(i.toggleAttribute("data-sl-button-group__button",!0),i.toggleAttribute("data-sl-button-group__button--first",r===0),i.toggleAttribute("data-sl-button-group__button--inner",r>0&&r<e.length-1),i.toggleAttribute("data-sl-button-group__button--last",r===e.length-1),i.toggleAttribute("data-sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return C`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Jr.styles=[V,sb];a([N("slot")],Jr.prototype,"defaultSlot",2);a([U()],Jr.prototype,"disableRole",2);a([d()],Jr.prototype,"label",2);function Io(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}var Me=class extends R{constructor(){super(...arguments),this.formControlController=new wr(this),this.hasSlotController=new it(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const e=this.required&&!this.value;return this.customValidityMessage!==""?_v:e?wv:ka}get validationMessage(){const e=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:e?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(e){const t=e.target.closest("sl-radio, sl-radio-button"),r=this.getAllRadios(),i=this.value;t.disabled||(this.value=t.value,r.forEach(o=>o.checked=o===t),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(e){var t;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key))return;const r=this.getAllRadios().filter(c=>!c.disabled),i=(t=r.find(c=>c.checked))!=null?t:r[0],o=e.key===" "?0:["ArrowUp","ArrowLeft"].includes(e.key)?-1:1,n=this.value;let s=r.indexOf(i)+o;s<0&&(s=r.length-1),s>r.length-1&&(s=0),this.getAllRadios().forEach(c=>{c.checked=!1,this.hasButtonGroup||(c.tabIndex=-1)}),this.value=r[s].value,r[s].checked=!0,this.hasButtonGroup?r[s].shadowRoot.querySelector("button").focus():(r[s].tabIndex=0,r[s].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),e.preventDefault()}handleLabelClick(){const e=this.getAllRadios(),r=e.find(i=>i.checked)||e[0];r&&r.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){var e,t;const r=this.getAllRadios();if(await Promise.all(r.map(async i=>{await i.updateComplete,i.checked=i.value===this.value,i.size=this.size})),this.hasButtonGroup=r.some(i=>i.tagName.toLowerCase()==="sl-radio-button"),r.length>0&&!r.some(i=>i.checked))if(this.hasButtonGroup){const i=(e=r[0].shadowRoot)==null?void 0:e.querySelector("button");i&&(i.tabIndex=0)}else r[0].tabIndex=0;if(this.hasButtonGroup){const i=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");i&&(i.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const e=this.required&&!this.value,t=this.customValidityMessage!=="";return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?"":this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=""){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=C`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return C`
      <fieldset
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?C`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Me.styles=[V,$i,nb];Me.dependencies={"sl-button-group":Jr};a([N("slot:not([name])")],Me.prototype,"defaultSlot",2);a([N(".radio-group__validation-input")],Me.prototype,"validationInput",2);a([U()],Me.prototype,"hasButtonGroup",2);a([U()],Me.prototype,"errorMessage",2);a([U()],Me.prototype,"defaultValue",2);a([d()],Me.prototype,"label",2);a([d({attribute:"help-text"})],Me.prototype,"helpText",2);a([d()],Me.prototype,"name",2);a([d({reflect:!0})],Me.prototype,"value",2);a([d({reflect:!0})],Me.prototype,"size",2);a([d({reflect:!0})],Me.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Me.prototype,"required",2);a([P("size",{waitUntilFirstUpdate:!0})],Me.prototype,"handleSizeChange",1);a([P("value")],Me.prototype,"handleValueChange",1);var ab="sl-radio-group";Me.define("sl-radio-group");F({tagName:ab,elementClass:Me,react:M,events:{onSlChange:"sl-change",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRadioGroup"});var lb=B`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const am="important",cb=" !"+am,ot=Nn(class extends Ln{constructor(e){var t;if(super(e),e.type!==rr.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const i=e[r];return i==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?r.removeProperty(i):r[i]=null);for(const i in t){const o=t[i];if(o!=null){this.ft.add(i);const n=typeof o=="string"&&o.endsWith(cb);i.includes("-")||n?r.setProperty(i,n?o.slice(0,-11):o,n?am:""):r[i]=o}}return wt}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let wc=class extends Ln{constructor(t){if(super(t),this.it=ue,t.type!==rr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ue||t==null)return this._t=void 0,this.it=t;if(t===wt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};wc.directiveName="unsafeHTML",wc.resultType=1;const Cs=Nn(wc);var Ke=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){const t=this.localize.dir()==="rtl",{left:r,right:i,width:o}=this.rating.getBoundingClientRect(),n=t?this.roundToPrecision((i-e)/o*this.max,this.precision):this.roundToPrecision((e-r)/o*this.max,this.precision);return Se(n,0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit("sl-change"))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",i=this.value;if(!(this.disabled||this.readonly)){if(e.key==="ArrowDown"||t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight"){const o=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-o),e.preventDefault()}if(e.key==="ArrowUp"||t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft"){const o=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+o),e.preventDefault()}e.key==="Home"&&(this.value=0,e.preventDefault()),e.key==="End"&&(this.value=this.max,e.preventDefault()),this.value!==i&&this.emit("sl-change")}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),e.preventDefault()}roundToPrecision(e,t=.5){const r=1/t;return Math.ceil(e*r)/r}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){const e=this.localize.dir()==="rtl",t=Array.from(Array(this.max).keys());let r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,C`
      <div
        part="base"
        class=${j({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(i=>r>i&&r<i+1?C`
                <span
                  class=${j({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1})}
                  role="presentation"
                >
                  <div
                    style=${ot({clipPath:e?`inset(0 ${(r-i)*100}% 0 0)`:`inset(0 0 0 ${(r-i)*100}%)`})}
                  >
                    ${Cs(this.getSymbol(i+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${ot({clipPath:e?`inset(0 0 0 ${100-(r-i)*100}%)`:`inset(0 ${100-(r-i)*100}% 0 0)`})}
                  >
                    ${Cs(this.getSymbol(i+1))}
                  </div>
                </span>
              `:C`
              <span
                class=${j({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===i+1,"rating__symbol--active":r>=i+1})}
                role="presentation"
              >
                ${Cs(this.getSymbol(i+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Ke.styles=[V,lb];Ke.dependencies={"sl-icon":ne};a([N(".rating")],Ke.prototype,"rating",2);a([U()],Ke.prototype,"hoverValue",2);a([U()],Ke.prototype,"isHovering",2);a([d()],Ke.prototype,"label",2);a([d({type:Number})],Ke.prototype,"value",2);a([d({type:Number})],Ke.prototype,"max",2);a([d({type:Number})],Ke.prototype,"precision",2);a([d({type:Boolean,reflect:!0})],Ke.prototype,"readonly",2);a([d({type:Boolean,reflect:!0})],Ke.prototype,"disabled",2);a([d()],Ke.prototype,"getSymbol",2);a([wu({passive:!0})],Ke.prototype,"handleTouchMove",1);a([P("hoverValue")],Ke.prototype,"handleHoverValueChange",1);a([P("isHovering")],Ke.prototype,"handleIsHoveringChange",1);var ub="sl-rating";Ke.define("sl-rating");F({tagName:ub,elementClass:Ke,react:M,events:{onSlChange:"sl-change",onSlHover:"sl-hover"},displayName:"SlRating"});var db=B`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,he=class extends R{constructor(){super(...arguments),this.formControlController=new wr(this),this.hasSlotController=new it(this,"help-text","label"),this.localize=new Z(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=e=>e.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty("--percent",`${e*100}%`)}syncTooltip(e){if(this.output!==null){const t=this.input.offsetWidth,r=this.output.offsetWidth,i=getComputedStyle(this.input).getPropertyValue("--thumb-size"),o=this.localize.dir()==="rtl",n=t*e;if(o){const s=`${t-n}px + ${e} * ${i}`;this.output.style.translate=`calc((${s} - ${r/2}px - ${i} / 2))`}else{const s=`${n}px - ${e} * ${i}`;this.output.style.translate=`calc(${s} - ${r/2}px + ${i} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!=="none"&&this.syncTooltip(e)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t;return C`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${D(this.name)}
              ?disabled=${this.disabled}
              min=${D(this.min)}
              max=${D(this.max)}
              step=${D(this.step)}
              .value=${wi(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?C`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};he.styles=[V,$i,db];a([N(".range__control")],he.prototype,"input",2);a([N(".range__tooltip")],he.prototype,"output",2);a([U()],he.prototype,"hasFocus",2);a([U()],he.prototype,"hasTooltip",2);a([d()],he.prototype,"title",2);a([d()],he.prototype,"name",2);a([d({type:Number})],he.prototype,"value",2);a([d()],he.prototype,"label",2);a([d({attribute:"help-text"})],he.prototype,"helpText",2);a([d({type:Boolean,reflect:!0})],he.prototype,"disabled",2);a([d({type:Number})],he.prototype,"min",2);a([d({type:Number})],he.prototype,"max",2);a([d({type:Number})],he.prototype,"step",2);a([d()],he.prototype,"tooltip",2);a([d({attribute:!1})],he.prototype,"tooltipFormatter",2);a([d({reflect:!0})],he.prototype,"form",2);a([Ci()],he.prototype,"defaultValue",2);a([wu({passive:!0})],he.prototype,"handleThumbDragStart",1);a([P("value",{waitUntilFirstUpdate:!0})],he.prototype,"handleValueChange",1);a([P("disabled",{waitUntilFirstUpdate:!0})],he.prototype,"handleDisabledChange",1);a([P("hasTooltip",{waitUntilFirstUpdate:!0})],he.prototype,"syncRange",1);var hb="sl-range";he.define("sl-range");F({tagName:hb,elementClass:he,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlRange"});var pb=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],kr=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const r=t.getTime()-e.getTime(),{unit:i,value:o}=pb.find(n=>Math.abs(r)<n.max);if(this.isoTime=t.toISOString(),this.titleTime=this.localize.date(t,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/o),i,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let n;i==="minute"?n=as("second"):i==="hour"?n=as("minute"):i==="day"?n=as("hour"):n=as("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),n)}return C` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};a([U()],kr.prototype,"isoTime",2);a([U()],kr.prototype,"relativeTime",2);a([U()],kr.prototype,"titleTime",2);a([d()],kr.prototype,"date",2);a([d()],kr.prototype,"format",2);a([d()],kr.prototype,"numeric",2);a([d({type:Boolean})],kr.prototype,"sync",2);function as(e){const r={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return r-Date.now()%r}var fb="sl-relative-time";kr.define("sl-relative-time");F({tagName:fb,elementClass:kr,react:M,events:{},displayName:"SlRelativeTime"});var mb=B`
  :host {
    display: contents;
  }
`,Dn=class extends R{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit("sl-resize",{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(e!==null){const t=e.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],t.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};Dn.styles=[V,mb];a([d({type:Boolean,reflect:!0})],Dn.prototype,"disabled",2);a([P("disabled",{waitUntilFirstUpdate:!0})],Dn.prototype,"handleDisabledChange",1);var gb="sl-resize-observer";Dn.define("sl-resize-observer");F({tagName:gb,elementClass:Dn,react:M,events:{onSlResize:"sl-resize"},displayName:"SlResizeObserver"});var vb=B`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,Y=class extends R{constructor(){super(...arguments),this.formControlController=new wr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new it(this,"help-text","label"),this.localize=new Z(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=e=>C`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{const t=e.target,r=t.closest(".select__clear")!==null,i=t.closest("sl-icon-button")!==null;if(!(r||i)){if(e.key==="Escape"&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key==="Enter"||e.key===" "&&this.typeToSelectString===""){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(e.key)){const o=this.getAllOptions(),n=o.indexOf(this.currentOption);let s=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key==="ArrowDown"?(s=n+1,s>o.length-1&&(s=0)):e.key==="ArrowUp"?(s=n-1,s<0&&(s=o.length-1)):e.key==="Home"?s=0:e.key==="End"&&(s=o.length-1),this.setCurrentOption(o[s])}if(e.key.length===1||e.key==="Backspace"){const o=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key==="Backspace")return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),e.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(const n of o)if(n.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(n);break}}}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){var e;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){const r=e.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||r||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!=="Tab"&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){const r=e.target.closest("sl-option"),i=this.value;r&&!r.disabled&&(this.multiple?this.toggleOptionSelection(r):this.setSelectedOptions(r),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("sl-option")?(e.forEach(i=>r.push(i.value)),this.setSelectedOptions(e.filter(i=>t.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(e,t){e.stopPropagation(),this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(e){this.getAllOptions().forEach(r=>{r.current=!1,r.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){const t=this.getAllOptions(),r=Array.isArray(e)?e:[e];t.forEach(i=>i.selected=!1),r.length&&r.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){var e,t,r,i;this.selectedOptions=this.getAllOptions().filter(o=>o.selected),this.multiple?(this.value=this.selectedOptions.map(o=>o.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(t=(e=this.selectedOptions[0])==null?void 0:e.value)!=null?t:"",this.displayLabel=(i=(r=this.selectedOptions[0])==null?void 0:r.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){const r=this.getTag(e,t);return C`<div @sl-remove=${i=>this.handleTagRemove(i,e)}>
          ${typeof r=="string"?Cs(r):r}
        </div>`}else if(t===this.maxOptionsVisible)return C`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return C``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(r=>t.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await $e(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:e,options:t}=de(this,"select.show",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.currentOption&&vc(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await $e(this);const{keyframes:e,options:t}=de(this,"select.hide",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,et(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,et(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,o=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value.length===0;return C`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${j({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?C`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?C`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Y.styles=[V,$i,vb];Y.dependencies={"sl-icon":ne,"sl-popup":J,"sl-tag":xr};a([N(".select")],Y.prototype,"popup",2);a([N(".select__combobox")],Y.prototype,"combobox",2);a([N(".select__display-input")],Y.prototype,"displayInput",2);a([N(".select__value-input")],Y.prototype,"valueInput",2);a([N(".select__listbox")],Y.prototype,"listbox",2);a([U()],Y.prototype,"hasFocus",2);a([U()],Y.prototype,"displayLabel",2);a([U()],Y.prototype,"currentOption",2);a([U()],Y.prototype,"selectedOptions",2);a([d()],Y.prototype,"name",2);a([d({converter:{fromAttribute:e=>e.split(" "),toAttribute:e=>e.join(" ")}})],Y.prototype,"value",2);a([Ci()],Y.prototype,"defaultValue",2);a([d({reflect:!0})],Y.prototype,"size",2);a([d()],Y.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"multiple",2);a([d({attribute:"max-options-visible",type:Number})],Y.prototype,"maxOptionsVisible",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);a([d({type:Boolean})],Y.prototype,"clearable",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"open",2);a([d({type:Boolean})],Y.prototype,"hoist",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"filled",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"pill",2);a([d()],Y.prototype,"label",2);a([d({reflect:!0})],Y.prototype,"placement",2);a([d({attribute:"help-text"})],Y.prototype,"helpText",2);a([d({reflect:!0})],Y.prototype,"form",2);a([d({type:Boolean,reflect:!0})],Y.prototype,"required",2);a([d()],Y.prototype,"getTag",2);a([P("disabled",{waitUntilFirstUpdate:!0})],Y.prototype,"handleDisabledChange",1);a([P("value",{waitUntilFirstUpdate:!0})],Y.prototype,"handleValueChange",1);a([P("open",{waitUntilFirstUpdate:!0})],Y.prototype,"handleOpenChange",1);te("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});te("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var yb="sl-select";Y.define("sl-select");F({tagName:yb,elementClass:Y,react:M,events:{onSlChange:"sl-change",onSlClear:"sl-clear",onSlInput:"sl-input",onSlFocus:"sl-focus",onSlBlur:"sl-blur",onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInvalid:"sl-invalid"},displayName:"SlSelect"});var bb=B`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,za=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return C`
      <div
        part="base"
        class=${j({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};za.styles=[V,bb];a([d()],za.prototype,"effect",2);var wb="sl-skeleton";za.define("sl-skeleton");F({tagName:wb,elementClass:za,react:M,events:{},displayName:"SlSkeleton"});var _b="sl-spinner";fo.define("sl-spinner");F({tagName:_b,elementClass:fo,react:M,events:{},displayName:"SlSpinner"});var xb=B`
  :host {
    display: contents;
  }
`,Xt=class extends R{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit("sl-mutation",{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const e=typeof this.attr=="string"&&this.attr.length>0,t=e&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return C` <slot></slot> `}};Xt.styles=[V,xb];a([d({reflect:!0})],Xt.prototype,"attr",2);a([d({attribute:"attr-old-value",type:Boolean,reflect:!0})],Xt.prototype,"attrOldValue",2);a([d({attribute:"char-data",type:Boolean,reflect:!0})],Xt.prototype,"charData",2);a([d({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Xt.prototype,"charDataOldValue",2);a([d({attribute:"child-list",type:Boolean,reflect:!0})],Xt.prototype,"childList",2);a([d({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);a([P("disabled")],Xt.prototype,"handleDisabledChange",1);a([P("attr",{waitUntilFirstUpdate:!0}),P("attr-old-value",{waitUntilFirstUpdate:!0}),P("char-data",{waitUntilFirstUpdate:!0}),P("char-data-old-value",{waitUntilFirstUpdate:!0}),P("childList",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleChange",1);var kb="sl-mutation-observer";Xt.define("sl-mutation-observer");F({tagName:kb,elementClass:Xt,react:M,events:{onSlMutation:"sl-mutation"},displayName:"SlMutationObserver"});var Sb=B`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,$t=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const e=this.childNodes;let t="";return[...e].forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(r.hasAttribute("slot")||(t+=r.textContent)),r.nodeType===Node.TEXT_NODE&&(t+=r.textContent)}),t.trim()}render(){return C`
      <div
        part="base"
        class=${j({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};$t.styles=[V,Sb];$t.dependencies={"sl-icon":ne};a([N(".option__label")],$t.prototype,"defaultSlot",2);a([U()],$t.prototype,"current",2);a([U()],$t.prototype,"selected",2);a([U()],$t.prototype,"hasHover",2);a([d({reflect:!0})],$t.prototype,"value",2);a([d({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);a([P("disabled")],$t.prototype,"handleDisabledChange",1);a([P("selected")],$t.prototype,"handleSelectedChange",1);a([P("value")],$t.prototype,"handleValueChange",1);var Cb="sl-option";$t.define("sl-option");F({tagName:Cb,elementClass:$t,react:M,events:{},displayName:"SlOption"});var $b="sl-popup";J.define("sl-popup");F({tagName:$b,elementClass:J,react:M,events:{onSlReposition:"sl-reposition"},displayName:"SlPopup"});var zb=B`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,yo=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return C`
      <div
        part="base"
        class=${j({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${D(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ot({width:`${this.value}%`})}>
          ${this.indeterminate?"":C` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};yo.styles=[V,zb];a([d({type:Number,reflect:!0})],yo.prototype,"value",2);a([d({type:Boolean,reflect:!0})],yo.prototype,"indeterminate",2);a([d()],yo.prototype,"label",2);var Eb="sl-progress-bar";yo.define("sl-progress-bar");F({tagName:Eb,elementClass:yo,react:M,events:{},displayName:"SlProgressBar"});var Ab=B`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,zi=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.label=""}updated(e){if(super.updated(e),e.has("value")){const t=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*t,i=r-this.value/100*r;this.indicatorOffset=`${i}px`}}render(){return C`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};zi.styles=[V,Ab];a([N(".progress-ring__indicator")],zi.prototype,"indicator",2);a([U()],zi.prototype,"indicatorOffset",2);a([d({type:Number,reflect:!0})],zi.prototype,"value",2);a([d()],zi.prototype,"label",2);var Tb="sl-progress-ring";zi.define("sl-progress-ring");F({tagName:Tb,elementClass:zi,react:M,events:{},displayName:"SlProgressRing"});var lm=B`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button[checked]]) {
    z-index: 2;
  }
`,Pb=B`
  ${lm}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,It=class extends R{constructor(){super(...arguments),this.hasSlotController=new it(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Jo`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${j({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${D(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};It.styles=[V,Pb];a([N(".button")],It.prototype,"input",2);a([N(".hidden-input")],It.prototype,"hiddenInput",2);a([U()],It.prototype,"hasFocus",2);a([d({type:Boolean,reflect:!0})],It.prototype,"checked",2);a([d()],It.prototype,"value",2);a([d({type:Boolean,reflect:!0})],It.prototype,"disabled",2);a([d({reflect:!0})],It.prototype,"size",2);a([d({type:Boolean,reflect:!0})],It.prototype,"pill",2);a([P("disabled",{waitUntilFirstUpdate:!0})],It.prototype,"handleDisabledChange",1);var Nb="sl-radio-button";It.define("sl-radio-button");F({tagName:Nb,elementClass:It,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadioButton"});var Lb=B`
  :host {
    display: inline-block;
  }
`;let cm=null;class um{}um.render=function(e,t){cm(e,t)};self.QrCreator=um;(function(e){function t(c,l,u,m){var h={},p=e(u,l);p.u(c),p.J(),m=m||0;var g=p.h(),y=p.h()+2*m;return h.text=c,h.level=l,h.version=u,h.O=y,h.a=function(_,z){return _-=m,z-=m,0>_||_>=g||0>z||z>=g?!1:p.a(_,z)},h}function r(c,l,u,m,h,p,g,y,_,z){function b(f,v,w,x,S,$,A){f?(c.lineTo(v+$,w+A),c.arcTo(v,w,x,S,p)):c.lineTo(v,w)}g?c.moveTo(l+p,u):c.moveTo(l,u),b(y,m,u,m,h,-p,0),b(_,m,h,l,h,0,-p),b(z,l,h,l,u,p,0),b(g,l,u,m,u,0,p)}function i(c,l,u,m,h,p,g,y,_,z){function b(f,v,w,x){c.moveTo(f+w,v),c.lineTo(f,v),c.lineTo(f,v+x),c.arcTo(f,v,f+w,v,p)}g&&b(l,u,p,p),y&&b(m,u,-p,p),_&&b(m,h,-p,-p),z&&b(l,h,p,-p)}function o(c,l){var u=l.fill;if(typeof u=="string")c.fillStyle=u;else{var m=u.type,h=u.colorStops;if(u=u.position.map(g=>Math.round(g*l.size)),m==="linear-gradient")var p=c.createLinearGradient.apply(c,u);else if(m==="radial-gradient")p=c.createRadialGradient.apply(c,u);else throw Error("Unsupported fill");h.forEach(([g,y])=>{p.addColorStop(g,y)}),c.fillStyle=p}}function n(c,l){e:{var u=l.text,m=l.v,h=l.N,p=l.K,g=l.P;for(h=Math.max(1,h||1),p=Math.min(40,p||40);h<=p;h+=1)try{var y=t(u,m,h,g);break e}catch{}y=void 0}if(!y)return null;for(u=c.getContext("2d"),l.background&&(u.fillStyle=l.background,u.fillRect(l.left,l.top,l.size,l.size)),m=y.O,p=l.size/m,u.beginPath(),g=0;g<m;g+=1)for(h=0;h<m;h+=1){var _=u,z=l.left+h*p,b=l.top+g*p,f=g,v=h,w=y.a,x=z+p,S=b+p,$=f-1,A=f+1,L=v-1,T=v+1,ie=Math.floor(Math.min(.5,Math.max(0,l.R))*p),oe=w(f,v),Ae=w($,L),_e=w($,v);$=w($,T);var Be=w(f,T);T=w(A,T),v=w(A,v),A=w(A,L),f=w(f,L),z=Math.round(z),b=Math.round(b),x=Math.round(x),S=Math.round(S),oe?r(_,z,b,x,S,ie,!_e&&!f,!_e&&!Be,!v&&!Be,!v&&!f):i(_,z,b,x,S,ie,_e&&f&&Ae,_e&&Be&&$,v&&Be&&T,v&&f&&A)}return o(u,l),u.fill(),c}var s={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};cm=function(c,l){var u={};Object.assign(u,s,c),u.N=u.minVersion,u.K=u.maxVersion,u.v=u.ecLevel,u.left=u.left,u.top=u.top,u.size=u.size,u.fill=u.fill,u.background=u.background,u.text=u.text,u.R=u.radius,u.P=u.quiet,l instanceof HTMLCanvasElement?((l.width!==u.size||l.height!==u.size)&&(l.width=u.size,l.height=u.size),l.getContext("2d").clearRect(0,0,l.width,l.height),n(l,u)):(c=document.createElement("canvas"),c.width=u.size,c.height=u.size,u=n(c,u),l.appendChild(u))}})(function(){function e(l){var u=r.s(l);return{S:function(){return 4},b:function(){return u.length},write:function(m){for(var h=0;h<u.length;h+=1)m.put(u[h],8)}}}function t(){var l=[],u=0,m={B:function(){return l},c:function(h){return(l[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,p){for(var g=0;g<p;g+=1)m.m((h>>>p-g-1&1)==1)},f:function(){return u},m:function(h){var p=Math.floor(u/8);l.length<=p&&l.push(0),h&&(l[p]|=128>>>u%8),u+=1}};return m}function r(l,u){function m(f,v){for(var w=-1;7>=w;w+=1)if(!(-1>=f+w||y<=f+w))for(var x=-1;7>=x;x+=1)-1>=v+x||y<=v+x||(g[f+w][v+x]=0<=w&&6>=w&&(x==0||x==6)||0<=x&&6>=x&&(w==0||w==6)||2<=w&&4>=w&&2<=x&&4>=x)}function h(f,v){for(var w=y=4*l+17,x=Array(w),S=0;S<w;S+=1){x[S]=Array(w);for(var $=0;$<w;$+=1)x[S][$]=null}for(g=x,m(0,0),m(y-7,0),m(0,y-7),w=n.G(l),x=0;x<w.length;x+=1)for(S=0;S<w.length;S+=1){$=w[x];var A=w[S];if(g[$][A]==null)for(var L=-2;2>=L;L+=1)for(var T=-2;2>=T;T+=1)g[$+L][A+T]=L==-2||L==2||T==-2||T==2||L==0&&T==0}for(w=8;w<y-8;w+=1)g[w][6]==null&&(g[w][6]=w%2==0);for(w=8;w<y-8;w+=1)g[6][w]==null&&(g[6][w]=w%2==0);for(w=n.w(p<<3|v),x=0;15>x;x+=1)S=!f&&(w>>x&1)==1,g[6>x?x:8>x?x+1:y-15+x][8]=S,g[8][8>x?y-x-1:9>x?15-x:14-x]=S;if(g[y-8][8]=!f,7<=l){for(w=n.A(l),x=0;18>x;x+=1)S=!f&&(w>>x&1)==1,g[Math.floor(x/3)][x%3+y-8-3]=S;for(x=0;18>x;x+=1)S=!f&&(w>>x&1)==1,g[x%3+y-8-3][Math.floor(x/3)]=S}if(_==null){for(f=c.I(l,p),w=t(),x=0;x<z.length;x+=1)S=z[x],w.put(4,4),w.put(S.b(),n.f(4,l)),S.write(w);for(x=S=0;x<f.length;x+=1)S+=f[x].j;if(w.f()>8*S)throw Error("code length overflow. ("+w.f()+">"+8*S+")");for(w.f()+4<=8*S&&w.put(0,4);w.f()%8!=0;)w.m(!1);for(;!(w.f()>=8*S)&&(w.put(236,8),!(w.f()>=8*S));)w.put(17,8);var ie=0;for(S=x=0,$=Array(f.length),A=Array(f.length),L=0;L<f.length;L+=1){var oe=f[L].j,Ae=f[L].o-oe;for(x=Math.max(x,oe),S=Math.max(S,Ae),$[L]=Array(oe),T=0;T<$[L].length;T+=1)$[L][T]=255&w.B()[T+ie];for(ie+=oe,T=n.C(Ae),oe=i($[L],T.b()-1).l(T),A[L]=Array(T.b()-1),T=0;T<A[L].length;T+=1)Ae=T+oe.b()-A[L].length,A[L][T]=0<=Ae?oe.c(Ae):0}for(T=w=0;T<f.length;T+=1)w+=f[T].o;for(w=Array(w),T=ie=0;T<x;T+=1)for(L=0;L<f.length;L+=1)T<$[L].length&&(w[ie]=$[L][T],ie+=1);for(T=0;T<S;T+=1)for(L=0;L<f.length;L+=1)T<A[L].length&&(w[ie]=A[L][T],ie+=1);_=w}for(f=_,w=-1,x=y-1,S=7,$=0,v=n.F(v),A=y-1;0<A;A-=2)for(A==6&&--A;;){for(L=0;2>L;L+=1)g[x][A-L]==null&&(T=!1,$<f.length&&(T=(f[$]>>>S&1)==1),v(x,A-L)&&(T=!T),g[x][A-L]=T,--S,S==-1&&($+=1,S=7));if(x+=w,0>x||y<=x){x-=w,w=-w;break}}}var p=o[u],g=null,y=0,_=null,z=[],b={u:function(f){f=e(f),z.push(f),_=null},a:function(f,v){if(0>f||y<=f||0>v||y<=v)throw Error(f+","+v);return g[f][v]},h:function(){return y},J:function(){for(var f=0,v=0,w=0;8>w;w+=1){h(!0,w);var x=n.D(b);(w==0||f>x)&&(f=x,v=w)}h(!1,v)}};return b}function i(l,u){if(typeof l.length>"u")throw Error(l.length+"/"+u);var m=function(){for(var p=0;p<l.length&&l[p]==0;)p+=1;for(var g=Array(l.length-p+u),y=0;y<l.length-p;y+=1)g[y]=l[y+p];return g}(),h={c:function(p){return m[p]},b:function(){return m.length},multiply:function(p){for(var g=Array(h.b()+p.b()-1),y=0;y<h.b();y+=1)for(var _=0;_<p.b();_+=1)g[y+_]^=s.i(s.g(h.c(y))+s.g(p.c(_)));return i(g,0)},l:function(p){if(0>h.b()-p.b())return h;for(var g=s.g(h.c(0))-s.g(p.c(0)),y=Array(h.b()),_=0;_<h.b();_+=1)y[_]=h.c(_);for(_=0;_<p.b();_+=1)y[_]^=s.i(s.g(p.c(_))+g);return i(y,0).l(p)}};return h}r.s=function(l){for(var u=[],m=0;m<l.length;m++){var h=l.charCodeAt(m);128>h?u.push(h):2048>h?u.push(192|h>>6,128|h&63):55296>h||57344<=h?u.push(224|h>>12,128|h>>6&63,128|h&63):(m++,h=65536+((h&1023)<<10|l.charCodeAt(m)&1023),u.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return u};var o={L:1,M:0,Q:3,H:2},n=function(){function l(h){for(var p=0;h!=0;)p+=1,h>>>=1;return p}var u=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],m={w:function(h){for(var p=h<<10;0<=l(p)-l(1335);)p^=1335<<l(p)-l(1335);return(h<<10|p)^21522},A:function(h){for(var p=h<<12;0<=l(p)-l(7973);)p^=7973<<l(p)-l(7973);return h<<12|p},G:function(h){return u[h-1]},F:function(h){switch(h){case 0:return function(p,g){return(p+g)%2==0};case 1:return function(p){return p%2==0};case 2:return function(p,g){return g%3==0};case 3:return function(p,g){return(p+g)%3==0};case 4:return function(p,g){return(Math.floor(p/2)+Math.floor(g/3))%2==0};case 5:return function(p,g){return p*g%2+p*g%3==0};case 6:return function(p,g){return(p*g%2+p*g%3)%2==0};case 7:return function(p,g){return(p*g%3+(p+g)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var p=i([1],0),g=0;g<h;g+=1)p=p.multiply(i([1,s.i(g)],0));return p},f:function(h,p){if(h!=4||1>p||40<p)throw Error("mode: "+h+"; type: "+p);return 10>p?8:16},D:function(h){for(var p=h.h(),g=0,y=0;y<p;y+=1)for(var _=0;_<p;_+=1){for(var z=0,b=h.a(y,_),f=-1;1>=f;f+=1)if(!(0>y+f||p<=y+f))for(var v=-1;1>=v;v+=1)0>_+v||p<=_+v||(f!=0||v!=0)&&b==h.a(y+f,_+v)&&(z+=1);5<z&&(g+=3+z-5)}for(y=0;y<p-1;y+=1)for(_=0;_<p-1;_+=1)z=0,h.a(y,_)&&(z+=1),h.a(y+1,_)&&(z+=1),h.a(y,_+1)&&(z+=1),h.a(y+1,_+1)&&(z+=1),(z==0||z==4)&&(g+=3);for(y=0;y<p;y+=1)for(_=0;_<p-6;_+=1)h.a(y,_)&&!h.a(y,_+1)&&h.a(y,_+2)&&h.a(y,_+3)&&h.a(y,_+4)&&!h.a(y,_+5)&&h.a(y,_+6)&&(g+=40);for(_=0;_<p;_+=1)for(y=0;y<p-6;y+=1)h.a(y,_)&&!h.a(y+1,_)&&h.a(y+2,_)&&h.a(y+3,_)&&h.a(y+4,_)&&!h.a(y+5,_)&&h.a(y+6,_)&&(g+=40);for(_=z=0;_<p;_+=1)for(y=0;y<p;y+=1)h.a(y,_)&&(z+=1);return g+=Math.abs(100*z/p/p-50)/5*10}};return m}(),s=function(){for(var l=Array(256),u=Array(256),m=0;8>m;m+=1)l[m]=1<<m;for(m=8;256>m;m+=1)l[m]=l[m-4]^l[m-5]^l[m-6]^l[m-8];for(m=0;255>m;m+=1)u[l[m]]=m;return{g:function(h){if(1>h)throw Error("glog("+h+")");return u[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return l[h]}}}(),c=function(){function l(h,p){switch(p){case o.L:return u[4*(h-1)];case o.M:return u[4*(h-1)+1];case o.Q:return u[4*(h-1)+2];case o.H:return u[4*(h-1)+3]}}var u=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],m={I:function(h,p){var g=l(h,p);if(typeof g>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+p);h=g.length/3,p=[];for(var y=0;y<h;y+=1)for(var _=g[3*y],z=g[3*y+1],b=g[3*y+2],f=0;f<_;f+=1){var v=b,w={};w.o=z,w.j=v,p.push(w)}return p}};return m}();return r}());const Ib=QrCreator;var Ot=class extends R{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Ib.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var e;return C`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((e=this.label)==null?void 0:e.length)>0?this.label:this.value}
        style=${ot({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Ot.styles=[V,Lb];a([N("canvas")],Ot.prototype,"canvas",2);a([d()],Ot.prototype,"value",2);a([d()],Ot.prototype,"label",2);a([d({type:Number})],Ot.prototype,"size",2);a([d()],Ot.prototype,"fill",2);a([d()],Ot.prototype,"background",2);a([d({type:Number})],Ot.prototype,"radius",2);a([d({attribute:"error-correction"})],Ot.prototype,"errorCorrection",2);a([P(["background","errorCorrection","fill","radius","size","value"])],Ot.prototype,"generate",1);var Ob="sl-qr-code";Ot.define("sl-qr-code");F({tagName:Ob,elementClass:Ot,react:M,events:{},displayName:"SlQrCode"});var Db=B`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Qt=class extends R{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return C`
      <span
        part="base"
        class=${j({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?C` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Qt.styles=[V,Db];Qt.dependencies={"sl-icon":ne};a([U()],Qt.prototype,"checked",2);a([U()],Qt.prototype,"hasFocus",2);a([d()],Qt.prototype,"value",2);a([d({reflect:!0})],Qt.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Qt.prototype,"disabled",2);a([P("checked")],Qt.prototype,"handleCheckedChange",1);a([P("disabled",{waitUntilFirstUpdate:!0})],Qt.prototype,"handleDisabledChange",1);var Rb="sl-radio";Qt.define("sl-radio");F({tagName:Rb,elementClass:Qt,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlRadio"});var Mb="sl-icon";ne.define("sl-icon");var Fb=F({tagName:Mb,elementClass:ne,react:M,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),oa=Fb,Bb="sl-icon-button";Ee.define("sl-icon-button");F({tagName:Bb,elementClass:Ee,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus"},displayName:"SlIconButton"});var Vb=B`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,ei=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.position=50}handleDrag(e){const{width:t}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";e.preventDefault(),Zo(this.base,{onMove:i=>{this.position=parseFloat(Se(i/t*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){const t=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(e.key)){const i=e.shiftKey?10:1;let o=this.position;e.preventDefault(),(t&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight")&&(o-=i),(t&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft")&&(o+=i),e.key==="Home"&&(o=0),e.key==="End"&&(o=100),o=Se(o,0,100),this.position=o}}handlePositionChange(){this.emit("sl-change")}render(){const e=this.localize.dir()==="rtl";return C`
      <div
        part="base"
        id="image-comparer"
        class=${j({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${ot({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${ot({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};ei.styles=[V,Vb];ei.scopedElement={"sl-icon":ne};a([N(".image-comparer")],ei.prototype,"base",2);a([N(".image-comparer__handle")],ei.prototype,"handle",2);a([d({type:Number,reflect:!0})],ei.prototype,"position",2);a([P("position",{waitUntilFirstUpdate:!0})],ei.prototype,"handlePositionChange",1);var jb="sl-image-comparer";ei.define("sl-image-comparer");F({tagName:jb,elementClass:ei,react:M,events:{onSlChange:"sl-change"},displayName:"SlImageComparer"});var Ub=B`
  :host {
    display: block;
  }
`,dl=new Map;function Hb(e,t="cors"){const r=dl.get(e);if(r!==void 0)return Promise.resolve(r);const i=fetch(e,{mode:t}).then(async o=>{const n={ok:o.ok,status:o.status,html:await o.text()};return dl.set(e,n),n});return dl.set(e,i),i}var Ei=class extends R{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(e){const t=document.createElement("script");[...e.attributes].forEach(r=>t.setAttribute(r.name,r.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{const e=this.src,t=await Hb(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit("sl-error",{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return C`<slot></slot>`}};Ei.styles=[V,Ub];a([d()],Ei.prototype,"src",2);a([d()],Ei.prototype,"mode",2);a([d({attribute:"allow-scripts",type:Boolean})],Ei.prototype,"allowScripts",2);a([P("src")],Ei.prototype,"handleSrcChange",1);var Wb="sl-include";Ei.define("sl-include");F({tagName:Wb,elementClass:Ei,react:M,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlInclude"});var Kb=B`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,H=class extends R{constructor(){super(...arguments),this.formControlController=new wr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new it(this,"help-text","label"),this.localize=new Z(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){e.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,r="none"){this.input.setSelectionRange(e,t,r)}setRangeText(e,t,r,i="preserve"){const o=t??this.input.selectionStart,n=r??this.input.selectionEnd;this.input.setRangeText(e,o,n,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),r=this.label?!0:!!e,i=this.helpText?!0:!!t,n=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return C`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${D(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${D(this.placeholder)}
              minlength=${D(this.minlength)}
              maxlength=${D(this.maxlength)}
              min=${D(this.min)}
              max=${D(this.max)}
              step=${D(this.step)}
              .value=${wi(this.value)}
              autocapitalize=${D(this.autocapitalize)}
              autocomplete=${D(this.autocomplete)}
              autocorrect=${D(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${D(this.pattern)}
              enterkeyhint=${D(this.enterkeyhint)}
              inputmode=${D(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${n?C`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?C`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?C`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:C`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};H.styles=[V,$i,Kb];H.dependencies={"sl-icon":ne};a([N(".input__control")],H.prototype,"input",2);a([U()],H.prototype,"hasFocus",2);a([d()],H.prototype,"title",2);a([d({reflect:!0})],H.prototype,"type",2);a([d()],H.prototype,"name",2);a([d()],H.prototype,"value",2);a([Ci()],H.prototype,"defaultValue",2);a([d({reflect:!0})],H.prototype,"size",2);a([d({type:Boolean,reflect:!0})],H.prototype,"filled",2);a([d({type:Boolean,reflect:!0})],H.prototype,"pill",2);a([d()],H.prototype,"label",2);a([d({attribute:"help-text"})],H.prototype,"helpText",2);a([d({type:Boolean})],H.prototype,"clearable",2);a([d({type:Boolean,reflect:!0})],H.prototype,"disabled",2);a([d()],H.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],H.prototype,"readonly",2);a([d({attribute:"password-toggle",type:Boolean})],H.prototype,"passwordToggle",2);a([d({attribute:"password-visible",type:Boolean})],H.prototype,"passwordVisible",2);a([d({attribute:"no-spin-buttons",type:Boolean})],H.prototype,"noSpinButtons",2);a([d({reflect:!0})],H.prototype,"form",2);a([d({type:Boolean,reflect:!0})],H.prototype,"required",2);a([d()],H.prototype,"pattern",2);a([d({type:Number})],H.prototype,"minlength",2);a([d({type:Number})],H.prototype,"maxlength",2);a([d()],H.prototype,"min",2);a([d()],H.prototype,"max",2);a([d()],H.prototype,"step",2);a([d()],H.prototype,"autocapitalize",2);a([d()],H.prototype,"autocorrect",2);a([d()],H.prototype,"autocomplete",2);a([d({type:Boolean})],H.prototype,"autofocus",2);a([d()],H.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],H.prototype,"spellcheck",2);a([d()],H.prototype,"inputmode",2);a([P("disabled",{waitUntilFirstUpdate:!0})],H.prototype,"handleDisabledChange",1);a([P("step",{waitUntilFirstUpdate:!0})],H.prototype,"handleStepChange",1);a([P("value",{waitUntilFirstUpdate:!0})],H.prototype,"handleValueChange",1);var qb="sl-input";H.define("sl-input");F({tagName:qb,elementClass:H,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlClear:"sl-clear",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlInput"});var Yb=B`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Ea=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=["menuitem","menuitemcheckbox"],r=e.composedPath().find(o=>{var n;return t.includes(((n=o==null?void 0:o.getAttribute)==null?void 0:n.call(o,"role"))||"")});if(!r)return;const i=r;i.type==="checkbox"&&(i.checked=!i.checked),this.emit("sl-select",{detail:{item:i}})}handleKeyDown(e){if(e.key==="Enter"||e.key===" "){const t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t==null||t.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),r=this.getCurrentItem();let i=r?t.indexOf(r):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key==="ArrowDown"?i++:e.key==="ArrowUp"?i--:e.key==="Home"?i=0:e.key==="End"&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return e.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((t=e.getAttribute("role"))!=null?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute("tabindex")==="0")}setCurrentItem(e){this.getAllItems().forEach(r=>{r.setAttribute("tabindex",r===e?"0":"-1")})}render(){return C`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Ea.styles=[V,Yb];a([N("slot")],Ea.prototype,"defaultSlot",2);var Xb="sl-menu";Ea.define("sl-menu");var Qb=F({tagName:Xb,elementClass:Ea,react:M,events:{onSlSelect:"sl-select"},displayName:"SlMenu"}),Gb=Qb,Zb=B`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,zu=class extends R{render(){return C` <slot part="base" class="menu-label"></slot> `}};zu.styles=[V,Zb];var Jb="sl-menu-label";zu.define("sl-menu-label");F({tagName:Jb,elementClass:zu,react:M,events:{},displayName:"SlMenuLabel"});var e1=B`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rn=(e,t)=>{var i;const r=e._$AN;if(r===void 0)return!1;for(const o of r)(i=o._$AO)==null||i.call(o,t,!1),rn(o,t);return!0},na=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},dm=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),i1(t)}};function t1(e){this._$AN!==void 0?(na(this),this._$AM=e,dm(this)):this._$AM=e}function r1(e,t=!1,r=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let n=r;n<i.length;n++)rn(i[n],!1),na(i[n]);else i!=null&&(rn(i,!1),na(i));else rn(this,e)}const i1=e=>{e.type==rr.CHILD&&(e._$AP??(e._$AP=r1),e._$AQ??(e._$AQ=t1))};class o1 extends Ln{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,i){super._$AT(t,r,i),dm(this),this.isConnected=t._$AU}_$AO(t,r=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),r&&(rn(this,t),na(this))}setValue(t){if(Uf(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n1=()=>new s1;class s1{}const hl=new WeakMap,a1=Nn(class extends o1{render(e){return ue}update(e,[t]){var i;const r=t!==this.Y;return r&&this.Y!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),ue}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let r=hl.get(t);r===void 0&&(r=new WeakMap,hl.set(t,r)),r.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),r.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=hl.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var l1=class{constructor(e,t,r){this.popupRef=n1(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=i=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${i.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${i.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=i=>{switch(i.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":i.target!==this.host&&(i.preventDefault(),i.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(i);break}},this.handleClick=i=>{var o;i.target===this.host?(i.preventDefault(),i.stopPropagation()):i.target instanceof Element&&(i.target.tagName==="sl-menu-item"||(o=i.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=i=>{i.relatedTarget&&i.relatedTarget instanceof Element&&this.host.contains(i.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=i=>{i.stopPropagation()},this.handlePopupReposition=()=>{const i=this.host.renderRoot.querySelector("slot[name='submenu']"),o=i==null?void 0:i.assignedElements({flatten:!0}).filter(m=>m.localName==="sl-menu")[0],n=this.localize.dir()==="rtl";if(!o)return;const{left:s,top:c,width:l,height:u}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${n?s+l:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${c}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${n?s+l:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${c+u}px`)},(this.host=e).addController(this),this.hasSlotController=t,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){const t=this.host.renderRoot.querySelector("slot[name='submenu']");if(!t){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(const i of t.assignedElements())if(r=i.querySelectorAll("sl-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let i=1;i!==r.length;++i)r[i].setAttribute("tabindex","-1");this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var e;if(!((e=this.host.parentElement)!=null&&e.computedStyleMap))return;const t=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((o,n)=>{var s;const c=(s=t.get(n))!=null?s:new CSSUnitValue(0,"px"),u=(c instanceof CSSUnitValue?c:new CSSUnitValue(0,"px")).to("px");return o-u.value},0);this.skidding=i}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const e=this.localize.dir()==="ltr";return this.isConnected?C`
      <sl-popup
        ${a1(this.popupRef)}
        placement=${e?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:C` <slot name="submenu" hidden></slot> `}},ht=class extends R{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.localize=new Z(this),this.hasSlotController=new it(this,"submenu"),this.submenuController=new l1(this,this.hasSlotController,this.localize),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const e=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return xv(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const e=this.localize.dir()==="rtl",t=this.submenuController.isExpanded();return C`
      <div
        id="anchor"
        part="base"
        class=${j({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?C` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};ht.styles=[V,e1];ht.dependencies={"sl-icon":ne,"sl-popup":J,"sl-spinner":fo};a([N("slot:not([name])")],ht.prototype,"defaultSlot",2);a([N(".menu-item")],ht.prototype,"menuItem",2);a([d()],ht.prototype,"type",2);a([d({type:Boolean,reflect:!0})],ht.prototype,"checked",2);a([d()],ht.prototype,"value",2);a([d({type:Boolean,reflect:!0})],ht.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],ht.prototype,"disabled",2);a([P("checked")],ht.prototype,"handleCheckedChange",1);a([P("disabled")],ht.prototype,"handleDisabledChange",1);a([P("type")],ht.prototype,"handleTypeChange",1);var c1="sl-menu-item";ht.define("sl-menu-item");var u1=F({tagName:c1,elementClass:ht,react:M,events:{},displayName:"SlMenuItem"}),d1=u1,h1=B`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Dt=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await $e(this.body);const{keyframes:t,options:r}=de(this,"details.show",{dir:this.localize.dir()});await be(this.body,Js(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await $e(this.body);const{keyframes:t,options:r}=de(this,"details.hide",{dir:this.localize.dir()});await be(this.body,Js(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,et(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,et(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return C`
      <details
        part="base"
        class=${j({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Dt.styles=[V,h1];Dt.dependencies={"sl-icon":ne};a([N(".details")],Dt.prototype,"details",2);a([N(".details__header")],Dt.prototype,"header",2);a([N(".details__body")],Dt.prototype,"body",2);a([N(".details__expand-icon-slot")],Dt.prototype,"expandIconSlot",2);a([d({type:Boolean,reflect:!0})],Dt.prototype,"open",2);a([d()],Dt.prototype,"summary",2);a([d({type:Boolean,reflect:!0})],Dt.prototype,"disabled",2);a([P("open",{waitUntilFirstUpdate:!0})],Dt.prototype,"handleOpenChange",1);te("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});te("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var p1="sl-details";Dt.define("sl-details");F({tagName:p1,elementClass:Dt,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDetails"});var hh=new WeakMap;function hm(e){let t=hh.get(e);return t||(t=window.getComputedStyle(e,null),hh.set(e,t)),t}function f1(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=hm(e);return t.visibility!=="hidden"&&t.display!=="none"}function m1(e){const t=hm(e),{overflowY:r,overflowX:i}=t;return r==="scroll"||i==="scroll"?!0:r!=="auto"||i!=="auto"?!1:e.scrollHeight>e.clientHeight&&r==="auto"||e.scrollWidth>e.clientWidth&&i==="auto"}function g1(e){const t=e.tagName.toLowerCase(),r=Number(e.getAttribute("tabindex"));return e.hasAttribute("tabindex")&&(isNaN(r)||r<=-1)||e.hasAttribute("disabled")||e.closest("[inert]")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!f1(e)?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:m1(e)}function v1(e){var t,r;const i=_c(e),o=(t=i[0])!=null?t:null,n=(r=i[i.length-1])!=null?r:null;return{start:o,end:n}}function y1(e,t){var r;return((r=e.getRootNode({composed:!0}))==null?void 0:r.host)!==t}function _c(e){const t=new WeakMap,r=[];function i(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||t.has(o))return;t.set(o,!0),!r.includes(o)&&g1(o)&&r.push(o),o instanceof HTMLSlotElement&&y1(o,e)&&o.assignedElements({flatten:!0}).forEach(n=>{i(n)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&i(o.shadowRoot)}for(const n of o.children)i(n)}return i(e),r.sort((o,n)=>{const s=Number(o.getAttribute("tabindex"))||0;return(Number(n.getAttribute("tabindex"))||0)-s})}function*Eu(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*bv(Eu(e.shadowRoot.activeElement))))}function b1(){return[...Eu()].pop()}var Oo=[],pm=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var r;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=b1();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const o=_c(this.element);let n=o.findIndex(c=>c===i);this.previousFocus=this.currentFocus;const s=this.tabDirection==="forward"?1:-1;for(;;){n+s>=o.length?n=0:n+s<0?n=o.length-1:n+=s,this.previousFocus=this.currentFocus;const c=o[n];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||c&&this.possiblyHasTabbableChildren(c))return;t.preventDefault(),this.currentFocus=c,(r=this.currentFocus)==null||r.focus({preventScroll:!1});const l=[...Eu()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){Oo.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Oo=Oo.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Oo[Oo.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=_c(this.element);if(!this.element.matches(":focus-within")){const t=e[0],r=e[e.length-1],i=this.tabDirection==="forward"?t:r;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}},w1=B`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Gt=class extends R{constructor(){super(...arguments),this.hasSlotController=new it(this,"footer"),this.localize=new Z(this),this.modal=new pm(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),en(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.modal.deactivate(),tn(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=de(this,"dialog.denyClose",{dir:this.localize.dir()});be(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),en(this);const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([$e(this.dialog),$e(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=de(this,"dialog.show",{dir:this.localize.dir()}),r=de(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,t.keyframes,t.options),be(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([$e(this.dialog),$e(this.overlay)]);const e=de(this,"dialog.hide",{dir:this.localize.dir()}),t=de(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),be(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,tn(this);const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,et(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,et(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${j({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${D(this.noHeader?this.label:void 0)}
          aria-labelledby=${D(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":C`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Gt.styles=[V,w1];Gt.dependencies={"sl-icon-button":Ee};a([N(".dialog")],Gt.prototype,"dialog",2);a([N(".dialog__panel")],Gt.prototype,"panel",2);a([N(".dialog__overlay")],Gt.prototype,"overlay",2);a([d({type:Boolean,reflect:!0})],Gt.prototype,"open",2);a([d({reflect:!0})],Gt.prototype,"label",2);a([d({attribute:"no-header",type:Boolean,reflect:!0})],Gt.prototype,"noHeader",2);a([P("open",{waitUntilFirstUpdate:!0})],Gt.prototype,"handleOpenChange",1);te("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});te("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});te("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});te("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});te("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var _1="sl-dialog";Gt.define("sl-dialog");F({tagName:_1,elementClass:Gt,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDialog"});var x1=B`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Rn=class extends R{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Rn.styles=[V,x1];a([d({type:Boolean,reflect:!0})],Rn.prototype,"vertical",2);a([P("vertical")],Rn.prototype,"handleVerticalChange",1);var k1="sl-divider";Rn.define("sl-divider");var S1=F({tagName:k1,elementClass:Rn,react:M,events:{},displayName:"SlDivider"}),C1=S1,$1=B`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Fe=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key==="Escape"&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{var t;if(e.key==="Escape"&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key==="Tab"){if(this.open&&((t=document.activeElement)==null?void 0:t.tagName.toLowerCase())==="sl-menu-item"){e.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var r,i,o;const n=((r=this.containingElement)==null?void 0:r.getRootNode())instanceof ShadowRoot?(o=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:o.activeElement:document.activeElement;(!this.containingElement||(n==null?void 0:n.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{const t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{const t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([" ","Enter"].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}const t=this.getMenu();if(t){const r=t.getAllItems(),i=r[0],o=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(e.key==="ArrowDown"||e.key==="Home")&&(t.setCurrentItem(i),i.focus()),(e.key==="ArrowUp"||e.key==="End")&&(t.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(e){e.key===" "&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(i=>v1(i).start);let r;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":r=t.button;break;default:r=t}r.setAttribute("aria-haspopup","true"),r.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,et(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,et(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await $e(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:e,options:t}=de(this,"dropdown.show",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await $e(this);const{keyframes:e,options:t}=de(this,"dropdown.hide",{dir:this.localize.dir()});await be(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return C`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${D(this.sync?this.sync:void 0)}
        class=${j({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Fe.styles=[V,$1];Fe.dependencies={"sl-popup":J};a([N(".dropdown")],Fe.prototype,"popup",2);a([N(".dropdown__trigger")],Fe.prototype,"trigger",2);a([N(".dropdown__panel")],Fe.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],Fe.prototype,"open",2);a([d({reflect:!0})],Fe.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],Fe.prototype,"disabled",2);a([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Fe.prototype,"stayOpenOnSelect",2);a([d({attribute:!1})],Fe.prototype,"containingElement",2);a([d({type:Number})],Fe.prototype,"distance",2);a([d({type:Number})],Fe.prototype,"skidding",2);a([d({type:Boolean})],Fe.prototype,"hoist",2);a([d({reflect:!0})],Fe.prototype,"sync",2);a([P("open",{waitUntilFirstUpdate:!0})],Fe.prototype,"handleOpenChange",1);te("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});te("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var z1="sl-dropdown";Fe.define("sl-dropdown");var E1=F({tagName:z1,elementClass:Fe,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlDropdown"}),A1=E1,T1=B`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function ph(e){return e.charAt(0).toUpperCase()+e.slice(1)}var pt=class extends R{constructor(){super(...arguments),this.hasSlotController=new it(this,"footer"),this.localize=new Z(this),this.modal=new pm(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),en(this)))}disconnectedCallback(){var e;super.disconnectedCallback(),tn(this),(e=this.closeWatcher)==null||e.destroy()}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const r=de(this,"drawer.denyClose",{dir:this.localize.dir()});be(this.panel,r.keyframes,r.options);return}this.hide()}addOpenListeners(){var e;"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener("keydown",this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),en(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([$e(this.drawer),$e(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=de(this,`drawer.show${ph(this.placement)}`,{dir:this.localize.dir()}),r=de(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([be(this.panel,t.keyframes,t.options),be(this.overlay,r.keyframes,r.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),tn(this)),await Promise.all([$e(this.drawer),$e(this.overlay)]);const e=de(this,`drawer.hide${ph(this.placement)}`,{dir:this.localize.dir()}),t=de(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([be(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),be(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const r=this.originalTrigger;typeof(r==null?void 0:r.focus)=="function"&&setTimeout(()=>r.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),en(this)),this.open&&this.contained&&(this.modal.deactivate(),tn(this))}async show(){if(!this.open)return this.open=!0,et(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,et(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${j({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${D(this.noHeader?this.label:void 0)}
          aria-labelledby=${D(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":C`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};pt.styles=[V,T1];pt.dependencies={"sl-icon-button":Ee};a([N(".drawer")],pt.prototype,"drawer",2);a([N(".drawer__panel")],pt.prototype,"panel",2);a([N(".drawer__overlay")],pt.prototype,"overlay",2);a([d({type:Boolean,reflect:!0})],pt.prototype,"open",2);a([d({reflect:!0})],pt.prototype,"label",2);a([d({reflect:!0})],pt.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],pt.prototype,"contained",2);a([d({attribute:"no-header",type:Boolean,reflect:!0})],pt.prototype,"noHeader",2);a([P("open",{waitUntilFirstUpdate:!0})],pt.prototype,"handleOpenChange",1);a([P("contained",{waitUntilFirstUpdate:!0})],pt.prototype,"handleNoModalChange",1);te("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});te("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});te("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});te("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});te("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});te("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});te("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});te("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});te("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});te("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});te("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var P1="sl-drawer";pt.define("sl-drawer");F({tagName:P1,elementClass:pt,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide",onSlInitialFocus:"sl-initial-focus",onSlRequestClose:"sl-request-close"},displayName:"SlDrawer"});var Mn=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const e=["","kilo","mega","giga","tera"],t=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?e:t,i=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),o=r[i]+this.unit,n=parseFloat((this.value/Math.pow(1e3,i)).toPrecision(3));return this.localize.number(n,{style:"unit",unit:o,unitDisplay:this.display})}};a([d({type:Number})],Mn.prototype,"value",2);a([d()],Mn.prototype,"unit",2);a([d()],Mn.prototype,"display",2);var N1="sl-format-bytes";Mn.define("sl-format-bytes");F({tagName:N1,elementClass:Mn,react:M,events:{},displayName:"SlFormatBytes"});var Rt=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};a([d({type:Number})],Rt.prototype,"value",2);a([d()],Rt.prototype,"type",2);a([d({attribute:"no-grouping",type:Boolean})],Rt.prototype,"noGrouping",2);a([d()],Rt.prototype,"currency",2);a([d({attribute:"currency-display"})],Rt.prototype,"currencyDisplay",2);a([d({attribute:"minimum-integer-digits",type:Number})],Rt.prototype,"minimumIntegerDigits",2);a([d({attribute:"minimum-fraction-digits",type:Number})],Rt.prototype,"minimumFractionDigits",2);a([d({attribute:"maximum-fraction-digits",type:Number})],Rt.prototype,"maximumFractionDigits",2);a([d({attribute:"minimum-significant-digits",type:Number})],Rt.prototype,"minimumSignificantDigits",2);a([d({attribute:"maximum-significant-digits",type:Number})],Rt.prototype,"maximumSignificantDigits",2);var L1="sl-format-number";Rt.define("sl-format-number");F({tagName:L1,elementClass:Rt,react:M,events:{},displayName:"SlFormatNumber"});var ft=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.date=new Date,this.hourFormat="auto"}render(){const e=new Date(this.date),t=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(e.getMilliseconds()))return C`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};a([d()],ft.prototype,"date",2);a([d()],ft.prototype,"weekday",2);a([d()],ft.prototype,"era",2);a([d()],ft.prototype,"year",2);a([d()],ft.prototype,"month",2);a([d()],ft.prototype,"day",2);a([d()],ft.prototype,"hour",2);a([d()],ft.prototype,"minute",2);a([d()],ft.prototype,"second",2);a([d({attribute:"time-zone-name"})],ft.prototype,"timeZoneName",2);a([d({attribute:"time-zone"})],ft.prototype,"timeZone",2);a([d({attribute:"hour-format"})],ft.prototype,"hourFormat",2);var I1="sl-format-date";ft.define("sl-format-date");F({tagName:I1,elementClass:ft,react:M,events:{},displayName:"SlFormatDate"});var ee=class extends R{constructor(){super(...arguments),this.formControlController=new wr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new it(this,"[default]","prefix","suffix"),this.localize=new Z(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ka}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?ea`a`:ea`button`;return Jo`
      <${t}
        part="base"
        class=${j({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${D(e?void 0:this.disabled)}
        type=${D(e?void 0:this.type)}
        title=${this.title}
        name=${D(e?void 0:this.name)}
        value=${D(e?void 0:this.value)}
        href=${D(e?this.href:void 0)}
        target=${D(e?this.target:void 0)}
        download=${D(e?this.download:void 0)}
        rel=${D(e?this.rel:void 0)}
        role=${D(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Jo` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Jo`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};ee.styles=[V,lm];ee.dependencies={"sl-icon":ne,"sl-spinner":fo};a([N(".button")],ee.prototype,"button",2);a([U()],ee.prototype,"hasFocus",2);a([U()],ee.prototype,"invalid",2);a([d()],ee.prototype,"title",2);a([d({reflect:!0})],ee.prototype,"variant",2);a([d({reflect:!0})],ee.prototype,"size",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"caret",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"outline",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"pill",2);a([d({type:Boolean,reflect:!0})],ee.prototype,"circle",2);a([d()],ee.prototype,"type",2);a([d()],ee.prototype,"name",2);a([d()],ee.prototype,"value",2);a([d()],ee.prototype,"href",2);a([d()],ee.prototype,"target",2);a([d()],ee.prototype,"rel",2);a([d()],ee.prototype,"download",2);a([d()],ee.prototype,"form",2);a([d({attribute:"formaction"})],ee.prototype,"formAction",2);a([d({attribute:"formenctype"})],ee.prototype,"formEnctype",2);a([d({attribute:"formmethod"})],ee.prototype,"formMethod",2);a([d({attribute:"formnovalidate",type:Boolean})],ee.prototype,"formNoValidate",2);a([d({attribute:"formtarget"})],ee.prototype,"formTarget",2);a([P("disabled",{waitUntilFirstUpdate:!0})],ee.prototype,"handleDisabledChange",1);var O1="sl-button";ee.define("sl-button");var D1=F({tagName:O1,elementClass:ee,react:M,events:{onSlBlur:"sl-blur",onSlFocus:"sl-focus",onSlInvalid:"sl-invalid"},displayName:"SlButton"}),xi=D1,R1="sl-button-group";Jr.define("sl-button-group");F({tagName:R1,elementClass:Jr,react:M,events:{},displayName:"SlButtonGroup"});var M1=B`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Au=class extends R{constructor(){super(...arguments),this.hasSlotController=new it(this,"footer","header","image")}render(){return C`
      <div
        part="base"
        class=${j({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Au.styles=[V,M1];var F1="sl-card";Au.define("sl-card");var B1=F({tagName:F1,elementClass:Au,react:M,events:{},displayName:"SlCard"}),V1=B1,j1=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},U1=B`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*H1(e,t){if(e!==void 0){let r=0;for(const i of e)yield t(i,r++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*W1(e,t,r=1){const i=t===void 0?0:e;t??(t=e);for(let o=i;r>0?o<t:t<o;o+=r)yield o}var K1=(e,t)=>{let r=0;return function(...i){window.clearTimeout(r),r=window.setTimeout(()=>{e.call(this,...i)},t)}},fh=(e,t,r)=>{const i=e[t];e[t]=function(...o){i.call(this,...o),r.call(this,i,...o)}},q1="onscrollend"in window;if(!q1){const e=new Set,t=new WeakMap,r=o=>{for(const n of o.changedTouches)e.add(n.identifier)},i=o=>{for(const n of o.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),fh(EventTarget.prototype,"addEventListener",function(o,n){if(n!=="scrollend")return;const s=K1(()=>{e.size?s():this.dispatchEvent(new Event("scrollend"))},100);o.call(this,"scroll",s,{passive:!0}),t.set(this,s)}),fh(EventTarget.prototype,"removeEventListener",function(o,n){if(n!=="scrollend")return;const s=t.get(this);s&&o.call(this,"scroll",s,{passive:!0})})}var ge=class extends R{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new j1(this,()=>this.next()),this.localize=new Z(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const i=e.scrollLeft,o=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:r,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==i||r!==o)&&(e.scrollTo({left:i,top:o,behavior:fc()?"auto":"smooth"}),await et(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(r=>[...r.addedNodes,...r.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:r,loop:i}=this,o=i?e/r:(e-t)/r+1;return Math.ceil(o)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,r=this.localize.dir()==="rtl",i=t.closest('[part~="pagination-item"]')!==null,o=e.key==="ArrowDown"||!r&&e.key==="ArrowRight"||r&&e.key==="ArrowLeft",n=e.key==="ArrowUp"||!r&&e.key==="ArrowLeft"||r&&e.key==="ArrowRight";e.preventDefault(),n&&this.previous(),o&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var s;const c=(s=this.shadowRoot)==null?void 0:s.querySelector('[part~="pagination-item--active"]');c&&c.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}synchronizeSlides(){const e=new IntersectionObserver(t=>{e.disconnect();for(const i of t){const o=i.target;o.toggleAttribute("inert",!i.isIntersecting),o.classList.toggle("--in-view",i.isIntersecting),o.setAttribute("aria-hidden",i.isIntersecting?"false":"true")}const r=t.find(i=>i.isIntersecting);if(r)if(this.loop&&r.target.hasAttribute("data-clone")){const i=Number(r.target.getAttribute("data-clone"));this.goToSlide(i,"instant")}else{const o=this.getSlides().indexOf(r.target);this.activeSlide=Math.ceil(o/this.slidesPerMove)*this.slidesPerMove}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.synchronizeSlides(),this.scrolling=!1)}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",t+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.synchronizeSlides(),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,r=e.slice(-t),i=e.slice(0,t);r.reverse().forEach((o,n)=>{const s=o.cloneNode(!0);s.setAttribute("data-clone",String(e.length-n-1)),this.prepend(s)}),i.forEach((o,n)=>{const s=o.cloneNode(!0);s.setAttribute("data-clone",String(n)),this.append(s)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,r)=>{t.classList.toggle("--is-active",r===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((r,i)=>{(i+t)%t===0?r.style.removeProperty("scroll-snap-align"):r.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:r,loop:i}=this,o=this.getSlides(),n=this.getSlides({excludeClones:!1});if(!o.length)return;const s=i?(e+o.length)%o.length:Se(e,0,o.length-1);this.activeSlide=s;const c=Se(e+(i?r:0),0,n.length-1),l=n[c];this.scrollToSlide(l,fc()?"auto":t)}scrollToSlide(e,t="smooth"){const r=this.scrollContainer,i=r.getBoundingClientRect(),o=e.getBoundingClientRect(),n=o.left-i.left,s=o.top-i.top;r.scrollTo({left:n+r.scrollLeft,top:s+r.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,r=this.getPageCount(),i=this.getCurrentPage(),o=this.canScrollPrev(),n=this.canScrollNext(),s=this.localize.dir()==="ltr";return C`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${j({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?C`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${j({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!o})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${o?"false":"true"}"
                  @click=${o?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${s?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${j({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!n})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${n?"false":"true"}"
                  @click=${n?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${s?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?C`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${H1(W1(r),c=>{const l=c===i;return C`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${j({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",c+1,r)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(c*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};ge.styles=[V,U1];ge.dependencies={"sl-icon":ne};a([d({type:Boolean,reflect:!0})],ge.prototype,"loop",2);a([d({type:Boolean,reflect:!0})],ge.prototype,"navigation",2);a([d({type:Boolean,reflect:!0})],ge.prototype,"pagination",2);a([d({type:Boolean,reflect:!0})],ge.prototype,"autoplay",2);a([d({type:Number,attribute:"autoplay-interval"})],ge.prototype,"autoplayInterval",2);a([d({type:Number,attribute:"slides-per-page"})],ge.prototype,"slidesPerPage",2);a([d({type:Number,attribute:"slides-per-move"})],ge.prototype,"slidesPerMove",2);a([d()],ge.prototype,"orientation",2);a([d({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],ge.prototype,"mouseDragging",2);a([N(".carousel__slides")],ge.prototype,"scrollContainer",2);a([N(".carousel__pagination")],ge.prototype,"paginationContainer",2);a([U()],ge.prototype,"activeSlide",2);a([U()],ge.prototype,"scrolling",2);a([U()],ge.prototype,"dragging",2);a([wu({passive:!0})],ge.prototype,"handleScroll",1);a([P("loop",{waitUntilFirstUpdate:!0}),P("slidesPerPage",{waitUntilFirstUpdate:!0})],ge.prototype,"initializeSlides",1);a([P("activeSlide")],ge.prototype,"handelSlideChange",1);a([P("slidesPerMove")],ge.prototype,"updateSlidesSnap",1);a([P("autoplay")],ge.prototype,"handleAutoplayChange",1);var Y1="sl-carousel";ge.define("sl-carousel");var X1=F({tagName:Y1,elementClass:ge,react:M,events:{onSlSlideChange:"sl-slide-change"},displayName:"SlCarousel"}),fm=X1,Q1=B`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Tu=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return C` <slot></slot> `}};Tu.styles=[V,Q1];var G1="sl-carousel-item";Tu.define("sl-carousel-item");var Z1=F({tagName:G1,elementClass:Tu,react:M,events:{},displayName:"SlCarouselItem"}),$s=Z1,J1="sl-checkbox";ze.define("sl-checkbox");F({tagName:J1,elementClass:ze,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlCheckbox"});var ew=B`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function Ue(e,t){tw(e)&&(e="100%");const r=rw(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(t===360?e=(e<0?e%t+t:e%t)/parseFloat(String(t)):e=e%t/parseFloat(String(t)),e)}function ls(e){return Math.min(1,Math.max(0,e))}function tw(e){return typeof e=="string"&&e.indexOf(".")!==-1&&parseFloat(e)===1}function rw(e){return typeof e=="string"&&e.indexOf("%")!==-1}function mm(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function cs(e){return Number(e)<=1?`${Number(e)*100}%`:e}function di(e){return e.length===1?"0"+e:String(e)}function iw(e,t,r){return{r:Ue(e,255)*255,g:Ue(t,255)*255,b:Ue(r,255)*255}}function mh(e,t,r){e=Ue(e,255),t=Ue(t,255),r=Ue(r,255);const i=Math.max(e,t,r),o=Math.min(e,t,r);let n=0,s=0;const c=(i+o)/2;if(i===o)s=0,n=0;else{const l=i-o;switch(s=c>.5?l/(2-i-o):l/(i+o),i){case e:n=(t-r)/l+(t<r?6:0);break;case t:n=(r-e)/l+2;break;case r:n=(e-t)/l+4;break}n/=6}return{h:n,s,l:c}}function pl(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*(6*r):r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function ow(e,t,r){let i,o,n;if(e=Ue(e,360),t=Ue(t,100),r=Ue(r,100),t===0)o=r,n=r,i=r;else{const s=r<.5?r*(1+t):r+t-r*t,c=2*r-s;i=pl(c,s,e+1/3),o=pl(c,s,e),n=pl(c,s,e-1/3)}return{r:i*255,g:o*255,b:n*255}}function gh(e,t,r){e=Ue(e,255),t=Ue(t,255),r=Ue(r,255);const i=Math.max(e,t,r),o=Math.min(e,t,r);let n=0;const s=i,c=i-o,l=i===0?0:c/i;if(i===o)n=0;else{switch(i){case e:n=(t-r)/c+(t<r?6:0);break;case t:n=(r-e)/c+2;break;case r:n=(e-t)/c+4;break}n/=6}return{h:n,s:l,v:s}}function nw(e,t,r){e=Ue(e,360)*6,t=Ue(t,100),r=Ue(r,100);const i=Math.floor(e),o=e-i,n=r*(1-t),s=r*(1-o*t),c=r*(1-(1-o)*t),l=i%6,u=[r,s,n,n,c,r][l],m=[c,r,r,s,n,n][l],h=[n,n,c,r,r,s][l];return{r:u*255,g:m*255,b:h*255}}function vh(e,t,r,i){const o=[di(Math.round(e).toString(16)),di(Math.round(t).toString(16)),di(Math.round(r).toString(16))];return i&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function sw(e,t,r,i,o){const n=[di(Math.round(e).toString(16)),di(Math.round(t).toString(16)),di(Math.round(r).toString(16)),di(aw(i))];return o&&n[0].startsWith(n[0].charAt(1))&&n[1].startsWith(n[1].charAt(1))&&n[2].startsWith(n[2].charAt(1))&&n[3].startsWith(n[3].charAt(1))?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0)+n[3].charAt(0):n.join("")}function aw(e){return Math.round(parseFloat(e)*255).toString(16)}function yh(e){return gt(e)/255}function gt(e){return parseInt(e,16)}function lw(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const xc={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function cw(e){let t={r:0,g:0,b:0},r=1,i=null,o=null,n=null,s=!1,c=!1;return typeof e=="string"&&(e=hw(e)),typeof e=="object"&&(ar(e.r)&&ar(e.g)&&ar(e.b)?(t=iw(e.r,e.g,e.b),s=!0,c=String(e.r).substr(-1)==="%"?"prgb":"rgb"):ar(e.h)&&ar(e.s)&&ar(e.v)?(i=cs(e.s),o=cs(e.v),t=nw(e.h,i,o),s=!0,c="hsv"):ar(e.h)&&ar(e.s)&&ar(e.l)&&(i=cs(e.s),n=cs(e.l),t=ow(e.h,i,n),s=!0,c="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(r=e.a)),r=mm(r),{ok:s,format:e.format||c,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}const uw="[-\\+]?\\d+%?",dw="[-\\+]?\\d*\\.\\d+%?",Nr="(?:"+dw+")|(?:"+uw+")",fl="[\\s|\\(]+("+Nr+")[,|\\s]+("+Nr+")[,|\\s]+("+Nr+")\\s*\\)?",ml="[\\s|\\(]+("+Nr+")[,|\\s]+("+Nr+")[,|\\s]+("+Nr+")[,|\\s]+("+Nr+")\\s*\\)?",Bt={CSS_UNIT:new RegExp(Nr),rgb:new RegExp("rgb"+fl),rgba:new RegExp("rgba"+ml),hsl:new RegExp("hsl"+fl),hsla:new RegExp("hsla"+ml),hsv:new RegExp("hsv"+fl),hsva:new RegExp("hsva"+ml),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function hw(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(xc[e])e=xc[e],t=!0;else if(e==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let r=Bt.rgb.exec(e);return r?{r:r[1],g:r[2],b:r[3]}:(r=Bt.rgba.exec(e),r?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=Bt.hsl.exec(e),r?{h:r[1],s:r[2],l:r[3]}:(r=Bt.hsla.exec(e),r?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=Bt.hsv.exec(e),r?{h:r[1],s:r[2],v:r[3]}:(r=Bt.hsva.exec(e),r?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=Bt.hex8.exec(e),r?{r:gt(r[1]),g:gt(r[2]),b:gt(r[3]),a:yh(r[4]),format:t?"name":"hex8"}:(r=Bt.hex6.exec(e),r?{r:gt(r[1]),g:gt(r[2]),b:gt(r[3]),format:t?"name":"hex"}:(r=Bt.hex4.exec(e),r?{r:gt(r[1]+r[1]),g:gt(r[2]+r[2]),b:gt(r[3]+r[3]),a:yh(r[4]+r[4]),format:t?"name":"hex8"}:(r=Bt.hex3.exec(e),r?{r:gt(r[1]+r[1]),g:gt(r[2]+r[2]),b:gt(r[3]+r[3]),format:t?"name":"hex"}:!1)))))))))}function ar(e){return!!Bt.CSS_UNIT.exec(String(e))}class ve{constructor(t="",r={}){if(t instanceof ve)return t;typeof t=="number"&&(t=lw(t)),this.originalInput=t;const i=cw(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=r.format??i.format,this.gradientType=r.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let r,i,o;const n=t.r/255,s=t.g/255,c=t.b/255;return n<=.03928?r=n/12.92:r=Math.pow((n+.055)/1.055,2.4),s<=.03928?i=s/12.92:i=Math.pow((s+.055)/1.055,2.4),c<=.03928?o=c/12.92:o=Math.pow((c+.055)/1.055,2.4),.2126*r+.7152*i+.0722*o}getAlpha(){return this.a}setAlpha(t){return this.a=mm(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=gh(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=gh(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.v*100);return this.a===1?`hsv(${r}, ${i}%, ${o}%)`:`hsva(${r}, ${i}%, ${o}%, ${this.roundA})`}toHsl(){const t=mh(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=mh(this.r,this.g,this.b),r=Math.round(t.h*360),i=Math.round(t.s*100),o=Math.round(t.l*100);return this.a===1?`hsl(${r}, ${i}%, ${o}%)`:`hsla(${r}, ${i}%, ${o}%, ${this.roundA})`}toHex(t=!1){return vh(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return sw(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),r=Math.round(this.g),i=Math.round(this.b);return this.a===1?`rgb(${t}, ${r}, ${i})`:`rgba(${t}, ${r}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=r=>`${Math.round(Ue(r,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=r=>Math.round(Ue(r,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+vh(this.r,this.g,this.b,!1);for(const[r,i]of Object.entries(xc))if(t===i)return r;return!1}toString(t){const r=!!t;t=t??this.format;let i=!1;const o=this.a<1&&this.a>=0;return!r&&o&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(i=this.toRgbString()),t==="prgb"&&(i=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(i=this.toHexString()),t==="hex3"&&(i=this.toHexString(!0)),t==="hex4"&&(i=this.toHex8String(!0)),t==="hex8"&&(i=this.toHex8String()),t==="name"&&(i=this.toName()),t==="hsl"&&(i=this.toHslString()),t==="hsv"&&(i=this.toHsvString()),i||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new ve(this.toString())}lighten(t=10){const r=this.toHsl();return r.l+=t/100,r.l=ls(r.l),new ve(r)}brighten(t=10){const r=this.toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),new ve(r)}darken(t=10){const r=this.toHsl();return r.l-=t/100,r.l=ls(r.l),new ve(r)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const r=this.toHsl();return r.s-=t/100,r.s=ls(r.s),new ve(r)}saturate(t=10){const r=this.toHsl();return r.s+=t/100,r.s=ls(r.s),new ve(r)}greyscale(){return this.desaturate(100)}spin(t){const r=this.toHsl(),i=(r.h+t)%360;return r.h=i<0?360+i:i,new ve(r)}mix(t,r=50){const i=this.toRgb(),o=new ve(t).toRgb(),n=r/100,s={r:(o.r-i.r)*n+i.r,g:(o.g-i.g)*n+i.g,b:(o.b-i.b)*n+i.b,a:(o.a-i.a)*n+i.a};return new ve(s)}analogous(t=6,r=30){const i=this.toHsl(),o=360/r,n=[this];for(i.h=(i.h-(o*t>>1)+720)%360;--t;)i.h=(i.h+o)%360,n.push(new ve(i));return n}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new ve(t)}monochromatic(t=6){const r=this.toHsv(),{h:i}=r,{s:o}=r;let{v:n}=r;const s=[],c=1/t;for(;t--;)s.push(new ve({h:i,s:o,v:n})),n=(n+c)%1;return s}splitcomplement(){const t=this.toHsl(),{h:r}=t;return[this,new ve({h:(r+72)%360,s:t.s,l:t.l}),new ve({h:(r+216)%360,s:t.s,l:t.l})]}onBackground(t){const r=this.toRgb(),i=new ve(t).toRgb(),o=r.a+i.a*(1-r.a);return new ve({r:(r.r*r.a+i.r*i.a*(1-r.a))/o,g:(r.g*r.a+i.g*i.a*(1-r.a))/o,b:(r.b*r.a+i.b*i.a*(1-r.a))/o,a:o})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const r=this.toHsl(),{h:i}=r,o=[this],n=360/t;for(let s=1;s<t;s++)o.push(new ve({h:(i+s*n)%360,s:r.s,l:r.l}));return o}equals(t){return this.toRgbString()===new ve(t).toRgbString()}}var bh="EyeDropper"in window,X=class extends R{constructor(){super(),this.formControlController=new wr(this),this.isSafeValue=!1,this.localize=new Z(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const e=["hex","rgb","hsl","hsv"],t=(e.indexOf(this.format)+1)%e.length;this.format=e[t],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value,n=this.value;r.focus(),e.preventDefault(),Zo(t,{onMove:s=>{this.alpha=Se(s/i*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleHueDrag(e){const t=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=t.querySelector(".color-picker__slider-handle"),{width:i}=t.getBoundingClientRect();let o=this.value,n=this.value;r.focus(),e.preventDefault(),Zo(t,{onMove:s=>{this.hue=Se(s/i*360,0,360),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:e})}handleGridDrag(e){const t=this.shadowRoot.querySelector(".color-picker__grid"),r=t.querySelector(".color-picker__grid-handle"),{width:i,height:o}=t.getBoundingClientRect();let n=this.value,s=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,Zo(t,{onMove:(c,l)=>{this.saturation=Se(c/i*100,0,100),this.brightness=Se(100-l/o*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==n&&(n=this.value,this.emit("sl-change"))},initialEvent:e})}handleAlphaKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.alpha=Se(this.alpha-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.alpha=Se(this.alpha+t,0,100),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.hue=Se(this.hue-t,0,360),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.hue=Se(this.hue+t,0,360),this.syncValues()),e.key==="Home"&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key==="End"&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(e){const t=e.shiftKey?10:1,r=this.value;e.key==="ArrowLeft"&&(e.preventDefault(),this.saturation=Se(this.saturation-t,0,100),this.syncValues()),e.key==="ArrowRight"&&(e.preventDefault(),this.saturation=Se(this.saturation+t,0,100),this.syncValues()),e.key==="ArrowUp"&&(e.preventDefault(),this.brightness=Se(this.brightness+t,0,100),this.syncValues()),e.key==="ArrowDown"&&(e.preventDefault(),this.brightness=Se(this.brightness-t,0,100),this.syncValues()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(e){const t=e.target,r=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value="",this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key==="Enter"){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){const t=new ve(e);if(!t.isValid)return null;const r=t.toHsl(),i={h:r.h,s:r.s*100,l:r.l*100,a:r.a},o=t.toRgb(),n=t.toHexString(),s=t.toHex8String(),c=t.toHsv(),l={h:c.h,s:c.s*100,v:c.v*100,a:c.a};return{hsl:{h:i.h,s:i.s,l:i.l,string:this.setLetterCase(`hsl(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%)`)},hsla:{h:i.h,s:i.s,l:i.l,a:i.a,string:this.setLetterCase(`hsla(${Math.round(i.h)}, ${Math.round(i.s)}%, ${Math.round(i.l)}%, ${i.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(n),hexa:this.setLetterCase(s)}}setColor(e){const t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e!="string"?"":this.uppercase?e.toUpperCase():e.toLowerCase()}async syncValues(){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format==="hsl"?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!bh)return;new EyeDropper().open().then(t=>{const r=this.value;this.setColor(t.sRGBHex),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(e){const t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(e,t,r,i=100){const o=new ve(`hsva(${e}, ${t}%, ${r}%, ${i/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const r=this.parseColor(t);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=e??""}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){var e;const t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),(e=this.dropdown)!=null&&e.open&&this.dropdown.hide()}getFormattedValue(e="hex"){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return"";switch(e){case"hex":return t.hex;case"hexa":return t.hexa;case"rgb":return t.rgb.string;case"rgba":return t.rgba.string;case"hsl":return t.hsl.string;case"hsla":return t.hsla.string;case"hsv":return t.hsv.string;case"hsva":return t.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.saturation,t=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(o=>o.trim()!==""),i=C`
      <div
        part="base"
        class=${j({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?C`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ot({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${j({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ot({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${D(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${ot({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${D(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?C`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ot({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${ot({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${D(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${ot({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":C`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${bh?C`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${r.length>0?C`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(o=>{const n=this.parseColor(o);return n?C`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${D(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${o}
                      @click=${()=>this.selectSwatch(o)}
                      @keydown=${s=>!this.disabled&&s.key==="Enter"&&this.setColor(n.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${ot({backgroundColor:n.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${o}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?i:C`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${j({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${ot({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${i}
      </sl-dropdown>
    `}};X.styles=[V,ew];X.dependencies={"sl-button-group":Jr,"sl-button":ee,"sl-dropdown":Fe,"sl-icon":ne,"sl-input":H,"sl-visually-hidden":Sa};a([N('[part~="base"]')],X.prototype,"base",2);a([N('[part~="input"]')],X.prototype,"input",2);a([N(".color-dropdown")],X.prototype,"dropdown",2);a([N('[part~="preview"]')],X.prototype,"previewButton",2);a([N('[part~="trigger"]')],X.prototype,"trigger",2);a([U()],X.prototype,"hasFocus",2);a([U()],X.prototype,"isDraggingGridHandle",2);a([U()],X.prototype,"isEmpty",2);a([U()],X.prototype,"inputValue",2);a([U()],X.prototype,"hue",2);a([U()],X.prototype,"saturation",2);a([U()],X.prototype,"brightness",2);a([U()],X.prototype,"alpha",2);a([d()],X.prototype,"value",2);a([Ci()],X.prototype,"defaultValue",2);a([d()],X.prototype,"label",2);a([d()],X.prototype,"format",2);a([d({type:Boolean,reflect:!0})],X.prototype,"inline",2);a([d({reflect:!0})],X.prototype,"size",2);a([d({attribute:"no-format-toggle",type:Boolean})],X.prototype,"noFormatToggle",2);a([d()],X.prototype,"name",2);a([d({type:Boolean,reflect:!0})],X.prototype,"disabled",2);a([d({type:Boolean})],X.prototype,"hoist",2);a([d({type:Boolean})],X.prototype,"opacity",2);a([d({type:Boolean})],X.prototype,"uppercase",2);a([d()],X.prototype,"swatches",2);a([d({reflect:!0})],X.prototype,"form",2);a([d({type:Boolean,reflect:!0})],X.prototype,"required",2);a([P("format",{waitUntilFirstUpdate:!0})],X.prototype,"handleFormatChange",1);a([P("opacity",{waitUntilFirstUpdate:!0})],X.prototype,"handleOpacityChange",1);a([P("value")],X.prototype,"handleValueChange",1);var pw="sl-color-picker";X.define("sl-color-picker");F({tagName:pw,elementClass:X,react:M,events:{onSlBlur:"sl-blur",onSlChange:"sl-change",onSlFocus:"sl-focus",onSlInput:"sl-input",onSlInvalid:"sl-invalid"},displayName:"SlColorPicker"});var fw=B`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Le=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),r=this.from.includes("."),i=this.from.includes("[")&&this.from.includes("]");let o=this.from,n="";r?[o,n]=this.from.trim().split("."):i&&([o,n]=this.from.trim().replace(/\]$/,"").split("["));const s="getElementById"in t?t.getElementById(o):null;s?i?e=s.getAttribute(n)||"":r?e=s[n]||"":e=s.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),i=this.errorLabel||this.localize.term("error"),o=e==="success"?this.successIcon:this.errorIcon,n=de(this,"copy.in",{dir:"ltr"}),s=de(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?r:i,await this.copyIcon.animate(s.keyframes,s.options).finished,this.copyIcon.hidden=!0,this.status=e,o.hidden=!1,await o.animate(n.keyframes,n.options).finished,setTimeout(async()=>{await o.animate(s.keyframes,s.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(n.keyframes,n.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return C`
      <sl-tooltip
        class=${j({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Le.styles=[V,fw];Le.dependencies={"sl-icon":ne,"sl-tooltip":Ne};a([N('slot[name="copy-icon"]')],Le.prototype,"copyIcon",2);a([N('slot[name="success-icon"]')],Le.prototype,"successIcon",2);a([N('slot[name="error-icon"]')],Le.prototype,"errorIcon",2);a([N("sl-tooltip")],Le.prototype,"tooltip",2);a([U()],Le.prototype,"isCopying",2);a([U()],Le.prototype,"status",2);a([d()],Le.prototype,"value",2);a([d()],Le.prototype,"from",2);a([d({type:Boolean,reflect:!0})],Le.prototype,"disabled",2);a([d({attribute:"copy-label"})],Le.prototype,"copyLabel",2);a([d({attribute:"success-label"})],Le.prototype,"successLabel",2);a([d({attribute:"error-label"})],Le.prototype,"errorLabel",2);a([d({attribute:"feedback-duration",type:Number})],Le.prototype,"feedbackDuration",2);a([d({attribute:"tooltip-placement"})],Le.prototype,"tooltipPlacement",2);a([d({type:Boolean})],Le.prototype,"hoist",2);te("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});te("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});var mw="sl-copy-button";Le.define("sl-copy-button");F({tagName:mw,elementClass:Le,react:M,events:{onSlCopy:"sl-copy",onSlError:"sl-error"},displayName:"SlCopyButton"});var gw=B`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Pi=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),Zt=class extends R{constructor(){super(...arguments),this.hasSlotController=new it(this,"icon","suffix"),this.localize=new Z(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await $e(this.base),this.base.hidden=!1;const{keyframes:e,options:t}=de(this,"alert.show",{dir:this.localize.dir()});await be(this.base,e,t),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await $e(this.base);const{keyframes:e,options:t}=de(this,"alert.hide",{dir:this.localize.dir()});await be(this.base,e,t),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,et(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,et(this,"sl-after-hide")}async toast(){return new Promise(e=>{Pi.parentElement===null&&document.body.append(Pi),Pi.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Pi.removeChild(this),e(),Pi.querySelector("sl-alert")===null&&Pi.remove()},{once:!0})})}render(){return C`
      <div
        part="base"
        class=${j({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?C`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};Zt.styles=[V,gw];Zt.dependencies={"sl-icon-button":Ee};a([N('[part~="base"]')],Zt.prototype,"base",2);a([d({type:Boolean,reflect:!0})],Zt.prototype,"open",2);a([d({type:Boolean,reflect:!0})],Zt.prototype,"closable",2);a([d({reflect:!0})],Zt.prototype,"variant",2);a([d({type:Number})],Zt.prototype,"duration",2);a([P("open",{waitUntilFirstUpdate:!0})],Zt.prototype,"handleOpenChange",1);a([P("duration")],Zt.prototype,"handleDurationChange",1);te("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});te("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});var vw="sl-alert";Zt.define("sl-alert");var yw=F({tagName:vw,elementClass:Zt,react:M,events:{onSlShow:"sl-show",onSlAfterShow:"sl-after-show",onSlHide:"sl-hide",onSlAfterHide:"sl-after-hide"},displayName:"SlAlert"}),bw=yw,ww=B`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Mt=class extends R{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const e=document.createElement("canvas"),{width:t,height:r}=this.animatedImage;e.width=t,e.height=r,e.getContext("2d").drawImage(this.animatedImage,0,0,t,r),this.frozenFrame=e.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return C`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?C`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};Mt.styles=[V,ww];Mt.dependencies={"sl-icon":ne};a([N(".animated-image__animated")],Mt.prototype,"animatedImage",2);a([U()],Mt.prototype,"frozenFrame",2);a([U()],Mt.prototype,"isLoaded",2);a([d()],Mt.prototype,"src",2);a([d()],Mt.prototype,"alt",2);a([d({type:Boolean,reflect:!0})],Mt.prototype,"play",2);a([P("play",{waitUntilFirstUpdate:!0})],Mt.prototype,"handlePlayChange",1);a([P("src")],Mt.prototype,"handleSrcChange",1);var _w="sl-animated-image";Mt.define("sl-animated-image");F({tagName:_w,elementClass:Mt,react:M,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlAnimatedImage"});const xw=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],kw=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Sw=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Cw=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],$w=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],zw=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ew=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Aw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Tw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Nw=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Lw=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Iw=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ow=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Dw=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Rw=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Mw=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Fw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Bw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Vw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],jw=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Uw=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Hw=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Ww=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Kw=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],qw=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],Yw=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],Xw=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],Qw=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],Gw=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],Zw=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],Jw=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],e_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],t_=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],r_=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],i_=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],o_=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],n_=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],s_=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],a_=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],l_=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],c_=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],u_=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],d_=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],h_=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],p_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],f_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],m_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],g_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],v_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],y_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],b_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],w_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],__=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],x_=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],k_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],S_=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],C_=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],$_=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],z_=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],E_=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],A_=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],T_=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],P_=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],N_=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],L_=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],I_=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],O_=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],D_=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],R_=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],M_=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],F_=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],B_=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],V_=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],j_=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],U_=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],H_=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],W_=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],K_=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],q_=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],Y_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],X_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],Q_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],G_=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],Z_=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],J_=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],ex=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],tx=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],rx=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],ix=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ox=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],nx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],sx=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ax=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],lx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],cx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],ux=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],dx=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},hx=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Ow,backInLeft:Dw,backInRight:Rw,backInUp:Mw,backOutDown:Fw,backOutLeft:Bw,backOutRight:Vw,backOutUp:jw,bounce:xw,bounceIn:Uw,bounceInDown:Hw,bounceInLeft:Ww,bounceInRight:Kw,bounceInUp:qw,bounceOut:Yw,bounceOutDown:Xw,bounceOutLeft:Qw,bounceOutRight:Gw,bounceOutUp:Zw,easings:gm,fadeIn:Jw,fadeInBottomLeft:e_,fadeInBottomRight:t_,fadeInDown:r_,fadeInDownBig:i_,fadeInLeft:o_,fadeInLeftBig:n_,fadeInRight:s_,fadeInRightBig:a_,fadeInTopLeft:l_,fadeInTopRight:c_,fadeInUp:u_,fadeInUpBig:d_,fadeOut:h_,fadeOutBottomLeft:p_,fadeOutBottomRight:f_,fadeOutDown:m_,fadeOutDownBig:g_,fadeOutLeft:v_,fadeOutLeftBig:y_,fadeOutRight:b_,fadeOutRightBig:w_,fadeOutTopLeft:__,fadeOutTopRight:x_,fadeOutUp:k_,fadeOutUpBig:S_,flash:kw,flip:C_,flipInX:$_,flipInY:z_,flipOutX:E_,flipOutY:A_,headShake:Sw,heartBeat:Cw,hinge:Z_,jackInTheBox:J_,jello:$w,lightSpeedInLeft:T_,lightSpeedInRight:P_,lightSpeedOutLeft:N_,lightSpeedOutRight:L_,pulse:zw,rollIn:ex,rollOut:tx,rotateIn:I_,rotateInDownLeft:O_,rotateInDownRight:D_,rotateInUpLeft:R_,rotateInUpRight:M_,rotateOut:F_,rotateOutDownLeft:B_,rotateOutDownRight:V_,rotateOutUpLeft:j_,rotateOutUpRight:U_,rubberBand:Ew,shake:Aw,shakeX:Tw,shakeY:Pw,slideInDown:H_,slideInLeft:W_,slideInRight:K_,slideInUp:q_,slideOutDown:Y_,slideOutLeft:X_,slideOutRight:Q_,slideOutUp:G_,swing:Nw,tada:Lw,wobble:Iw,zoomIn:rx,zoomInDown:ix,zoomInLeft:ox,zoomInRight:nx,zoomInUp:sx,zoomOut:ax,zoomOutDown:lx,zoomOutLeft:cx,zoomOutRight:ux,zoomOutUp:dx},Symbol.toStringTag,{value:"Module"}));var px=B`
  :host {
    display: contents;
  }
`,Ie=class extends R{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var e,t;return(t=(e=this.animation)==null?void 0:e.currentTime)!=null?t:0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var e,t;const r=(e=gm[this.easing])!=null?e:this.easing,i=(t=this.keyframes)!=null?t:hx[this.name],n=(await this.defaultSlot).assignedElements()[0];return!n||!i?!1:(this.destroyAnimation(),this.animation=n.animate(i,{delay:this.delay,direction:this.direction,duration:this.duration,easing:r,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return C` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ie.styles=[V,px];a([Iv("slot")],Ie.prototype,"defaultSlot",2);a([d()],Ie.prototype,"name",2);a([d({type:Boolean,reflect:!0})],Ie.prototype,"play",2);a([d({type:Number})],Ie.prototype,"delay",2);a([d()],Ie.prototype,"direction",2);a([d({type:Number})],Ie.prototype,"duration",2);a([d()],Ie.prototype,"easing",2);a([d({attribute:"end-delay",type:Number})],Ie.prototype,"endDelay",2);a([d()],Ie.prototype,"fill",2);a([d({type:Number})],Ie.prototype,"iterations",2);a([d({attribute:"iteration-start",type:Number})],Ie.prototype,"iterationStart",2);a([d({attribute:!1})],Ie.prototype,"keyframes",2);a([d({attribute:"playback-rate",type:Number})],Ie.prototype,"playbackRate",2);a([P(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Ie.prototype,"handleAnimationChange",1);a([P("play")],Ie.prototype,"handlePlayChange",1);a([P("playbackRate")],Ie.prototype,"handlePlaybackRateChange",1);var fx="sl-animation";Ie.define("sl-animation");F({tagName:fx,elementClass:Ie,react:M,events:{onSlCancel:"sl-cancel",onSlFinish:"sl-finish",onSlStart:"sl-start"},displayName:"SlAnimation"});var mx=B`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ai=class extends R{constructor(){super(...arguments),this.localize=new Z(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="sl-breadcrumb-item");e.forEach((t,r)=>{const i=t.querySelector('[slot="separator"]');i===null?t.append(this.getSeparator()):i.hasAttribute("data-default")&&i.replaceWith(this.getSeparator()),r===e.length-1?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),C`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ai.styles=[V,mx];Ai.dependencies={"sl-icon":ne};a([N("slot")],Ai.prototype,"defaultSlot",2);a([N('slot[name="separator"]')],Ai.prototype,"separatorSlot",2);a([d()],Ai.prototype,"label",2);var gx="sl-breadcrumb";Ai.define("sl-breadcrumb");F({tagName:gx,elementClass:Ai,react:M,events:{},displayName:"SlBreadcrumb"});var vx=B`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,bo=class extends R{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return C`
      <span
        part="base"
        class=${j({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};bo.styles=[V,vx];a([d({reflect:!0})],bo.prototype,"variant",2);a([d({type:Boolean,reflect:!0})],bo.prototype,"pill",2);a([d({type:Boolean,reflect:!0})],bo.prototype,"pulse",2);var yx="sl-badge";bo.define("sl-badge");var bx=F({tagName:yx,elementClass:bo,react:M,events:{},displayName:"SlBadge"}),wx=bx,_x=B`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Jt=class extends R{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){const e=C`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${()=>this.hasError=!0}"
      />
    `;let t=C``;return this.initials?t=C`<div part="initials" class="avatar__initials">${this.initials}</div>`:t=C`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,C`
      <div
        part="base"
        class=${j({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};Jt.styles=[V,_x];Jt.dependencies={"sl-icon":ne};a([U()],Jt.prototype,"hasError",2);a([d()],Jt.prototype,"image",2);a([d()],Jt.prototype,"label",2);a([d()],Jt.prototype,"initials",2);a([d()],Jt.prototype,"loading",2);a([d({reflect:!0})],Jt.prototype,"shape",2);a([P("image")],Jt.prototype,"handleImageChange",1);var xx="sl-avatar";Jt.define("sl-avatar");F({tagName:xx,elementClass:Jt,react:M,events:{},displayName:"SlAvatar"});var kx=B`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,wo=class extends R{constructor(){super(...arguments),this.hasSlotController=new it(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const e=!!this.href;return C`
      <div
        part="base"
        class=${j({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${e?C`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${D(this.target?this.target:void 0)}"
                rel=${D(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:C`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};wo.styles=[V,kx];a([d()],wo.prototype,"href",2);a([d()],wo.prototype,"target",2);a([d()],wo.prototype,"rel",2);var Sx="sl-breadcrumb-item";wo.define("sl-breadcrumb-item");F({tagName:Sx,elementClass:wo,react:M,events:{},displayName:"SlBreadcrumbItem"});function Cx({left:e,right:t}){return k.jsxs("div",{className:"banner",children:[k.jsxs("div",{className:"banner-holder",children:[k.jsx(oa,{className:"banner-icon",name:"4-square"}),e]}),k.jsx("div",{className:"banner-holder",children:t})]})}const jr=(e="Action pressed")=>{const t=new CustomEvent("showToast",{detail:{text:e},bubbles:!0,composed:!0});document.dispatchEvent(t)};function $x(){return k.jsxs("div",{className:"promo",children:[k.jsxs("div",{className:"promo-text",children:["Get our 4 Bill Pay 5G Contract ",k.jsx("b",{children:"half price"})," for 6 months!"]}),k.jsx(xi,{onClick:()=>jr("Buy Now Pressed"),pill:!0,className:"promo-button",children:"Buy Now"})]})}function us({text:e="Dropdown",menuItems:t=[]}){const r=Ht.useRef(null),i=(n,s)=>n==="hr"?k.jsx(C1,{},s):k.jsx(d1,{children:n},s),o=()=>{const n=r.current;n&&t.length>0&&(n.classList.contains("open")?n.classList.remove("open"):n.classList.add("open"))};return k.jsxs(A1,{onSlShow:o,onSlHide:o,children:[k.jsx(xi,{className:"custom-dropdown-button",slot:"trigger",caret:t.length>0,ref:r,children:e}),t.length>0&&k.jsx(Gb,{children:t.map((n,s)=>i(n,s))})]})}function zx(){return k.jsxs("div",{id:"header",children:[k.jsx(Cx,{left:k.jsxs(k.Fragment,{children:[k.jsx(us,{text:"Phones and Plans",menuItems:["Bill Pay Phones","Bill Pay Plans","Bill Pay SIM Only","hr","Prepay Phones","Prepay Plans","Prepay SIM Only","hr","Check for Upgrade","hr","Latest from App","Latest from Sam"]}),k.jsx(us,{text:"Accessories",menuItems:["Bill Pay Phones","Bill Pay Plans","Bill Pay SIM Only","hr","Bill Pay Phones","Bill Pay Plans","Bill Pay SIM Only","hr","Check for Upgrade","hr","Latest from App","Latest from Sam"]}),k.jsx(us,{text:"Accessories",menuItems:void 0})]}),right:k.jsxs(k.Fragment,{children:[k.jsx(us,{text:"Why Four?",menuItems:["Four Rewards","Refer a Friend","5G 4 All","Benefits","Flexible Options"]}),k.jsx(oa,{className:"app-banner-icon",name:"search-heart-fill",onClick:()=>jr("Search Pressed")}),k.jsx(oa,{onClick:()=>jr("Cart Pressed"),className:"app-banner-icon",name:"cart-fill"}),k.jsx(xi,{onClick:()=>jr("My 4 Button Pressed"),className:"app-banner-button",pill:!0,children:"My 4"})]})}),k.jsx($x,{})]})}function zs({imageName:e,headerText:t,mainText:r,buttonText:i}){return k.jsx("div",{className:"product-info",style:{backgroundImage:`url(src/assets/${e}.jpg)`},children:k.jsxs("div",{className:"product-info-text",children:[k.jsx("h3",{children:t}),k.jsx("div",{children:r}),k.jsx(xi,{onClick:()=>jr("Product Info Button Pressed"),className:"product-info-button alertProvider",pill:!0,children:i})]})})}function Ex(){return k.jsx("div",{id:"custom-carousel",children:k.jsxs(fm,{className:"custom-carousel-slcarousel",pagination:!0,navigation:!0,"mouse-dragging":!0,children:[k.jsx($s,{children:k.jsx(zs,{imageName:"phone-orange-med",headerText:"The new 4 phone HD+",mainText:"Switch to the 4 network and get it for just €50",buttonText:"Buy Now!"})}),k.jsx($s,{children:k.jsx(zs,{imageName:"phone-hand-med",headerText:"Get more from your phone",mainText:"New Bill Pay Plans that work for you!",buttonText:"Buy Now!"})}),k.jsx($s,{children:k.jsx(zs,{imageName:"phone-bubbles-med",headerText:"Check out all our deals",mainText:"Find the phone that suits you",buttonText:"Buy Now!"})})]})})}function Ax({cards:e=[]}){return k.jsx("div",{id:"action-cards",children:e.map((t,r)=>k.jsxs("div",{className:"action-card",children:[k.jsx(oa,{className:"action-card-icon",name:t.icon||"phone-fill"}),t.text]},r))})}function Tx(){return k.jsxs("div",{id:"special-promo",children:[k.jsx("div",{className:"special-promo-card",style:{backgroundImage:"url(src/assets/broadband.jpg)"},children:k.jsxs("div",{className:"special-promo-card-text",children:[k.jsx("div",{children:"Superfast unlimited Broadband"}),k.jsx("h3",{children:"Get up to 6 months free when you switch now!"}),k.jsx(xi,{onClick:()=>jr("Special Promo Button 1 Pressed"),pill:!0,children:"Learn More"})]})}),k.jsx("div",{className:"special-promo-card",style:{backgroundImage:"url(src/assets/phone-wall.jpg)"},children:k.jsxs("div",{className:"special-promo-card-text",children:[k.jsx("div",{children:"Switch to 4 Prepay"}),k.jsx("h3",{children:"Switch and save up to €100!"}),k.jsx(xi,{onClick:()=>jr("Special Promo Button 2 Pressed"),pill:!0,children:"Switch Now"})]})})]})}const vm=[{name:"4-phone-Next",fullPrice:530,salePrice:500,additonalInfo:"New"},{name:"4-phone",fullPrice:220,salePrice:99},{name:"4-phone-2",fullPrice:240,salePrice:120,additonalInfo:"Online Exclusive"},{name:"qPhone",fullPrice:150,salePrice:99},{name:"4-phone-3",fullPrice:260,salePrice:240},{name:"qPhone-Z",fullPrice:180,salePrice:130,additonalInfo:"Low Stock"},{name:"4-phone-4",fullPrice:300,salePrice:150},{name:"qPhone-X",fullPrice:250,salePrice:200},{name:"4-phone-6",fullPrice:500,salePrice:350},{name:"qPhone-Y",fullPrice:300,salePrice:180}],Px=e=>`hue-rotate(${360/vm.length*e}deg)`;function Nx(){const e=Ht.useRef(null),[t,r]=Ht.useState(5),i=400;return Ht.useEffect(()=>{if(!e.current)return;const o=new ResizeObserver(()=>{const n=Math.ceil(e.current.getBoundingClientRect().width/i);r(n)});return o.observe(e.current),()=>o.disconnect()},[]),k.jsx("div",{ref:e,id:"quick-buy-carousel",children:k.jsx(fm,{className:"quick-buy-carousel-slcarousel",navigation:!0,slidesPerPage:t,slidesPerMove:1,children:vm.map((o,n)=>k.jsx($s,{className:"quick-buy-carousel-item",children:k.jsxs(V1,{className:"quick-buy-carousel-card",children:[k.jsx("img",{slot:"image",src:"src/assets/phone-generic.jpg",alt:"A generic smart phone",style:{filter:`${Px(n)}`}}),k.jsx("strong",{children:o.name}),k.jsxs("div",{children:[k.jsxs("strong",{children:["€",o.salePrice]}),k.jsxs("div",{className:"old-price",children:["€",o.fullPrice]})]}),o.additonalInfo&&k.jsx(wx,{pulse:!0,children:o.additonalInfo}),k.jsx("br",{}),"Buy now to save €",o.fullPrice-o.salePrice,"!",k.jsx("br",{}),k.jsx(xi,{className:"quick-buy-carousel-button",onClick:()=>jr(`${o.name} Pressed`),variant:"primary",pill:!0,children:"Buy Now!"})]})},o.name))})})}function Lx(){return k.jsxs("div",{id:"footer",children:[k.jsxs("div",{className:"footer-section",children:[k.jsx("h3",{children:"Info"}),k.jsx("hr",{className:"footer-section-divider"}),k.jsx("div",{children:"This mock ecommerce site was built by Chris!"}),k.jsx("div",{children:"It is based on a site by a popular phone company in Ireland"}),k.jsx("a",{href:"https://aeronautalist.github.io/profile-page/",children:"Check out my site!"})]}),k.jsxs("div",{className:"footer-section",children:[k.jsx("h3",{children:"Built with"}),k.jsx("hr",{}),k.jsxs("ul",{children:[k.jsx("li",{children:k.jsx("a",{href:"https://react.dev/",children:"React"})}),k.jsx("li",{children:k.jsx("a",{href:"https://shoelace.style",children:"Shoelace"})}),k.jsx("li",{children:k.jsx("a",{href:"https://vitejs.dev/",children:"Vite"})})]})]}),k.jsxs("div",{className:"footer-section",children:[k.jsx("h3",{children:"Image Credit"}),k.jsx("hr",{className:"footer-section-divider"}),k.jsxs("ul",{children:[k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@amirhanna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Amir Hanna"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@jonasleupe?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Jonas Leupe"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@vojtechbruzek?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Vojtech Bruzek"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@aleno?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Adomas Aleno"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@steven_st22?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Steven Shi"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@kayrasercan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Kayra Sercan"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@frostroomhead?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Rodion Kutsaiev"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@noellerebekah?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Noelle Rebekah"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Kelly Sikkema"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@cdx2?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"C D-X"})}),k.jsx("li",{children:k.jsx("a",{href:"https://unsplash.com/@redaquamedia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",children:"Denny Müller"})})]})]})]})}function Ix(){const e=Ht.useRef(null),[t,r]=Ht.useState("");return Ht.useEffect(()=>{const i=o=>{e&&(r(o.detail.text),e.current.toast())};return document==null||document.addEventListener("showToast",i),()=>document==null?void 0:document.removeEventListener("showToast",i)},[]),k.jsxs("div",{id:"App",children:[k.jsx(bw,{ref:e,variant:"success",duration:"3000",closable:!0,children:k.jsx("div",{id:"alert-content",children:t})}),k.jsx(zx,{}),k.jsx(Ex,{}),k.jsx(Ax,{cards:[{icon:"phone",text:"Phones"},{icon:"file-earmark-richtext",text:"Bill Pay Plans"},{icon:"currency-euro",text:"Prepay Plans"},{icon:"earbuds",text:"Lifestyle Store"},{icon:"router",text:"Broadband"}]}),k.jsx(Tx,{}),k.jsx("h3",{id:"best-sellers-header",children:"Best Sellers"}),k.jsx(Nx,{}),k.jsx("div",{id:"product-info-audio",children:k.jsx(zs,{imageName:"headphones-med",headerText:"Up to 20% off Audio",mainText:"Buy now and save on selected products!",buttonText:"Shop Now"})}),k.jsx(Lx,{})]})}uc("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/");gl.createRoot(document.getElementById("root")).render(k.jsx(Th.StrictMode,{children:k.jsx(Ix,{})}));
