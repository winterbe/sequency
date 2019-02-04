const tsc = require('typescript');
const tsConfig = require('./tsconfig.json');

module.exports = {
    process(src, path) {
        if (path.endsWith('.ts')) {
            return tsc.transpile(
                src, 
                Object.assign(tsConfig.compilerOptions, {
                    module: 'commonjs',
                    target: 'es5',
                    lib: ['es2015']
                }),
                path,
                []
            );
        }
        return src;
    },
};