/*!CK:3792472820!*//*1438957393,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["GJDTV"]); }

__d("GraphicPhotoWarningConfig",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports={Events:{GRAPHIC_PHOTO_SHOWN_NO_WARNING:"GRAPHIC_PHOTO_SHOWN_NO_WARNING",GRAPHIC_PHOTO_SHOWN_WITH_WARNING:"GRAPHIC_PHOTO_SHOWN_WITH_WARNING",GRAPHIC_PHOTO_WARNING_DISMISSED:"GRAPHIC_PHOTO_WARNING_DISMISSED"}};},null);
__d("ImageUtils",["UserAgent_DEPRECATED"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={hasLoaded:function(i){if(i.naturalWidth!==(void 0)){return i.complete&&i.width!==0;}else if(i.height==20&&i.width==20&&i.complete){return false;}else if(i.complete===(void 0)&&g.webkit()<500){var j=new Image();j.src=i.src;return j.complete;}return i.complete;}};e.exports=h;},null);
__d("XGraphicPhotoWarningLoggingController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/photos\/graphic_photo\/logging\/",{event:{type:"Enum",required:true,enumType:1}});},null);
__d("GraphicPhotoWarning",["AsyncRequest","CSS","Event","XGraphicPhotoWarningLoggingController","GraphicPhotoWarningConfig"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=b('GraphicPhotoWarningConfig').Events;function l(m){"use strict";i.listen(m.seePhotoButton,'click',function(){h.hide(m.warningOverlay);l.log(k.GRAPHIC_PHOTO_WARNING_DISMISSED);});}l.log=function(event){var m=j.getURIBuilder().setEnum('event',event).getURI();(new g(m)).setAllowCrossPageTransition(true).send();};e.exports=l;},null);
__d("GraphicPhotoWarningMixin",["CSS","DOM","csx","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k=j,l={getGraphicWarningContainer:k,getGraphicWarningHiddenContent:k,_graphicWarningMarkup:null,_graphicWarningOverlay:null,_graphicWarningHiddenContentWrapper:null,initGraphicWarningDOM:function(m){this._graphicWarningMarkup=m;this._graphicWarningOverlay=h.scry(m,"._zjl").pop();this._graphicWarningHiddenContentWrapper=h.scry(m,"._zjn").pop();},showGraphicWarning:function(){this._graphicWarningOverlay&&g.show(this._graphicWarningOverlay);if(this.getGraphicWarningContainer().contains(this._graphicWarningMarkup))return;if(this._graphicWarningHiddenContentWrapper){this.getGraphicWarningContainer().replaceChild(this._graphicWarningMarkup,this.getGraphicWarningHiddenContent());this._graphicWarningHiddenContentWrapper.appendChild(this.getGraphicWarningHiddenContent());}},hideGraphicWarning:function(){if(!this.getGraphicWarningContainer().contains(this._graphicWarningMarkup))return;this.getGraphicWarningContainer().replaceChild(this.getGraphicWarningHiddenContent(),this._graphicWarningMarkup);}};e.exports=l;},null);
__d("PhotoEverstoreLogger",["Event","AsyncRequest","ImageUtils"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();var j={BATCH_WINDOW_MS:500,storedLog:[]};function k(){}Object.assign(k,{_log:function(m){j.storedLog.push(m);if(j.storedLog.length==1)setTimeout(l,j.BATCH_WINDOW_MS);},logImmediately:function(m){k._log(m);},registerForLogging:function(m){var n=document.getElementById(m);if(n!=null)if(i.hasLoaded(n)){k._log(n.src);}else g.listen(n,'load',function(event){k._log(n.src);});}});function l(){var m=j.storedLog;j.storedLog=[];var n=JSON.stringify(m);new h().setURI('/ajax/photos/logging/everstore_logging.php').setData({loggedUrls:n}).setMethod('POST').setOption('suppressErrorHandlerWarning',true).setOption('suppressErrorAlerts',true).send();}e.exports=k;},null);
__d("PhotoSessionLog",["AsyncRequest","Run","URI","Vector"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(){}Object.assign(k,{UNKNOWN:0,ESC:1,X:2,OUTSIDE:3,UNLOAD:4,NAVIGATE:5,AGGREGATE:6,LEAVE:7,PERMALINK:0,SNOWLIFT:6,SNOWDOWN:13,AGGREGATION_COUNT:20,set:null,time:null,views:0,fbidList:[],details:{},width:0,height:0,first:false,last:false,logIds:false,version:null,source:null,buttonLikes:0,pagingAction:'',cycle:false,endOfRelevant:false,relevantCount:0,initLogging:function(l){this.set=null;this.time=new Date();this.views=0;this.hiResLoads=0;this.fullScreenViews={};this.first=true;this.last=false;this.logIds=false;this.version=l;this.buttonLikes=0;this.pagingAction='';this.cycle=false;this.endOfRelevant=false;this.relevantCount=0;this.panoramaClicks=0;this.panoramaImpressions=0;if(l===k.SNOWLIFT){var m=j.getViewportDimensions();this.width=m.x;this.height=m.y;}},setLogFbids:function(l){this.logIds=l;},setPhotoSet:function(l){this.set=l;},addButtonLike:function(){this.buttonLikes++;},setPagingAction:function(l){this.pagingAction=l;},setCycle:function(l){this.cycle=l;},setEndOfRelevant:function(l){this.endOfRelevant=l;},setRelevantCount:function(l){this.relevantCount=l;},setEndMetrics:function(l){this.endMetrics=l;},setSource:function(l){this.source=l;},addPanoramaClick:function(){this.panoramaClicks++;},addPanoramaImpression:function(){this.panoramaImpressions++;},addPhotoView:function(l,m,n){if(this.logIds&&this.views>=this.AGGREGATION_COUNT)this.logPhotoViews(this.AGGREGATE);this.views++;if(l)this.fbidList.push([l.fbid,l.owner,Date.now()]);if(m)this.hiResLoads++;if(n)this.fullScreenViews[l.fbid]=true;},logEnterFullScreen:function(l){this.fullScreenViews[l]=true;},addDetailData:function(l,m){if(!this.details[l])this.details[l]={t:m.num_tags,l:m.has_location,c:m.has_caption,cm:m.comment_count,lk:m.like_count,w:m.width,h:m.height,ad:'{}',p:this.pagingAction};},updateAdData:function(l,m){if(this.details[l])this.details[l].ad=JSON.stringify(m);},logPhotoViews:function(l){if(!this.views)return;if(l!=this.AGGREGATE)this.last=true;var m={set:this.set,time:new Date()-this.time,fbids:this.logIds?this.fbidList:[],details:this.logIds?this.details:{},first:this.first,last:this.last,close:l?l:this.UNKNOWN,button_likes:this.buttonLikes,version:this.version,endmetric:this.endMetrics,cycle:this.cycle,end_relev:this.endOfRelevant,relev_count:this.relevantCount,source:this.source,panorama_clicks:this.panoramaClicks,panorama_impressions:this.panoramaImpressions};if(this.version===k.SNOWLIFT){var n=j.getViewportDimensions();m.width=n.x||this.width;m.height=n.y||this.height;if(this.hiResLoads>0)m.hires_loads=this.hiResLoads;if(this.last){var o=Object.keys(this.fullScreenViews).length;if(o>0)m.fullscreen=o;}}var p=new i('/ajax/photos/logging/session_logging.php').setSubdomain('www');new g().setAllowCrossPageTransition(true).setURI(p).setOption('asynchronous',(l!=k.UNLOAD)).setOption('suppressErrorHandlerWarning',true).setData(m).send();this.views=0;this.hiResLoads=0;this.fbidList=[];this.details={};this.first=false;this.buttonLikes=0;if(this.last){this.set=null;this.logIds=false;this.fullScreenViews={};}}});h.onUnload(function(){k.logPhotoViews(k.UNLOAD);});h.onLeave(function(){k.logPhotoViews(k.LEAVE);});e.exports=k;},null);
__d("PhotoViewerImage",["PhotoEverstoreLogger","URI","Vector"],function(a,b,c,d,e,f,g,h,i){b.__markCompiled&&b.__markCompiled();function j(k){"use strict";this._hiResDimensions=k.hiResDimensions&&i.deserialize(k.hiResDimensions);this._normalDimensions=k.normalDimensions&&i.deserialize(k.normalDimensions);this._info=k.info;this._video=k.video;this._shouldLog=k.everstoreLogThis;this._hiResSrc=k.hiResSrc;this._normalSrc=k.normalSrc;this._thumbSrc=k.thumbSrc;this._isInverted=false;this._data=k;}j.prototype.getURIString=function(){"use strict";return new h(this._info.permalink).getUnqualifiedURI().toString();};j.prototype.hasHiResDimensions=function(){"use strict";return !!this._hiResDimensions;};j.prototype.getHiResDimensions=function(){"use strict";return this._hiResDimensions;};j.prototype.getNormalDimensions=function(){"use strict";return this._normalDimensions;};j.prototype.getHiResSrc=function(){"use strict";return this._hiResSrc;};j.prototype.getNormalSrc=function(){"use strict";return this._normalSrc;};j.prototype.getThumbSrc=function(){"use strict";return this._thumbSrc;};j.prototype.getInfo=function(){"use strict";return this._info;};j.prototype.getPermalink=function(){"use strict";return this._info.permalink;};j.prototype.getHighestResSrc=function(){"use strict";return this._hiResSrc||this._normalSrc;};j.prototype.preload=function(k){"use strict";var l;if(this.getHighestResSrc())if(k&&!this._resource){this._resource=new Image();this._resource.src=this.getHighestResSrc();l=this._resource.src;if(this._shouldLog)g.logImmediately(this._resource.src);}else if(!k&&!this._small){this._small=new Image();this._small.src=this._normalSrc||this._hiResSrc;l=this._small.src;if(this._shouldLog)g.logImmediately(this._small.src);}return l;};j.prototype.setNormalDimensions=function(k,l){"use strict";this._normalDimensions=new i(k,l);};j.prototype.setHiResDimensions=function(k,l){"use strict";this._hiResDimensions=new i(k,l);};j.prototype.invertDimensions=function(){"use strict";if(this.hasHiResDimensions())this._hiResDimensions=new i(this._hiResDimensions.y,this._hiResDimensions.x);this._normalDimensions=new i(this._normalDimensions.y,this._normalDimensions.x);this._isInverted=!this._isInverted;};j.prototype.copy=function(){"use strict";return new j(this._data);};e.exports=j;},null);
__d("PhotosConst",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={VIEWER_PERMALINK:0,VIEWER_SNOWLIFT:6,VIEWER_VAULTBOX:8,VIEWER_SNOWFLAKE:14,VIEWER_COMPOSER:16,VIEWER_CAROUSEL:19,VIEWER_PERMALINK_STRING:'permalink',VIEWER_SNOWLIFT_STRING:'snowlift',VIEWER_VAULTBOX_STRING:'vaultbox',VIEWER_CAROUSEL_STRING:'carousel',BULK_EDITOR:3,BULK_EDITOR_REACT:15,EDITOR_MODAL:17,FLASH_UPLOADER:4,HTML5_UPLOADER:10,SIZE_NORMAL:'n',PIC_NORMAL_FBX_SIZE:180,ALBUM_NAME_MAXLEN:65};e.exports=g;},null);
__d("PhotosUtils",["Vector"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();function h(){}Object.assign(h,{getNearestBox:function(i,j){var k=Infinity,l=null;for(var m in i){var n=i[m];if(n.contains(j)){var o=j.distanceTo(n.getCenter());if(o<k){k=o;l=m;}}}return l;},absoluteToNormalizedPosition:function(i,j){var k=g.getElementPosition(i),l=g.getElementDimensions(i),m=j.sub(k).mul(100/l.x,100/l.y);m.domain='pure';return m;},normalizedToAbsolutePosition:function(i,j){var k=g.getElementPosition(i),l=g.getElementDimensions(i),m=j.mul(l.x/100,l.y/100).add(k);m.domain='document';return m;},isFacebox:function(i){return i.match(/^face:/);},isTag:function(i){return i.match(/^tag:/);}});e.exports=h;},null);
__d("PhotoPermalinkURI",[],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();var g={isValid:function(h){return g.parse(h)!==null;},parse:function(h){if(this.isValidLegacy(h)){var i=h.getQueryData();if(i.fbid)return {photo_id:i.fbid,set_token:i.set};if(i.id&&i.pid)return {photo_id:i.id+':'+i.pid,set_token:i.set};return null;}var j=h.getPath();if(j[j.length-1]==='/')j=j.substring(0,j.length-1);var k=j.split('/');if(k.length>=3&&k[2]==='photos')if(k.length===4&&/^\d+$/.exec(k[3])!==null){return {photo_id:k[3],set_token:null};}else if(k.length===5&&/^\d+$/.exec(k[4])!==null)return {photo_id:k[4],set_token:k[3]};return null;},isValidLegacy:function(h){var i=h.getPath();if(i[i.length-1]==='/')i=i.substring(0,i.length-1);if(i==='/photo.php'||i==='/force_photo/photo.php'||i==='/photo'||i==='/force_photo/photo/index.php'||i==='/photo/index.php'||i==='/force_photo/photo'||i==='/video.php'||i==='/video/video.php')return true;return false;}};e.exports=g;},null);
__d("PhotoStreamCache",["DOM","HTML","PhotoEverstoreLogger","PhotosConst","PhotoViewerImage","Rect","UIPagelet","URI","Vector","createArrayFromMixed","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){b.__markCompiled&&b.__markCompiled();function r(){"use strict";}r.prototype.init=function(s,t,u,v,w){"use strict";this.version=s;this.pageletName=t;this.pageletRootID=u;this.tagSuggestionMode=w;this.bufferSize=r.BUFFER_SIZE;this.fullBucketSize=r.FULL_BUCKET_SIZE;this.initError=false;this.isActive=true;this.usesOpaqueCursor=false;this.usesNonCircularPhotoSet=false;this.reachedLeftEnd=false;this.reachedRightEnd=false;this.leftLock=false;this.rightLock=false;this.useAjaxPipe=true;this.logger=v;this.viewAsUser=null;this.reset();};r.prototype.setViewAs=function(s){"use strict";this.viewAsUser=s;};r.prototype.isInViewAsMode=function(){"use strict";return !!this.viewAsUser;};r.prototype.getViewAsUserId=function(){"use strict";return this.viewAsUser;};r.prototype.getUsesOpaqueCursor=function(){"use strict";return this.usesOpaqueCursor;};r.prototype.isNonCircularPhotoSet=function(){"use strict";return this.usesNonCircularPhotoSet;};r.prototype.setReachedLeftEnd=function(){"use strict";this.reachedLeftEnd=true;};r.prototype.setReachedRightEnd=function(){"use strict";this.reachedRightEnd=true;};r.prototype.hasReachedLeftEnd=function(){"use strict";return this.reachedLeftEnd;};r.prototype.hasReachedRightEnd=function(){"use strict";return this.reachedRightEnd;};r.prototype.nonCircularPhotoSetCanPage=function(s){"use strict";if(!this.isNonCircularPhotoSet())return true;if(s<0)return this.getCursorPos()||!this.hasReachedLeftEnd();if(s>0)return (this.getLength()-1!=this.getCursorPos())||!this.hasReachedRightEnd();return true;};r.prototype.setUseAjaxPipe=function(s){"use strict";this.useAjaxPipe=s;};r.prototype.reset=function(){"use strict";this.cache={image:{},extra:{},html:{}};this.fbidList=[];this.loaded=false;this.allLoaded=false;this.permalinkMap={};this.position=0;this.totalCount=null;this.firstCursor=null;this.firstCursorIndex=null;this.firstOpaqueCursor=null;};r.prototype.waitForInitData=function(){"use strict";this.fbidList.push(r.INIT_PLACEHOLDER);};r.prototype.destroy=function(){"use strict";this.reset();this.isActive=false;};r.prototype.isLoaded=function(){"use strict";return this.loaded;};r.prototype.canPage=function(){"use strict";if(!this.isLoaded())return false;if(this.totalCount!==null)return this.totalCount>1;if(this.usesNonCircularPhotoSet)return true;return this.getLength()>1;};r.prototype.errorInCurrent=function(){"use strict";if(this.initError){return true;}else if(!this.isLoaded())return false;return this.checkErrorAt(this.getCursor());};r.prototype.getLength=function(){"use strict";return this.fbidList.length;};r.prototype.getPhotoSet=function(){"use strict";return this.photoSetQuery.set;};r.prototype.getPhotoSetQuery=function(){"use strict";return this.photoSetQuery;};r.prototype.getCurrentImageData=function(){"use strict";return this.getImageData(this.getCursor());};r.prototype.addViewAsToURI=function(s){"use strict";var t=new n(s);if(this.isInViewAsMode())t.addQueryData({viewas:this.getViewAsUserId()});return t;};r.prototype.getOpaqueCursor=function(s){"use strict";if(this.getImageData(s)){if(this.version===j.VIEWER_VAULTBOX)return this.getImageData(s).getInfo().opaquecursor;return this.getImageData(s).info.opaquecursor;}if(s==this.firstCursor)return this.firstOpaqueCursor;return null;};r.prototype.getImageData=function(s){"use strict";var t=this.getCacheContent(s,r.IMAGE_DATA);if(t)t.info.permalink=this.addViewAsToURI(t.info.permalink);return t;};r.prototype.getCurrentHtml=function(){"use strict";return this.getCacheContent(this.getCursor(),r.HTML);};r.prototype.getCurrentExtraData=function(){"use strict";return this.getCacheContent(this.getCursor(),r.EXTRA);};r.prototype.getCacheContent=function(s,t){"use strict";if(!s||s===r.ERROR_ID||s===r.INIT_PLACEHOLDER)return null;return this.cache[t][s];};r.prototype.getCursorPos=function(){"use strict";return this.position;};r.prototype.getCursor=function(){"use strict";if(this.position>=0&&this.position<this.getLength())return this.fbidList[this.position];return null;};r.prototype.getCursorAt=function(s){"use strict";return this.fbidList[s];};r.prototype.getCursorForURI=function(s){"use strict";return this.permalinkMap[s];};r.prototype.calculatePositionForMovement=function(s){"use strict";var t=this.position+s;if(this.allLoaded){var u=this.getLength();t=(u+t%u)%u;}return t;};r.prototype.isValidMovement=function(s){"use strict";if(!this.isLoaded()||!this.canPage())return false;var t=this.calculatePositionForMovement(s);return this.getCursor()>0||(t>=0&&t<this.getLength());};r.prototype.moveCursor=function(s){"use strict";if(!this.isValidMovement(s))return;this.position=this.calculatePositionForMovement(s);if(s!==0)this.loadMoreIfNeccessary(s>0);};r.prototype.checkErrorAt=function(s){"use strict";if(!this.isLoaded())return false;if(s===r.ERROR_ID)return true;return false;};r.prototype.getRelativeMovement=function(s){"use strict";for(var t=0;t<this.getLength();t++)if(this.fbidList[t]==s)return t-this.position;return null;};r.prototype.preloadImages=function(s){"use strict";var t,u,v=this.getLength(),w=this.cache.image,x=r.BUFFER_SIZE;if(v>x*2){t=(this.position+v-x%v)%v;u=(this.position+x)%v;}else{t=0;u=v-1;}while(t!=u){var y,z=this.fbidList[t],aa=s&&s(w[z]);if(this.version===j.VIEWER_VAULTBOX){y=w[z]&&w[z].preload(aa);}else if(w[z]&&w[z].url)if(aa&&!w[z].resource){w[z].resource=new Image();w[z].resource.src=w[z].url;y=w[z].url;if(w[z].everstoreLogThis===true)i.logImmediately(w[z].resource.src);}else if(!aa&&!w[z].small){w[z].small=new Image();w[z].small.src=w[z].smallurl||w[z].url;y=w[z].small.src;if(w[z].everstoreLogThis===true)i.logImmediately(w[z].small.src);}if(this.logger&&y)this.logger.log(y);t=(t+1)%v;}};r.prototype.loadMoreIfNeccessary=function(s){"use strict";if(this.allLoaded||(s&&this.rightLock)||(!s&&this.leftLock))return;var t=s?1:-1,u=this.position+this.bufferSize*t;if(u<0&&!this.checkErrorAt(this.getEndCursor(false))){this.leftLock=true;this.fetch(this.fullBucketSize,false);}else if(u>this.getLength()&&!this.checkErrorAt(this.getEndCursor(true))){this.rightLock=true;this.fetch(this.fullBucketSize,true);}};r.prototype.getEndCursor=function(s){"use strict";return s?this.fbidList[this.getLength()-1]:this.fbidList[0];};r.prototype.calculateRelativeIndex=function(s,t,u){"use strict";if(!this.totalCount)return null;var v=this.fbidList.indexOf(t),w=this.fbidList.indexOf(u);if(v===-1||w===-1)return null;var x=w-v;return (s+x+this.totalCount)%this.totalCount;};r.prototype.calculateDistance=function(s,t){"use strict";var u=this.fbidList.indexOf(s),v=this.fbidList.indexOf(t);if(u===-1||v===-1)return null;return (v-u+this.getLength())%this.getLength();};r.prototype.fetch=function(s,t){"use strict";var u=this.getEndCursor(t),v=Object.assign({cursor:u,version:this.version,end:this.getEndCursor(!t),fetchSize:t?s:-1*s,relevant_count:this.relevantCount,opaqueCursor:this.getOpaqueCursor(u),tagSuggestionMode:this.tagSuggestionMode},this.photoSetQuery);if(this.isInViewAsMode())v.viewas=this.getViewAsUserId();if(this.totalCount&&this.firstCursorIndex!==null){v.total=this.totalCount;v.cursorIndex=this.calculateRelativeIndex(this.firstCursorIndex,this.firstCursor,u);}var w=q(this.pageletRootID);if(!w){w=g.create('div',{id:this.pageletRootID});g.appendContent(document.body,w);}m.loadFromEndpoint(this.pageletName,w,v,{usePipe:this.useAjaxPipe,automatic:true,jsNonblock:true,crossPage:true});if(!this.useAjaxPipe)this.setUseAjaxPipe(true);};r.prototype.storeToCache=function(s){"use strict";var t={};if(!this.isActive)return t;if('error' in s){this.processErrorResult(s.error);t.error=true;return t;}if('init' in s){this.processInitResult(s.init);t.init={logids:s.init.logids,fbid:s.init.fbid,loggedin:s.init.loggedin,fromad:s.init.fromad};}if('image' in s){this.processImageResult(s.image);t.image=true;}if('data' in s){this.processDataResult(s.data);t.data=true;}return t;};r.prototype.processInitResult=function(s){"use strict";if(this.loaded)return;this.usesOpaqueCursor=s.usesopaquecursor;this.usesNonCircularPhotoSet=s.isnoncircularphotoset;this.loaded=true;this.photoSetQuery=s.query;if(s.bufferSize)this.bufferSize=s.bufferSize;if(s.fullBucketSize)this.fullBucketSize=s.fullBucketSize;if(this.fbidList.length===0){this.fbidList.push(s.fbid);this.rightLock=true;}else{var t=this.fbidList.indexOf(r.INIT_PLACEHOLDER);if(t!=-1)this.fbidList[t]=s.fbid;}this.firstCursor=s.fbid;this.firstOpaqueCursor=s.opaquecursor;if('initIndex' in s&&'totalCount' in s){this.firstCursorIndex=s.initIndex;this.totalCount=s.totalCount;}if(this.version==j.VIEWER_PERMALINK)this.fetch(r.INIT_BUCKET_SIZE,true);};r.prototype.processImageResult=function(s){"use strict";for(var t in s){if(t===this.firstCursor&&s[t].everstoreLogThis)i.logImmediately(s[t].url);if(this.version===j.VIEWER_VAULTBOX){var u=s[t];this.cache.image[t]=new k(u);this.permalinkMap[this.cache.image[t].getURIString()]=t;}else{this.cache.image[t]=s[t];if(s[t].dimensions)this.cache.image[t].dimensions=o.deserialize(s[t].dimensions);if(s[t].originalDimensions)this.cache.image[t].originalDimensions=o.deserialize(s[t].originalDimensions);if(s[t].smalldims)this.cache.image[t].smalldims=o.deserialize(s[t].smalldims);this.permalinkMap[new n(s[t].info.permalink).getUnqualifiedURI().toString()]=t;}}};r.prototype.attachToFbidsList=function(s,t,u){"use strict";if(this.allLoaded)return;if(t===-1){for(var v=s.length-1;v>=0;v--){this.fbidList.unshift(s[v]);this.position++;}this.leftLock=false;}else{for(var w=0;w<s.length;w++)this.fbidList.push(s[w]);this.rightLock=false;}if(u)this.setAllLoaded();};r.prototype.setAllLoaded=function(){"use strict";this.allLoaded=true;if(this.getCursor()===null)this.position=this.calculatePositionForMovement(0);};r.prototype.processDataResult=function(s){"use strict";for(var t in s){if(!this.cache.html[t])this.cache.html[t]={};for(var u in s[t].html){var v=s[t].html[u];if(typeof v==='string')v=h(v).getRootNode();this.cache.html[t][u]=p(v.childNodes);}if(!('extra' in s[t])){this.cache.extra[t]=null;continue;}this.cache.extra[t]={tagRects:{}};if(!Array.isArray(s[t].extra.tagRects))for(var w in s[t].extra.tagRects)if(s[t].extra.tagRects[w])this.cache.extra[t].tagRects[w]=l.deserialize(s[t].extra.tagRects[w]);Object.keys(s[t].extra).forEach(function(x){if(x=='tagRects')return;this.cache.extra[t][x]=s[t].extra[x];}.bind(this));}};r.prototype.processErrorResult=function(s){"use strict";if(!this.isLoaded()){this.initError=true;return;}var t=s.side,u=[r.ERROR_ID];this.attachToFbidsList(u,t);};r.prototype.setTotalCount=function(s){"use strict";this.totalCount=s;};r.prototype.setFirstCursorIndex=function(s){"use strict";this.firstCursorIndex=s;};Object.assign(r,{ERROR:'error',HTML:'html',IMAGE_DATA:'image',EXTRA:'extra',BUFFER_SIZE:3,INIT_BUCKET_SIZE:4,FULL_BUCKET_SIZE:12,ERROR_ID:-1,INIT_PLACEHOLDER:1});e.exports=r;},null);
__d("PhotoViewer",["Bootloader","CSS","DOM","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(){"use strict";this.image=null;this.root=null;this.stream=null;}k.prototype.getEventString=function(l){"use strict";var m=this.getEventPrefix();if(m)return m+'.'+l;return null;};k.prototype.getImage=function(){"use strict";return this.image;};k.prototype.getPosition=function(){"use strict";return this.stream?this.stream.getCursor():null;};k.prototype.getRoot=function(){"use strict";return this.root;};k.prototype.hiliteAllBoxes=function(){"use strict";i.scry(this.stageWrapper,'div.tagsWrapper div.faceBox').forEach(function(l){h.addClass(l,'otherActive');});};k.bootstrap=function(l,m){"use strict";g.loadModules(["PhotoSnowlift"],function(n){n.bootstrap(l,m);});};Object.assign(k.prototype,{getEventPrefix:j.thatReturnsNull,getSourceString:j.thatReturnsNull,getVersionConst:j.thatReturnsNull,getViewerSource:j.thatReturnsNull,getViewerSet:j.thatReturnsNull});e.exports=k;},null);
__d("PhotoTagSearchPivotLogger",["Banzai"],function(a,b,c,d,e,f,g){b.__markCompiled&&b.__markCompiled();var h={};g.subscribe(g.SHUTDOWN,function(){Object.keys(h).forEach(function(l){var m=h[l];Object.keys(m).forEach(function(n){g.post('photo_tag_search_pivot',{source:l,action:n,count:m[n]});});});});var i=/^(perm:)?tag:/,j,k={logImpression:function(l,m){var n=l in h?h[l]:(h[l]={});n[m]=m in n?n[m]+1:1;},logImageImpression:function(l,m,n){if(j!==m){if(n.some(function(o){return i.test(o);}))this.logImpression(l,'image_impression');j=m;}},logPivotImpression:function(l,m){if(i.test(m))this.logImpression(l,'pivot_impression');},logShowMorePhotos:function(){this.logImpression('photoset','show_more_photos');},logHideMorePhotos:function(){this.logImpression('photoset','hide_more_photos');},logSuggestMorePhotos:function(){this.logImpression('photoset','suggest_more_photos');},logMorePhotosNavigation:function(l){g.post('photo_tag_search_pivot',{source:'photoset',action:'more_photos_search',query:l,count:1});}};e.exports=k;},null);