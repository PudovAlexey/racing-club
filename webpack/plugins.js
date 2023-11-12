const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

function makePlugins({ serve }) {
  const plugins = [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ];

  if (serve) {
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}

module.exports = {
  makePlugins,
};
