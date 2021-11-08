import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite config
 * @doc https://vitejs.dev/config/
 */
export default defineConfig(({ command, mode }) => {
  return {
    root: "./src",
    plugins: [react()],
    server: {
      open: true,
      host: "0.0.0.0",
    },
  };
});
