'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './source/js/modules.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/source/js'
  },
  watch: true,

  devtool: "source-map"
};
