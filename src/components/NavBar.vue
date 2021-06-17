<template>
    <section class="hero is-light is-bold">
        <div class="hero-head">
            <nav class="navbar">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="@/assets/logo.png" alt="Logo" class="is-64x64" />
                    </a>
                    <div
                        class="navbar-burger"
                        @click="showNav = !showNav"
                        :class="{ 'is-active': showNav }"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="navbar-menu" :class="{ 'is-active': showNav }">
                    <div class="navbar-start">
                        <a class="navbar-item has-text-weight-bold" href="/">
                            Home
                        </a>
                        <a class="navbar-item has-text-weight-bold" href="/tunes">
                            Search
                        </a>
                        <a class="navbar-item has-text-weight-bold" href="/about">
                            About
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            showNav: false
        };
    }
};
</script>

<style lang="scss" scoped></style>
