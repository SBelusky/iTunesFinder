/*
1.) routes - obsahuje cestu (url) a aký komponent má po načítaní stránky na danej ceste použiť
*/

//dependencies
import Vue from "vue";
import Router from "vue-router";

//moje views
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Tunes from "../views/Tunes.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/tunes",
            component: Tunes
        }
    ],
    mode: "history"
});
