import Vue from 'vue'

Vue.filter('date', val => new Date(val).toLocaleDateString())
