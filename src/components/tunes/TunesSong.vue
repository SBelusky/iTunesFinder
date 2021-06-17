<template>
    <article class="tunes-song">
        <div class="flexim">
            <img v-if="song.cover" :src="song.cover" class="image is-128x128" />
            <p>
                <strong id="big">{{ song | songify | lower }}</strong>
                <br /><br />
                <span>{{ song.album }}</span>
            </p>
        </div>
        <figure v.if="song.audioFile" class="flexim">
            <audio controls :src="song.audioFile"></audio>
        </figure>
    </article>
</template>

<script>
export default {
    props: ["song"],
    filters: {
        songify: function(song) {
            return song.artist + " - " + song.name;
        },
        lower(str) {
            return str.toLowerCase();
        }
    }
};
</script>

<style lang="scss" scoped>
[v-cloak] {
    display: none;
}
.tunes-song {
    background-color: #8bc6ec;
    background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);

    height: 300px;
    width: 460px;
    margin: 50px auto;
    padding: 30px 30px 30px 30px;
    border-radius: 50px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
}
.flexim {
    display: flex;
    margin-bottom: 30px;
    position: relative;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: center;
}
hr {
    border: 1px solid #000;
}
/* img {
    width: 200px;
    height: auto;
} */
p {
    font-size: 12px;
    color: white;
    text-align: center;
    text-transform: uppercase;
}
figure {
    margin-bottom: 0 !important;
    margin-top: 50px;
}
audio {
    width: 400px;
    outline: none;
}
#big {
    font-size: 20px;
    font-weight: bold;
    width: 200px !important;
    max-height: 10px !important;
    overflow: hidden;
}
</style>
