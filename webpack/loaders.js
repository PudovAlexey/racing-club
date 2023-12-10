function makeLoaders(env) {
  return [
    { test: /\.(html)$/, use: ["html-loader"] },
    {
      test: /\.(png|jpe?g|gif|svg|webp|ico|JPG)$/i,
      type: env === "production" ? "src/assets" : "src/assets",
    },
    {
      test: /\.(png|jpe?g|gif|glb|gltf|bin)$/i,
      loader: "file-loader",
      options: {
          publicPath: "./",
          name: "[name].[ext]"
      },
    },
    {
      test: /\.(woff2?|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
      },
    },
    {
      test: /\.jsx|.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
      },
    },
    {
      test: /\.obj|\.tml|\.JPG$/,
      use: {
        loader: "webpack-obj-loader"
      }
    }
  ];
}

module.exports = {
  makeLoaders,
};
