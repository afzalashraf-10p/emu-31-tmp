import React from "react";
import { render as DOMRender } from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

import App from "./app/app";
import rootReducer from "./app/slices";

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });

const render = (Component: React.ReactElement) => {
  DOMRender(Component, document.getElementById("application-manager-ui-root"));
};

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
});
