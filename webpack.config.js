const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = path.resolve(__dirname);
const { presets } = require(`${appDirectory}/babel.config.js`);

const compileNodeModules = [
  // Add every react-native package that needs compiling
  // "@react-navigation",
  'react-native',
  // "react-native-css-interop",
  // "react-native-safe-area-context",
  // "react-native-screens",
  // "react-native-gesture-handler",
  // "react-native-reanimated",
  // "react-native-svg",
  'react-native-web',
].map(moduleName => path.resolve(appDirectory, `node_modules/${moduleName}`));

const babelLoaderConfiguration = {
  test: /\.[jt]sx?$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.js'), // Entry to your application
    path.resolve(appDirectory, 'App.tsx'), // Change this to your main App file --> .web.ts files are prioritized
    // path.resolve(appDirectory, "src"), // all src elements are prebuild
    // path.resolve(appDirectory, "app-linking.ts"), // the linking structure info of app
    ...compileNodeModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins: ['react-native-web'],
    },
  },
};

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
};

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
    },
  },
};

module.exports = {
  entry: {
    app: path.join(appDirectory, 'index.web.js'),
  },
  // /* devServer is to match links to fallback to index.html for unknown requests --> when deploying this should be configured in deployment MUST */
  // /* This configuration is only for dev --> Deploying requires additional attention */
  // devServer: {
  //   historyApiFallback: true,
  // },
  output: {
    path: path.resolve(appDirectory, 'dist'),
    publicPath: '/',
    filename: 'rnw_blogpost.bundle.js',
  },
  resolve: {
    /* When writing platform specific code adding .web. makes webpack prefer this over others */
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.d.ts',
    ], // build resolved in this order
    alias: {
      'react-native$': 'react-native-web',
      // /* React navigation patch --> these do not resolve correctly, since the default of package.json is lib/module, which is not correct */
      // "@react-navigation/core": path.resolve(
      //   appDirectory,
      //   "node_modules/@react-navigation/core",
      //   "src/index.tsx"
      // ),
      // "@react-navigation/elements": path.resolve(
      //   appDirectory,
      //   "node_modules/@react-navigation/elements",
      //   "src/index.tsx"
      // ),
      // "@react-navigation/native": path.resolve(
      //   appDirectory,
      //   "node_modules/@react-navigation/native",
      //   "src/index.tsx"
      // ),
      // "@react-navigation/native-stack": path.resolve(
      //   appDirectory,
      //   "node_modules/@react-navigation/native-stack",
      //   "src/index.tsx"
      // ),
      // "@react-navigation/routers": path.resolve(
      //   appDirectory,
      //   "node_modules/@react-navigation/routers",
      //   "src/index.tsx"
      // ),
      // /************************************************************/
      '@': path.resolve(appDirectory), // resolve alias during building
    },
    modules: [path.resolve(appDirectory, 'node_modules'), 'node_modules'],
  },
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration,
      svgLoaderConfiguration,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(appDirectory, 'index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // See: https://github.com/necolas/react-native-web/issues/349
      __DEV__: JSON.stringify(true),
    }),
  ],
};

/* Web compile manager --> Add configurations and additional babel features */
