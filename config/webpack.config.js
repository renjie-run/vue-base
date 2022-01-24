const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => {
  const { webpackEnv } = options;
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return {
    mode: webpackEnv,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: isEnvDevelopment ? 'js/[name].bundle.js' : 'js/[name].chunk.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.vue$/,
          use: {
            loader: 'vue-loader',
          }
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      },
    },
    plugins: [
      isEnvProduction && new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.template.html',
      }),
    ].filter(Boolean),
  };
}