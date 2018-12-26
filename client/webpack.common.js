var path      = require('path');
const fs      = require('fs');

const appRoot = fs.realpathSync(process.cwd());
const appModules = path.resolve(appRoot, 'node_modules');
const components = path.join(process.cwd(), "components");
const containers = path.join(process.cwd(), "containers");
const RMODS = [appModules, components, containers];

module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(process.cwd(), "../dist/js"),
    filename: "mybundle.js"
  },
  resolve: {
    modules: RMODS, 
    extensions: ['.js'] 
  },
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
        loader: 'babel-loader'
      }
    ]
  },
  stats: {
    colors: true
  }
};
