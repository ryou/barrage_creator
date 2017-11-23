export default [
  {
    type: 'every',
    counter: [0, 20, 40, 60, 80, 100],
    data: {
      dir_num: 10,
      bullet: {
        spd: 4,
        accell: 0.015,
        rotation: 1.57 + 0.5,
        rotationAccell: -0.0125,
      },
      render: {
        texture: {
          category: 'rice',
          id: 'rice_blue',
        },
      },
    },
  },
  {
    type: 'every',
    counter: [10, 30, 50, 70, 90, 110],
    data: {
      dir_num: 10,
      bullet: {
        spd: 4,
        accell: 0.015,
        rotation: 1.57 - 0.5,
        rotationAccell: 0.0125,
      },
      render: {
        texture: {
          category: 'rice',
          id: 'rice_red',
        },
      },
    },
  },
  // {
  //   type: 'every',
  //   counter: [0, 30, 60, 90],
  //   data: {
  //     dir_num: 10,
  //     start_rotation: 0,
  //     bullet: {
  //       spd: 4,
  //       // accell: 0.1,
  //       // rotationAccell: 0.04,
  //     },
  //     render: {
  //       texture: {
  //         category: 'light',
  //         id: 'light_blue',
  //       },
  //     },
  //   },
  // },
];
