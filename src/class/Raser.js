import * as PIXI from 'pixi.js';
import BaseObject from './BaseObject';
import FixedQueue from './FixedQueue';

export default class Raser extends BaseObject {
  constructor(inOption, inRenderOption, inLength) {
    super(inOption);

    this.points = new FixedQueue(inLength);
    for (let i = 0; i < inLength; i += 1) {
      this.points.enqueue(new PIXI.Point(this.position.x, this.position.y));
    }

    this.renderOption = {
      texture: null,
      blendMode: PIXI.BLEND_MODES.NORMAL,
    };
    Object.assign(this.renderOption, inRenderOption);

    this.sprite = null;
    if (this.renderOption.texture !== null) {
      const { textures } = PIXI.loader.resources[this.renderOption.texture.category];
      this.sprite = new PIXI.mesh.Rope(
        textures[this.renderOption.texture.id],
        this.points.array,
      );
      this.sprite.blendMode = this.renderOption.blendMode;
      GLOBAL.app.stage.addChild(this.sprite);
    }
  }

  update() {
    super.update();

    this.points.enqueue(new PIXI.Point(
      this.position.x,
      this.position.y,
    ));
  }
}
