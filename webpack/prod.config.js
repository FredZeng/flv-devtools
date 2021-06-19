const TerserPlugin = require("terser-webpack-plugin");

const { merge } = require('webpack-merge');
const common = require('./base.config');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});
