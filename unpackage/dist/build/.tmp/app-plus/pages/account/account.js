(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/account/account"],{1165:function(t,e,n){},3991:function(t,e,n){"use strict";var a=n("1165"),o=n.n(a);o.a},"506b":function(t,e,n){"use strict";n.r(e);var a=n("5092"),o=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=o.a},5092:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{name:"",phone:"",token:""}},onShow:function(){var e=this;this.token=t.getStorageSync("token"),console.log(n("token",this.token," at pages\\account\\account.vue:29")),t.request({url:this.url+"/mobile/realData",method:"GET",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{},success:function(t){console.log(n(t," at pages\\account\\account.vue:41")),e.name=t.data.realName,e.phone=t.data.alipayAccount}})},methods:{commit:function(){return""==this.name?(t.showModal({title:"提示",content:"用户名不能为空"}),!1):""==this.phone?(t.showModal({title:"提示",content:"支付宝账号不能为空"}),!1):void t.request({url:this.url+"/mobile/realName",method:"GET",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{name:this.name,zhifu:this.phone},success:function(e){console.log(n(e," at pages\\account\\account.vue:74")),e.data.result?t.showToast({title:e.data.msg,duration:1500,success:function(){t.navigateBack({delta:1})}}):t.showToast({title:e.data.msg,duration:1500})}})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},c87d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},caf9:function(t,e,n){"use strict";n.r(e);var a=n("c87d"),o=n("506b");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("3991");var u=n("2877"),i=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},dee9:function(t,e,n){"use strict";(function(t){n("e02a"),n("921b");a(n("66fd"));var e=a(n("caf9"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["dee9","common/runtime","common/vendor"]]]);