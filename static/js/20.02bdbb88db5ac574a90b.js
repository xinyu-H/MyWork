webpackJsonp([20],{"27gK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={data:function(){return{timer1:null,timer2:null,isColor:!1,iconList:["❄","❆","❁","❅","❃","✽","✺","❂","✼","❋","✴","❉","❊","✻","✳","❈","✹","✲","✷","✸","❇"],colorList:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]}},methods:{createSnow:function(){var t=this;this.$nextTick(function(){t.timer2=setInterval(function(){var e=t.getColor(),n=document.createElement("div");n.setAttribute("y",String(t.getRandom(.05,.08))),n.setAttribute("x",String(t.getRandom(.5,.6,2))),n.classList.add("snow"),n.style.width="10px",n.style.height="10px",n.style.position="relative",n.style.position="absolute",n.style.top="-20px",n.style.opacity=String(t.getRandom(.4,.9)),n.style.color=t.isColor?e:"#FFF",n.style.left=t.getRandom(0,window.innerWidth)+"px",n.style.transform="scale("+t.getRandom(.4,1)+")",n.style.textShadow="0 0 10px "+(t.isColor?e:"#FFF"),n.innerHTML=t.iconList[t.getRandom(0,20,1)],document.querySelector(".snow_box").appendChild(n)},30)})},init:function(){this.$nextTick(function(){document.querySelectorAll(".snow").forEach(function(t){+t.style.top.slice(0,-2)>window.innerHeight&&t.remove(),(+t.style.left.slice(0,-2)<-50||+t.style.left.slice(0,-2)>window.innerWidth)&&t.remove(),t.style.top=+t.style.top.slice(0,-2)+Number(t.getAttribute("y"))+"px",t.style.left=+t.style.left.slice(0,-2)+Number(t.getAttribute("x"))+"px"})})},getRandom:function(t,e,n){var o=+Math.abs(Math.random()*(e-t+1)+t-1).toFixed(2);return 2===n?+(Math.random()*(e-t+1)+t-1).toFixed(2):1===n?+Math.ceil(Math.random()*(e-t+1)+t-1):o<t?this.getRandom(t,e,n):o},getColor:function(){for(var t="#",e=0;e<6;e++)t+=this.colorList[this.getRandom(0,15,1)];return t}},mounted:function(){var t=this;this.createSnow(),document.querySelectorAll(".snow").forEach(function(e){e.style.left=t.getRandom(0,window.innerWidth)+"px",e.style.transform="scale("+t.getRandom(.4,1.4)+")"}),this.timer1=setInterval(this.init,10)},destroyed:function(){clearInterval(this.timer1),clearInterval(this.timer2)}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"snow-content"},[n("div",{staticClass:"snow_box"}),t._v(" "),n("div",{staticClass:"box"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isColor=!t.isColor}}},[t._v("变色")])],1)])},staticRenderFns:[]};var s=n("VU/8")(o,i,!1,function(t){n("QhLg")},"data-v-00c1fec4",null);e.default=s.exports},QhLg:function(t,e){}});
//# sourceMappingURL=20.02bdbb88db5ac574a90b.js.map