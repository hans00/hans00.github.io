import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebook,
  faGithub,
  faKaggle,
  faPhp,
  faPython,
  faJs,
  faLinux,
  faCuttlefish,
  faVuejs,
  faSass,
  faHtml5
} from '@fortawesome/free-brands-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import {
  faClock,
  faFolders,
  faArrowToTop,
  faShieldCheck,
  faExternalLink
} from '@fortawesome/pro-duotone-svg-icons'
import { faPlus } from '@fortawesome/pro-light-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

library.add(
  faFacebook,
  faGithub,
  faKaggle,
  faPhp,
  faPython,
  faJs,
  faLinux,
  faCuttlefish,
  faVuejs,
  faSass,
  faHtml5,
  faCircle,
  faClock,
  faFolders,
  faArrowToTop,
  faShieldCheck,
  faExternalLink,
  faPlus
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
