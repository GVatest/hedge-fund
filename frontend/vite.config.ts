import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/shared/sass/main.scss";`,
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
});
