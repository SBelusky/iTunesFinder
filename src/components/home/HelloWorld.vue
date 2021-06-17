<template>
    <div class="hello">
        <h1>
            Can't find app for <span class="msg-highlight">15s preview</span> of your favorite
            <span class="msg-highlight">iTunes songs</span> ?
        </h1>
        <p class="msg-side">No problemo, <strong>You</strong> already find...</p>
        <button class="search-btn-main" @click="goToSearch()">Search previews</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    methods: {
        goToSearch() {
            this.$router.push("/tunes");
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
