import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = env.VITE_SITE_URL || "https://teslabeskydy.cz";
  const base = env.VITE_BASE_PATH || "/";

  return {
    base,
    server: {
      allowedHosts: true,
    },
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "html-site-url",
        transformIndexHtml(html) {
          return html.replaceAll("__SITE_URL__", siteUrl);
        },
      },
    ],
  };
});
