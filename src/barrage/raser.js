export default [
  {
    type: 'function',
    data: {
      emitFunc: (emitter) => {
        if (emitter.counter % 500 === 1) {
          emitter.emitRaserEveryDirection(
            8,
            1 * (0.1 + 6.28 * 2 * Math.cos(emitter.counter * 0.0074)),
            {
              spd: 4,
              accell: 0.07,
              rotationAccell: 0.027,
              onDestroy: (obj) => {
                emitter.removeBullet(obj);
              },
            },
            {
              texture: {
                category: 'raser',
                id: 'raser_blue',
              },
            },
            20,
          );
        }
      },
    },
  },
  {
    type: 'function',
    data: {
      emitFunc: (emitter) => {
        if (emitter.counter % 500 === 1) {
          emitter.emitRaserEveryDirection(
            8,
            1 * (0.1 + 6.28 * 2 * Math.cos(emitter.counter * 0.0074)),
            {
              spd: 4,
              accell: 0.07,
              rotationAccell: -0.027,
              onDestroy: (obj) => {
                emitter.removeBullet(obj);
              },
            },
            {
              texture: {
                category: 'raser',
                id: 'raser_pink',
              },
            },
            20,
          );
        }
      },
    },
  },
];
