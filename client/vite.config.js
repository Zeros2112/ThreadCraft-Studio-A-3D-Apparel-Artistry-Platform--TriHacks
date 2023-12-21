import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/** @type {import('tailwindcss').Config} */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['js-big-decimal']
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter','sans-serif'],

      }
    },
  },
})




