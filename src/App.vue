<!-- 
1.) route-link -> vue pozrie na atribút "to", pozrie na "index.js" v router, pokiaľ nájde že router má nasetovanú adresu rovnajúcu sa hodnote atribútu "to" tak spustí dané componenty z router-a  
2.) router-view -> sem sa zobrazí template z router componentov podľa router-link
-->

<template>
    <div id="app">
        <nav-bar />
        <!--         <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/tunes">Tunes</router-link>
            <router-link to="/about">About</router-link>
        </div> -->
        <router-view />
    </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
    components: {
        NavBar
    }
};
</script>

<style lang="scss">
@import "assets/scss/main.scss";
</style>
