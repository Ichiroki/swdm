import react from '@vitejs/plugin-react-swc'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsDir: './public'
  },
  plugins: [
    react(), 
    splitVendorChunkPlugin(),
  ],
})
