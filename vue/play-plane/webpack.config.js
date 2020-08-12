const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "./main.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
  },
};
