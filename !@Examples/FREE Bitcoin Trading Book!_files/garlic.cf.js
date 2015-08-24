!function($){"use strict";var Storage=function(options){this.defined='undefined'!==typeof localStorage;}
Storage.prototype={constructor:Storage,get:function(key,placeholder){return localStorage.getItem(key)?localStorage.getItem(key):'undefined'!==typeof placeholder?placeholder:null;},has:function(key){return localStorage.getItem(key)?true:false;},set:function(key,value,fn){if('string'===typeof value){if(''===value){this.destroy(key);}else{localStorage.setItem(key,value);}}
return'function'===typeof fn?fn():true;},destroy:function(key,fn){localStorage.removeItem(key);return'function'===typeof fn?fn():true;},clean:function(fn){for(var i=localStorage.length- 1;i>=0;i--){if('undefined'===typeof Array.indexOf&&-1!==localStorage.key(i).indexOf('garlic:')){localStorage.removeItem(localStorage.key(i));}}
return'function'===typeof fn?fn():true;},clear:function(fn){localStorage.clear();return'function'===typeof fn?fn():true;}}
var Garlic=function(element,storage,options){this.init('garlic',element,storage,options);}
Garlic.prototype={constructor:Garlic,init:function(type,element,storage,options){this.type=type;this.$element=$(element);this.options=this.getOptions(options);this.storage=storage;this.path=this.options.getPath(this.$element)||this.getPath();this.parentForm=this.$element.closest('form');this.$element.addClass('garlic-auto-save');this.expiresFlag=!this.options.expires?false:(this.$element.data('expires')?this.path:this.getPath(this.parentForm))+'_flag';this.$element.on(this.options.events.join('.'+ this.type+' '),false,$.proxy(this.persist,this));if(this.options.destroy){$(this.parentForm).on('submit reset',false,$.proxy(this.destroy,this));}
this.retrieve();},getOptions:function(options){return $.extend({},$.fn[this.type].defaults,options,this.$element.data());},persist:function(){if(this.val===this.getVal()){return;}
this.val=this.getVal();if(this.options.expires){this.storage.set(this.expiresFlag,(new Date().getTime()+ this.options.expires*1000).toString());}
this.storage.set(this.path,this.getVal());this.options.onPersist(this.$element,this.getVal());},getVal:function(){return!this.$element.is('input[type=checkbox]')?this.$element.val():(this.$element.prop('checked')?'checked':'unchecked');},retrieve:function(){if(this.storage.has(this.path)){if(this.options.expires){var date=new Date().getTime();if(this.storage.get(this.expiresFlag)<date.toString()){this.storage.destroy(this.path);return;}else{this.$element.attr('expires-in',Math.floor((parseInt(this.storage.get(this.expiresFlag))- date)/ 1000 ) );
}}
var storedValue=this.storage.get(this.path);if(this.options.conflictManager.enabled&&this.detectConflict()){return this.conflictManager();}
if(this.$element.is('input[type=radio], input[type=checkbox]')){if('checked'===storedValue||this.$element.val()===storedValue){return this.$element.attr('checked',true);}else if('unchecked'===storedValue){this.$element.attr('checked',false);}
return;}
this.$element.val(storedValue);this.$element.trigger('input');this.options.onRetrieve(this.$element,storedValue);return;}},detectConflict:function(){var self=this;if(this.$element.is('input[type=checkbox], input[type=radio]')){return false;}
if(this.$element.val()&&this.storage.get(this.path)!==this.$element.val()){if(this.$element.is('select')){var selectConflictDetected=false;this.$element.find('option').each(function(){if($(this).index()!==0&&$(this).attr('selected')&&$(this).val()!==self.storage.get(this.path)){selectConflictDetected=true;return;}});return selectConflictDetected;}
return true;}
return false;},conflictManager:function(){if('function'===typeof this.options.conflictManager.onConflictDetected&&!this.options.conflictManager.onConflictDetected(this.$element,this.storage.get(this.path))){return false;}
if(this.options.conflictManager.garlicPriority){this.$element.data('swap-data',this.$element.val());this.$element.data('swap-state','garlic');this.$element.val(this.storage.get(this.path));}else{this.$element.data('swap-data',this.storage.get(this.path));this.$element.data('swap-state','default');}
this.swapHandler();this.$element.addClass('garlic-conflict-detected');this.$element.closest('input[type=submit]').attr('disabled',true);},swapHandler:function(){var swapChoiceElem=$(this.options.conflictManager.template);this.$element.after(swapChoiceElem.text(this.options.conflictManager.message));swapChoiceElem.on('click',false,$.proxy(this.swap,this));},swap:function(){var val=this.$element.data('swap-data');this.$element.data('swap-state','garlic'===this.$element.data('swap-state')?'default':'garlic');this.$element.data('swap-data',this.$element.val());$(this.$element).val(val);},destroy:function(){this.storage.destroy(this.path);},remove:function(){this.remove();if(this.$element.is('input[type=radio], input[type=checkbox]')){$(this.$element).prop('checked',false);return;}
this.$element.val('');},getPath:function(elem){if('undefined'===typeof elem){elem=this.$element;}
if(this.options.getPath(elem)){return this.options.getPath(elem);}
if(elem.length!=1){return false;}
var path='',fullPath=elem.is('input[type=checkbox]'),node=elem;while(node.length){var realNode=node[0],name=realNode.nodeName;if(!name){break;}
name=name.toLowerCase();var parent=node.parent(),siblings=parent.children(name);if(!$(realNode).is('form, input, select, textarea')&&!fullPath){node=parent;continue;}
name+=$(realNode).attr('name')?'.'+ $(realNode).attr('name'):'';if(siblings.length>1&&!$(realNode).is('input[type=radio]')){}
path=name+(path?'>'+ path:'');if('form'==realNode.nodeName.toLowerCase()){break;}
node=parent;}
return'garlic:'+ document.domain+(this.options.domain?'*':window.location.pathname)+'>'+ path;},getStorage:function(){return this.storage;}}
$.fn.garlic=function(option,fn){var options=$.extend(true,{},$.fn.garlic.defaults,option,this.data()),storage=new Storage(),returnValue=false;if(!storage.defined){return false;}
function bind(self){var $this=$(self),data=$this.data('garlic'),fieldOptions=$.extend({},options,$this.data());if('undefined'!==typeof fieldOptions.storage&&!fieldOptions.storage){return;}
if('password'===$(self).attr('type')){return;}
if(!data){$this.data('garlic',(data=new Garlic(self,storage,fieldOptions)));}
if('string'===typeof option&&'function'===typeof data[option]){return data[option]();}}
this.each(function(){if($(this).is('form')){$(this).find(options.inputs).each(function(){if($(this).is(options.excluded)){return;}
returnValue=bind($(this));});}else if($(this).is(options.inputs)){if($(this).is(options.excluded)){return;}
returnValue=bind($(this));}});return'function'===typeof fn?fn():returnValue;}
$.fn.garlic.Constructor=Garlic;$.fn.garlic.defaults={destroy:false,inputs:'input, textarea, select',excluded:'input[type="file"], input[type="hidden"]',events:['DOMAttrModified','textInput','input','change','click','keypress','paste','focus'],domain:true,expires:false,conflictManager:{enabled:false,garlicPriority:true,template:'<span class="garlic-swap"></span>',message:'This is your saved data. Click here to see default one',onConflictDetected:function($item,storedVal){return true;}},getPath:function($item){},onRetrieve:function($item,storedVal){},onPersist:function($item,storedVal){}}
$(window).on('load',function(){$('[data-persist="garlic"]').each(function(){$(this).garlic();});$('.elInput:visible').each(function(){$(this).garlic();});$('.o2step_step1 .elInput').each(function(){$(this).garlic();});$('.containerModal .elInput').each(function(){$(this).garlic();});});}(window.jQuery||window.Zepto);