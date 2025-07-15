import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/County-Info/' : '/',
  base: '/County-Info/',
  plugins: [react()],
});
