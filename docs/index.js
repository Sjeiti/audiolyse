/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mc_picker/dist/index.js":
/*!**********************************************!*\
  !*** ./node_modules/mc_picker/dist/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".mcpicker {\n  position: absolute;\n  width: 14rem;\n  height: 8rem;\n  margin-bottom: 0.5rem;\n  z-index: 99;\n  box-shadow: 0 0 0 1px white, 0 2px 4px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n.mcpicker > div:first-child {\n  position: relative;\n  width: 100%;\n  height: calc(100% - 2rem);\n  user-select: none;\n  background: linear-gradient(to top, black, rgba(0, 0, 0, 0)), linear-gradient(to left, red, white);\n}\n.mcpicker > div:first-child:after {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 1rem;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  transform: translate(-50%, 50%);\n  pointer-events: none;\n}\n.mcpicker > div:first-child + div {\n  position: relative;\n  height: 1rem;\n  user-select: none;\n  background: linear-gradient(to right, #F00, #FF0, #0F0, #0FF, #00F, #F0F, #F00);\n}\n.mcpicker > div:first-child + div:after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 50%;\n  top: 0;\n  width: 3px;\n  transform: translateX(-2px);\n  height: inherit;\n  box-shadow: 0 0 0 1px black inset, 0 0 0 2px white inset;\n  pointer-events: none;\n}\n.mcpicker input {\n  width: 40%;\n  height: 1rem;\n  display: block;\n  float: left;\n  margin: 0;\n  padding: 0.125rem 0.25rem;\n  border: 0;\n  border-radius: 0;\n  box-sizing: border-box;\n  outline: none;\n  box-shadow: none;\n  background-color: transparent;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-family: monospace;\n  font-weight: 600;\n  text-align: center;\n}\n.mcpicker input::-webkit-outer-spin-button,\n.mcpicker input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n.mcpicker input[type=number] {\n  -moz-appearance: textfield;\n  box-shadow: 1px 0 0 rgba(255, 255, 255, 0.5) inset;\n}\n.mcpicker input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input,\n.mcpicker input + input + input + input {\n  width: 20%;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t,e){return e?e.querySelector(t):document.querySelector(t)},u=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=c.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),s=null,l=0,f=[],p=n(4);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(g(r.parts[a],e))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(g(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function h(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function v(t,e){var n=u(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return y(e,t.attrs),v(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function g(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=l++;n=s||(s=b(e)),r=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),v(t,e),e}(e),r=S.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(e),r=E.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var a=n[o];(c=i[a.id]).refs--,r.push(c)}t&&d(h(t,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var w,x=(w=[],function(t,e){return w[t]=e,w.filter(Boolean).join("\n")});function k(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function E(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function S(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";n.r(e);n(0);function r(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(){var t,e,n,c,l,f,p,d,h=arguments.length,v=Array.prototype.slice.call(arguments),m=v[0],b=v[1],y=v[2],g=Object.create({setRGB:function(r,i,u){var d=o(a(r,i,u),3),h=d[0],v=d[1],m=d[2],b=s(r,i,u)[2];return t=h,e=v,n=m,c=b,l=r,f=i,p=u,this},setSL:function(r,i){var a=o(u(t,r,i),3),d=a[0],h=a[1],v=a[2],m=s(d,h,v)[2];return e=r,n=i,c=m,l=d,f=h,p=v,this},setH:function(r){var i=o(u(r,e,n),3),a=i[0],c=i[1],s=i[2];return t=r,l=a,f=c,p=s,this},setSV:function(r,i){var u=o(function(t,e,n){var r,o,i,a=Math.floor(6*t),c=6*t-a,u=n*(1-e),s=n*(1-c*e),l=n*(1-(1-c)*e);switch(a%6){case 0:r=n,o=l,i=u;break;case 1:r=s,o=n,i=u;break;case 2:r=u,o=n,i=l;break;case 3:r=u,o=s,i=n;break;case 4:r=l,o=u,i=n;break;case 5:r=n,o=u,i=s}return[r,o,i].map((function(t){return Math.floor(255*t)}))}(t,r,i),3),s=u[0],d=u[1],h=u[2],v=a(s,d,h)[2];return e=r,c=i,n=v,l=s,f=d,p=h,this},clone:function(){return i(l,f,p)}},{h:{get:function(){return t}},s:{get:function(){return e}},l:{get:function(){return n}},v:{get:function(){return c}},r:{get:function(){return l}},g:{get:function(){return f}},b:{get:function(){return p}},hex:{get:function(){return function(t,e,n){return"#"+((1<<24)+(t<<16)+(e<<8)+n).toString(16).slice(1).toUpperCase()}(l,f,p)}},luminance:{get:function(){return(.375*l+.5*f+.125*p)/255}}});return 1===h&&"string"==typeof m?g.setRGB.apply(g,r((d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(m))&&d.splice(1).map((function(t){return parseInt(t,16)})))):3===h&&"number"==typeof m&&g.setRGB(m,b,y),g}function a(t,e,n){var r,o,i=t/255,a=e/255,c=n/255,u=Math.max(i,a,c),s=Math.min(i,a,c),l=(u+s)/2;if(u===s)r=o=0;else{var f=u-s;switch(o=l>.5?f/(2-u-s):f/(u+s),u){case i:r=(a-c)/f+(a<c?6:0);break;case a:r=(c-i)/f+2;break;case c:r=(i-a)/f+4}r/=6}return[r,o,l]}function c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function u(t,e,n){var r,o,i;if(0===e)r=o=i=n;else{var a=n<.5?n*(1+e):n+e-n*e,u=2*n-a;r=c(u,a,t+1/3),o=c(u,a,t),i=c(u,a,t-1/3)}return[r,o,i].map((function(t){return Math.floor(255*t)}))}function s(t,e,n){var r,o,i=t/255,a=e/255,c=n/255,u=Math.max(i,a,c),s=Math.min(i,a,c),l=u,f=u-s;if(o=0===u?0:f/u,u===s)r=0;else{switch(u){case i:r=(a-c)/f+(a<c?6:0);break;case a:r=(c-i)/f+2;break;case c:r=(i-a)/f+4}r/=6}return[r,o,l]}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p="mcpicker",d=document,h=d.body,v=d.documentElement;h.appendChild(document.createElement("style"));var m=document.styleSheets[document.styleSheets.length-1],b=new Map,y="px",g="auto",w="click",x="mousedown",k="mouseup",E="mousemove",S="touchstart",j="touchend",L="touchmove",A="change",M="div",O="input";function R(t){f(b.values()).forEach((function(e){return e!==t&&e.remove()}))}document.addEventListener(w,(function(t){var e=t.target;if(e.matches("input[type=color]")){t.preventDefault();var n=function(t){var e=b.get(t),n=!!e,r=!!(null==e?void 0:e.parentNode);if(n&&r)e.remove();else if(n&&!r)h.appendChild(e);else{var o=function(t,e){var n=document.createElement(e);return t.appendChild(n),n},a=function(t){return m.insertRule(t,0),m.rules[0]},c=function(t){var e,n=H.getBoundingClientRect(),r=(null===(e=t.touches)||void 0===e?void 0:e[0])||t,o=r.clientX-n.left,i=r.clientY-n.top,a=d(o/n.width),c=d(1-i/n.height);q.setSV(a,c),g(),C(),U(),F(),T()},u=function(t){var e,n=_.getBoundingClientRect(),r=((null===(e=t.touches)||void 0===e?void 0:e[0])||t).clientX-n.left,o=d(r/n.width);q.setH(o),J.setH(o),R(),y(),C(),U(),F(),T()},s=function(){var t;(t=q).setRGB.apply(t,f(z.map((function(t){return parseInt(t.value,10)})))),J=q.clone().setSL(1,.5),I(),U(),T()},d=function(t){return Math.min(Math.max(t,0),1)},y=function(){W.style.background="linear-gradient(to top, black, rgba(0,0,0,0)),\n      linear-gradient(to left, ".concat(J.hex,", white)")},g=function(){var t=q.s,e=q.v;K.style.left="".concat((100*t).toFixed(2),"%"),K.style.bottom="".concat((100*e).toFixed(2),"%")},R=function(){var t=q.h;Q.style.left="".concat((100*t).toFixed(2),"%")},C=function(){var t=q.luminance>.5;Y.style.backgroundColor=q.hex,Z.style.color=t?"#000":"#FFF",tt.style.boxShadow="1px 0 0 rgba(".concat(t?"0,0,0,0.3":"255,255,255,0.5",") inset");var e=q,n=e.r,r=e.g,o=e.b;et.style.backgroundColor=i(255-o,255-n,255-r).hex},U=function(){D.value=q.hex},F=function(){G.value=Math.round(q.r),P.value=Math.round(q.g),$.value=Math.round(q.b)},T=function(){t.value=q.hex,B()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!1),t.dispatchEvent(n)},I=function(){R(),y(),g(),C()},N=document.createElement(M);N.classList.add(p),b.set(t,N),N.remove=function(){B(A),Element.prototype.remove.apply(N)};var H=o(N,M),_=o(N,M),D=o(N,O);D.value=t.value;var G=o(N,O),P=o(N,O),$=o(N,O),z=[G,P,$];z.forEach((function(t){t.type="number",t.min=0,t.max=255})),h.appendChild(N);var X=function(t){var e=t.name||t.id||Math.round(Date.now()+1e3*Math.random()).toString(16);return"".concat(p,"_").concat(e)}(t);N.classList.add(X);var q=i(D.value),J=q.clone().setSL(1,.5),V=".".concat(p,".").concat(X),Y=a("".concat(V," {}")),W=a("".concat(V,">div:first-child {}")),K=a("".concat(V,">div:first-child:after {}")),Q=a("".concat(V,">div:first-child+div:after {}")),Z=a("".concat(V,">input {}")),tt=a("".concat(V,">input[type=number] {}")),et=a("".concat(V,">input::selection {}"));H.addEventListener(w,c),_.addEventListener(w,u);var nt=[[x,k,E],[S,j,L]];[[H,c],[_,u]].forEach((function(t){var e=l(t,2),n=e[0],r=e[1];nt.forEach((function(t){var e=l(t,3),o=e[0],i=e[1],a=e[2];n.addEventListener(o,(function(t){v.addEventListener(a,r),t.preventDefault()})),v.addEventListener(i,(function(){return v.removeEventListener(a,r)}))}))})),D.addEventListener(O,(function(){q=i(D.value),J=q.clone().setSL(1,.5),I(),F(),T()})),z.forEach((function(t){return t.addEventListener(O,s)})),I(),U(),F()}return b.get(t)}(e);R(n);var r=e.getBoundingClientRect(),o=r.right,a=r.bottom,c=r.top,u=t.clientX,s=t.clientY,d=document.documentElement,C=d.scrollTop,U=d.clientWidth,F=d.clientHeight,T=s/F;u/U<.5?(n.style.left=r.left+y,n.style.right=g):(n.style.left=g,n.style.right=U-o+y),T<.5?(n.style.top=a+C+y,n.style.bottom=g):(n.style.top=g,n.style.bottom=F-c-C+y)}else{var B=e.closest(".".concat(p));!(null==B?void 0:B.contains(e))&&R()}}))}]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mc_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mc_picker */ "./node_modules/mc_picker/dist/index.js");
