const pkg = require('./package')


module.exports = {
  mode: 'spa',

 /* router: {
    base: '/portfolio-test/'
  }, */

  /*
  ** Headers of the page
  */
  head: {
    title: 'damien | Web design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP:black,bold,thin' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FF6F61' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/style.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/directives.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    '@nuxtjs/bulma',
    ['@nuxtjs/google-tag-manager', { id: 'UA-156702075-1' }],
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Français',
          code: 'fr',
          iso: 'fr-FR',
          file: 'fr-FR.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-EN',
          file: 'en-EN.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'fr',
    }],
    '@nuxtjs/sitemap'
  ],


  /**
  *  SiteMap
  */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://wwww.damien-webdesign.me',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true,
    exclude: [
      '/secret',
      '/admin/**'
    ],
  },


  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
