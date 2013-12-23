!function(e){var t,n={NOT_RESOLVED:0,IN_RESOLVING:1,RESOLVED:2},i={trackCircularDependencies:!0},o={},r=[],s=!1,a=[],u=function(e,i,s){s||(s=i,i=[]);var a=o[e]||(o[e]={name:e,decl:t});r.push(a.decl={name:e,fn:s,state:n.NOT_RESOLVED,deps:i,prevDecl:a.decl,dependOnDecls:[],dependents:[],exports:t})},c=function(e,t){s||(s=!0,w(l)),a.push({modules:e,cb:t})},d=function(e){return!!o[e]},l=function(){s=!1,f(),h()},f=function(){for(var e,n,i,s,a=0;e=r[a++];){for(n=0,s=e.dependOnDecls;i=e.deps[n++];){if(!d(i)){M(i,e);break}s.push(o[i].decl)}e.prevDecl&&(s.push(e.prevDecl),e.prevDecl=t)}r=[]},h=function(){var e,t,n,i,r,s=a,u=0;for(a=[];e=s[u++];){for(t=0,i=[],r=!0;n=e.modules[t++];){if(!d(n)){M(n),r=!1;break}i.push(o[n].decl)}r&&m(i,e.cb)}},m=function(t,n){p(t,function(t){n.apply(e,t)},[])},p=function(e,t,o){var r=e.length,s=!0;if(r)for(var a,u=function(){--r||_(e,t)},c=0;a=e[c++];)a.state===n.RESOLVED?--r:(i.trackCircularDependencies&&g(a,o)&&k(a,o),a.state===n.NOT_RESOLVED&&v(a,o),a.state===n.RESOLVED?--r:(a.dependents.push(u),s=!1));s&&!r&&_(e,t)},_=function(e,t){for(var n,i=[],o=0;n=e[o++];)i.push(n.exports);t(i)},v=function(t,o){i.trackCircularDependencies&&(o=o.slice()).push(t),t.state=n.IN_RESOLVING;var r=!1;p(t.dependOnDecls,function(n){t.fn.apply({name:t.name,deps:t.deps,global:e},[function(e){return r?x(t):r=!0,b(t,e),e}].concat(n))},o)},b=function(e,i){e.exports=i,e.state=n.RESOLVED;for(var o,r=0;o=e.dependents[r++];)o(e.exports);e.dependents=t},g=function(e,t){for(var n,i=0;n=t[i++];)if(e===n)return!0;return!1},y=function(e){for(var t in e)e.hasOwnProperty(t)&&(i[t]=e[t])},E=function(e){w(function(){throw e})},M=function(e,t){E(Error(t?'Module "'+t.name+'": can\'t resolve dependence "'+e+'"':"Can't resolve required module \""+e+'"'))},k=function(e,t){for(var n,i=[],o=0;n=t[o++];)i.push(n.name);i.push(e.name),E(Error('Circular dependence detected "'+i.join(" -> ")+'"'))},x=function(e){E(Error('Declaration of module "'+e.name+'" already provided'))},w=function(){var t=[],n=function(e){return 1===t.push(e)},i=function(){var e=t,n=0,i=t.length;for(t=[];i>n;)e[n++]()};if("object"==typeof process&&process.nextTick)return function(e){n(e)&&process.nextTick(i)};if(e.setImmediate)return function(t){n(t)&&e.setImmediate(i)};if(e.postMessage){var o=!0;if(e.attachEvent){var r=function(){o=!1};e.attachEvent("onmessage",r),e.postMessage("__checkAsync","*"),e.detachEvent("onmessage",r)}if(o){var s="__modules"+ +new Date,a=function(e){e.data===s&&(e.stopPropagation&&e.stopPropagation(),i())};return e.addEventListener?e.addEventListener("message",a,!0):e.attachEvent("onmessage",a),function(t){n(t)&&e.postMessage(s,"*")}}}var u=e.document;if("onreadystatechange"in u.createElement("script")){var c=function(){var e=u.createElement("script");e.onreadystatechange=function(){e.parentNode.removeChild(e),e=e.onreadystatechange=null,i()},(u.documentElement||u.body).appendChild(e)};return function(e){n(e)&&c()}}return function(e){n(e)&&setTimeout(i,0)}}(),C={define:u,require:c,isDefined:d,options:y};"object"==typeof exports?module.exports=C:e.modules=C}(this),modules.define("i-bem",["inherit","identify","next-tick","objects","functions","events","events__channels"],function(e,t,n,i,o,r,s,a){function u(e,t,n,i){return"__"+e+(i?"__elem_"+i:"")+"__mod"+(t?"_"+t:"")+(n?"_"+n:"")}function c(e,t,n,i){if(r.isFunction(t))n[u(e,"*","*",i)]=t;else{var o,s,a;for(o in t)if(t.hasOwnProperty(o))if(a=t[o],r.isFunction(a))n[u(e,o,"js"===o?"inited":"*",i)]=a;else for(s in a)a.hasOwnProperty(s)&&(n[u(e,o,s,i)]=a[s])}}function d(e,t){return t?Array.isArray(t)?function(n){for(var i=0,o=t.length;o>i;)if(n.hasMod(e,t[i++]))return!0;return!1}:function(n){return n.hasMod(e,t)}:function(t){return t.hasMod(e)}}function l(e){e.beforeSetMod&&(c("before",e.beforeSetMod,e),delete e.beforeSetMod),e.onSetMod&&(c("after",e.onSetMod,e),delete e.onSetMod);var t;if(e.beforeElemSetMod){for(t in e.beforeElemSetMod)e.beforeElemSetMod.hasOwnProperty(t)&&c("before",e.beforeElemSetMod[t],e,t);delete e.beforeElemSetMod}if(e.onElemSetMod){for(t in e.onElemSetMod)e.onElemSetMod.hasOwnProperty(t)&&c("after",e.onElemSetMod[t],e,t);delete e.onElemSetMod}}var f,h=[],m={},p=t(s.Emitter,{__constructor:function(e,t,n){this._modCache=e||{},this._processingMods={},this._params=t,this.params=null,n!==!1?this._init():h.push(this._init,this)},_init:function(){return this._initing||this.hasMod("js","inited")||(this._initing=!0,this.params||(this.params=o.extend(this.getDefaultParams(),this._params),delete this._params),this.setMod("js","inited"),delete this._initing,this.hasMod("js","inited")&&this.trigger("init")),this},emit:function(e,t){return this.__base(e=this._buildEvent(e),t).__self.trigger(e,t),this},trigger:function(){return this.emit.apply(this,arguments)},_buildEvent:function(e){return"string"==typeof e?e=new s.Event(e,this):e.target||(e.target=this),e},hasMod:function(e,t,n){var i=arguments.length,o=!1;1===i?(n="",t=e,e=f,o=!0):2===i&&("string"==typeof e?(n=t,t=e,e=f):(n="",o=!0));var r=this.getMod(e,t)===n;return o?!r:r},getMod:function(e,t){var n=typeof e;if("string"===n||"undefined"===n){t=e||t;var i=this._modCache;return t in i?i[t]||"":i[t]=this._extractModVal(t)}return this._getElemMod(t,e)},_getElemMod:function(e,t,n){return this._extractModVal(e,t,n)},getMods:function(e){var t=e&&"string"!=typeof e,n=[].slice.call(arguments,t?1:0),i=this._extractMods(n,t?e:f);return t||(n.length?n.forEach(function(e){this._modCache[e]=i[e]},this):this._modCache=i),i},setMod:function(e,t,i){if("undefined"==typeof i&&("string"==typeof e?(i="undefined"==typeof t?!0:t,t=e,e=f):i=!0),!e||e[0]){i===!1&&(i="");var o=(e&&e[0]?n(e[0]):"")+"_"+t;if(this._processingMods[o])return this;var r,s=e?this._getElemMod(t,e,r=this.__self._extractElemNameFrom(e)):this.getMod(t);if(s===i)return this;this._processingMods[o]=!0;var a=!0,u=[t,i,s];e&&u.unshift(e);for(var c,d,l,h=[["*","*"],[t,"*"],[t,i]],m=["before","after"],p=0;c=m[p++];){for(d=0;l=h[d++];)if(this._callModFn(c,r,l[0],l[1],u)===!1){a=!1;break}if(!a)break;"before"===c&&(this._onSetMod(t,i,s,e,r),e||(this._modCache[t]=i))}this._processingMods[o]=null}return this},_onSetMod:function(){},toggleMod:function(e,t,n,i,o){"string"==typeof e&&(o=i,i=n,n=t,t=e,e=f),"undefined"==typeof n&&(n=!0),"undefined"==typeof i?i="":"boolean"==typeof i&&(o=i,i="");var r=this.getMod(e,t);return(r===n||r===i)&&this.setMod(e,t,"boolean"==typeof o?o?n:i:this.hasMod(e,t,n)?i:n),this},delMod:function(e,t){return t||(t=e,e=f),this.setMod(e,t,"")},_callModFn:function(e,t,n,i,o){var r=u(e,n,i,t);return this[r]?this[r].apply(this,o):f},_extractModVal:function(){return""},_extractMods:function(){return{}},getDefaultParams:function(){return{}},_destruct:function(){this.delMod("js")},nextTick:function(e){var t=this;return i(function(){t.hasMod("js","inited")&&e.call(t)}),this},destruct:function(){},afterCurrentEvent:function(e,t){this.__self.afterCurrentEvent(this.changeThis(e,t))},channel:function(){return this.__self.channel.apply(null,arguments)},changeThis:function(e,t){return e.bind(t||this)}},{_name:"i-bem",blocks:m,decl:function(e,n,i){if("string"==typeof e&&(e={block:e}),e.baseBlock&&!m[e.baseBlock])throw'baseBlock "'+e.baseBlock+'" for "'+e.block+'" is undefined';l(n||(n={}));var s=m[e.baseBlock||e.block]||this;if(e.modName){var a=d(e.modName,e.modVal);o.each(n,function(e,t){r.isFunction(e)&&(n[t]=function(){var n;if(a(this))n=e;else{var i=s.prototype[t];i&&i!==e&&(n=this.__base)}return n?n.apply(this,arguments):f})})}if(i&&"boolean"==typeof i.live){var u=i.live;i.live=function(){return u}}var c,h=s;return e.baseMix&&(h=[h],e.baseMix.forEach(function(t){if(!m[t])throw'mix block "'+t+'" for "'+e.block+'" is undefined';h.push(m[t])})),e.block===s._name?(c=t.self(h,n,i))._processLive(!0):(c=m[e.block]=t(h,n,i))._name=e.block,c},declMix:function(e,n,i){return l(n||(n={})),m[e]=t(n,i)},_processLive:function(){return!1},create:function(e,t){return"string"==typeof e&&(e={block:e}),new m[e.block](e.mods,t)},getName:function(){return this._name},_extractElemNameFrom:function(){},_runInitFns:function(){if(h.length){var e,t=h,n=0;for(h=[];e=t[n];)e.call(t[n+1]),n+=2}},changeThis:function(e,t){return e.bind(t||this)},channel:function(){return a.apply(null,arguments)},afterCurrentEvent:function(e,t){i(t?e.bind(t):e)}});e(p)}),modules.define("inherit",function(e){function t(e){var t=a(e);if(h)for(var n,i=0;n=_[i++];)e.hasOwnProperty(n)&&t.push(n);return t}function n(e,n,i){for(var r,s,a=t(i),u=0,c=a.length;c>u;)"__self"!==(r=a[u++])&&(s=i[r],n[r]=l(s)&&(!o||s.toString().indexOf(".__base")>-1)?function(t,n){var i=e[t]||f;return function(){var e=this.__base;this.__base=i;var t=n.apply(this,arguments);return this.__base=e,t}}(r,s):s)}function i(e,t){for(var n,i=1;n=e[i++];)t?l(n)?v.self(t,n.prototype,n):v.self(t,n):t=l(n)?v(e[0],n.prototype,n):v(e[0],n);return t||e[0]}var o=function(){"_"}.toString().indexOf("_")>-1,r=function(){},s=Object.create||function(e){var t=function(){};return t.prototype=e,new t},a=Object.keys||function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},u=function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e},c=Object.prototype.toString,d=Array.isArray||function(e){return"[object Array]"===c.call(e)},l=function(e){return"[object Function]"===c.call(e)},f=function(){},h=!0,m={toString:""};for(var p in m)m.hasOwnProperty(p)&&(h=!1);var _=h?["toString","valueOf"]:null,v=function(){var e=arguments,t=d(e[0]),o=t||l(e[0]),a=o?t?i(e[0]):e[0]:r,c=e[o?1:0]||{},f=e[o?2:1],h=c.__constructor||o&&a.prototype.__constructor?function(){return this.__constructor.apply(this,arguments)}:function(){};if(!o)return h.prototype=c,h.prototype.__self=h.prototype.constructor=h,u(h,f);u(h,a);var m=a.prototype,p=h.prototype=s(m);return p.__self=p.constructor=h,c&&n(m,p,c),f&&n(a,h,f),h};v.self=function(){var e=arguments,t=d(e[0]),o=t?i(e[0],e[0][0]):e[0],r=e[1],s=e[2],a=o.prototype;return r&&n(a,a,r),s&&n(o,o,s),o},e(v)}),modules.define("identify",function(e){var t=0,n="__"+ +new Date,i=function(){return"uniq"+ ++t};e(function(e,t){if(!e)return i();var o="uniqueID"in e?"uniqueID":n;return t||o in e?e[o]:e[o]=i()})}),modules.define("next-tick",function(e){var t=this.global,n=[],i=function(e){return 1===n.push(e)},o=function(){var e=n,t=0,i=n.length;for(n=[];i>t;)e[t++]()};if("object"==typeof process&&process.nextTick)return e(function(e){i(e)&&process.nextTick(o)});if(t.setImmediate)return e(function(e){i(e)&&t.setImmediate(o)});if(t.postMessage){var r=!0;if(t.attachEvent){var s=function(){r=!1};t.attachEvent("onmessage",s),t.postMessage("__checkAsync","*"),t.detachEvent("onmessage",s)}if(r){var a="__nextTick"+ +new Date,u=function(e){e.data===a&&(e.stopPropagation&&e.stopPropagation(),o())};return t.addEventListener?t.addEventListener("message",u,!0):t.attachEvent("onmessage",u),e(function(e){i(e)&&t.postMessage(a,"*")})}}var c=t.document;if("onreadystatechange"in c.createElement("script")){var d=function(){var e=c.createElement("script");e.onreadystatechange=function(){e.parentNode.removeChild(e),e=e.onreadystatechange=null,o()},(c.documentElement||c.body).appendChild(e)};return e(function(e){i(e)&&d()})}e(function(e){i(e)&&t.setTimeout(o,0)})}),modules.define("objects",function(e){var t=Object.prototype.hasOwnProperty;e({extend:function(e){"object"!=typeof e&&(e={});for(var n=1,i=arguments.length;i>n;n++){var o=arguments[n];if(o)for(var r in o)t.call(o,r)&&(e[r]=o[r])}return e},isEmpty:function(e){for(var n in e)if(t.call(e,n))return!1;return!0},each:function(e,n,i){for(var o in e)t.call(e,o)&&(i?n.call(i,e[o],o):n(e[o],o))}})}),modules.define("functions",function(e){var t=Object.prototype.toString;e({isFunction:function(e){return"[object Function]"===t.call(e)},noop:function(){}})}),modules.define("events",["identify","inherit","functions"],function(e,t,n,i){var o,r="__"+ +new Date+"storage",s=function(e,n){return t(e)+(n?t(n):"")},a=n({__constructor:function(e,t){this.type=e,this.target=t,this.result=o,this.data=o,this._isDefaultPrevented=!1,this._isPropagationStopped=!1},preventDefault:function(){this._isDefaultPrevented=!0},isDefaultPrevented:function(){return this._isDefaultPrevented},stopPropagation:function(){this._isPropagationStopped=!0},isPropagationStopped:function(){return this._isPropagationStopped}}),u={on:function(e,t,n,a,u){if("string"==typeof e){i.isFunction(t)&&(a=n,n=t,t=o);for(var c,d,l,f,h=s(n,a),m=this[r]||(this[r]={}),p=e.split(" "),_=0;c=p[_++];)f=m[c]||(m[c]={ids:{},list:{}}),h in f.ids||(d=f.list,l={fn:n,data:t,ctx:a,special:u},d.last?(d.last.next=l,l.prev=d.last):d.first=l,f.ids[h]=d.last=l)}else for(var v in e)e.hasOwnProperty(v)&&this.on(v,e[v],t,u);return this},once:function(e,t,n,i){return this.on(e,t,n,i,{once:!0})},un:function(e,t,n){if("string"==typeof e||"undefined"==typeof e){var i=this[r];if(i)if(e){for(var o,a=e.split(" "),u=0;e=a[u++];)if(o=i[e])if(t){var c=s(t,n),d=o.ids;if(c in d){var l=o.list,f=d[c],h=f.prev,m=f.next;h?h.next=m:f===l.first&&(l.first=m),m?m.prev=h:f===l.last&&(l.last=h),delete d[c]}}else delete this[r][e]}else delete this[r]}else for(var p in e)e.hasOwnProperty(p)&&this.un(p,e[p],t);return this},emit:function(e){var t=this[r],n=!1;if(t)for(var i,o,s=["string"==typeof e?e:e.type,"*"],u=0;i=s[u++];)if(o=t[i])for(var c,d=o.list.first,l=o.list.last;d&&(n||(n=!0,"string"==typeof e&&(e=new a(e)),e.target||(e.target=this)),e.data=d.data,c=d.fn.apply(d.ctx||this,arguments),"undefined"!=typeof c&&(e.result=c,c===!1&&(e.preventDefault(),e.stopPropagation())),d.special&&d.special.once&&this.un(e.type,d.fn,d.ctx),d!==l);)d=d.next;return this}};u.trigger=u.emit,u.onFirst=u.once;var c=n(u,u);e({Emitter:c,Event:a})}),modules.define("events__channels",["events"],function(e,t){var n,i={};e(function(e,o){return"boolean"==typeof e&&(o=e,e=n),e||(e="default"),o?(i[e]&&(i[e].un(),delete i[e]),void 0):i[e]||(i[e]=new t.Emitter)})}),Object.keys||(Object.keys=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}),function(){var e=Array.prototype,t=Object.prototype.toString,n={indexOf:function(e,t){t=+(t||0);var n=this,i=n.length;if(i>0&&i>t)for(t=0>t?Math.ceil(t):Math.floor(t),-i>t&&(t=0),0>t&&(t+=i);i>t;){if(t in n&&n[t]===e)return t;++t}return-1},forEach:function(e,t){for(var n=-1,i=this,o=i.length;++n<o;)n in i&&(t?e.call(t,i[n],n,i):e(i[n],n,i))},map:function(e,t){for(var n=-1,i=this,o=i.length,r=new Array(o);++n<o;)n in i&&(r[n]=t?e.call(t,i[n],n,i):e(i[n],n,i));return r},filter:function(e,t){for(var n=-1,i=this,o=i.length,r=[];++n<o;)n in i&&(t?e.call(t,i[n],n,i):e(i[n],n,i))&&r.push(i[n]);return r},reduce:function(e,t){var n,i=-1,o=this,r=o.length;if(arguments.length<2){for(;++i<r;)if(i in o){n=o[i];break}}else n=t;for(;++i<r;)i in o&&(n=e(n,o[i],i,o));return n},some:function(e,t){for(var n=-1,i=this,o=i.length;++n<o;)if(n in i&&(t?e.call(t,i[n],n,i):e(i[n],n,i)))return!0;return!1},every:function(e,t){for(var n=-1,i=this,o=i.length;++n<o;)if(n in i&&!(t?e.call(t,i[n],n,i):e(i[n],n,i)))return!1;return!0}};for(var i in n)e[i]||(e[i]=n[i]);Array.isArray||(Array.isArray=function(e){return"[object Array]"===t.call(e)})}(),function(){var e=Array.prototype.slice;Function.prototype.bind||(Function.prototype.bind=function(t){var n=this,i=e.call(arguments,1);return function(){return n.apply(t,i.concat(e.call(arguments)))}})}(),modules.define("i-bem__dom",["i-bem","i-bem__internal","identify","objects","functions","jquery","dom"],function(e,t,n,i,o,r,s,a){function u(e,t){var n,i,r=e[0],s=f(r);for(n in s)if(s.hasOwnProperty(n)){i=s[n],d(i,r,n,t);var a=g[i.uniqId];a?a.domElem.index(r)<0&&(a.domElem=a.domElem.add(e),o.extend(a._params,i)):c(n,e,i)}}function c(e,t,n,i,o){"boolean"==typeof n&&(o=i,i=n,n=p);var r=t[0];n=d(n||f(r)[e],r,e);var a=n.uniqId;if(g[a])return g[a]._init();b[a]=b[a]?b[a].add(t):t;var u=r.parentNode;u&&11!==u.nodeType||s.unique(b[a]);var c=k[e]||T.decl(e,{},{live:!0},!0);if(!(c._liveInitable=!!c._processLive())||i||n.live===!1){i&&t.addClass(x);var l=new c(b[a],n,!!i);return delete b[a],o&&o.apply(l,Array.prototype.slice.call(arguments,4)),l}}function d(e,t,n,o){(e||(e={})).uniqId||(e.uniqId=(e.id?n+"-id-"+e.id:i())+(o||i()));var r=i(t),s=y[r]||(y[r]={});return s[n]||(s[n]=e),e}function l(e,t,n){var i=e.find(t);return n?i:i.add(e.filter(t))}function f(e){var t=i(e);return y[t]||(y[t]=h(e))}function h(e){var t=e.getAttribute(C);return t?JSON.parse(t):{}}function m(e,t){1===e.domElem.length?e._destruct(!0):e.domElem=e.domElem.not(t)}var p,_=s(window),v=s(document),b={},g={},y={},E={},M={},k=t.blocks,x="i-bem",w="."+x,C="data-bem",O=n.NAME_PATTERN,S=n.MOD_DELIM,j=n.ELEM_DELIM,I=RegExp("[^"+S+"]"+S+"("+O+")"+"(?:"+S+"("+O+"))?$"),N=n.buildModPostfix,B=n.buildClass,T=t.decl("i-bem__dom",{__constructor:function(e,t,n){this.domElem=e,this._eventNameCache={},this._elemCache={},g[this._uniqId=t.uniqId||i(this)]=this,this._needSpecialUnbind=!1,this.__base(null,t,n)},findBlocksInside:function(e,t){return this._findBlocks("find",e,t)},findBlockInside:function(e,t){return this._findBlocks("find",e,t,!0)},findBlocksOutside:function(e,t){return this._findBlocks("parents",e,t)},findBlockOutside:function(e,t){return this._findBlocks("closest",e,t)[0]||null},findBlocksOn:function(e,t){return this._findBlocks("",e,t)},findBlockOn:function(e,t){return this._findBlocks("",e,t,!0)},_findBlocks:function(e,t,n,i){n||(n=t,t=p);var o=t?"string"==typeof t?this.findElem(t):t:this.domElem,r="string"==typeof n,a=r?n:n.block||n.blockName,u="."+(r?B(a):B(a,n.modName,n.modVal))+(i?":first":""),d=o.filter(u);if(e&&(d=d.add(o[e](u))),i)return d[0]?c(a,d.eq(0),!0):null;var l=[],f={};return d.each(function(e,t){var n=c(a,s(t),!0);f[n._uniqId]||(f[n._uniqId]=!0,l.push(n))}),l},bindToDomElem:function(e,t,n){return n?e.bind(this._buildEventName(t),s.proxy(n,this)):o.each(t,function(t,n){this.bindToDomElem(e,n,t)},this),this},bindToDoc:function(e,t){return this._needSpecialUnbind=!0,this.bindToDomElem(v,e,t)},bindToWin:function(e,t){return this._needSpecialUnbind=!0,this.bindToDomElem(_,e,t)},bindTo:function(e,t,n){return!t||r.isFunction(t)?(n=t,t=e,e=this.domElem):"string"==typeof e&&(e=this.elem(e)),this.bindToDomElem(e,t,n)},unbindFromDomElem:function(e,t,n){return t=this._buildEventName(t),n?e.unbind(t,n):e.unbind(t),this},unbindFromDoc:function(e,t){return this.unbindFromDomElem(v,e,t)},unbindFromWin:function(e,t){return this.unbindFromDomElem(_,e,t)},unbindFrom:function(e,t,n){var i=arguments.length;return 1===i?(t=e,e=this.domElem):2===i&&r.isFunction(t)?(n=t,t=e,e=this.domElem):"string"==typeof e&&(e=this.elem(e)),this.unbindFromDomElem(e,t,n)},_buildEventName:function(e){return e.indexOf(" ")>1?e.split(" ").map(function(e){return this._buildOneEventName(e)},this).join(" "):this._buildOneEventName(e)},_buildOneEventName:function(e){var t=this._eventNameCache;if(e in t)return t[e];var n="."+this._uniqId;if(e.indexOf(".")<0)return t[e]=e+n;var i=".bem_"+this.__self._name;return t[e]=e.split(".").map(function(e,t){return 0===t?e+i:i+"_"+e}).join("")+n},emit:function(e,t){return this.__base(e=this._buildEvent(e),t).domElem&&this._ctxEmit(e,t),this},_ctxEmit:function(e,t){var n=this,r=E[n.__self._buildCtxEventName(e.type)],s={};r&&n.domElem.each(function(){for(var a=this,u=r.counter;a&&u;){var c=i(a,!0);if(c){if(s[c])break;var d=r.ctxs[c];d&&(o.each(d,function(i){i.fn.call(i.ctx||n,e,t)}),u--),s[c]=!0}a=a.parentNode}})},setMod:function(e,t,n){if(e&&"undefined"!=typeof n&&e.length>1){var i=this;return e.each(function(){var o=s(this);o.__bemElemName=e.__bemElemName,i.setMod(o,t,n)}),i}return this.__base(e,t,n)},_extractModVal:function(e,t,n){var i,o=(t||this.domElem)[0];return o&&(i=o.className.match(this.__self._buildModValRE(e,n||t))),i?i[2]||!0:""},_extractMods:function(e,t){var n={},i=!e.length,o=0;return((t||this.domElem)[0].className.match(this.__self._buildModValRE("("+(i?O:e.join("|"))+")",t,"g"))||[]).forEach(function(e){var t=e.match(I);n[t[1]]=t[2]||!0,++o}),o<e.length&&e.forEach(function(e){e in n||(n[e]="")}),n},_onSetMod:function(e,t,n,i,o){if(i||"js"!==e||""!==t){var r=this.__self,a=r._buildModClassPrefix(e,o),u=r._buildModValRE(e,o),c=""===t||t===!1;(i||this.domElem).each(function(){var e=this.className,i=a;t!==!0&&(i+=S+t),(n===!0?u.test(e):e.indexOf(a+S)>-1)?this.className=e.replace(u,c?"":"$1"+i):c||s(this).addClass(i)}),o&&this.dropElemCache(o,e,n).dropElemCache(o,e,t)}},findElem:function(e,t,n,i,o){"string"==typeof e&&(o=i,i=n,n=t,t=e,e=this.domElem),"boolean"==typeof n&&(o=n,n=p);var r=this.__self,s="."+t.split(" ").map(function(e){return r.buildClass(e,n,i)}).join(",."),a=l(e,s);return o?this._filterFindElemResults(a):a},_filterFindElemResults:function(e){var t=this.buildSelector(),n=this.domElem;return e.filter(function(){return n.index(s(this).closest(t))>-1})},_elem:function(e,t,n){var i,o=e+N(t,n);return(i=this._elemCache[o])||(i=this._elemCache[o]=this.findElem(e,t,n),i.__bemElemName=e),i},elem:function(e,t,n){if(t&&"string"!=typeof t)return t.__bemElemName=e,t;if(e.indexOf(" ")<0)return this._elem(e,t,n);var i=s([]);return e.split(" ").forEach(function(e){i=i.add(this._elem(e,t,n))},this),i},closestElem:function(e,t){return e.closest(this.buildSelector(t))},dropElemCache:function(e,t,n){if(e){var i=N(t,n);e.indexOf(" ")<0?delete this._elemCache[e+i]:e.split(" ").forEach(function(e){delete this._elemCache[e+i]},this)}else this._elemCache={};return this},elemParams:function(e){var t;return"string"==typeof e?(t=e,e=this.elem(e)):t=this.__self._extractElemNameFrom(e),h(e[0])[this.__self.buildClass(t)]||{}},elemify:function(e,t){return(e=s(e)).__bemElemName=t,e},containsDomElem:function(e,t){return 1===arguments.length&&(t=e,e=this.domElem),a.contains(e,t)},buildSelector:function(e,t,n){return this.__self.buildSelector(e,t,n)},_destruct:function(){this.destruct();var e=this,t=e.__self;e._needSpecialUnbind&&t.doc.add(t.win).unbind("."+e._uniqId),e.__base(),delete g[e.un()._uniqId]}},{scope:null,doc:v,win:_,_processLive:function(e){var t=this._liveInitable;if("live"in this){var n="undefined"==typeof t;n^e&&(t=this.live()!==!1,this.live=r.noop)}return t},init:function(e){e||(e=T.scope);var t=i();return l(e,w).each(function(){u(s(this),t)}),this._runInitFns(),e},destruct:function(e,t){l(e,w,t).each(function(e,t){var n=f(t);o.each(n,function(e){if(e.uniqId){var n=g[e.uniqId];n?m(n,t):delete b[e.uniqId]}}),delete y[i(t)]}),t?e.empty():e.remove()},update:function(e,t){this.destruct(e,!0),this.init(e.html(t))},replace:function(e,t){var n=e.prev(),i=e.parent();this.destruct(e),this.init(n.length?s(t).insertAfter(n):s(t).prependTo(i))},append:function(e,t){this.init(s(t).appendTo(e))},prepend:function(e,t){this.init(s(t).prependTo(e))},before:function(e,t){this.init(s(t).insertBefore(e))},after:function(e,t){this.init(s(t).insertAfter(e))},_buildCtxEventName:function(e){return this._name+":"+e},_liveClassBind:function(e,t,n,o){if(t.indexOf(" ")>-1)t.split(" ").forEach(function(t){this._liveClassBind(e,t,n,o)},this);else{var r=M[t],s=i(n);r||(r=M[t]={},T.scope.bind(t,this._liveClassTrigger.bind(this))),r=r[e]||(r[e]={uniqIds:{},fns:[]}),s in r.uniqIds||(r.fns.push({uniqId:s,fn:this._buildLiveEventFn(n,o)}),r.uniqIds[s]=r.fns.length-1)}return this},_liveClassUnbind:function(e,t,n){var o=M[t];if(o)if(n){if(o=o[e]){var r=i(n);if(r in o.uniqIds){var s=o.uniqIds[r],a=o.fns.length-1;for(o.fns.splice(s,1);a>s;)o.uniqIds[o.fns[s++].uniqId]=s-1;delete o.uniqIds[r]}}}else delete o[e];return this},_liveClassTrigger:function(e){var t=M[e.type];if(t){var n=e.target,i=[];for(var o in t)t.hasOwnProperty(o)&&i.push(o);do for(var r=" "+n.className+" ",a=0;o=i[a++];)if(r.indexOf(" "+o+" ")>-1){for(var u,c=0,d=t[o].fns,l=!1;u=d[c++];)u.fn.call(s(n),e)===!1&&(l=!0);if(l&&e.preventDefault(),l||e.isPropagationStopped())return;i.splice(--a,1)}while(i.length&&(n=n.parentNode))}},_buildLiveEventFn:function(e,t){var n=this;return function(i){i.currentTarget=this;var o=[n._name,s(this).closest(n.buildSelector()),!0],r=c.apply(null,t?o.concat([e,i]):o);return r&&!t&&e?e.apply(r,arguments):void 0}},liveInitOnEvent:function(e,t,n){return this.liveBindTo(e,t,n,!0)},liveBindTo:function(e,t,n,i){return(!t||r.isFunction(t))&&(n=t,t=e,e=p),e&&"string"!=typeof e||(e={elem:e}),e.elem&&e.elem.indexOf(" ")>0?(e.elem.split(" ").forEach(function(o){this._liveClassBind(this.buildClass(o,e.modName,e.modVal),t,n,i)},this),this):this._liveClassBind(this.buildClass(e.elem,e.modName,e.modVal),t,n,i)},liveUnbindFrom:function(e,t,n){return e.indexOf(" ")>1?(e.split(" ").forEach(function(e){this._liveClassUnbind(this.buildClass(e),t,n)},this),this):this._liveClassUnbind(this.buildClass(e),t,n)},_liveInitOnBlockEvent:function(e,t,n,i){var o=this._name;return k[t].on(e,function(e){var t=arguments,r=e.target[i](o);n&&r.forEach(function(e){n.apply(e,t)})}),this},liveInitOnBlockEvent:function(e,t,n){return this._liveInitOnBlockEvent(e,t,n,"findBlocksOn")},liveInitOnBlockInsideEvent:function(e,t,n){return this._liveInitOnBlockEvent(e,t,n,"findBlocksOutside")},on:function(e,t,n,i,o){return e.jquery?this._liveCtxBind(e,t,n,i,o):this.__base(e,t,n,i)},un:function(e,t,n,i){return e.jquery?this._liveCtxUnbind(e,t,n,i):this.__base(e,t,n)},_liveCtxBind:function(e,t,n,s,a){if("string"==typeof t)if(r.isFunction(n)&&(a=s,s=n,n=p),t.indexOf(" ")>-1)t.split(" ").forEach(function(t){this._liveCtxBind(e,t,n,s,a)},this);else{var u=this._buildCtxEventName(t),c=E[u]||(E[u]={counter:0,ctxs:{}});e.each(function(){var e=i(this),t=c.ctxs[e];t||(t=c.ctxs[e]={},++c.counter),t[i(s)+(a?i(a):"")]={fn:s,data:n,ctx:a}})}else o.each(t,function(t,i){this._liveCtxBind(e,i,t,n)},this);return this},_liveCtxUnbind:function(e,t,n,r){var s=E[t=this._buildCtxEventName(t)];return s&&(e.each(function(){var e,t=i(this,!0);t&&(e=s.ctxs[t])&&(n&&delete e[i(n)+(r?i(r):"")],(!n||o.isEmpty(e))&&(s.counter--,delete s.ctxs[t]))}),s.counter||delete E[t]),this},_extractElemNameFrom:function(e){if(e.__bemElemName)return e.__bemElemName;var t=e[0].className.match(this._buildElemNameRE());return t?t[1]:p},extractParams:h,_buildModClassPrefix:function(e,t){return this._name+(t?j+("string"==typeof t?t:this._extractElemNameFrom(t)):"")+S+e},_buildModValRE:function(e,t,n){return new RegExp("(\\s|^)"+this._buildModClassPrefix(e,t)+"(?:"+S+"("+O+"))?(?=\\s|$)",n)},_buildElemNameRE:function(){return new RegExp(this._name+j+"("+O+")(?:\\s|$)")},buildClass:function(e,t,n){return B(this._name,e,t,n)},buildSelector:function(e,t,n){return"."+this.buildClass(e,t,n)}});s.fn.bem=function(e,t){return c(e,this,t,!0)},s(function(){T.scope=s("body")}),e(T)}),modules.define("jquery",["loader_type_js","jquery__config"],function(e,t,n){function i(){e(jQuery.noConflict(!0))}"undefined"!=typeof jQuery?i():t(n.url,i)}),modules.define("loader_type_js",function(e){var t={},n={},i=document.getElementsByTagName("head")[0],o=function(e){n[e]=!0;var i,o=t[e],r=0;for(delete t[e];i=o[r++];)i()};e(function(e,r){if(n[e])return r(),void 0;if(t[e])return t[e].push(r),void 0;t[e]=[r];var s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.src=("file:"!==location.protocol||e.indexOf("//")?"":"http:")+e,null===s.onreadystatechange?s.onreadystatechange=function(){var t=this.readyState;("loaded"===t||"complete"===t)&&(s.onreadystatechange=null,o(e))}:s.onload=s.onerror=function(){s.onload=s.onerror=null,o(e)},i.insertBefore(s,i.lastChild)})}),modules.define("jquery__config",function(e){e({url:"//yandex.st/jquery/1.10.2/jquery.min.js"})}),modules.define("dom",["jquery"],function(e,t){e({contains:function(e,t){var n=!1;return t.each(function(){var t=this;do if(~e.index(t))return!(n=!0);while(t=t.parentNode);return n}),n},getFocused:function(){try{return t(document.activeElement)}catch(e){}},containsFocus:function(e){return this.contains(e,this.getFocused())},isFocusable:function(e){var t=e[0];if(!t)return!1;switch(t.tagName.toLowerCase()){case"iframe":return!0;case"input":case"button":case"textarea":case"select":return!t.disabled;case"a":return!!t.href;default:return t.hasAttribute("tabindex")}},isEditable:function(e){var t=e[0];if(!t)return!1;switch(t.tagName.toLowerCase()){case"input":var n=t.type;return!("text"!==n&&"password"!==n||t.disabled||t.readOnly);case"textarea":return!t.disabled&&!t.readOnly;default:return"true"===t.contentEditable}}})}),modules.define("i-bem__internal",function(e){function t(e){var t=typeof e;return"string"===t||"number"===t||"boolean"===t}function n(e,t){var n="";return null!=t&&t!==!1&&(n+=s+e,t!==!0&&(n+=s+t)),n}function i(e,t,i){return e+n(t,i)}function o(e,t,o,s){return i(e,r,r)+a+t+n(o,s)}var r,s="_",a="__",u="[a-zA-Z0-9-]+";e({NAME_PATTERN:u,MOD_DELIM:s,ELEM_DELIM:a,buildModPostfix:n,buildClass:function(e,n,s,a){return t(s)?t(a)||(a=s,s=n,n=r):"undefined"!=typeof s?s=r:n&&"string"!=typeof n&&(n=r),n||s?n?o(e,n,s,a):i(e,s,a):e},buildClasses:function(e,t,n){t&&"string"!=typeof t&&(n=t,t=r);var s=t?o(e,t,r,r):i(e,r,r);if(n)for(var a in n)n.hasOwnProperty(a)&&n[a]&&(s+=" "+(t?o(e,t,a,n[a]):i(e,a,n[a])));return s}})}),function(){String.prototype.trim||(String.prototype.trim=function(){for(var e=this.replace(/^\s\s*/,""),t=/\s/,n=e.length;t.test(e.charAt(--n)););return e.slice(0,n+1)})}(),function(e){if(!window.JSON){var t,n=Object.prototype.toString,i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};window.JSON={stringify:t=function(r){if(null===r)return"null";if("undefined"==typeof r)return e;var s,a,u;switch(n.call(r)){case"[object String]":return i.lastIndex=0,'"'+(i.test(r)?r.replace(i,function(e){var t=o[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}):r)+'"';case"[object Number]":case"[object Boolean]":return""+r;case"[object Array]":s="[",a=0;for(var c=r.length;c>a;)u=t(r[a]),s+=(a++?",":"")+("undefined"==typeof u?"null":u);return s+"]";case"[object Object]":if("[object Function]"===n.call(r.toJSON))return t(r.toJSON());s="{",a=0;for(var d in r)r.hasOwnProperty(d)&&(u=t(r[d]),"undefined"!=typeof u&&(s+=(a++?",":"")+'"'+d+'":'+u));return s+"}";default:return e}},parse:function(e){return Function("return "+e)()}}}}(),modules.require(["i-bem__dom","jquery"],function(e,t){t(function(){e.init()})}),modules.define("ua",function(e){var t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[],i={browser:n[1]||"",version:n[2]||"0"},o={};i.browser&&(o[i.browser]=!0,o.version=i.version),o.chrome?o.webkit=!0:o.webkit&&(o.safari=!0),e(o)}),modules.define("i-bem__dom",["jquery"],function(e,t,n){n.decl("i-color-controller",{onSetMod:{js:{inited:function(){this._page=this.findBlockOn("page"),this._person=this.findBlockInside("person"),this._personsYPos=this.findBlockInside("persons").domElem.offset().top;var e=this.__self.getRandomColor();this._setColor({color:e});var t=this.findBlocksInside("persons");t.push(this.findBlockInside("nav"));for(var n=0,i=t.length;i>n;n++)t[n].on("colorChange",this._onColorChange,this)}}},_onColorChange:function(e,t){this._setColor(t)},_setColor:function(e){this._page.setMod("color",e.color),this._person.setMod("color",e.color),e.scroll===!0&&t("html, body").animate({scrollTop:this._personsYPos},"fast")}},{getRandomColor:function(){var e=["yellow","red","blue"],t=Math.floor(Math.random()*e.length);return e[t]}}),e(n)}),modules.define("i-bem__dom",["jquery"],function(e,t,n){n.decl("i-nav-controller",{onSetMod:{js:{inited:function(){this._steps=this.findBlocksInside("steps"),this._nav=this.findBlockInside("nav"),this._page=this.findBlockOn("page"),t(window).on("scroll",t.proxy(this._onWindowScroll,this))}}},_onWindowScroll:function(){for(var e=this._page.getMod("color"),n=this._steps,i=0,o=n.length;o>i;i++)if(n[i].getMod("color")===e)for(var r=n[i].elem("item"),s=0,a=r.length;a>s;s++){var u=r[s].getBoundingClientRect();
if(u.top<100&&u.bottom>100){var c=n[i].getMod(t(r[s]),"num");this._nav.setMod("num",c)}}}}),e(n)}),modules.define("i-bem__dom",["jquery"],function(e,t,n){n.decl("i-popup-controller",{onSetMod:{js:{inited:function(){this._popup=this.findBlockInside("popup"),this._page=this.findBlockOn("page"),this.bindTo("link","click",this._onLinkClick),this.bindTo("popup","click",this._hidePopup),this.bindTo("close","click",this._hidePopup)}}},_onLinkClick:function(){this._showPopup()},_showPopup:function(){this._blockPage(),this._popup.show()},_hidePopup:function(){return this._unblockPage(),this._popup.close(),!1},_blockPage:function(){this._page.domElem.css({top:-t(window).scrollTop()}),this._page.setMod("blocked","yes")},_unblockPage:function(){var e=-parseInt(this._page.domElem.css("top"));this._page.delMod("blocked"),this._page.domElem.css({top:""}),t(window).scrollTop(e)}}),e(n)}),modules.define("i-bem__dom",["jquery"],function(e,t,n){n.decl("i-scroll-controller",{onSetMod:{js:{inited:function(){this._windowHeight=t(window).height(),this._persons=this.findBlocksInside("persons"),this._person=this.findBlockInside("person"),this._nav=this.findBlockInside("nav"),t(window).on("scroll",t.proxy(this._onWindowScroll,this))}}},_onWindowScroll:function(){var e=t(window).scrollTop(),n=this._persons[0].domElem.offset().top+this._persons[0].domElem.outerHeight(),i=this._persons[1].domElem.offset().top;n>e||e+this._windowHeight>i?(this._person.setMod("status","hided"),this._nav.setMod("status","hided")):e>n&&e+this._windowHeight<i&&(this._person.setMod("status","showed"),this._nav.setMod("status","showed"))}}),e(n)}),modules.define("i-bem__dom",["jquery"],function(e,t,n){n.decl("i-height-controller",{onSetMod:{js:{inited:function(){for(var e=this.elem("h-imp"),n=2,i=0,o=e.length;o>i;i++){var r=t(e[i]),s=this.elem("h-exp","name",this.getMod(r,"name")),a=s.outerHeight()-n;r.css("height",a)}steps=this.findBlocksInside("steps");for(var i=0,o=steps.length;o>i;i++)steps[i].domElem.css("display","none")}}}}),e(n)}),modules.define("i-bem__dom",["jquery"],function(e,t,n){n.decl("person",{onSetMod:{status:{showed:function(){t(this.domElem).animate({bottom:"50%"},"fast")},hided:function(){t(this.domElem).animate({bottom:-220},"fast")}}}}),e(n)}),modules.define("i-bem__dom",["jquery"],function(e,t,n){n.decl("nav",{onSetMod:{js:{inited:function(){this.bindTo("ico","click",this._onIcoClick)}},status:{showed:function(){t(this.domElem).animate({top:20},"fast")},hided:function(){t(this.domElem).animate({top:-100},"fast")}}},_onIcoClick:function(e){var n=this.getMod(t(e.delegateTarget),"color");this.trigger("colorChange",{color:n})}}),e(n)}),modules.define("i-bem__dom",function(e,t){t.decl("popup",{close:function(){this.elem("iframe").attr("src",""),this.delMod("showed")},show:function(){this.elem("iframe").attr("src",this.params.src),this.setMod("showed","yes")}}),e(t)}),modules.define("i-bem__dom",["jquery"],function(e,t,n){n.decl("content",{onSetMod:{js:{inited:function(){var e=this;this._aside=this.findBlockInside("aside"),this._setWidths(),this._setStatuses(),this.bindTo(this._aside.elem("button"),"click",this._onButtonClick),this.bindTo("history","click",this._onHistoryClick),this.bindTo("aside","click",this._onAsideClick),t(window).on("resize",function(){clearTimeout(e.timer),e.timer=setTimeout(t.proxy(e._onResize,e),200)})}},aside:{opened:function(){var e=t(window).width()-this.asideWidth;this._moveAside(e>this.historyWidth?this.historyWidth:e)},closed:function(){this._moveAside(this.historyWidth)}},control:{disable:function(){this._moveAside(this.historyWidth)},enable:function(){this.setMod("aside","closed")}}},_onResize:function(){this._setStatuses(),this.hasMod("control","enable")&&this.hasMod("aside","opened")&&this._moveAside(t(window).width()-this.asideWidth)},_setWidths:function(){var e=this.elem("history"),t=this._aside.findBlockInside("aside-items").elem("inner"),n=parseInt(e.css("border-right-width"));this.historyWidth=parseInt(e.outerWidth(!0))-n,this.asideWidth=parseInt(t.outerWidth())},_setStatuses:function(){t(window).width()<this.historyWidth+this.asideWidth?(this.setMod("control","enable"),this.hasMod("aside")||this.setMod("aside","closed")):(this.setMod("control","disable"),this.hasMod("aside")||this.setMod("aside","opened"))},_onButtonClick:function(){return this.hasMod("aside","closed")?this.setMod("aside","opened"):this.setMod("aside","closed"),!1},_onAsideClick:function(){this.hasMod("control","enable")&&this.hasMod("aside","closed")&&this.setMod("aside","opened")},_onHistoryClick:function(){this.hasMod("control","enable")&&this.hasMod("aside","opened")&&this.setMod("aside","closed")},_moveAside:function(e){this._aside.domElem.animate({left:e})}}),e(n)}),modules.define("i-bem__dom",["jquery"],function(e,t,n){n.decl("persons",{onSetMod:{js:{inited:function(){this.bindTo("link","click",this._onLinkClick),this.bindTo("item","mouseenter",this._onMouseEnter),this.bindTo("item","mouseleave",this._onMouseLeave)}}},_onLinkClick:function(e){var n=this.getMod(t(e.delegateTarget),"color");this.trigger("colorChange",{color:n,scroll:this.hasMod("bottom")?!0:!1})},_onMouseEnter:function(e){this.setMod(t(e.delegateTarget),"hovered","yes")},_onMouseLeave:function(e){this.delMod(t(e.delegateTarget),"hovered")}}),e(n)});