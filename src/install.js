import VueDashboard from './VueDashboard.vue'
function install(Vue) {
    if (install.installed) return;
    install.installed = true; 
    Vue.component("VueDashboard", VueDashboard);
  }
  export default install
  install.install=install;