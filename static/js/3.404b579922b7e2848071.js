webpackJsonp([3],{ozCQ:function(t,e){},rO0d:function(t,e,i){t.exports=i.p+"static/img/2057959.8d96b61.jpg"},tkuR:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Ml+6"),s=i("BMSc"),a=i("vy4U"),o=i.n(a),r=(i("C+g1")(n),{name:"Cinema2",data:function(){return{width:0,height:0,scene:null,camera:null,controls:null,renderer:null,isOpenDoor:!0,amdLight:null,dirLight:null,ponLight:null,raycaster:"",mouse:"",dummy:"",seatNum:60,rowNum:9,active:0,centerPoint:0,lookAtX:0,lookAtY:0,lookAtZ:0}},methods:{toLocation:function(t,e){var i=this,n=(this.scene.getObjectByName("door").rotation,this.camera.position),s=Math.ceil(t/this.rowNum),a=t%this.rowNum==0?this.rowNum:t%this.rowNum,r=Math.ceil(this.centerPoint/this.rowNum),h=this.centerPoint%this.rowNum==0?this.rowNum:this.centerPoint%this.rowNum,c=n.x,d=n.y,l=n.z;t===this.centerPoint?(0,0,0,c=0,d=30,l=800):(s<r?(-.1*(r-s),d=-50*(r-s),l=800-10*(r-s)):(.1*(s-r),d=80*(s-r),l=800+10*(s-r)),a<h?(.1*(h-a),c=-40*(h-a)):(-.1*(a-h),c=40*(a-h)));new o.a.Tween({cX:n.x,cY:n.y,cZ:n.z,lookAtX:0,lookAtY:0,lookAtZ:0}).to({cX:c,cY:d,cZ:l,lookAtX:0,lookAtY:0,lookAtZ:0},500).easing(o.a.Easing.Linear.None).onUpdate(function(){i.camera.position.set(this.cX,this.cY,this.cZ),i.camera.lookAt(this.lookAtX,this.lookAtY,this.lookAtZ)}).start();this.active=e},initScene:function(){var t=this.$refs.webglDom;this.width=t.offsetWidth,this.height=t.offsetHeight,this.scene=new n.Scene,this.scene.fog=new n.Fog(21879,1,2800),this.scene.background=new n.Color(0),this.raycaster=new n.Raycaster,this.mouse=new n.Vector2,this.dummy=new n.Object3D},initCamera:function(){this.camera=new n.PerspectiveCamera(45,this.width/this.height,.01,1e4),this.camera.position.set(0,30,800),this.add(this.camera),this.camera.lookAt(this.scene.position)},initControls:function(){this.controls=new s.a(this.camera,this.renderer.domElement)},initLight:function(){this.amdLight=new n.AmbientLight("#aaa"),this.dirLight=new n.DirectionalLight("#aaa"),this.ponLight=new n.PointLight("#aaa"),this.amdLight.position.set(0,0,0),this.dirLight.position.set(0,0,0),this.ponLight.position.set(0,0,0),this.add(this.amdLight),this.add(this.dirLight),this.add(this.ponLight)},initRenderer:function(){this.renderer=new n.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setClearColor(4620980,1),this.renderer.setClearAlpha(0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n.PCFSoftShadowMap,this.$refs.webglDom.appendChild(this.renderer.domElement),this.render()},initScreen:function(){var t=this,e=i("rO0d");(new n.TextureLoader).load(e,function(e){var i=new n.BoxGeometry(1400,800,2),s=new n.MeshLambertMaterial({color:"#ccc",map:e});s.transparent=!0;var a=new n.Mesh(i,s);a.position.set(-65,-5,-2),t.dummy.add(a),t.dummy.position.set(65,-30,-800),t.dummy.name="door",t.add(t.dummy)}),this.addBox(10,10,1600,"#aaa",-695,360,0),this.addBox(10,10,1600,"#aaa",695,360,0),this.addBox(10,10,1600,"#aaa",695,-430,0),this.addBox(10,10,1600,"#aaa",-695,-430,0)},onClick:function(t){t.preventDefault();this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-t.clientY/window.innerHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var e=this.raycaster.intersectObjects(this.scene.children,!0),i=this.scene.getObjectByName("door");if(e.length>0)if(this.isOpenDoor){console.log(i);var n=new o.a.Tween({y:0});n.to({y:-.25*Math.PI},1e3),n.easing(o.a.Easing.Elastic.Out),n.onUpdate(function(){i.rotation.set(0,this.y,0)}).start(),this.isOpenDoor=!1}else{var s=new o.a.Tween({y:-.25*Math.PI});s.to({y:0},1e3),s.easing(o.a.Easing.Elastic.Out),s.onUpdate(function(){i.rotation.set(0,this.y,0)}).start(),this.isOpenDoor=!0}},addBox:function(t,e,i,s,a,o,r){var h=new n.BoxGeometry(t,e,i),c=new n.MeshLambertMaterial({color:s}),d=new n.Mesh(h,c);d.position.set(a,o,r),this.add(d)},add:function(t){this.scene.add(t)},render:function(){var t=this.camera.position.clone();this.ponLight.position.set(t.x,t.y,t.z),this.renderer.render(this.scene,this.camera),o.a.update(),requestAnimationFrame(this.render)},init:function(){this.initScene(),this.initCamera(),this.initLight(),this.initScreen(),this.initRenderer()}},mounted:function(){var t=Math.floor(this.rowNum/2),e=Math.floor(this.seatNum/this.rowNum)/2;this.active=Math.ceil(t+e*this.rowNum),this.centerPoint=Math.ceil(t+e*this.rowNum)+1,this.$nextTick(this.init)}}),h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{ref:"webglDom",staticClass:"webglDom"}),t._v(" "),i("div",{staticClass:"operateArea"},[i("div",{staticClass:"area-top"},[t._m(0),t._v(" "),i("div",{staticClass:"area-top-seat"},t._l(t.seatNum,function(e,n){return i("div",{key:n,staticClass:"seat",class:{activeColor:t.active==n},on:{click:function(i){return t.toLocation(e,n)}}})}),0)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"area-top-screen"},[e("div")])}]};var c=i("VU/8")(r,h,!1,function(t){i("ozCQ")},null,null);e.default=c.exports}});
//# sourceMappingURL=3.404b579922b7e2848071.js.map