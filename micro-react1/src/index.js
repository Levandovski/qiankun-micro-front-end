import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

if (!window.__POWERED_BY_QIANKUN__) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props) {
  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(<App />);
}

export async function unmount(props) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  console.log("AQUIII FUI");
  root.unmount(<App />);
}
