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
        "./Button": "./src/components/SharedButton.tsx",
      },
      // ⚠️ Vite 플러그인의 표준 규격인 문자열 배열로 롤백합니다.
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false, // 빌드 시 코드가 꼬이는 것을 방지
    cssCodeSplit: false, // 아까 발생한 e.forEach 버그 방지 핵심 옵션
  },
  server: { port: 5173 },
  preview: { port: 5173 },
});
