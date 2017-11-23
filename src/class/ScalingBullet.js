import Bullet from './Bullet';

export default class ScalingBullet extends Bullet {
  constructor(inOption) {
    super(inOption);

    this.lifeTime = 50;
    this.scale = 0;
    this.counter = 0;
  }

  update() {
    if (this.counter > this.lifeTime) {
      super.destroy();
    }

    super.update();

    this.scale = Math.sin(this.counter * (3.14 / this.lifeTime));

    this.counter += 1;
  }

  render() {
    super.render();

    this.sprite.scale.set(this.scale, this.scale);
  }
}
