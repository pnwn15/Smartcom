import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: 'localhost', // ใช้ IP ที่ต้องการ
    port: 5000, // หรือพอร์ตที่คุณต้องการ
    strictPort: true, // ป้องกันไม่ให้เปลี่ยนพอร์ตหากพอร์ตนี้ถูกใช้
  },
  base: '/',
  build: {
    outDir: 'dist',
  },
  define: {
    'process.env': {},
    'process.browser': true, // เพิ่มการกำหนดค่า process.browser
    global: 'window', // เพิ่มการกำหนดค่า global
  },
  optimizeDeps: {
    include: [
      'crypto-browserify',
      'stream-browserify',
      'buffer', // เพิ่ม buffer polyfill
    ],
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      buffer: 'buffer', // เพิ่ม alias สำหรับ buffer
    },
  },
});