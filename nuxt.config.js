import pkg from './package'
import {createClient} from './plugins/contentful.js'

require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** env vars for contentful
  */
  env: {
    space: 'whqblyqlo46i',
    accessToken: 'VaCA6WYzb3eVmuX7SQs0Lsp0ScQj1GfQTzMfao01Ibo',
    testenv: 'wuwu',
    CONTENTFUL_IMAGE_URL: "https://images.ctfassets.net"
  },
  /*
  ** Headers of the page
  */
 head: {
  title: 'venohr consult - executive search',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'title', content: 'Yella Venohr Consult' },
    { name: 'description', content: 'Als Expertin für Executive Search helfe ich Ihnen, Führungskräfte und hoch qualifizierte Spezialisten für Ihr Unternehmen zu gewinnen. Bei allen Personalfragen rund um Executive Consultancy berate ich Sie ebenfalls gerne.' },
    { name: 'keywords', content: 'Personalberater,Personalberatung,Executive Search,Direct Search,Headhunter, Headhunting, Profiling, Personalsuche, HR Consultant, Direktsuche, Research, Recruiting, Recruiter, Bewerbermanagement, Führungskräfte, Spezialisten' },
    { name:'google-site-verification', content: '4SAN_oEf4rZJ7syE2mlADKODqs9XFfeZNEroYM3izBg'}    ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Noto+Serif|Work+Sans:300,400' }
  ]
},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // '~/assets/css/tailwind.css',
    './assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful.js',
    '~/plugins/axios',
    '~plugins/vue-scrollto.js',
    '~plugins/filters.js'
  ],
  /*
  ** Nuxt.js modules
  */
 modules: [
   // Doc: https://axios.nuxtjs.org/usage
   ['@nuxtjs/style-resources'],
   '@nuxtjs/axios',
   '@nuxtjs/pwa',
   '@nuxtjs/markdownit',
   '@nuxtjs/google-analytics'
  ],
  styleResources: {
    scss: [
      // '~assets/css/tailwind.css',
      './assets/scss/abstracts/*.scss',
      './assets/scss/main.scss'
    ]
  },
  /*
  ** markdown module configuration
  */
  markdownit: {
    injected: true
  },
  /*
  ** google analytics module configuration
  */
  'google-analytics': {
    id: 'UA-115328935-1',
    debug: {
      enabled: false
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
