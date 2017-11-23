const path = require('path');

module.exports = {
  entry: {
    barrage: './src/barrage.js',
    vue_bundle: './src/vueMain.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
};
