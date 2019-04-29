const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'compiled'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'compiled'),
    compress: true,
    port: 9000
  },
  resolve: {},
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      {
        from: 'src/styles',
        to: 'styles',
        force: true
        
      }
    ]),
    new WriteFilePlugin([
      {
        test: /\.css$/,
        useHashIndex: true
      }
    ])
  ]
};
