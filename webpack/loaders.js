function makeLoaders(env) {
  return [
    { test: /\.(html)$/, use: ["html-loader"] },
    {
      test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
      type: env === "production" ? "asset" : "asset/resource",
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
  ];
}

module.exports = {
  makeLoaders,
};
