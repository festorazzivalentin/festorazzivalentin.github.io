import { defineConfig } from 'astro/config';
import supersvgPlugin from 'vite-plugin-supersvg';

//docs.astro.build
export default defineConfig({
    compressHTML: false, // comprime HTML
    site: 'https://festorazzivalentin.github.io',
    vite: {
        plugins: [
            supersvgPlugin()
        ]
    }
});