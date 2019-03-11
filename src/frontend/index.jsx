// Dependencies
import React from 'react';
import { render } from 'react-dom';

// Components
import App from './App';

// Root element
const rootElement = document.querySelector('#root');

// App Wrapper
const renderApp = Component => {
  render(<Component />, rootElement);
};

// Rendering app
renderApp(App);
