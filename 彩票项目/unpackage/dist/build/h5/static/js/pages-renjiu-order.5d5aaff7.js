(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-renjiu-order"],{1804:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("bar-title",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"content"},slot:"content"},[e._v("投注单")])],2),i("v-uni-view",{staticStyle:{display:"flex",width:"100%","justify-content":"space-around","margin-top":"30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","background-color":"white",width:"90%","justify-content":"center",padding:"10rpx 0","border-radius":"10rpx"}},[i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{"font-weight":"bold","margin-right":"10rpx"}}),i("v-uni-view",{staticStyle:{"font-weight":"bold"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack()}}},[e._v("添加赛事")])],1)],1),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center","margin-top":"20rpx"}},[i("v-uni-image",{staticStyle:{height:"30rpx",width:"680rpx"},attrs:{src:n("79bf")}})],1),i("v-uni-view",{staticStyle:{width:"100%",display:"flex","justify-content":"center"}},[i("v-uni-view",{staticStyle:{"background-color":"white",width:"655rpx","margin-top":"-20rpx","box-shadow":"11rpx 2rpx 15rpx 12rpx #DCDCDC"}},e._l(e.check_game,(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center","border-bottom":"1px dashed #acacac",padding:"20rpx 0"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-around",width:"100%",padding:"20rpx 0"}},[i("v-uni-view",{staticStyle:{width:"250rpx",display:"flex","align-items":"center","justify-content":"space-around","font-size":"25rpx"}},[i("v-uni-view",[e._v("周"+e._s(t["week"])+e._s(t["suffix_num"]))]),i("v-uni-view",[e._v(e._s(t["h_name"]))])],1),i("v-uni-view",[e._v("VS")]),i("v-uni-view",{staticStyle:{width:"250rpx",display:"flex","align-items":"center","justify-content":"space-around","font-size":"25rpx"}},[i("v-uni-view",[e._v(e._s(t["a_name"]))]),i("v-uni-view",{staticClass:"cuIcon-roundclose",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteItem(n)}}})],1)],1),i("v-uni-view",{staticStyle:{"background-color":"#f3f3f3",width:"90%",height:"70rpx",display:"flex","justify-content":"center","align-items":"center",color:"#4e90f7","font-size":"26rpx"}},e._l(t["bet"],(function(t,n){return i("v-uni-view",{key:n,staticStyle:{display:"flex",padding:"0 6rpx"}},[e._v(e._s(t["name"]))])})),1)],1)})),1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"center",position:"relative"}},[i("v-uni-image",{staticStyle:{height:"100rpx",width:"655rpx"},attrs:{src:n("258b")}}),"sfc"==this.type?i("v-uni-text",[e.check_game.length<14?i("v-uni-text",{staticStyle:{position:"absolute",left:"280rpx",top:"15rpx",color:"grey","font-size":"25rpx"}},[e._v("您还需选"+e._s(14-e.check_game.length)+"场比赛")]):e._e()],1):e._e(),"renjiu"==this.type?i("v-uni-text",[e.check_game.length<9?i("v-uni-text",{staticStyle:{position:"absolute",left:"280rpx",top:"15rpx",color:"grey","font-size":"25rpx"}},[e._v("您还需选"+e._s(9-e.check_game.length)+"场比赛")]):e._e()],1):e._e()],1),i("payorder",{ref:"orderpop_",attrs:{amount:e.getPlzh().length*e.bei*2,shop_money:this.shop_money,bei:e.bei,check_game:e.getPlzh(),mode:1,chuan_arr:e.chuan_arr,game_type:e.type},on:{closeopendoor:function(t){arguments[0]=t=e.$handleEvent(t),e.closeopendoor()}}}),i("v-uni-view",{staticStyle:{width:"100%",height:"200rpx"}}),i("v-uni-view",{staticStyle:{position:"fixed",left:"0",right:"0",bottom:"0","background-color":"white","z-index":"999",display:"flex","flex-direction":"column"}},[i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center","border-top":"2px solid #EEEEEE","padding-top":"20rpx","padding-left":"30rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[i("v-uni-text",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.cancel()}}},[e._v("投")]),i("v-uni-view",{staticStyle:{"background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","margin-left":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.subBei()}}},[e._v("一")]),i("v-uni-input",{staticStyle:{background:"#EEEEEE",width:"50rpx",margin:"0 5rpx",height:"50rpx","text-align":"center"},attrs:{type:"number"},on:{blur:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur_(e.bei)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.starBlur(t,3)}},model:{value:e.bei,callback:function(t){e.bei=t},expression:"bei"}}),i("v-uni-view",{staticClass:"cuIcon-add",staticStyle:{color:"#000000","background-color":"#EEEEEE",height:"50rpx","text-align":"center",width:"50rpx","line-height":"50rpx","margin-right":"20rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addBei()}}}),i("v-uni-text",{staticStyle:{"margin-right":"20rpx"}},[e._v("倍")])],1)],1),i("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center",padding:"10rpx 20rpx"}},[i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","align-items":"center"}},[i("v-uni-view",{staticStyle:{"font-size":"25rpx"}},[i("v-uni-text",[e._v("共")]),i("v-uni-text",[e._v(e._s(e.getPlzh().length)+"注")]),i("v-uni-text",[e._v(e._s(e.bei)+"倍")]),i("v-uni-text",[e._v(e._s(e.getPlzh().length*e.bei*2)+"元")])],1),0==e.getExpectMaxAward()?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 0.00元")]):e._e(),e.getExpectMaxAward()==e.getExpectMinAward()&&e.getExpectMinAward()>0?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 "+e._s(e.getExpectMinAward())+"元")]):e._e(),e.getExpectMaxAward()>0&&e.getExpectMaxAward()!=e.getExpectMinAward()?i("v-uni-view",{staticStyle:{color:"red","font-size":"25rpx"}},[e._v("预测奖金 "+e._s(e.getExpectMinAward())+" ~ "+e._s(e.getExpectMaxAward()))]):e._e()],1),i("v-uni-view",[i("v-uni-view",{staticStyle:{display:"inline-block",background:"linear-gradient(to right,#97e2e2,#ffaaff)",padding:"10rpx 50rpx","border-radius":"0 20rpx 20rpx 0"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.openorderpop()}}},[e._v("提交")])],1)],1)],1)],1)},a=[]},"194b":function(e,t,n){var i=n("6bd3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var r=n("4f06").default;r("38d03b25",i,!0,{sourceMap:!1,shadowMode:!1})},"2d7d":function(e,t,n){"use strict";var i=n("4ea4");n("99af"),n("4de4"),n("4160"),n("13d5"),n("a434"),n("07ac"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("ade3")),a=i(n("651d")),o=i(n("33ae")),c=i(n("6b0c")),s={name:"order",components:{barTitle:o.default,ldSelect:a.default,payorder:c.default},data:function(){return{shop_money:0,is_order_open:!1,chuan_arr:[],is_open:!1,bei:50,type:"foot",check_game:[]}},methods:{launchFlow:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t=this.getPlzh(),n={type:"foot",num:t.length,checkGame:JSON.stringify(t),bei:this.bei,mode:1,chuan:JSON.stringify(e),en_type:"竞彩足球",money:t.length*this.bei*2,check_game:t,chuan_arr:e};uni.navigateTo({url:"/pages/flow/index?data="+encodeURIComponent(JSON.stringify(n))})},doorder:function(){var e;if(!this.can_order())return!1;var t=this.chuan_arr;t=t.filter((function(e){return 1==e["checked"]}));var n=(e={type:this},(0,r.default)(e,"type",type),(0,r.default)(e,"num",this.getPlzh().length),(0,r.default)(e,"checkGame",JSON.stringify(this.getPlzh())),(0,r.default)(e,"bei",this.bei),(0,r.default)(e,"mode",1),(0,r.default)(e,"chuan",JSON.stringify(t)),e);this.$api.doorder_(n).then((function(e){var t=encodeURIComponent(JSON.stringify(e.data));uni.navigateTo({url:"/pages/order/orderdetail?str="+t})}))},goOptimize:function(){if(this.getPlzh().length>1){var e=encodeURIComponent(JSON.stringify(this.getPlzh())),t=this.getPlzh().length*this.bei*2;uni.navigateTo({url:"/pages/football/optimize?str="+e+"&money="+t+"&tyep="+this.type})}},getPlzh:function(){var e=this.chuan_arr,t=[];for(var n in e)1==e[n]["checked"]&&t.push(e[n]["value"]);var i=[],r=[];for(var a in t){var o="单关"!=t[a]?t[a]:1;r.push(this.pl(this.check_game,o))}for(var c in r){var s=r[c];for(var u in s){var l=this.dikaer(s[u]);for(var d in l)i.push(l[d])}}return i},clone:function(e){var t;if(e instanceof Array){t=[];var n=e.length;while(n--)t[n]=this.clone(e[n]);return t}if(e instanceof Object){for(var i in t={},e)t[i]=this.clone(e[i]);return t}return e},getExpectMinAward:function(){return"0"},getExpectMaxAward:function(){return"500万"},pl:function(e,t){for(var n=e.length,i=Math.pow(2,n),r=Math.pow(2,t)-1,a=[],o=r;o<i;o++){for(var c=0,s=[],u=0;u<n;u++){var l=Math.pow(2,u),d=o&l;d==l&&(e[u]["bet"]?s.push(e[u]["bet"]):s.push(e[u]),c++)}c==t&&a.push(s)}return a},dikaer:function(e){return e.length<2?e[0]||[]:[].reduce.call(e,(function(e,t){var n=[];return Object.values(e).forEach((function(e){Object.values(t).forEach((function(t){var i=[].concat(Array.isArray(e)?e:[e]);i.push(t),n.push(i)}))})),n}))},checkedChuan:function(e){this.chuan_arr[e]["checked"]=!this.chuan_arr[e]["checked"]},getChuanStr:function(){var e=this.chuan_arr;e=e.filter((function(e){return 1==e["checked"]}));var t="";return 0==e.length&&(t+="请选择"),1==e.length&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 "),2==e.length&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 ",t+="单关"==e[1]["value"]?"单关":e[1]["value"]+"串1 "),e.length>2&&(t+="单关"==e[0]["value"]?"单关":e[0]["value"]+"串1 ",t+="...",t+="单关"==e[e.length-1]["value"]?"单关":e[e.length-1]["value"]+"串1 "),t},getChuanArr:function(){var e=[],t=this.check_game.length;if(0==t)return this.chuan_arr=[],[];if(2==t&&(e=[{value:2,checked:!0}]),t>2)for(var n=2;n<=t;n++){var i=!1;n==t&&(i=!0),e.push({value:n,checked:i})}var r=!0;for(var a in this.check_game){var o=this.check_game[a];for(var c in o["bet"])if(0==o["bet"][c]["p_single"]){r=!1;break}}return 1==r&&(0==e.length?e.push({value:"单关",checked:!0}):e.push({value:"单关",checked:!1})),this.chuan_arr=e,e},subBei:function(){this.bei>1&&this.bei--},addBei:function(){this.bei++},starBlur:function(e,t){e.detail.value<1&&(this.bei=1)},starBlur_:function(e){e<1&&(this.bei=1)},cancel:function(){this.$refs.popup.close("bottom")},open:function(e){0==this.is_open?(this.$refs.popup.open("bottom"),this.is_open=!0):(this.$refs.popup.close("bottom"),this.is_open=!1)},getUserInfo:function(){var e=this,t={};this.$api.getUserInfo(t).then((function(t){var n=t.data.data;e.shop_money=n.total_money,e.$refs.orderpop_.$refs.orderpop.open("bottom"),e.is_order_open=!0}))},closeopendoor:function(){this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1},openorderpop:function(){if(!this.can_order())return!1;0==this.is_order_open&&this.getPlzh().length>0?this.getUserInfo():(this.$refs.orderpop_.$refs.orderpop.close("bottom"),this.is_order_open=!1)},selectChange:function(e){this.value=e},selectChange2:function(e){this.value2=e},selectChange4:function(e){this.value4=e},selectChange5:function(e){this.value5=e},goBack:function(){uni.navigateBack()},deleteItem:function(e){this.check_game.splice(e,1),this.getChuanArr()},can_order:function(){var e=this.check_game.length,t=14;return t="sfc"==this.type?14:9,!(e<t)}},onLoad:function(e){var t=JSON.parse(decodeURIComponent(e.data));for(var n in this.type=t["type"],this.check_game=t["check_game"],this.check_game){var i=this.check_game[n]["bet"];for(var r in i)i[r]["met"]=r,i[r]["h_name"]=this.check_game[n]["h_name"],i[r]["a_name"]=this.check_game[n]["a_name"]}this.getChuanArr()}};t.default=s},"52f3":function(e,t,n){"use strict";var i=n("194b"),r=n.n(i);r.a},"6bd3":function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"uni-page-body[data-v-cd87dea8]{background:#f3f3f3}.border-style[data-v-cd87dea8]{padding:%?5?% %?20?%;margin:0 %?10?%;border:1px solid #d1d1d1}.checked[data-v-cd87dea8]{background-color:#09f;color:#fff}.unchecked[data-v-cd87dea8]{background-color:#fff;color:#000}body.?%PAGE?%[data-v-cd87dea8]{background:#f3f3f3}",""]),e.exports=t},a6c6:function(e,t,n){"use strict";n.r(t);var i=n("2d7d"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},b888:function(e,t,n){"use strict";n.r(t);var i=n("1804"),r=n("a6c6");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("52f3");var o,c=n("f0c5"),s=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"cd87dea8",null,!1,i["a"],o);t["default"]=s.exports}}]);