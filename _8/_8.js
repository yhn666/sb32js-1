/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Win", "./_8/costumes/Win.svg", {
        x: 82.22457723731216,
        y: 97.08106335178104
      }),
      new Costume("Lose", "./_8/costumes/Lose.svg", {
        x: 82.2802056501116,
        y: 59.76958334960938
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "lose" }, this.whenIReceiveLose)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.visible = false;
    while (true) {
      if (this.stage.vars.score == 112) {
        this.costume = "Win";
        this.visible = true;
        yield* this.wait(1);
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }

  *whenIReceiveLose() {
    this.costume = "Lose";
    this.visible = true;
  }
}
