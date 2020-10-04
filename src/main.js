import Vue from "vue";
import App from "./App.vue";

import "@/scss/main.scss";

// plugins
import plugins from "./plugins/index";
plugins();

new Vue({
  render: h => h(App)
}).$mount('#app')

