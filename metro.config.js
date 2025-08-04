const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

/* Metro bundler is only run in mobile */
/* Resolving for shimmed react dom --> only for mobile */
const config = mergeConfig(getDefaultConfig(__dirname), {
  resolver: {
    extraNodeModules: {
      "react-dom": path.resolve(__dirname, "shims/react-dom.js"),
    },
  },
});

module.exports = config;
