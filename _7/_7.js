/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("造型1", "./_7/costumes/造型1.svg", {
        x: 29.665359355468908,
        y: 4.985104999999976
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "向右" }, this.whenIReceive),
      new Trigger(Trigger.BROADCAST, { name: "向左" }, this.whenIReceive2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceive() {
    this.x += 10;
    /* TODO: Implement motion_ifonedgebounce */ null;
  }

  *whenIReceive2() {
    this.x += -10;
    /* TODO: Implement motion_ifonedgebounce */ null;
  }

  *whenGreenFlagClicked() {
    this.goto(0, -200);
  }
}
