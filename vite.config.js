import { defineConfig, loadEnv } from "vite";

const HTTP_PORT = 3000;
const HTTPS_PORT = 3001;

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: command === "serve" ? "" : "/dist/",
    build: {
      manifest: true,
      outDir: "./web/dist/",
      rollupOptions: {
        input: {
          app: "src/js/app.js",
        },
      },
    },
    server: {
      host: "0.0.0.0",
      strictPort: true,
      port: HTTP_PORT,
      origin: env.PRIMARY_SITE_URL + ":" + HTTPS_PORT,
    },
  };
});
