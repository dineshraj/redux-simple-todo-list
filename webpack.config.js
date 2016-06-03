module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./target",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
