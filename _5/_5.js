/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("造型1", "./_5/costumes/造型1.svg", {
        x: 21.98853999999986,
        y: 21.94458867526896
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "转方向" }, this.whenIReceive),
      new Trigger(Trigger.BROADCAST, { name: "开始" }, this.whenIReceive2),
      new Trigger(Trigger.BROADCAST, { name: "lose" }, this.whenIReceiveLose)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -180);
    this.direction = this.random(-90, 90);
  }

  *whenIReceive() {
    yield* this._();
  }

  *whenIReceive2() {
    while (!(this.stage.vars.score == 112)) {
      this.move(7);
      /* TODO: Implement motion_ifonedgebounce */ null;
      if (this.touching(this.sprites["_7"].andClones())) {
        yield* this._();
      }
      yield;
    }
  }

  *_() {
    this.stage.vars._ = this.direction;
    if (
      (0 < this.stage.vars._ && this.stage.vars._ < 90) ||
      (90 < this.stage.vars._ && this.stage.vars._ < 180)
    ) {
      this.direction = 180 - this.stage.vars._;
    }
    if (
      (0 > this.stage.vars._ && this.stage.vars._ > -90) ||
      (-90 > this.stage.vars._ && this.stage.vars._ > -180)
    ) {
      this.direction = -180 - this.stage.vars._;
    }
    if (this.stage.vars._ == 180 || this.stage.vars._ == 90) {
      this.direction = this.stage.vars._ - 180;
    }
    if (this.stage.vars._ == 0 || this.stage.vars._ == -90) {
      this.direction = this.stage.vars._ + 180;
    }
  }

  *whenIReceiveLose() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
