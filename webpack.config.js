const path = require('path');

module.exports = {
    mode: 'production',
    entry: './global.js',
    output: {
        path: path.resolve(__dirname, 'dist', 'bundle'),
        filename: 'js-apm.js'
    },
    module: {
        rules: [
            {
                test: require.resolve('./dist/Apm.js'),
                loader: 'expose-loader',
                options: {
                    exposes: [{
                        globalName: 'Apm',
                        moduleLocalName: 'default',
                    }],
                },
            }
        ]
    }
};