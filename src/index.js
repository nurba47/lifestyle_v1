import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "mobx-react";
import controllers from "./controllers";

const root = document.getElementById("root");

ReactDOM.render(
  <Provider {...controllers}>
    <App />
  </Provider>,
  root
);

registerServiceWorker();
