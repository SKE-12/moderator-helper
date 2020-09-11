import React from "react";
import { render } from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { SolarXUIStylesheet } from "solarxui";

import App from "./App";
import { Wrapper } from "./contexts/gameController";
import GlobalStyle from "./styles/globalStyle";

render(
  <Wrapper>
    <BrowserRouter>
      <SolarXUIStylesheet />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Wrapper>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
