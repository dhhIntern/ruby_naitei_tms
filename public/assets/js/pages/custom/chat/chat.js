"use strict";var KTAppChat=function(){var t;return{init:function(){t=KTUtil.getById("kt_chat_aside"),KTUtil.getById("kt_chat_content"),function(){new KTOffcanvas(t,{overlay:!0,baseClass:"offcanvas-mobile",toggleBy:"kt_app_chat_toggle"});var i=KTUtil.find(t,".scroll"),e=KTUtil.find(t,".card-body"),n=KTUtil.find(t,".input-group");i&&KTUtil.scrollInit(i,{mobileNativeScroll:!0,desktopNativeScroll:!1,resetHeightOnDestroy:!0,handleWindowResize:!0,rememberPosition:!0,height:function(){var a;return a=KTUtil.isBreakpointUp("lg")?KTLayoutContent.getHeight():KTUtil.getViewPort().height,t&&(a=(a=a-parseInt(KTUtil.css(t,"margin-top"))-parseInt(KTUtil.css(t,"margin-bottom")))-parseInt(KTUtil.css(t,"padding-top"))-parseInt(KTUtil.css(t,"padding-bottom"))),i&&(a=a-parseInt(KTUtil.css(i,"margin-top"))-parseInt(KTUtil.css(i,"margin-bottom"))),e&&(a=a-parseInt(KTUtil.css(e,"padding-top"))-parseInt(KTUtil.css(e,"padding-bottom"))),n&&(a=(a-=parseInt(KTUtil.css(n,"height")))-parseInt(KTUtil.css(n,"margin-top"))-parseInt(KTUtil.css(n,"margin-bottom"))),a-=2}})}(),KTLayoutChat.setup(KTUtil.getById("kt_chat_content")),KTUtil.getById("kt_app_chat_toggle")&&setTimeout(function(){KTUtil.getById("kt_app_chat_toggle").click()},1e3)}}}();jQuery(document).ready(function(){KTAppChat.init()});