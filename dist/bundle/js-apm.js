!function(t){var n={};function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(n){return t[n]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){e(1)},function(t,n,e){var o=e(4),r=e(2),i=o.default;void 0===r.Apm&&(r.Apm=i),t.exports=o},function(t,n,e){"use strict";(function(n){t.exports=function(){if("object"==typeof globalThis)return globalThis;var t;try{t=this||new Function("return this")()}catch(t){if("object"==typeof window)return window;if("object"==typeof self)return self;if(void 0!==n)return n}return t}()}).call(this,e(3))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n);var o=function(t,n,e){this.userAgent=t,n&&(this.connection=new r(n.type,n.effectiveType,n.downlinkMax,n.downlink,n.rtt,n.saveData)),e&&(this.timing=new i(e.domComplete,e.domContentLoadedEventEnd,e.domContentLoadedEventStart,e.domInteractive,e.loadEventEnd,e.loadEventStart,e.redirectCount,e.unloadEventEnd,e.unloadEventStart))},r=function(t,n,e,o,r,i){this.type=t,this.effectiveType=n,this.downlinkMax=e,this.downlink=o,this.rtt=r,this.saveData=i},i=function(t,n,e,o,r,i,a,u,c){this.domComplete=t,this.domContentLoadedEventEnd=n,this.domContentLoadedEventStart=e,this.domInteractive=o,this.loadEventEnd=r,this.loadEventStart=i,this.redirectCount=a,this.unloadEventEnd=u,this.unloadEventStart=c},a=function(){function t(t){this.navigator=t.navigator,this.performance=t.performance}return t.prototype.getGeneralInfo=function(){var t=this.performance.getEntriesByType("navigation")[0];return new o(this.navigator.userAgent,this.navigator.connection,t)},t}();n.default=a}]);