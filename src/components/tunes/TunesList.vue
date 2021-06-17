<!-- 
1.) props "new-songs" bude v template časti prístupná podľa premennej newSongs
2.) mounted() -> počúvač, bude spustení keď bude tento vue component pripravený
3.) this.$root -> označuje Main.js
-->
<template>
    <div>
        <ul class="tunes-list">
            <li v-for="song in songs" :key="song.id">
                <tunes-song :song="song" data-aos="fade-up" />
            </li>
        </ul>
    </div>
</template>

<script>
import TunesSong from "./TunesSong.vue";

export default {
    components: {
        TunesSong
    },
    data() {
        return {
            songs: []
        };
    },
    mounted() {
        this.$root.$on("new-songs-bro", data => (this.songs = data));
    }
};
</script>

<style scoped>
.tunes-list li {
    list-style: none;
}
</style>
