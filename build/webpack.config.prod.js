const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'bundle_sizes.html'
    }),
    new CleanWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      exclude: [/\.map$/, /asset-manifest\.json$/, /\.htaccess/, /\.DS_Store/],
      importWorkboxFrom: 'cdn',
      navigateFallback: `${baseConfig.externals.publicUrl}/index.html`,
      navigateFallbackBlacklist: [new RegExp('^/_'), new RegExp('/[^/?]+\\.[^/]+$')]
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
});
