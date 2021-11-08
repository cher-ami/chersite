import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite config
 * @doc https://vitejs.dev/config/
 */
export default defineConfig(({ command, mode }) => {
  return {
    base: "/",
    plugins: [react()],
    server: {
      open: true,
      host: "0.0.0.0",
      cors: true,
      proxy: {
        "/": {
          target: "http://localhost/cher-vite/dist/front",
          changeOrigin: true,
          secure: false,
        },
      },
    },
    build: {
      emptyOutDir: true,
      outDir: "dist/front/static/",
      manifest: true,
    },
  };
});
