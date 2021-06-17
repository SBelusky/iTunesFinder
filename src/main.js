import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MyHelper from "@/helpers";
import "bulma/bulma.sass";
import AOS from "aos";
import "aos/dist/aos.css";

/* nastavenie slúži iba na skrytie informácie, že používam Vue v development móde - info je zobrazené v devtools prehľadávača*/
Vue.config.productionTip = false;
// podvedal som vue aby používal môj plugin MyHelper
Vue.use(MyHelper);

new Vue({
    router,
    created() {
        AOS.init();
    },
    render: h => h(App)
}).$mount("#app");
