import Bullet from './Bullet';
import BaseObject from './BaseObject';
import Raser from './Raser';

export default class BulletEmitter extends BaseObject {
  constructor(inBarrage, inOption) {
    super(inOption);

    this.bullets = [];
    this.barrage = inBarrage;
  }

  destroy() {
    this.bullets.forEach((bullet) => {
      bullet.destroy();
    });
  }

  removeBullet(bullet) {
    this.bullets = this.bullets.filter((v) => {
      return v !== bullet;
    });
  }

  update() {
    this.barrage.forEach((e) => {
      switch (e.type) {
        case 'single':
          for (let i = 0; i < e.counter.length; i += 1) {
            if (this.counter === e.counter[i]) {
              this.emit(
                e.data.bullet,
                e.data.render,
              );
            }
          }
          break;
        case 'every':
          for (let i = 0; i < e.counter.length; i += 1) {
            if (this.counter === e.counter[i]) {
              this.emitEveryDirection(
                e.data.dir_num,
                e.data.start_rotation,
                e.data.bullet,
                e.data.render,
              );
            }
          }
          break;
        case 'function':
          e.data.emitFunc(this);
          break;
        default:
          break;
      }
    });

    super.update();

    this.bullets.forEach((bullet) => {
      bullet.update();
    });
  }

  render() {
    super.render();

    this.bullets.forEach((bullet) => {
      bullet.render();
    });
  }

  /* 弾幕生成関数
  ----------------------------------------------------------*/
  emit(inBulletOption, inRenderOption) {
    const bulletOption = inBulletOption;
    bulletOption.position = {};
    bulletOption.position.x = this.position.x;
    bulletOption.position.y = this.position.y;
    bulletOption.onOver = (overBullet) => {
      this.removeBullet(overBullet);
    };

    const bullet = new Bullet(bulletOption, inRenderOption);
    this.bullets.push(bullet);
  }

  emitEveryDirection(inDirNum, inStartRotation = 0, inBulletOption, inRenderOption) {
    for (let i = 0; i < inDirNum; i += 1) {
      const bulletOption = inBulletOption;
      bulletOption.position = {};
      bulletOption.position.x = this.position.x;
      bulletOption.position.y = this.position.y;
      bulletOption.rotation = inStartRotation + (i * ((3.14 * 2) / inDirNum));
      bulletOption.onOver = (overBullet) => {
        this.removeBullet(overBullet);
      };

      const bullet = new Bullet(bulletOption, inRenderOption);
      this.bullets.push(bullet);
    }
  }

  emitRaserEveryDirection(
    inDirNum,
    inStartRotation = 0,
    inBulletOption,
    inRenderOption,
    inRaserLength,
  ) {
    for (let i = 0; i < inDirNum; i += 1) {
      const bulletOption = inBulletOption;
      bulletOption.position = {};
      bulletOption.position.x = this.position.x;
      bulletOption.position.y = this.position.y;
      bulletOption.rotation = inStartRotation + (i * ((3.14 * 2) / inDirNum));
      bulletOption.onOver = (overBullet) => {
        this.removeBullet(overBullet);
      };

      const bullet = new Raser(bulletOption, inRenderOption, inRaserLength);
      this.bullets.push(bullet);
    }
  }
}
