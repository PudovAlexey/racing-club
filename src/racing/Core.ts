import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons";
import { Car } from "./Car/Car";

class Core {
  controls = null;
  scene = null;
  camera = null;
  renderer = null;
  constructor() {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );

    // gui.add(this.controls)
  }

  onInit() {
    this.camera.position.z = 5;
    document.body.appendChild(this.renderer.domElement);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.renderer.setClearColor( 0xffffff );
    this.animate();

    const ambientLight = new THREE.AmbientLight( 0xffffff );
    this.scene.add( ambientLight );

    const pointLight = new THREE.PointLight( 0xffffff, 15 );
    this.camera.add( pointLight );
    this.scene.add( this.camera );
  }

  spawnWheel() {
    // const loader = new GLTFLoader();
    // console.log(loader, 'loadr')
    // loader.load(WHEEL, async (gltf) => {
    //   const model = gltf.scene;

    //   // wait until the model can be added to the scene without blocking due to shader compilation

    //   await this.renderer.compileAsync( model, this.camera, this.scene );

    //   this.scene.add( model );
    // });
    
    const car = new Car();
    this.scene.add(car.render());
    const wheel = new Wheel();
    const wheelRender = wheel.render();

    this.scene.add(wheelRender);

  }

  animate() {
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.animate.bind(this));
  }

  onExit() {}
}

export { Core };
