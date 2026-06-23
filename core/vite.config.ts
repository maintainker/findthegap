import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./components/Button": "./src/components/SharedButton.tsx",
        "./components/TextField": "./src/components/TextField.tsx",
        "./templates/Login": "./src/templates/Login.tsx",
        "./assets/styles": "./src/assets/css/style.ts",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: { port: 5173 },
  preview: { port: 5173 },
});
