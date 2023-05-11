import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

const useDevMode = true;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    useDevMode ? [] : react(),
    qiankun("micro-react-sub-app3-ts-vite", {
      useDevMode,
    }),
  ],
  server: {
    port: 3004,
    origin: "http://localhost:3004",
    open: false,
  },
});
