//user-created serverside js webpack.prodWebApi library - js module file

const path = require("path"); //pathLiteralJsObject //built-in serverside js pathWebApi library/non global core module
const common = require("./webpack.common"); //commonLiteralJsObject //user-created serverside js webpack.commonWebApi library - js module file
const { merge } = require("webpack-merge"); //functionObject //thirdparty serverside js webpack-mergeWebApi library/module/npm package
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); //Class //thirdparty serverside js clean-webpack-pluginWebApi library/module/npm package
const HtmlWebpackPlugin = require("html-webpack-plugin"); //Class //thirdparty serverside js html-webpack-pluginWebApi library/module/npm package
const TersrWebpackPlugin = require("terser-webpack-plugin"); //Class //thirdparty serverside js terser-webpack-pluginWebApi library/module/npm package

module.exports = merge(common, {
  //minify [name].[contenthash].bundle.js script file (ie dont remove the default terser-webpack-plugin plugin in optimization->minimizer)
  mode: "production",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    //new alternative instead of using clean-webpack-plugin plugin
    //clean: true,
  },
  optimization: {
    //re-adding the overridden default terser-webpack-plugin plugin
    minimizer: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new TersrWebpackPlugin(),
    ],
  },
  plugins: [new CleanWebpackPlugin()],
});