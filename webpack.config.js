const path = require('path');

module.exports = {
  mode: 'production', // Make sure it's in production mode for optimized output
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',  // Output file name
    path: path.resolve(__dirname, 'build/static/js'),  // Make sure this is set correctly
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
