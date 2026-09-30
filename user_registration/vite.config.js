
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/WebInterface_Projects/user_registration/dist/',
  server: {
    port: 3000,
    open: true,
  },
});
