webpackJsonp([12],{Fbxd:function(t,e){},Tvt1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Zrlr"),a=n.n(i),r=n("//Fk"),o=n.n(r),s={data:function(){return{uploadSrc:""}},methods:{scrollDiv:function(t){console.log(t.target.scrollTop+t.target.offsetHeight)},inputChange:function(t){var e=this,n=t.target.files[0];this.toBase64(n).then(function(t){e.uploadSrc=t})},toBase64:function(t){return new o.a(function(e,n){var i=new FileReader;i.readAsDataURL(t),i.onload=function(){e(this.result)}})},myPromise:function(){return function t(e){var n=this;a()(this,t),this.state="pending",this.value=void 0,this.reason=void 0,this.then=function(t,e){"fulfilled"===n.state&&t(n.value),"rejected"===n.state&&e(n.reason)};var i=function(t){"pending"===n.state&&(n.state="rejected",n.reason=t)};try{e(function(t){"pending"===n.state&&(n.state="fulfilled",n.value=t)},i)}catch(t){i(t)}}},myPromise2:function(t){var e="pending",n=void 0,i=void 0,a=function(t){"pending"===e&&(e="rejected",i=t)};try{t(function(t){"pending"===e&&(e="fulfilled",n=t)},a)}catch(t){a(t)}Object.prototype.then=function(t,a){"fulfilled"===e&&t(n),"rejected"===e&&a(i)}}},mounted:function(){}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page1"},[n("div",{staticClass:"upload"},[n("img",{attrs:{src:"https://img.yzcdn.cn/vant/leaf.jpg",alt:""}}),t._v(" "),n("input",{attrs:{type:"file"},on:{change:function(e){return t.inputChange(e)}}})]),t._v(" "),t.uploadSrc?n("img",{staticStyle:{width:"1rem",height:"1rem"},attrs:{src:t.uploadSrc,alt:""}}):t._e(),t._v(" "),n("div",{staticClass:"outer",on:{scroll:function(e){return t.scrollDiv(e)}}},[n("div",{staticClass:"inter"})])])},staticRenderFns:[]};var u=n("VU/8")(s,c,!1,function(t){n("Fbxd")},"data-v-0d5f5a0a",null);e.default=u.exports},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}}});
//# sourceMappingURL=12.bbcdd2f380759267a1c5.js.map