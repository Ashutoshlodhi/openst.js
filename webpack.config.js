const path = require('path');

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const webpackOption = {
  target: 'web',
  node: { fs: 'empty' },
  entry: {
    bundle: './index.js',
    'bundle.min': './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [new webpack.NormalModuleReplacementPlugin(/utils\/contractReader\.js/, 'contractReaderWebOverwrite.js')],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};

module.exports = webpackOption;
