!function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);throw new Error("Cannot find module '"+s+"'")}var u=n[s]={exports:{}};e[s][0].call(u.exports,function(t){var n=e[s][1][t];return i(n?n:t)},u,u.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e){"use strict";function n(t){return"string"==typeof t||t&&"object"==typeof t&&"[object String]"==d.call(t)||!1}function r(){var t=new f;return t.cid=_,_+=1,g[t.cid]=t,t}function i(t,e){for(var n,r=m.length-1;r>=0;r--)m[r].message_callback(t,e);for(r=y.length-1;r>=0;r--)n=y[r],n&&n.shouldRespond&&n.shouldRespond(t,e)&&n.cb(t,e)}function o(t){var e=this;if(t.cid_response&&t.cid_response in g){var n=g[t.cid_response];n.resolve.call(null,e,t.response),delete g[t.cid_response]}}function s(t){if(t||(t={}),!(u&&u.stringify&&u.parse))throw"Must have JSON parsing and stringify";if(t.iframe&&(t.window=t.iframe.contentWindow,!t.origin)){var e=t.iframe.src,n=e.match(/^(http(?:s)?:\/\/[\w_\-\.]+(?::\d+)?)\/?/);n&&(t.origin=n[1])}this.namespace=t.namespace?t.namespace+":":"",this.origin=t.origin||"*",this.responders={_method_callback_responder:o,_syn:l(this._syn,this)},this._on_connected=new p,this._unanswered_calls={},this.on_connection(l(this.enable_sending_post_message,this)),m.push(this),t.window&&this.setWindow(t.window)}function a(t,e,n){n||(n=this.origin),t.postMessage(e,n)}var c=t("prima/utils/clean-window-object"),u=c("JSON",function(t){return t&&t.stringify}),h=[].slice,l=function(t,e){return function(){return t.apply(e,arguments)}},d=Object.prototype.toString,p=t("./utils/one_time_event"),f=t("./utils/deferred"),_=1,g={},m=[],y=[];!function(){var t=window.addEventListener?"addEventListener":"attachEvent",e=window[t],n="attachEvent"===t?"onmessage":"message";e(n,function(t){var e;if("string"==typeof t.data){try{t.data&&"{"===t.data[0]&&(e=u.parse(t.data))}catch(n){}e&&e.method&&i(t,e)}},!1)}(),s.prototype.setWindow=function(t){if(t){this.window=t;var e=this.call("_syn");e.then(l(function(t,e){"ack"===e&&this._is_connected()},this))}},s.on=function(t,e){var n;n="*"===t?function(){return!0}:"*"===t[t.length-1]?function(e,n){return 0===n.method.indexOf(t.substring(0,t.length-2))}:function(e,n){return n.method===t},y.push({shouldRespond:n,cb:e})},s.off=function(t){for(var e,n=y.length-1;n>=0;n--)if(y[n].cb===t){e=n;break}return e&&e>-1?(y.splice(e,1),!0):!1},s.prototype.match_origin=function(t){return"*"===this.origin?!0:this.origin===t},s.prototype.message_callback=function(t,e){var r;if((!this.window||t.source===this.window)&&this.match_origin(t.origin)){if(e.method&&e.method.slice(0,this.namespace.length)===this.namespace&&(r=e.method.slice(this.namespace.length,e.method.length)),e.args&&n(e.args))try{e.args=u.parse(e.args)}catch(i){return}this.call_responder(r,t,e)}},s.prototype.call_responder=function(t,e,n){var r,i;if(t){if(n.args||(n.args=[]),i=this.responders[t],!i)return this._unanswered_calls[t]||(this._unanswered_calls[t]=[]),void this._unanswered_calls[t].push(arguments);r=i.apply(e,n.args),n.cid&&"_method_callback_responder"!==t&&this.send_to_window(e.source,"_method_callback_responder",{cid_response:n.cid,response:r})}},s.prototype._syn=function(){return this._is_connected(),"ack"},s.prototype._is_connected=function(){this.connected||(this.connected=!0,this._on_connected.trigger(this))},s.prototype.on_connection=function(){return this._on_connected.push.apply(this._on_connected,arguments),this},s.prototype.method=function v(t){var e=this,v=function(){var n=1<=arguments.length?h.call(arguments,0):[];return n.unshift(t),e.send.apply(e,n)};return v},s.prototype.call=function(){var t=1<=arguments.length?h.call(arguments,0):[];return this.window?(t.unshift(this.window),this.call_on_window.apply(this,t)):void console.warn("no window specified on channel")},s.prototype.call_on_window=function(t,e){var n=3<=arguments.length?h.call(arguments,2):[],i=r();try{var o=u.stringify({method:this.namespace+e,args:n,cid:i.cid});"_syn"===e||"_method_callback_responder"===e?a.call(this,t,o):this.send_post_message(t,o)}catch(s){i.reject(s)}return i.promise()},s.prototype.send=function(){var t=1<=arguments.length?h.call(arguments,0):[];return this.window?(t.unshift(this.window),this.send_to_window.apply(this,t)):void console.warn("no window specified on channel")},s.prototype.send_to_window=function(t,e){var n=3<=arguments.length?h.call(arguments,2):[],r=u.stringify({method:this.namespace+e,args:n});"_syn"===e||"_method_callback_responder"===e?a.call(this,t,r):this.send_post_message(t,r)},s.prototype.send_post_message=function(){this._delayed_sent_messages||(this._delayed_sent_messages=[]),this._delayed_sent_messages.push(arguments)},s.prototype.enable_sending_post_message=function(){if(this.send_post_message=a,this._delayed_sent_messages){for(var t=0;t<this._delayed_sent_messages.length;t+=1)a.apply(this,this._delayed_sent_messages[t]);delete this._delayed_sent_messages}},s.prototype.listening_to=function(t){return t in this.responders},s.prototype.listen_to=function(t,e,r){if(n(t)){if(t in this.responders)return void console.warn("already listening to this method, turn it off first");if(r&&(e=l(e,r)),this.responders[t]=e,this._unanswered_calls[t]){var i,o=this._unanswered_calls[t];delete this._unanswered_calls[t];for(var s=0;s<o.length;s+=1)i=o[s],this.call_responder.apply(this,i)}}else{var a=t;for(t in a)a.hasOwnProperty(t)&&this.listen_to(t,a[t],r)}},s.prototype.stop_listen_to=function(t){return"_method_callback_responder"===t?void console.warn("cannot disable the method callback responder"):void delete this.responders[t]},e.exports=s},{"./utils/deferred":2,"./utils/one_time_event":3,"prima/utils/clean-window-object":5}],2:[function(t,e){"use strict";function n(){this._on_resolved=new o,this._on_rejected=new o,this.then=i(this.then,this),this.fail=i(this.fail,this),this.resolve=i(this.resolve,this),this.reject=i(this.reject,this)}var r=[].slice,i=function(t,e){return function(){return t.apply(e,arguments)}},o=t("./one_time_event");n.prototype.then=function(){return this._on_resolved.push.apply(this._on_resolved,arguments),this},n.prototype.success=n.prototype.then,n.prototype.fail=function(){return this._on_resolved.push.apply(this._on_rejected,arguments),this},n.prototype.resolve=function(){return this.resolved||this.rejected?void 0:(this._on_resolved.trigger.apply(this._on_resolved,arguments),this.resolved=!0,this)},n.prototype.reject=function(){return this.resolved||this.rejected?void 0:(this._on_rejected.trigger.apply(this._on_rejected,arguments),this.rejected=!0,this)},n.prototype.reject_timeout=function(){var t=1<=arguments.length?r.call(arguments,0):[],e=t.shift();return setTimeout(i(function(){this.reject.apply(this,t)},this),e),this},n.prototype.promise=function(){function t(){var t=this;this.fail=function(){return e.fail.apply(e,arguments),t},this.then=function(){return e.then.apply(e,arguments),t},this.success=this.then,this.reject_timeout=function(){return e.reject_timeout.apply(e,arguments),t},this.cid=e.cid}var e=this;return new t},e.exports=n},{"./one_time_event":3}],3:[function(t,e){"use strict";function n(){this.length=0}var r=[].slice,i=[].push;n.prototype={slice:r,indexOf:Array.prototype.indexOf},n.prototype.push=function(){if(this.triggered_with)for(var t=1<=arguments.length?r.call(arguments,0):[],e=0;e<t.length;e+=1)t[e].apply(null,this.triggered_with);return i.apply(this,arguments)},n.prototype.trigger=function(){var t=1<=arguments.length?r.call(arguments,0):[],e=this.length;this.triggered_with=t;for(var n=0;e>n;n+=1)this[n].apply(null,this.triggered_with);return this},e.exports=n},{}],4:[function(t,e){"use strict";function n(t){function e(){o.removeEventListener("DOMContentLoaded",e),t()}o.addEventListener("DOMContentLoaded",e)}function r(t){i||(i=/^loaded|^i|^c/.test(o.readyState)),i?setTimeout(t):n(t)}var i,o=document;e.exports=r},{}],5:[function(t,e){"use strict";function n(t,e){if(t in r)return r[t];var n=window[t];if(!e||!e(n)){var i=document.createElement("iframe");document.body.appendChild(i),n=i.contentWindow[t],document.body.removeChild(i)}return r[t]=n,n}var r={};e.exports=n},{}],6:[function(t){"use strict";var e=t("components/post-message-channel"),n=t("prima/lib/domready");!function(){function t(){for(var t=document.querySelectorAll(".tumblr-share-button"),e=0,n=t.length;n>e;e++)r(t[e],e+1)}function r(t,n){function r(){f[n]=new e({namespace:"tumblr-share-button",iframe:_[n],origin:"*"}),f[n].listen_to("sizeChange",function(t){_[n].setAttribute("width",t.width+2+"px"),_[n].setAttribute("height",t.height+"px"),_[n].style.visibility="visible"}),c(m.postcontent)||i(m.canonicalUrl,n)}var s,a="embed.tumblr.com",h="/widgets/share/button",p=t.getAttribute("href"),g=d(p),m=o(t,g.query);u(g.host)||(g.host=a),s=document.createElement("iframe"),s.setAttribute("frameborder",0),s.setAttribute("height","top"===m.notes?"40px":"20px"),s.setAttribute("scrolling","no"),s.setAttribute("seamless","seamless"),s.style.visibility="hidden",s.src=l("https://"+g.host+h,m),_[n]=s,_[n].attachEvent?_[n].attachEvent("onload",function(){r()}):_[n].onload=function(){r()},t.parentNode.replaceChild(_[n],t)}function i(t,e){var n={},r=document.getElementsByTagName("title")[0],i=r?r.text:"",o=a("description")||s("description"),c=a("keywords"),u=s("image");if(n.posttype="link",n.title=i||t,n.caption=o,n.content=t,n.tags=c,u){var h=new Image;h.onload=function(){h.width>=500&&h.width/h.height<3&&(n.posttype="photo",n.content=h.src,n.caption=o,n["photo-clickthru"]=t),f[e].send("postContent",n)},h.src=u}else f[e].send("postContent",n)}function o(t,e){for(var n=["posttype","tags","show-via","title","content","caption","photoset-layout","photo-clickthru","video-thumbnail"],r={},i=0;i<n.length;i++){var o=n[i];r[o]=p(o,e)||t.getAttribute("data-"+o)}var a={};if(a.color=t.getAttribute("data-color")||"",a.notes=t.getAttribute("data-notes")||"",a.locale=t.getAttribute("data-locale")||"",a.canonicalUrl=t.getAttribute("data-href"),a.postcontent=r,!a.canonicalUrl){var c=document.querySelector('[rel="canonical"]'),u=s("url");a.canonicalUrl=c&&c.href?c.href:u?u:document.URL}return a}function s(t){var e=document.querySelector('[property="og:'+t+'"]');return e&&e.content?e.content:null}function a(t){var e=document.querySelector('[name="'+t+'"]');return e&&e.content?e.content:null}function c(t){for(var e in t)if(null!==t[e])return!0;return!1}function u(t){for(var e=[/^[\w\d-.]+\.tumblr\.(net)(\/.*)?$/i],n=0,r=e.length;r>n;n++)if(e[n].test(t))return!0;return!1}function h(t,e){var n=[];for(var r in t)if(t.hasOwnProperty(r)){var i=e?e+"["+r+"]":r,o=t[r];if(!o)continue;n.push("object"==typeof o?h(o,i):encodeURIComponent(i)+"="+encodeURIComponent(o))}return n.join("&")}function l(t,e){return t+"?"+h(e)}function d(t){var e=document.createElement("a");return e.setAttribute("href",t),{url:t,protocol:e.protocol,host:e.hostname,port:e.port,query:e.search,hash:e.hash,path:e.pathname}}function p(t,e){return e||(e=location.search),decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(e)||[,""])[1].replace(/\+/g,"%20"))||null}var f=[],_=[];!function(){n(function(){t()})}();var g=document.querySelector("[data-tumblr-share-init]");if(g){var m=g.getAttribute("data-tumblr-share-init");m&&(window[m]=t)}}()},{"components/post-message-channel":1,"prima/lib/domready":4}]},{},[6]);