const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var htmlTemplates = [
  'affiliates'
];

var multipleFiles = htmlTemplates.map(name => {
  return new HtmlWebPackPlugin({
    filename: "./" + name + ".html",
    template: "./src/pug/" + name + ".pug"
  });
});

module.exports = {
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.pug$/,
        use: [{
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'img:srcset'],
              interpolate: true
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader", // style nodes from js strings
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
            publicPath: './assets/fonts'
          }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            context: 'src',
            outputPath: '',
            publicPath: ''
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/pug/index.pug",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "./[name].css",
      chunkFilename: "[id].css"
    })
  ].concat(multipleFiles)
};