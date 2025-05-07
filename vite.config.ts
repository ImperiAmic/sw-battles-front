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
      include: ["**/*.tsx", "**/*.ts"],
      exclude: [
        "src/main.tsx",
        "**/*.d.ts",
        "**/types.ts",
        "**/vite.config.ts",
      ],
      reportsDirectory: "./coverage",
    },
  },
});
