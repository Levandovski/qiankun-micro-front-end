import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let rootGlobal = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  rootGlobal.render((<App />) as ReactNode);
}

renderWithQiankun({
  async mount(props: any) {
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
  },
  async bootstrap() {
    console.log("Project Started!");
  },
  async unmount() {
    rootGlobal.unmount();
  },
  async update() {},
});
