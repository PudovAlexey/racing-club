import * as THREE from "three";
import { Wheel } from "./Car/wheel/Wheel";
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
    this.animate();
  }

  spawnWheel() {
    const car = new Car();
    this.scene.add(car.render());
    // const wheel = new Wheel();

    // const wheelRender = wheel.render();

    // this.scene.add(wheelRender);
  }

  animate() {
    this.renderer.render(this.scene, this.camera);
    window.requestAnimationFrame(this.animate.bind(this));
  }

  onExit() {}
}

export { Core };
