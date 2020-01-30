const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('autoprefixer')
    cssnano({
      preset: 'default'
    }),
    purgecss({
      content: ['./layouts/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}
