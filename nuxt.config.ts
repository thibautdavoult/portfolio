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
  },

  googleFonts: {
    families: {
      'DM+Sans': [400, 500, 700],
      'Inter': [300, 400, 700]
    },
    display: 'swap'
  },

  app: {
    baseURL: '/portfolio/',
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
        { rel: 'icon', type: 'image/svg+xml', href: '/portfolio/favicon.svg' }
      ]
    }
  },

  // Basic build configuration
  build: {
    transpile: ['@heroicons/vue']
  },

  // Enable static generation
  ssr: true,

  // GitHub Pages configuration
  nitro: {
    preset: 'github-pages'
  }
})