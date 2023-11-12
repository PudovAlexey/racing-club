function buildMode(env) {
  if (env === "production") return "production";

  return "development";
}

module.exports = {
  buildMode,
};
