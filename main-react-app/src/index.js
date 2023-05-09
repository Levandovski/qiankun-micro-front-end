import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
import microApps from "./micro-apps";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

registerMicroApps(microApps);

setDefaultMountApp("/micro-react-sub-app1");

start();
