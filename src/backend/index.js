// Dependencies
import express from 'express';
import path from 'path';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';

// Client Render
import clientRender from './render/clientRender';

// Webpack Configuration
import webpackConfig from '@webpack';

// Environment
const isProduction = process.env.NODE_ENV === 'production';

// Express Application
const app = express();

// Webpack Compiler
const compiler = webpack(webpackConfig);

// Public directory
app.use(express.static(path.join(__dirname, '../../public')));

// Webpack Middleware
if (!isProduction) {
  app.use(webpackDevMiddleware(compiler));
}

// Client Side Rendering
app.use(clientRender());

// Disabling x-powered-by
app.disable('x-powered-by');

// Listen Port...
app.listen(3000);