/* harmony import */ var mc_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mc_picker__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // const verticalScale = 1

var locationVars = location.search.substr(1).split(/&/).map(function (s) {
  return s.split(/=/);
}).reduce(function (acc, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      val = _ref2[1];

  return acc[key] = parseInt(val, 10), acc;
}, {});
var waveOrFreq = false;

var _initAudio = initAudio(locationVars.fftSize || 2048),
    _initAudio2 = _slicedToArray(_initAudio, 3),
    getAudioData = _initAudio2[0],
    bufferLength = _initAudio2[1],
    audioElement = _initAudio2[2]; // 128 // 512 // 2048


initFileReader(audioElement);
var images = [];
var spacer = document.querySelector('.spacer');
var downloadButton = document.querySelector('a[download]');

var _initColors = initColors(),
    _initColors2 = _slicedToArray(_initColors, 2),
    colorLight = _initColors2[0],
    colorDark = _initColors2[1];

var _createCanvas = createCanvas(),
    _createCanvas2 = _slicedToArray(_createCanvas, 2),
    mainCanvas = _createCanvas2[0],
    mainContext = _createCanvas2[1];

document.querySelector('.spacer').appendChild(mainCanvas);

var _createCanvas3 = createCanvas(),
    _createCanvas4 = _slicedToArray(_createCanvas3, 2),
    backgroundCanvas = _createCanvas4[0],
    backgroundContext = _createCanvas4[1];

