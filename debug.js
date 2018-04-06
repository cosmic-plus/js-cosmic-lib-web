var debug=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";function r(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];n.forEach(function(e){"string"==typeof e||e instanceof Error?t.appendChild(document.createTextNode(e)):t.appendChild(e)})}function i(t){t.innerHTML=""}Object.defineProperty(e,"__esModule",{value:!0}),e.append=r,e.appendClass=function(t,e){t.className=t.className+" "+e},e.clear=i,e.copyContent=function(t){t.select(),document.execCommand("copy")},e.create=function(t,e){if(!t)throw new Error("Missing tag name");var n=document.createElement(t);if("string"==typeof e)switch(e.substr(0,1)){case"#":n.id=e.subtstr(1);break;case".":n.className=e.substr(1);break;default:throw new Error("Unhandled attribute")}else{var i=void 0;for(i in e)n[i]=e[i]}for(var o=arguments.length,a=Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];a.length>0&&r.apply(void 0,[n].concat(a));return n},e.destroy=function(t){try{t.parentNode.removeChild(t)}catch(t){console.log(t)}},e.grab=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;switch(t.substr(0,1)){case"#":return e.getElementById(t.substr(1));case".":return e.getElementsByClassName(t.substr(1))[0];default:return e.getElementsByTagName(t)[0]}},e.rewrite=function(t){i(t);for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];r.apply(void 0,[t].concat(n))}},function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{(l=e.regeneratorRuntime=u?t.exports:{}).wrap=b;var p="suspendedStart",h="suspendedYield",f="executing",m="completed",d={},g={};g[a]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(D([])));y&&y!==r&&i.call(y,a)&&(g=y);var k=P.prototype=x.prototype=Object.create(g);O.prototype=k.constructor=P,P.constructor=O,P[c]=O.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,P):(t.__proto__=P,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(k),t},l.awrap=function(t){return{__await:t}},E(T.prototype),T.prototype[s]=function(){return this},l.AsyncIterator=T,l.async=function(t,e,n,r){var i=new T(b(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(k),k[c]="Generator",k[a]=function(){return this},k.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=D,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return s.type="throw",s.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;_(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}}}function b(t,e,n,r){var i=e&&e.prototype instanceof x?e:x,o=Object.create(i.prototype),a=new F(r||[]);return o._invoke=function(t,e,n){var r=p;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===m){if("throw"===i)throw o;return A()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=N(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=w(t,e,n);if("normal"===c.type){if(r=n.done?m:h,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=m,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function x(){}function O(){}function P(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function T(t){var e;this._invoke=function(n,r){function o(){return new Promise(function(e,o){!function e(n,r,o,a){var s=w(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(u).then(function(t){c.value=t,o(c)},a)}a(s.arg)}(n,r,e,o)})}return e=e?e.then(o,o):o()}}function N(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,N(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=w(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function D(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,n){var r=function(){return this}()||Function("return this")(),i=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=i&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(1),i)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.debug=void 0;var r,i,o,a,s,c,u=n(3),l=(r=u)&&r.__esModule?r:{default:r},p=(e.debug=(i=g(l.default.mark(function t(){return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:D(),document.location.hash&&A(+document.location.hash.substr(1));case 2:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)}),o=g(l.default.mark(function t(e){var n,r,i,o,a,s,c;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(n=F[e]).status="run",r=!0,i=!1,o=void 0,t.prev=5,a=n.tests[Symbol.iterator]();case 7:if(r=(s=a.next()).done){t.next=19;break}c=s.value,t.t0=c[0],t.next="title"===t.t0?12:"url"===t.t0?14:16;break;case 12:return u=n.node,l=c[1],void 0,p=d.create("h3",{},l),d.append(u,p,d.create("hr")),t.abrupt("break",16);case 14:return t.next=16,h(n.node,c[1],c[2]);case 16:r=!0,t.next=7;break;case 19:t.next=25;break;case 21:t.prev=21,t.t1=t.catch(5),i=!0,o=t.t1;case 25:t.prev=25,t.prev=26,!r&&a.return&&a.return();case 28:if(t.prev=28,!i){t.next=31;break}throw o;case 31:return t.finish(28);case 32:return t.finish(25);case 33:n.status="done";case 34:case"end":return t.stop()}var u,l,p},t,this,[[5,21,25,33],[26,,28,32]])})),function(t){return o.apply(this,arguments)}),h=(a=g(l.default.mark(function t(e,n){var r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=new k(n,"test",b),t.prev=1,t.t0=d,t.t1={},t.next=6,r.getUri();case 6:t.t2=t.sent,t.t0.create.call(t.t0,"pre",t.t1,t.t2),t.next=13;break;case 10:t.prev=10,t.t3=t.catch(1),console.log(t.t3);case 13:return t.t4=d,t.t5=e,t.t6=d,t.t7={},t.next=19,r.getUri();case 19:return t.t8=t.sent,t.t9=t.t6.create.call(t.t6,"pre",t.t7,t.t8),t.t10=r.transactionNode,t.t11=d.create("hr"),t.t4.append.call(t.t4,t.t5,t.t9,t.t10,t.t11),r.transactionNode.style.display="none",t.prev=25,t.next=28,f(r,i);case 28:return t.next=30,m(r,i);case 30:t.next=37;break;case 32:t.prev=32,t.t12=t.catch(25),console.log(t.t12),r.transactionNode.style.display="block",d.append(r.transactionNode,d.create("div",".debug_error",t.t12));case 37:case"end":return t.stop()}},t,this,[[1,10],[25,32]])})),function(t,e){return a.apply(this,arguments)}),f=(s=g(l.default.mark(function t(e,n){var r,i,o,a,s,c,u;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];d.append.apply(d,[e.transactionNode].concat(n))},t.next=3,e.getXdr();case 3:return i=t.sent,r(d.create("textarea",{},i)),o=new k(i),t.next=8,o.getJson();case 8:return a=t.sent,r(d.create("pre",{},a)),t.next=12,o.getUri();case 12:return s=t.sent,c=new k(s,"test",b),t.next=16,c.getXdr();case 16:u=t.sent,i!==u?r(d.create("div",".debug_error","Loopback XDR differ from original"),d.create("textarea",{},u)):r(d.create("div",".debug_done","Conversion check: ok"));case 18:case"end":return t.stop()}},t,this)})),function(t,e){return s.apply(this,arguments)}),m=(c=g(l.default.mark(function t(e,n){return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.sign(w);case 2:if(!n.send){t.next=5;break}return t.next=5,e.send();case 5:case"end":return t.stop()}},t,this)})),function(t,e){return c.apply(this,arguments)}),d=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0));function g(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var a=e[i](o),s=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})}}var v,y,k=cosmicLib.CosmicLink,b="GBP7EQX652UPJJJRYFAPH64V2MHGUGFJNKJN7RNOPNSFIBH4BW6NSF45",w="SAZMGMO2DUBRGQIXNHIEBRLUQOPC7SYLABFMC55JZVPXMZPBRXLMVKKV",x="GBWYUHFOHJECKDLFNCPGPVU6XRDJIBT5BYF6VXZEDHWVQRCR4HZVCGPU",O="ETH:GBDEVU63Y6NTHJQQZIKVTC23NWLQVP3WJ2RI2OTSJTNYOIGICST6DUXR",P="CNY:admin*ripplefox.com",E="4a3ec3730504983f960fb2df35a1d68d640ff55d151fa3128ca0fc707f86882e",T="3389e9f0f1a65f19736cacf544c2e825313e8447f569233bb8db39aa607c1234",N="GBP7EQX652UPJJJRYFAPH64V2MHGUGFJNKJN7RNOPNSFIBH4BW6NSF54",L=[["bigTitle","Transaction fields"],["url","https://cosmic.link/?inflation&source="+x],["url","https://cosmic.link/?inflation&fee=500"],["url","https://cosmic.link/?manageData&name=test&value=true&minTime=2017-12-12&maxTime=2018-12-12",{send:1}],["url","https://cosmic.link/?manageData&name=test&value=true&minTime=2017-12-12T06:05Z",{send:1}],["url","https://cosmic.link/?manageData&name=test&value=true&maxTime=2018-12-12T06:05+01:30",{send:1}],["url","https://cosmic.link/?inflation&memo=text:Hello_world!"],["url","https://cosmic.link/?inflation&memo=id:18446744073709551615"],["url","https://cosmic.link/?inflation&memo=hash:"+E],["url","https://cosmic.link/?inflation&memo=return:"+E],["bigTitle","Operations"],["title","Account merge"],["url","https://cosmic.link/?accountMerge&destination="+x],["title","Allow trust"],["url","https://cosmic.link/?allowTrust&authorize=true&assetCode=DIA&trustor="+x],["url","https://cosmic.link/?allowTrust&assetCode=DIA&trustor="+x],["url","https://cosmic.link/?allowTrust&authorize=false&assetCode=DIA&trustor="+x],["title","Change trust"],["url","https://cosmic.link/?changeTrust&asset="+O],["url","https://cosmic.link/?changeTrust&limit=0&asset="+O],["url","https://cosmic.link/?changeTrust&limit=1000&asset="+O],["title","Create account"],["url","https://cosmic.link/?createAccount&destination="+x+"&startingBalance=220"],["title","Create passive offer"],["url","https://cosmic.link/?createPassiveOffer&buying="+O+"&selling="+P+"&amount=10&price=50"],["url","https://cosmic.link/?createPassiveOffer&buying="+O+"&selling="+P+"&amount=10&price=50:1"],["url","https://cosmic.link/?createPassiveOffer&buying="+O+"&amount=100&price=10"],["url","https://cosmic.link/?createPassiveOffer&selling="+O+"&amount=100&price=0.1"],["title","Inflation"],["url","https://cosmic.link/?inflation"],["title","Manage data"],["url","https://cosmic.link/?manageData&name=mail&value=someone@example.org"],["url","https://cosmic.link/?manageData&name=address"],["title","Manage offer"],["url","https://cosmic.link/?manageOffer&selling="+O+"&buying="+P+"&amount=500&price=1:50"],["url","https://cosmic.link/?manageOffer&buying="+O+"&selling="+P+"&amount=500&price=1:25&offerId=12345"],["url","https://cosmic.link/?manageOffer&selling="+O+"&amount=10&price=0.1"],["title","Path Payment"],["url","https://cosmic.link/?pathPayment&sendAsset="+O+"&sendMax=20&destination="+x+"&destAsset="+P+"&destAmount=200"],["url","https://cosmic.link/?pathPayment&sendAsset="+O+"&sendMax=20&destination="+x+"&destAmount=500&path="+P+",EURT:GAP5LETOV6YIE62YAM56STDANPRDO7ZFDBGSNHJQIYGGKSMOZAHOOS2S,XRP:GBXRPL45NPHCVMFFAYZVUVFFVKSIZ362ZXFP7I2ETNQ3QKZMFLPRDTD5"],["title","Payment"],["url","https://cosmic.link/?payment&destination="+x+"&amount=20&asset="+O],["url","https://cosmic.link/?payment&destination="+x+"&amount=0.001"],["title","setOptions"],["url","https://cosmic.link/?setOptions"],["url","https://cosmic.link/?setOptions&inflationDest="+x],["url","https://cosmic.link/?setOptions&clearFlags=3"],["url","https://cosmic.link/?setOptions&setFlags=4"],["url","https://cosmic.link/?setOptions&clearFlags=4&setFlags=3"],["url","https://cosmic.link/?setOptions&masterWeight=10"],["url","https://cosmic.link/?setOptions&lowThreshold=1&medThreshold=5&highThreshold=8"],["url","https://cosmic.link/?setOptions&signer=1:key:"+x],["url","https://cosmic.link/?setOptions&signer=0:key:"+x],["url","https://cosmic.link/?setOptions&signer=1:hash:"+E],["url","https://cosmic.link/?setOptions&signer=0:hash:"+E],["url","https://cosmic.link/?setOptions&signer=1:tx:"+T],["url","https://cosmic.link/?setOptions&signer=0:tx:"+T],["url","https://cosmic.link/?setOptions&homeDomain=cosmic.link"],["url","https://cosmic.link/?setOptions&homeDomain="],["bigTitle","Sending tests"],["url","stellar://?manageData&name=name&value=Mister.Ticot",{send:1}],["url","https://cosmic.link/?manageData&name=planet&value=alert('pluton')",{send:1}],["url","https://cosmic.link/?manageData&name=other&value=spaces%20and%20UTF8%20%7B%C3%B0%E2%80%A6%C3%B0%7D",{send:1}],["url","https://cosmic.link/?setOptions&homeDomain=cosmic.link",{send:1}],["url","https://cosmic.link/?payment&amount=0.00001&destination="+x,{send:1}],["bigTitle","Error handling"],["title","Unknow operation"],["url","https://cosmic.link/?something"],["title","Unknow field"],["url","https://cosmic.link/?inflation&weird=true"],["title","Empty field"],["url","https://cosmic.link/?manageData&name="],["title","Wrong address"],["url","https://cosmic.link/?payment&amount=1&destination=nobody*example.org"],["url","https://cosmic.link/?payment&amount=1&destination=weird"],["url","https://cosmic.link/?payment&amount=1&destination="+N],["url","https://cosmic.link/?inflation&source=nobody*example.org"],["url","https://cosmic.link/?inflation&source=weird"],["url","https://cosmic.link/?inflation&source="+N],["title","Wrong amount"],["url","https://cosmic.link/?payment&amount=abc&destination="+x]],_=d.grab("main"),F={};function D(){var t=d.grab("nav"),e=0,n=0;L.forEach(function(r){if("bigTitle"===r[0]){e&&(F[e].urlNum=n),e++;var i=d.create("div",".page");F[e]={node:i,tests:[]},d.append(t,d.create("a",{href:"#"+e,onclick:(o=e,function(){return A(o)})},r[1]))}else"url"===r[0]&&n++,F[e].tests.push(r);var o})}function A(t){var e=F[t];d.clear(_),d.append(_,e.node),e.status||p(t)}v="\n  nav { display: block; margin: auto; }\n  nav a { display: inline-block; margin: 1em; }\n  footer { text-align: right; }\n  textarea { width: 100%; rows: 3; }\n  .debug_done { color: mediumseagreen; }\n  .debug_error { color: tomato; }\n",y=d.create("style",{type:"text/css"},v),d.append(d.grab("head"),y)}]);
//# sourceMappingURL=debug.js.map