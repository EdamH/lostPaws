module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".jsx", ".tsx", ".ts", ".js", ".json"],
        },
      ],
    ],
  };
};