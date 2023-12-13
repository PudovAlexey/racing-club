import * as THREE from "three";
import "../../../assets/bmw/wheel/BMWWheel.bin";
import WHEEL from "../../../assets/bmw/wheel/BMWWheel.gltf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class Wheel {
  group = new THREE.Group();
  constructor({ position }) {
    this.group.position.x = position.x;
    this.group.position.y = position.y;
    this.group.position.z = position.z;
  }

  render() {
    const loader = new GLTFLoader();

    loader.load(WHEEL, async (gltf) => {
      const model = gltf.scene;

      // await this.renderer.compileAsync( model, this.camera, this.scene );

      this.group.add(model);
    });

    return this.group;
  }
}

export { Wheel };
