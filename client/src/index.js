import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
// TODO: SurveyReducer
import reducers from "./reducers";
const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
