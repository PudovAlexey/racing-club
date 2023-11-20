import * as THREE from "three";
import { Wheel } from "./wheel/Wheel";
import { Bottom } from "./bottom/Bottom";

class Car {
  constructor() {}

  renderTires() {
    const group = new THREE.Group();
       const frontLeftWheel = new Wheel({
        position: {x: 3, y: 0, z: 0}
       });
       
       const frontRightWheel = new Wheel({
        position: {x: 3, y: 0, z: 2}
       });

       const backLeftWheel = new Wheel({
        position: {x: 0, y: 0, z: 0}
       });
       const backRightWheel = new Wheel({
        position: {x: 0, y: 0, z: 2}
       });

    group.add(frontLeftWheel.render());
    group.add(frontRightWheel.render());
    group.add(backLeftWheel.render());
    group.add(backRightWheel.render());

    return group;
  }

    renderBottom() {
      const bottom = new Bottom();

      return bottom.render();
    }

  render() {
    const group = new THREE.Group();
   const wheelsGroup = this.renderTires();
   const bottom = this.renderBottom();

   group.add(wheelsGroup);
   group.add(bottom);



   return group;
  }
}

export { Car };
