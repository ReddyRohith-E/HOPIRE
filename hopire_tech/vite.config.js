import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hopire_tech/', // Set this to match your GitHub Pages URL path
  plugins: [react()]
});