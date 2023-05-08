import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

let rootGlobal = ReactDOM.createRoot(document.getElementById("root"));

if (!window.__POWERED_BY_QIANKUN__) {
  rootGlobal.render(<App />);
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props) {
  const { container } = props;
  rootGlobal = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
  rootGlobal.render(<App />);
}

export async function unmount(props) {
  rootGlobal.unmount();
}
