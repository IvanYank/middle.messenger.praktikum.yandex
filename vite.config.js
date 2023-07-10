import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
	build: {
		outDir: resolve(__dirname, 'build'),
		rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        registration: resolve(__dirname, 'src/pages/registration/index.html'),
        chats: resolve(__dirname, 'src/pages/chats/index.html'),
        profile: resolve(__dirname, 'src/pages/profile/index.html'),
        404: resolve(__dirname, 'src/pages/404/index.html'),
        500: resolve(__dirname, 'src/pages/500/index.html'),
      },
    },
	},
	plugins:[handlebars({
	  partialDirectory: resolve(__dirname, 'src/components'),
  })]
})