import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

registerMicroApps([
  {
    name: "micro-react1",
    entry:"//localhost:3002",
    container: "#root",
    activeRule: "/micro-react1",
    props: {RouterBase: "/micro-react1"}
  }
])

setDefaultMountApp("/micro-react1");

start();