var _createCanvas5 = createCanvas(),
    _createCanvas6 = _slicedToArray(_createCanvas5, 2),
    middlegroundCanvas = _createCanvas6[0],
    middlegroundContext = _createCanvas6[1];

var _createCanvas7 = createCanvas(),
    _createCanvas8 = _slicedToArray(_createCanvas7, 2),
    foregroundCanvas = _createCanvas8[0],
    foregroundContext = _createCanvas8[1];

var dotHeight = 4;
var mirror = true;
var width = mainCanvas.offsetWidth;
var height = mainCanvas.offsetHeight;
var width2 = width / 2;
var height2 = height / 2;
var stream = null;
var barSize = locationVars.bar || 2;
var barMargin = locationVars.margin || 4;
var barNum = 60;
var barDist = width / barNum;
var barWidth = barDist * 0.7;
var maxRecordingMillis = 8000;
var waitAfterRecordMillis = 1000;
var playing = false;
var start = combine(onWindowResize, draw);
window.addEventListener('resize', onWindowResize);
setTimeout(start, 40); //////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

function initAudio(fftSize) {
  var audioElement = document.querySelector('audio');
  audioElement.addEventListener('play', onAudioPlay);
  audioElement.addEventListener('ended', onAudioStop); //

  var audioContext = new (window.AudioContext || window.webkitAudioContext)();
  var analyser = audioContext.createAnalyser();
  analyser.fftSize = fftSize;
  analyser.smoothingTimeConstant = 0.6; // 0.8
  // analyser.minDecibels = -80 // -100
  // analyser.maxDecibels = -40 // -30

  var bufferLength = analyser.fftSize; // const bufferLength = analyser.frequencyBinCount

  var dataArray = new Uint8Array(bufferLength); // window.dootoorrooy = dataArray // todo remove
  //

  document.body.addEventListener('click', onBodyClickResume, false);

  function onBodyClickResume() {
    audioContext.resume().then(console.log.bind(console, 'Playback resumed successfully'));
    document.body.removeEventListener('click', onBodyClickResume);
  } //


  var streamingAudioSource = audioContext.createMediaElementSource(audioElement);
  streamingAudioSource.connect(analyser);
  streamingAudioSource.connect(audioContext.destination); //

  var getAudioData = waveOrFreq ? function () {
    return analyser.getByteTimeDomainData(dataArray), dataArray;
  } : function () {
    return analyser.getByteFrequencyData(dataArray), dataArray;
  }; //

  return [getAudioData, bufferLength, audioElement];
}

