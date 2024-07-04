import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import { babel } from '@rollup/plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      include: ['src/**/*']
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        background: 'src/scripts/background.js',
        content: 'src/scripts/content.js'
      },
      output: {
        entryFileNames: ({ name }) => {
          if (name === 'background') return 'background.js';
          if (name === 'content') return 'content.js';
          return '[name].js';
        }
      }
    },
  },
  server: {
    port: 3000,
  },
})
