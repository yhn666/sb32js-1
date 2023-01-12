/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("造型1", "./_4/costumes/造型1.svg", {
        x: 24.50362495717232,
        y: 9.557555000000008
      }),
      new Costume("造型2", "./_4/costumes/造型2.svg", {
        x: 24.50362495717232,
        y: 9.557545000000005
      }),
      new Costume("造型3", "./_4/costumes/造型3.svg", {
        x: 24.50362495717232,
        y: 9.557535000000001
      }),
      new Costume("造型4", "./_4/costumes/造型4.svg", {
        x: 24.50362495717232,
        y: 9.557524999999998
      }),
      new Costume("造型5", "./_4/costumes/造型5.svg", {
        x: 24.50362495717232,
        y: 9.557514999999967
      }),
      new Costume("造型6", "./_4/costumes/造型6.svg", {
        x: 24.50362495717232,
        y: 9.557514999999967
      }),
      new Costume("造型7", "./_4/costumes/造型7.svg", {
        x: 24.50362495717232,
        y: 9.557514999999967
      }),
      new Costume("造型8", "./_4/costumes/造型8.svg", {
        x: 24.50362495717232,
        y: 9.557514999999967
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *startAsClone() {
    while (true) {
      if (this.touching(this.sprites["_5"].andClones())) {
        this.stage.vars.score += 1;
        this.broadcast("转方向");
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.costume = "造型1";
    this.visible = true;
    this.goto(-75, 140);
    for (let i = 0; i < 16; i++) {
      for (let i = 0; i < 7; i++) {
        this.createClone();
        this.x += 25;
        yield;
      }
      this.y += -10;
      this.x = -75;
      this.costumeNumber += 1;
      yield;
    }
    this.visible = false;
    this.broadcast("开始");
  }
}
