//user-created serverside js webpack.configWebApi library - js module file

const path = require("path"); //pathLiteralJsObject //built-in serverside js pathWebApi library/non global core module

module.exports = {
  //default mode: "production"
  entry: {
    main: "./src/index.js",
    //style: "./src/style.scss" ,
  },
  module: {
    rules: [
      { test: /\.html$/, use: ["html-loader"] },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource",
      },
      //old way of using file-loader loader instead of asset modules
      //{
      //  test: /\.(svg|png|jpg|gif)$/,
      //  loader: "file-loader",
      //  options: {
      //    name: "[name].[contenthash].[ext]",
      //    outputPath: "images",
      //    esModule: false,
      //  },
      //  type: "javascript/auto",
      //},
    ],
  },
};
