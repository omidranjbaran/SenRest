import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
   build: {
     outDir: 'docs',
    // اگر می‌خواهی آستانه‌ی هشدار را هم تغییر دهی:
    chunkSizeWarningLimit:1000, // واحد کیلوبایت (مثلاً 700KB)
    rollupOptions: {
      output: {
        manualChunks: {
          // همه‌ی React و ReactDOM در یک chunk مجزا
          'react-vendor': ['react', 'react-dom'],
          // لایبرری‌های UI سنگین (مثال)
          'ui-vendor': ['@mui/material', '@mui/icons-material'],
          // سایر vendorها (lodash، axios و…)
          'vendor': ['lodash', 'axios']
        }
      }
    }
  }
})
