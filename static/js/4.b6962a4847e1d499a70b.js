webpackJsonp([4],{"1wNG":function(t,e,i){t.exports=i.p+"static/img/door_right.ddd64c3.png"},IZER:function(t,e){},neUP:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Ml+6"),s=i("BMSc"),r=i("vy4U"),o=i.n(r),a=i("C+g1")(n),h={name:"Door",data:function(){return{width:0,height:0,scene:null,camera:null,controls:null,renderer:null,isOpenDoor:!0,amdLight:null,dirLight:null,ponLight:null,raycaster:"",mouse:"",dummy:""}},methods:{initScene:function(){var t=this.$refs.webglDom;this.width=t.offsetWidth,this.height=t.offsetHeight,this.scene=new n.Scene,this.scene.fog=new n.Fog(21879,1,2800),this.raycaster=new n.Raycaster,this.mouse=new n.Vector2,this.dummy=new n.Object3D},initCamera:function(){this.camera=new n.PerspectiveCamera(45,this.width/this.height,.01,1e4),this.camera.position.set(0,0,500),this.add(this.camera),this.camera.lookAt(this.scene.position)},initControls:function(){this.controls=new s.a(this.camera,this.renderer.domElement)},initLight:function(){this.amdLight=new n.AmbientLight("#aaa"),this.dirLight=new n.DirectionalLight("#aaa"),this.ponLight=new n.PointLight("#aaa"),this.amdLight.position.set(0,0,0),this.dirLight.position.set(0,0,0),this.ponLight.position.set(0,0,0),this.add(this.amdLight),this.add(this.dirLight),this.add(this.ponLight)},initRenderer:function(){this.renderer=new n.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setClearColor(4620980,1),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=n.PCFSoftShadowMap,this.$refs.webglDom.appendChild(this.renderer.domElement),this.render()},initBSP:function(t,e,i,s,r,o){var h=new n.BoxGeometry(t,e,i),d=new n.Mesh(h);return d.position.set(s,r,o),new a(d)},initDoor:function(){var t=this.initBSP(150,230,6,0,0,0),e=this.initBSP(130,220,6,0,-5,0),s=t.subtract(e).toMesh().geometry,r=new n.MeshLambertMaterial({color:"#999"}),o=new n.Mesh(s,r);this.add(o);var a=this,h=i("1wNG");(new n.TextureLoader).load(h,function(t){var e=new n.BoxGeometry(130,220,2),i=new n.MeshLambertMaterial({color:"#ccc",map:t});i.transparent=!0;var s=new n.Mesh(e,i);s.position.set(-65,-5,-2),a.dummy.add(s),a.dummy.position.set(65,0,0),a.dummy.name="door",a.add(a.dummy),window.addEventListener("click",a.onClick,!1)})},onClick:function(t){t.preventDefault();this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-t.clientY/window.innerHeight*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);var e=this.raycaster.intersectObjects(this.scene.children,!0),i=this.scene.getObjectByName("door");if(e.length>0)if(this.isOpenDoor){console.log(i);var n=new o.a.Tween({y:0});n.to({y:-.25*Math.PI},1e3),n.easing(o.a.Easing.Elastic.Out),n.onUpdate(function(){i.rotation.set(0,this.y,0)}).start(),this.isOpenDoor=!1}else{var s=new o.a.Tween({y:-.25*Math.PI});s.to({y:0},1e3),s.easing(o.a.Easing.Elastic.Out),s.onUpdate(function(){i.rotation.set(0,this.y,0)}).start(),this.isOpenDoor=!0}},addBox:function(t,e,i,s,r,o,a){var h=new n.BoxGeometry(t,e,i),d=new n.MeshLambertMaterial({color:s}),c=new n.Mesh(h,d);c.position.set(r,o,a),this.add(c)},add:function(t){this.scene.add(t)},render:function(){var t=this.camera.position.clone();this.ponLight.position.set(t.x,t.y,t.z),this.renderer.render(this.scene,this.camera),o.a.update(),requestAnimationFrame(this.render)},init:function(){this.initScene(),this.initCamera(),this.initLight(),this.initDoor(),this.initRenderer(),this.initControls()}},mounted:function(){this.$nextTick(this.init)}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap"},[e("div",{ref:"webglDom",staticClass:"webglDom"})])},staticRenderFns:[]};var c=i("VU/8")(h,d,!1,function(t){i("IZER")},null,null);e.default=c.exports}});
//# sourceMappingURL=4.b6962a4847e1d499a70b.js.map