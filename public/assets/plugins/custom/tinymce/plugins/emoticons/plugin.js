!function(n){"use strict";var t,e,o,r,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),u=function(){},a=function(n){return function(){return n}},c=a(!1),l=a(!0),s=function(){return f},f=(t=function(n){return n.isNone()},{fold:function(n,t){return n()},is:c,isSome:c,isNone:l,getOr:o=function(n){return n},getOrThunk:e=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(void 0),or:o,orThunk:e,map:s,each:u,bind:s,exists:c,forall:l,filter:s,equals:t,equals_:t,toArray:function(){return[]},toString:a("none()")}),m=function(n){var t=a(n),e=function(){return r},o=function(t){return t(n)},r={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:l,isNone:c,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return m(t(n))},each:function(t){t(n)},bind:o,exists:o,forall:o,filter:function(t){return t(n)?r:f},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(c,function(t){return e(n,t)})}};return r},g={some:m,none:s,from:function(n){return null==n?f:m(n)}},d=function(n,t){for(var e=n.length,o=new Array(e),r=0;r<e;r++){var i=n[r];o[r]=t(i,r)}return o},y=function(n,t){return-1!==n.indexOf(t)},v=function(n,t){return y(n.title.toLowerCase(),t)||function(n,t){for(var e=0,o=n.length;e<o;e++)if(t(n[e],e))return!0;return!1}(n.keywords,function(n){return y(n.toLowerCase(),t)})},h=function(n,t,e){for(var o=[],r=t.toLowerCase(),i=e.fold(function(){return c},function(n){return function(t){return t>=n}}),u=0;u<n.length&&(0!==t.length&&!v(n[u],r)||(o.push({value:n[u].char,text:n[u].title,icon:n[u].char}),!i(o.length)));u++);return o},p=function(n,t){n.ui.registry.addAutocompleter("emoticons",{ch:":",columns:"auto",minChars:2,fetch:function(n,e){return t.waitForLoad().then(function(){var o=t.listAll();return h(o,n,g.some(e))})},onAction:function(t,e,o){n.selection.setRng(e),n.insertContent(o),t.hide()}})},b=function(n){var t=n;return{get:function(){return t},set:function(n){t=n}}},w=function(){return(w=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}).apply(this,arguments)},O=Object.prototype.hasOwnProperty,C=(r=function(n,t){return t},function(){for(var n=new Array(arguments.length),t=0;t<n.length;t++)n[t]=arguments[t];if(0===n.length)throw new Error("Can't merge zero objects");for(var e={},o=0;o<n.length;o++){var i=n[o];for(var u in i)O.call(i,u)&&(e[u]=r(e[u],i[u]))}return e}),k=Object.keys,j=Object.hasOwnProperty,A=function(n,t){for(var e=k(n),o=0,r=e.length;o<r;o++){var i=e[o];t(n[i],i)}},T=function(n,t){var e={};return A(n,function(n,o){var r=t(n,o);e[r.k]=r.v}),e},_=tinymce.util.Tools.resolve("tinymce.Resource"),D=tinymce.util.Tools.resolve("tinymce.util.Delay"),P=tinymce.util.Tools.resolve("tinymce.util.Promise"),x=function(n,t){return n.getParam("emoticons_database_url",t+"/js/emojis"+n.suffix+".js")},L=function(n){return n.getParam("emoticons_database_id","tinymce.plugins.emoticons","string")},S="All",N={symbols:"Symbols",people:"People",animals_and_nature:"Animals and Nature",food_and_drink:"Food and Drink",activity:"Activity",travel_and_places:"Travel and Places",objects:"Objects",flags:"Flags",user:"User Defined"},E=function(n,t){return e=n,o=t,j.call(e,o)?n[t]:t;var e,o},F=function(n){var t,e=function(n){return n.getParam("emoticons_append",{},"object")}(n);return t=function(n){return w({keywords:[],category:"user"},n)},T(e,function(n,e){return{k:e,v:t(n,e)}})},q=function(t,e,o){var r=b(g.none()),i=b(g.none());t.on("init",function(){_.load(o,e).then(function(n){var e=F(t);!function(n){var t={},e=[];A(n,function(n,o){var r={title:o,keywords:n.keywords,char:n.char,category:E(N,n.category)},i=void 0!==t[r.category]?t[r.category]:[];t[r.category]=i.concat([r]),e.push(r)}),r.set(g.some(t)),i.set(g.some(e))}(C(n,e))},function(t){n.console.log("Failed to load emoticons: "+t),r.set(g.some({})),i.set(g.some([]))})});var u=function(){return i.get().getOr([])},a=function(){return r.get().isSome()&&i.get().isSome()};return{listCategories:function(){return[S].concat(k(r.get().getOr({})))},hasLoaded:a,waitForLoad:function(){return a()?P.resolve(!0):new P(function(t,o){var r=15,i=D.setInterval(function(){a()?(D.clearInterval(i),t(!0)):--r<0&&(n.console.log("Could not load emojis from url: "+e),D.clearInterval(i),o(!1))},100)})},listAll:u,listCategory:function(n){return n===S?u():r.get().bind(function(t){return g.from(t[n])}).getOr([])}}},I=function(t,e){var o,r,i,u={pattern:"",results:h(e.listAll(),"",g.some(300))},a=b(S),c=(o=function(n){!function(n){var t=n.getData(),o=a.get(),r=e.listCategory(o),i=h(r,t.pattern,o===S?g.some(300):g.none());n.setData({results:i})}(n)},r=200,i=null,{cancel:function(){null!==i&&(n.clearTimeout(i),i=null)},throttle:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];null!==i&&n.clearTimeout(i),i=n.setTimeout(function(){o.apply(null,t),i=null},r)}}),l={label:"Search",type:"input",name:"pattern"},s={type:"collection",name:"results"},f=function(){return{title:"Emoticons",size:"normal",body:{type:"tabpanel",tabs:d(e.listCategories(),function(n){return{title:n,name:n,items:[l,s]}})},initialData:u,onTabChange:function(n,t){a.set(t.newTabName),c.throttle(n)},onChange:c.throttle,onAction:function(n,e){"results"===e.name&&(!function(n,t){n.insertContent(t)}(t,e.value),n.close())},buttons:[{type:"cancel",text:"Close",primary:!0}]}},m=t.windowManager.open(f());m.focus("pattern"),e.hasLoaded()||(m.block("Loading emoticons..."),e.waitForLoad().then(function(){m.redial(f()),c.throttle(m),m.focus("pattern"),m.unblock()}).catch(function(n){m.redial({title:"Emoticons",body:{type:"panel",items:[{type:"alertbanner",level:"error",icon:"warning",text:"<p>Could not load emoticons</p>"}]},buttons:[{type:"cancel",text:"Close",primary:!0}],initialData:{pattern:"",results:[]}}),m.focus("pattern"),m.unblock()}))},M=function(n,t){var e=function(){return I(n,t)};n.ui.registry.addButton("emoticons",{tooltip:"Emoticons",icon:"emoji",onAction:e}),n.ui.registry.addMenuItem("emoticons",{text:"Emoticons...",icon:"emoji",onAction:e})};i.add("emoticons",function(n,t){var e=x(n,t),o=L(n),r=q(n,e,o);M(n,r),p(n,r)})}(window);