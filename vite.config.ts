import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    reporters: ["verbose"],
    environment: "jsdom",
    setupFiles: ["src/setupTest.ts"],
    coverage: {
      provider: "v8",
      include: ["**/*test.tsx", "**/*test.ts"],
      exclude: [
        "src/main.tsx",
        "src/vite-env.d.ts",
        "**/types.ts",
        "./vite.config.ts",
        "src/components/App/App.tsx",
      ],
      reportsDirectory: "./coverage",
    },
  },
});
