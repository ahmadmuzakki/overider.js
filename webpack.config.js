const path = require('path');

module.exports = {
  entry: ['./index.js'],
  output: {
    filename: 'overider.js',
    path: path.resolve(__dirname, 'dist')
  },
  target:'node',
  node:{
    fs: 'empty'
  }
};