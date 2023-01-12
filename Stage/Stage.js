/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("背景1", "./Stage/costumes/背景1.svg", {
        x: 168.07944499999985,
        y: 250.2681260569459
      })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars._ = -34;
    this.vars.score = 2;
    this.vars.i = 25;
  }
}
