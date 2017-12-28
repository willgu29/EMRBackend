module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'EMR Worx',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Find coding and billing verified note templates for your practice.' },
      { hid: 'keywords', name: 'keywords', content: 'emr, emrs, emr worx, emr templates' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  plugins: [{ src: '~/plugins/mixpanel.js', ssr: false },
            { src: '~/plugins/hotjar.js', ssr: false},
            { src: '~/plugins/showdown.js', ssr: false },
            { src: '~/plugins/specialFunctions.js', ssr: false },
            { src: '~/plugins/filters.js', ssr: false}],
  build: {
    vendor: ['axios', 'babel-polyfill', 'showdown'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    dbUser: 'emrAdmin',
    dbPassword: 'emrDoctorJokes12',
    dbUserTest: 'test',
    dbPasswordTest: 'worstPassword123'
  }
}
