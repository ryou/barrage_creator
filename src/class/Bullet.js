import * as PIXI from 'pixi.js';
import BaseObject from './BaseObject';

export default class Bullet extends BaseObject {
  constructor(inOption, inRenderOption) {
    const blendMap = {
      NORMAL: PIXI.BLEND_MODES.NORMAL,
      ADD: PIXI.BLEND_MODES.ADD,
    };

    super(inOption);

    this.renderOption = {
      texture: null,
      blendMode: 'NORMAL',
    };
    Object.assign(this.renderOption, inRenderOption);

    this.sprite = null;
    if (this.renderOption.texture !== null) {
      const { textures } = PIXI.loader.resources[this.renderOption.texture.category];
      this.sprite = new PIXI.Sprite(textures[this.renderOption.texture.id]);
      this.sprite.anchor.x = 0.5;
      this.sprite.anchor.y = 0.5;
      this.sprite.blendMode = blendMap[this.renderOption.blendMode];
      GLOBAL.app.stage.addChild(this.sprite);
    }
  }

  render() {
    if (this.sprite !== null) {
      this.sprite.x = this.position.x;
      this.sprite.y = this.position.y;
      this.sprite.rotation = this.rotation;
      this.sprite.scale.set(this.scale.x, this.scale.y);
    }
  }
}
