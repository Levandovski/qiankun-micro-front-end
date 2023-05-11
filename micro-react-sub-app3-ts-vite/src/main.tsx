import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

qiankunWindow.customxxx = "ssss";

let rootGlobal = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  rootGlobal.render(<App />);
}

const headStyles: any[] = [];

renderWithQiankun({
  async mount(props: any) {
    console.log("AQUIII", props);
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
  },
  async bootstrap() {
    console.log("Project Started!");
  },
  async unmount(props: any) {
    console.log("props", props.container.id);
    console.log("props", props.container);
    // Array.from(document.head.children).forEach((node) => {
    //   if (node.tagName === "STYLE") {
    //     node.remove();
    //     headStyles.push(node);
    //   }
    // });
    rootGlobal.unmount();
  },
  async update(props: any) {},
});
