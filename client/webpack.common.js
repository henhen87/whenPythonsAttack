var path      = require("path");
const fs      = require("fs");

const appRoot = fs.realpathSync(process.cwd());
const appModules = path.resolve(appRoot, "node_modules");
const components = path.join(process.cwd(), "components");
const containers = path.join(process.cwd(), "containers");
const RMODS = [appModules, components, containers];
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const SASS_TYPE = require("sass");
console.log('PROCESS', process.env.NODE_ENV)

module.exports = {
  entry: ["./index.js"],
  output: {
    path: path.join(process.cwd(), "../dist/js"),
    filename: "mybundle.js"
  },
  resolve: {
    modules: RMODS, 
    extensions: [".js"] 
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "[name].css"
    })
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  },
  stats: {
    colors: true
  }
};
