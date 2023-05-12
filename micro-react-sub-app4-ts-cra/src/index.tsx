import "./public-path";
import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

let rootGlobal = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (!window.__POWERED_BY_QIANKUN__) {
  rootGlobal.render((<App />) as ReactNode);
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props: any) {
  const { container, store, persistor } = props;
  rootGlobal = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  rootGlobal.render(
    (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </>
    ) as ReactNode
  );
}

export async function unmount() {
  rootGlobal.unmount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
