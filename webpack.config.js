
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
      'js/bundle': './app.js',
      'css/style-bundle': './scss/app.scss'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './[name].js'
    },
    // watch: true,
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      stats: 'errors-only',
      port: 8080,
      compress: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /src/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env'],
              plugins: [require('babel-plugin-transform-object-rest-spread')],
            },
          },
        },
        {
          test: /\.scss$/,
          include: /src/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: './css/bundle.css'
              }
            },
            { 
              loader: 'extract-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules']
              }
            },
          ]
        },
        { 
          test: /\.html$/,
          use: ['html-loader'] 
        },
      ],
    },
  };