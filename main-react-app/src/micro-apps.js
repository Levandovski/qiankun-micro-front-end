import { persistor, store } from "./store/store";

const microApps = [
  {
    name: "micro-react-sub-app1",
    entry: "//localhost:3002/",
    container: "#subapp-viewport",
    activeRule: "/micro-react-sub-app1",
    props: {
      store,
      persistor,
    },
  },
  {
    name: "micro-react-sub-app2",
    entry: "//localhost:3003/",
    container: "#subapp-viewport",
    activeRule: "/micro-react-sub-app2",
    props: {
      store,
      persistor,
    },
  },
  {
    name: "micro-react-sub-app3-ts-vite",
    entry: "//localhost:3004/",
    container: "#subapp-viewport",
    activeRule: "/micro-react-sub-app3",
    props: {
      store,
      persistor,
    },
  },
  {
    name: "micro-react-sub-app4-ts-cra",
    entry: "//localhost:3005/",
    container: "#subapp-viewport",
    activeRule: "/micro-react-sub-app4",
    props: {
      store,
      persistor,
    },
  },
];

export default microApps;
