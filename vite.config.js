import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'network-first',
      manifest: {
        name: 'Portfolio Federico Pena',
        short_name: 'Federico',
        start_url: '/',
        description: 'Portfolio Federico Pena',
        display: 'standalone',
        background_color: '#000',
        theme_color: '#000',
        lang: 'es',
        scope: '/',
        icons: [
          {
            src: '/assets/icons/favicon.ico',
            type: 'image/x-icon',
            sizes: '16x16 32x32'
          },
          { src: '/assets/icons/icon-192.png', type: 'image/png', sizes: '192x192' },
          { src: '/assets/icons/icon-512.png', type: 'image/png', sizes: '512x512' },
          {
            src: '/assets/icons/icon-192-maskable.png',
            type: 'image/png',
            sizes: '192x192',
            purpose: 'maskable'
          },
          {
            src: '/assets/icons/icon-512-maskable.png',
            type: 'image/png',
            sizes: '512x512',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
})
