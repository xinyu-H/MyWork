webpackJsonp([6],{MV75:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Ml+6"),s=i("BMSc"),r=i("C+g1")(n),o={data:function(){return{width:0,height:0,scene:null,camera:null,controls:null,renderer:null,isOpenDoor:!0,raycaster:"",mouse:"",dummy:""}},methods:{initScene:function(){var e=this.$refs.webglDom;this.width=e.offsetWidth,this.height=e.offsetHeight,this.scene=new n.Scene,this.scene.fog=new n.Fog(21879,1,2800),this.raycaster=new n.Raycaster,this.mouse=new n.Vector2,this.dummy=new n.Object3D},initCamera:function(){this.camera=new n.PerspectiveCamera(45,this.width/this.height,.01,1e4),this.camera.position.set(0,0,500),this.add(this.camera),this.camera.lookAt(this.scene.position)},initControls:function(){this.controls=new s.a(this.camera,this.renderer.domElement)},initLight:function(){var e=new n.AmbientLight("#fff"),t=new n.DirectionalLight("#eee"),i=new n.PointLight("#eee");e.position.set(500,500,800),t.position.set(500,500,800),this.add(e),this.add(i),this.add(t)},initRenderer:function(){this.renderer=new n.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setClearAlpha(0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n.PCFSoftShadowMap,document.querySelector(".webglDom").appendChild(this.renderer.domElement),this.render()},initBSP:function(e,t,i,s,o,a){var h=new n.BoxGeometry(e,t,i),d=new n.Mesh(h);return d.position.set(s,o,a),new r(d)},initDoor:function(){var e=this,t=this.initBSP(150,230,6,0,0,0),s=this.initBSP(130,220,6,0,-5,0),r=t.subtract(s).toMesh().geometry,o=new n.MeshLambertMaterial({color:"#999"}),a=new n.Mesh(r,o);this.add(a);var h=i("VhdU");(new n.TextureLoader).load(h,function(t){var i=new n.BoxGeometry(100,100,100),s=new n.MeshLambertMaterial({color:"#999",map:t}),r=new n.Mesh(i,s);r.position.set(0,0,0),e.add(r),window.addEventListener("click",e.onClick,!1)})},onClick:function(e){e.preventDefault(),this.mouse.x=e.clientX/window.innerWidth*2-1,this.mouse.y=-e.clientY/window.innerHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var t=this.raycaster.intersectObjects(this.scene.children,!0);console.log(t),t.length>0&&(this.isOpenDoor?(this.dummy.rotation.y-=.25*Math.PI,this.isOpenDoor=!1):(this.dummy.rotation.y+=.25*Math.PI,this.isOpenDoor=!0))},addBox:function(e,t,i,s,r,o,a){var h=new n.BoxGeometry(e,t,i),d=new n.MeshLambertMaterial({color:s}),c=new n.Mesh(h,d);c.position.set(r,o,a),this.add(c)},add:function(e){this.scene.add(e)},render:function(){this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.render)},init:function(){this.initScene(),this.initCamera(),this.initRenderer(),this.initControls(),this.initLight(),this.initDoor()}},mounted:function(){this.$nextTick(this.init)}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrap"},[t("div",{ref:"webglDom",staticClass:"webglDom"})])},staticRenderFns:[]};var h=i("VU/8")(o,a,!1,function(e){i("X78z")},null,null);t.default=h.exports},VhdU:function(e,t,i){e.exports=i.p+"static/img/4.3a597e7.jpg"},X78z:function(e,t){}});
//# sourceMappingURL=6.97a443f9adaa52265bec.js.map