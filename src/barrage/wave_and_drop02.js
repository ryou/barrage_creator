export default [
  {
    type: 'function',
    data: {
      emitFunc: (emitter) => {
        if (emitter.counter % 3 === 0) {
          emitter.emitEveryDirection(
            6,
            6.28 * 2 * Math.cos(emitter.counter * 0.008),
            {
              spd: 1,
              bulletTextureType: 'bullet',
              bulletTexturePattern: 'blue',
            },
          );
        }
      },
    },
  },
  {
    type: 'function',
    data: {
      emitFunc: (emitter) => {
        if (emitter.counter % 3 === 0) {
          emitter.emitEveryDirection(
            6,
            -6.28 * 2 * Math.cos(emitter.counter * 0.008),
            {
              spd: 1,
              bulletTextureType: 'bullet',
              bulletTexturePattern: 'red',
            },
          );
        }
      },
    },
  },
];
