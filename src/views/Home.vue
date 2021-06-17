<template>
    <div>
        <div class="home" data-aos="fade-down">
            <div>
                <img class="main-logo" src="../assets/ITunes_logo.svg" />
            </div>
            <hello-world class="main-msg" />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/home/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld
    }
};
</script>
