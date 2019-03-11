// Webpack Configuration
import {
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
  devtool,
  entry: entry(type),
  mode,
  module,
  optimization,
  output: output(type),
  plugins: plugins(type),
  resolve
});
