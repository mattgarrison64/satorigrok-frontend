const { override, addWebpackResolve } = require("customize-cra");
const webpack = require("webpack");

module.exports = override(
  addWebpackResolve({
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util/"),
      "zlib": require.resolve("browserify-zlib"),
      "stream": require.resolve("stream-browserify"),
      "url": require.resolve("url/"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert/"),
      "buffer": require.resolve("buffer/"),
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "process": require.resolve("process/browser"),
    },
  }),
  (config) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      })
    );
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: require.resolve("process/browser"),
    };
    return config;
  }
);