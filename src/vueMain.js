import Vue from 'vue';

new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
    position: {
      x: 400,
      y: 300,
    },
    barrage: {
      type: 'every',
      repeat: 5,
      interval: 5,
      data: {
        dir_num: 20,
        bullet: {
          spd: 4,
          rotationAccell: 0.04,
        },
        render: {
          texture: {
            category: 'rice',
            id: 'purple',
          },
          blendMode: 'ADD',
        },
      },
    },
  },
  computed: {
    barrage_counter() {
      const tmpArray = [];

      for (let i = 0; i < this.barrage.repeat; i += 1) {
        tmpArray.push(i * this.barrage.interval);
      }

      return tmpArray;
    },
  },
  methods: {
    initGame() {
      GLOBAL.gameController.init({
        barrage: [
          {
            type: this.barrage.type,
            counter: this.barrage_counter,
            data: {
              dir_num: this.barrage.data.dir_num,
              bullet: {
                spd: this.barrage.data.bullet.spd,
                accell: 0,
                rotation: 0,
                rotationAccell: this.barrage.data.bullet.rotationAccell,
              },
              render: {
                texture: {
                  category: this.barrage.data.render.texture.category,
                  id: `${this.barrage.data.render.texture.category}_${this.barrage.data.render.texture.id}`,
                },
                blendMode: this.barrage.data.render.blendMode,
              },
            },
          },
        ],
        position: {
          x: this.position.x,
          y: this.position.y,
        },
      });
    },
  },
});
