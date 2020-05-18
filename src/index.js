import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";
import App from "./page/App";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
