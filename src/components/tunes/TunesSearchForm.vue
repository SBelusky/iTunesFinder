<!--
1.) $log() -> moje metóda z môjho pluginu helpers.js
-->
<template>
    <form action="#" @submit.prevent="getMusic()">
        <input
            @keyup="search()"
            type="text"
            v-model="query"
            step="1"
            placeholder="Type song, album, ..."
        />
    </form>
</template>

<script>
import axios from "axios";
import { debounce } from "lodash-es";

export default {
    data() {
        return {
            limit: 5,
            query: "",
            songs: []
        };
    },
    methods: {
        search: debounce(function() {
            this.getMusic();
        }, 500),
        getMusic() {
            // Make a request for a user with a given ID
            axios
                .get(
                    `https://itunes.apple.com/search?term=${encodeURI(
                        this.query
                    )}&entity=song&limit=${this.limit}`
                )
                .then(response => {
                    let iTunesSongs = response.data.results
                        .filter(song => song.kind === "song")
                        .map(song => this.extractData(song));

                    this.$root.$emit("new-songs-bro", iTunesSongs);
                });
        },
        extractData({
            trackId: id,
            artistName: artist,
            previewUrl: audioFile,
            artworkUrl100: cover,
            trackName: name,
            collectionName: album
        }) {
            return { id, artist, audioFile, cover, name, album };
        }
    }
};
</script>

<style scoped>
input {
    width: 600px;
    font-size: 30px;
    padding: 10px 30px 10px 30px;
    border-radius: 20px;
    border: none;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
}
input:focus,
input:hover {
    outline: none;
    transform: scale(1.05);
}
</style>
