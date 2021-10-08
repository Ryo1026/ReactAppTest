import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import myReducer from "./reducers/reducer";
/*
  與 redux 一起使用
  要先在終端機 npm install --save react-redux
  然後在最頂層以Provider包住
*/
// 創造store 並在 Provider 中當成 props 傳入
let store = createStore(myReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
