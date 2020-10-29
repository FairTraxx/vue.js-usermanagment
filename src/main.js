import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";
import Vuex from "vuex";
import FlashMessage from "@smartweb/vue-flash-message";

window.axios = axios;
Vue.use(Vuex)
Vue.use(FlashMessage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
