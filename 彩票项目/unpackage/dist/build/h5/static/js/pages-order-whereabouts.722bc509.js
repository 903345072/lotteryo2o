(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-whereabouts","components-zaiui-common-basics-orderdetail"],{"0590":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-7f1a2e51]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-7f1a2e51]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-7f1a2e51]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-7f1a2e51]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-7f1a2e51]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-7f1a2e51]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-7f1a2e51]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},"0bb5":function(t,a,e){var i=e("0590");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("de7af67c",i,!0,{sourceMap:!1,shadowMode:!1})},2852:function(t,a,e){"use strict";var i=e("0bb5"),n=e.n(i);n.a},"2de2":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=i},"33ae":function(t,a,e){"use strict";e.r(a);var i=e("c028"),n=e("7db05");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("2852");var c,u=e("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"7f1a2e51",null,!1,i["a"],c);a["default"]=s.exports},"49e0":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"uni-page-body[data-v-7069c4d8]{background:#fff}.content-view-box[data-v-7069c4d8]{position:relative}.content-view-box .font-view[data-v-7069c4d8]{padding:%?18.18?%;line-height:1.7}.content-view-box uni-image[data-v-7069c4d8]{padding-left:%?27.27?%;width:100%}.zaiui-hight-view[data-v-7069c4d8]{width:100%;height:%?36.36?%}body.?%PAGE?%[data-v-7069c4d8]{background:#fff}",""]),t.exports=a},"520c":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("平台交易打款提示")]),e("template",{attrs:{slot:"right"},slot:"right"},[e("v-uni-text",{staticClass:"text-orange"},[t._v("联系客服")])],1)],2),e("v-uni-view",{staticClass:"content-view-box"},[e("v-uni-view",{staticClass:"font-view"},[e("v-uni-text",{staticClass:"text-green cuIcon-title"}),e("v-uni-text",[t._v("平台为卖家打款成功后，卖家会收到来自")]),e("v-uni-text",{staticClass:"text-green"},[t._v("微信支付")]),e("v-uni-text",[t._v("的消息")])],1),e("v-uni-view",{staticClass:"font-view"},[e("v-uni-image",{attrs:{src:"/static/images/home/goods/13.png",mode:"widthFix"}})],1),e("v-uni-view",{staticClass:"font-view"},[e("v-uni-text",{staticClass:"text-green cuIcon-title"}),e("v-uni-text",[t._v("在微信支付的消息中找到")]),e("v-uni-text",{staticClass:"text-green"},[t._v("零钱入账")])],1),e("v-uni-view",{staticClass:"font-view"},[e("v-uni-image",{attrs:{src:"/static/images/home/goods/10.png",mode:"widthFix"}})],1)],1),e("v-uni-view",{staticClass:"zaiui-hight-view"})],1)},o=[]},"7db05":function(t,a,e){"use strict";e.r(a);var i=e("2de2"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},aa32:function(t,a,e){"use strict";var i=e("b233"),n=e.n(i);n.a},ad88:function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("33ae")),o=i(e("45ca")),c={components:{barTitle:n.default},data:function(){return{}},onLoad:function(){},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{}};a.default=c},b233:function(t,a,e){var i=e("49e0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("1734d4fb",i,!0,{sourceMap:!1,shadowMode:!1})},bdba:function(t,a,e){"use strict";e.r(a);var i=e("ad88"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},c028:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[e("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),e("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),e("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?e("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},fd76:function(t,a,e){"use strict";e.r(a);var i=e("520c"),n=e("bdba");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("aa32");var c,u=e("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"7069c4d8",null,!1,i["a"],c);a["default"]=s.exports}}]);