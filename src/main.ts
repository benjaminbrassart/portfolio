import "@mdi/font/css/materialdesignicons.min.css";
import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
