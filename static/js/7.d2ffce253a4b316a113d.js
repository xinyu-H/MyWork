webpackJsonp([7],{EzHP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("mvHQ"),s=n.n(o),i={name:"WebSocket",data:function(){return{socket:new WebSocket("ws://localhost:8080"),timeoutRun:null,intervalRun:null}},methods:{longstart:function(){var e=this;clearInterval(this.intervalRun),clearTimeout(this.timeoutRun),this.intervalRun=setInterval(function(){console.log("重置监测心跳");e.socket.send(s()({content:"pong",contentType:"hert"})),e.timeoutRun=setTimeout(function(){console.log("后台挂掉，没有心跳了...."),console.log("打印websocket的地址:",e.socket),e.socket.close(),clearInterval(e.intervalRun),clearTimeout(e.timeoutRun)},2e3)},1e4)},send:function(e){var t=document.getElementById("responseText"),n=document.getElementById("input"),o=n.value||e;window.WebSocket&&(o.trim()?(t.value=t.value+"\n"+n.value,this.socket.readyState==WebSocket.OPEN?(this.socket.send(o),n.value=""):alert("连接没有开启.")):alert("不可发送空消息！"))},init:function(){var e=this;this.socket.onopen=function(e){document.getElementById("responseText").value="连接开启!",longstart()},this.socket.onmessage=function(t){console.log(t),console.log("心跳重置"),e.longstart();var n=document.getElementById("responseText");n.value=n.value+"\n"+t.data},this.socket.onclose=function(e){var t=document.getElementById("responseText");t.value=t.value+"\n连接被关闭"},this.socket.onerror=function(e){console.log(e)}}},mounted:function(){var e=this;window.WebSocket||(window.WebSocket=window.MozWebSocket),this.init(),document.addEventListener("keydown",function(t){"Enter"===t.key&&e.send()})}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",{attrs:{onsubmit:"return false;"}},[n("h3",[e._v("WebSocket 聊天室：")]),e._v(" "),n("textarea",{staticStyle:{width:"500px",height:"300px"},attrs:{id:"responseText"}}),e._v(" "),n("br"),e._v(" "),n("input",{staticStyle:{width:"300px"},attrs:{type:"text",id:"input",name:"message",value:"你好吗？"}}),e._v(" "),n("input",{attrs:{type:"button",value:"发送消息"},on:{click:function(t){return e.send()}}}),e._v(" "),n("input",{attrs:{type:"button",onclick:"javascript:document.getElementById('responseText').value=''",value:"清空聊天记录"}})])])},staticRenderFns:[]};var c=n("VU/8")(i,u,!1,function(e){n("GJ37")},"data-v-0cbcb2c6",null);t.default=c.exports},GJ37:function(e,t){},mvHQ:function(e,t,n){e.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(e,t,n){var o=n("FeBl"),s=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}}});
//# sourceMappingURL=7.d2ffce253a4b316a113d.js.map