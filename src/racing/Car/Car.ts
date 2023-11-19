import * as THREE from "three";
import { Wheel } from "./wheel/Wheel";

class Car {
  constructor() {}

  renderTires() {
    const group = new THREE.Group()
       const frontLeftWheel = new Wheel({
        position: {x: 0, y: 0, z: 0}
       });
       const frontRightWheel = new Wheel({
        position: {x: 0, y: 0, z: 0}
       });
       const backLeftWheel = new Wheel({
        position: {x: 0, y: 0, z: 0}
       });
       const backRightWheel = new Wheel({
        position: {x: 0, y: 0, z: 0}
       });

    group.add(frontLeftWheel.render());
    group.add(frontRightWheel.render());
    group.add(backLeftWheel.render());
    group.add(backRightWheel.render());

    return group;
  }

  render() {
   const wheelsGroup = this.renderTires(); 

   return wheelsGroup
  }
}

export { Car };
