const path = require('path');
const { NODE_ENV = 'production', } = process.env;
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    externals: [ nodeExternals() ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    watch: NODE_ENV === 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    }
}