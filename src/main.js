import Vue from 'vue'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';

// import { MdButton, MdDrawer,MdCard} from 'vue-material/dist/components';

import Dashboard from './components/Dashboards/Dashboard.vue';


// Vue.use(MdButton)
// Vue.use(MdDrawer)
// Vue.use(MdCard)

Vue.component('comp-dashboard',Dashboard);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
