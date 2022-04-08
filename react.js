const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const dotenv = require('dotenv-safe');
const CopyPlugin = require('copy-webpack-plugin');

const { required } = dotenv.config();

const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * @type {webpack.Configuration}
 */
const config = {
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  output: {
    path: path.join(__dirname, '..', 'build', 'react'),
    filename: 'bundle.js',
  },
  target: 'electron-renderer',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  performance: false,
  resolve: {
    extensions: ['.tsx', '.ts', 'jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-typescript', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        type: 'asset/resource',
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.join(__dirname, '..', 'src', 'tsconfig.json'),
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html'),
      favicon: path.join(__dirname, '..', 'public', 'favicon.ico'),
    }),
    new webpack.EnvironmentPlugin(required),
    !isDevelopment &&
      new CopyPlugin({
        patterns: [
          {
            from: path.join(__dirname, '..', 'public', 'splash.html'),
            to: path.join(__dirname, '..', 'build', 'react', 'splash.html'),
          },
        ],
      }),
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    port: 8080,
  },
};

module.exports = config;
