let mix = require('laravel-mix')

mix.js('src/app.js', 'dist/app.js').setPublicPath('dist')
mix.sass('src/styles.scss', 'dist/styles.css').setPublicPath('dist')

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  }
})