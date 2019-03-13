// Dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import WebpackNotifierPlugin from 'webpack-notifier';
import webpack from 'webpack';

// Environment
const env = process.env.NODE_ENV !== 'production' ? 'development' : 'production';

export default () => {
  const plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    }),
    new MiniCssExtractPlugin({
      filename: '../css/[name].css',
      chunkFilename: '[id].css'
    }),
  ];

  if (env === 'development') {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new WebpackNotifierPlugin({
        title: 'Dev Education'
      })
    );
  }

  return plugins;
};
