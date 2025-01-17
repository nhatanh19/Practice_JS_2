import {
    defineConfig
} from 'vite';
import path from 'path';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist'
    },
    server: {
        port: 3000,
        hmr: {
            overlay: true
        }
    },
    esbuild: {
        logOverride: {
            'this-is-undefined-in-esm': 'silent'
        }
    }
});