import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    server: {
        host: true, // Listen on all addresses including LAN
        port: 5173,
        proxy: {
            '/chat': {
                target: 'http://localhost:8080',
                changeOrigin: true,
            },
        },
    },
    plugins: [
        react(),
        tailwindcss()
    ],
})
