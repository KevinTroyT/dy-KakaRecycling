(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"38ad":function(t,e,o){},"507b":function(t,e,o){"use strict";o.r(e);var a=o("85af"),n=o("5d72");for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);o("8a23");var i=o("2877"),s=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},"543a":function(t,e,o){"use strict";(function(t){o("e02a"),o("921b");a(o("66fd"));var e=a(o("507b"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"5d72":function(t,e,o){"use strict";o.r(e);var a=o("77c6"),n=o.n(a);for(var l in a)"default"!==l&&function(t){o.d(e,t,function(){return a[t]})}(l);e["default"]=n.a},"77c6":function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,scrollTop:0,old:{scrollTop:0},src:"",slideshowImg:[],commodityClass:[],listLength:0,notes:[],hotCommodityList:[],token:""}},onShow:function(){var e=this;this.src=this.url,this.token=t.getStorageSync("token"),t.request({url:this.url+"/mobile/indexData",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{type:2},success:function(t){console.log(o(t," at pages\\index\\index.vue:110")),e.slideshowImg=t.data.data.slideshowImg,e.notes=t.data.data.notes,e.hotCommodityList=t.data.data.hotCommodityList,e.commodityClass=t.data.data.commodityClass,e.listLength=Math.ceil(e.commodityClass.length/2),console.log(o(e.listLength," at pages\\index\\index.vue:116"))}})},onLoad:function(){},methods:{scroll:function(t){console.log(o(t," at pages\\index\\index.vue:125")),this.old.scrollTop=t.detail.scrollTop},goSellCard:function(e,o){t.setStorageSync("card1Id",e),t.setStorageSync("card2Id",o),t.navigateTo({url:"../sellCard/sellCard"})},goSellCard1:function(e){console.log(o(e," at pages\\index\\index.vue:136")),t.setStorageSync("card1Id",this.commodityClass[2*e].id),t.navigateTo({url:"../sellCard/sellCard"})},goSellCard2:function(e){console.log(o(e," at pages\\index\\index.vue:143")),t.setStorageSync("card1Id",this.commodityClass[2*e+1].id),t.navigateTo({url:"../sellCard/sellCard"})}}};e.default=a}).call(this,o("6e42")["default"],o("0de9")["default"])},"85af":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},n=[];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return n})},"8a23":function(t,e,o){"use strict";var a=o("38ad"),n=o.n(a);n.a}},[["543a","common/runtime","common/vendor"]]]);