function initFileReader(audioElement) {
  var fileReader = document.querySelector('input[type=file]');
  fileReader.addEventListener('change', function (e) {
    var _e$target$files = _slicedToArray(e.target.files, 1),
        file = _e$target$files[0];

    var name = file.name;
    var reader = new FileReader();

    reader.onload = function (e) {
      var dataURL = reader.result;
      var snd = new Audio(dataURL); // weird FF noise-suffix fix

      audioElement.src = snd.src;
      audioElement.dataset.name = name;
      audioElement.play();
    };

    reader.readAsDataURL(file);
  });
}

function initColors() {
  var colors = Array.from(document.querySelectorAll('input[type=color]'));

  var onColorChange = function onColorChange(i, _ref3) {
    var value = _ref3.target.value;
    if (i === 0) colorLight = value;else colorDark = value;
    drawPrepare();
  };

  colors.forEach(function (c, i) {
    return c.addEventListener('change', onColorChange.bind(null, i));
  });
  return colors.map(function (c) {
    return c.value;
  });
}

function draw() {
  if (playing) {
    waveOrFreq ? drawWave() : drawFreq();
    mainContext.clearRect(0, 0, width, height);
    mainContext.drawImage(backgroundCanvas, 0, 0);
    mainContext.drawImage(middlegroundCanvas, 0, 0);

    if (mirror) {
      mainContext.save();
      mainContext.scale(1, -1);
      mainContext.drawImage(middlegroundCanvas, 0, 0, width, -height);
      mainContext.restore();
    } // waveOrFreq&&mainContext.drawImage(foregroundCanvas, 0, 0)
    //
    // canvasElement.toBlob(blob=>saveAs(blob, 'myImage.png'))
    // const dataUrl = canvasElement.toDataURL('image/webp')


    images.push(mainCanvas.toDataURL('image/webp'));
  }

  requestAnimationFrame(draw);
}

