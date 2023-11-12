const { makePlugins } = require("./babel/plugins");

const env = process.env.NODE_ENV;

module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ],
  plugins: makePlugins(env),
};
