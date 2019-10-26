import Vue from 'vue'
import App from './App.vue'  
import VueDashboard from './../../'
import vuetify from './plugins/vuetify'
Vue.use(VueDashboard);
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App),
  
}).$mount('#app')
