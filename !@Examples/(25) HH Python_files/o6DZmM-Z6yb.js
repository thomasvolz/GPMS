/*!CK:155694501!*//*1437096112,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["4jJST"]); }

__d("PUWErrorCodes",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={BAD_JPEG:9901,WORKER_TERMINATED:9902,UNKNOWN_RESIZE_ERROR:9903,WORKER_ABORT:9904};},null);
__d("FBOverlayBase.react",["React"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h=g.createClass({displayName:"FBOverlayBase",render:function(){return g.Children.only(this.props.children);}});e.exports=h;},null);
__d("FBOverlayElement.react",["React","cloneWithProps","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=g,l=k.PropTypes,m={horizontal:{left:"_32rg",right:"_32rh",fit:j("_32rg","_32rh")},vertical:{top:"_32ri",bottom:"_32rj",fit:j("_32ri","_32rj")}},n=g.createClass({displayName:"FBOverlayElement",propTypes:{horizontal:l.oneOf(['left','right','fit']),vertical:l.oneOf(['top','bottom','fit'])},getDefaultProps:function(){return {horizontal:'fit',vertical:'fit'};},render:function(){var o=j("_32rk",m.horizontal[this.props.horizontal],m.vertical[this.props.vertical]);return h(g.Children.only(this.props.children),{className:o});}});e.exports=n;},null);
__d("FBOverlayContainer.react",["FBOverlayBase.react","FBOverlayElement.react","React","cx","invariant","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=i.createClass({displayName:"FBOverlayContainer",propTypes:{children:function(n,o){var p=n[o],q=0;i.Children.forEach(p,function(r){if(r===null||r===(void 0))return;switch(r.type){case g:q++;break;case h:break;default:k(false);}});k(q===1);}},render:function(){return (i.createElement("div",i.__spread({},this.props,{className:l(this.props.className,"_23n-")}),this.props.children));}});e.exports=m;},null);
__d("XUINotice.react",["React","Image.react","XUICloseButton.react","cx","fbt","ix","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();'use strict';var n=g,o=n.PropTypes,p={notify:{altText:k._("Notice"),className:null,iconSrc:l('/images/deprecated/glyphs/flat/info-flat_m.png')},success:{altText:k._("Success"),className:"_3qh4",iconSrc:l('/images/deprecated/glyphs/flat/checkmark_white_m.png')},warn:{altText:k._("Warning"),className:"_585o",iconSrc:l('/images/deprecated/glyphs/flat/error-flat_m.png')}},q=g.createClass({displayName:"XUINotice",propTypes:{onDismiss:o.func,use:o.oneOf(Object.keys(p)),size:o.oneOf(['medium','small'])},getDefaultProps:function(){return {use:'notify',size:'medium'};},render:function(){var r=this.props,s=r.children,t=r.className,u=r.onDismiss,v=r.use,w=(function(aa,ba){var ca={},da=Object.prototype.hasOwnProperty;if(aa==null)throw new TypeError();for(var ea in aa)if(da.call(aa,ea)&&!da.call(ba,ea))ca[ea]=aa[ea];return ca;})(r,{children:1,className:1,onDismiss:1,use:1}),x=p[v];t=m("_585n",x.className,t);var y=null;if(u)y=g.createElement(i,{className:"_585q",href:"#",onClick:u});var z=(("_585r")+(u?' '+"_2i-a":'')+(this.props.size==='medium'?' '+"_50f4":'')+(this.props.size==='small'?' '+"_50f3":''));return (g.createElement("div",g.__spread({},w,{className:t}),g.createElement(h,{alt:x.altText,className:"_585p",src:x.iconSrc}),y,g.createElement("div",{className:z},s)));}});e.exports=q;},null);
__d("XUITextInput.react",["AbstractTextInput.react","React","XUIError.react","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k){b.__markCompiled&&b.__markCompiled();var l=h.createClass({displayName:"XUITextInput",propTypes:Object.assign({},g.propTypes,i.propTypes),render:function(){var m=(("_55r1")+(this.props.height=='tall'?' '+"_55r2":'')),n=(h.createElement(g,h.__spread({},this.props,{ref:"textInput",className:k(this.props.className,m)})));return (h.createElement(i,h.__spread({},this.props),n));},focusInput:function(){this.refs.textInput.focusInput();}});e.exports=l;},null);
__d("Grid.react",["React","ReactChildren","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=g,l=k.PropTypes,m=g.createClass({displayName:"Grid",propTypes:{cols:l.number.isRequired,fixed:l.bool,alignv:l.oneOf(['top','middle','bottom']),alignh:l.oneOf(['left','center','right']),spacing:l.string},render:function(){var o=this.props,p=o.alignh,q=o.alignv,r=o.children,s=o.cols,t=o.fixed,u=o.spacing,v=h.count(r),w=[],x=[],y=0;h.forEach(r,function(z,aa){if(z===null||z===undefined)return;var ba=z.type===n;y+=ba?Math.max(z.props.colSpan||0,1):1;var ca=((y===s?"_51mw":''));if(!ba){z=g.createElement(n,{alignh:p,alignv:q,className:j(u,ca),key:z.key||aa},z);}else z=g.cloneElement(z,{key:z.key||aa,alignh:z.props.alignh||p,alignv:z.props.alignv||q,className:j(z.props.className,u,ca)});x.push(z);if(y%s===0||aa+1===v){if(t&&y<s){for(var da=y;da<s;da++)x.push(g.createElement(n,{key:aa+da}));y=s;}w.push(g.createElement("tr",{className:"_51mx",key:aa},x));x=[];y=0;}});return (g.createElement("table",g.__spread({},this.props,{className:j(this.props.className,(("uiGrid")+(' '+"_51mz")+(t?' '+"_5f0n":''))),cellSpacing:"0",cellPadding:"0"}),g.createElement("tbody",null,w)));}}),n=g.createClass({displayName:"GridItem",propTypes:{alignv:l.oneOf(['top','middle','bottom']),alignh:l.oneOf(['left','center','right'])},render:function(){var o=j(this.props.className,(("_51m-")+(this.props.alignv==='top'?' '+"vTop":'')+(this.props.alignv==='middle'?' '+"vMid":'')+(this.props.alignv==='bottom'?' '+"vBot":'')+(this.props.alignh==='left'?' '+"hLeft":'')+(this.props.alignh==='center'?' '+"hCent":'')+(this.props.alignh==='right'?' '+"hRght":'')));return (g.createElement("td",g.__spread({},this.props,{className:o})));}});m.GridItem=n;e.exports=m;},null);
__d("Emscripten",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={isSupported:function(){return (typeof Int32Array!=='undefined'&&typeof Float64Array!=='undefined'&&!!new Int32Array(1).subarray&&!!new Int32Array(1).set);}};},null);
__d("XHRHttpError",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g='HTTP_CLIENT_ERROR',h='HTTP_PROXY_ERROR',i='HTTP_SERVER_ERROR',j='HTTP_TRANSPORT_ERROR',k='HTTP_UNKNOWN_ERROR';function l(m,n){if(n===0){var o=m.getProtocol();if(o==='file'||o==='ftp')return null;return j;}else if(n>=100&&n<200){return h;}else if(n>=200&&n<300){return null;}else if(n>=400&&n<500){return g;}else if(n>=500&&n<600){return i;}else if(n>=12001&&n<12156){return j;}else return k;}e.exports={getErrorCode:l,HTTP_CLIENT_ERROR:g,HTTP_PROXY_ERROR:h,HTTP_SERVER_ERROR:i,HTTP_TRANSPORT_ERROR:j,HTTP_UNKNOWN_ERROR:k};},null);
__d("xhrSimpleDataSerializer",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){var i=[],j;for(j in h)i.push(encodeURIComponent(j)+'='+encodeURIComponent(h[j]));return i.join('&');}e.exports=g;},null);
__d("XHRRequest",["ErrorUtils","TimeSlice","URI","XHRHttpError","getSameOriginTransport","invariant","xhrSimpleDataSerializer"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={errorCode:null,errorMsg:null,errorType:null},o={loadedBytes:null,totalBytes:null};function p(q){"use strict";this.setURI(q);this.setMethod('POST');this.setTransportBuilder(k);this.setDataSerializer(m);this.$XHRRequest0=this.$XHRRequest0.bind(this);}p.prototype.setURI=function(q){"use strict";this.$XHRRequest1=new i(q);return this;};p.prototype.getURI=function(){"use strict";return this.$XHRRequest1;};p.prototype.setMethod=function(q){"use strict";this.$XHRRequest2=q;return this;};p.prototype.getMethod=function(){"use strict";return this.$XHRRequest2;};p.prototype.setData=function(q){"use strict";this.$XHRRequest3=q;return this;};p.prototype.getData=function(){"use strict";return this.$XHRRequest3;};p.prototype.setRawData=function(q){"use strict";this.$XHRRequest4=q;return this;};p.prototype.setRequestHeader=function(q,r){"use strict";if(!this.$XHRRequest5)this.$XHRRequest5={};this.$XHRRequest5[q]=r;return this;};p.prototype.setTimeout=function(q){"use strict";this.$XHRRequest6=q;return this;};p.prototype.setResponseHandler=function(q){"use strict";this.$XHRRequest7=q;return this;};p.prototype.setErrorHandler=function(q){"use strict";this.$XHRRequest8=q;return this;};p.prototype.setAbortHandler=function(q){"use strict";this.$XHRRequest9=q;return this;};p.prototype.setTimeoutHandler=function(q){"use strict";this.$XHRRequesta=q;return this;};p.prototype.setUploadProgressHandler=function(q){"use strict";this.$XHRRequestb=q;return this;};p.prototype.setTransportBuilder=function(q){"use strict";this.$XHRRequestc=q;return this;};p.prototype.setDataSerializer=function(q){"use strict";this.$XHRRequestd=q;return this;};p.prototype.send=function(){"use strict";var q=this.$XHRRequest6,r=this.$XHRRequestc(),s=this.getURI();this.$XHRRequeste=r;var t;l(this.$XHRRequest2==='POST'||!this.$XHRRequest4);if(this.$XHRRequest2==='GET'||this.$XHRRequest4){s.addQueryData(this.$XHRRequest3);t=this.$XHRRequest4;}else t=this.$XHRRequestd(this.$XHRRequest3);r.onreadystatechange=h.guard(this.$XHRRequest0,'XHRRequest onreadystatechange');if(r.upload&&this.$XHRRequestb)r.upload.onprogress=this.$XHRRequestf.bind(this);if(q)this.$XHRRequestg=setTimeout(this.$XHRRequesth.bind(this),q);r.open(this.$XHRRequest2,s.toString(),true);if(this.$XHRRequest5)for(var u in this.$XHRRequest5)r.setRequestHeader(u,this.$XHRRequest5[u]);r.send(t);};p.prototype.abort=function(){"use strict";this.$XHRRequesti();if(this.$XHRRequest9)g.applyWithGuard(this.$XHRRequest9,null,null,null,'XHRRequest:_abortHandler');};p.prototype.$XHRRequesti=function(){"use strict";var q=this.$XHRRequeste;if(q){q.onreadystatechange=null;q.abort();}this.$XHRRequestj();};p.prototype.$XHRRequesth=function(){"use strict";this.$XHRRequesti();if(this.$XHRRequesta)g.applyWithGuard(this.$XHRRequesta,null,null,null,'XHRRequest:_abortHandler');};p.prototype.$XHRRequest0=function(){"use strict";var q=this.$XHRRequeste,r=q,s=r.readyState;if(s>=2){var t=s===4,u=this.getURI(),v=j.getErrorCode(u,q.status),w=this.$XHRRequest7;if(v!==null){if(t){n.errorCode=v;n.errorMsg=q.responseText;n.errorType='HTTP';if(this.$XHRRequest8)g.applyWithGuard(this.$XHRRequest8,null,[n],null,'XHRRequest:_errorHandler');}}else if(w){var x=null;if(w.includeHeaders)x=q.getAllResponseHeaders();if(t||(w.parseStreaming&&s===3))g.applyWithGuard(w,null,[q.responseText,x,t],null,'XHRRequest:handler');}if(t)this.$XHRRequestj();}};p.prototype.$XHRRequestf=function(q){"use strict";o.loadedBytes=q.loaded;o.totalBytes=q.total;if(this.$XHRRequestb)g.applyWithGuard(this.$XHRRequestb,null,[o],null,'XHRRequest:_uploadProgressHandler');};p.prototype.$XHRRequestj=function(){"use strict";clearTimeout(this.$XHRRequestg);delete this.$XHRRequeste;};e.exports=p;},null);
__d("getCrossOriginTransport",["ex","invariant"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();function i(){try{var k=new XMLHttpRequest();if(!('withCredentials' in k)&&typeof XDomainRequest!=='undefined')k=new XDomainRequest();return k;}catch(j){throw new Error(g('getCrossOriginTransport: %s',j.message));}}i.withCredentials=function(){var j=i();h('withCredentials' in j);var k=j.open;j.open=function(){k.apply(this,arguments);this.withCredentials=true;};return j;};e.exports=i;},null);
__d("WebWorker",["BanzaiLogger","WebWorkerConfig","BlobFactory","EventListener","URI","areSameOrigin","destroyOnUnload","SubscriptionsHandler","XHRRequest","arrayContains","emptyFunction","getCrossOriginTransport","performanceNow","invariant","memoize","filterObject"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){b.__markCompiled&&b.__markCompiled();var w=a.URL||a.webkitURL;function x(da){"use strict";this.$WebWorker0=false;this.$WebWorker1=null;this.$WebWorker2=da;this.$WebWorker3=null;this.$WebWorker4=q;this.$WebWorker5=q;this.$WebWorker6=[];this.$WebWorker7=false;this.$WebWorker8=new n();m(function(){if(!this.$WebWorker7)this.terminate();}.bind(this));this.$WebWorker9('constructed');}x.prototype.setMessageHandler=function(da){"use strict";this.$WebWorker4=da||q;return this;};x.prototype.setErrorHandler=function(da){"use strict";this.$WebWorker5=da||q;return this;};x.prototype.postMessage=function(da,ea){"use strict";t(!this.isCurrentState('constructed'));t(!this.isCurrentState('terminated'));if(this.isCurrentState('preparing')){this.$WebWorker6.push(this.postMessage.bind(this,da,ea));return this;}var fa={type:'message',message:da};if(ea){this.$WebWorker3.postMessage(fa,ea);}else this.$WebWorker3.postMessage(fa);return this;};x.prototype.terminate=function(){"use strict";if(this.isCurrentState('executing'))this.$WebWorker3.terminate();if(!this.isCurrentState('terminated')){this.$WebWorker9('terminated');this.$WebWorker3=null;this.$WebWorkera();this.$WebWorker6=[];}return this;};x.prototype.execute=function(){"use strict";t(!this.isCurrentState('terminated'));if(['preparing','executing'].some(this.isCurrentState,this))return this;this.$WebWorker9('preparing');x.prepareResource(this.$WebWorker2,this.$WebWorkerb.bind(this));return this;};x.prototype.setAllowCrossPageTransition=function(da){"use strict";this.$WebWorker7=da;return this;};x.prototype.isCurrentState=function(da){"use strict";t(p(x.states,da));return da===this.$WebWorker1;};x.prototype.$WebWorkerb=function(){"use strict";t(!this.isCurrentState('executing'));if(this.isCurrentState('terminated'))return;t(this.$WebWorker2.sameOriginURL||this.$WebWorker2.source);if(this.$WebWorker2.sameOriginURL){this.$WebWorker3=new a.Worker(this.$WebWorker2.sameOriginURL);}else{this.$WebWorker3=new a.Worker(x.evalWorkerURL);this.$WebWorker3.postMessage(this.$WebWorker2.source);}this.$WebWorkerc('ping',Date.now());if(this.$WebWorker2.dynamicModules)this.$WebWorkerc('defineModules',this.$WebWorker2.dynamicModules);this.$WebWorkerd();this.$WebWorker9('executing');this.$WebWorker6.forEach(function(da){return da();});this.$WebWorker6=null;};x.prototype.$WebWorkera=function(){"use strict";this.$WebWorker8.release();};x.prototype.$WebWorkerc=function(da){"use strict";for(var ea=[],fa=1,ga=arguments.length;fa<ga;fa++)ea.push(arguments[fa]);this.$WebWorker3.postMessage({type:da,args:ea});};x.prototype.$WebWorkere=function(event,da){"use strict";x.$WebWorkere(event,this.$WebWorker2.name,Object.assign({},da,{cross_page_transition:!!this.$WebWorker7,state:this.$WebWorker1}));};x.$WebWorkerf=function(){"use strict";return Object.keys(v({object_url:x.$WebWorkerg(),eval_url:ba(),data_url:x.$WebWorkerh(),worker:x.isSupported(),transferables:x.areTransferablesSupported()},function(da){return !!da;}));};x.prototype.$WebWorkerd=function(){"use strict";this.$WebWorker8.addSubscriptions(j.listen(this.$WebWorker3,'message',this.$WebWorkeri.bind(this)),j.listen(this.$WebWorker3,'error',this.$WebWorkerj.bind(this)));};x.prototype.$WebWorkerj=function(da){"use strict";var ea=this.$WebWorker5(da);if(!ea&&!da.defaultPrevented)this.$WebWorkere('exception',{message:da.message});};x.prototype.$WebWorkeri=function(event){"use strict";var da=event.data;switch(da.type){case 'message':this.$WebWorker4(da.message);break;case 'pong':this.$WebWorker0=true;this.$WebWorkere('executed',{dt:Math.floor(da.args[1]-da.args[0]),bytes:this.$WebWorker2.source.length});break;case 'terminate':this.terminate();break;case 'haste-error':this.terminate();this.$WebWorkere('haste_error',{message:da.message});break;case 'console':var ea=da.args.shift();t(p(['log','error','info','debug','warn'],ea));a.console[ea].apply(a.console,da.args);break;}};x.prototype.$WebWorker9=function(da){"use strict";t(p(x.states,da));this.$WebWorkere('transition',{next_state:da});this.$WebWorker1=da;};x.prepareResource=function(da,ea){"use strict";ea=ea||q;t(da.sameOriginURL||da.url||da.source);t(!!x.isSupported());if(da.sameOriginURL){ea();}else if(da.url&&l(new k(da.url),new k(a.location.href))){da.sameOriginURL=da.url;ea();}else if(da.source){if(x.$WebWorkerk())da.sameOriginURL=x.$WebWorkerl(da.source);ea();}else if(!da.loading){var fa=s();da.loading=[ea];x.$WebWorkerm(da.url,function(ga){if(ga){da.source=ga;if(x.$WebWorkerk())da.sameOriginURL=x.$WebWorkerl(ga);}x.$WebWorkere('prepared',da.name,{dt:Math.floor(s()-fa),bytes:ga.length});da.loading.forEach(function(ha){return ha();});da.loading=false;});}else da.loading.push(ea);return da;};x.releaseResource=function(da){"use strict";if(da.sameOriginURL.indexOf('blob:')===0){if(w.revokeObjectURL)w.revokeObjectURL(da.sameOriginURL);da.sameOriginURL=null;}return da;};x.isSupported=function(){"use strict";return aa&&(x.$WebWorkerk()||ba());};x.areTransferablesSupported=function(){"use strict";return x.isSupported()&&ca();};x.$WebWorkerm=function(da,ea){"use strict";new o(da).setTransportBuilder(r).setMethod('GET').setResponseHandler(function(fa){ea(fa);}).setErrorHandler(ea.bind(null,null)).send();};x.$WebWorkerl=function(da){"use strict";t(x.$WebWorkerk());if(x.$WebWorkerg()){var ea=i.getBlob([da],{type:'application/javascript'});return w.createObjectURL(ea);}if(x.$WebWorkerh())return 'data:application/javascript,'+encodeURIComponent(da);};x.$WebWorkerg=function(){"use strict";return i.isSupported()&&y();};x.$WebWorkerh=function(){"use strict";return z();};x.$WebWorkerk=function(){"use strict";return x.$WebWorkerg()||x.$WebWorkerh();};x.$WebWorkere=function(event,da,ea){"use strict";if(!h.logging.enabled)return;g.log(h.logging.config,Object.assign({},ea,{features_array:x.$WebWorkerf(),event:event,resource:da}));};var y=u(function(){var da,ea;if(!w||!w.createObjectURL)return false;try{da=w.createObjectURL(i.getBlob([''],{type:'application/javascript'}));var ga=new a.Worker(da);ga.terminate();ea=true;}catch(fa){ea=false;}finally{if(w.revokeObjectURL)w.revokeObjectURL(da);}return ea;}),z=u(function(){var da;try{var fa=new a.Worker('data:application/javascript,');fa.terminate();da=true;}catch(ea){da=false;}return da;}),aa=!!a.Worker,ba=u(function(){var da;try{var fa=new a.Worker(x.evalWorkerURL);fa.terminate();da=true;}catch(ea){da=false;}return da;}),ca=u(function(){var da;try{var fa=new a.Worker(x.evalWorkerURL),ga=new ArrayBuffer(0);fa.postMessage({buffer:ga},[ga]);fa.terminate();da=true;}catch(ea){da=false;}return da;});x.states=['constructed','preparing','executing','terminated'];x.evalWorkerURL=h.evalWorkerURL;e.exports=x;},null);
__d("PooledWebWorker",["WebWorker"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(k,l,m){"use strict";g.call(this,m);this.$PooledWebWorker0=l;this.$PooledWebWorker1=k;}j.prototype.getIndex=function(){"use strict";return this.$PooledWebWorker0;};j.prototype.getPool=function(){"use strict";return this.$PooledWebWorker1;};e.exports=j;},null);
__d("WebWorkerPool",["PooledWebWorker","emptyFunction"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();i.isSupported=function(){"use strict";return g.isSupported();};function i(j,k){"use strict";this.$WebWorkerPool0=[];for(var l=0;l<k;l++)this.$WebWorkerPool0.push(new g(this,l,j).setErrorHandler(this.$WebWorkerPool1).setMessageHandler(this.$WebWorkerPool2).execute());this.$WebWorkerPool3=0;}i.prototype.setMessageHandler=function(j){"use strict";this.$WebWorkerPool4=j||h;return this;};i.prototype.setAllowCrossPageTransition=function(j){"use strict";this.$WebWorkerPool0.forEach(function(k){return k.setAllowCrossPageTransition(j);});return this;};i.prototype.setErrorHandler=function(j){"use strict";this.$WebWorkerPool5=j||h;return this;};i.prototype.postMessage=function(){"use strict";for(var j=[],k=0,l=arguments.length;k<l;k++)j.push(arguments[k]);var m=this.getWorker();m.postMessage.apply(m,j);return m;};i.prototype.$WebWorkerPool2=function(){"use strict";for(var j=[],k=0,l=arguments.length;k<l;k++)j.push(arguments[k]);j.unshift(this);this.getPool().$WebWorkerPool4.apply(this.getPool(),j);};i.prototype.$WebWorkerPool1=function(){"use strict";for(var j=[],k=0,l=arguments.length;k<l;k++)j.push(arguments[k]);j.unshift(this);return this.getPool().$WebWorkerPool5.apply(this.getPool(),j);};i.prototype.getWorker=function(){"use strict";var j=this.$WebWorkerPool0[this.$WebWorkerPool3];this.$WebWorkerPool3=(this.$WebWorkerPool3+1)%this.$WebWorkerPool0.length;return j;};e.exports=i;},null);
__d("JpegResizer",["Emscripten","JpegResizerConfig","JpegResizeWorkerResource","WebWorker","WebWorkerPool","PUWErrorCodes"],function(a,b,c,d,e,f,g,h,i,j,k,l){b.__markCompiled&&b.__markCompiled();var m=null;n.isSupported=function(){"use strict";return k.isSupported()&&g.isSupported()&&!h.isGKBlacklisted;};n.getSingleton=function(o){"use strict";if(!m)m=new n(o||n.DEFAULT_POOL_SIZE).setAllowCrossPageTransition(true);return m;};n.prepareResource=function(o){"use strict";j.prepareResource(i,o);};function n(o){"use strict";o=o||n.DEFAULT_POOL_SIZE;j.prepareResource(i);this.$JpegResizer0=(new k(i,o)).setErrorHandler(this.$JpegResizer1.bind(this)).setMessageHandler(this.$JpegResizer2.bind(this));this.$JpegResizer3={};this.$JpegResizer4=n.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer5=n.DEFAULT_RESIZE_WIDTH;}n.prototype.setHighQuality=function(o){"use strict";if(o){this.$JpegResizer4=n.DEFAULT_RESIZE_HEIGHT;this.$JpegResizer5=n.DEFAULT_RESIZE_WIDTH;}else{this.$JpegResizer4=n.LOW_QUALITY_RESIZE_HEIGHT;this.$JpegResizer5=n.LOW_QUALITY_RESIZE_WIDTH;}return this;};n.prototype.setAllowCrossPageTransition=function(o){"use strict";this.$JpegResizer0.setAllowCrossPageTransition(o);return this;};n.prototype.resizeBlob=function(o,p,q){"use strict";var r=this.$JpegResizer0.getWorker();if(r.isCurrentState('terminated')){var s=new Error('Worker terminated');s.code=l.WORKER_TERMINATED;p(s);return this;}var t=r.postMessage({blob:o,height:this.$JpegResizer4,width:this.$JpegResizer5}).getIndex();this.$JpegResizer6(t).unshift({done:p,progress:q});return this;};n.prototype.$JpegResizer6=function(o){"use strict";if(!this.$JpegResizer3.hasOwnProperty(o))this.$JpegResizer3[o]=[];return this.$JpegResizer3[o];};n.prototype.$JpegResizer1=function(o,p){"use strict";o.terminate();var q=this.$JpegResizer6(o.getIndex());this.$JpegResizer7(p);q.forEach(function(r){return r.done(p);});q.length=0;};n.prototype.$JpegResizer2=function(o,p){"use strict";if(p.error)this.$JpegResizer7(p.error);if(p.done){this.$JpegResizer6(o.getIndex()).pop().done(p.error,p.blob,p.skipped);}else{var q=this.$JpegResizer6(o.getIndex()),r=q[q.length-1].progress;if(r)r({written:p.written,total:p.total});}};n.prototype.$JpegResizer7=function(o){"use strict";var p=o.message;if(p.indexOf('Not a JPEG file')!==-1){o.code=l.BAD_JPEG;}else if(p.indexOf('abort()')!==-1){o.code=l.WORKER_ABORT;}else o.code=l.UNKNOWN_RESIZE_ERROR;};n.DEFAULT_POOL_SIZE=3;n.DEFAULT_RESIZE_HEIGHT=2048;n.DEFAULT_RESIZE_WIDTH=2048;n.LOW_QUALITY_RESIZE_HEIGHT=960;n.LOW_QUALITY_RESIZE_WIDTH=960;e.exports=n;},null);
__d("glyph",["ix"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b('ix');},null);