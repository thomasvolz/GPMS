/*!CK:4056298062!*//*1437363355,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["F\/yL2"]); }

__d("escapeJSQuotes",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){if(typeof h=='undefined'||h==null||!h.valueOf())return '';return h.toString().replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/\r/g,'\\r').replace(/"/g,'\\x22').replace(/'/g,'\\\'').replace(/</g,'\\x3c').replace(/>/g,'\\x3e').replace(/&/g,'\\x26');}e.exports=g;},null);
__d("escapeRegex",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();function g(h){return h.replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1");}e.exports=g;},null);
__d("xuiglyph",["ix"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();'use strict';function h(i){if(typeof i==='string')i={name:i};var j=Object.assign({name:(void 0),shade:'dark',size:'small'},i);return g.call(null,j.name+':'+j.shade+':'+j.size);}e.exports=h;},null);
__d("RequiredFormListener",["Event","Input"],function(a,b,c,d,e,f,g,h){b.__markCompiled&&b.__markCompiled();g.listen(document.documentElement,'submit',function(i){var j=i.getTarget().getElementsByTagName('*');for(var k=0;k<j.length;k++)if(j[k].getAttribute('required')&&h.isEmpty(j[k])){j[k].focus();return false;}},g.Priority.URGENT);},null);
__d("Dialog",["Animation","Arbiter","AsyncRequest","Button","ContextualThing","CSS","DOM","Event","Focus","Form","HTML","Keys","Locale","Parent","Run","Style","URI","Vector","bind","createArrayFromMixed","emptyFunction","getObjectValues","getOverlayZIndex","removeFromArray","shield","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa){b.__markCompiled&&b.__markCompiled();var ga=function(){var ia=document.body,ja=document.createElement('div'),ka=document.createElement('div');ia.insertBefore(ja,ia.firstChild);ia.insertBefore(ka,ia.firstChild);ja.style.position='fixed';ja.style.top='20px';var la=ja.offsetTop!==ka.offsetTop;ia.removeChild(ja);ia.removeChild(ka);ga=aa.thatReturns(la);return la;};function ha(ia){"use strict";this._show_loading=true;this._auto_focus=true;this._submit_on_enter=false;this._fade_enabled=true;this._onload_handlers=[];this._top=125;this._uniqueID='dialog_'+ha._globalCount++;this._content=null;this._obj=null;this._popup=null;this._overlay=null;this._causal_elem=null;this._previous_focus=null;this._buttons=[];this._buildDialog();if(ia)this._setFromModel(ia);ha._init();}ha.prototype.show=function(){"use strict";this._showing=true;if(this._async_request){if(this._show_loading)this.showLoading();}else this._update();return this;};ha.prototype.showLoading=function(){"use strict";this._loading=true;l.addClass(this._frame,'dialog_loading_shown');this._renderDialog();return this;};ha.prototype.hide=function(){"use strict";if(!this._showing&&!this._loading)return this;this._showing=false;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}if(this._fade_enabled&&ha._stack.length<=1){this._fadeOut();}else this._hide();return this;};ha.prototype.cancel=function(){"use strict";if(!this._cancelHandler||this._cancelHandler()!==false)this.hide();};ha.prototype.getRoot=function(){"use strict";return this._obj;};ha.prototype.getBody=function(){"use strict";return m.scry(this._obj,'div.dialog_body')[0];};ha.prototype.getButtonElement=function(ia){"use strict";if(typeof ia=='string')ia=ha._findButton(this._buttons,ia);if(!ia||!ia.name)return null;var ja=m.scry(this._popup,'input'),ka=function(la){return la.name==ia.name;};return ja.filter(ka)[0]||null;};ha.prototype.getContentNode=function(){"use strict";return m.find(this._content,'div.dialog_content');};ha.prototype.getFormData=function(){"use strict";return p.serialize(this.getContentNode());};ha.prototype.setAllowCrossPageTransition=function(ia){"use strict";this._cross_transition=ia;return this;};ha.prototype.setAllowCrossQuicklingNavigation=function(ia){"use strict";this._cross_quickling=ia;return this;};ha.prototype.setShowing=function(){"use strict";this.show();return this;};ha.prototype.setHiding=function(){"use strict";this.hide();return this;};ha.prototype.setTitle=function(ia){"use strict";var ja=this._nodes.title,ka=this._nodes.title_inner,la=this._nodes.content;m.setContent(ka,this._format(ia||''));l.conditionShow(ja,!!ia);l.conditionClass(la,'dialog_content_titleless',!ia);return this;};ha.prototype.setBody=function(ia){"use strict";m.setContent(this._nodes.body,this._format(ia));return this;};ha.prototype.setExtraData=function(ia){"use strict";this._extra_data=ia;return this;};ha.prototype.setReturnData=function(ia){"use strict";this._return_data=ia;return this;};ha.prototype.setShowLoading=function(ia){"use strict";this._show_loading=ia;return this;};ha.prototype.setFullBleed=function(ia){"use strict";this._full_bleed=ia;this._updateWidth();l.conditionClass(this._obj,'full_bleed',ia);return this;};ha.prototype.setCausalElement=function(ia){"use strict";this._causal_elem=ia;return this;};ha.prototype.setUserData=function(ia){"use strict";this._user_data=ia;return this;};ha.prototype.getUserData=function(){"use strict";return this._user_data;};ha.prototype.setAutohide=function(ia){"use strict";if(ia){if(this._showing){this._autohide_timeout=setTimeout(ea(this.hide,this),ia);}else this._autohide=ia;}else{this._autohide=null;if(this._autohide_timeout){clearTimeout(this._autohide_timeout);this._autohide_timeout=null;}}return this;};ha.prototype.setSummary=function(ia){"use strict";var ja=this._nodes.summary;m.setContent(ja,this._format(ia||''));l.conditionShow(ja,!!ia);return this;};ha.prototype.setButtons=function(ia){"use strict";var ja,ka;if(!(ia instanceof Array)){ja=z(arguments);}else ja=ia;for(var la=0;la<ja.length;++la)if(typeof ja[la]=='string'){ka=ha._findButton(ha._STANDARD_BUTTONS,ja[la]);ja[la]=ka;}this._buttons=ja;var ma=[];if(ja&&ja.length>0)for(var na=0;na<ja.length;na++){ka=ja[na];var oa=m.create('input',{type:'button',name:ka.name||'',value:ka.label}),pa=m.create('label',{className:'uiButton uiButtonLarge uiButtonConfirm'},oa);if(ka.className){ka.className.split(/\s+/).forEach(function(ra){l.addClass(pa,ra);});if(l.hasClass(pa,'inputaux')){l.removeClass(pa,'inputaux');l.removeClass(pa,'uiButtonConfirm');}if(l.hasClass(pa,'uiButtonSpecial'))l.removeClass(pa,'uiButtonConfirm');}if(ka.icon)m.prependContent(pa,m.create('img',{src:ka.icon,className:'img mrs'}));if(ka.disabled)j.setEnabled(pa,false);n.listen(oa,'click',this._handleButton.bind(this,ka.name));for(var qa in ka)if(qa.indexOf('data-')===0&&qa.length>5)oa.setAttribute(qa,ka[qa]);ma.push(pa);}m.setContent(this._nodes.buttons,ma);this._updateButtonVisibility();return this;};ha.prototype.setButtonsMessage=function(ia){"use strict";m.setContent(this._nodes.button_message,this._format(ia||''));this._has_button_message=!!ia;this._updateButtonVisibility();return this;};ha.prototype._updateButtonVisibility=function(){"use strict";var ia=this._buttons.length>0||this._has_button_message;l.conditionShow(this._nodes.button_wrapper,ia);l.conditionClass(this._obj,'omitDialogFooter',!ia);};ha.prototype.setClickButtonOnEnter=function(ia,ja){"use strict";this._clickOnEnterTarget=ia;if(!this._clickOnEnterListener)this._clickOnEnterListener=n.listen(this._nodes.body,'keypress',function(event){var ka=event.getTarget();if(ka&&ka.id===this._clickOnEnterTarget)if(n.getKeyCode(event)==r.RETURN){this._handleButton(ja);event.kill();}return true;}.bind(this));return this;};ha.prototype.setStackable=function(ia,ja){"use strict";this._is_stackable=ia;this._shown_while_stacked=ia&&ja;return this;};ha.prototype.setHandler=function(ia){"use strict";this._handler=ia;return this;};ha.prototype.setCancelHandler=function(ia){"use strict";this._cancelHandler=ha.call_or_eval.bind(null,this,ia);return this;};ha.prototype.setCloseHandler=function(ia){"use strict";this._close_handler=ha.call_or_eval.bind(null,this,ia);return this;};ha.prototype.clearHandler=function(){"use strict";return this.setHandler(null);};ha.prototype.setPostURI=function(ia,ja){"use strict";if(ja===(void 0))ja=true;if(ja){this.setHandler(this._submitForm.bind(this,'POST',ia));}else this.setHandler(function(){p.post(ia,this.getFormData());this.hide();}.bind(this));return this;};ha.prototype.setGetURI=function(ia){"use strict";this.setHandler(this._submitForm.bind(this,'GET',ia));return this;};ha.prototype.setModal=function(ia){"use strict";this._modal=ia;l.conditionClass(this._obj,'generic_dialog_modal',ia);return this;};ha.prototype.setSemiModal=function(ia){"use strict";if(ia){this.setModal(true);this._semiModalListener=n.listen(this._obj,'click',function(ja){if(!m.contains(this._popup,ja.getTarget()))this.hide();}.bind(this));}else this._semiModalListener&&this._semiModalListener.remove();this._semi_modal=ia;return this;};ha.prototype.setWideDialog=function(ia){"use strict";this._wide_dialog=ia;this._updateWidth();return this;};ha.prototype.setContentWidth=function(ia){"use strict";this._content_width=ia;this._updateWidth();return this;};ha.prototype.setTitleLoading=function(ia){"use strict";if(ia===(void 0))ia=true;var ja=m.find(this._popup,'h2.dialog_title');if(ja)l.conditionClass(ja,'loading',ia);return this;};ha.prototype.setSecure=function(ia){"use strict";l.conditionClass(this._nodes.title,'secure',ia);return this;};ha.prototype.setClassName=function(ia){"use strict";ia.split(/\s+/).forEach(l.addClass.bind(l,this._obj));return this;};ha.prototype.setFadeEnabled=function(ia){"use strict";this._fade_enabled=ia;return this;};ha.prototype.setFooter=function(ia){"use strict";var ja=this._nodes.footer;m.setContent(ja,this._format(ia||''));l.conditionShow(ja,!!ia);return this;};ha.prototype.setAutoFocus=function(ia){"use strict";this._auto_focus=ia;return this;};ha.prototype.setTop=function(ia){"use strict";this._top=ia;this._resetDialogObj();return this;};ha.prototype.onloadRegister=function(ia){"use strict";z(ia).forEach(function(ja){if(typeof ja=='string')ja=new Function(ja);this._onload_handlers.push(ja.bind(this));}.bind(this));return this;};ha.prototype.setAsyncURL=function(ia){"use strict";return this.setAsync(new i(ia));};ha.prototype.setAsync=function(ia){"use strict";var ja=function(ra){if(this._async_request!=ia)return;this._async_request=null;var sa=ra.getPayload(),ta=sa;if(this._loading)this._showing=true;if(typeof ta=='string'){this.setBody(ta);}else this._setFromModel(ta);this._update();}.bind(this),ka=ia.getData();ka.__d=1;ia.setData(ka);var la=ia.getHandler()||aa;ia.setHandler(function(ra){la(ra);ja(ra);});var ma=ia,na=ma.getErrorHandler()||aa,oa=ma.getTransportErrorHandler()||aa,pa=function(){this._async_request=null;this._loading=false;if(this._showing&&this._shown_while_stacked){this._update();}else this._hide(this._is_stackable);}.bind(this),qa=ma.getServerDialogCancelHandler()||pa;ma.setAllowCrossPageTransition(this._cross_transition).setErrorHandler(function(ra){pa();na(ra);}).setTransportErrorHandler(function(ra){pa();oa(ra);}).setServerDialogCancelHandler(qa);ia.send();this._async_request=ia;if(this._showing)this.show();return this;};ha.prototype._format=function(ia){"use strict";if(typeof ia=='string'){ia=q(ia);}else ia=q.replaceJSONWrapper(ia);if(ia instanceof q)ia.setDeferred(true);return ia;};ha.prototype._update=function(){"use strict";if(!this._showing)return;if(this._autohide&&!this._async_request&&!this._autohide_timeout)this._autohide_timeout=setTimeout(y(this,'hide'),this._autohide);l.removeClass(this._frame,'dialog_loading_shown');this._loading=false;this._renderDialog();this._runOnloads();this._previous_focus=document.activeElement;o.set(this._frame);};ha.prototype._runOnloads=function(){"use strict";for(var ia=0;ia<this._onload_handlers.length;++ia)try{this._onload_handlers[ia]();}catch(ja){}this._onload_handlers=[];};ha.prototype._updateWidth=function(){"use strict";var ia=2*(ha._BORDER_WIDTH+ha._HALO_WIDTH);if(this._content_width){ia+=this._content_width;if(!this._full_bleed)ia+=2*ha._PADDING_WIDTH;}else if(this._wide_dialog){ia+=ha.SIZE.WIDE;}else ia+=ha.SIZE.STANDARD;this._popup.style.width=ia+'px';};ha.prototype._updateZIndex=function(){"use strict";if(!this._hasSetZIndex&&this._causal_elem){var ia=ca(this._causal_elem),ja=this._causal_elem;while(!ia&&(ja=k.getContext(ja)))ia=ca(ja);this._hasSetZIndex=ia>(this._modal?400:200);v.set(this._obj,'z-index',this._hasSetZIndex?ia:'');}};ha.prototype._renderDialog=function(){"use strict";this._updateZIndex();this._pushOntoStack();this._obj.style.height=null;if(this._obj&&this._obj.style.display){this._obj.style.visibility='hidden';this._obj.style.display='';this.resetDialogPosition();this._obj.style.visibility='';this._obj.dialog=this;}else this.resetDialogPosition();clearInterval(this.active_hiding);this.active_hiding=setInterval(this._activeResize.bind(this),500);this._submit_on_enter=false;if(this._auto_focus){var ia=p.getFirstElement(this._content,['input[type="text"]','textarea','input[type="password"]']);if(ia){setTimeout(p.focusFirst.bind(this,this._content),0);}else this._submit_on_enter=true;}var ja=x.getElementDimensions(this._content).y+x.getElementPosition(this._content).y;ha._bottoms.push(ja);this._bottom=ja;ha._updateMaxBottom();return this;};ha.prototype._buildDialog=function(){"use strict";this._obj=m.create('div',{className:'generic_dialog',id:this._uniqueID});this._obj.style.display='none';m.appendContent(document.body,this._obj);if(!this._popup)this._popup=m.create('div',{className:'generic_dialog_popup'});this._obj.appendChild(this._popup);l.addClass(this._obj,'pop_dialog');if(s.isRTL())l.addClass(this._obj,'pop_dialog_rtl');m.setContent(this._popup,m.create('div',{className:'pop_container_advanced'},m.create('div',{className:'pop_content',id:'pop_content'})));var ia=m.find(this._popup,'div.pop_content');ia.setAttribute('tabIndex','0');ia.setAttribute('role','alertdialog');this._frame=this._content=ia;var ja=m.create('div',{className:'dialog_loading'},fa._("Loading...")),ka=m.create('span'),la=m.create('h2',{className:'dialog_title hidden_elem',id:'title_'+this._uniqueID},ka),ma=m.create('div',{className:'dialog_summary hidden_elem'}),na=m.create('div',{className:'dialog_body'}),oa=m.create('div',{className:'rfloat mlm'}),pa=m.create('div',{className:'dialog_buttons_msg'}),qa=m.create('div',{className:'dialog_buttons clearfix hidden_elem'},[oa,pa]),ra=m.create('div',{className:'dialog_footer hidden_elem'}),sa=m.create('div',{className:'dialog_content'},[ma,na,qa,ra]);this._nodes={summary:ma,body:na,buttons:oa,button_message:pa,button_wrapper:qa,footer:ra,content:sa,title:la,title_inner:ka};m.setContent(this._frame,[la,sa,ja]);};ha.prototype._activeResize=function(){"use strict";if(this.last_offset_height!=this._content.offsetHeight){this.last_offset_height=this._content.offsetHeight;this.resetDialogPosition();}};ha.prototype.resetDialogPosition=function(){"use strict";if(!this._popup)return;this._resetDialogObj();};ha.prototype._resetDialogObj=function(){"use strict";var ia=2*ha._PAGE_MARGIN,ja=x.getViewportDimensions(),ka=ja.x-ia,la=ja.y-ia,ma=2*ha._HALO_WIDTH,na=x.getElementDimensions(this._content),oa=na.x+ma,pa=na.y+ma,qa=this._top,ra=ka-oa,sa=la-pa;if(sa<0){qa=ha._PAGE_MARGIN;}else if(qa>sa)qa=ha._PAGE_MARGIN+(Math.max(sa,0)/2);var ta=ga();if(!ta)qa+=x.getScrollPosition().y;v.set(this._popup,'marginTop',qa+'px');var ua=ta&&(ra<0||sa<0);l.conditionClass(this._obj,'generic_dialog_fixed_overflow',ua);l.conditionClass(document.documentElement,'generic_dialog_overflow_mode',ua);};ha.prototype._fadeOut=function(ia){"use strict";if(!this._popup)return;try{new g(this._obj).duration(0).checkpoint().to('opacity',0).hide().duration(250).ondone(this._hide.bind(this,ia)).go();}catch(ja){this._hide(ia);}};ha.prototype._hide=function(ia){"use strict";if(this._obj)this._obj.style.display='none';l.removeClass(document.documentElement,'generic_dialog_overflow_mode');clearInterval(this.active_hiding);if(this._bottom){var ja=ha._bottoms;ja.splice(ja.indexOf(this._bottom),1);ha._updateMaxBottom();}if(this._previous_focus&&document.activeElement&&m.contains(this._obj,document.activeElement))o.set(this._previous_focus);if(ia)return;this.destroy();};ha.prototype.destroy=function(){"use strict";this._popFromStack();clearInterval(this.active_hiding);if(this._obj){m.remove(this._obj);this._obj=null;}this._clickOnEnterListener&&this._clickOnEnterListener.remove();if(this._close_handler)this._close_handler({return_data:this._return_data});};ha.prototype._handleButton=function(ia){"use strict";if(typeof ia=='string')ia=ha._findButton(this._buttons,ia);var ja=ha.call_or_eval(ia,ia.handler);if(ja===false)return;if(ia.name=='cancel'){this.cancel();}else if(ha.call_or_eval(this,this._handler,{button:ia})!==false)this.hide();};ha.prototype._submitForm=function(ia,ja,ka){"use strict";var la=this.getFormData();if(ka)la[ka.name]=ka.label;if(this._extra_data)Object.assign(la,this._extra_data);var ma=new i().setURI(ja).setData(la).setMethod(ia).setNectarModuleDataSafe(this._causal_elem).setReadOnly(ia=='GET');this.setAsync(ma);return false;};ha.prototype._setFromModel=function(ia){"use strict";var ja={};Object.assign(ja,ia);for(var ka in ja){if(ka=='onloadRegister'){this.onloadRegister(ja[ka]);continue;}var la=this['set'+ka.substr(0,1).toUpperCase()+ka.substr(1)];la.apply(this,z(ja[ka]));}};ha.prototype._updateBottom=function(){"use strict";var ia=x.getElementDimensions(this._content).y+x.getElementPosition(this._content).y;ha._bottoms[ha._bottoms.length-1]=ia;ha._updateMaxBottom();};ha.prototype._pushOntoStack=function(){"use strict";var ia=ha._stack;if(!ia.length)h.inform('layer_shown',{type:'Dialog'});da(ia,this);ia.push(this);for(var ja=ia.length-2;ja>=0;ja--){var ka=ia[ja];if(!ka._is_stackable&&!ka._async_request){ka._hide();}else if(!ka._shown_while_stacked)ka._hide(true);}};ha.prototype._popFromStack=function(){"use strict";var ia=ha._stack,ja=(ia[ia.length-1]===this);da(ia,this);if(ia.length){if(ja)ia[ia.length-1].show();}else h.inform('layer_hidden',{type:'Dialog'});};ha._updateMaxBottom=function(){"use strict";ha.max_bottom=Math.max.apply(Math,ha._bottoms);};ha.newButton=function(ia,ja,ka,la){"use strict";var ma={name:ia,label:ja};if(ka)ma.className=ka;if(la)ma.handler=la;return ma;};ha.getCurrent=function(){"use strict";var ia=ha._stack;return ia.length?ia[ia.length-1]:null;};ha.hideCurrent=function(){"use strict";var ia=ha.getCurrent();ia&&ia.hide();};ha.bootstrap=function(ia,ja,ka,la,ma,na){"use strict";ja=ja||{};Object.assign(ja,new w(ia).getQueryData());la=la||(ka?'GET':'POST');var oa=t.byClass(na,'stat_elem')||na;if(oa&&l.hasClass(oa,'async_saving'))return false;var pa=new i().setReadOnly(!!ka).setMethod(la).setRelativeTo(na).setStatusElement(oa).setURI(ia).setNectarModuleDataSafe(na).setData(ja),qa=new ha(ma).setCausalElement(na).setAsync(pa);qa.show();return false;};ha.showFromModel=function(ia,ja){"use strict";var ka=new ha(ia).setCausalElement(ja).show();if(ia.hiding)ka.hide();};ha._init=function(){"use strict";this._init=aa;u.onLeave(ea(ha._tearDown,null,false));h.subscribe('page_transition',ea(ha._tearDown,null,true));n.listen(document.documentElement,'keydown',function(event){if(n.getKeyCode(event)==r.ESC&&!event.getModifiers().any){if(ha._escape())event.kill();}else if(n.getKeyCode(event)==r.RETURN&&!event.getModifiers().any)if(ha._enter())event.kill();});n.listen(window,'resize',function(event){var ia=ha.getCurrent();ia&&ia._resetDialogObj();});};ha._findButton=function(ia,ja){"use strict";if(ia)for(var ka=0;ka<ia.length;++ka)if(ia[ka].name==ja)return ia[ka];return null;};ha._tearDown=function(ia){"use strict";var ja=ha._stack.slice();for(var ka=ja.length-1;ka>=0;ka--)if((ia&&!ja[ka]._cross_transition)||(!ia&&!ja[ka]._cross_quickling))ja[ka].hide();};ha._escape=function(){"use strict";var ia=ha.getCurrent();if(!ia)return false;var ja=ia._semi_modal,ka=ia._buttons;if(!ka.length&&!ja)return false;if(ja&&!ka.length){ia.hide();return true;}var la,ma=ha._findButton(ka,'cancel');if(ia._cancelHandler){ia.cancel();return true;}else if(ma){la=ma;}else if(ka.length==1){la=ka[0];}else return false;ia._handleButton(la);return true;};ha._enter=function(){"use strict";var ia=ha.getCurrent();if(!ia||!ia._submit_on_enter)return false;if(document.activeElement!=ia._frame)return false;var ja=ia._buttons;if(!ja)return false;ia._handleButton(ja[0]);return true;};ha.call_or_eval=function(ia,ja,ka){"use strict";if(!ja)return (void 0);ka=ka||{};if(typeof ja=='string'){var la=Object.keys(ka).join(', ');ja=(eval)('({f: function('+la+') { '+ja+'}})').f;}return ja.apply(ia,ba(ka));};Object.assign(ha,{OK:{name:'ok',label:fa._("OK")},CANCEL:{name:'cancel',label:fa._("Cancel"),className:'inputaux'},CLOSE:{name:'close',label:fa._("Close")},NEXT:{name:'next',label:fa._("Next")},SAVE:{name:'save',label:fa._("Save")},SUBMIT:{name:'submit',label:fa._("Submit")},CONFIRM:{name:'confirm',label:fa._("Confirm")},DELETE:{name:'delete',label:fa._("Delete")},_globalCount:0,_bottoms:[0],max_bottom:0});Object.assign(ha,{OK_AND_CANCEL:[ha.OK,ha.CANCEL],_STANDARD_BUTTONS:[ha.OK,ha.CANCEL,ha.CLOSE,ha.SAVE,ha.SUBMIT,ha.CONFIRM,ha.DELETE],SIZE:{WIDE:555,STANDARD:445},_HALO_WIDTH:10,_BORDER_WIDTH:1,_PADDING_WIDTH:10,_PAGE_MARGIN:40,_stack:[]});Object.assign(ha.prototype,{_cross_quickling:false,_cross_transition:false,_loading:false,_showing:false});e.exports=ha;a.Dialog=ha;},null);
__d("FullScreen",["Event","Arbiter","CSS","UserAgent","UserAgent_DEPRECATED","throttle","Keys"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){b.__markCompiled&&b.__markCompiled();var n={},o=false,p=function(u){if(g.getKeyCode(u)===m.ESC)u.stopPropagation();},q=function(){if(!o){document.addEventListener('keydown',p,true);o=true;}},r=function(){if(o){document.removeEventListener('keydown',p,true);o=false;}},s=Object.assign(new h(),{listenForEvent:function(u){var v=l(this.onChange,0,this);if(!n[u.id]){n[u.id]=true;g.listen(u,{webkitfullscreenchange:v,mozfullscreenchange:v,MSFullscreenChange:v,fullscreenchange:v});}},enableFullScreen:function(u){this.listenForEvent(u);if(u.webkitRequestFullScreen){if(k.chrome()){u.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);}else u.webkitRequestFullScreen();}else if(u.mozRequestFullScreen){u.mozRequestFullScreen();}else if(u.msRequestFullscreen){q();u.msRequestFullscreen();}else if(u.requestFullScreen){u.requestFullScreen();}else return false;return true;},disableFullScreen:function(){if(document.webkitCancelFullScreen){document.webkitCancelFullScreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else if(document.cancelFullScreen){document.cancelFullScreen();}else if(document.exitFullScreen){document.exitFullScreen();}else return false;return true;},getFullScreenElement:function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;},isFullScreen:function(){return (document.webkitIsFullScreen||document.fullScreen||document.mozFullScreen||document.msFullscreenElement);},toggleFullScreen:function(u){if(this.isFullScreen()){this.disableFullScreen();return false;}else return this.enableFullScreen(u);return false;},onChange:function(){var u=this.isFullScreen();i.conditionClass(document.body,'fullScreen',u);this.inform('changed');if(!u)r();},isSupportedWithKeyboardInput:function(){return this.isSupported()&&!j.isBrowser('Safari');},isSupported:function(){var u=document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||document.fullscreenEnabled;return u||document.webkitCancelFullScreen||document.mozCancelFullScreen||document.msExitFullscreen||document.cancelFullScreen||document.exitFullScreen;}}),t=l(s.onChange,0,s);g.listen(document,{webkitfullscreenchange:t,mozfullscreenchange:t,MSFullscreenChange:t,fullscreenchange:t});e.exports=s;},null);
__d("HistoryManager",["Cookie","Env","Event","URI","UserAgent_DEPRECATED","isFacebookURI","emptyFunction","goOrReplace","isInIframe","setIntervalAcrossTransitions","SessionName"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){b.__markCompiled&&b.__markCompiled();b('SessionName');var q={history:null,current:0,fragment:null,isInitialized:function(){return !!q._initialized;},init:function(){if(!h.ALLOW_TRANSITION_IN_IFRAME&&o())return;if(q._initialized)return q;var r=new j(window.location.href),s=r.getFragment()||'';if(s.charAt(0)==='!'){s=s.substr(1);r.setFragment(s);}Object.assign(q,{_initialized:true,fragment:s,orig_fragment:s,history:[r],callbacks:[],lastChanged:Date.now(),canonical:new j('#'),user:0,enabled:true,debug:m});if(window.history&&history.pushState){this.lastURI=document.URL;window.history.replaceState(this.lastURI,null);i.listen(window,'popstate',function(t){var u=t&&t.state&&typeof t.state==='string';if(u&&q.lastURI!=t.state){q.lastURI=t.state;q.lastChanged=Date.now();q.notify(new j(t.state).getUnqualifiedURI().toString());}}.bind(q));if(k.webkit()<534||k.chrome()<=13){p(q.checkURI,42);q._updateRefererURI(this.lastURI);}return q;}q._updateRefererURI(j.getRequestURI(false));if(k.webkit()<500||k.firefox()<2){q.enabled=false;return q;}if('onhashchange' in window){i.listen(window,'hashchange',function(){setTimeout(q.checkURI.bind(q),0);});}else p(q.checkURI,42);return q;},registerURIHandler:function(r){q.callbacks.push(r);return q;},setCanonicalLocation:function(r){q.canonical=new j(r);return q;},notify:function(r){if(r==q.orig_fragment)r=q.canonical.getFragment();for(var s=0;s<q.callbacks.length;s++)try{if(q.callbacks[s](r))return true;}catch(t){}return false;},checkURI:function(){if(Date.now()-q.lastChanged<400)return;if(window.history&&history.pushState){var r=new j(document.URL).removeQueryData('ref').toString(),s=new j(q.lastURI).removeQueryData('ref').toString();if(r!=s){q.lastChanged=Date.now();q.lastURI=r;if(k.webkit()<534)q._updateRefererURI(r);q.notify(new j(r).getUnqualifiedURI().toString());}return;}if(k.webkit()&&window.history.length==200){if(!q.warned)q.warned=true;return;}var t=new j(window.location.href).getFragment();if(t.charAt(0)=='!')t=t.substr(1);t=t.replace(/%23/g,'#');if(t!=q.fragment.replace(/%23/g,'#')){q.debug([t,' vs ',q.fragment,'whl: ',window.history.length,'QHL: ',q.history.length].join(' '));for(var u=q.history.length-1;u>=0;--u)if(q.history[u].getFragment().replace(/%23/g,'#')==t)break;++q.user;if(u>=0){q.go(u-q.current);}else q.go('#'+t);--q.user;}},_updateRefererURI:function(r){r=r.toString();if(r.charAt(0)!='/'&&r.indexOf('//')==-1)return;var s=new j(window.location);if(l(s)){var t=s.getPath()+window.location.search;}else var t='';var u=new j(r).getQualifiedURI().setFragment(t).toString(),v=2048;if(u.length>v)u=u.substring(0,v)+'...';g.set('x-referer',u);},go:function(r,s,t){if(window.history&&history.pushState){s||typeof(r)=='number';var u=new j(r).removeQueryData('ref').toString();q.lastChanged=Date.now();this.lastURI=u;if(t){window.history.replaceState(r,null,u);}else window.history.pushState(r,null,u);if(k.webkit()<534)q._updateRefererURI(r);return false;}q.debug('go: '+r);if(s===(void 0))s=true;if(!q.enabled)if(!s)return false;if(typeof(r)=='number'){if(!r)return false;var v=r+q.current,w=Math.max(0,Math.min(q.history.length-1,v));q.current=w;v=q.history[w].getFragment()||q.orig_fragment;v=new j(v).removeQueryData('ref').getUnqualifiedURI().toString();q.fragment=v;q.lastChanged=Date.now();if(!q.user)n(window.location,window.location.href.split('#')[0]+'#!'+v,t);if(s)q.notify(v);q._updateRefererURI(v);return false;}r=new j(r);if(r.getDomain()==new j(window.location.href).getDomain())r=new j('#'+r.getUnqualifiedURI());var x=q.history[q.current].getFragment(),y=r.getFragment();if(y==x||(x==q.orig_fragment&&y==q.canonical.getFragment())){if(s)q.notify(y);q._updateRefererURI(y);return false;}if(t)q.current--;var z=(q.history.length-q.current)-1;q.history.splice(q.current+1,z);q.history.push(new j(r));return q.go(1,s,t);},getCurrentFragment:function(){var r=j.getRequestURI(false).getFragment();return r==q.orig_fragment?q.canonical.getFragment():r;}};e.exports=q;},null);
__d("PageTransitions",["Arbiter","Bootloader","BusyUIManager","DOMQuery","DOMScroll","Env","Event","HistoryManager","JSLogger","LayerHideOnEscape","ModalLayer","PageHooks","PageTransitionsRegistrar","React","ScriptPath","URI","Vector","areEqual","clickRefAction","escapeJSQuotes","ge","goOrReplace","invariant","isInIframe","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){b.__markCompiled&&b.__markCompiled();var fa={};function ga(ka,la){fa[ka.getUnqualifiedURI()]=la;}function ha(ka){return fa[ka.getUnqualifiedURI()];}function ia(ka){delete fa[ka.getUnqualifiedURI()];}var ja={_scroll_locked:false,isInitialized:function(){return !!ja._initialized;},_init:function(){if(!l.ALLOW_TRANSITION_IN_IFRAME&&da())return;if(ja._initialized)return ja;var ka=s.getMostRecentURI();ja._current_uri=ka;ja._most_recent_uri=ka;ja._next_uri=ka;ja._initialized=true;var la,ma=v.getRequestURI(false);if(ma.getFragment().startsWith('/')){la=ma.getFragment();}else la=ka;n.init().setCanonicalLocation('#'+la).registerURIHandler(ja._historyManagerHandler);m.listen(window,'scroll',function(){if(!ja._scroll_locked)ga(ja._current_uri,w.getScrollPosition());});return ja;},registerHandler:s.registerHandler,removeHandler:s.removeHandler,getCurrentURI:function(ka){this._init();if(!ja._current_uri&&!ka)return new v(ja._most_recent_uri);return new v(ja._current_uri);},getMostRecentURI:function(){this._init();return new v(ja._most_recent_uri);},go:function(ka,la){this._init();var ma=new v(ka).removeQueryData('quickling').getQualifiedURI();o.create('pagetransition').debug('go',{uri:ma.toString()});ia(ma);!la&&y('uri',{href:ma.toString()},null,'INDIRECT');i.lookBusy();ja._loadPage(ma,function(na){if(na){q.unfixed(function(){n.go(ma.toString(),false,la);});}else ba(window.location,ma,la);});},_historyManagerHandler:function(ka){if(ka.charAt(0)!='/')return false;y('h',{href:ka});if(!u.getClickPointInfo())u.setClickPointInfo({click:'back'});ja._loadPage(new v(ka),function(la){if(!la)ba(window.location,ka,true);});return true;},_loadPage:function(ka,la){if(new v(ka).getFragment()&&x(new v(ka).setFragment(null).getQualifiedURI(),new v(ja._current_uri).setFragment(null).getQualifiedURI())){g.inform("pre_page_fragment_transition",{from:new v(ja._current_uri).getFragment(),to:new v(ka).getFragment()});if(ja.restoreScrollPosition(ka)){ja._current_uri=ja._most_recent_uri=ka;i.stopLookingBusy();g.inform("page_fragment_transition",{fragment:new v(ka).getFragment()});return;}}var ma;if(ja._current_uri)ma=ha(ja._current_uri);var na=function(){if(ma&&ja._current_uri)ga(ja._current_uri,ma);ja._current_uri=null;ja._next_uri=ka;if(ma)k.scrollTo(ma,false);ja._scroll_locked=true;var qa=ja._handleTransition(ka);la&&la(qa);},oa=ja._next_uri;ja._next_uri=ka;var pa=r.runHooks('onbeforeleavehooks');ja._next_uri=oa;if(pa){i.stopLookingBusy();ja._warnBeforeLeaving(pa,na);}else na();},_handleTransition:function(ka){window.onbeforeleavehooks=(void 0);i.lookBusy();if(!ka.isSameOrigin())return false;var la,ma=a.AsyncRequest;if(ma)la=ma.getLastID();g.inform("pre_page_transition",{from:ja.getMostRecentURI(),to:ka});var na=s._getTransitionHandlers();for(var oa=na.length-1;oa>=0;--oa){var pa=na[oa];if(!pa)continue;for(var qa=pa.length-1;qa>=0;--qa)if(pa[qa](ka)===true){var ra={sender:this,uri:ka,id:la};try{g.inform("page_transition",ra);}catch(sa){}return true;}else pa.splice(qa,1);}return false;},unifyURI:function(){this._init();ja._current_uri=ja._most_recent_uri=ja._next_uri;},transitionComplete:function(ka){this._init();ja._scroll_locked=false;ja._executeCompletionCallbacks();i.stopLookingBusy();ja.unifyURI();if(!ka)ja.restoreScrollPosition(ja._current_uri);try{if(document.activeElement&&document.activeElement.nodeName==='A')document.activeElement.blur();}catch(la){}},_executeCompletionCallbacks:function(){var ka=s._getCompletionCallbacks();if(ka.length>0){s._resetCompletionCallbacks();ka.forEach(function(la){return la();});}},registerCompletionCallback:s.registerCompletionCallback,rewriteCurrentURI:function(ka,la){this._init();var ma=s._getTransitionHandlers(),na=ma.length||1,oa=false;s.registerHandler(function(){if(ka==ja.getMostRecentURI().getUnqualifiedURI().toString()){ja.transitionComplete();return true;}oa=true;},na);ja.go(la,true);ca(ma.length===na+1&&ma[na].length===(oa?0:1));ma.length=na;},_warnBeforeLeaving:function(ka,la){h.loadModules(["DialogX","XUIDialogTitle.react","XUIDialogBody.react","XUIDialogButton.react","XUIDialogFooter.react","XUIGrayText.react"],function(ma,na,oa,pa,qa,ra){var sa=new ma({width:450,addedBehaviors:[p]},t.createElement("div",null,t.createElement(na,{showCloseButton:false},ea._("Leave Page?")),t.createElement(oa,null,t.createElement(ra,{shade:"medium",size:"medium"},ka)),t.createElement(qa,null,t.createElement(pa,{action:"cancel",label:ea._("Stay on This Page")}),t.createElement(pa,{action:"confirm",use:"confirm",label:ea._("Leave This Page")}))));sa.subscribe('confirm',function(){sa.hide();la();});sa.show();});},restoreScrollPosition:function(ka){var la=ha(ka);if(la){k.scrollTo(la,false);return true;}function ma(pa){if(!pa)return null;var qa="a[name='"+z(pa)+"']";return j.scry(document.body,qa)[0]||aa(pa);}var na=ma(new v(ka).getFragment());if(na){var oa=w.getElementPosition(na);oa.x=0;k.scrollTo(oa);return true;}return false;}};e.exports=ja;a.PageTransitions=ja;},null);
__d("XAppFriendsController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/platform\/games\/appfriends\/",{app_id:{type:"Int",required:true}});},null);