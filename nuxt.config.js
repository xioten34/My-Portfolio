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
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4b57a1' },

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
    '~/plugins/directives.js',
    { src: '~/plugins/ga.js', mode: 'client' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    '@nuxtjs/bulma',
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
    '@nuxtjs/sitemap',
    '@nuxtjs/google-gtag'
  ],

  'google-gtag': {
    id: 'UA-156702075-1',
    config: {
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['domain.com','domain.org']
      }
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  }


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
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
