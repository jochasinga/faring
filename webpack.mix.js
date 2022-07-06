let mix = require('laravel-mix')

require('laravel-mix-tailwind')

mix
  .js('src/app.js', 'dist/app.js').setPublicPath('dist')
  .sass('src/styles.scss', 'dist/styles.css')
  .tailwind()
  .setPublicPath('dist')

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