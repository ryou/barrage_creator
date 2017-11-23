export default [
  {
    type: 'function',
    data: {
      emitFunc: (emitter) => {
        if (emitter.counter < 30 && emitter.counter % 5 === 0) {
          emitter.emitEveryDirection(
            10,
            0,
            {
              spd: 3,
              accell: -0.05,
              bulletTextureType: 'bullet',
              bulletTexturePattern: 'blue',
              rotateSpd: 0.003,
            },
          );
        }
      },
    },
  },
];
