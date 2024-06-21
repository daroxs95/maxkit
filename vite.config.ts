import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    lib: {
      entry: resolve(__dirname, "./src/lib/index.ts"),
      name: "index",
      fileName: "index",
    },
  },
});
