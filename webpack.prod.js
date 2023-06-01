//user-created serverside js webpack.prodWebApi library - js module file

const path = require("path"); //pathLiteralJsObject //built-in serverside js pathWebApi library/non global core module
const common = require("./webpack.common"); //commonLiteralJsObject //user-created serverside js webpack.commonWebApi library - js module file
const { merge } = require("webpack-merge"); //functionObject //thirdparty serverside js webpack-mergeWebApi library/module/npm package

module.exports = merge(common, {
  //minify [name].[contenthash].bundle.js script file (ie dont remove the default terser-webpack-plugin in optimization->minimizer)
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
});
