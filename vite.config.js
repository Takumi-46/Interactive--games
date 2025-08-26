// import { defineConfig } from 'vite';
// import glob from 'glob';
// import injectHTML from 'vite-plugin-html-inject';
// import FullReload from 'vite-plugin-full-reload';

// export default defineConfig({
//   define: {
//     global: {},
//   },
//   root: 'src',
//   build: {
//     rollupOptions: {
//       input: glob.sync('./src/*.html'),
//     },
//     outDir: '../dist',
//   },
//   plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
//   base: '/Interactive--games/',
// });

import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  base: '/Interactive--games/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        index: 'src/index.html'
      }
    }
  },
  plugins: [
    injectHTML(),
    FullReload(['./src/**/**.html'])
  ]
});
