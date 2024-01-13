(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7648)}])},7648:function(e,t,r){"use strict";r.r(t);var i=r(5893),n=r(3583);r(5303),r(689),t.default=e=>{let{Component:t,pageProps:r}=e;return(0,i.jsx)(n.U,{children:(0,i.jsx)(t,{...r})})}},3583:function(e,t,r){"use strict";r.d(t,{U:function(){return a},b:function(){return u}});var i=r(5893),n=r(7294),s=r(5453);let l=(0,n.createContext)(),o=(0,s.Z)("App Context"),a=e=>{let{children:t}=e,[r,s]=(0,n.useState)({}),[a,u]=(0,n.useState)("listening"),[c,f]=(0,n.useState)(0),[v,b]=(0,n.useState)({});return o.info("Context created"),(0,i.jsx)(l.Provider,{value:{user:r,setUser:s,callerState:a,setCallerState:u,callerDetails:v,setCallerDetails:b,missedCall:c,setMissedCall:f},children:t})},u=()=>(0,n.useContext)(l)},5453:function(e,t,r){"use strict";let i=r(6559);t.Z=e=>i({name:e})},689:function(){},5303:function(){},5346:function(e){"use strict";function t(e){try{return JSON.stringify(e)}catch(e){return'"[Circular]"'}}e.exports=function(e,r,i){var n=i&&i.stringify||t;if("object"==typeof e&&null!==e){var s=r.length+1;if(1===s)return e;var l=Array(s);l[0]=n(e);for(var o=1;o<s;o++)l[o]=n(r[o]);return l.join(" ")}if("string"!=typeof e)return e;var a=r.length;if(0===a)return e;for(var u="",c=0,f=-1,v=e&&e.length||0,b=0;b<v;){if(37===e.charCodeAt(b)&&b+1<v){switch(f=f>-1?f:0,e.charCodeAt(b+1)){case 100:case 102:if(c>=a||null==r[c])break;f<b&&(u+=e.slice(f,b)),u+=Number(r[c]),f=b+2,b++;break;case 105:if(c>=a||null==r[c])break;f<b&&(u+=e.slice(f,b)),u+=Math.floor(Number(r[c])),f=b+2,b++;break;case 79:case 111:case 106:if(c>=a||void 0===r[c])break;f<b&&(u+=e.slice(f,b));var h=typeof r[c];if("string"===h){u+="'"+r[c]+"'",f=b+2,b++;break}if("function"===h){u+=r[c].name||"<anonymous>",f=b+2,b++;break}u+=n(r[c]),f=b+2,b++;break;case 115:if(c>=a)break;f<b&&(u+=e.slice(f,b)),u+=String(r[c]),f=b+2,b++;break;case 37:f<b&&(u+=e.slice(f,b)),u+="%",f=b+2,b++,c--}++c}++b}return -1===f?e:(f<v&&(u+=e.slice(f)),u)}},6559:function(e,t,r){"use strict";let i=r(5346);e.exports=c;let n=function(){function e(e){return void 0!==e&&e}try{if("undefined"!=typeof globalThis)return globalThis;return Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch(t){return e(self)||e(window)||e(this)||{}}}().console||{};function s(e,t){return"silent"===e?1/0:t.levels.values[e]}let l=Symbol("pino.logFuncs"),o=Symbol("pino.hierarchy"),a={error:"log",fatal:"error",warn:"error",info:"log",debug:"log",trace:"log"};function u(e,t){let r={logger:t,parent:e[o]};t[o]=r}function c(e){var t;(e=e||{}).browser=e.browser||{};let r=e.browser.transmit;if(r&&"function"!=typeof r.send)throw Error("pino: transmit option must have a send function");let i=e.browser.write||n;e.browser.write&&(e.browser.asObject=!0);let o=e.serializers||{},h=function(e,t){if(Array.isArray(e)){let t=e.filter(function(e){return"!stdSerializers.err"!==e});return t}return!0===e&&Object.keys(t)}(e.browser.serialize,o),g=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(g=!1);let d=Object.keys(e.customLevels||{}),_=["error","fatal","warn","info","debug","trace"].concat(d);"function"==typeof i&&_.forEach(function(e){i[e]=i}),(!1===e.enabled||e.browser.disabled)&&(e.level="silent");let w=e.level||"info",z=Object.create(i);z.log||(z.log=p),function(e,t,r){let i={};t.forEach(e=>{i[e]=r[e]?r[e]:n[e]||n[a[e]||"log"]||p}),e[l]=i}(z,_,i),u({},z),Object.defineProperty(z,"levelVal",{get:function(){return s(this.level,this)}}),Object.defineProperty(z,"level",{get:function(){return this._level},set:function(e){if("silent"!==e&&!this.levels.values[e])throw Error("unknown level "+e);this._level=e,f(this,O,z,"error"),f(this,O,z,"fatal"),f(this,O,z,"warn"),f(this,O,z,"info"),f(this,O,z,"debug"),f(this,O,z,"trace"),d.forEach(e=>{f(this,O,z,e)})}});let O={transmit:r,serialize:h,asObject:e.browser.asObject,levels:_,timestamp:"function"==typeof(t=e).timestamp?t.timestamp:!1===t.timestamp?m:y};return z.levels=function(e){let t=e.customLevels||{},r=Object.assign({},c.levels.values,t),i=Object.assign({},c.levels.labels,function(e){let t={};return Object.keys(e).forEach(function(r){t[e[r]]=r}),t}(t));return{values:r,labels:i}}(e),z.level=w,z.setMaxListeners=z.getMaxListeners=z.emit=z.addListener=z.on=z.prependListener=z.once=z.prependOnceListener=z.removeListener=z.removeAllListeners=z.listeners=z.listenerCount=z.eventNames=z.write=z.flush=p,z.serializers=o,z._serialize=h,z._stdErrSerialize=g,z.child=function(t,i){if(!t)throw Error("missing bindings for child Pino");i=i||{},h&&t.serializers&&(i.serializers=t.serializers);let n=i.serializers;if(h&&n){var s=Object.assign({},o,n),l=!0===e.browser.serialize?Object.keys(s):h;delete t.serializers,v([t],l,s,this._stdErrSerialize)}function a(e){this._childLevel=(0|e._childLevel)+1,this.bindings=t,s&&(this.serializers=s,this._serialize=l),r&&(this._logEvent=b([].concat(e._logEvent.bindings,t)))}a.prototype=this;let c=new a(this);return u(this,c),c.level=this.level,c},r&&(z._logEvent=b()),z}function f(e,t,r,a){var u,c;if(e[a]=s(e.level,r)>s(a,r)?p:r[l][a],!t.transmit&&e[a]===p)return;e[a]=(u=e[l][a],function(){let l=t.timestamp(),o=Array(arguments.length),c=Object.getPrototypeOf&&Object.getPrototypeOf(this)===n?n:this;for(var f=0;f<o.length;f++)o[f]=arguments[f];if(t.serialize&&!t.asObject&&v(o,this._serialize,this.serializers,this._stdErrSerialize),t.asObject?u.call(c,function(e,t,r,n){e._serialize&&v(r,e._serialize,e.serializers,e._stdErrSerialize);let s=r.slice(),l=s[0],o={};n&&(o.time=n),o.level=e.levels.values[t];let a=(0|e._childLevel)+1;if(a<1&&(a=1),null!==l&&"object"==typeof l){for(;a--&&"object"==typeof s[0];)Object.assign(o,s.shift());l=s.length?i(s.shift(),s):void 0}else"string"==typeof l&&(l=i(s.shift(),s));return void 0!==l&&(o.msg=l),o}(this,a,o,l)):u.apply(c,o),t.transmit){let i=t.transmit.level||e._level,n=r.levels.values[i],u=r.levels.values[a];if(u<n)return;(function(e,t,r){let i=t.send,n=t.ts,s=t.methodLevel,l=t.methodValue,o=t.val,a=e._logEvent.bindings;v(r,e._serialize||Object.keys(e.serializers),e.serializers,void 0===e._stdErrSerialize||e._stdErrSerialize),e._logEvent.ts=n,e._logEvent.messages=r.filter(function(e){return -1===a.indexOf(e)}),e._logEvent.level.label=s,e._logEvent.level.value=l,i(s,e._logEvent,o),e._logEvent=b(a)})(this,{ts:l,methodLevel:a,methodValue:u,transmitLevel:i,transmitValue:r.levels.values[t.transmit.level||e._level],send:t.transmit.send,val:s(e._level,r)},o)}});let f=function(e){let t=[];e.bindings&&t.push(e.bindings);let r=e[o];for(;r.parent;)(r=r.parent).logger.bindings&&t.push(r.logger.bindings);return t.reverse()}(e);0!==f.length&&(e[a]=(c=e[a],function(){return c.apply(this,[...f,...arguments])}))}function v(e,t,r,i){for(let n in e)if(i&&e[n]instanceof Error)e[n]=c.stdSerializers.err(e[n]);else if("object"==typeof e[n]&&!Array.isArray(e[n]))for(let i in e[n])t&&t.indexOf(i)>-1&&i in r&&(e[n][i]=r[i](e[n][i]))}function b(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function h(e){let t={type:e.constructor.name,msg:e.message,stack:e.stack};for(let r in e)void 0===t[r]&&(t[r]=e[r]);return t}function g(){return{}}function d(e){return e}function p(){}function m(){return!1}function y(){return Date.now()}c.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},c.stdSerializers={mapHttpRequest:g,mapHttpResponse:g,wrapRequestSerializer:d,wrapResponseSerializer:d,wrapErrorSerializer:d,req:g,res:g,err:h,errWithCause:h},c.stdTimeFunctions=Object.assign({},{nullTime:m,epochTime:y,unixTime:function(){return Math.round(Date.now()/1e3)},isoTime:function(){return new Date(Date.now()).toISOString()}}),e.exports.default=c,e.exports.pino=c}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(8355)}),_N_E=e.O()}]);