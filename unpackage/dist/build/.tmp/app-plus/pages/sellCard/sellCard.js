(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/sellCard/sellCard"],{"06b5":function(t,a,e){"use strict";var r=e("5742"),c=e.n(r);c.a},1745:function(t,a,e){"use strict";(function(t,e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r={data:function(){return{card1Show:!1,card2Show:!1,card3Show:!1,item:["单卡提交","批量提交"],current:0,src:"",card1List:[],card2List:[],card3List:[],token:"",card1Name:"",card1Logo:"",card1Id:"",card2Name:"",card2Logo:"",card2Id:"",hasCardNumber:"0",card3Id:"",card3FaceValue:"",card3Discount:"",discountPrice:"",remark:"",cardNumber:"",cardPsd:"",cards:"",name:"",phone:"",commitMemuShow:!1}},onShow:function(){var a=this;this.src=this.url,this.token=t.getStorageSync("token");var r=t.getStorageSync("card1Id"),c=t.getStorageSync("card2Id"),o=this;t.request({url:this.url+"/mobile/classificationData",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{type:2},success:function(t){if(console.log(e(t," at pages\\sellCard\\sellCard.vue:226")),o.card1List=t.data.data.classList,r){a.card1Id=r;for(var c=0;c<o.card1List.length;c++)o.card1List[c].id==r&&(o.card1Id=o.card1List[c].id,o.card1Name=o.card1List[c].name,o.card1Logo=o.card1List[c].logo)}}}),r&&(t.removeStorageSync("card1Id"),t.request({url:o.url+"/mobile/cardListData",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:o.token},data:{type:2,commodityClassId:r},success:function(t){if(console.log(e(t," at pages\\sellCard\\sellCard.vue:254")),o.card2List=t.data.data,c){console.log(e(c," at pages\\sellCard\\sellCard.vue:257")),a.card2Id=c;for(var r=0;r<o.card2List.length;r++)o.card2List[r].id==c&&(o.card2Id=o.card2List[r].id,o.card2Name=o.card2List[r].name,o.card2Logo=o.card2List[r].imgPath)}}})),c&&(t.removeStorageSync("card2Id"),t.request({url:o.url+"/mobile/getFaceVlaueData",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:o.token},data:{type:2,commodityId:c},success:function(t){console.log(e(t," at pages\\sellCard\\sellCard.vue:284")),o.card3List=t.data.data;for(var a=0;a<o.card3List.length;a++)o.card3List[a].discountPrice=(o.card3List[a].faceValue*o.card3List[a].discount).toFixed(2),o.card3List[a].discount=(10*o.card3List[a].discount).toFixed(1)}})),t.request({url:this.url+"/mobile/realData",method:"GET",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{},success:function(t){console.log(e(t," at pages\\sellCard\\sellCard.vue:304")),o.name=t.data.realName,o.phone=t.data.alipayAccount}})},methods:{commitCard:function(){var a=this;"0"==this.current?t.request({url:this.url+"/mobile/saveCard",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{commodityId:this.card2Id,feedbackId:this.card3Id,cardNumber:this.cardNumber,cardPassword:this.cardPsd,alipayAccount:this.phone,realName:this.name,type:0,hasCardNumber:this.hasCardNumber},success:function(r){console.log(e(r," at pages\\sellCard\\sellCard.vue:332")),a.commitMemuShow=!1,r.data.result?t.showToast({title:"提交成功",duration:2e3}):t.showToast({title:r.data.msg,icon:"none",duration:2e3})},error:function(){t.showToast({title:"网络错误,请稍后再试",icon:"none",duration:2e3})}}):t.request({url:this.url+"/mobile/saveCard",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:this.token},data:{commodityId:this.card2Id,feedbackId:this.card3Id,alipayAccount:this.phone,realName:this.name,cards:this.cards,type:1,hasCardNumber:this.hasCardNumber},success:function(r){console.log(e(r," at pages\\sellCard\\sellCard.vue:374")),a.commitMemuShow=!1,r.data.result?t.showToast({title:"提交成功",duration:2e3}):t.showToast({title:r.data.msg,icon:"none",duration:2e3})},error:function(){t.showToast({title:"网络错误,请稍后再试",icon:"none",duration:2e3})}})},closeMemu:function(){this.commitMemuShow=!1},commit:function(){if(""==this.name||""==this.phone)return t.showModal({title:"提交",content:"请先绑定打款账户",success:function(){t.navigateTo({url:"../account/account"})}}),!1;if("0"==this.current)if("0"==this.hasCardNumber){if(""==this.cardNumber)return t.showModal({title:"提交",content:"请输入礼品卡卡号"}),!1;if(""==this.cardPsd)return t.showModal({title:"提交",content:"请输入礼品卡卡密"}),!1;this.commitMemuShow=!0}else{if(""==this.cardPsd)return t.showModal({title:"提交",content:"请输入礼品卡卡密"}),!1;this.commitMemuShow=!0}else{if(""==this.cards)return t.showModal({title:"提交",content:"请至少输入一张礼品卡信息"}),!1;this.commitMemuShow=!0}},scanningCard:function(){var a=this;console.log(e(12345678978," at pages\\sellCard\\sellCard.vue:456")),t.scanCode({onlyFromCamera:!1,success:function(t){console.log(e(t.result," at pages\\sellCard\\sellCard.vue:460")),a.cardNumber=t.result}})},scanningPsd:function(){var a=this;t.scanCode({onlyFromCamera:!1,success:function(t){console.log(e(t.result," at pages\\sellCard\\sellCard.vue:470")),a.cardPsd=t.result}})},card1Click:function(){this.card1Show=!0},card1Close:function(){this.card1Show=!1},pitchCard1:function(a,r,c){this.card2Id="",this.card2Name="",this.card2Logo="",this.hasCardNumber="",this.card3Id="",this.card3FaceValue="",this.card3Discount="",this.discountPrice="";var o=this;this.card1Id=a,this.card1Name=r,this.card1Logo=c,this.card1Show=!1,t.request({url:o.url+"/mobile/cardListData",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:o.token},data:{type:2,commodityClassId:o.card1Id},success:function(t){console.log(e(t," at pages\\sellCard\\sellCard.vue:509")),o.card2List=t.data.data}})},card2Click:function(){this.card2Show=!0},card2Close:function(){this.card2Show=!1},pitchCard2:function(a,r,c,o,d){this.card3Id="",this.card3FaceValue="",this.card3Discount="",this.discountPrice="";var s=this;this.card2Id=a,this.card2Name=r,this.card2Logo=c,this.remark=d,this.hasCardNumber=o,this.card2Show=!1,t.request({url:s.url+"/mobile/getFaceVlaueData",method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:s.token},data:{type:2,commodityId:s.card2Id},success:function(t){console.log(e(t," at pages\\sellCard\\sellCard.vue:544")),s.card3List=t.data.data;for(var a=0;a<s.card3List.length;a++)s.card3List[a].discountPrice=(s.card3List[a].faceValue*s.card3List[a].discount).toFixed(2),s.card3List[a].discount=(10*s.card3List[a].discount).toFixed(1)}})},card3Click:function(){this.card3Show=!0},card3Close:function(){this.card3Show=!1},pitchCard3:function(t,a,e,r){this.card3Id=t,this.card3FaceValue=a,this.card3Discount=(10*e).toFixed(1)+"折",this.discountPrice=r,this.card3Show=!1},changeTab:function(t){this.current=t}}};a.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])},"284c":function(t,a,e){"use strict";e.r(a);var r=e("1745"),c=e.n(r);for(var o in r)"default"!==o&&function(t){e.d(a,t,function(){return r[t]})}(o);a["default"]=c.a},5742:function(t,a,e){},7550:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement;t._self._c},c=[];e.d(a,"a",function(){return r}),e.d(a,"b",function(){return c})},"8d45":function(t,a,e){"use strict";e.r(a);var r=e("7550"),c=e("284c");for(var o in c)"default"!==o&&function(t){e.d(a,t,function(){return c[t]})}(o);e("06b5");var d=e("2877"),s=Object(d["a"])(c["default"],r["a"],r["b"],!1,null,null,null);a["default"]=s.exports},d5d8:function(t,a,e){"use strict";(function(t){e("e02a"),e("921b");r(e("66fd"));var a=r(e("8d45"));function r(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])}},[["d5d8","common/runtime","common/vendor"]]]);