// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "vite";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  plugins: [
    netlify(), // Keeps options completely empty to satisfy the PluginOptions type definition
  ],
  // We type-cast this as any to bypass Vite's strict type rules while keeping Nitro's server router happy
  ...({
    tanstackStart: {
      server: { entry: "server" },
    },
  } as any),
});

