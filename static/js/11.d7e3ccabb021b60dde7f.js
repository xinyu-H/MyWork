webpackJsonp([11],{Tvt1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Zrlr"),i=n.n(a),r=n("//Fk"),o=n.n(r),s={data:function(){return{uploadSrc:""}},methods:{inputChange:function(t){var e=this,n=t.target.files[0];this.toBase64(n).then(function(t){e.uploadSrc=t})},toBase64:function(t){return new o.a(function(e,n){var a=new FileReader;a.readAsDataURL(t),a.onload=function(){e(this.result)}})},myPromise:function(){return function t(e){var n=this;i()(this,t),this.state="pending",this.value=void 0,this.reason=void 0,this.then=function(t,e){"fulfilled"===n.state&&t(n.value),"rejected"===n.state&&e(n.reason)};var a=function(t){"pending"===n.state&&(n.state="rejected",n.reason=t)};try{e(function(t){"pending"===n.state&&(n.state="fulfilled",n.value=t)},a)}catch(t){a(t)}}},myPromise2:function(t){var e="pending",n=void 0,a=void 0,i=function(t){"pending"===e&&(e="rejected",a=t)};try{t(function(t){"pending"===e&&(e="fulfilled",n=t)},i)}catch(t){i(t)}Object.prototype.then=function(t,i){"fulfilled"===e&&t(n),"rejected"===e&&i(a)}}},mounted:function(){}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page1"},[n("div",{staticClass:"upload"},[n("img",{attrs:{src:"https://img.yzcdn.cn/vant/leaf.jpg",alt:""}}),t._v(" "),n("input",{attrs:{type:"file"},on:{change:function(e){return t.inputChange(e)}}})]),t._v(" "),t.uploadSrc?n("img",{staticStyle:{width:"1rem",height:"1rem"},attrs:{src:t.uploadSrc,alt:""}}):t._e()])},staticRenderFns:[]};var c=n("VU/8")(s,u,!1,function(t){n("uCLh")},"data-v-badd49ba",null);e.default=c.exports},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},uCLh:function(t,e){}});
//# sourceMappingURL=11.d7e3ccabb021b60dde7f.js.map