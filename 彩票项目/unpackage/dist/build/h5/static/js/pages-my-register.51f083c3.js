(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-register","components-zaiui-common-basics-orderdetail"],{"0590":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".zaiui-bar-title-box .cu-bar[data-v-7f1a2e51]{padding-top:0;min-height:calc(0px + %?101?%)}.zaiui-bar-title-box .cu-bar .content[data-v-7f1a2e51]{top:0}.zaiui-bar-title-box .cu-bar .content .cu-tag[data-v-7f1a2e51]{position:relative;top:%?-2.72?%;padding:0 %?5.45?%}.zaiui-bar-title-box .cu-bar .content .cu-tag uni-text[data-v-7f1a2e51]{position:relative;top:%?2?%}.zaiui-bar-title-box .cu-bar.fixed.no-shadow[data-v-7f1a2e51]{box-shadow:inherit}.zaiui-bar-title-box .cu-bar.bg-white[data-v-7f1a2e51]{color:#333}.zaiui-bar-title-box .zaiui-seat-height[data-v-7f1a2e51]{width:100%;height:calc(0px + %?101?%)}",""]),t.exports=a},"0bb5":function(t,a,e){var i=e("0590");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("de7af67c",i,!0,{sourceMap:!1,shadowMode:!1})},"16cd":function(t,a,e){var i=e("599b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("3f8d5a56",i,!0,{sourceMap:!1,shadowMode:!1})},2852:function(t,a,e){"use strict";var i=e("0bb5"),n=e.n(i);n.a},"2de2":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={name:"bar-title",props:{bgColor:{type:String,default:""},isBack:{type:Boolean,default:!0},backText:{type:String,default:""},fixed:{type:Boolean,default:!0},opacity:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1}},methods:{BackPage:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},leftTap:function(){this.$emit("leftTap")},contentTap:function(){this.$emit("contentTap")},rightTap:function(){this.$emit("rightTap")}}};a.default=i},"33ae":function(t,a,e){"use strict";e.r(a);var i=e("c028"),n=e("7db05");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("2852");var c,r=e("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"7f1a2e51",null,!1,i["a"],c);a["default"]=u.exports},"599b":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".zaiui-user-login-avatar-view[data-v-3bd8824e]{position:relative;display:flex;align-items:center;justify-content:center;margin-top:%?218.18?%}.zaiui-user-login-avatar-view .cu-avatar[data-v-3bd8824e]{width:%?181.81?%;height:%?181.81?%}.zaiui-btn-view[data-v-3bd8824e]{position:relative;margin-top:%?72.72?%;padding:0 %?45.45?%}.zaiui-btn-view .cu-btn .icon[data-v-3bd8824e]{position:relative;font-size:%?47.27?%;right:%?9.09?%;top:%?-3.63?%}.zaiui-agreement-checked-view[data-v-3bd8824e]{position:relative;padding:%?27.27?% %?45.45?%}.zaiui-agreement-checked-view .zaiui-checked[data-v-3bd8824e]{position:absolute;-webkit-transform:scale(.7);transform:scale(.7)}.zaiui-agreement-checked-view .text-black-view[data-v-3bd8824e]{padding-left:%?54.54?%;line-height:%?47.27?%}.zaiui-foot-ad-view[data-v-3bd8824e]{position:fixed;text-align:center;bottom:%?72.72?%;width:100%}",""]),t.exports=a},7836:function(t,a,e){"use strict";var i=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e("33ae")),o=i(e("45ca")),c=i(e("a3c4")),r={components:{barTitle:n.default},data:function(){return{src:"",account:"",password:"",repassword:"",invite_code:"",real_name:"",code:"",action:!1,count_down:60,downUrl:""}},onLoad:function(t){this.invite_code=t.code;var a=this;uni.request({url:c.default.config.url+"/common/index/shopInfo",method:"GET",data:{},success:function(t){a.src=t.data.data.logo,a.downUrl=t.data.data.downUrl},fail:function(){},complete:function(){}})},onReady:function(){o.default.setBarColor(!0),uni.pageScrollTo({scrollTop:0,duration:0})},methods:{getText:function(){return 0==this.action?"发送":"重新获取"+this.count_down},sendCode:function(){if(!this.account)return uni.showToast({title:"请填写手机",icon:"error"}),!1;var t=this;uni.request({url:c.default.config.url+"/common/index/sendCode",method:"GET",data:{phone:this.account},success:function(a){t.action=!0,t.countDown()},fail:function(){},complete:function(){}})},countDown:function(){var t=this;this.timer=setInterval((function(){t.count_down=t.count_down-1,t.count_down<10&&(t.count_down="0"+t.count_down),t.count_down<=0&&(clearInterval(t.timer),t.count_down=60,t.action=!1)}),1e3)},login:function(){var t=this,a=this;uni.request({url:c.default.config.url+"/common/index/register",method:"POST",data:{account:a.account,password:a.password,invite_code:a.invite_code,repassword:a.repassword,code:a.code,real_name:a.real_name},success:function(a){200==a.data.code?window.location.href=t.downUrl:uni.showToast({title:a.data.msg,icon:"error"})},fail:function(){},complete:function(){}})}}};a.default=r},"7db05":function(t,a,e){"use strict";e.r(a);var i=e("2de2"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"8c21":function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("bar-title",{attrs:{bgColor:"bg-white",isBack:!0},on:{rightTap:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[e("template",{attrs:{slot:"content"},slot:"content"},[t._v("注册")])],2),e("v-uni-view",{staticClass:"zaiui-user-login-avatar-view"},[e("v-uni-image",{staticClass:"cu-avatar round lg",attrs:{src:t.src}})],1),e("v-uni-view",{staticStyle:{margin:"30rpx 0"}},[e("v-uni-input",{staticStyle:{background:"#EEEEEE",padding:"20rpx 10rpx",height:"90rpx",margin:"0 50rpx"},attrs:{focus:"true",placeholder:"输入手机号"},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}}),e("v-uni-input",{staticStyle:{background:"#EEEEEE",padding:"20rpx 10rpx",height:"90rpx",margin:"0 50rpx","margin-top":"20rpx"},attrs:{placeholder:"输入密码",type:"password"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("v-uni-input",{staticStyle:{background:"#EEEEEE",padding:"20rpx 10rpx",height:"90rpx",margin:"0 50rpx","margin-top":"20rpx"},attrs:{placeholder:"再次输入密码",type:"password"},model:{value:t.repassword,callback:function(a){t.repassword=a},expression:"repassword"}}),e("v-uni-input",{staticStyle:{background:"#EEEEEE",padding:"20rpx 10rpx",height:"90rpx",margin:"0 50rpx","margin-top":"20rpx"},attrs:{placeholder:"输入邀请码"},model:{value:t.invite_code,callback:function(a){t.invite_code=a},expression:"invite_code"}}),e("v-uni-input",{staticStyle:{background:"#EEEEEE",padding:"20rpx 10rpx",height:"90rpx",margin:"0 50rpx","margin-top":"20rpx"},attrs:{placeholder:"输入昵称"},model:{value:t.real_name,callback:function(a){t.real_name=a},expression:"real_name"}}),e("v-uni-view",{staticStyle:{position:"relative"}},[e("v-uni-input",{staticStyle:{background:"#EEEEEE",padding:"20rpx 10rpx",height:"90rpx",margin:"0 50rpx","margin-top":"20rpx",position:"relative"},attrs:{placeholder:"输入短信验证码"},model:{value:t.code,callback:function(a){t.code=a},expression:"code"}}),e("v-uni-button",{staticStyle:{position:"absolute",right:"50rpx",bottom:"5rpx","background-color":"#007AFF",color:"white"},attrs:{disabled:t.action},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.sendCode()}}},[t._v(t._s(t.getText()))])],1)],1),e("v-uni-view",{staticClass:"flex flex-direction zaiui-btn-view",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.login()}}},[e("v-uni-button",{staticClass:"cu-btn bg-red"},[e("v-uni-text",[t._v("注册")])],1)],1)],1)},o=[]},"93bd":function(t,a,e){"use strict";var i=e("16cd"),n=e.n(i);n.a},a9855:function(t,a,e){"use strict";e.r(a);var i=e("8c21"),n=e("d255");for(var o in n)"default"!==o&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("93bd");var c,r=e("f0c5"),u=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"3bd8824e",null,!1,i["a"],c);a["default"]=u.exports},c028:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"zaiui-bar-title-box",style:{opacity:1==t.opacity?0:1}},[e("v-uni-view",{staticClass:"cu-bar",class:[t.fixed?"fixed":"",t.shadow?"":"no-shadow",t.bgColor]},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),e("v-uni-text",[t._v(t._s(t.backText))])],1):t._e(),t.isBack?t._e():e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.leftTap.apply(void 0,arguments)}}},[t._t("left")],2),e("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.contentTap.apply(void 0,arguments)}}},[t._t("content")],2),e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.rightTap.apply(void 0,arguments)}}},[t._t("right")],2)],1),t.fixed?e("v-uni-view",{staticClass:"zaiui-seat-height"}):t._e()],1)},o=[]},d255:function(t,a,e){"use strict";e.r(a);var i=e("7836"),n=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a}}]);