(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-real_name-index"],{"02e3":function(t,a,i){"use strict";i.r(a);var e=i("d98e"),n=i("d950");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("05aa");var u,c=i("f0c5"),s=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"07a26db6",null,!1,e["a"],u);a["default"]=s.exports},"05aa":function(t,a,i){"use strict";var e=i("1fcf"),n=i.n(e);n.a},"0edf":function(t,a,i){"use strict";i.r(a);var e=i("9ea8"),n=i("afb9");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("19aaf");var u,c=i("f0c5"),s=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"4c288824",null,!1,e["a"],u);a["default"]=s.exports},"19aaf":function(t,a,i){"use strict";var e=i("762c"),n=i.n(e);n.a},"1fcf":function(t,a,i){var e=i("f737");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("f2416bee",e,!0,{sourceMap:!1,shadowMode:!1})},"762c":function(t,a,i){var e=i("a124");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("18bdf73c",e,!0,{sourceMap:!1,shadowMode:!1})},"772a":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=e},"9ca2":function(t,a,i){"use strict";var e=i("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("02e3")),o=e(i("cef9")),u={components:{barTitle:n.default},data:function(){return{status:!1}},onLoad:function(){},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{statusTap:function(){this.status?this.status=!1:this.status=!0},btnTap:function(){uni.navigateTo({url:"/pages/real_name/form"})}}};a.default=u},"9ea8":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[t._v("实人认证")])],2),i("v-uni-view",{staticClass:"zaiui-status-image-view"},[t.status?t._e():i("v-uni-image",{attrs:{src:"/static/zaiui/img/non_real_name.png",mode:"widthFix"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.statusTap.apply(void 0,arguments)}}}),t.status?i("v-uni-image",{attrs:{src:"/static/zaiui/img/real_name.png",mode:"widthFix"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.statusTap.apply(void 0,arguments)}}}):t._e()],1),t.status?t._e():i("v-uni-view",{staticClass:"text-black text-xl text-center margin-bottom-sm"},[t._v("您尚未实人认证")]),t.status?i("v-uni-view",{staticClass:"text-black text-lg text-center margin-bottom-sm"},[i("v-uni-text",{staticClass:"margin-right"},[t._v("**鸿")]),i("v-uni-text",[t._v("100***********123")])],1):t._e(),t.status?i("v-uni-view",{staticClass:"text-black text-xl text-center margin-bottom-sm"},[t._v("您已完成实人认证")]):t._e(),t.status?t._e():i("v-uni-view",{staticClass:"text-gray text-center zaiui-content-view"},[t._v("实人认证是由转转合作的第三方提供的一项个人身份认证服务，通过与公安网数据校验并使用全球领先的人脸识别技术，保障个人身份真实性。实人认证后，可提升您在二手交易中的信任值哦。")]),t.status?i("v-uni-view",{staticClass:"text-gray text-center zaiui-content-view"},[t._v("实人认证是由转转合作的第三方提供的一项个人身份认证服务，通过与公安网数据校验并使用全球领先的人脸识别技术，保障个人身份真实性。")]):t._e(),t.status?t._e():i("v-uni-view",{staticClass:"zaiui-btn-view"},[i("v-uni-button",{staticClass:"cu-btn bg-red radius",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnTap.apply(void 0,arguments)}}},[t._v("去认证")])],1)],1)},o=[]},a124:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"uni-page-body[data-v-4c288824]{background:#fff}.zaiui-status-image-view[data-v-4c288824]{position:relative;text-align:center;margin-top:%?90.9?%;margin-bottom:%?18.18?%}.zaiui-status-image-view uni-image[data-v-4c288824]{width:%?472.72?%}.zaiui-content-view[data-v-4c288824]{position:relative;padding:0 %?72.72?%}.zaiui-btn-view[data-v-4c288824]{position:relative;text-align:center;margin-top:%?90.9?%}.zaiui-btn-view .cu-btn[data-v-4c288824]{padding:0 %?45.45?%}body.?%PAGE?%[data-v-4c288824]{background:#fff}",""]),t.exports=a},afb9:function(t,a,i){"use strict";i.r(a);var e=i("9ca2"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},d950:function(t,a,i){"use strict";i.r(a);var e=i("772a"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},d98e:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"zaiui-bar-title-box"},[i("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),i("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),i("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?i("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},f737:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-07a26db6]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-07a26db6]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-07a26db6]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-07a26db6]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-07a26db6]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-07a26db6]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-07a26db6]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a}}]);