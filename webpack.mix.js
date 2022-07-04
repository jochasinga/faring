let mix = require('laravel-mix')

mix
  .js('src/app.js', 'dist/app.js').setPublicPath('dist')
  .sass('src/styles.scss', 'dist/styles.css').setPublicPath('dist')
  // .postCss('src/styles.css', 'dist/styles.css', [
  //   require('tailwindcss'),
  // ])

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