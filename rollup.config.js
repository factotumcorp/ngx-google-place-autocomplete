import copy from 'rollup-plugin-copy';

export default {
    entry: './dist/ngx-google-place-autocomplete.js',
    dest: './dist/bundles/ngx-google-place-autocomplete.umd.js',
    format: 'umd',
    // Global namespace.
    moduleName: 'ng.ngx-google-place-autocomplete',
    // External libraries.
    external: [
        '@angular/core'
    ],
    globals: {
        '@angular/core': 'ng.core'
    },
    plugins: [
        copy(
            {
                "package.json": "dist/package.json",
                ".npmignore": "dist/.npmignore",
                "README.md": "dist/README.md"
            }
        )
    ],
    onwarn: () => {return}
}