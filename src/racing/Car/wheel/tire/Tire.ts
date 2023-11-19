import * as THREE from "three";

class Tire {
  constructor() {}

  render() {
    const geometry = new THREE.TorusGeometry(0.3, 0.05, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 'blue' });
    const torus = new THREE.Mesh(geometry, material);
    return torus;
  }
}

export { Tire };
