import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.min.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import store from "./store";
import { Provider } from "react-redux";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
