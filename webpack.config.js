module.exports = [
  {
    entry: './src/app.scss',
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: 'style-bundle.js',
    },
watch: true,
    devServer: {
      contentBase: './src',
      compress: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'bundle.css',
              },
            },
            { loader: 'extract-loader' },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
              options: {
                includePaths: ['./node_modules'],
              }
            },
          ]
        }
      ]
    },
  },
  {
    entry: './src/Main.js',
    devtool: 'inline-source-map',
    output: {
      filename: 'bundle.js',
    },
    watch: true,
    devServer: {
      contentBase: './src',
      compress: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env'],
              plugins: [require('babel-plugin-transform-object-rest-spread')],
            },
          },
        },
      ],
    },
  }
]

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
