import Vue from 'vue'
import categoryMap from '@/categories.ts'

Vue.filter('date', (val) => new Date(val).toLocaleDateString())

Vue.filter('trim', (val) => (val||'').trim())

Vue.filter('category', (val) => categoryMap[val]||'Untitled')
