import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { SolarXUIStylesheet } from 'solarxui';

import App from './App';

render(
  <BrowserRouter>
    <SolarXUIStylesheet />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
