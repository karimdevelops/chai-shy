import "dotenv/config"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from "@tanstack/router-plugin/vite";


export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: process.env.PROXY_TARGET,
        changeOrigin: true
      }
    }
  },
  plugins: [
    tanstackRouter(),
    react()],
})
