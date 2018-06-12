// Thank you to this blog https://hackernoon.com/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a
// I basically just copied what the author went through

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './app.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: './js/bundle.js'
    },
    watch: true,
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      open: true,
      stats: 'errors-only',
      port: 8080,
      compress: true,
      devtool: 'inline-source-map',
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
        { test: /\.html$/, use: ['html-loader'] },
      ],
    },
  }
  

// [
//   {
//     entry: './src/app.scss',
//     output: {
//       // This is necessary for webpack to compile
//       // But we never use style-bundle.js
//       filename: 'style-bundle.js',
//     },
//     watch: true,
//     devServer: {
//       contentBase: './src',
//       compress: true,
//       port: 9000,
//     },
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: [
//             {
//               loader: 'file-loader',
//               options: {
//                 name: 'bundle.css',
//               },
//             },
//             { loader: 'extract-loader' },
//             { loader: 'css-loader' },
//             {
//               loader: 'sass-loader',
//               options: {
//                 includePaths: ['./node_modules'],
//               }
//             },
//           ]
//         }
//       ]
//     },
//   },
//   {
//     entry: './src/main.js',
//     devtool: 'inline-source-map',
//     output: {
//       filename: 'bundle.js',
//     },
//     watch: true,
//     devServer: {
//       contentBase: './src',
//       compress: true,
//       port: 9000,
//     },
    // module: {
    //   rules: [
    //     {
    //       test: /\.js$/,
    //       exclude: /node_modules/,
    //       use: {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: ['babel-preset-env'],
    //           plugins: [require('babel-plugin-transform-object-rest-spread')],
    //         },
    //       },
    //     },
    //   ],
    // },
//   }
// ]

// module.exports = [
//   {
//     entry: './app.scss',
//     output: {
//       // This is necessary for webpack to compile
//       // But we never use style-bundle.js
//       filename: 'style-bundle.js',
//     },
//     module: {
//       rules: [{
//         test: /\.scss$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: 'bundle.css',
//             },
//           },
//           { loader: 'extract-loader' },
//           { loader: 'css-loader' },
//           {
//             loader: 'sass-loader',
//             options: {
//               includePaths: ['./node_modules'],
//             }
//           },
//         ]
//       }]
//     },
//   },
//   {
//     entry: "./src/Main.js",
//     output: {
//       filename: "bundle.js"
//     },
//     module: {
//       loaders: [{
//         test: /\.js$/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['env']
//         }
//       }]
//     },
//   }
// ];
