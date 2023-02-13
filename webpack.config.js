// noinspection WebpackConfigHighlighting
const glob = require('glob')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin')
const path = require('path')
const PATHS = {
    src: path.join(__dirname, "src")
}
module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    plugins: [new miniCssExtractPlugin(),
              new PurgeCSSPlugin({
                paths: glob.sync(`${PATHS.src}/**/*`, {nodir: true})
              })],
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "docs"),
    },
    devServer:{
        static: path.resolve(__dirname, 'docs'),
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                mimetype: 'image/svg+xml',
                scheme: 'data',
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[hash].svg'
                }
            },
            {

                test: /\.(scss)$/,
                use: [
                    {
                        // Extracts CSS for each JS file that includes CSS
                        loader: miniCssExtractPlugin.loader
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}