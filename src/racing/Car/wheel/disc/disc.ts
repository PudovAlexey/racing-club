import * as THREE from "three";

class Disc {
  geometry = null;
  material = null;
  capsule = null;
  constructor() {}

  addSettings() {
    
  }

  render() {
    const numbeOfRays = 8;
    const group = new THREE.Group();

    new Array(numbeOfRays).fill("").forEach((_, idx) => {
      const geometry = new THREE.CapsuleGeometry( 0.03, 0.5, 1, 11 ); 
      const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
      const ray = new THREE.Mesh( geometry, material );
      ray.rotation.z = idx;

      group.add(ray);
    });

    

    return group;
  }
}

export { Disc };
