//user-created serverside js webpack.devWebApi library - js module file

const path = require("path"); //pathLiteralJsObject //built-in serverside js pathWebApi library/non global core module
const common = require("./webpack.common"); //commonLiteralJsObject //user-created serverside js webpack.commonWebApi library - js module file
const { merge } = require("webpack-merge"); //functionObject //thirdparty serverside js webpack-mergeWebApi library/module/npm package
const HtmlWebpackPlugin = require("html-webpack-plugin"); //Class //thirdparty serverside js html-webpack-pluginWebApi library/module/npm package

module.exports = merge(common, {
  //dont minify [name].bundle.js script file (ie remove the default terser-webpack-plugin pugin in optimization->minimizer)
  mode: "development",
  devtool: "inline-source-map",
  //remove "eval" devtool (ie. eval())
  //devtool: false,
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext]",
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //converts js to css and inject style tags with that css into index.html (ie DOM)
          "css-loader", //converts css to js
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", //converts js to css and injects style tags with that css into index.html (ie DOM)
          "css-loader", //converts css to js
          "sass-loader", //converts css to scss
        ],
      },
    ],
  },
});
