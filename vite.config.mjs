import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
    build: {
        lib: {
            entry: [
                resolve('index.ts'),
                resolve('snapshots.ts'),
                resolve('mocks.ts'),
            ],
            name: 'elemix-testing',
            fileName: (_, entryName) => `${entryName}.js`,
            formats: ['cjs'],
        },
    },
});
