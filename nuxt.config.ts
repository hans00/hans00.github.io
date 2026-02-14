import { defineNuxtConfig } from 'nuxt/config'
import fs from 'node:fs'
import path from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css'
  ],
  googleFonts: {
    families: {
      Courgette: true
    }
  },
  content: {
    highlight: {
      theme: 'material-theme-darker'
    }
  },
  vite: {
    server: {
      allowedHosts: true
    }
  },
  devtools: { enabled: true },
  hooks: {
    'build:before': () => {
      const buildDir = path.resolve(process.cwd(), '.nuxt')
      const configs = ['tsconfig.app.json', 'tsconfig.shared.json', 'tsconfig.server.json', 'tsconfig.node.json']
      
      const dummyTsConfig = JSON.stringify({
        "extends": "./tsconfig.json",
        "compilerOptions": {
          "composite": true,
          "types": ["node"]
        },
        "include": ["../**/*", "./nuxt.d.ts"],
        "exclude": ["../node_modules", "../dist", "../.output"]
      }, null, 2)

      if (!fs.existsSync(buildDir)) {
          fs.mkdirSync(buildDir, { recursive: true })
      }
      
      configs.forEach(file => {
        fs.writeFileSync(path.join(buildDir, file), dummyTsConfig)
      })
    }
  }
})
