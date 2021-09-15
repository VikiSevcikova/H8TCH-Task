const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: [
      {
        watch: true,
      }
    ],
    port: 3000,
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }
      ]
  }
};