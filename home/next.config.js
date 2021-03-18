const { BLOG_URL } = process.env

console.log(process.env.BLOG_URL)

module.exports = {
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
