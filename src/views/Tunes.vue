<!--
1.) Filters: využil som to na naformátovanie JSON dát, výpis v template bol {{ song | songify }}
- pomocou "|" možem vyberať filtre - môže ich byť viacero napr. {{ song | songify | lower}}
2.) metóda extractData({ name, artist }) -> do parametru som vložil aké dáta sa majú spracovať z JSON-a
- volám metódu ako extractData(song), song je response z API
-->
<template>
    <div class="itunes" data-aos="fade-up">
        <h1>Search some music, <span class="msg-highlight">NOW ! </span></h1>
        <tunes-search-form />
        <tunes-list />
    </div>
</template>

<script>
import TunesSearchForm from "../components/tunes/TunesSearchForm.vue";
import TunesList from "../components/tunes/TunesList.vue";

export default {
    components: {
        TunesSearchForm,
        TunesList
    },
    data() {
        return {};
    }
};
</script>

<style scoped>
.itunes li {
    list-style: none;
    margin: 10px 0;
}
</style>
