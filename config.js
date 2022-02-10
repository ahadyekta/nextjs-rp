const config = {
  routes: {
    'blog': {
      port: 4000,
      url: /^\/(\w*)\/blog(\/\w*)*/,
      basePath: '/blog',
    },
    'home': {
      port: 3000,
      url: '/',
      basePath: '/',
    },
  },
}

module.exports = config
