import * as THREE from "three";

class Bottom {
    geometry = null;
    material = null;
    cube = null;
    constructor() {
        this.geometry = new THREE.BoxGeometry( 3, 0.05, 1.9 ); 
        this.material = new THREE.MeshBasicMaterial( {color: 'gray'} ); 
        this.cube = new THREE.Mesh( this.geometry, this.material ); 
    }

    render() {
        this.cube.position.x = 1.5;
        this.cube.position.z = 1;
        return this.cube;
    }
}

export {
    Bottom
};