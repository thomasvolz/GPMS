Bootstrapper.bindImmediate(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;Bootstrapper.getElementXPath=function(e){var n=e;var p="";while(n!=document.getElementsByTagName("html")[0]){var t="/"+n.tagName;if(n.id!=""){t+="#"+n.id;p=t+p}else{var c=1;_n=n.previousSibling;while(_n!=null){if(n.tagName==_n.tagName)c++;_n=_n.previousSibling}p=t+(c!=1?"["+c+"]":"")+p}n=n.parentNode}return Bootstrapper.getMinXPath("/HTML"+p)};Bootstrapper.getMinXPath=function(path){var p=
path.split("/"),lastId=0;for(var i=0;i<p.length;i++)if(~p[i].indexOf("#"))lastId=i;for(var i=lastId;i>0;i--)if(!~p[i].indexOf("#")&&!p[i].match(/^(html|body)/i))p.splice(i,1);return p.join("/")};Bootstrapper.getElementByXPathStep=function(d,a){var c=~a.indexOf("#")?a.split("#")[1]:"",e=c?0:~a.indexOf("[")?parseInt(a.match(/\[(\d+)\]/)[1]):0,f=(c?a.split("#")[0]:e?a.split("[")[0]:a).toLowerCase();if(d==document&&f=="html"&&e==0)return document.getElementsByTagName("html")[0];if(~a.indexOf("#"))return document.getElementById(a.split("#")[1]);
var b=d.firstChild;if(!b)return null;for(var g=0,e=e!=0?e-1:e;b;){if(b.nodeType==1)if(b.tagName.toLowerCase()==f&&c!=""&&b.id==c)return b;else if(b.tagName.toLowerCase()==f&&g==e&&c=="")return b;else b.tagName.toLowerCase()==f&&g++;b=b.nextSibling}};Bootstrapper.getElementByXPath=function(d,n){for(var d=d.split("/"),a=Bootstrapper.getElementByXPathStep(n||document,d[1]),c=2;c<d.length;c++){if(a==null)return null;a=Bootstrapper.getElementByXPathStep(a,d[c])}return a};Bootstrapper.dataManager=function(){var _private=
{data:{},add:function(o){if(typeof o=="object"&&o.id){o.get=function(e){return Bootstrapper.dataManager.getDataElement(this.id,e)};this.data[o.id]=o}},getObj:function(i){if(i)return _private.data[i];return _private.data},getDataElement:function(i,e){if(typeof this.data[i]=="undefined")return"";var dataObj=this.data[i].data,retVal;if(typeof dataObj=="object"){if(typeof dataObj[e]=="undefined")return"";dataObj=dataObj[e];if(typeof dataObj.get=="string"){var d=eval(dataObj.get);if(typeof dataObj.mod==
"string"&&dataObj.mod!==""){var m="(function(){ return "+(dataObj.mod===""?"this":dataObj.mod)+";})";retVal=eval(m).call(d)}else if(typeof dataObj.mod=="function")retVal=dataObj.mod.call(d,d);else retVal=d}else if(typeof dataObj.get=="function"){var d=dataObj.get.call(this.data[i]);if(typeof dataObj.mod=="string"&&dataObj.mod!==""){var m="(function(){ return "+(dataObj.mod===""?"this":dataObj.mod)+";})";retVal=eval(m).call(d)}else if(typeof dataObj.mod=="function")retVal=dataObj.mod.call(d,d);else retVal=
d}return retVal}},getDataLayer:function(i){var retObj={};var dataObj=this.data[i].data;for(key in dataObj)try{retObj[key]=this.getDataElement(i,key)}catch(e){retObj[key]=null}return retObj},getAllData:function(){var data=this.data,retObj={_d:{}};for(var key in data){retObj._d[key]={};var d=this.getDataLayer(key);for(var k in d){retObj[k]=d[k];retObj._d[key][k]=d[k]}}return retObj},getData:function(i){if(i)return this.getDataLayer(i);else return this.getAllData()},addDataElement:function(layerId,name,
o){if(typeof this.data[layerId]=="object"&&typeof name=="string"&&typeof o=="object"){var d=this.data[layerId];d.data[name]=o}}},_public={push:function(dl){_private.add(dl)},getObj:function(i){return _private.getObj(i)},getData:function(i){return _private.getData(i)},getDataElement:function(i,e){return _private.getDataElement(i,e)},addDataElement:function(layerId,name,o){return _private.addDataElement(layerId,name,o)}};return _public}();Bootstrapper.eventManager=function(){var _private={events:{},
pushTrack:function(name,fn){if(typeof name!="string")return false;this.events[name]=this.events[name]||[];if(typeof fn=="function")this.events[name].push(fn);return true},callTrack:function(name){if(typeof name!="string")return false;var l=_private.events[name];if(typeof l=="object"&&l.length)for(var i=0;i<l.length;i++)l[i].call(this)},bind:function(layer,name,fn){var node=Bootstrapper.dataManager.getDataElement(layer,name),event=name.split("#")[1],name=name.split("#")[0],bound=typeof this.events[name]!=
"undefined"?true:false;if(typeof node.nodeName!="undefined"){this.pushTrack(name,fn);if(!bound)if((event=="onelementvisible"||event=="onelementexists")&&typeof Bootstrapper.propertyWatcher!="undefined"){Bootstrapper.watch=Bootstrapper.watch||{};if(~event.indexOf("vis")){Bootstrapper.eventManager.watch[name]=Bootstrapper.propertyWatcher.create(function(){return node},["style","display"]);Bootstrapper.eventManager.watch[name].change=function(p,o,n){if(n!="none")Bootstrapper.eventManager.track(name,
this)}}else{Bootstrapper.eventManager.watch[name]=Bootstrapper.propertyWatcher.create(function(){return node},["style","display"]);Bootstrapper.eventManager.watch[name].change=function(p,o,n){if(o=="undefined")Bootstrapper.eventManager.track(name,this)}}}else Bootstrapper.unobtrusiveAddEvent(node,event,function(){Bootstrapper.eventManager.track(name,this)})}else if(typeof node=="object"&&typeof node.length!="undefined"){this.pushTrack(name,fn);if(!bound)for(i=0,l=node.length;i<l;i++)Bootstrapper.unobtrusiveAddEvent(node[i],
event,function(){Bootstrapper.eventManager.track(name,this)})}},debug:function(name,ref){if(~window.location.search.indexOf("ensightenDebug"))console.log("::eventManager - Name:"+name+" ::eventManager - Scope:"+ref)}},_public={bindTracker:function(layer,name,fn){return _private.bind(layer,name,fn)},getEvent:function(name){return _private.events[name]},getAll:function(){return _private.events},track:function(name,ref){var $this=ref||window;_private.debug(name,$this);return _private.callTrack.call($this,
name)}};return _public}();Bootstrapper.dataManager.map=function(){var _private={gD:{},mD:function(){var r={},e=window.document.getElementsByTagName("META")||[];for(var m=0,l=e.length;m<l;m++){var n=e[m].name||e[m].getAttribute("property")||"";if(n.length!==0)r[n]=e[m].content}return r}(),gP:function(p){return(s=(new RegExp("\x26"+p+"\x3d([^\x26]*)")).exec(window.location.search.replace(/^\?/,"\x26")))?s[0].split("\x3d")[1]:""},gC:function(c){return(v=(new RegExp("^"+c+"\x3d.*|;\\s*"+c+"\x3d.*")).exec(window.document.cookie))?
v[0].split("\x3d")[1].split(";")[0]:""},gT:function(g){try{return this.mD[g]||this.gC(g)||this.gP(g)||window[g]||""}catch(e){return""}},dF:function(n,d){this.gD={};for(i in d){var val=typeof d[i]=="string"?this.gT(d[i]):d[i]();if(~window.location.href.indexOf("ensightenDebug"))console.log(i+": "+val);this.gD[i]={name:i,get:'(function(){return("'+val+'")})()'}}Bootstrapper.dataManager.push({name:n,id:n,data:this.gD})}},_public={define:function(n,d){_private.dF(n,d)},get:function(g){return _private.gT(g)}};
return _public}();window.$data=function(n,d){try{return Bootstrapper.dataManager.getDataElement(n,d)}catch(e){return""}};window.$globals=function(){return Bootstrapper.dataManager.getData("global")};window.$getData=function(d){return Bootstrapper.dataManager.map.get(d)};Bootstrapper.dataManager.dataImport=function(O,N,T){var DM=Bootstrapper.dataManager;if(typeof DM.getObj()[N]=="undefined")DM.push({name:N,id:N,data:{}});for(i in O)if(T!="simple"&&typeof O[i]=="object"){DM.dataImport(O[i],T=="flattened"?
N:i,T);console.log(T)}else if(typeof O[i]!="object"||O[i]==null)try{eval('Bootstrapper.dataManager.addDataElement(N,i,{name:i,get:function(){try{return "'+O[i]+"\"}catch(e){return'error'}}})")}catch(e){}};Bootstrapper.targetingExtension=function(){var o=ensightenOptions,DL=typeof Bootstrapper.dataManager!="undefined"?Bootstrapper.dataManager.getData():false;if(~document.cookie.indexOf("VTP:enabled")){if(!DL)DL={};DL["ensightenVT"]=1}Bootstrapper.insertScript("//"+(typeof ensightenOptions.serverComponentLocation!=
"undefined"?ensightenOptions.serverComponentLocation:o.nexus+"/"+o.client+"/serverComponent.php"),false,DL)};if(typeof Bootstrapper._getServerComponent!="undefined")Bootstrapper._getServerComponent=Bootstrapper.targetingExtension;else Bootstrapper.getServerComponent=Bootstrapper.targetingExtension;Bootstrapper.propertyWatcher=function(f){var g={watchers:[]},p={};g.options=f||{};g.options.interval=g.options.interval||50;g.Watcher=function(c,d){var e={};e.propertyFn=c;e.lastValue=undefined;e.options=
d;e.change=function(a,b){};return e};g.doChecks=function(){for(var i=0;i<g.watchers.length;i++){var w=g.watchers[i],p=w.propertyFn?w.propertyFn():null;if(w.lastValue!=p){w.change(w.lastValue,p);w.lastValue=p}}g.resetTimer()};g.resetTimer=function(){window.setTimeout(function(){g.doChecks()},g.options.interval)};g.addWatcher=function(a,b){var w=g.Watcher(a,b);g.watchers.push(w);return w};p={create:g.addWatcher};g.doChecks();return p}()},300292,222986);