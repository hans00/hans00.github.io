import Vue from 'vue'
import categoryMap from '@/assets/categories.ts'

Vue.filter('date', (val) => new Date(val).toLocaleDateString())

Vue.filter('trim', (val) => (val||'').trim())

Vue.filter('category', (val) => categoryMap[val]||'Untitled')
