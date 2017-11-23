import * as PIXI from 'pixi.js';

export default [
  [
    {
      type: 'function',
      data: {
        emitFunc: (emitter) => {
          if (emitter.counter % 4 === 1) {
            emitter.emitEveryDirection(
              12,
              1 * (0.1 + 6.28 * 2 * Math.cos(emitter.counter * 0.0074)),
              {
                spd: 1.5,
                onDestroy: (obj) => {
                  emitter.removeBullet(obj);
                },
              },
              {
                texture: {
                  category: 'light',
                  id: 'light_blue',
                },
                blendMode: PIXI.BLEND_MODES.ADD,
              },
            );
          }
        },
      },
    },
  ],
  [
    {
      type: 'function',
      data: {
        emitFunc: (emitter) => {
          if (emitter.counter % 4 === 1) {
            emitter.emitEveryDirection(
              12,
              -1 * (0.1 + 6.28 * 2 * Math.cos(emitter.counter * 0.0074)),
              {
                spd: 1.5,
                onDestroy: (obj) => {
                  emitter.removeBullet(obj);
                },
              },
              {
                texture: {
                  category: 'light',
                  id: 'light_pink',
                },
                blendMode: PIXI.BLEND_MODES.ADD,
              },
            );
          }
        },
      },
    },
  ],
];
