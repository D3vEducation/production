// Dependencies
import path from 'path';

export default {
  extensions: ['.js', '.jsx'],
  modules: [
    'node_modules',
    path.resolve(__dirname, '../../src/frontend')
  ]
};
