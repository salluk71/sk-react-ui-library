import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: path.resolve(__dirname, 'src/index.ts'),
      name:'sk-react-ui-library',
      fileName:(format)=> `index.${format}.js`
    },
    rollupOptions:{
      external:['react','react-dom'],
      output:{
        globals:{
          react:'React',
          'react-dom':'react-dom'
        }
      }
    },
    sourcemap:true,
    emptyOutDir:true,

  },
  plugins: [react(), dts()],
})
