const { i18n } = require('./next-i18next.config')

const { BLOG_URL } = process.env

module.exports = {
  i18n,
  rewrites() {
    return [
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path*',
        destination: `${BLOG_URL}/blog/:path*`,
      },
    ]
  },
}
