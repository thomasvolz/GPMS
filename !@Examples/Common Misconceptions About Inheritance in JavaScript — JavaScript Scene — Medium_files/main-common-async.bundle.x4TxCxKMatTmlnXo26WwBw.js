(function(z){
'use strict';z.Y=function(a,b){return z.aa[a]=b};z.Y5=function(a,b,c){return a.sr(b,function(){return c})};z.Z5=function(a,b){var c=a.Jb[b];if(!c)throw Error('Called finishLoading on "'+b+'", which looks like it was not in the process of loading.');z.p(a.fD[b]||z.pd(!0),function(){delete this.Jb[b];delete this.fD[b];this.Rx[b]=!0;c.kb(!0)},a)};
z.$5=function(a,b,c){return(0,z.I)('\x3cdiv class\x3d"onboardingText"\x3e\x3cdiv class\x3d"onboardingText-title"\x3e'+z.G(a.title)+"\x3c/div\x3e"+z.G(a.Bi)+"\x3c/div\x3e"+(a.Lea?'\x3cdiv class\x3d"popover-actions"\x3e'+z.M(z.sB({O:"OK",action:"done",Tv:!0,isPrimary:!0},c))+"\x3c/div\x3e":""))};z.a6=function(){return(0,z.I)("Are you sure you want to leave? Unsaved changes may be lost.")};z.b6=function(){return(0,z.I)("An error occurred, and we were unable to update your publication.")};
z.c6=function(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else z.gf(a),a.appendChild(z.Le(a).createTextNode(String(b)))};z.d6=function(a,b){z.lP.call(this,a);this.Ga(new z.pP);this.Ga(new z.dO(b));this.Ga(new z.ZP(!1));this.Ga(new z.dQ);this.Ga(new z.XQ(!1));this.Hf=!0};z.T3.prototype.ln=z.Y(200,function(){return z.p(this.ys(!0),function(a){return a[0]})});
z.Vm.prototype.Zk=z.Y(147,function(){return z.B(this,"scope")});z.ZX.prototype.Zk=z.Y(146,function(){return z.QM(this.W())});z.Z5(z.tU,"common-async");z.n(z.d6,z.lP);z.d6.prototype.rp=z.k4;}).call(this, _mdm);
