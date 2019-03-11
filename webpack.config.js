// Webpack Configuration
import {
  context,
  devtool,
  entry,
  output,
  optimization,
  plugins,
  module,
  resolve,
  mode
} from './webpack/configuration';

export default {
  context: context(),
  devtool,
  entry: entry(),
  mode,
  module: module(),
  optimization,
  output,
  plugins: plugins(),
  resolve
};
