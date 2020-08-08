import Vue from 'vue'

Vue.filter('date', (val) => new Date(val).toLocaleDateString())

Vue.filter('trim', (val) => (val||'').trim())
