/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("造型1", "./_6/costumes/造型1.svg", {
        x: 114.5537651909722,
        y: 2.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["_5"].andClones())) {
        this.broadcast("lose");
        yield* this.wait(1);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
