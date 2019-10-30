import Vue from 'vue'
import App from './App.vue'  
import VueDashboard from './../../'
import vuetify from './plugins/vuetify'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
Vue.use(BootstrapVue)
Vue.use(VueDashboard);
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App),
  
}).$mount('#app')
