const path = require('path');

module.exports = {
  mode: 'production', // Add this line for development mode
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/interactive-code-walkthrough/',
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
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react-syntax-highlighter': path.resolve(__dirname, 'node_modules/react-syntax-highlighter/dist/cjs'),
    },
  }
};
