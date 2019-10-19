// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/style/index.styl'

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'http://fonts.googleapis.com/css?family=Poppins:400,600'
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
