import Fiber from 'fibers'
import Sass from 'sass'

const SassConfig = {
  implementation: Sass,
  sassOptions: {
    fiber: Fiber,
  },
}

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {},
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/helpers.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // global components
    '@nuxtjs/global-components',
    // Google Fonts
    '@nuxtjs/google-fonts',
    // FA icons
    '@nuxtjs/fontawesome',
    // image optimize
    '@aceforth/nuxt-optimized-images',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-lazy-load',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    remarkPlugins: [
      'remark-squeeze-paragraphs',
      'remark-slug',
      'remark-autolink-headings',
      'remark-external-links',
      'remark-footnotes',
      'remark-github',
    ],
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css',
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    loaders: {
      scss: SassConfig,
    },
  },

  googleFonts: {
    families: {
      Courgette: true,
    },
    display: 'swap',
  },

  fontawesome: {
    icons: {
      solid: ['faCircle'],
      brands: [
        'faFacebook',
        'faGithub',
        'faKaggle',
        'faPhp',
        'faPython',
        'faJs',
        'faLinux',
        'faCuttlefish',
        'faVuejs',
        'faSass',
        'faHtml5',
      ],
    },
    proIcons: {
      light: ['faPlus'],
      duotone: [
        'faClock',
        'faFolders',
        'faArrowToTop',
        'faShieldCheck',
        'faExternalLink',
      ],
    },
  },

  optimizedImages: {
    optimizeImages: true,
  },
}