function drawWave() {
  var dataArray = getAudioData();
  middlegroundContext.clearRect(0, 0, width, height);
  middlegroundContext.beginPath();
  middlegroundContext.moveTo(0, height2);

  for (var i = 0, l = bufferLength; i < l; i++) {
    var x = i / bufferLength * width;
    var v = dataArray[i] / 128.0;
    var y = v * height2;
    middlegroundContext.lineTo(x, y);
  }

  middlegroundContext.lineTo(width, height2);
  middlegroundContext.fill();
  middlegroundContext.fillRect(0, height / 2 - dotHeight / 2, width, dotHeight);
}

function drawFreq() {
  var dataArray = getAudioData();
  middlegroundContext.clearRect(0, 0, width, height);

  for (var i = 0, l = bufferLength; i < l; i += 4) {
    var x = i / bufferLength * width * (barSize + barMargin);
    var v = 0.5 * (dataArray[i] / 256.0);
    var y = v * height;
    middlegroundContext.fillRect(x, height2, barSize, Math.max(y, mirror ? barSize / 2 : barSize));
  }
}

function onWindowResize() {
  width = spacer.offsetWidth;
  height = spacer.offsetHeight;
  width2 = width / 2;
  height2 = height / 2;
  barDist = width / barNum;
  barWidth = barDist * 0.7;
  mainCanvas.width = backgroundCanvas.width = middlegroundCanvas.width = foregroundCanvas.width = width;
  mainCanvas.height = backgroundCanvas.height = middlegroundCanvas.height = foregroundCanvas.height = height;
  drawPrepare();
}

function onAudioPlay(e) {
  console.log('e.type', e.type); // todo: remove log

  playing = true; //

  downloadButton.removeAttribute('href');
  stream = mainCanvas.captureStream(25); //

  startRecording(stream, maxRecordingMillis).then(onRecordingEnded);
}

function onAudioStop(e) {
  console.log('onAudioStop', e, stream); // todo: remove log

  downloadButton.classList.add('rotate');
  setTimeout(function () {
    var _stream;

    playing = false;
    (_stream = stream) === null || _stream === void 0 ? void 0 : _stream.getTracks().forEach(function (track) {
      return track.stop();
    });
  }, waitAfterRecordMillis);
}

