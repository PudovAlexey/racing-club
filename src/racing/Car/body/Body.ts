import * as THREE from "three";
import "../../../assets/bmw/body/body.bin";
import Body from "../../../assets/bmw/body/body.gltf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

class CarBody {
    group = new THREE.Group();

    render() {
        const loader = new GLTFLoader();

        loader.load(Body, async (gltf) => {
          const model = gltf.scene;
          this.group.add(model);
        });

        this.group.position.x = 3.53;
        this.group.position.y = 0;
        this.group.position.z = 0.8;

        this.group.rotation.x = 0;
        this.group.rotation.y = -1.5;
        this.group.rotation.z = 0;
        return this.group;
    }
}

export {
    CarBody
};