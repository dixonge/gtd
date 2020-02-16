const rootUrl = require('../_data/metadata.json').url

module.exports = {
    generateShareLink: (url, text) => {
      const shareText = `${text} by @TheGreenGreek`
      const postUrl = `${rootUrl}${url}`
      return `https://twitter.com/intent/tweet/?text=${encodeURI(shareText)}&amp;url=${encodeURI(postUrl)}`
    },
    generateFindLink: (url) => {
      const postUrl = `${rootUrl}${url}`
      return `https://twitter.com/search?f=tweets&src=typd&q=${encodeURI(postUrl)}`
    },
}