function onRecordingEnded(recordedChunks) {
  console.log('onRecordingEnded'); // todo: remove log

  var recordedBlob = new Blob(recordedChunks, {
    type: 'video/webm'
  });
  downloadButton.href = URL.createObjectURL(recordedBlob);
  downloadButton.download = (audioElement.dataset.name || audioElement.src).split(/\//g).pop().replace(/\.\w+$/, '.webm');
  downloadButton.classList.remove('rotate');
  console.log("Successfully recorded ".concat(recordedBlob.size, " bytes of ").concat(recordedBlob.type, " media."));
}

function drawPrepare() {
  middlegroundContext.fillStyle = colorDark;
  middlegroundContext.clearRect(0, 0, width, height);
  backgroundContext.fillStyle = colorLight; //

  backgroundContext.clearRect(0, 0, width, height);
  backgroundContext.fillRect(0, 0, width, height); //

  foregroundContext.fillStyle = colorLight;
  foregroundContext.clearRect(0, 0, width, height);

  for (var j = 0; j < barNum; j++) {
    var x = j * barDist;
    foregroundContext.fillRect(x, 0, barWidth, height);
  }

  mainContext.fillStyle = colorDark;
  mainContext.clearRect(0, 0, width, height);
  mainContext.drawImage(backgroundCanvas, 0, 0); // mainContext.fillRect(0, height/2 - dotHeight/2, width, dotHeight)
  // mainContext.drawImage(foregroundCanvas, 0, 0)
}

function createCanvas() {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  return [canvas, context];
}

function startRecording(stream, lengthInMS) {
  var recorder = new MediaRecorder(stream);
  var data = [];

  recorder.ondataavailable = function (e) {
    return data.push(e.data);
  };

  recorder.start();
  console.log("".concat(recorder.state, " for ").concat(lengthInMS / 1000, " seconds..."));
  var stopped = new Promise(function (resolve, reject) {
    recorder.onstop = resolve;

    recorder.onerror = function (event) {
      return reject(event.name);
    };
  }); // stopped.then(console.log.bind(console, 'recorderstopped'))

  var recorded = wait(lengthInMS).then(function () {
    return recorder.state === 'recording' && recorder.stop();
  }); // recorded.then(console.log.bind(console, 'recorderrecorded'))

  return Promise.all([stopped, recorded]).then(function () {
    return data;
  });
}

function wait(delayInMS) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, delayInMS);
  });
}

function combine() {
  var _arguments = arguments;
  return function () {
    return Array.from(_arguments).forEach(function (fn) {
      return fn();
    });
  };
} /////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
//
// const WIDTH = 400
// const HEIGHT = 300
// const [testCanvas, canvasCtx] = createCanvas()
// testCanvas.width = WIDTH
// testCanvas.height = HEIGHT
// testCanvas.style.width = `${WIDTH}px`
// testCanvas.style.height = `${HEIGHT}px`
// testCanvas.style.border = '1px solid #F04'
// testCanvas.style.position = 'static'
// console.log('testCanvas',testCanvas) // todo: remove log
// document.querySelector('section').appendChild(testCanvas)
// // document.querySelector('.spacer').appendChild(testCanvas)
// function drew() {
//   if (!window.dootoorrooy) return
//   requestAnimationFrame(drew)
//
//   canvasCtx.fillStyle = 'rgb(200, 200, 200)'
//   canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)
//
//   canvasCtx.lineWidth = 2
//   canvasCtx.strokeStyle = 'rgb(0, 0, 0)'
//
//   const sliceWidth = WIDTH * 1.0 / bufferLength
//   let x = 0
//
//   canvasCtx.beginPath()
//   for(var i = 0; i < bufferLength; i++) {
//     const v = window.dootoorrooy[i]/128.0
//     const y = v * HEIGHT/2
//
//     if(i === 0)
//       canvasCtx.moveTo(x, y)
//     else
//       canvasCtx.lineTo(x, y)
//
//     x += sliceWidth
//   }
//
//   canvasCtx.lineTo(WIDTH, HEIGHT/2)
//   canvasCtx.stroke()
// }
// // setTimeout(drew, 1000)
//
//
//
// function drww() {
//   requestAnimationFrame(drww)
//   // analyser.getByteFrequencyData(dataArray)
//   canvasCtx.fillStyle = 'rgb(0, 0, 0)'
//   canvasCtx.fillRect(0, 0, WIDTH, HEIGHT)
//   var barWidth = (WIDTH / bufferLength) * 2.5
//   var barHeight
//   var x = 0
//   for(var i = 0; i < bufferLength; i++) {
//     barHeight = window.dootoorrooy[i]
//     canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)'
//     canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2)
//     x += barWidth + 1
//   }
// }
// setTimeout(drww, 1000)

/***/ })

/******/ });
//# sourceMappingURL=index.js.map