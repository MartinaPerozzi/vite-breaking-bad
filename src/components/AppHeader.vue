<script>
export default {
    data() {
        return {
            logo: "yugioh-logo.png",
            title: "Yu-Gi-Oh Api",
        };

    },
    // Per importare l'immagine--> con v-bind altri metodi come path relativo non funzionano.
    methods: {
        getImage(name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href;
        }
    },
}

</script>

<template>
    <header>
        <div class="d-flex align-items-center">
            <div class="logo-container">
                <img :src="getImage(logo)" alt="Yu Gi Oh Logo">
            </div>
            <h1>{{ title }}</h1>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: white;
    padding: 0.5rem;

    div {
        gap: 1rem;

        .logo-container {
            max-width: 100px;
        }
    }

    h1 {
        font-weight: 300;
    }
}
</style>