module.exports = {
  /*
  ** Headers of the page
  */
  plugins: ['~plugins/buefy.js'],
  head: {
    title: 'lets-vue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  modules: ['@nuxtjs/bulma', '@nuxtjs/font-awesome', '@nuxtjs/pwa'],
  css: ['animate.css/animate.min.css', '@assets/main.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  router: {
    linkActiveClass: 'is-active'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
