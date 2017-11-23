import * as PIXI from 'pixi.js';

export default [
  {
    type: 'function',
    data: {
      emitFunc: (emitter) => {
        if (emitter.counter % 300 === 1) {
          emitter.emitEveryDirection(
            100,
            0,
            {
              spd: 1.5,
              isReflected: false,
              onDestroy: (obj) => {
                emitter.removeBullet(obj);
              },
              onAfterUpdate: (bullet) => {
                if (!bullet.isReflected && (bullet.position.x < 0 || bullet.position.x > 800)) {
                  bullet.position.x = (bullet.position.x < 0) ? 0 : 800;

                  const vector = {
                    x: Math.cos(bullet.rotation),
                    y: Math.sin(bullet.rotation),
                  };
                  vector.x *= -1;

                  const radian = Math.atan2(vector.y, vector.x);
                  bullet.rotation = radian;

                  bullet.isReflected = true;
                }
                if (!bullet.isReflected && bullet.position.y < 0) {
                  bullet.position.y = 0;

                  const vector = {
                    x: Math.cos(bullet.rotation),
                    y: Math.sin(bullet.rotation),
                  };
                  vector.y *= -1;

                  const radian = Math.atan2(vector.y, vector.x);
                  bullet.rotation = radian;

                  bullet.isReflected = true;
                }
              },
            },
            {
              texture: {
                category: 'rice',
                id: 'rice_red',
              },
            },
          );
        }
      },
    },
  },
];
