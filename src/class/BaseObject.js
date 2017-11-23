export default class BaseObject {
  constructor(inMoveOption) {
    const defaultOption = {
      position: {
        x: 0,
        y: 0,
      },
      spd: 0,
      accell: 0,
      rotation: 0,
      rotationAccell: 0,
      scale: {
        x: 1.0,
        y: 1.0,
      },
      overType: 'normal',
      onDestroy: null,
      onAfterUpdate: null,
    };

    Object.assign(this, defaultOption);
    Object.assign(this, inMoveOption);

    this.counter = 0;
  }

  destroy() {
    GLOBAL.app.stage.removeChild(this.sprite);
    if (this.onDestroy !== null) {
      this.onDestroy(this);
    }
  }

  update() {
    this.spd += this.accell;
    this.rotation += this.rotationAccell;

    const vector = {
      x: this.spd * Math.cos(this.rotation),
      y: this.spd * Math.sin(this.rotation),
    };

    this.position.x += vector.x;
    this.position.y += vector.y;

    if (this.onAfterUpdate !== null) {
      this.onAfterUpdate(this);
    }

    // 画面外に出た際に削除
    const margin = 400;
    const screenW = GLOBAL.app.renderer.screen.width;
    const screenH = GLOBAL.app.renderer.screen.height;
    const overW = this.position.x > (screenW + margin);
    const underW = this.position.x < -margin;
    const overH = this.position.y > (screenH + margin);
    const underH = this.position.y < -margin;
    if (overW || underW || overH || underH) {
      this.destroy();
    }

    this.counter += 1;
  }

  render() {
  }
}
