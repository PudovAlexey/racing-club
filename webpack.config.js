const path = require("path");
const { buildMode } = require("./webpack/mode");
const { makePlugins } = require("./webpack/plugins");
const { makeLoaders } = require("./webpack/loaders");
const { makeTarget } = require("./webpack/makeTarget");

const env = process.env.NODE_ENV;
const serve = process.env.SERVE;

module.exports = {
  mode: buildMode(env),
  target: makeTarget(env),
  entry: "./src/index.tsx",
  devtool: "source-map",
  plugins: makePlugins({ env, serve }),
  module: {
    rules: makeLoaders(env),
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
};
