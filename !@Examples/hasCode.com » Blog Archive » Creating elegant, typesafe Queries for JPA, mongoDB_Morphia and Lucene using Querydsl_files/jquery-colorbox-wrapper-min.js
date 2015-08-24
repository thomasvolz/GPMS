var COLORBOX_INTERNAL_LINK_PATTERN=/^#.*/;var COLORBOX_SUFFIX_PATTERN=/\.(?:jpe?g|gif|png|bmp)/i;var COLORBOX_MANUAL="colorbox-manual";var COLORBOX_OFF_CLASS=".colorbox-off";var COLORBOX_LINK_CLASS=".colorbox-link";var COLORBOX_OFF="colorbox-off";var COLORBOX_CLASS_MATCH="colorbox-[0-9]+";jQuery(document).ready(function(){if(Colorbox.autoColorboxJavaScript=="true"){colorboxAddManualClass()}if(Colorbox.colorboxAddClassToLinks=="true"){colorboxAddClassToLinks()}if(Colorbox.autoHideFlash=="true"){colorboxHideFlash();colorboxShowFlash()}colorboxSelector()});(function(a){colorboxShowFlash=function(){a(document).bind("cbox_closed",function(){var c=document.getElementsByTagName("object");for(i=0;i<c.length;i++){c[i].style.visibility="visible"}var b=document.getElementsByTagName("embed");for(i=0;i<b.length;i++){b[i].style.visibility="visible"}})}})(jQuery);(function(a){colorboxHideFlash=function(){a(document).bind("cbox_open",function(){var c=document.getElementsByTagName("object");for(i=0;i<c.length;i++){c[i].style.visibility="hidden"}var b=document.getElementsByTagName("embed");for(i=0;i<b.length;i++){b[i].style.visibility="hidden"}})}})(jQuery);(function(a){colorboxAddClassToLinks=function(){a("a:not(:contains(img))").each(function(d,f){var c=a(f);var b=c.attr("class");if(b!==undefined&&!b.match("colorbox")){var e=c.attr("href");if(e!==undefined&&a(f).attr("href").match(COLORBOX_SUFFIX_PATTERN)){c.addClass("colorbox-link")}}})}})(jQuery);(function(a){colorboxAddManualClass=function(){a("img").each(function(c,e){var d=a(e);var b=d.attr("class");if(b==undefined||!b.match("colorbox")){d.addClass("colorbox-manual")}})}})(jQuery);(function(a){colorboxSelector=function(){a("a:has(img[class*=colorbox-]):not(.colorbox-off)").each(function(b,d){ColorboxLocal=a.extend(true,{},Colorbox);ColorboxLocal.colorboxMaxWidth=ColorboxLocal.colorboxImageMaxWidth;ColorboxLocal.colorboxMaxHeight=ColorboxLocal.colorboxImageMaxHeight;ColorboxLocal.colorboxHeight=ColorboxLocal.colorboxImageHeight;ColorboxLocal.colorboxWidth=ColorboxLocal.colorboxImageWidth;var c=a(d).attr("href");if(c!==undefined&&c.match(COLORBOX_SUFFIX_PATTERN)){colorboxImage(b,d)}else{}});a("a[class*=colorbox-link]").each(function(b,d){ColorboxLocal=a.extend(true,{},Colorbox);var c=a(d).attr("href");if(c!==undefined){colorboxLink(b,d,c)}})}})(jQuery);(function(a){colorboxImage=function(b,g){var d=a(g).find("img:first");var e=a(g).attr("class");if(e!==undefined){ColorboxLocal.colorboxGroupId=e.match(COLORBOX_CLASS_MATCH)||e.match(COLORBOX_MANUAL)}if(!ColorboxLocal.colorboxGroupId){var f=d.attr("class");if(f!==undefined&&!f.match(COLORBOX_OFF)){ColorboxLocal.colorboxGroupId=f.match(COLORBOX_CLASS_MATCH)||f.match(COLORBOX_MANUAL)}if(ColorboxLocal.colorboxGroupId){ColorboxLocal.colorboxGroupId=ColorboxLocal.colorboxGroupId.toString().split("-")[1];if(ColorboxLocal.colorboxGroupId==="manual"){ColorboxLocal.colorboxGroupId="nofollow"}var c=d.attr("title");if(c!==undefined){ColorboxLocal.colorboxTitle=c}colorboxWrapper(g)}}}})(jQuery);(function(a){colorboxLink=function(c,f,e){ColorboxLocal.colorboxGroupId="nofollow";var b=a(f);var d=b.attr("title");if(d!==undefined){ColorboxLocal.colorboxTitle=d}else{ColorboxLocal.colorboxTitle=""}if(e.match(COLORBOX_SUFFIX_PATTERN)){ColorboxLocal.colorboxMaxWidth=ColorboxLocal.colorboxImageMaxWidth;ColorboxLocal.colorboxMaxHeight=ColorboxLocal.colorboxImageMaxHeight;ColorboxLocal.colorboxHeight=ColorboxLocal.colorboxImageHeight;ColorboxLocal.colorboxWidth=ColorboxLocal.colorboxImageWidth}else{ColorboxLocal.colorboxMaxWidth=false;ColorboxLocal.colorboxMaxHeight=false;ColorboxLocal.colorboxHeight=ColorboxLocal.colorboxLinkHeight;ColorboxLocal.colorboxWidth=ColorboxLocal.colorboxLinkWidth;if(e.match(COLORBOX_INTERNAL_LINK_PATTERN)){ColorboxLocal.colorboxInline=true}else{ColorboxLocal.colorboxIframe=true}}colorboxWrapper(f)}})(jQuery);(function(a){colorboxWrapper=function(b){a.each(ColorboxLocal,function(c,d){if(d==="false"){ColorboxLocal[c]=false}else{if(d==="true"){ColorboxLocal[c]=true}}});a(b).colorbox({rel:ColorboxLocal.colorboxGroupId,title:ColorboxLocal.colorboxTitle,maxHeight:ColorboxLocal.colorboxMaxHeight,maxWidth:ColorboxLocal.colorboxMaxWidth,initialHeight:ColorboxLocal.colorboxInitialHeight,initialWidth:ColorboxLocal.colorboxInitialWidth,height:ColorboxLocal.colorboxHeight,width:ColorboxLocal.colorboxWidth,slideshow:ColorboxLocal.colorboxSlideshow,slideshowAuto:ColorboxLocal.colorboxSlideshowAuto,scalePhotos:ColorboxLocal.colorboxScalePhotos,preloading:ColorboxLocal.colorboxPreloading,overlayClose:ColorboxLocal.colorboxOverlayClose,loop:ColorboxLocal.colorboxLoop,escKey:ColorboxLocal.colorboxEscKey,arrowKey:ColorboxLocal.colorboxArrowKey,scrolling:ColorboxLocal.colorboxScrolling,opacity:ColorboxLocal.colorboxOpacity,transition:ColorboxLocal.colorboxTransition,speed:parseInt(ColorboxLocal.colorboxSpeed),slideshowSpeed:parseInt(ColorboxLocal.colorboxSlideshowSpeed),close:ColorboxLocal.colorboxClose,next:ColorboxLocal.colorboxNext,previous:ColorboxLocal.colorboxPrevious,slideshowStart:ColorboxLocal.colorboxSlideshowStart,slideshowStop:ColorboxLocal.colorboxSlideshowStop,current:ColorboxLocal.colorboxCurrent,inline:ColorboxLocal.colorboxInline,iframe:ColorboxLocal.colorboxIframe})}})(jQuery);