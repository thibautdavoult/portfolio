// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'
  ],

  // @ts-ignore - Known module configuration
  colorMode: {
    classSuffix: ''
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: true,
    injectPosition: 0,
    viewer: true
  },

  googleFonts: {
    families: {
      'DM+Sans': [400, 500, 700],
      'Inter': [300, 400, 700]
    },
    display: 'swap'
  },

  app: {
    baseURL: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
    head: {
      title: 'Thibaut Davoult | Marketing & Growth Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Marketing & Growth Engineer helping companies scale their user acquisition and revenue through technical marketing solutions.' 
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  // Add build configuration
  build: {
    transpile: ['@heroicons/vue']
  },

  // Add vite configuration
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ''
        }
      }
    }
  },

  compatibilityDate: '2025-03-15',

  // Add nitro configuration for GitHub Pages
  nitro: {
    preset: 'github-pages',
    baseURL: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/'
  },
})