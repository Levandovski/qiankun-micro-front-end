import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

let rootGlobal = ReactDOM.createRoot(document.getElementById("root"));

if (!window.__POWERED_BY_QIANKUN__) {
  rootGlobal.render(<App />);
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props) {
  const { container, store, persistor } = props;
  rootGlobal = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  rootGlobal.render(
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </>
  );
}

export async function unmount() {
  rootGlobal.unmount();
}
