import Vue from 'vue'
import App from './App.vue'


//Import Bootstrap
import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Social Sharing
var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);


//Vue Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

//Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus, faTimes, faTrash, faPlay, faCopy, faBars, faCaretLeft, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faGithub, faBootstrap, faVuejs, faFontAwesomeAlt, faFacebook, faLinkedin, faReddit, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import router from './router'

library.add(faPlus);
library.add(faTwitter, faGithub, faBootstrap, faVuejs, faFontAwesomeAlt, faFacebook, faLinkedin, faReddit, faWhatsapp);
library.add(faPlay);
library.add(faMinus);
library.add(faTrash);
library.add(faCopy);
library.add(faBars);
library.add(faTimes);
library.add(faCaretLeft, faCaretDown);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('formbuilder', require('./components/FormBuilder.vue').default);
Vue.component('rowbuilder', require('./components/RowBuilder.vue').default);
Vue.component('editelement', require('./components/EditElement.vue').default);
Vue.component('code-output', require('./components/CodeOutput.vue').default);
Vue.component('preview-output', require('./components/PreviewOutput.vue').default);
Vue.component('preview-form-input', require('./components/PreviewFormInput.vue').default);
Vue.component('preview-form-textarea', require('./components/PreviewFormTextarea.vue').default);
Vue.component('preview-checkbox', require('./components/PreviewCheckbox.vue').default);
Vue.component('preview-select', require('./components/PreviewSelect.vue').default);
Vue.component('import-export-panel', require('./components/ImportExportPanel.vue').default);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
