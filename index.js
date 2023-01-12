import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import _2 from "./_2/_2.js";
import _3 from "./_3/_3.js";
import _4 from "./_4/_4.js";
import _5 from "./_5/_5.js";
import _6 from "./_6/_6.js";
import _7 from "./_7/_7.js";
import _8 from "./_8/_8.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  _2: new _2({
    x: -60,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  _3: new _3({
    x: 60,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  _4: new _4({
    x: -75,
    y: -20,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false,
    layerOrder: 1
  }),
  _5: new _5({
    x: -80.28700648590461,
    y: -233.1739722419387,
    direction: 34.00000000000003,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 4
  }),
  _6: new _6({
    x: 0,
    y: -244,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  _7: new _7({
    x: 0,
    y: -200,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  _8: new _8({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
