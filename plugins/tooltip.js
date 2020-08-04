import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip, {
  defaultPlacement: 'bottom'
})

export default function (ctx, inject) {
  inject('VTooltip', VTooltip)
}
