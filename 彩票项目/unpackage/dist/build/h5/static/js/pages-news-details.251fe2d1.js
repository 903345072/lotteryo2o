(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-news-details","components-zaiui-common-basics-orderdetail"],{"0590":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-7f1a2e51]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-7f1a2e51]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-7f1a2e51]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-7f1a2e51]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-7f1a2e51]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-7f1a2e51]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-7f1a2e51]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=i},"0bb5":function(t,i,a){var e=a("0590");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("de7af67c",e,!0,{sourceMap:!1,shadowMode:!1})},"18b5":function(t,i,a){var e=a("9beb");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("0ca703a8",e,!0,{sourceMap:!1,shadowMode:!1})},2852:function(t,i,a){"use strict";var e=a("0bb5"),n=a.n(e);n.a},"2c8a":function(t,i,a){"use strict";a.r(i);var e=a("902f"),n=a("51fd");for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("ad10");var o,c=a("f0c5"),u=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"01729a4e",null,!1,e["a"],o);i["default"]=u.exports},"2de2":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};i.default=e},"33ae":function(t,i,a){"use strict";a.r(i);var e=a("c028"),n=a("7db05");for(var s in n)"default"!==s&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("2852");var o,c=a("f0c5"),u=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"7f1a2e51",null,!1,e["a"],o);i["default"]=u.exports},"51fd":function(t,i,a){"use strict";a.r(i);var e=a("873f"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},"7db05":function(t,i,a){"use strict";a.r(i);var e=a("2de2"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},"873f":function(t,i,a){"use strict";var e=a("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("33ae")),s=e(a("45ca")),o={components:{barTitle:n.default},data:function(){return{bg_img:"/static/images/home/goods/1.png",content:{}}},onLoad:function(){},onReady:function(){s.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{}};i.default=o},"902f":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[a("template",{attrs:{slot:"content"},slot:"content"},[t._v("小资生活神器")]),a("template",{attrs:{slot:"right"},slot:"right"},[a("v-uni-text",{staticClass:"cuIcon-forward"})],1)],2),a("v-uni-view",{staticClass:"text-black text-bold text-lg zaiui-title"},[t._v("提升幸福感的居家好物")]),a("v-uni-view",{staticClass:"text-gray text-sm text-right margin-lr zaiui-right-text"},[a("v-uni-text",[t._v("浏览38439")]),a("v-uni-text",[t._v("关注38439")])],1),a("v-uni-view",{staticClass:"content-view-box"},[a("v-uni-view",{staticClass:"font-view"},[t._v("早买早享受，细数宅家必备的那些提升幸福感的小家电!\n\t\t\t随着现在人们的生活水平逐渐提高，人们对自己的生活质\n\t\t\t量也越来越重视。大部分都希望自己生活在一个幸福，健\n\t\t\t康，卫生，高质量，高品质又充满快乐的一个环境中。")]),a("v-uni-view",{staticClass:"font-view"},[t._v("不过想要提高自己的幸福指数，并不是只能靠一些奢侈而\n\t\t\t又华贵的家具。今天小编就给大家分享-些小编自己爱不\n\t\t\t释手同时又好用不贵，方便实惠的居家好物，希望能够帮\n\t\t\t助大家提升居家幸福感!")]),a("v-uni-view",{staticClass:"font-view"},[a("v-uni-image",{attrs:{src:"/static/images/home/goods/13.png",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"font-view"},[t._v("想不想在每天早上都拥有可口的早餐呢，那就快入手这款\n\t\t\t三明治机吧，十分的简单、方便、好操作。不仅节省了很\n\t\t\t多时间，长期来看也节省了不少金钱成本!轻松按一下就\n\t\t\t可以拥有可口美味的早餐啦!")]),a("v-uni-image",{attrs:{src:"/static/images/home/goods/10.png",mode:"widthFix"}})],1),a("v-uni-view",{staticClass:"zaiui-hight-view"}),a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-black text-lg"},[t._v("全部评论 75")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-red"},[a("v-uni-text",{staticClass:"cuIcon-hot"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("按热度")])],1),a("v-uni-view",{staticClass:"margin-left"},[a("v-uni-text",{staticClass:"cuIcon-time"}),a("v-uni-text",{staticClass:"margin-left-xs"},[t._v("按时间")])],1)],1)],1),a("v-uni-view",{staticClass:"zaiui-comment-box"},[a("v-uni-view",{staticClass:"zaiui-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(/static/images/avatar/1.jpg)"}})],1),a("v-uni-view",{staticClass:"basis-9"},[a("v-uni-view",{staticClass:"text-black"},[t._v("仔仔")]),a("v-uni-view",{staticClass:"text-gray text-sm tag-text"},[a("v-uni-text",[t._v("第4楼")]),a("v-uni-text",[t._v("1天前")])],1),a("v-uni-view",{staticClass:"margin-tb"},[t._v("X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢")])],1)],1),a("v-uni-view",{staticClass:"text-lg text-gray text-right tools-icon-view"},[a("v-uni-text",{staticClass:"cuIcon-comment"}),a("v-uni-text",{staticClass:"cuIcon-appreciate"},[t._v("20")])],1)],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"zaiui-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(/static/images/avatar/2.jpg)"}})],1),a("v-uni-view",{staticClass:"basis-9"},[a("v-uni-view",{staticClass:"text-black"},[t._v("仔仔")]),a("v-uni-view",{staticClass:"text-gray text-sm tag-text"},[a("v-uni-text",[t._v("第3楼")]),a("v-uni-text",[t._v("2天前")])],1),a("v-uni-view",{staticClass:"margin-tb"},[t._v("X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢")])],1)],1),a("v-uni-view",{staticClass:"text-lg text-gray text-right tools-icon-view"},[a("v-uni-text",{staticClass:"cuIcon-comment"}),a("v-uni-text",{staticClass:"cuIcon-appreciate"},[t._v("4")])],1)],1),a("v-uni-view",{staticClass:"zaiui-border-view"}),a("v-uni-view",{staticClass:"zaiui-view-box"},[a("v-uni-view",{staticClass:"flex flex-wrap"},[a("v-uni-view",{staticClass:"basis-1"},[a("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(/static/images/avatar/3.jpg)"}})],1),a("v-uni-view",{staticClass:"basis-9"},[a("v-uni-view",{staticClass:"text-black"},[t._v("仔仔")]),a("v-uni-view",{staticClass:"text-gray text-sm tag-text"},[a("v-uni-text",[t._v("第2楼")]),a("v-uni-text",[t._v("3天前")])],1),a("v-uni-view",{staticClass:"margin-tb"},[t._v("X真的是我觉得性价比最高的机器了，大小合适，全面屏操作流畅，灰色也很漂亮，超喜欢")])],1)],1),a("v-uni-view",{staticClass:"text-lg text-gray text-right tools-icon-view"},[a("v-uni-text",{staticClass:"cuIcon-comment"}),a("v-uni-text",{staticClass:"cuIcon-appreciate"},[t._v("6")])],1)],1)],1),a("v-uni-view",{staticClass:"foot-hight-view"}),a("v-uni-view",{staticClass:"bg-white zaiui-footer-fixed zaiui-foot-padding-bottom"},[a("v-uni-view",{staticClass:"flex flex-direction"},[a("v-uni-button",{staticClass:"cu-btn bg-red"},[t._v("我也有话说")])],1)],1)],1)},s=[]},"9beb":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,'uni-page-body[data-v-01729a4e]{background:#fff}.zaiui-title[data-v-01729a4e]{margin:%?36.36?% %?27.27?%}.zaiui-right-text uni-text[data-v-01729a4e]{position:relative}.zaiui-right-text uni-text + uni-text[data-v-01729a4e]{margin-left:%?18.18?%}.zaiui-right-text uni-text + uni-text[data-v-01729a4e]:after{content:" ";position:absolute;width:%?2?%;height:%?18.18?%;border-left:%?2?% solid;top:%?3.63?%;left:%?-9.09?%}.content-view-box[data-v-01729a4e]{position:relative}.content-view-box .font-view[data-v-01729a4e]{padding:%?27.27?%;line-height:1.7}.content-view-box uni-image[data-v-01729a4e]{width:100%}.zaiui-hight-view[data-v-01729a4e]{width:100%;height:%?36.36?%;background:#fafafa}.solid-bottom[data-v-01729a4e]::after{border-bottom:%?2?% solid rgba(0,0,0,.1)}.zaiui-view-box[data-v-01729a4e]{position:relative;padding:%?18.18?% %?27.27?%}.zaiui-view-box .flex .basis-1[data-v-01729a4e]{flex-basis:10%}.zaiui-view-box .flex .basis-9[data-v-01729a4e]{flex-basis:90%}.zaiui-comment-box .zaiui-border-view[data-v-01729a4e]{position:relative;background:#efebeb;margin:%?18.18?% %?27.27?%;height:%?2?%}.zaiui-comment-box .basis-9[data-v-01729a4e]{padding-left:%?18.18?%}.zaiui-comment-box .tag-text[data-v-01729a4e]{position:relative}.zaiui-comment-box .tag-text uni-text[data-v-01729a4e]{position:relative}.zaiui-comment-box .tag-text uni-text + uni-text[data-v-01729a4e]{margin-left:%?18.18?%}.zaiui-comment-box .tag-text uni-text + uni-text[data-v-01729a4e]:after{content:" ";position:absolute;width:%?2?%;height:%?18.18?%;border-left:%?2?% solid;top:%?3.63?%;left:%?-9.09?%}.zaiui-comment-box .tools-icon-view .cuIcon-comment[data-v-01729a4e]:before, .zaiui-comment-box .tools-icon-view .cuIcon-appreciate[data-v-01729a4e]:before{position:relative;margin-right:%?9.09?%;font-size:%?40?%;top:%?3.63?%}.zaiui-comment-box .tools-icon-view uni-text + uni-text[data-v-01729a4e]{margin-left:%?36.36?%}.zaiui-footer-fixed[data-v-01729a4e]{box-shadow:0 %?-3.63?% %?10.9?% 0 #eaeaea}.zaiui-footer-fixed .flex-direction[data-v-01729a4e]{padding:%?18.18?% %?27.27?%}.foot-hight-view[data-v-01729a4e]{width:100%;height:%?154.54?%;background:#fafafa}body.?%PAGE?%[data-v-01729a4e]{background:#fff}',""]),t.exports=i},ad10:function(t,i,a){"use strict";var e=a("18b5"),n=a.n(e);n.a},c028:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[a("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),a("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),a("v-uni-view",{staticClass:"content",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?a("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},s=[]}}]);