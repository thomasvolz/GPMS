/*
 * For font license information, see the CSS file loaded by this JavaScript.
 */
if(!window.Typekit)window.Typekit={};window.Typekit.config={"a":"610424","c":[".tk-proxima-nova","\"proxima-nova\",sans-serif"],"f":"//use.typekit.net/c/3630c0/1w;proxima-nova,2,gbm:V:i4,gbg:V:n1,gbj:V:n3,gbl:V:n4,gbq:V:n6,gbs:V:n7/{format}{/extras*}?3bb2a6e53c9684ffdc9a99ff1a5b2a6236e3628d53226ac77c5f92111ae5f6920cb48cddf84302e7111f93a832ec07dbd04c86ed1235e670c45f37f6392e92d088c67b93ef02ef5f75f15656339824d61ac572b957a0e150535a8f2c21b9430f372abfc8923719c13863433c4dcc8c50d375c29b0714d96a12f5cda32b7379fa743bb8bc18c270d25fb35b2a4af29e25574a664e8a90b7b5c9e7bb1351875a36bbb992b2f23099c7589629692e1cda7e46e809464b8af25dd150ddf34198de032c10cdca80f7d6c606a717dee00419721ae9ec49aaafdcfff2b2f6f6dd78bcc2757e6441e11ff8fe5e35af3e1259fce40c35df3193b4f9be41fad50f5793cbef7570970a0dc79300404b661057b1e7df3fff33a127b79ac14c6bca453d9d3aa7b6e85c288e0bd44ac214e7dbe868b215d6412a3f4cb42eedbfe0f7c6c49d88271d059f0b2fa74c28f2ccd9893dcefebe7c28dde9f1a59b014f3bf54b5b6252efdb8ba169df2bc25efc5dfc45e65feb1f11b7bfb42ce97a74d09196d68458e8b19ade723f2f60","fi":[139,171,173,175,176,5474],"fn":["proxima-nova",["i4","n1","n3","n4","n6","n7"]],"ht":"tk","js":"1.12.11","k":"//use.typekit.net/{id}.js","kt":"njm7orv","p":"//p.typekit.net/p.gif?s=1&k=njm7orv&ht=tk&h={host}&f=139.171.173.175.176.5474&a=610424&_={_}","ps":1,"w":"njm7orv"};
/*{"k":"1.12.11","last_published":"2015-07-21 01:00:52 UTC","auto_updating":true}*/
;(function(window,document,undefined){
function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function h(a,b,c){h=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return h.apply(null,arguments)}var ca=Date.now||function(){return+new Date};
function da(a,b){this.Fa=a;this.da=b||a;this.B=this.da.document}da.prototype.createElement=function(a,b,c){a=this.B.createElement(a);if(b)for(var d in b)b.hasOwnProperty(d)&&("style"==d?a.style.cssText=b[d]:a.setAttribute(d,b[d]));c&&a.appendChild(this.B.createTextNode(c));return a};function ea(a,b,c){a=a.B.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function fa(a,b){function c(){a.B.body?b():setTimeout(c,0)}c()}
function l(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function ga(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ha(a){return a.da.location.hostname||a.Fa.location.hostname}function ia(a,b,c,d){function e(a){for(var c=0;c<g.length;c++)if(g[c].href&&-1!==g[c].href.indexOf(b)){a();return}setTimeout(function(){e(a)},0)}var f=a.createElement("link",{rel:"stylesheet",href:b,media:d?"only x":"all"}),g=a.B.styleSheets,k=!1;f.onload=function(){k||(k=!0,c&&c(null))};f.onerror=function(){k||(k=!0,c&&c(Error("Stylesheet failed to load")))};ea(a,"head",f);d&&e(function(){f.media="all"})}
function ja(a,b,c){var d=a.B.getElementsByTagName("head")[0];if(d){var e=a.createElement("script",{src:b}),f=!1;e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(f=!0,c&&c(null),e.onload=e.onreadystatechange=null,"HEAD"==e.parentNode.tagName&&d.removeChild(e))};d.appendChild(e);setTimeout(function(){f||(f=!0,c&&c(Error("Script load timeout")))},5E3)}}function ka(a){this.Da=a||"-"}
ka.prototype.h=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.Da)};function la(a,b){this.e=a;this.t=a.da.document.documentElement;this.$=b;this.p="wf";this.o=new ka("-");this.ya=!1!==b.events;this.H=!1!==b.classes}function ma(a){if(a.H){var b=ga(a.t,a.o.h(a.p,"active")),c=[],d=[a.o.h(a.p,"loading")];b||c.push(a.o.h(a.p,"inactive"));l(a.t,c,d)}m(a,"inactive")}
function m(a,b,c){if(a.ya&&a.$[b])if(c)a.$[b](c.getName(),n(c));else a.$[b]()}function q(a,b){this.Y=a;this.fa=4;this.Z="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.Z=c[1],this.fa=parseInt(c[2],10))}q.prototype.getName=function(){return this.Y};function n(a){return a.Z+a.fa}function s(a,b){this.e=a;this.D=b;this.q=this.e.createElement("span",{"aria-hidden":"true"},this.D)}function t(a){ea(a.e,"body",a.q)}
function u(a){var b;b=[];for(var c=a.Y.split(/,\s*/),d=0;d<c.length;d++){var e=c[d].replace(/['"]/g,"");-1==e.indexOf(" ")?b.push(e):b.push("'"+e+"'")}b=b.join(",");c="normal";"o"===a.Z?c="oblique":"i"===a.Z&&(c="italic");return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b+";"+("font-style:"+c+";font-weight:"+(a.fa+"00")+";")}
s.prototype.remove=function(){var a=this.q;a.parentNode&&a.parentNode.removeChild(a)};
function na(a,b,c,d,e,f,g){this.ga=a;this.Ca=b;this.e=c;this.w=d;this.D=g||"BESbswy";this.G={};this.ea=e||3E3;this.pa=f||null;this.Q=this.P=this.O=this.N=null;this.N=new s(this.e,this.D);this.O=new s(this.e,this.D);this.P=new s(this.e,this.D);this.Q=new s(this.e,this.D);a=new q(this.w.getName()+",serif",n(this.w));a=u(a);this.N.q.style.cssText=a;a=new q(this.w.getName()+",sans-serif",n(this.w));a=u(a);this.O.q.style.cssText=a;a=new q("serif",n(this.w));a=u(a);this.P.q.style.cssText=a;a=new q("sans-serif",
n(this.w));a=u(a);this.Q.q.style.cssText=a;t(this.N);t(this.O);t(this.P);t(this.Q)}var w={Qa:"serif",Pa:"sans-serif"},oa=null;function pa(){if(null===oa){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);oa=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return oa}na.prototype.start=function(){this.G.serif=this.P.q.offsetWidth;this.G["sans-serif"]=this.Q.q.offsetWidth;this.Ia=ca();qa(this)};
function ra(a,b,c){for(var d in w)if(w.hasOwnProperty(d)&&b===a.G[w[d]]&&c===a.G[w[d]])return!0;return!1}function qa(a){var b=a.N.q.offsetWidth,c=a.O.q.offsetWidth,d;(d=b===a.G.serif&&c===a.G["sans-serif"])||(d=pa()&&ra(a,b,c));d?ca()-a.Ia>=a.ea?pa()&&ra(a,b,c)&&(null===a.pa||a.pa.hasOwnProperty(a.w.getName()))?sa(a,a.ga):sa(a,a.Ca):ta(a):sa(a,a.ga)}function ta(a){setTimeout(h(function(){qa(this)},a),50)}
function sa(a,b){setTimeout(h(function(){this.N.remove();this.O.remove();this.P.remove();this.Q.remove();b(this.w)},a),0)}function ua(a,b,c){this.e=a;this.C=b;this.ba=0;this.ta=this.oa=!1;this.ea=c}ua.prototype.za=function(a){var b=this.C;b.H&&l(b.t,[b.o.h(b.p,a.getName(),n(a).toString(),"active")],[b.o.h(b.p,a.getName(),n(a).toString(),"loading"),b.o.h(b.p,a.getName(),n(a).toString(),"inactive")]);m(b,"fontactive",a);this.ta=!0;va(this)};
ua.prototype.Aa=function(a){var b=this.C;if(b.H){var c=ga(b.t,b.o.h(b.p,a.getName(),n(a).toString(),"active")),d=[],e=[b.o.h(b.p,a.getName(),n(a).toString(),"loading")];c||d.push(b.o.h(b.p,a.getName(),n(a).toString(),"inactive"));l(b.t,d,e)}m(b,"fontinactive",a);va(this)};function va(a){0==--a.ba&&a.oa&&(a.ta?(a=a.C,a.H&&l(a.t,[a.o.h(a.p,"active")],[a.o.h(a.p,"loading"),a.o.h(a.p,"inactive")]),m(a,"active")):ma(a.C))}function x(){this.I=this.S=-1}x.prototype.now=function(){return(new Date).getTime()};
x.prototype.start=function(){this.S=this.now();this.I=-1};x.prototype.stop=function(){this.I=this.now()};function wa(){var a=[{name:"font-family",value:z.c[A+1]}];this.Ga=[z.c[A]];this.ja=a}function xa(a){for(var b=a.Ga.join(","),c=[],d=0;d<a.ja.length;d++){var e=a.ja[d];c.push(e.name+":"+e.value+";")}return b+"{"+c.join("")+"}"}function B(a,b,c,d){this.m=null!=a?a:null;this.v=null!=b?b:null;this.R=null!=c?c:null;this.h=null!=d?d:null}var ya=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
B.prototype.compare=function(a){return this.m>a.m||this.m===a.m&&this.v>a.v||this.m===a.m&&this.v===a.v&&this.R>a.R?1:this.m<a.m||this.m===a.m&&this.v<a.v||this.m===a.m&&this.v===a.v&&this.R<a.R?-1:0};function C(a,b){return-1===a.compare(b)}function D(a,b){return 0===a.compare(b)||1===a.compare(b)}function E(a,b){return 0===a.compare(b)}B.prototype.toString=function(){return[this.m,this.v||"",this.R||"",this.h||""].join("")};
function F(a){a=ya.exec(a);var b=null,c=null,d=null,e=null;a&&(null!==a[1]&&a[1]&&(b=parseInt(a[1],10)),null!==a[2]&&a[2]&&(c=parseInt(a[2],10)),null!==a[3]&&a[3]&&(d=parseInt(a[3],10)),null!==a[4]&&a[4]&&(e=/^[0-9]+$/.test(a[4])?parseInt(a[4],10):a[4]));return new B(b,c,d,e)}function G(a,b,c,d,e,f,g){this.Y=a;this.A=b;this.L=c;this.U=d;this.n=e;this.g=f;this.ca=g}G.prototype.getName=function(){return this.Y};function za(a,b){this.b=a;this.K=b}
var Aa=new G("Unknown",new B,"Unknown",new B,"Unknown",new B,void 0);
za.prototype.parse=function(){var a;if(-1!=this.b.indexOf("MSIE")||-1!=this.b.indexOf("Trident/")){a=H(this);var b=F(I(this)),c=null,d=null,e=null,e=J(this.b,/Trident\/([\d\w\.]+)/,1),f=K(this.K),c=-1!=this.b.indexOf("MSIE")?F(J(this.b,/MSIE ([\d\w\.]+)/,1)):F(J(this.b,/rv:([\d\w\.]+)/,1));""!=e?(d="Trident",e=F(e)):(d="Unknown",e=new B);a=new G("MSIE",c,d,e,a,b,f)}else if(-1!=this.b.indexOf("Edge/"))a=H(this),b=F(I(this)),c=F(J(this.b,/Edge\/([\d\w\.]+)/,1)),a=new G("Edge",c,"Edge",c,a,b,K(this.K));
else if(-1!=this.b.indexOf("Opera"))a:if(a="Unknown",b=F(J(this.b,/Presto\/([\d\w\.]+)/,1)),c=F(I(this)),d=K(this.K),null!==b.m?a="Presto":(-1!=this.b.indexOf("Gecko")&&(a="Gecko"),b=F(J(this.b,/rv:([^\)]+)/,1))),-1!=this.b.indexOf("Opera Mini/"))f=F(J(this.b,/Opera Mini\/([\d\.]+)/,1)),a=new G("OperaMini",f,a,b,H(this),c,d);else{if(-1!=this.b.indexOf("Version/")&&(f=F(J(this.b,/Version\/([\d\.]+)/,1)),null!==f.m)){a=new G("Opera",f,a,b,H(this),c,d);break a}f=F(J(this.b,/Opera[\/ ]([\d\.]+)/,1));
a=null!==f.m?new G("Opera",f,a,b,H(this),c,d):new G("Opera",new B,a,b,H(this),c,d)}else/OPR\/[\d.]+/.test(this.b)?a=Ba(this):/AppleWeb(K|k)it/.test(this.b)?a=Ba(this):-1!=this.b.indexOf("Gecko")?(a="Unknown",b=new B,c=F(I(this)),-1!=this.b.indexOf("Firefox")?(a="Firefox",b=F(J(this.b,/Firefox\/([\d\w\.]+)/,1))):-1!=this.b.indexOf("Mozilla")&&(a="Mozilla"),d=F(J(this.b,/rv:([^\)]+)/,1)),a=new G(a,b,"Gecko",d,H(this),c,K(this.K))):a=Aa;return a};
function H(a){var b=J(a.b,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=b)return/BB\d{2}/.test(b)&&(b="BlackBerry"),b;a=J(a.b,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=a?("Mac_PowerPC"==a?a="Macintosh":"PlayStation"==a&&(a="Linux"),a):"Unknown"}
function I(a){var b=J(a.b,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(b||(b=J(a.b,/Windows Phone( OS)? ([^;)]+)/,2))||(b=J(a.b,/(iPhone )?OS ([\d_]+)/,2)))return b;if(b=J(a.b,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1))for(var b=b.split(/\s/),c=0;c<b.length;c+=1)if(/^[\d\._]+$/.test(b[c]))return b[c];return(a=J(a.b,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?a:"Unknown"}
function Ba(a){var b=H(a),c=F(I(a)),d=F(J(a.b,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),e="Unknown",f=new B,f="Unknown";/OPR\/[\d.]+/.test(a.b)?e="Opera":-1!=a.b.indexOf("Chrome")||-1!=a.b.indexOf("CrMo")||-1!=a.b.indexOf("CriOS")?e="Chrome":/Silk\/\d/.test(a.b)?e="Silk":"BlackBerry"==b||"Android"==b?e="BuiltinBrowser":-1!=a.b.indexOf("PhantomJS")?e="PhantomJS":-1!=a.b.indexOf("Safari")?e="Safari":-1!=a.b.indexOf("AdobeAIR")?e="AdobeAIR":-1!=a.b.indexOf("PlayStation")&&(e="BuiltinBrowser");"BuiltinBrowser"==
e?f="Unknown":"Silk"==e?f=J(a.b,/Silk\/([\d\._]+)/,1):"Chrome"==e?f=J(a.b,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=a.b.indexOf("Version/")?f=J(a.b,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==e?f=J(a.b,/AdobeAIR\/([\d\.]+)/,1):"Opera"==e?f=J(a.b,/OPR\/([\d.]+)/,1):"PhantomJS"==e&&(f=J(a.b,/PhantomJS\/([\d.]+)/,1));f=F(f);return new G(e,f,"AppleWebKit",d,b,c,K(a.K))}function J(a,b,c){return(a=a.match(b))&&a[c]?a[c]:""}function K(a){if(a.documentMode)return a.documentMode}function Ca(a){this.e=a}
Ca.prototype.toString=function(){return encodeURIComponent(ha(this.e))};function Da(a,b){this.r=a;this.s=b}Da.prototype.toString=function(){for(var a=[],b=0;b<this.s.length;b++)for(var c=this.s[b],d=c.F(),c=c.F(this.r),e=0;e<d.length;e++){var f;a:{for(f=0;f<c.length;f++)if(d[e]===c[f]){f=!0;break a}f=!1}a.push(f?1:0)}a=a.join("");a=a.replace(/^0+/,"");b=[];for(d=a.length;0<d;d-=4)b.unshift(parseInt(a.slice(0>d-4?0:d-4,d),2).toString(16));return b.join("")};function N(a){this.Ka=a}
N.prototype.h=function(a){var b=a||{};a=this.Ka.replace(/\{\/?([^*}]*)(\*?)\}/g,function(a,d,e){return e&&b[d]?"/"+b[d].join("/"):b[d]||""});a.match(/^\/\//)&&(a="https:"+a);return a.replace(/\/*\?*($|\?)/,"$1")};function Ea(a,b){for(var c=[],d=0;d<b.length;d++)c.push(b[d].toString());return{format:a,extras:c}}function Fa(a,b){this.M=a;this.W=b;this.la={};this.ka={}}Fa.prototype.F=function(a){return a?(this.la[a]||this.W).slice(0):this.W.slice(0)};
function Ga(a,b,c){for(var d=[],e=a.M.split(",")[0].replace(/"|'/g,""),f=a.F(),g,k=[],y={},r=0;r<f.length;r++)g=f[r],0<g.length&&!y[g]&&(y[g]=!0,k.push(g));c=c.ra?c.ra(e,k,d):k;a.la[b]=c;a.ka[b]=d}function Ha(a,b){for(var c=a.F(b),d=a.ka[b]||[],e=[],f=0;f<c.length;f++)e.push(new q(a.M,c[f]));for(f=0;f<d.length;f++)if(c=d[f].M,c!==a.M)for(var g=d[f].F(),k=0;k<g.length;k++)e.push(new q(c,g[k]));return e}function Ia(a,b){this.M=a;this.W=b}Ia.prototype.F=function(){return this.W};
function Ja(a,b,c,d,e,f,g){this.Ha=a;this.Ba=b;this.V=c||[];this.va=d||null;this.Ja=e||null;this.version=f||null;this.xa=g||null}
Ja.prototype.send=function(a,b,c){var d=new N("//p.typekit.net/p.gif?s={service}&k={token}&app={app}&ht={hosting}&h={host}&f={variations}&a={account}&sl={stylesheetLoadTime}&fl={fontLoadTime}&js={version}&_={_}"),e=encodeURIComponent((window.__adobewebfontsappname__||this.xa||"").toString().substr(0,20));a=encodeURIComponent(ha(a));var f=[],g=[];window.Typekit.fonts||(window.Typekit.fonts=[]);for(var g=window.Typekit.fonts,k=0;k<this.V.length;k++){for(var y=!1,r=0;r<g.length;r++)if(this.V[k]===g[r]){y=
!0;break}y||(f.push(this.V[k]),g.push(this.V[k]))}f.length&&Ka(d.h({service:this.Ha,token:this.Ja,app:e,hosting:this.Ba,host:a,variations:f.join("."),account:this.va,stylesheetLoadTime:b,fontLoadTime:c,version:this.version,_:(+new Date).toString()}))};function Ka(a){var b=new Image(1,1),c=!1;b.src=a;b.onload=function(){c=!0;b.onload=null};setTimeout(function(){c||(b.src="about:blank",b.onload=null)},3E3)}function La(){this.ha=this.ua=this.J=this.X=this.na=!0}function O(a){return"Windows"===a.n}
function Na(a){return O(a)&&D(a.g,new B(6,1))}function P(a){return O(a)&&E(a.g,new B(5,1))||O(a)&&E(a.g,new B(5,2))||O(a)&&E(a.g,new B(6,0))||Na(a)}function Q(a){return"Macintosh"===a.n&&(D(a.g,new B(10,4))||null===a.g.m)}function Oa(a,b){return b.na&&("iPhone"===a.n||"iPod"===a.n)}function Pa(a,b){return Oa(a,b)&&D(a.g,new B(4,2))&&C(a.g,new B(5))}function Qa(a,b){return b.X&&"iPad"===a.n&&D(a.g,new B(4,2))&&C(a.g,new B(5))}function R(a,b){return b.J&&"Android"===a.n}
function Ra(a,b){return R(a,b)&&D(a.g,new B(2,2))&&C(a.g,new B(3,1))}function Sa(a,b){return R(a,b)&&D(a.g,new B(3,1))&&C(a.g,new B(4,1))}function S(a){return"Linux"===a.n||"Ubuntu"===a.n}function Ta(a){return"Safari"===a.getName()&&"AppleWebKit"===a.L||"Unknown"===a.getName()&&"AppleWebKit"===a.L&&("iPhone"===a.n||"iPad"===a.n||"iPod"===a.n)}function Ua(a){return"BuiltinBrowser"===a.getName()}function Va(a){this.ra=a}function Wa(a,b){return b}
var U={Na:"a",Ra:"d",Ma:"i",Oa:"j",La:"k",NONE:"x"},V={a:function(a,b){return"Safari"===a.getName()&&"AppleWebKit"===a.L&&D(a.U,new B(525,13))&&C(a.U,new B(534,50))&&(P(a)||Q(a))||Ua(a)&&(Ra(a,b)||R(a,b)&&D(a.g,new B(4,1)))||b.J&&"Silk"===a.getName()&&C(a.A,new B(2))&&(Ra(a,b)||Q)||b.J&&"Silk"===a.getName()&&D(a.A,new B(2))&&R(a,b)&&D(a.g,new B(4,1))||Ta(a)&&(Qa(a,b)||Pa(a,b))||"Chrome"===a.getName()&&D(a.A,new B(6))&&(Qa(a,b)||Pa(a,b))||"AdobeAIR"===a.getName()&&D(a.A,new B(2,5))&&(O(a)&&null===
a.g.m||S(a)||Q(a))},d:function(a,b){return"Chrome"===a.getName()&&D(a.A,new B(6))&&(P(a)||S(a)||Q(a)||R(a,b)||"CrOS"===a.n||"CrKey"===a.n||b.X&&"iPad"===a.n&&D(a.g,new B(5))||Oa(a,b)&&D(a.g,new B(5)))||"Gecko"===a.L&&1===a.U.compare(new B(1,9,1))&&(P(a)||S(a)||Q(a)||R(a,b))||"Safari"===a.getName()&&"AppleWebKit"===a.L&&D(a.U,new B(534,50))&&(P(a)||Q(a))||Ta(a)&&(b.X&&"iPad"===a.n&&D(a.g,new B(5))||Oa(a,b)&&D(a.g,new B(5)))||"Opera"===a.getName()&&D(a.A,new B(11,10))&&(P(a)||S(a)||Q(a)||R(a,b))||"MSIE"===
a.getName()&&9<=a.ca&&(Na(a)||O(a)&&E(a.g,new B(6,0)))||"Edge"===a.getName()&&Na(a)||"MSIE"===a.getName()&&b.ua&&"Windows Phone"===a.n&&D(a.g,new B(8))||Ua(a)&&(b.ha&&"BlackBerry"===a.n&&D(a.g,new B(10))||S(a))},j:function(a,b){return Ua(a)&&Sa(a,b)||b.J&&"Silk"===a.getName()&&D(a.A,new B(2))&&(Sa(a,b)||S(a))},i:function(a){return"MSIE"===a.getName()&&D(a.A,new B(6,0))&&(void 0===a.ca||9>a.ca)&&P(a)},x:function(){return!1}},Xa={};
Xa.i=new Va(function(a,b,c){for(var d=0;d<b.length;d+=1){var e=b[d],f;f=e;f=a.replace(/(-1|-2)$/,"").slice(0,28)+"-"+f;c.push(new Ia(f,[e]))}a={};for(e=0;e<b.length;e++)c=b[e],d=c.charAt(1),(a[d]||(a[d]=[])).push(c);c=[[4,3,2,1,5,6,7,8,9],[7,8,9,6,5,4,3,2,1]];d=[];for(e=0;e<c.length;e++){f=c[e];for(var g=0;g<f.length;g++){var k=f[g];if(a[k]){d=d.concat(a[k]);break}}}c=d;d={};a=[];for(e=0;e<c.length;e++)f=c[e],d[f]||(d[f]=!0,a.push(f));c=[];for(d=0;d<b.length;d++)for(e=b[d],f=0;f<a.length;f++)g=a[f],
g==e&&c.push(g);return c});var W={};W.a=W.d=W.j=function(){return[]};W.i=function(a,b,c){return[new Ca(a),new Da(b,c)]};W.k=function(a){return[new Ca(a)]};function Ya(a,b,c){return W[b](a,b,c)}function X(a){this.e=a;this.r="x";this.ia=this.b=null;this.s=[];this.T=[];this.ma=this.aa=null}X.prototype.supportsConfiguredBrowser=function(){return"x"!==this.r};
X.prototype.init=function(){if(0<this.T.length){for(var a=[],b=0;b<this.T.length;b++)a.push(xa(this.T[b]));var b=this.e,a=a.join(""),c=this.e.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(document.createTextNode(a));ea(b,"head",c)}};
X.prototype.load=function(a,b,c){function d(){}var e=this,f=c||{},g=f.contextPath||".",k=f.hostname||this.ma;a=f.timeout;c=!!f.async;var y=!1!==f.events,r=null,L=new x,M=new x;f.active&&(d=f.active);f.active=function(){M.stop();e.qa&&e.qa.send(e.e,-1!==L.S&&-1!==L.I?L.I-L.S:-1,-1!==M.S&&-1!==M.I?M.I-M.S:-1);d()};r=new la(this.e,f);if(this.r){for(var f=Xa[this.r]||new Va(Wa),p=0;p<this.s.length;p++)Ga(this.s[p],this.r,f);this.aa&&(f=Ya(this.e,this.r,this.s),f=Ea(this.r,f),f.contextPath=g,k&&(f.hostname=
k),g=this.aa.h(f),L.start(),ia(this.e,g,function(){L.stop();M.start()},c));if(y){for(var T=[],Ma={},v=new ua(this.e,r,a),p=0;p<this.s.length;p++)T=T.concat(Ha(this.s[p],this.r));for(p=0;p<T.length;p++)Ma[T[p].getName()]="BESbswy\ue000\ue001\ue002\ue003\ue004\ue005\ue006";fa(this.e,function(){var a=T,c={},d=Ma||{};if(0===a.length&&b)ma(v.C);else{v.ba+=a.length;b&&(v.oa=b);var e,f=[];for(e=0;e<a.length;e++){var g=a[e],k=d[g.getName()],p=v.C,r=g;p.H&&l(p.t,[p.o.h(p.p,r.getName(),n(r).toString(),"loading")]);
m(p,"fontloading",r);p=null;p=new na(h(v.za,v),h(v.Aa,v),v.e,g,v.ea,c,k);f.push(p)}for(e=0;e<f.length;e++)f[e].start()}})}}};X.prototype.performOptionalActions=function(){};function Za(a,b,c,d){this.Ea=a;this.e=b;this.b=c;this.t=d;this.u=[]}Za.prototype.wa=function(a){this.u.push(a)};Za.prototype.load=function(a,b){var c=a,d=b||{};"string"==typeof c?c=[c]:c&&c.length||(d=c||{},c=[]);if(c.length)for(var e=this,f=c.length,g=0;g<c.length;g++)$a(this,c[g],function(){0==--f&&ab(e,d)});else ab(this,d)};
function $a(a,b,c){b=a.Ea.h({id:encodeURIComponent(b)});ja(a.e,b,c)}function ab(a,b){if(0!=a.u.length){for(var c=new la(a.e,b),d=!1,e=0;e<a.u.length;e++)a.u[e].init(),d=d||a.u[e].supportsConfiguredBrowser();if(d)for(c.H&&l(c.t,[c.o.h(c.p,"loading")]),m(c,"loading"),c=0;c<a.u.length;c++)d=a.u[c],d.supportsConfiguredBrowser()&&d.load(null,c==a.u.length-1,b);else ma(c);a.u=[]}}var bb=(new za(navigator.userAgent,document)).parse(),cb=new da(window);window.Typekit||(window.Typekit={});
if(!window.Typekit.load){var db=window.Typekit.config||{},eb=null;db.k&&(eb=new N(db.k));var fb=new Za(eb,cb,bb,document.documentElement);window.Typekit.load=function(){fb.load.apply(fb,arguments)};window.Typekit.addKit=function(){fb.wa.apply(fb,arguments)}}var gb,Y,Z,z=window.Typekit.config||{};Z=new X(cb);Z.qa=new Ja(z.ps,z.ht,z.fi,z.a,z.kt,z.js,z.l);Y=new La;Y.na=!z.si;Y.X=!z.st;Y.J=!z.sa;Y.ua=!z.sw;Y.ha=!z.sb;Z.ia=Y;z.f&&(gb=new N(z.f),Z.aa=gb);z.hn&&(Z.ma=z.hn);var A;
if(z.fn)for(A=0;A<z.fn.length;A+=2)Z.s.push(new Fa(z.fn[A],z.fn[A+1]));if(z.c)for(A=0;A<z.c.length;A+=2)Z.T.push(new wa);Z.b=bb;var hb;a:{var ib=Z.b,jb=new La,kb=Z.ia||jb,lb;for(lb in U){var $=U[lb];if(V[$]&&V[$](ib,kb)){hb=$;break a}}for(lb in U)if($=U[lb],V[$]&&V[$](ib,jb)){hb="x";break a}hb="k"}Z.r=hb;window.Typekit.addKit(Z);if(window.WebFont)try{window.Typekit.load()}catch(mb){};
})(this,document);
