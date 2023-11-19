import * as THREE from "three";
import { Tire } from "./tire/Tire";
import { Disc } from "./disc/disc";

class Wheel {
  group = new THREE.Group();
  constructor({position}) {
    this.group.position.x = position.x;
    this.group.position.y = position.y;
    this.group.position.z = position.z;
  }

  render() {
    const tire = new Tire();
    const disc = new Disc();

    const renderTire = tire.render();
    const renderDisc = disc.render();

    
    this.group.add(renderTire);
    this.group.add(renderDisc);

    return this.group;
  }
}

export { Wheel };
