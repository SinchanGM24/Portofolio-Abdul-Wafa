import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { execSync } from "node:child_process";

let commitSha = "dev";
try { commitSha = process.env.GITHUB_SHA || execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim(); } catch { /* local archive */ }

export default defineConfig({
  base: "/Portofolio-Abdul-Wafa/",
  plugins: [react()],
  define: { __COMMIT_SHA__: JSON.stringify(commitSha) },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
