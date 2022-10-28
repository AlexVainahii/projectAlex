!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n.default(i,r.prototype),i}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(a("ds8z5")),n=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}}));var i={signBtn:document.querySelector('button[data-sign="SignIn"]'),closeBtn:document.querySelector("button[data-modal-close]"),bckDrop:document.querySelector('div[data-backdrop="backdrop"]'),logBtn:document.querySelector('button[data-log="log"]'),inputEmail:document.querySelector('[data-email="email"]'),inputPass:document.querySelector('[data-password="password"]')},o={};function s(e,t,r,n,a,i,o){try{var s=e[i](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,a)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,u,"next",e)}function u(e){s(i,n,a,o,u,"throw",e)}o(void 0)}))}};var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var c={};function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,r){t&&l(e.prototype,t);r&&l(e,r);return e};var f=a("hKHmD"),p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e){return h.default(e)||d.default(e)||m.default(e)||v.default()};var h=y(a("kMC0W")),d=y(a("7AJDX")),v=y(a("8CtQK")),m=y(a("auk6i"));function y(e){return e&&e.__esModule?e:{default:e}}var g={},b=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,i=Object.create(a.prototype),o=new C(n||[]);return i._invoke=function(e,t,r){var n=f;return function(a,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===a)throw i;return T()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?d:p,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(e,r,o),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function m(){}function y(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==r&&n.call(x,i)&&(b=x);var k=g.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function r(a,i,o,s){var u=l(e[a],e,i);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var a;this._invoke=function(e,n){function i(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(i,i):i()}}function E(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=l(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function O(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:T}}function T(){return{value:t,done:!0}}return y.prototype=g,u(k,"constructor",g),u(g,"constructor",y),y.displayName=u(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(I.prototype),u(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new I(c(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(k),u(k,s,"Generator"),u(k,i,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),D(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;D(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(g);try{regeneratorRuntime=b}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=b:Function("r","regeneratorRuntime = r")(b)}var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t){return x.default(e)||k.default(e,t)||I.default(e,t)||_.default()};var x=E(a("8slrw")),k=E(a("7AJDX")),_=E(a("ifqQW")),I=E(a("auk6i"));function E(e){return e&&e.__esModule?e:{default:e}}var S=a("ds8z5"),D={};Object.defineProperty(D,"__esModule",{value:!0}),D.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O.default(e,t)};var C,O=(C=a("gD1JV"))&&C.__esModule?C:{default:C};var T={};Object.defineProperty(T,"__esModule",{value:!0}),T.default=function(e){return N(e)};var A=L(a("ge8co")),j=L(a("cZGw3")),M=L(a("fVNic")),P=L(a("gD1JV"));function L(e){return e&&e.__esModule?e:{default:e}}function N(e){var t="function"==typeof Map?new Map:void 0;return N=function(e){if(null===e||!j.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return A.default(e,arguments,M.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),P.default(r,e)},N(e)}var B={};Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){var t=F.default();return function(){var r,n=R.default(e);if(t){var a=R.default(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return H.default(this,r)}};var F=z(a("aTHs7")),R=z(a("fVNic")),H=z(a("jmhxu"));function z(e){return e&&e.__esModule?e:{default:e}}var V,q,W,U=V={};function $(){throw new Error("setTimeout has not been defined")}function K(){throw new Error("clearTimeout has not been defined")}function G(e){if(q===setTimeout)return setTimeout(e,0);if((q===$||!q)&&setTimeout)return q=setTimeout,setTimeout(e,0);try{return q(e,0)}catch(t){try{return q.call(null,e,0)}catch(t){return q.call(this,e,0)}}}!function(){try{q="function"==typeof setTimeout?setTimeout:$}catch(e){q=$}try{W="function"==typeof clearTimeout?clearTimeout:K}catch(e){W=K}}();var J,X=[],Q=!1,Y=-1;function Z(){Q&&J&&(Q=!1,J.length?X=J.concat(X):Y=-1,X.length&&ee())}function ee(){if(!Q){var e=G(Z);Q=!0;for(var t=X.length;t;){for(J=X,X=[];++Y<t;)J&&J[Y].run();Y=-1,t=X.length}J=null,Q=!1,function(e){if(W===clearTimeout)return clearTimeout(e);if((W===K||!W)&&clearTimeout)return W=clearTimeout,clearTimeout(e);try{W(e)}catch(t){try{return W.call(null,e)}catch(t){return W.call(this,e)}}}(e)}}function te(e,t){this.fun=e,this.array=t}function re(){}U.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];X.push(new te(e,t)),1!==X.length||Q||G(ee)},te.prototype.run=function(){this.fun.apply(null,this.array)},U.title="browser",U.browser=!0,U.env={},U.argv=[],U.version="",U.versions={},U.on=re,U.addListener=re,U.once=re,U.off=re,U.removeListener=re,U.removeAllListeners=re,U.emit=re,U.prependListener=re,U.prependOnceListener=re,U.listeners=function(e){return[]},U.binding=function(e){throw new Error("process.binding is not supported")},U.cwd=function(){return"/"},U.chdir=function(e){throw new Error("process.chdir is not supported")},U.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ne=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},ae={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],a=0;a<e.length;a+=3){var i=e[a],o=a+1<e.length,s=o?e[a+1]:0,u=a+2<e.length,c=u?e[a+2]:0,l=i>>2,f=(3&i)<<4|s>>4,p=(15&s)<<2|c>>6,h=63&c;u||(h=64,o||(p=64)),n.push(r[l],r[f],r[p],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ne(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){var i=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){var o=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],a=0;a<e.length;){var i=r[e.charAt(a++)],o=a<e.length?r[e.charAt(a)]:0,s=++a<e.length?r[e.charAt(a)]:64,u=++a<e.length?r[e.charAt(a)]:64;if(++a,null==i||null==o||null==s||null==u)throw Error();var c=i<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ie=function(e){return function(e){var t=ne(e);return ae.encodeByteArray(t,!0)}(e).replace(/\./g,"")},oe=function(e){try{return ae.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ue(){return"object"==typeof indexedDB}function ce(){return new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=function(){a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=function(){r=!1},a.onerror=function(){var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function le(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fe=function(){return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},pe=function(){try{return fe()||function(){if(void 0!==V&&void 0!==V.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&oe(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},he=function(){var e;return null===(e=pe())||void 0===e?void 0:e.config},de=function(){"use strict";function t(){var r=this;e(u)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(c)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ve=function(t){"use strict";e(D)(n,t);var r=e(B)(n);function n(t,a,i){var o;return e(u)(this,n),(o=r.call(this,a)).code=t,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(e(S)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(S)(o),me.prototype.create),o}return n}(e(T)(Error)),me=function(){"use strict";function t(r,n,a){e(u)(this,t),this.service=r,this.serviceName=n,this.errors=a}return e(c)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?ye(o,a):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(i,")."),c=new ve(i,u,a);return c}}]),t}();function ye(e,t){return e.replace(ge,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var ge=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),a=!0,i=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(we(l)&&we(f)){if(!be(l,f))return!1}else if(l!==f)return!1}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}var p=!0,h=!1,d=void 0;try{for(var v,m=n[Symbol.iterator]();!(p=(v=m.next()).done);p=!0){var y=v.value;if(!r.includes(y))return!1}}catch(e){h=!0,d=e}finally{try{p||null==m.return||m.return()}finally{if(h)throw d}}return!0}function we(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xe=144e5;function ke(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=t*Math.pow(r,e),a=Math.round(.5*n*(Math.random()-.5)*2);return Math.min(xe,n+a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _e(e){return e&&e._delegate?e._delegate:e}var Ie=function(){"use strict";function t(r,n,a){e(u)(this,t),this.name=r,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(c)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Ee="[DEFAULT]",Se=function(){"use strict";function t(r,n){e(u)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(c)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new de;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ee})}catch(e){}var r=!0,n=!1,a=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=e(w)(i.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(o)(e(g).mark((function r(){var n;return e(g).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(p)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(p)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error("".concat(this.name,"(").concat(a,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:a,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=e(w)(c.value,2),p=f[0],h=f[1],d=this.normalizeInstanceIdentifier(p);a===d&&h.resolve(i)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),a=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;a.add(e),this.onInitCallbacks.set(n,a);var i=this.instances.get(n);return i&&e(i,n),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,a=!1,i=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,a=void 0===n?{}:n,i=this.instances.get(r);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Ee?void 0:t),options:a}),this.instances.set(r,i),this.instancesOptions.set(r,a),this.invokeOnInitCallbacks(i,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,i)}catch(e){}return i||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee;return this.component?this.component.multipleInstances?e:Ee:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,Ce,Oe=function(){"use strict";function t(r){e(u)(this,t),this.name=r,this.providers=new Map}return e(c)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Se(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Te=(f=a("hKHmD"),[]);(Ce=De||(De={}))[Ce.DEBUG=0]="DEBUG",Ce[Ce.VERBOSE=1]="VERBOSE",Ce[Ce.INFO=2]="INFO",Ce[Ce.WARN=3]="WARN",Ce[Ce.ERROR=4]="ERROR",Ce[Ce.SILENT=5]="SILENT";var Ae,je={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},Me=De.INFO,Pe=(Ae={},e(f)(Ae,De.DEBUG,"log"),e(f)(Ae,De.VERBOSE,"log"),e(f)(Ae,De.INFO,"info"),e(f)(Ae,De.WARN,"warn"),e(f)(Ae,De.ERROR,"error"),Ae),Le=function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=Pe[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(p)(a)))}},Ne=function(){"use strict";function t(r){e(u)(this,t),this.name=r,this._logLevel=Me,this._logHandler=Le,this._userLogHandler=null,Te.push(this)}return e(c)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in De))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?je[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.DEBUG].concat(e(p)(r))),this._logHandler.apply(this,[this,De.DEBUG].concat(e(p)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.VERBOSE].concat(e(p)(r))),this._logHandler.apply(this,[this,De.VERBOSE].concat(e(p)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.INFO].concat(e(p)(r))),this._logHandler.apply(this,[this,De.INFO].concat(e(p)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.WARN].concat(e(p)(r))),this._logHandler.apply(this,[this,De.WARN].concat(e(p)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.ERROR].concat(e(p)(r))),this._logHandler.apply(this,[this,De.ERROR].concat(e(p)(r)))}}]),t}();var Be={};Object.defineProperty(Be,"__esModule",{value:!0}),Be.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){Fe.default(e,t,r[t])}))}return e};var Fe=function(e){return e&&e.__esModule?e:{default:e}}(a("hKHmD"));var Re,He;var ze=new WeakMap,Ve=new WeakMap,qe=new WeakMap,We=new WeakMap,Ue=new WeakMap;var $e={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Ve.get(e);if("objectStoreNames"===t)return e.objectStoreNames||qe.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Je(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ke(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(He||(He=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(Xe(this),r),Je(ze.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return Je(t.apply(Xe(this),r))}:function(r){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];var o,s=(o=t).call.apply(o,[Xe(this),r].concat(e(p)(a)));return qe.set(s,r.sort?r.sort():[r]),Je(s)}}function Ge(e){return"function"==typeof e?Ke(e):(e instanceof IDBTransaction&&function(e){if(!Ve.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),n()},i=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));Ve.set(e,t)}}(e),t=e,(Re||(Re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,$e):e);var t}function Je(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(Je(t.result)),n()},i=function(){r(t.error),n()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&ze.set(e,t)})).catch((function(){})),Ue.set(r,t),r;var t,r;if(We.has(e))return We.get(e);var n=Ge(e);return n!==e&&(We.set(e,n),Ue.set(n,e)),n}var Xe=function(e){return Ue.get(e)};function Qe(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,a=r.upgrade,i=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=Je(s);return a&&s.addEventListener("upgradeneeded",(function(e){a(Je(s.result),e.oldVersion,e.newVersion,Je(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}var Ye=["get","getKey","getAll","getAllKeys","count"],Ze=["put","add","delete","clear"],et=new Map;function tt(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(et.get(r))return et.get(r);var n=r.replace(/FromIndex$/,""),a=r!==n,i=Ze.includes(n);if(n in(a?IDBIndex:IDBObjectStore).prototype&&(i||Ye.includes(n))){var s,u=(s=e(o)(e(g).mark((function t(r){var o,s,u,c,l,f,h=arguments;return e(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=h.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=h[u];return l=this.transaction(r,i?"readwrite":"readonly"),f=l.store,a&&(f=f.index(s.shift())),t.next=7,Promise.all([(c=f)[n].apply(c,e(p)(s)),i&&l.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return s.apply(this,arguments)});return et.set(r,u),u}}}$e=function(t){return e(Be)({},t,{get:function(e,r,n){return tt(e,r)||t.get(e,r,n)},has:function(e,r){return!!tt(e,r)||t.has(e,r)}})}($e);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rt=function(){"use strict";function t(r){e(u)(this,t),this.container=r}return e(c)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var nt,at,it="@firebase/app",ot="0.8.3",st=new Ne("@firebase/app"),ut="[DEFAULT]",ct=(nt={},e(f)(nt,it,"fire-core"),e(f)(nt,"@firebase/app-compat","fire-core-compat"),e(f)(nt,"@firebase/analytics","fire-analytics"),e(f)(nt,"@firebase/analytics-compat","fire-analytics-compat"),e(f)(nt,"@firebase/app-check","fire-app-check"),e(f)(nt,"@firebase/app-check-compat","fire-app-check-compat"),e(f)(nt,"@firebase/auth","fire-auth"),e(f)(nt,"@firebase/auth-compat","fire-auth-compat"),e(f)(nt,"@firebase/database","fire-rtdb"),e(f)(nt,"@firebase/database-compat","fire-rtdb-compat"),e(f)(nt,"@firebase/functions","fire-fn"),e(f)(nt,"@firebase/functions-compat","fire-fn-compat"),e(f)(nt,"@firebase/installations","fire-iid"),e(f)(nt,"@firebase/installations-compat","fire-iid-compat"),e(f)(nt,"@firebase/messaging","fire-fcm"),e(f)(nt,"@firebase/messaging-compat","fire-fcm-compat"),e(f)(nt,"@firebase/performance","fire-perf"),e(f)(nt,"@firebase/performance-compat","fire-perf-compat"),e(f)(nt,"@firebase/remote-config","fire-rc"),e(f)(nt,"@firebase/remote-config-compat","fire-rc-compat"),e(f)(nt,"@firebase/storage","fire-gcs"),e(f)(nt,"@firebase/storage-compat","fire-gcs-compat"),e(f)(nt,"@firebase/firestore","fire-fst"),e(f)(nt,"@firebase/firestore-compat","fire-fst-compat"),e(f)(nt,"fire-js","fire-js"),e(f)(nt,"firebase","fire-js-all"),nt),lt=new Map,ft=new Map;function pt(e,t){try{e.container.addComponent(t)}catch(r){st.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function ht(e){var t=e.name;if(ft.has(t))return st.debug("There were multiple attempts to register component ".concat(t,".")),!1;ft.set(t,e);var r=!0,n=!1,a=void 0;try{for(var i,o=lt.values()[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){pt(i.value,e)}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return!0}function dt(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vt=(at={},e(f)(at,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(f)(at,"bad-app-name","Illegal App name: '{$appName}"),e(f)(at,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(f)(at,"app-deleted","Firebase App named '{$appName}' already deleted"),e(f)(at,"no-options","Need to provide options, when not being deployed to hosting via source."),e(f)(at,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(f)(at,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(f)(at,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(f)(at,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(f)(at,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(f)(at,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),at),mt=new me("app","Firebase",vt),yt=function(){"use strict";function t(r,n,a){var i=this;e(u)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ie("app",(function(){return i}),"PUBLIC"))}return e(c)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}]),t}();function gt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;if("object"!=typeof t){var n=t;t={name:n}}var a=Object.assign({name:ut,automaticDataCollectionEnabled:!1},t),i=a.name;if("string"!=typeof i||!i)throw mt.create("bad-app-name",{appName:String(i)});if(r||(r=he()),!r)throw mt.create("no-options");var o=lt.get(i);if(o){if(be(r,o.options)&&be(a,o.config))return o;throw mt.create("duplicate-app",{appName:i})}var s=new Oe(i),u=!0,c=!1,l=void 0;try{for(var f,p=ft.values()[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=f.value;s.addComponent(h)}}catch(e){c=!0,l=e}finally{try{u||null==p.return||p.return()}finally{if(c)throw l}}var d=new yt(r,a,s);return lt.set(i,d),d}function bt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=lt.get(e);if(!t&&e===ut)return gt();if(!t)throw mt.create("no-app",{appName:e});return t}function wt(e,t,r){var n,a=null!==(n=ct[e])&&void 0!==n?n:e;r&&(a+="-".concat(r));var i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var s=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return i&&s.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),i&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void st.warn(s.join(" "))}ht(new Ie("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xt="firebase-heartbeat-store",kt=null;function _t(){return kt||(kt=Qe("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(xt)}}).catch((function(e){throw mt.create("idb-open",{originalErrorMessage:e.message})}))),kt}function It(e){return Et.apply(this,arguments)}function Et(){return(Et=e(o)(e(g).mark((function t(r){var n,a,i;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,_t();case 4:return a=e.sent,e.abrupt("return",a.transaction(xt).objectStore(xt).get(Ct(r)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof ve?st.warn(e.t0.message):(i=mt.create("idb-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message}),st.warn(i.message));case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function St(e,t){return Dt.apply(this,arguments)}function Dt(){return(Dt=e(o)(e(g).mark((function t(r,n){var a,i,o,s,u;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,_t();case 4:return i=e.sent,o=i.transaction(xt,"readwrite"),s=o.objectStore(xt),e.next=9,s.put(n,Ct(r));case 9:return e.abrupt("return",o.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof ve?st.warn(e.t0.message):(u=mt.create("idb-set",{originalErrorMessage:null===(a=e.t0)||void 0===a?void 0:a.message}),st.warn(u.message));case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Ct(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ot=function(){"use strict";function t(r){var n=this;e(u)(this,t),this.container=r,this._heartbeatsCache=null;var a=this.container.getProvider("app").getImmediate();this._storage=new Mt(a),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(c)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(o)(e(g).mark((function r(){var n,a,i;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),a=n.getPlatformInfoString(),i=Tt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==i&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:i,agent:a});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(o)(e(g).mark((function r(){var n,a,i,o,s;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=Tt(),a=At(t._heartbeatsCache.heartbeats),i=a.heartbeatsToSend,o=a.unsentEntries,s=ie(JSON.stringify({version:2,heartbeats:i})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function Tt(){return(new Date).toISOString().substring(0,10)}function At(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),a=!0,i=!1,o=void 0;try{for(var s,u=function(e,a){var i=a.value,o=r.find((function(e){return e.agent===i.agent}));if(o){if(o.dates.push(i.date),Pt(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:i.agent,dates:[i.date]}),Pt(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=u(c,s);if("break"===l)break}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var jt,Mt=function(){"use strict";function t(r){e(u)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(c)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(o)(e(g).mark((function t(){return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",ce().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(o)(e(g).mark((function r(){var n;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,It(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(o)(e(g).mark((function n(){var a,i;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return i=e.sent,e.abrupt("return",St(r.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(o)(e(g).mark((function n(){var a,i;return e(g).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return i=n.sent,n.abrupt("return",St(r.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:e(p)(i.heartbeats).concat(e(p)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function Pt(e){return ie(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt="",ht(new Ie("platform-logger",(function(e){return new rt(e)}),"PRIVATE")),ht(new Ie("heartbeat",(function(e){return new Ot(e)}),"PRIVATE")),wt(it,ot,jt),wt(it,ot,"esm2017"),wt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
wt("firebase","9.13.0","app");f=a("hKHmD"),f=a("hKHmD");var Lt,Nt="@firebase/installations",Bt="0.5.16",Ft=1e4,Rt="w:".concat(Bt),Ht="FIS_v2",zt=36e5,Vt=(Lt={},e(f)(Lt,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(f)(Lt,"not-registered","Firebase Installation is not registered."),e(f)(Lt,"installation-not-found","Firebase Installation not found."),e(f)(Lt,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(f)(Lt,"app-offline","Could not process request. Application offline."),e(f)(Lt,"delete-pending-registration","Can't delete installation while there is a pending registration request."),Lt),qt=new me("installations","Installations",Vt);function Wt(e){return e instanceof ve&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function $t(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function Kt(e,t){return Gt.apply(this,arguments)}function Gt(){return(Gt=e(o)(e(g).mark((function t(r,n){var a,i;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.json();case 2:return a=e.sent,i=a.error,e.abrupt("return",qt.create("request-failed",{requestName:r,serverCode:i.code,serverMessage:i.message,serverStatus:i.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Jt(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xt(e,t){var r=t.refreshToken,n=Jt(e);return n.append("Authorization",function(e){return"".concat(Ht," ").concat(e)}(r)),n}function Qt(e){return Yt.apply(this,arguments)}function Yt(){return(Yt=e(o)(e(g).mark((function t(r){var n;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:if(!((n=e.sent).status>=500&&n.status<600)){e.next=5;break}return e.abrupt("return",r());case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Zt(e,t){return er.apply(this,arguments)}function er(){return(er=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(g).mark((function t(r,n){var a,i,o,s,u,c,l,f,p,h,d,v;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.appConfig,i=r.heartbeatServiceProvider,o=n.fid,s=Ut(a),u=Jt(a),!(c=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return f={fid:o,authVersion:Ht,appId:a.appId,sdkVersion:Rt},p={method:"POST",headers:u,body:JSON.stringify(f)},e.next=13,Qt((function(){return fetch(s,p)}));case 13:if(!(h=e.sent).ok){e.next=22;break}return e.next=17,h.json();case 17:return d=e.sent,v={fid:d.fid||o,registrationStatus:2,refreshToken:d.refreshToken,authToken:$t(d.authToken)},e.abrupt("return",v);case 22:return e.next=24,Kt("Create Installation",h);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rr=/^[cdef][\w-]{21}$/;function nr(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var r=function(t){return(r=t,btoa((n=String).fromCharCode.apply(n,e(p)(r))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var r,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return rr.test(r)?r:""}catch(e){return""}}function ar(e){return"".concat(e.appName,"!").concat(e.appId)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ir=new Map;function or(e,t){var r=ar(e);sr(r,t),function(e,t){var r=cr();r&&r.postMessage({key:e,fid:t});lr()}(r,t)}function sr(e,t){var r=ir.get(e);if(r){var n=!0,a=!1,i=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}}var ur=null;function cr(){return!ur&&"BroadcastChannel"in self&&((ur=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){sr(e.data.key,e.data.fid)}),ur}function lr(){0===ir.size&&ur&&(ur.close(),ur=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fr="firebase-installations-store",pr=null;function hr(){return pr||(pr=Qe("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(fr)}})),pr}function dr(e,t){return vr.apply(this,arguments)}function vr(){return(vr=e(o)(e(g).mark((function t(r,n){var a,i,o,s,u;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ar(r),e.next=3,hr();case 3:return i=e.sent,o=i.transaction(fr,"readwrite"),s=o.objectStore(fr),e.next=8,s.get(a);case 8:return u=e.sent,e.next=11,s.put(n,a);case 11:return e.next=13,o.done;case 13:return u&&u.fid===n.fid||or(r,n.fid),e.abrupt("return",n);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function mr(e){return yr.apply(this,arguments)}function yr(){return(yr=e(o)(e(g).mark((function t(r){var n,a,i;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ar(r),e.next=3,hr();case 3:return a=e.sent,i=a.transaction(fr,"readwrite"),e.next=7,i.objectStore(fr).delete(n);case 7:return e.next=9,i.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function gr(e,t){return br.apply(this,arguments)}function br(){return(br=e(o)(e(g).mark((function t(r,n){var a,i,o,s,u,c;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ar(r),e.next=3,hr();case 3:return i=e.sent,o=i.transaction(fr,"readwrite"),s=o.objectStore(fr),e.next=8,s.get(a);case 8:if(u=e.sent,void 0!==(c=n(u))){e.next=15;break}return e.next=13,s.delete(a);case 13:e.next=17;break;case 15:return e.next=17,s.put(c,a);case 17:return e.next=19,o.done;case 19:return!c||u&&u.fid===c.fid||or(r,c.fid),e.abrupt("return",c);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wr(e){return xr.apply(this,arguments)}function xr(){return(xr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(g).mark((function t(r){var n,a;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,gr(r.appConfig,(function(e){var t=kr(e),a=_r(r,t);return n=a.registrationPromise,a.installationEntry}));case 3:if(""!==(a=e.sent).fid){e.next=9;break}return e.next=7,n;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:a,registrationPromise:n});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function kr(e){return Cr(e||{fid:nr(),registrationStatus:0})}function _r(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(qt.create("app-offline"))};var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=function(e,t){return Ir.apply(this,arguments)}(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Er(e)}:{installationEntry:t}}function Ir(){return(Ir=e(o)(e(g).mark((function t(r,n){var a;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Zt(r,n);case 3:return a=e.sent,e.abrupt("return",dr(r.appConfig,a));case 7:if(e.prev=7,e.t0=e.catch(0),!Wt(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,mr(r.appConfig);case 12:e.next=16;break;case 14:return e.next=16,dr(r.appConfig,{fid:n.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Er(e){return Sr.apply(this,arguments)}function Sr(){return(Sr=e(o)(e(g).mark((function t(r){var n,a,i,o;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Dr(r.appConfig);case 2:n=e.sent;case 3:if(1!==n.registrationStatus){e.next=11;break}return e.next=6,tr(100);case 6:return e.next=8,Dr(r.appConfig);case 8:n=e.sent,e.next=3;break;case 11:if(0!==n.registrationStatus){e.next=22;break}return e.next=14,wr(r);case 14:if(a=e.sent,i=a.installationEntry,!(o=a.registrationPromise)){e.next=21;break}return e.abrupt("return",o);case 21:return e.abrupt("return",i);case 22:return e.abrupt("return",n);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Dr(e){return gr(e,(function(e){if(!e)throw qt.create("installation-not-found");return Cr(e)}))}function Cr(e){return 1===(t=e).registrationStatus&&t.registrationTime+Ft<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Or(e,t){return Tr.apply(this,arguments)}function Tr(){return(Tr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(g).mark((function t(r,n){var a,i,o,s,u,c,l,f,p,h,d;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.appConfig,i=r.heartbeatServiceProvider,o=Ar(a,n),s=Xt(a,n),!(u=i.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,u.getHeartbeatsHeader();case 7:(c=e.sent)&&s.append("x-firebase-client",c);case 9:return l={installation:{sdkVersion:Rt,appId:a.appId}},f={method:"POST",headers:s,body:JSON.stringify(l)},e.next=13,Qt((function(){return fetch(o,f)}));case 13:if(!(p=e.sent).ok){e.next=22;break}return e.next=17,p.json();case 17:return h=e.sent,d=$t(h),e.abrupt("return",d);case 22:return e.next=24,Kt("Generate Auth Token",p);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ar(e,t){var r=t.fid;return"".concat(Ut(e),"/").concat(r,"/authTokens:generate")}function jr(e){return Mr.apply(this,arguments)}function Mr(){return Mr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(g).mark((function t(r){var n,a,i,o,s=arguments;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]&&s[1],e.next=4,gr(r.appConfig,(function(e){if(!Rr(e))throw qt.create("not-registered");var t=e.authToken;if(!n&&Hr(t))return e;if(1===t.requestStatus)return a=Pr(r,n),e;if(!navigator.onLine)throw qt.create("app-offline");var i=zr(e);return a=Br(r,i),i}));case 4:if(i=e.sent,!a){e.next=11;break}return e.next=8,a;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=i.authToken;case 12:return o=e.t0,e.abrupt("return",o);case 14:case"end":return e.stop()}}),t)}))),Mr.apply(this,arguments)}function Pr(e,t){return Lr.apply(this,arguments)}function Lr(){return(Lr=e(o)(e(g).mark((function t(r,n){var a,i;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Nr(r.appConfig);case 2:a=e.sent;case 3:if(1!==a.authToken.requestStatus){e.next=11;break}return e.next=6,tr(100);case 6:return e.next=8,Nr(r.appConfig);case 8:a=e.sent,e.next=3;break;case 11:if(0!==(i=a.authToken).requestStatus){e.next=16;break}return e.abrupt("return",jr(r,n));case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Nr(e){return gr(e,(function(e){if(!Rr(e))throw qt.create("not-registered");var t,r=e.authToken;return 1===(t=r).requestStatus&&t.requestTime+Ft<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function Br(e,t){return Fr.apply(this,arguments)}function Fr(){return(Fr=e(o)(e(g).mark((function t(r,n){var a,i,o;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Or(r,n);case 3:return a=e.sent,i=Object.assign(Object.assign({},n),{authToken:a}),e.next=7,dr(r.appConfig,i);case 7:return e.abrupt("return",a);case 10:if(e.prev=10,e.t0=e.catch(0),!Wt(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,mr(r.appConfig);case 15:e.next=20;break;case 17:return o=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}),e.next=20,dr(r.appConfig,o);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function Rr(e){return void 0!==e&&2===e.registrationStatus}function Hr(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+zt}(e)}function zr(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Vr(){return(Vr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(g).mark((function t(r){var n,a,i,o;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r,e.next=3,wr(n);case 3:return a=e.sent,i=a.installationEntry,(o=a.registrationPromise)?o.catch(console.error):jr(n).catch(console.error),e.abrupt("return",i.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function qr(){return qr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(g).mark((function t(r){var n,a,i,o=arguments;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]&&o[1],a=r,e.next=4,Wr(a);case 4:return e.next=6,jr(a,n);case 6:return i=e.sent,e.abrupt("return",i.token);case 8:case"end":return e.stop()}}),t)}))),qr.apply(this,arguments)}function Wr(e){return Ur.apply(this,arguments)}function Ur(){return(Ur=e(o)(e(g).mark((function t(r){var n;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,wr(r);case 2:if(!(n=e.sent.registrationPromise)){e.next=6;break}return e.next=6,n;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $r(e){return qt.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kr="installations",Gr=function(e){var t=dt(e.getProvider("app").getImmediate(),Kr).getImmediate(),r={getId:function(){return function(e){return Vr.apply(this,arguments)}(t)},getToken:function(e){return function(e){return qr.apply(this,arguments)}(t,e)}};return r};ht(new Ie(Kr,(function(e){var t=e.getProvider("app").getImmediate(),r=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw $r("App Configuration");if(!e.name)throw $r("App Name");var t=!0,r=!1,n=void 0;try{for(var a,i=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value;if(!e.options[o])throw $r(o)}}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:r,heartbeatServiceProvider:dt(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),ht(new Ie("installations-internal",Gr,"PRIVATE")),wt(Nt,Bt),wt(Nt,Bt,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Jr,Xr="analytics",Qr=6e4,Yr="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zr="https://www.googletagmanager.com/gtag/js",en=new Ne("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function rn(e,t){var r=document.createElement("script");r.src="".concat(Zr,"?l=").concat(e,"&id=").concat(t),r.async=!0,document.head.appendChild(r)}function nn(e,t,r,n,a,i){return an.apply(this,arguments)}function an(){return(an=e(o)(e(g).mark((function t(r,n,a,i,o,s){var u,c,l;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=i[o],e.prev=1,!u){e.next=7;break}return e.next=5,n[u];case 5:e.next=14;break;case 7:return e.next=9,tn(a);case 9:if(c=e.sent,!(l=c.find((function(e){return e.measurementId===o})))){e.next=14;break}return e.next=14,n[l.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),en.error(e.t0);case 19:r("config",o,s);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function on(e,t,r,n,a){return sn.apply(this,arguments)}function sn(){return(sn=e(o)(e(g).mark((function t(r,n,a,i,o){var s,u,c,l,f,p,h,d,v,m,y;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,s=[],!o||!o.send_to){e.next=38;break}return u=o.send_to,Array.isArray(u)||(u=[u]),e.next=7,tn(a);case 7:c=e.sent,l=!0,f=!1,p=void 0,e.prev=9,h=u[Symbol.iterator]();case 11:if(l=(d=h.next()).done){e.next=24;break}if(v=d.value,m=c.find((function(e){return e.measurementId===v})),!(y=m&&n[m.appId])){e.next=19;break}s.push(y),e.next=21;break;case 19:return s=[],e.abrupt("break",24);case 21:l=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),f=!0,p=e.t0;case 30:e.prev=30,e.prev=31,l||null==h.return||h.return();case 33:if(e.prev=33,!f){e.next=36;break}throw p;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===s.length&&(s=Object.values(n)),e.next=41,Promise.all(s);case 41:r("event",i,o||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),en.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function un(t,r,n,a,i){var s=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];window[a].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=function(t,r,n,a){function i(){return(i=e(o)(e(g).mark((function i(o,s,u){return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"event"!==o){e.next=6;break}return e.next=4,on(t,r,n,s,u);case 4:e.next=12;break;case 6:if("config"!==o){e.next=11;break}return e.next=9,nn(t,r,n,a,s,u);case 9:e.next=12;break;case 11:"consent"===o?t("consent","update",u):t("set",s);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),en.error(e.t0);case 17:case"end":return e.stop()}}),i,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,r){return i.apply(this,arguments)}}(s,t,r,n),{gtagCore:s,wrappedGtag:window[i]}}function cn(e){var t=window.document.getElementsByTagName("script"),r=!0,n=!1,a=void 0;try{for(var i,o=Object.values(t)[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=i.value;if(s.src&&s.src.includes(Zr)&&s.src.includes(e))return s}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ln=(Jr={},e(f)(Jr,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(f)(Jr,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(f)(Jr,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(f)(Jr,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(f)(Jr,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(f)(Jr,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(f)(Jr,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(f)(Jr,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(f)(Jr,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(f)(Jr,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),Jr),fn=new me("analytics","Analytics",ln),pn=function(){"use strict";function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(u)(this,t),this.throttleMetadata=r,this.intervalMillis=n}return e(c)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),hn=new pn;function dn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function vn(e){return mn.apply(this,arguments)}function mn(){return(mn=e(o)(e(g).mark((function t(r){var n,a,i,o,s,u,c,l;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.appId,i=r.apiKey,o={method:"GET",headers:dn(i)},s=Yr.replace("{app-id}",a),e.next=6,fetch(s,o);case 6:if(200===(u=e.sent).status||304===u.status){e.next=19;break}return c="",e.prev=9,e.next=12,u.json();case 12:l=e.sent,(null===(n=l.error)||void 0===n?void 0:n.message)&&(c=l.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw fn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:c});case 19:return e.abrupt("return",u.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function yn(e){return gn.apply(this,arguments)}function gn(){return gn=e(o)(e(g).mark((function t(r){var n,a,i,s,u,c,l,f,p=arguments;return e(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=p.length>1&&void 0!==p[1]?p[1]:hn,a=p.length>2?p[2]:void 0,i=r.options,s=i.appId,u=i.apiKey,c=i.measurementId,s){t.next=4;break}throw fn.create("no-app-id");case 4:if(u){t.next=8;break}if(!c){t.next=7;break}return t.abrupt("return",{measurementId:c,appId:s});case 7:throw fn.create("no-api-key");case 8:return l=n.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new En,setTimeout(e(o)(e(g).mark((function t(){return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==a?a:Qr),t.abrupt("return",bn({appId:s,apiKey:u,measurementId:c},l,f,n));case 12:case"end":return t.stop()}}),t)}))),gn.apply(this,arguments)}function bn(e,t,r){return wn.apply(this,arguments)}function wn(){return wn=e(o)(e(g).mark((function t(r,n,a){var i,o,s,u,c,l,f,p,h,d,v,m=arguments;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.throttleEndTimeMillis,o=n.backoffCount,s=m.length>3&&void 0!==m[3]?m[3]:hn,l=r.appId,f=r.measurementId,e.prev=3,e.next=6,xn(a,i);case 6:e.next=14;break;case 8:if(e.prev=8,e.t0=e.catch(3),!f){e.next=13;break}return en.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null===(u=e.t0)||void 0===u?void 0:u.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 13:throw e.t0;case 14:return e.prev=14,e.next=17,vn(r);case 17:return p=e.sent,s.deleteThrottleMetadata(l),e.abrupt("return",p);case 22:if(e.prev=22,e.t1=e.catch(14),kn(h=e.t1)){e.next=33;break}if(s.deleteThrottleMetadata(l),!f){e.next=32;break}return en.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(f)+' provided in the "measurementId" field in the local Firebase config. ['.concat(null==h?void 0:h.message,"]")),e.abrupt("return",{appId:l,measurementId:f});case 32:throw e.t1;case 33:return d=503===Number(null===(c=null==h?void 0:h.customData)||void 0===c?void 0:c.httpStatus)?ke(o,s.intervalMillis,30):ke(o,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+d,backoffCount:o+1},s.setThrottleMetadata(l,v),en.debug("Calling attemptFetch again in ".concat(d," millis")),e.abrupt("return",bn(r,v,a,s));case 38:case"end":return e.stop()}}),t,null,[[3,8],[14,22]])}))),wn.apply(this,arguments)}function xn(e,t){return new Promise((function(r,n){var a=Math.max(t-Date.now(),0),i=setTimeout(r,a);e.addEventListener((function(){clearTimeout(i),n(fn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function kn(e){if(!(e instanceof ve&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var _n,In,En=function(){"use strict";function t(){e(u)(this,t),this.listeners=[]}return e(c)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return(Sn=e(o)(e(g).mark((function t(r,n,a,i,o){var s,u;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!o.global){e.next=5;break}return r("event",a,i),e.abrupt("return");case 5:return e.next=7,n;case 7:s=e.sent,u=Object.assign(Object.assign({},i),{send_to:s}),r("event",a,u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Dn(e){In=e}function Cn(e){_n=e}function On(){return Tn.apply(this,arguments)}function Tn(){return(Tn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(g).mark((function t(){var r;return e(g).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ue()){e.next=6;break}return en.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 6:return e.prev=6,e.next=9,ce();case 9:e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(6),en.warn(fn.create("indexeddb-unavailable",{errorInfo:null===(r=e.t0)||void 0===r?void 0:r.toString()}).message),e.abrupt("return",!1);case 15:return e.abrupt("return",!0);case 16:case"end":return e.stop()}}),t,null,[[6,11]])})))).apply(this,arguments)}function An(){return(An=e(o)(e(g).mark((function t(r,n,a,i,o,s,u){var c,l,f,p,h,d,v;return e(g).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(l=yn(r)).then((function(e){a[e.measurementId]=e.appId,r.options.measurementId&&e.measurementId!==r.options.measurementId&&en.warn("The measurement ID in the local Firebase config (".concat(r.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return en.error(e)})),n.push(l),f=On().then((function(e){return e?i.getId():void 0})),t.t0=e(w),t.next=8,Promise.all([l,f]);case 8:return t.t1=t.sent,p=(0,t.t0)(t.t1,2),h=p[0],d=p[1],cn(s)||rn(s,h.measurementId),In&&(o("consent","default",In),Dn(void 0)),o("js",new Date),(v=null!==(c=null==u?void 0:u.config)&&void 0!==c?c:{}).origin="firebase",v.update=!0,null!=d&&(v.firebase_id=d),o("config",h.measurementId,v),_n&&(o("set",_n),Cn(void 0)),t.abrupt("return",h.measurementId);case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jn,Mn,Pn=function(){"use strict";function t(r){e(u)(this,t),this.app=r}return e(c)(t,[{key:"_delete",value:function(){return delete Ln[this.app.options.appId],Promise.resolve()}}]),t}(),Ln={},Nn=[],Bn={},Fn="dataLayer",Rn="gtag",Hn=!1;function zn(e,t,r){!function(){var e=[];if(se()&&e.push("This is a browser extension environment."),le()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),r=fn.create("invalid-analytics-context",{errorInfo:t});en.warn(r.message)}}();var n,a,i=e.options.appId;if(!i)throw fn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw fn.create("no-api-key");en.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Ln[i])throw fn.create("already-exists",{id:i});if(!Hn){n=Fn,a=[],Array.isArray(window[n])?a=window[n]:window[n]=a;var o=un(Ln,Nn,Bn,Fn,Rn),s=o.wrappedGtag,u=o.gtagCore;Mn=s,jn=u,Hn=!0}return Ln[i]=function(e,t,r,n,a,i,o){return An.apply(this,arguments)}(e,Nn,Bn,t,jn,Fn,r),new Pn(e)}function Vn(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=dt(e,Xr);if(r.isInitialized()){var n=r.getImmediate();if(be(t,r.getOptions()))return n;throw fn.create("already-initialized")}var a=r.initialize({options:t});return a}function qn(e,t,r,n){e=_e(e),function(e,t,r,n,a){return Sn.apply(this,arguments)}(Mn,Ln[e.app.options.appId],t,r,n).catch((function(e){return en.error(e)}))}var Wn="@firebase/analytics",Un="0.8.4";ht(new Ie(Xr,(function(e,t){var r=t.options;return zn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),r)}),"PUBLIC")),ht(new Ie("analytics-internal",(function(e){try{var t=e.getProvider(Xr).getImmediate();return{logEvent:function(e,r,n){return qn(t,e,r,n)}}}catch(e){throw fn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),wt(Wn,Un),wt(Wn,Un,"esm2017");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt(),t=dt(e=_e(e),Xr);t.isInitialized()?t.getImmediate():Vn(e)}(gt({apiKey:"AIzaSyDRjTFbmRann_cr3ckzqO-WJzrN46pmMNY",authDomain:"ultimate-choir-311114.firebaseapp.com",projectId:"ultimate-choir-311114",storageBucket:"ultimate-choir-311114.appspot.com",messagingSenderId:"747352375066",appId:"1:747352375066:web:bfd52aa1c7f0703dcff6a3",measurementId:"G-XPVPECFXHK"}));i.signBtn.addEventListener("click",(function(){i.bckDrop.classList.remove("is-hidden")})),i.closeBtn.addEventListener("click",(function(){i.bckDrop.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.27a7391a.js.map
