import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faLinkedin, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf, faLongArrowAltDown, faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(faInstagram, faLinkedin, faGithub, faDribbble, faEnvelope, faFilePdf, faLongArrowAltDown, faLongArrowAltRight, faLongArrowAltLeft)

// Register the component globally
Vue.component('fa-icon', FontAwesomeIcon)