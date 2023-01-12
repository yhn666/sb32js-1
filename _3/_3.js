/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("造型1", "./_3/costumes/造型1.svg", {
        x: 61.52909500000004,
        y: 305.3390449999998
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(60, 0);
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        this.broadcast("向右");
      }
      yield;
    }
  }
}
