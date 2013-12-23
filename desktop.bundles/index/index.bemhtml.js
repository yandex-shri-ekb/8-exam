(function(g) {

  var __xjst = (function(exports) {

     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var __$r=__$g2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}[function(exports){var BEM_={},toString=Object.prototype.toString,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal,buffer){buffer.push(MOD_DELIM,modName);modVal!==true&&buffer.push(MOD_DELIM,modVal)}function buildBlockClass(name,modName,modVal,buffer){buffer.push(name);modVal&&buildModPostfix(modName,modVal,buffer)}function buildElemClass(block,name,modName,modVal,buffer){buildBlockClass(block,undefined,undefined,buffer);buffer.push(ELEM_DELIM,name);modVal&&buildModPostfix(modName,modVal,buffer)}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:function(modName,modVal,buffer){var res=buffer||[];buildModPostfix(modName,modVal,res);return buffer?res:res.join("")},buildClass:function(block,elem,modName,modVal,buffer){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){buffer=modVal;modVal=modName;modName=elem;elem=undefined}}else if(typeOfModName!=="undefined"){buffer=modName;modName=undefined}else if(elem&&typeof elem!=="string"){buffer=elem;elem=undefined}if(!(elem||modName||buffer)){return block}var res=buffer||[];elem?buildElemClass(block,elem,modName,modVal,res):buildBlockClass(block,modName,modVal,res);return buffer?res:res.join("")},buildModsClasses:function(block,elem,mods,buffer){var res=buffer||[];if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(modVal==null)continue;modVal=mods[modName];typeof modVal!=="boolean"&&(modVal+="");if(!modVal)continue;res.push(" ");if(elem){buildElemClass(block,elem,modName,modVal,res)}else{buildBlockClass(block,modName,modVal,res)}}}return buffer?res:res.join("")},buildClasses:function(block,elem,mods,buffer){var res=buffer||[];elem?buildElemClass(block,elem,undefined,undefined,res):buildBlockClass(block,undefined,undefined,res);this.buildModsClasses(block,elem,mods,buffer);return buffer?res:res.join("")}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};function BEMContext(context,apply_){this.ctx=typeof context===null?"":context;this.apply=apply_;this._buf=[];this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undefined;this.elem=undefined;this.mods=undefined;this.elemMods=undefined}BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){var t=typeof obj;return t==="string"||t==="number"||t==="boolean"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando])return obj[expando];else return obj[expando]=get()};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function _apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._buf.join("")};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx._mode=undefined;ctx.ctx=undefined;ctx.__$a=0;ctx._ieCommented=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b43(__$ctx,__$ref){__$ctx.__$a=0;var url__$0=__$ctx.ctx.url;var __$r__$1;var __$l0__$2=__$ctx._mode;__$ctx._mode="";var __$l1__$3=__$ctx.ctx;__$ctx.ctx=[6,7,8,9].map(function(v){return{elem:"css",url:url__$0+".ie"+v+".css",ie:"IE "+v}});var __$r__$4;__$ctx.__$a=1;__$r__$4=applyc(__$ctx,__$ref);__$r__$1=__$r__$4;__$ctx._mode=__$l0__$2;__$ctx.ctx=__$l1__$3;return}function __$b44(__$ctx,__$ref){__$ctx.__$a=0;var ie__$5=__$ctx.ctx.ie;var hideRule__$6=!ie__$5?["gt IE 9","<!-->","<!--"]:ie__$5==="!IE"?[ie__$5,"<!-->","<!--"]:[ie__$5,"",""];var __$r__$7;var __$l0__$8=__$ctx._mode;__$ctx._mode="";var __$l3__$9=__$ctx.ctx;var __$l1__$10=__$l3__$9._ieCommented;__$l3__$9._ieCommented=true;var __$l2__$11=__$ctx.ctx;__$ctx.ctx=["<!--[if "+hideRule__$6[0]+"]>"+hideRule__$6[1],__$ctx.ctx,hideRule__$6[2]+"<![endif]-->"];__$r__$7=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$8;__$l3__$9._ieCommented=__$l1__$10;__$ctx.ctx=__$l2__$11;return}function __$b45(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$15=__$ctx.ctx;ctx__$15._wrapped=true;var __$r__$16;var __$l0__$17=__$ctx._mode;__$ctx._mode="";var __$l1__$18=__$ctx.ctx;__$ctx.ctx=[function(){var __$r__$19;var __$l3__$20=__$ctx._mode;__$ctx._mode="doctype";__$r__$19=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$20;return __$r__$19}(),{elem:"root",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$15.title},function(){var __$r__$21;var __$l4__$22=__$ctx._mode;__$ctx._mode="head";__$r__$21=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$22;return __$r__$21}(),ctx__$15.favicon?{elem:"favicon",url:ctx__$15.favicon}:""]},ctx__$15]}];var __$r__$23;__$ctx.__$a=3;__$r__$23=applyc(__$ctx,__$ref);__$r__$16=__$r__$23;__$ctx._mode=__$l0__$17;__$ctx.ctx=__$l1__$18;return}function __$b46(__$ctx,__$ref){__$ctx.__$a=0;var _this__$24=__$ctx,BEM___$25=_this__$24.BEM,v__$26=__$ctx.ctx,buf__$27=__$ctx._buf,tag__$28;var __$r__$29;var __$l14__$30=__$ctx._mode;__$ctx._mode="tag";__$r__$29=applyc(__$ctx,__$ref);__$ctx._mode=__$l14__$30;tag__$28=__$r__$29;typeof tag__$28!="undefined"||(tag__$28=v__$26.tag);typeof tag__$28!="undefined"||(tag__$28="div");if(tag__$28){var jsParams__$31,js__$32;if(__$ctx.block&&v__$26.js!==false){var __$r__$33;var __$l6__$34=__$ctx._mode;__$ctx._mode="js";__$r__$33=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$34;js__$32=__$r__$33;js__$32=js__$32?__$ctx._.extend(v__$26.js,js__$32===true?{}:js__$32):v__$26.js===true?{}:v__$26.js;js__$32&&((jsParams__$31={})[BEM___$25.INTERNAL.buildClass(__$ctx.block,v__$26.elem)]=js__$32)}buf__$27.push("<",tag__$28);var __$r__$36;var __$l7__$37=__$ctx._mode;__$ctx._mode="bem";__$r__$36=applyc(__$ctx,__$ref);__$ctx._mode=__$l7__$37;var isBEM__$35=__$r__$36;typeof isBEM__$35!="undefined"||(isBEM__$35=typeof v__$26.bem!="undefined"?v__$26.bem:v__$26.block||v__$26.elem);var __$r__$39;var __$l8__$40=__$ctx._mode;__$ctx._mode="cls";__$r__$39=applyc(__$ctx,__$ref);__$ctx._mode=__$l8__$40;var cls__$38=__$r__$39;cls__$38||(cls__$38=v__$26.cls);var addJSInitClass__$41=v__$26.block&&jsParams__$31;if(isBEM__$35||cls__$38){buf__$27.push(' class="');if(isBEM__$35){BEM___$25.INTERNAL.buildClasses(__$ctx.block,v__$26.elem,v__$26.elemMods||v__$26.mods,buf__$27);var __$r__$43;var __$l9__$44=__$ctx._mode;__$ctx._mode="mix";__$r__$43=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$44;var mix__$42=__$r__$43;v__$26.mix&&(mix__$42=mix__$42?mix__$42.concat(v__$26.mix):v__$26.mix);if(mix__$42){var visited__$45={};function visitedKey__$46(block,elem){return(block||"")+"__"+(elem||"")}visited__$45[visitedKey__$46(__$ctx.block,__$ctx.elem)]=true;if(!__$ctx._.isArray(mix__$42))mix__$42=[mix__$42];for(var i__$47=0;i__$47<mix__$42.length;i__$47++){var mixItem__$48=mix__$42[i__$47],hasItem__$49=mixItem__$48.block||mixItem__$48.elem,block__$50=mixItem__$48.block||mixItem__$48._block||_this__$24.block,elem__$51=mixItem__$48.elem||mixItem__$48._elem||_this__$24.elem;hasItem__$49&&buf__$27.push(" ");BEM___$25.INTERNAL[hasItem__$49?"buildClasses":"buildModsClasses"](block__$50,mixItem__$48.elem||mixItem__$48._elem||(mixItem__$48.block?undefined:_this__$24.elem),mixItem__$48.elemMods||mixItem__$48.mods,buf__$27);if(mixItem__$48.js){(jsParams__$31||(jsParams__$31={}))[BEM___$25.INTERNAL.buildClass(block__$50,mixItem__$48.elem)]=mixItem__$48.js===true?{}:mixItem__$48.js;addJSInitClass__$41||(addJSInitClass__$41=block__$50&&!mixItem__$48.elem)}if(hasItem__$49&&!visited__$45[visitedKey__$46(block__$50,elem__$51)]){visited__$45[visitedKey__$46(block__$50,elem__$51)]=true;var __$r__$53;var __$l10__$54=__$ctx._mode;__$ctx._mode="mix";var __$l11__$55=__$ctx.block;__$ctx.block=block__$50;var __$l12__$56=__$ctx.elem;__$ctx.elem=elem__$51;__$r__$53=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$54;__$ctx.block=__$l11__$55;__$ctx.elem=__$l12__$56;var nestedMix__$52=__$r__$53;if(nestedMix__$52){for(var j__$57=0;j__$57<nestedMix__$52.length;j__$57++){var nestedItem__$58=nestedMix__$52[j__$57];if(!nestedItem__$58.block&&!nestedItem__$58.elem||!visited__$45[visitedKey__$46(nestedItem__$58.block,nestedItem__$58.elem)]){nestedItem__$58._block=block__$50;nestedItem__$58._elem=elem__$51;mix__$42.splice(i__$47+1,0,nestedItem__$58)}}}}}}}cls__$38&&buf__$27.push(isBEM__$35?" ":"",cls__$38);addJSInitClass__$41&&buf__$27.push(" i-bem");buf__$27.push('"')}if(isBEM__$35&&jsParams__$31){buf__$27.push(' data-bem="',__$ctx._.attrEscape(JSON.stringify(jsParams__$31)),'"')}var __$r__$60;var __$l13__$61=__$ctx._mode;__$ctx._mode="attrs";__$r__$60=applyc(__$ctx,__$ref);__$ctx._mode=__$l13__$61;var attrs__$59=__$r__$60;attrs__$59=__$ctx._.extend(attrs__$59,v__$26.attrs);if(attrs__$59){var name__$62;for(name__$62 in attrs__$59){if(attrs__$59[name__$62]===undefined)continue;buf__$27.push(" ",name__$62,'="',__$ctx._.attrEscape(attrs__$59[name__$62]),'"')}}}if(__$ctx._.isShortTag(tag__$28)){buf__$27.push("/>")}else{tag__$28&&buf__$27.push(">");var __$r__$64;var __$l0__$65=__$ctx._mode;__$ctx._mode="content";__$r__$64=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$65;var content__$63=__$r__$64;if(content__$63||content__$63===0){var isBEM__$35=__$ctx.block||__$ctx.elem;var __$r__$66;var __$l1__$67=__$ctx._mode;__$ctx._mode="";var __$l2__$68=__$ctx._notNewList;__$ctx._notNewList=false;var __$l3__$69=__$ctx.position;__$ctx.position=isBEM__$35?1:__$ctx.position;var __$l4__$70=__$ctx._listLength;__$ctx._listLength=isBEM__$35?1:__$ctx._listLength;var __$l5__$71=__$ctx.ctx;__$ctx.ctx=content__$63;__$r__$66=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$67;__$ctx._notNewList=__$l2__$68;__$ctx.position=__$l3__$69;__$ctx._listLength=__$l4__$70;__$ctx.ctx=__$l5__$71}tag__$28&&buf__$27.push("</",tag__$28,">")}return}function __$b55(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$72;var __$l0__$73=__$ctx._mode;__$ctx._mode="";var __$l1__$74=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._res;var __$r__$75;__$ctx.__$a=4;__$r__$75=applyc(__$ctx,__$ref);__$r__$72=__$r__$75;__$ctx._mode=__$l0__$73;__$ctx.ctx=__$l1__$74;return}function __$b56(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$76=__$ctx.ctx;(ctx__$76&&ctx__$76!==true||ctx__$76===0)&&__$ctx._buf.push(ctx__$76);return}function __$b57(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b58(__$ctx,__$ref){__$ctx.__$a=0;var v__$77=__$ctx.ctx,l__$78=v__$77.length,i__$79=0,prevPos__$80=__$ctx.position,prevNotNewList__$81=__$ctx._notNewList;if(prevNotNewList__$81){__$ctx._listLength+=l__$78-1}else{__$ctx.position=0;__$ctx._listLength=l__$78}__$ctx._notNewList=true;while(i__$79<l__$78)!function(){var __$r__$82;var __$l0__$83=__$ctx.ctx;__$ctx.ctx=v__$77[i__$79++];__$r__$82=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$83;return __$r__$82}();prevNotNewList__$81||(__$ctx.position=prevPos__$80);return}function __$b59(__$ctx,__$ref){__$ctx.__$a=0;var vBlock__$84=__$ctx.ctx.block,vElem__$85=__$ctx.ctx.elem,block__$86=__$ctx._currBlock||__$ctx.block;__$ctx.ctx||(__$ctx.ctx={});var __$r__$87;var __$l0__$88=__$ctx._mode;__$ctx._mode="default";var __$l1__$89=__$ctx.block;__$ctx.block=vBlock__$84||(vElem__$85?block__$86:undefined);var __$l2__$90=__$ctx._currBlock;__$ctx._currBlock=vBlock__$84||vElem__$85?undefined:block__$86;var __$l3__$91=__$ctx.elem;__$ctx.elem=__$ctx.ctx.elem;var __$l4__$92=__$ctx.mods;__$ctx.mods=(vBlock__$84?__$ctx.ctx.mods:__$ctx.mods)||{};var __$l5__$93=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$87=undefined;__$ctx._mode=__$l0__$88;__$ctx.block=__$l1__$89;__$ctx._currBlock=__$l2__$90;__$ctx.elem=__$l3__$91;__$ctx.mods=__$l4__$92;__$ctx.elemMods=__$l5__$93;return}function __$g0(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="footer"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"info-holder",mix:{block:"grid_row"},content:[{elem:"info",mix:{block:"grid__module",mods:{col:2,span:6}},content:"Мир один, а люди разные. Так и интернет — он один, но для каждого разный. <br><br>Теперь посмотрите, как планировали путешествие в Таиланд другие герои."},{elem:"atom-logo",mix:{block:"grid__module",mods:{col:9,span:2}}}]},{elem:"foot",mix:{block:"grid_row"},content:[{elem:"links",mix:{block:"grid__module",mods:{col:2,span:3}},content:[{elem:"link",mix:{block:"link"},content:"Помощь"},{elem:"link",mix:{block:"link"},content:"Обратная связь"}]},{elem:"copyright",mix:{block:"grid__module",mods:{col:6,span:3}},content:"© 2013 ООО «Яндекс»"}]}]}}else if(__$t==="story_theme_blue"){if(!__$ctx.elem){__$ctx.__$a=0;return{elem:"steps",content:[{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{block:"path_theme_blue",mix:{block:"grid__module",mods:{col:2,span:10}},content:{elem:"step-1"}},{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:2,span:4}},content:"Григорий Иоганович Дауге редко отдыхает — бизнес требует от него полной отдачи. <br><br> Друзья и коллеги, переживающие за его здоровье, подарили ему билет в Таиланд. Поспорив для вида, Григорий Иоганович решает, что здоровье важнее, и садится выбирать отель."},{block:"image_theme_blue",mods:{layer:"middle"},mix:{block:"grid__module",mods:{col:7,span:5}},content:{elem:"notepad",mods:{push_down:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_blue",mix:{block:"grid__module",mods:{col:3,span:8}},content:{elem:"step-2"}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:1,span:4}},content:{elem:"phone",mods:{push_down:"yes",push_left:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:5,span:1}},content:{elem:"pen",mods:{push_down:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:6,span:6}},content:{elem:"ticket",mods:{push_down:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:7,span:2}},content:{elem:"watch",mods:{push_down:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:11,span:4}},content:{elem:"photo",mods:{push_down:"yes"}}}]}]},{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:8,span:4}},content:"Даже отдых должен приносить в жизнь что-нибудь новое — таков жизненный принцип Григория Иогановича. <br><br> В этой поездке он планирует научиться дайвингу: посмотреть на коралловые рифы и причудливых морских животных."},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:1,span:5}},content:{elem:"paper",mods:{push_down:"yes",push_left:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:2,span:5}},content:{elem:"notebook",mods:{push_down:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:2,span:5}},content:{elem:"notebook2",mods:{push_up:"yes",push_left:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:3,span:4}},content:{elem:"ipad",mods:{push_down:"yes"}}},{block:"image_theme_blue",mods:{layer:"middle"},mix:{block:"grid__module",mods:{col:5,span:3}},content:{elem:"cup",mods:{push_down:"yes"}}},{block:"image_theme_blue",mods:{layer:"middle"},mix:{block:"grid__module",mods:{col:10,span:3}},content:{elem:"palka",mods:{push_down:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_blue",mix:{block:"grid__module",mods:{col:2,span:9}},content:{elem:"step-3"}},{block:"image_theme_blue",mods:{layer:"middle"},mix:{block:"grid__module",mods:{col:8,span:5}},content:{elem:"maska",mods:{push_down:"yes"}}}]}]},{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:2,span:4}},content:"Перед отлётом Григорий Иоганович отправил своего личного водителя в отпуск. <br><br> Добираться до аэропорта он будет на такси."},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:6,span:4}},content:{elem:"cards",mods:{push_down:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:11,span:2}},content:{elem:"money",mods:{push_down:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:11,span:5}},content:{elem:"krug",mods:{push_up:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:7,span:5}},content:{elem:"pie",mods:{push_down:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_blue",mix:{block:"grid__module",mods:{col:2,span:9}},content:{elem:"step-4"}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:3,span:2}},content:{elem:"iphone",mods:{push_down:"yes"}}}]}]},{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:8,span:4}},content:"В Таиланде Григорий Иоганович наконец понимает, как сильно он устал на работе. <br><br> Каждый день он в обязательном порядке ходит на массаж, а утро начинает с йоги."},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:1,span:6}},content:{elem:"bag",mods:{push_up:"yes",push_left:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:2,span:6}},content:{elem:"newspaper",mods:{push_down:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_blue",mix:{block:"grid__module",mods:{col:4,span:8}},content:{elem:"step-5"}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:7,span:4}},content:{elem:"yoga",mods:{push_down:"yes"}}},{block:"image_theme_blue",mix:{block:"grid__module",mods:{col:12,span:3}},content:{elem:"book",mods:{push_down:"yes"}}}]}]}]}}}else if(__$t==="story_theme_red"){if(!__$ctx.elem){__$ctx.__$a=0;return{elem:"steps",content:[{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{block:"path_theme_red",mix:{block:"grid__module",mods:{col:2,span:10}},content:{elem:"step-1"}},{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:2,span:4}},content:"Устав от турецких пляжей, Алексей Быков решил вывезти семью в Таиланд. <br><br>Он выбирает тур так, чтобы уложиться в адекватную сумму, но порадовать всех: приемлемый уровень комфорта, детская анимация, недалеко от пляжа, «все включено»."},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:7,span:6}},content:{elem:"tour",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:8,span:6}},content:{elem:"passports",mods:{push_down:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_red",mix:{block:"grid__module",mods:{col:4,span:9}},content:{elem:"step-2"}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:2,span:5}},content:{elem:"portlet",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:3,span:4}},content:{elem:"book",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:1,span:4}},content:{elem:"bear",mods:{push_down:"yes",push_left:"yes"}}}]}]},{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:8,span:4}},content:"Алексей твердо уверен, что линзы практичнее обычных очков — как минимум потому, что вместе с ними можно надеть другие очки: для плавания или солнечные. <br><br> Он привык к тому, что у него всегда есть запас одноразовых линз."}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_red",mix:{block:"grid__module",mods:{col:2,span:10}},content:{elem:"step-3"}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:2,span:2}},content:{elem:"iphone",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:5,span:3}},content:{elem:"bill",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:7,span:5}},content:{elem:"lenses",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:8,span:5}},content:{elem:"glasses",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:1,span:2}},content:{elem:"tamagotchi",mods:{push_down:"yes",push_left:"yes"}}}]}]},{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:2,span:4}},content:"У семьи Быковых с собой очень много багажа, большую часть которого занимают платья жены и детские вещи. <br><br> Ехать с сумками на общественном транспорте им совсем не хочется, тем более, когда есть вместительный автомобиль. Алексей решает переплатить за парковку у аэропорта, зато добраться с удобством."},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:8,span:6}},content:{elem:"imac-monitor",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:10,span:6}},content:{elem:"imac-keyboard",mods:{push_down:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_red",mix:{block:"grid__module",mods:{col:2,span:8}},content:{elem:"step-4"}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:2,span:4}},content:{elem:"license",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:4,span:3}},content:{elem:"keys",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:1,span:6}},content:{elem:"bags",mods:{push_down:"yes",push_left:"yes"}}}]}]},{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:8,span:4}},content:"Для Алексея один из основных мотивов выбора Таиланда — гастрономический: и он, и жена любят экзотическую кухню. <br><br> Каждый день они вместе отправляются на поиски новых ресторанов."}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_red",mix:{block:"grid__module",mods:{col:7,span:4}},content:{elem:"step-5"}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:1,span:4}},content:{elem:"food-fish",mods:{push_down:"yes",push_left:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:3,span:4}},content:{elem:"food-eggs",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:11,span:3}},content:{elem:"food-grape",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:8,span:3}},content:{elem:"drink-wine",mods:{push_down:"yes",push_right:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:2,span:4}},content:{elem:"drink-milk",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:7,span:4}},content:{elem:"drink-coup-full",mods:{push_down:"yes"}}},{block:"image_theme_red",mix:{block:"grid__module",mods:{col:11,span:4}},content:{elem:"drink-coup-middle",mods:{push_down:"yes"}}}]}]}]}}}else if(__$t==="story_theme_yellow"){if(!__$ctx.elem){__$ctx.__$a=0;return{elem:"steps",content:[{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{block:"path_theme_yellow",mix:{block:"grid__module",mods:{col:2,span:10}},content:{elem:"step-1"}},{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:2,span:4}},content:"Максим хочет увидеть настоящий, нетуристический Таиланд. <br><br> Он планирует путешествовать по стране самостоятельно, составлять маршрут по ходу. Поэтому всё, что ему нужно, — билет на самолёт."},{block:"image_theme_yellow",mods:{layer:"middle"},mix:{block:"grid__module",mods:{col:7,span:5}},content:{elem:"map",mods:{push_up:"yes",push_right:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_yellow",mix:{block:"grid__module",mods:{col:2,span:9}},content:{elem:"step-2"}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:1,span:7}},content:{elem:"aeroexpress",mods:{push_down:"yes",push_left:"yes"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:8,span:3}},content:{elem:"compass",mods:{push_down:"yes",push_left:"yes"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:11,span:4}},content:{elem:"book",mods:{push_down:"yes",push_left:"yes"}}}]}]},{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:8,span:4}},content:"Для путешествия по жаркой стране Максиму нужна удобная одежда и крепкая обувь. <br><br> Он не желает тратить время на походы по магазинам, ведь интересные ему вещи можно с лёгкостью найти в интернете."},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:2,span:5}},content:{elem:"laptop",mods:{push_down:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_yellow",mix:{block:"grid__module",mods:{col:2,span:10}},content:{elem:"step-3"}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:1,span:2}},content:{elem:"polaroid",mods:{pos:"1"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:4,span:2}},content:{elem:"polaroid",mods:{pos:3}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:3,span:2}},content:{elem:"polaroid",mods:{pos:2}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:9,span:3}},content:{elem:"iphone",mods:{push_down:"yes"}}}]}]},{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:2,span:4}},content:"Рюкзак с вещами и ноутбуком — вот и весь багаж Максима. <br><br> На метро он доберётся до вокзала, а оттуда поедет на аэроэкспрессе."},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:10,span:5}},content:{elem:"magazine",mods:{push_up:"yes",push_right:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_yellow",mix:{block:"grid__module",mods:{col:2,span:9}},content:{elem:"step-4"}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:5,span:3}},content:{elem:"ticket",mods:{push_down:"yes",push_right:"yes"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:1,span:7}},content:{elem:"aeroexpress",mods:{push_down:"yes",push_left:"yes"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:6,span:4}},content:{elem:"money",mods:{push_down:"yes",push_right:"yes"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:3,span:3}},content:{elem:"traffic",mods:{push_down:"yes"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:9,span:4}},content:{elem:"ipod",mods:{push_down:"yes"}}}]}]},{block:"step",content:[{elem:"text-holder",mix:{block:"grid_cols_12"},content:[{elem:"text-holder-inner",mix:{block:"grid_row"},content:[{elem:"text",mix:{block:"grid__module",mods:{col:8,span:4}},content:"Максим не сидит на месте — в поисках интересных мест он колесит по всей стране. <br><br> Когда ночь застаёт его в пути, Максим просто находит ближайший хостел. Утром он решает — остаться и осмотреть местные достопримечательности или вернуться на дорогу."},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:2,span:6}},content:{elem:"backpack",mods:{push_down:"yes"}}}]}]},{elem:"images",mix:{block:"grid_row"},content:[{block:"path_theme_yellow",mix:{block:"grid__module",mods:{col:4,span:8}},content:{elem:"step-5"}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:8,span:7}},content:{elem:"carton",mods:{push_down:"yes"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:3,span:3}},content:{elem:"notebook",mods:{push_down:"yes"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:6,span:2}},content:{elem:"bottle",mods:{push_down:"yes"}}},{block:"image_theme_yellow",mix:{block:"grid__module",mods:{col:8,span:4}},content:{elem:"camera",mods:{push_down:"yes"}}}]}]}]}}}else if(__$t==="user"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"icon",mix:{block:"user-icon",mods:{theme:__$ctx.ctx.mods.theme,size:__$ctx.ctx.mods.size}},content:__$ctx.ctx.icon},{elem:"name",content:__$ctx.ctx.name},{elem:"text",content:__$ctx.ctx.text}]}}else if(__$t==="users"){if(!__$ctx.elem){__$ctx.__$a=0;return{elem:"row",mix:{block:"grid_row"},content:{elem:"wrap",content:[{block:"user",mods:{theme:"yellow",size:"mini"},name:"Максим",text:"Предпочитает путешествовать самостоятельно и налегке. Уверен, что только так можно проникнуться культурой страны.",mix:{block:"grid__module",mods:{span:4,col:2}}},{block:"user",mods:{theme:"red",size:"mini"},name:"Алексей",text:"В отпуск ездит вместе с женой и дочкой. Считает, что отдыхать лучше всего в отелях на побережье..",mix:{block:"grid__module",mods:{span:4,col:5}}},{block:"user",mods:{theme:"blue",size:"mini"},name:"Григорий И. Дауге",text:"Очень дорожит редкими отпусками и превыше всего ценит комфорт и качество обслуживания..",mix:{block:"grid__module",mods:{span:4,col:8}}}]}}}}else if(__$t==="header-info"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"inner",content:[{elem:"lead-text",mix:{block:"grid__module",mods:{col:2,span:6}},content:"Интернет сегодня — это не только информация и технологии, но и люди. Людей много и они все разные, а сайты для всех пользователей обычно выглядят одинаково. Яндекс уже научился адаптироваться под конкретного пользователя и готов поделиться этой технологией с другими. <br/><br/> «Атом». Технологическая платформа, задача которой — предоставить сайтам возможность изменять содержание страниц под конкретного пользователя."},{elem:"video-holder",mix:{block:"grid__module",mods:{col:9,span:3}},content:[{elem:"video-image",mods:{color:__$ctx.ctx.color}},{elem:"video-text",content:"Весь сайт в одном видео"}]}]}]}}else if(__$t==="header-logo"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"orbital"},{elem:"ya-logo",mix:{block:"grid__module",mods:{col:6,span:2}}},{elem:"title",mix:{block:"grid__module",mods:{col:2,span:10}},content:"- А что если интернет подстроится под меня?"}]}}else if(__$t==="header"){if(!__$ctx.elem){__$ctx.__$a=0;return[{block:"header-logo"},{block:"header-info"}]}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return[";(function(d,e,c,r){","e=d.documentElement;",'c="className";','r="replace";','e[c]=e[c][r](/(ua_js_)no/g,"$1yes");','if(d.compatMode!="CSS1Compat")','e[c]=e[c][r](/(ua_css_)standart/g,"$1quirks")',"})(document);"]
}}__$ctx.__$a=0;return __$ctx.ctx.content;return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="root"){__$ctx.__$a=0;return"html"}if(!__$ctx.elem){__$ctx.__$a=0;return"body"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}__$ctx.__$a=0;return undefined;return __$ref}function __$g2(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="js"){var __$t=__$ctx.block;if(__$t==="atom-ledge"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="story"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="stories"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="locomotive"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="user"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}else if(__$t==="atom"){if(!__$ctx.elem){__$ctx.__$a=0;return true}}__$ctx.__$a=0;return undefined}else if(__$t==="content"){var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="attrs"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}}__$ctx.__$a=0;return undefined}else if(__$t==="tag"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="bem"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false}else if(__$t==="root"){__$ctx.__$a=0;return false}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="css"){var __$t=!__$ctx.ctx._ieCommented;if(__$t){var __$t=__$ctx.ctx.hasOwnProperty("ie");if(__$t){if(__$ctx.ctx.ie===true&&__$ctx.__$a!==1){__$ctx.__$a=0;var __$r=__$b43(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b44(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}if(!__$ctx.elem&&!__$ctx.ctx._wrapped&&__$ctx.__$a!==3){__$ctx.__$a=0;var __$r=__$b45(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b46(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="head"){var __$t=__$ctx.block;if(__$t==="page"){var __$t=!__$ctx.elem;if(__$t){if(__$ctx.__$a!==2){__$ctx.__$a=0;return[function(){var __$r__$12;var __$l0__$13=__$ctx._mode;__$ctx._mode="xUACompatible";__$r__$12=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$13;return __$r__$12}(),function(){var __$r__$14;__$ctx.__$a=2;__$r__$14=applyc(__$ctx,__$ref);return __$r__$14}()]}__$ctx.__$a=0;return[{block:"ua"},__$ctx.ctx.head]}}}else if(__$t==="xUACompatible"){if(__$ctx.block==="page"&&!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx["x-ua-compatible"]===false?false:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:__$ctx.ctx["x-ua-compatible"]||"IE=edge"}}}}else if(__$t==="cls"){if(__$ctx.block==="page"&&__$ctx.elem==="root"){__$ctx.__$a=0;return"ua_js_no ua_css_standard"}__$ctx.__$a=0;return undefined}else if(__$t==="mix"){if(__$ctx.block==="page"&&!__$ctx.elem){__$ctx.__$a=0;return[{elem:"body"}]}__$ctx.__$a=0;return undefined}else if(__$t==="doctype"){if(__$ctx.block==="page"&&!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx.doctype||"<!DOCTYPE html>"}}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx.hasOwnProperty("_res")&&__$ctx.__$a!==4){__$ctx.__$a=0;var __$r=__$b55(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx._.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b56(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b57(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx._.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b58(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b59(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return __$ref};
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML", function(provide) { provide(__xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __xjst);
})(this);