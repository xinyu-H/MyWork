<template>
    <div class="wrap">
        <div class="webglDom" ref="webglDom"></div>
    </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import TWEEN from "tween.js";
const ThreeBSP = require('three-js-csg')(THREE)

export default {
    name: 'Door',
    data(){
        return {
            width: 0,
            height: 0,
            scene: null,
            camera: null,
            controls: null,
            renderer: null,
            isOpenDoor: true,
            amdLight: null,
            dirLight: null,
            ponLight: null,
            // 鼠标位置
            raycaster: '',
            mouse: '',
            dummy: '',
        }
    },
    methods: {
        // 场景
        initScene(){
            // 初始化画布宽高
            const container = this.$refs.webglDom;
            this.width = container.offsetWidth;
            this.height = container.offsetHeight;
            this.scene = new THREE.Scene();
            this.scene.fog = new THREE.Fog(0x005577, 1, 2800)
            // this.scene.background = new THREE.Color( 0x000000 );
            this.raycaster = new THREE.Raycaster();
            this.mouse = new THREE.Vector2();
            this.dummy = new THREE.Object3D();
        },
        // 相机
        initCamera(){
            this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.01, 10000);
            this.camera.position.set(0,0,500);
            this.add(this.camera);
            this.camera.lookAt(this.scene.position);
        },
        // 控制器
        initControls(){
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        },
        // 添加灯光
        initLight(){
            this.amdLight = new THREE.AmbientLight('#aaa');
			this.dirLight = new THREE.DirectionalLight('#aaa')
			this.ponLight = new THREE.PointLight('#aaa')
			this.amdLight.position.set( 0, 0, 0 )
			this.dirLight.position.set( 0, 0, 0 )
            this.ponLight.position.set( 0, 0, 0 )
			this.add(this.amdLight);		    // 环境光
			this.add(this.dirLight);		    // 方向光
			this.add(this.ponLight);			// 点光源
        },
        // 渲染器
        initRenderer(){
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            })
            this.renderer.setClearColor(0x4682B4,1.0);
            // this.renderer.setClearAlpha(0);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.setSize(this.width, this.height);
            // 开启阴影支持
            this.renderer.shadowMap.enabled = true;
            // 阴影类型
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            this.$refs.webglDom.appendChild(this.renderer.domElement);
            this.render();
        },
        initBSP(l, h, w, x, y, z){
            let geometry = new THREE.BoxGeometry(l, h, w);
            let mesh = new THREE.Mesh(geometry)
            mesh.position.set(x, y, z)
            return new ThreeBSP(mesh);
        },
        initDoor(){
            let frameBSP = this.initBSP(150, 230, 6, 0, 0, 0)   // 门框
            let doorBSP = this.initBSP(130, 220, 6, 0, -5, 0)   // 门占位
            let resultBSP = frameBSP.subtract(doorBSP); // 取交集
            let result = resultBSP.toMesh();        // 相交部分转换为mesh
            let boxGeometry = result.geometry;      // 转成geometry
            let boxMaterial = new THREE.MeshLambertMaterial ({     // 添加材质
                color: '#999'
            });
            let wallMesh = new THREE.Mesh(boxGeometry,boxMaterial);
            this.add(wallMesh);

            // 门
            let _this = this;
            let img = require('../assets/img/Door/door_right.png')
            let loader = new THREE.TextureLoader();
            loader.load(img,function(texture){
                const geometry = new THREE.BoxGeometry(130, 220, 2);
                const material = new THREE.MeshLambertMaterial ({
                    color: '#ccc',
                    map: texture
                });
                material.transparent = true;
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(-65, -5, -2);
                _this.dummy.add(mesh)
                _this.dummy.position.set(65, 0, 0);
                _this.dummy.name = 'door'
                _this.add(_this.dummy);
                window.addEventListener("click", _this.onClick, false);
            })
            
        },
        onClick(event){
            event.preventDefault();
            let _this = this;
            // 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.mouse, this.camera);
            let  intersects = this.raycaster.intersectObjects(this.scene.children, true);
            let door = this.scene.getObjectByName('door')
            if (intersects.length > 0) {
                if(this.isOpenDoor){
                    console.log(door)
                    // door.rotation.y -= 0.25*Math.PI;
                    let openDoor = new TWEEN.Tween({y: 0})
                    openDoor.to({y: -0.25*Math.PI}, 1000);
                    openDoor.easing(TWEEN.Easing.Elastic.Out);
                    openDoor.onUpdate(function () {
                        door.rotation.set(0, this.y , 0);
                    }).start();
                    this.isOpenDoor = false;
                } else {      		
                    // door.rotation.y += 0.25*Math.PI;
                    let closeDoor = new TWEEN.Tween({y: -0.25*Math.PI})
                    closeDoor.to({y: 0},1000);
                    closeDoor.easing(TWEEN.Easing.Elastic.Out);
                    closeDoor.onUpdate(function () {
                        door.rotation.set(0, this.y, 0);
                    }).start();
                    this.isOpenDoor = true;
                }
            }
        },
        addBox (chang, gao, kuan, color, x, y, z) {
            const geometry = new THREE.BoxGeometry(chang, gao, kuan);
            const material = new THREE.MeshLambertMaterial ({
                color: color
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(x, y, z);
            this.add(mesh);
        },
        add (obj) {
            this.scene.add(obj);
        },
        render () {
            let vector = this.camera.position.clone();
            this.ponLight.position.set(vector.x,vector.y,vector.z); //点光源位置
            this.renderer.render(this.scene, this.camera);
            TWEEN.update();
            requestAnimationFrame(this.render);
        },
        init () {
            this.initScene()
            this.initCamera()
            this.initLight()
            this.initDoor()
            this.initRenderer()
            this.initControls()
        }
    },
    mounted(){
        this.$nextTick(this.init);
    }
}
</script>

<style lang="scss">
    .wrap{
        width: 100%;
        height: 100%;
        // background: url('../assets/img/5.jpg') no-repeat;
        background-size: 100% 100%;
        .webglDom{
            width: 100%;
            height: 100%;
        }
    }
</style>