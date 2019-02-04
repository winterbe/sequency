import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const es5 = {
    extension: 'js',
    targets: { browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] },
    minify: {}
};

const esnext = {
    suffix: '',
    extension: 'mjs',
    format: 'esm',
    targets: { browsers: ['Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15'] },
    minify: {
        ecma: 8,
        module: true
    }
};

const node = Object.assign({
    suffix: '.node',
    format: 'cjs'
}, es5);

const browser = Object.assign({
    suffix: '.browser',
    format: 'iife'
}, es5);

const configurations = [];

[node, browser, esnext].forEach(options => {
    configurations.push(Object.assign({}, options, { extension: `min.${options.extension}` }))
    configurations.push(Object.assign({}, options, { minify: false }))
});

export default configurations.map(({ suffix, extension, format, targets, minify }) => ({
    input: 'src/Sequence.ts',
    output: {
        file: `./lib/sequency${suffix}.${extension}`,
        format,
        name: 'sequency'
    },
    plugins: [
        typescript(),
        babel({
            extensions: ['ts', 'tsx', 'js', 'jsx', 'mjs'],
            presets: [['@babel/preset-env', {
                modules: false,
                targets
            }]]
        })
    ].concat(minify === false ? [] : [
        terser(Object.assign({
            compress: { passes: 2 }
        }, minify))
    ])
}));