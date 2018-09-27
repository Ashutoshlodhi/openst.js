const path = require('path'),
  webpack = require('webpack'),
  uglifyJsPlugin = require('uglifyjs-webpack-plugin');

const rootPreFix = '.',
  entryFile = rootPreFix + '/index.js',
  polyfillFile = '@babel/polyfill';

const webpackOption = {
  target: 'web',
  node: { fs: 'empty' },
  entry: {
    bundle: [polyfillFile, entryFile],
    'bundle.min': [polyfillFile, entryFile]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [new webpack.NormalModuleReplacementPlugin(/utils\/contractProvider\.js/, 'contractProviderWeb.js')],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: '> 0.25%, not dead'
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new uglifyJsPlugin({
        include: /\.min\.js$/
      })
    ]
  }
};

module.exports = webpackOption;
