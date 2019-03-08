import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilePdf, faLongArrowAltDown, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

library.add(faInstagram, faLinkedin, faGithub, faEnvelope, faFilePdf, faLongArrowAltDown, faLongArrowAltRight)

// Register the component globally
Vue.component('fa-icon', FontAwesomeIcon)