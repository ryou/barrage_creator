import * as PIXI from 'pixi.js';
import BulletEmitter from './BulletEmitter';

export default class GameController {
  constructor() {
    this.init();
  }

  static loadImages(onLoad) {
    PIXI.loader
      .add('rice', './images/bullet.json')
      .add('light', './images/raser.json')
      .add('raser', './images/raser2.json')
      .load(() => {
        onLoad();
      });
  }

  init(inOption) {
    this.counter = 0;

    if (Array.isArray(this.emitters)) {
      this.emitters.forEach((emitter) => {
        emitter.destroy();
      });
    }
    this.emitters = [];

    if (inOption && inOption.barrage && inOption.position) {
      const emitter = new BulletEmitter(
        inOption.barrage,
        {
          position: inOption.position,
        },
      );
      this.emitters.push(emitter);
    }
  }

  mainLoop() {
    requestAnimationFrame(() => {
      this.mainLoop();
    });

    this.update();

    this.render();
  }

  update() {
    this.emitters.forEach((emitter) => {
      emitter.update();
    });

    this.counter += 1;
  }

  render() {
    this.emitters.forEach((emitter) => {
      emitter.render();
    });
  }
}
