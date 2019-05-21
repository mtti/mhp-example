const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
  mode: 'production',
  entry: ['./assets/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: '[name].[chunkhash].js',
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
          { loader: 'html-loader' },
        ],
      }
    ]
  },
  plugins: [],
};

module.exports = (env, argv) => {
  var cssFilename = '[name].[chunkhash].css';
  const mode = argv.mode || 'production';

  config.mode = mode;

  if (mode == 'development') {
    config.output.filename = '[name].js';
    cssFilename = '[name].css';
  }

  config.plugins.push(new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }));
  config.plugins.push(new MiniCssExtractPlugin({
    filename: cssFilename,
  }));
  /*config.plugins.push(new HtmlWebPackPlugin({
    template: './src/client/index.html',
    filename: './index.html',
  }));*/
  config.plugins.push(new ManifestPlugin());

  return config;
};
