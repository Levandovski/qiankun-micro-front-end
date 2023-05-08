import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props) {
  console.log(props)
  ReactDOM.render(
    <App />,
    props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root")
  );
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root")
  );
}
