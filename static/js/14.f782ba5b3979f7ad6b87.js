webpackJsonp([14],{mTaX:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Fd2+"),n={name:"DateTime",data:function(){return{startDate:"",endDate:"",timeStr:"",run:null}},computed:{disabled:function(){return!this.startDate.trim()&&!this.endDate.trim()},showReckonTime:function(){if(this.startDate.trim()&&this.endDate.trim())return!1;var t=this.startDate.trim()||this.endDate.trim();return new Date(t).getTime()>Date.now()}},methods:{clickBtn:function(t){var e=this;if(this.startDate.trim()&&this.endDate.trim()){if(!this.checkDate(this.startDate.trim())||!this.checkDate(this.endDate.trim()))return Object(a.b)("你输入的时间格式不对");this.getDateTime(this.startDate,this.endDate)}else{if(!this.checkDate(this.startDate.trim()||this.endDate.trim()))return Object(a.b)("你输入的时间格式不对");if(this.getDateTime(this.startDate||this.endDate),t)return void(this.run=setInterval(function(){e.getDateTime(e.startDate||e.endDate)},1e3))}},getDateTime:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,i=new Date(t).getTime(),a=new Date(e).getTime();if(this.showReckonTime){var n=[a,i];i=n[0],a=n[1]}var s=(a-i)/1e3;s<=0&&clearInterval(this.run);var r=this.patch(s/86400),c=this.patch(s/3600%24),o=this.patch(s%3600/60),h=this.patch(s%60);this.timeStr=r+"天"+c+"时"+o+"分"+h+"秒"},empty:function(){this.startDate="",this.endDate="",this.timeStr="",clearInterval(this.run)},patch:function(t){return+(t=parseInt(t))<=0?"00":+t<10?"0"+t:t},checkDate:function(t){return/^\d{4}\/\d{2}\/\d{2}$/i.test(t)||/^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}$/i.test(t)}},mounted:function(){}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"DateTime"},[i("div",{staticClass:"app-top"},[t._m(0),t._v(" "),i("div",{staticClass:"app-content"},[i("div",{staticClass:"content-left"},[i("p",[t._v("请输入开始时间")]),t._v(" "),i("van-field",{staticClass:"input",class:{color:t.startDate},attrs:{placeholder:"开始时间"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),t._v(" "),i("div",[t._v("--")]),t._v(" "),i("div",{staticClass:"content-right"},[i("p",[t._v("请输入截止时间")]),t._v(" "),i("van-field",{staticClass:"input",class:{color:t.endDate},attrs:{placeholder:"截止时间"},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),t._v(" "),i("p",[t._v(t._s(t.timeStr))]),t._v(" "),i("van-button",{staticClass:"confirmbtn",class:{showWidth:t.showReckonTime},attrs:{type:"info",disabled:t.disabled},on:{click:function(e){return t.clickBtn()}}},[t._v("确定")]),t._v(" "),t.showReckonTime?i("van-button",{staticClass:"confirmbtn showWidth",attrs:{type:"info"},on:{click:function(e){return t.clickBtn("1")}}},[t._v("倒计时")]):t._e(),t._v(" "),t.timeStr?i("van-button",{staticClass:"delbtn",attrs:{type:"danger"},on:{click:function(e){return t.empty()}}},[t._v("清空")]):t._e()],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-title"},[this._v("\n            1. 输入两个时间计算相差时间"),e("br"),this._v("\n            2. 输入一个过去时间计算距今时间"),e("br"),this._v("\n            3. 输入一个未来时间可以进行倒计时"),e("br"),this._v("\n            4. 输入格式 2000/01/01 或 2000/01/01 00:00:00 \n        ")])}]};var r=i("VU/8")(n,s,!1,function(t){i("rcW+")},"data-v-3d044994",null);e.default=r.exports},"rcW+":function(t,e){}});
//# sourceMappingURL=14.f782ba5b3979f7ad6b87.js.map