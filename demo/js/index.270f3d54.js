(function(t){function e(e){for(var o,s,r=e[0],d=e[1],l=e[2],p=0,c=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&c.push(n[s][0]),n[s]=0;for(o in d)Object.prototype.hasOwnProperty.call(d,o)&&(t[o]=d[o]);u&&u(e);while(c.length)c.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],o=!0,r=1;r<i.length;r++){var d=i[r];0!==n[d]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var o={},n={index:0},a=[];function s(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=o,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=d;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("0dbb")},"0dbb":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-app-bar",{attrs:{app:""}},[i("v-toolbar-title",{staticClass:"headline text-uppercase"},[i("span",{staticStyle:{color:"#fff","font-weight":"700"}},[t._v("Vue")]),i("span",{staticStyle:{color:"red","font-weight":"700"}},[t._v(" Dashboard")])]),i("v-spacer"),i("v-btn",{attrs:{text:"",href:"https://github.com/hauerp/vue-dashboard",target:"_blank"}},[i("span",{staticClass:"mr-2",staticStyle:{color:"#fff","font-weight":"400"}},[t._v("Latest Release")])])],1),i("v-content",[i("HelloWorld")],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vue-dashboard",{attrs:{option:t.DashboardConfig},on:{"update:option":function(e){t.DashboardConfig=e},SaveOption:function(e){return t.console.log(e)}}})},r=[],d=(i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("2fa7")),l={Title:"Dashboard",Layout:[{id:"widget-000001",Title:"Day",type:"Short",Permission:"00001",position:{x:0,y:0,w:3,h:2},hidden:!1,pinned:!1,data:{Value:"1000"}},{id:"widget-000002",Title:"Month",type:"Short",Permission:"00002",position:{x:3,y:0,w:3,h:2},hidden:!1,pinned:!1,data:{}},{id:"widget-000003",Title:"Year",type:"Short",Permission:"00003",position:{x:6,y:0,w:3,h:2},hidden:!1,pinned:!1,data:{}},{id:"widget-000004",Title:"All",type:"Short",Permission:"00004",position:{x:9,y:0,w:3,h:2},hidden:!1,pinned:!1,data:{Value:"200"}},{id:"widget-000005",Title:"Char",type:"Chart",Permission:"00005",position:{x:0,y:2,w:6,h:5},hidden:!1,pinned:!1,data:{}},{id:"widget-000006",Title:"Line",type:"Chart",Permission:"00006",position:{x:0,y:7,w:12,h:5},hidden:!1,pinned:!1,data:{}},{id:"widget-000007",Title:"Fine",type:"Chart",Permission:"00007",position:{x:6,y:2,w:6,h:5},hidden:!1,pinned:!1,data:{}}]};function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(i,!0).forEach((function(e){Object(d["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var c={data:function(){return{DashboardConfig:p({},l)}}},g=c,h=i("2877"),f=Object(h["a"])(g,s,r,!1,null,null,null),v=f.exports,b={name:"App",components:{HelloWorld:v},data:function(){return{}}},y=b,m=(i("a937"),i("6544")),x=i.n(m),w=i("7496"),C=i("40dc"),_=i("8336"),L=i("a75b"),S=i("2fa4"),z=i("2a7f"),T=Object(h["a"])(y,n,a,!1,null,null,null),$=T.exports;x()(T,{VApp:w["a"],VAppBar:C["a"],VBtn:_["a"],VContent:L["a"],VSpacer:S["a"],VToolbarTitle:z["a"]});var W=i("94ae"),O=i("f309");o["default"].use(O["a"]);var P=new O["a"]({icons:{iconfont:"mdi"}}),B=i("5f5b");i("f9e3"),i("2dd8"),i("15f5");o["default"].use(B["a"]),o["default"].use(W["a"]),o["default"].config.productionTip=!1,new o["default"]({vuetify:P,render:function(t){return t($)}}).$mount("#app")},"1cc2":function(t,e,i){},"94ae":function(t,e,i){"use strict";(function(t){i("99af"),i("4de4"),i("7db0"),i("4160"),i("c975"),i("a15b"),i("d81d"),i("4e82"),i("4ec9"),i("a9e3"),i("d3b7"),i("e25e"),i("6062"),i("3ca3"),i("159b"),i("ddb0");var o=function(t,e){return Object.assign({},t,e)},n=function(t,e){return o(t,{position:Object.assign({},t.position,e)})},a=function(t,e){return t.x<e.x+e.w&&t.x+t.w>e.x&&t.y<e.y+e.h&&t.y+t.h>e.y},s=function(t,e){for(var i=0;i<t.length;i++)if(a(t[i].position,e))return!1;return!0},r=function(t,e){do{e=n(e,{y:e.position.y-1})}while(s(t,e.position)&&e.position.y>=0);return n(e,{y:e.position.y+1})},d=function(t,e,i){i&&(e=r(t,e));while(!s(t,e.position))e=n(e,{y:e.position.y+1});return e},l=function(t){return[].concat(t).sort((function(t,e){return t.hidden&&!e.hidden?1:!t.hidden&&e.hidden?-1:t.pinned&&!e.pinned?-1:!t.pinned&&e.pinned?1:t.position.y<e.position.y?-1:t.position.y>e.position.y?1:t.position.x<e.position.x?-1:t.position.x>e.position.x?1:0}))},u=function(t){t=l(t);var e=[];return t.forEach((function(t){e.push(r(e,t))})),e},p=function(t,e,i,o){return void 0===i&&(i=0),void 0===o&&(o=0),{x:t.x*e.w+t.x*i+o,y:t.y*e.h+t.y*i+o,w:t.w*e.w+(t.w-1)*i,h:t.h*e.h+(t.h-1)*i}},c=function(t,e){var i=Element.prototype,o=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(t){return-1!==[].indexOf.call(document.querySelectorAll(t),this)};return o.call(t,e)},g=function(t){for(var e=0;e<t.length;e++)for(var i=e+1;i<t.length;i++)if(a(t[e].position,t[i].position))return!0;return!1},h=function(t,e){t=l(t);var i=[];return t.forEach((function(t){i.push(d(i,t,e))})),i},f={props:{option:null,IsSetting:{type:Boolean,default:!1}},data:function(){return{Title:"",Value:0}},created:function(){void 0!=this.option&&(this.Title=this.option.Title,void 0===this.option.data&&(this.option.data={}),this.Value=this.option.data.Value)},updated:function(){void 0!=this.option&&(this.Title=this.option.Title,void 0===this.option.data&&(this.option.data={}),this.Value=this.option.data.Value)},watch:{option:function(t){void 0!==t&&(this.Title=t.Title,void 0===t.data&&(t.data={}),this.Value=t.data.Value)}}};function v(t,e,i,o,n,a,s,r,d,l){"boolean"!==typeof s&&(d=r,r=s,s=!1);var u,p="function"===typeof i?i.options:i;if(t&&t.render&&(p.render=t.render,p.staticRenderFns=t.staticRenderFns,p._compiled=!0,n&&(p.functional=!0)),o&&(p._scopeId=o),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,d(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=u):e&&(u=s?function(){e.call(this,l(this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),u)if(p.functional){var c=p.render;p.render=function(t,e){return u.call(e),c(t,e)}}else{var g=p.beforeCreate;p.beforeCreate=g?[].concat(g,u):[u]}return i}var b=v,y="undefined"!==typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function m(t){return function(t,e){return C(t,e)}}var x=document.head||document.getElementsByTagName("head")[0],w={};function C(t,e){var i=y?e.media||"default":t,o=w[i]||(w[i]={ids:new Set,styles:[]});if(!o.ids.has(t)){o.ids.add(t);var n=e.source;if(e.map&&(n+="\n/*# sourceURL="+e.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",e.media&&o.element.setAttribute("media",e.media),x.appendChild(o.element)),"styleSheet"in o.element)o.styles.push(n),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n");else{var a=o.ids.size-1,s=document.createTextNode(n),r=o.element.childNodes;r[a]&&o.element.removeChild(r[a]),r.length?o.element.insertBefore(s,r[a]):o.element.appendChild(s)}}}var _=m,L=f,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hau-widget widget-short"},[t.IsSetting?i("div",{staticClass:"widget-setting"},[i("h3",[t._v(t._s(t.option.Title))]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"form-group col-6"},[i("label",{attrs:{for:"widget-name"}},[t._v("Default")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.option.data["Value"],expression:"option.data['Value']"}],staticClass:"form-control",attrs:{id:"widget-name"},domProps:{value:t.option.data["Value"]},on:{input:function(e){e.target.composing||t.$set(t.option.data,"Value",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group col-6"},[i("label",{attrs:{for:"widget-permission"}},[t._v("Unit")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.option.data.Unit,expression:"option.data.Unit"}],staticClass:"form-control",attrs:{id:"widget-permission"},domProps:{value:t.option.data.Unit},on:{input:function(e){e.target.composing||t.$set(t.option.data,"Unit",e.target.value)}}})])])]):i("div",{staticClass:"widget-display"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("h5",{staticClass:"card-title text-uppercase text-muted mb-0"},[t._v(t._s(t.Title))]),t._v(" "),i("span",{staticClass:"h2 font-weight-bold mb-0"},[t._v(t._s(t.Value))])]),t._v(" "),t._m(0)]),t._v(" "),i("p",{staticClass:"mt-3 mb-0 text-muted text-sm"},[i("span",{staticClass:"text-success mr-2"},[i("i",{staticClass:"fa fa-arrow-up"}),t._v(" "+t._s(t.option.data["Value"])+"%\n      ")]),t._v(" "),i("span",{staticClass:"text-nowrap"})])])])},z=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-auto"},[i("div",{staticClass:"icon"},[i("i",{staticClass:"fas fa-calendar fa-2x"})])])}],T=function(t){t&&t("data-v-8b4db290_0",{source:".widget-short{height:100%;width:100%}.widget-short .widget-display{border:1px solid #aaa;border-left:15px solid #aaa;color:#00f!important;padding:0 10px!important}.widget-short .icon{background:wheat;border:1px solid wheat;border-radius:60px;height:60px;width:60px;text-align:center;line-height:69px}",map:void 0,media:void 0})},$=void 0,W=void 0,O=!1,P=b({render:S,staticRenderFns:z},T,L,$,O,W,_,void 0),B={props:{option:null,IsSetting:{type:Boolean,default:!1}},data:function(){return{Title:"",Value:0}},created:function(){void 0!=this.option&&(this.Title=this.option.Title,void 0===this.option.data&&(this.option.data={}),this.Value=this.option.data.Value)},updated:function(){void 0!=this.option&&(this.Title=this.option.Title,void 0===this.option.data&&(this.option.data={}),this.Value=this.option.data.Value)},watch:{option:function(t){void 0!==t&&(this.Title=t.Title,void 0===t.data&&(t.data={}),this.Value=t.data.Value)}}},k=B,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hau-widget widget-base"},[t.IsSetting?i("div",{staticClass:"widget-setting"},[i("h3",[t._v(t._s(t.option.Title))])]):i("div",{staticClass:"widget-display"},[i("h3",[t._v(t._s(t.option.Title))])])])},E=[],I=function(t){t&&t("data-v-28ac14fe_0",{source:".widget-base .widget-display{border:1px solid #00f}",map:void 0,media:void 0})},R=void 0,j=void 0,H=!1,N=b({render:V,staticRenderFns:E},I,k,R,H,j,_,void 0),U={props:{option:null,IsSetting:{type:Boolean,default:!1}},data:function(){return{Title:"",Value:0}},created:function(){void 0!=this.option&&(this.Title=this.option.Title,void 0===this.option.data&&(this.option.data={}),this.Value=this.option.data.Value)},updated:function(){void 0!=this.option&&(this.Title=this.option.Title,void 0===this.option.data&&(this.option.data={}),this.Value=this.option.data.Value)},watch:{option:function(t){void 0!==t&&(this.Title=t.Title,void 0===t.data&&(t.data={}),this.Value=t.data.Value)}}},D=U,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hau-widget widget-chart"},[t.IsSetting?i("div",{staticClass:"widget-setting"},[i("h3",[t._v(t._s(t.option.Title))]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"form-group col-6"},[i("label",{attrs:{for:"widget-hidden"}},[t._v("Hide Header")]),t._v(" "),i("b-form-checkbox",{attrs:{switch:""},model:{value:t.option.data["HideHeader"],callback:function(e){t.$set(t.option.data,"HideHeader",e)},expression:"option.data['HideHeader']"}},[t.option.data["HideHeader"]?i("span",[t._v("Hide")]):i("span",[t._v("Show")])])],1),t._v(" "),i("div",{staticClass:"form-group col-6"},[i("label",{attrs:{for:"widget-name"}},[t._v("Default")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.option.data["value"],expression:"option.data['value']"}],staticClass:"form-control",attrs:{id:"widget-name"},domProps:{value:t.option.data["value"]},on:{input:function(e){e.target.composing||t.$set(t.option.data,"value",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group col-6"},[i("label",{attrs:{for:"widget-permission"}},[t._v("Unit")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.option.data["Unit"],expression:"option.data['Unit']"}],staticClass:"form-control",attrs:{id:"widget-permission"},domProps:{value:t.option.data["Unit"]},on:{input:function(e){e.target.composing||t.$set(t.option.data,"Unit",e.target.value)}}})])])]):i("div",{staticClass:"widget-display"},[t.option.data["HideHeader"]?t._e():i("div",{staticClass:"chart-title"},[t._v(t._s(t.option.Title))]),t._v(" "),i("div",{staticClass:"chart-body",class:{"hide-header":t.option.data["HideHeader"]}}),t._v(" "),i("div",{staticClass:"chart-bottom"})])])},A=[],F=function(t){t&&t("data-v-eaf170fe_0",{source:".widget-chart .widget-display{padding:0!important;border:1px solid #aaa}.widget-chart .chart-title{line-height:50px;padding:5px;background:#f8f9fc;border-bottom:3px solid #aaa;font-weight:700!important;font-size:1rem;color:#00f!important;height:50px;width:100%}.widget-chart .chart-body{height:calc(100% - 50px);width:100%}.widget-chart .chart-body.hide-header{height:100%!important}",map:void 0,media:void 0})},X=void 0,Y=void 0,J=!1,q=b({render:M,staticRenderFns:A},F,D,X,J,Y,_,void 0),G={WidgetShort:P,WidgetBase:N,WidgetChart:q},K={components:Object.assign({},G),props:{boxId:{required:!0},dragSelector:{type:String,default:"*"},draggable:{type:Boolean,default:!1}},data:function(){return{container:null,dragging:!1,resizing:!1,type:"Base",data:{}}},computed:{style:function(){if(this.container&&this.container.isBoxVisible(this.boxId)){var t=this.container.getPixelPositionById(this.boxId);return{display:"block",width:t.w+"px",height:t.h+"px",transform:"translate("+t.x+"px, "+t.y+"px)"}}return{display:"none"}},classes:function(){return{"widget-box":!0,dragging:this.dragging,resizing:this.resizing}}},methods:{findContainer:function(){var t=this;while(t.$parent)if(t=t.$parent,st.has(t))return t;return null}},mounted:function(){var t=this;if(this.container=this.findContainer(),!this.container)throw new Error("Can not find container");this.container.registerBox(this),this.data=this.container.getBoxLayoutById(this.boxId),void 0!==this.data.type&&(this.type=this.data.type),this.$dragHandle=this.$el||this.$refs.dragHandle,this.$dragHandle.addEventListener("mousedown",(function(e){if(c(e.target,t.dragSelector)){e.preventDefault(),t.dragging=!0,t.$emit("dragStart");var i=e.clientX,o=e.clientY,n=function e(n){window.removeEventListener("mouseup",e,!0),window.removeEventListener("mousemove",a,!0),t.dragging=!1;var s={x:n.clientX-i,y:n.clientY-o};t.$emit("dragEnd",{offset:s})},a=function(e){var n={x:e.clientX-i,y:e.clientY-o};t.$emit("dragUpdate",{offset:n})};window.addEventListener("mouseup",n,!0),window.addEventListener("mousemove",a,!0)}})),this.$resizeHandle=this.$refs.resizeHandle,this.$resizeHandle&&this.$resizeHandle.addEventListener("mousedown",(function(e){e.preventDefault(),e.stopPropagation(),t.resizing=!0,t.$emit("resizeStart");var i=e.clientX,o=e.clientY,n=function e(n){window.removeEventListener("mouseup",e,!0),window.removeEventListener("mousemove",a,!0),t.resizing=!1;var s={x:n.clientX-i,y:n.clientY-o};t.$emit("resizeEnd",{offset:s})},a=function(e){var n={x:e.clientX-i,y:e.clientY-o};t.$emit("resizeUpdate",{offset:n})};window.addEventListener("mouseup",n,!0),window.addEventListener("mousemove",a,!0)}))},beforeDestroy:function(){this.container&&this.container.unregisterBox(this)}},Q=K,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"dragHandle",class:t.classes,style:t.style},[t.draggable?i("i",{staticClass:"fa fa-arrows fa-2x widget-move",attrs:{"aria-hidden":"true"}}):t._e(),t._v(" "),t._t("default",[i("Widget"+t.type,{tag:"component",attrs:{option:t.data}})]),t._v(" "),i("div",{ref:"resizeHandle",staticClass:"resize-handle"})],2)},tt=[],et=function(t){t&&t("data-v-598d61b8_0",{source:".widget-box{background:#fff;position:absolute;z-index:1;box-sizing:border-box;padding:0}.widget-box .hau-widget{height:100%;width:100%}.widget-box .hau-widget .widget-display{height:100%;width:100%;padding:10px}.widget-box .widget-move{position:absolute;top:5px;right:5px;z-index:10;display:none}.widget-box:hover .widget-move{display:block}.widget-box:hover .widget-move:hover{cursor:move}.widget-box.dragging,.widget-box.resizing{z-index:2;opacity:.7}.widget-box:not(.dragging):not(.resizing){transition:transform ease-out .1s,width ease-out .1s,height ease-out .1s}.widget-box .resize-handle{position:absolute;right:-5px;bottom:-5px;width:15px;height:15px;cursor:se-resize}",map:void 0,media:void 0})},it=void 0,ot=void 0,nt=!1,at=b({render:Z,staticRenderFns:tt},et,Q,it,nt,ot,_,void 0),st=new Set,rt={components:{WidgetBox:at},props:{layout:{type:Array,required:!0},dragSelector:{type:String,default:".widget-move"},maxColumnCount:{type:Number,default:12},maxRowCount:{type:Number,default:1/0},margin:{type:Number,default:5},outerMargin:{type:Number,default:0},bubbleUp:{type:Boolean,default:!1},autoAddLayoutForNewBox:{type:Boolean,required:!1,default:!0},defaultSize:{type:Object,required:!1,default:function(){return{w:1,h:1}}},fixLayoutOnLoad:{type:Boolean,required:!1,default:!0}},watch:{layout:function(t){this.fixLayoutOnLoad&&g(t)&&this.updateLayout(h(t,this.bubbleUp))}},data:function(){return{placeholder:{hidden:!0,position:{x:0,y:0,w:1,h:1}},dragging:{boxLayout:null,offset:{x:0,y:0}},resizing:{boxLayout:null,offset:{x:0,y:0}},cellSize:{w:60,h:60},isMounted:!1}},computed:{layoutSort:function(){return this.layout.sort((function(t,e){return t.id.localeCompare(e.id)}))},style:function(){return{}},pinnedLayout:function(){return this.layout.filter((function(t){return t.pinned}))},layoutMap:function(){var t=new Map;return this.layout.forEach((function(e){t.set(e.id,e)})),t}},methods:{getBoxLayoutById:function(t){return"::placeholder::"===t?this.placeholder:this.layoutMap.get(t)},getPixelPositionById:function(t){if(this.dragging.boxLayout&&this.dragging.boxLayout.id===t){var e=p(this.dragging.boxLayout.position,this.cellSize,this.margin,this.outerMargin);return e.x+=this.dragging.offset.x,e.y+=this.dragging.offset.y,e}if(this.resizing.boxLayout&&this.resizing.boxLayout.id===t){var i=p(this.resizing.boxLayout.position,this.cellSize,this.margin,this.outerMargin);return i.w+=this.resizing.offset.x,i.h+=this.resizing.offset.y,i}var o=this.getBoxLayoutById(t);return p(o.position,this.cellSize,this.margin,this.outerMargin)},isBoxVisible:function(t){var e=this.getBoxLayoutById(t);return e&&!e.hidden},getPositionByPixel:function(t,e){return{x:Math.round(t/(this.cellSize.w+this.margin)),y:Math.round(e/(this.cellSize.h+this.margin))}},updateLayout:function(t){this.$emit("update:layout",t)},registerBox:function(t){this.enableResizing(t),this.enableDragging(t),this.isMounted&&this.autoAddLayoutForNewBox&&this.createBoxLayout(t.$props.boxId)},unregisterBox:function(t){},enableDragging:function(t){var e,i=this,o=!1,a=function(t,e){return t+i.dragging.boxLayout.position.w>i.maxColumnCount?t=i.maxColumnCount-i.dragging.boxLayout.position.w:t<0&&(t=0),e+i.dragging.boxLayout.position.h>i.maxRowCount?e=i.maxRowCount-i.dragging.boxLayout.position.h:e<0&&(e=0),{targetX:t,targetY:e}};t.$on("dragStart",(function(n){var a=i.getBoxLayoutById(t.boxId);a.pinned||(o=!0,i.dragging.boxLayout=a,i.placeholder=Object.assign({},i.dragging.boxLayout),e=l(i.layout),i.$emit("drag:start",e))})),t.$on("dragUpdate",(function(t){if(o){i.dragging.offset.x=t.offset.x,i.dragging.offset.y=t.offset.y;var r=i.getPositionByPixel(t.offset.x,t.offset.y);if(s(i.pinnedLayout,Object.assign({},i.dragging.boxLayout.position,{x:i.dragging.boxLayout.position.x+r.x,y:i.dragging.boxLayout.position.y+r.y}))){var l=a(i.dragging.boxLayout.position.x+r.x,i.dragging.boxLayout.position.y+r.y),p=l.targetX,c=l.targetY;if(i.placeholder.position.x!==p||i.placeholder.position.y!==c){i.placeholder=n(i.placeholder,{x:p,y:c});var g=[i.placeholder];e.forEach((function(t){t.id!==i.dragging.boxLayout.id&&g.push(d(g,t,i.bubbleUp))})),i.bubbleUp&&(g=u(g),i.placeholder=g.find((function(t){return t.id===i.dragging.boxLayout.id}))),i.updateLayout(g),i.$emit("drag:update",g)}}}})),t.$on("dragEnd",(function(t){if(o){var r=i.getPositionByPixel(t.offset.x,t.offset.y);if(s(i.pinnedLayout,Object.assign({},i.dragging.boxLayout.position,{x:i.dragging.boxLayout.position.x+r.x,y:i.dragging.boxLayout.position.y+r.y}))){var l=a(i.dragging.boxLayout.position.x+r.x,i.dragging.boxLayout.position.y+r.y),p=l.targetX,c=l.targetY;i.placeholder=n(i.placeholder,{x:p,y:c})}i.dragging.boxLayout=n(i.dragging.boxLayout,{x:i.placeholder.position.x,y:i.placeholder.position.y});var g=[i.dragging.boxLayout];e.forEach((function(t){t.id!==i.dragging.boxLayout.id&&g.push(d(g,t,i.bubbleUp))})),i.bubbleUp&&(g=u(g)),i.updateLayout(g),i.dragging.boxLayout=null,i.dragging.offset.x=0,i.dragging.offset.y=0,i.placeholder.hidden=!0,o=!1,i.$emit("drag:end",g),i.$emit("UpdateLayout")}}))},enableResizing:function(t){var e,i=this,o=!1,a=function(t,e){return i.resizing.boxLayout.position.x+t>i.maxColumnCount?t=i.maxColumnCount-i.resizing.boxLayout.position.x:t<1&&(t=1),i.resizing.boxLayout.position.y+e>i.maxRowCount?e=i.maxRowCount-i.resizing.boxLayout.position.y:e<1&&(e=1),{targetW:t,targetH:e}};t.$on("resizeStart",(function(n){var a=i.getBoxLayoutById(t.boxId);a.pinned||(o=!0,i.resizing.boxLayout=a,i.placeholder=Object.assign({},i.resizing.boxLayout),e=l(i.layout),i.$emit("resize:start",e))})),t.$on("resizeUpdate",(function(t){if(o){i.resizing.offset.x=t.offset.x,i.resizing.offset.y=t.offset.y;var r=i.getPositionByPixel(t.offset.x,t.offset.y);if(s(i.pinnedLayout,Object.assign({},i.resizing.boxLayout.position,{w:i.resizing.boxLayout.position.w+r.x,h:i.resizing.boxLayout.position.h+r.y}))){var l=a(i.resizing.boxLayout.position.w+r.x,i.resizing.boxLayout.position.h+r.y),p=l.targetW,c=l.targetH;if(i.placeholder.position.w!==p||i.placeholder.position.h!==c){i.placeholder=n(i.placeholder,{w:p,h:c});var g=[i.placeholder];e.forEach((function(t){t.id!==i.resizing.boxLayout.id&&g.push(d(g,t,i.bubbleUp))})),i.bubbleUp&&(g=u(g),i.placeholder=g.find((function(t){return t.id===i.resizing.boxLayout.id}))),i.updateLayout(g),i.$emit("resize:update",g)}}}})),t.$on("resizeEnd",(function(t){if(o){var r=i.getPositionByPixel(t.offset.x,t.offset.y);if(s(i.pinnedLayout,Object.assign({},i.resizing.boxLayout.position,{w:i.resizing.boxLayout.position.w+r.x,h:i.resizing.boxLayout.position.h+r.y}))){var l=a(i.resizing.boxLayout.position.w+r.x,i.resizing.boxLayout.position.h+r.y),p=l.targetW,c=l.targetH;i.placeholder=n(i.placeholder,{w:p,h:c})}i.resizing.boxLayout=n(i.resizing.boxLayout,{w:i.placeholder.position.w,h:i.placeholder.position.h});var g=[i.resizing.boxLayout];e.forEach((function(t){t.id!==i.resizing.boxLayout.id&&g.push(d(g,t,i.bubbleUp))})),i.bubbleUp&&(g=u(g)),i.updateLayout(g),i.resizing.boxLayout=null,i.resizing.offset.x=0,i.resizing.offset.y=0,i.placeholder.hidden=!0,i.$emit("resize:end",g),i.$emit("UpdateLayout")}}))},createBoxLayout:function(){var t=this,e=[],i=arguments.length;while(i--)e[i]=arguments[i];if(e=e.filter((function(e){return!t.getBoxLayoutById(e)})),e.length){var o=[].concat(this.layout);e.forEach((function(e){o.push(d(o,{id:e,hidden:!1,position:Object.assign({},{x:0,y:0},t.defaultSize)},t.bubbleUp))})),this.updateLayout(o)}},WindowResize:function(t){if(void 0!=this.$refs.dashboard){var e=parseInt((this.$refs.dashboard.clientWidth-11*this.margin)/12);this.cellSize={w:e,h:this.cellSize.h}}}},created:function(){st.add(this)},mounted:function(){var t;this.isMounted=!0;var e=this.$children.map((function(t){return t.$props.boxId}));(t=this).createBoxLayout.apply(t,e),this.$nextTick((function(){this.WindowResize(),window.addEventListener("resize",this.WindowResize)}))},beforeDestroy:function(){st.delete(this),window.removeEventListener("resize",this.WindowResize)}},dt=rt,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"dashboard",staticClass:"dashboard-container",style:t.style},[t._t("default",t._l(t.layoutSort,(function(e){return i("WidgetBox",{key:e.id,attrs:{dragSelector:t.dragSelector,boxId:e.id,draggable:!1===e.pinned&&"*"!==t.dragSelector}})}))),t._v(" "),i("WidgetBox",{staticClass:"placeholder",attrs:{dragSelector:t.dragSelector,boxId:"::placeholder::"}})],2)},ut=[],pt=function(t){t&&t("data-v-564e8352_0",{source:".dashboard-container{position:relative;transition:min-width ease-out .1s,min-height ease-out .1s}.dashboard-container .widget-box.placeholder{border:1px dashed #000;background:0 0;z-index:0}.dashboard-container .widget-box.placeholder{transition:none!important}",map:void 0,media:void 0})},ct=void 0,gt=void 0,ht=!1,ft=b({render:lt,staticRenderFns:ut},pt,dt,ct,ht,gt,_,void 0),vt={components:Object.assign({},G,{DashboardContainer:ft}),props:{option:null},computed:{GetWidgetType:function(){return"Widget"+this.CurrentWidget.type}},data:function(){return{IsShowCode:!1,IsShowView:!1,CountWidget:0,CurrentWidget:null,ReRender:0}},created:function(){void 0===this.option&&(this.option={}),void 0===this.option.Title&&(this.option.Title="Dashboard"),void 0===this.option.Layout?(this.option.Layout=[],this.AddWidget()):(this.CountWidget=this.option.Layout.length,this.CurrentWidget=this.option.Layout[0])},methods:{GetCodeNew:function(){var t=this.CountWidget+1+"",e=5-t.length;do{t="0"+t,e--}while(e>0);return t},checkCollision:function(t,e){return t.x===e.x&&t.y===e.y||t.x<e.x+e.w&&t.x+t.w>e.x&&t.y<e.y+e.h&&t.y+t.h>e.y},GetPositionNew:function(){var t=this,e=0,i=!1,o={x:0,y:0,w:4,h:2};do{for(var n=0;n<13;n++)if(o={x:n,y:e,w:4,h:2},i=!0,this.CountWidget>0&&this.option.Layout.forEach((function(e){if(t.checkCollision(o,e.position))return i=!1,!1})),i)break;if(i)break;e++}while(!i);return o},AddWidget:function(){var t=this.GetCodeNew();this.CurrentWidget={id:"widget-0"+t,Title:"widget New : "+t,type:"Base",Permission:t,position:this.GetPositionNew(),hidden:!1,pinned:!1},this.option.Layout.push(this.CurrentWidget),this.CountWidget++}}},bt=vt,yt=function(){var t=this,e=this,i=e.$createElement,o=e._self._c||i;return o("div",{staticClass:"dashboard-setting"},[e.IsShowCode?o("div",{key:"Code"+e.CountWidget+"_"+e.ReRender,staticClass:"row"},[o("div",{staticClass:"col-12",staticStyle:{padding:"5px 15px"}},[o("button",{staticClass:"btn btn-warning btn-sm",on:{click:function(t){e.IsShowCode=!1}}},[e._v("Hide code")])]),e._v(" "),o("div",{staticClass:"col-12",staticStyle:{padding:"5px 15px"}},[o("textarea",{staticClass:"form-control",attrs:{disabled:"",rows:"15"},domProps:{innerHTML:e._s(e.option)}})])]):e.IsShowView?o("div",{key:"Code"+e.CountWidget+"_"+e.ReRender,staticClass:"row"},[o("div",{staticClass:"col-12",staticStyle:{padding:"5px 15px"}},[o("button",{staticClass:"btn btn-warning btn-sm",on:{click:function(){t.ReRender++,t.IsShowView=!1}}},[e._v("Hide View")])]),e._v(" "),o("div",{staticClass:"col-12"},[o("div",{staticStyle:{padding:"5px 1px",height:"500px",overflow:"auto"}},[o("DashboardContainer",{attrs:{dragSelector:"*",layout:e.option.Layout},on:{"update:layout":function(t){return e.$set(e.option,"Layout",t)}}})],1)])]):o("div",{key:"Setting"+e.CountWidget+"_"+e.ReRender,staticClass:"row"},[o("div",{staticClass:"col-lg-4"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.option.Title,expression:"option.Title"}],staticClass:"form-control",attrs:{placeholder:"Name of dashboard"},domProps:{value:e.option.Title},on:{input:function(t){t.target.composing||e.$set(e.option,"Title",t.target.value)}}}),e._v(" "),o("div",{staticClass:"row",staticStyle:{"margin-top":"5px","margin-bottom":"5px"}},[o("div",{staticClass:"col-4"},[o("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(t){return e.AddWidget()}}},[e._v("Add widget")])]),e._v(" "),o("div",{staticClass:"col-4"},[o("button",{staticClass:"btn btn-warning btn-sm",on:{click:function(t){e.IsShowCode=!0}}},[e._v("Show code")])]),e._v(" "),o("div",{staticClass:"col-4"},[o("button",{staticClass:"btn btn-warning btn-sm",on:{click:function(t){e.IsShowView=!0}}},[e._v("Show view")])])]),e._v(" "),o("ul",{key:"ListWidget"+e.CountWidget+"_"+e.ReRender,staticClass:"widgets"},e._l(this.option.Layout,(function(t){return o("li",{key:t.Key,class:{active:t.id===e.CurrentWidget.id},on:{click:function(i){e.CurrentWidget=t}}},[e._v(e._s(t.Title))])})),0)]),e._v(" "),o("div",{key:"SettingWidget"+e.CountWidget+"_"+e.ReRender,staticClass:"col"},[o("div",{staticClass:"row"},[o("div",{staticClass:"form-group col-6"},[o("label",{attrs:{for:"widget-name"}},[e._v("Name widget :")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.CurrentWidget.Title,expression:"CurrentWidget.Title"}],staticClass:"form-control",attrs:{id:"widget-name"},domProps:{value:e.CurrentWidget.Title},on:{input:function(t){t.target.composing||e.$set(e.CurrentWidget,"Title",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-6"},[o("label",{attrs:{for:"widget-permission"}},[e._v("Code:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.CurrentWidget.Permission,expression:"CurrentWidget.Permission"}],staticClass:"form-control",attrs:{id:"widget-permission",disabled:""},domProps:{value:e.CurrentWidget.Permission},on:{input:function(t){t.target.composing||e.$set(e.CurrentWidget,"Permission",t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group col-6"},[o("label",{attrs:{for:"widget-hidden"}},[e._v("Visit widget")]),e._v(" "),o("b-form-checkbox",{attrs:{id:"widget-hidden",switch:""},model:{value:e.CurrentWidget.hidden,callback:function(t){e.$set(e.CurrentWidget,"hidden",t)},expression:"CurrentWidget.hidden"}},[e.CurrentWidget.hidden?o("span",[e._v("Hide")]):o("span",[e._v("Show")])])],1),e._v(" "),o("div",{staticClass:"form-group col-6"},[o("label",{attrs:{for:"widget-pinned"}},[e._v("Pinned widget")]),e._v(" "),o("b-form-checkbox",{attrs:{id:"widget-pinned",switch:""},model:{value:e.CurrentWidget.pinned,callback:function(t){e.$set(e.CurrentWidget,"pinned",t)},expression:"CurrentWidget.pinned"}},[e.CurrentWidget.pinned?o("span",[e._v("Pinned")]):o("span",[e._v("Not Pinned")])])],1)]),e._v(" "),o("fieldset",{staticStyle:{"max-height":"400px","min-height":"250px","overflow-y":"auto","overflow-x":"hidden"}},[o("legend",[e._v("Setting Data")]),e._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"form-group col-6"},[o("label",{attrs:{for:"widget-type"}},[e._v("Type widget")]),e._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.CurrentWidget.type,expression:"CurrentWidget.type"}],staticClass:"form-control",attrs:{id:"widget-type"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));e.$set(e.CurrentWidget,"type",t.target.multiple?i:i[0])},function(t){e.ReRender++}]}},e._l(["Base","Short","Chart"],(function(t){return o("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})),0)]),e._v(" "),o("div",{staticClass:"form-group col-12"},[o(e.GetWidgetType,{key:e.CurrentWidget.Key,tag:"component",attrs:{option:e.CurrentWidget,IsSetting:!0}})],1)])])])])])},mt=[],xt=function(t){t&&t("data-v-0b1bb17d_0",{source:".dashboard-setting{padding:10px}.dashboard-setting .widgets{list-style:none;padding:0;margin:0;border:1px solid #ccc;overflow:auto;max-height:calc(100% - 80px);height:calc(100% - 80px)}.dashboard-setting .widgets li{padding:5px;font-weight:700}.dashboard-setting .widgets .active,.dashboard-setting .widgets li:hover{cursor:pointer;background:#6f50fa;color:#fff}.dashboard-setting fieldset{display:block;margin-left:2px;margin-right:2px;padding-top:.35em;padding-bottom:.625em;padding-left:.75em;padding-right:.75em;border:1px groove #ccc}.dashboard-setting legend{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;display:block;padding-left:5px;padding-right:5px;border:none}",map:void 0,media:void 0})},wt=void 0,Ct=void 0,_t=!1,Lt=b({render:yt,staticRenderFns:mt},xt,bt,wt,_t,Ct,_,void 0),St={components:{DashboardContainer:ft,DashboardSetting:Lt},props:{option:null},mounted:{},data:function(){return{OprionTemp:{},IndexDashboard:0,IsShowSetting:!1}},created:function(){null==this.option&&(this.option={},this.$emit("option:update",this.option))},methods:{ShowSetting:function(){this.OprionTemp=JSON.parse(JSON.stringify(this.option)),this.IsShowSetting=!0},SaveSetting:function(){this.option={},this.option=JSON.parse(JSON.stringify(this.OprionTemp)),this.$emit("SaveOption",this.OprionTemp),this.IndexDashboard++,this.ClosePopup()},ClosePopup:function(){this.OprionTemp={},this.IsShowSetting=!1}}},zt=St,Tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hauerp-vue-dashboard"},[t.IsShowSetting?i("div",{staticClass:"popup-dashboard-setting"},[i("div",{staticClass:"popup-body"},[i("DashboardSetting",{attrs:{option:t.OprionTemp}}),t._v(" "),i("div",{staticClass:"popup-bottom"},[i("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return t.SaveSetting()}}},[t._v("Save")]),t._v(" "),i("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:function(e){return t.ClosePopup()}}},[t._v("Close")])])],1)]):t._e(),t._v(" "),i("h2",{staticStyle:{"padding-left":"5px"}},[i("i",{staticClass:"fa fa-dashboard"}),t._v(" "),t.option&&void 0!==t.option.Title?i("span",[t._v(t._s(t.option.Title))]):i("span",[t._v("Dashboard")]),t._v(" "),i("button",{staticClass:"btn btn-primary btn-sm btn-setting-dashboard",attrs:{type:"button"},on:{click:function(e){return t.ShowSetting()}}},[i("i",{staticClass:"fas fa-cog"}),t._v(" Setting")])]),t._v(" "),i("DashboardContainer",{key:t.IndexDashboard,attrs:{layout:t.option.Layout},on:{"update:layout":function(e){return t.$set(t.option,"Layout",e)}}})],1)},$t=[],Wt=function(t){t&&t("data-v-5bcaf019_0",{source:".hauerp-vue-dashboard{width:100%;height:100%;padding:5px;min-height:400px;background:#f8f9fe}.popup-dashboard-setting{position:fixed;top:0;left:0;z-index:100;width:100%;height:100%;background-color:rgba(0,0,0,.7)}.popup-dashboard-setting .popup-body{clear:both;width:80%;margin:70px auto;background:#fff}.popup-bottom{padding:10px;text-align:right}",map:void 0,media:void 0})},Ot=void 0,Pt=void 0,Bt=!1,kt=b({render:Tt,staticRenderFns:$t},Wt,zt,Ot,Bt,Pt,_,void 0);function Vt(t){Vt.installed||(Vt.installed=!0,t.component("VueDashboard",kt))}Vt.install=Vt;var Et=null;"undefined"!==typeof window?Et=window.Vue:"undefined"!==typeof t&&(Et=t.vue),Et&&Et.use(Vt),e["a"]=Vt}).call(this,i("c8ba"))},a937:function(t,e,i){"use strict";var o=i("1cc2"),n=i.n(o);n.a}});
//# sourceMappingURL=index.270f3d54.js.map