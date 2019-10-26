import VueDashboard from './VueDashboard.vue'
import DashboardContainer from "./DashboardContainer.vue";
import DashboardSetting from "./DashboardSetting.vue";
import WidgetBox from "./WidgetBox.vue";
function install(Vue) {
    if (install.installed) return;
    install.installed = true; 
    Vue.component("WidgetBox", WidgetBox);
    Vue.component("DashboardContainer", DashboardContainer);
    Vue.component("DashboardSetting", DashboardSetting);
    Vue.component("VueDashboard", VueDashboard);
  }
  export default install
  install.install=install;