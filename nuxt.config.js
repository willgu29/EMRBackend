module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'EMR Worx',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'EMR Worx' },
      { hid: 'keywords', name: 'keywords', content: 'emr, emrs, emr worx, emr templates' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css'],
  /*
  ** Add axios globally
  */
  plugins: [{src: '~/plugins/mixpanel.js', ssr: false}],
  build: {
    vendor: ['axios'],
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