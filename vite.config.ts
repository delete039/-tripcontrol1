import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => {
  const single = mode === "single";

  return {
    base: single ? "./" : "/-tripcontrol1/",
    plugins: [
      react(),
      ...(single
        ? [viteSingleFile()]
        : [
            VitePWA({
              registerType: "autoUpdate",
              includeAssets: ["favicon.svg"],
              manifest: {
                name: "东京与东北旅行控制台",
                short_name: "东北旅行",
                description: "2026 东京与东北六日旅行控制台",
                theme_color: "#f4f5f2",
                background_color: "#f4f5f2",
                display: "standalone",
                start_url: "/-tripcontrol1/",
                icons: [{ src: "favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" }]
              },
              workbox: {
                globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,webp,svg}"],
                runtimeCaching: [
                  {
                    urlPattern: /^https:\/\/tile\.openstreetmap\.org\//,
                    handler: "CacheFirst",
                    options: {
                      cacheName: "map-tiles-viewed",
                      expiration: { maxEntries: 150, maxAgeSeconds: 7 * 24 * 60 * 60 }
                    }
                  }
                ]
              }
            })
          ])
    ],
    build: {
      outDir: single ? "dist-single" : "dist",
      assetsInlineLimit: single ? 100_000_000 : 4096,
      emptyOutDir: true
    }
  };
});
