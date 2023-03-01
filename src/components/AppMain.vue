<script>
import AppCardCharacters from "./AppCardCharacters.vue";
export default {
    data() {
        return {
        }
    },
    components: { AppCardCharacters }
}

</script>

<template>
    <main class="container mt-5">
        <AppCardCharacters />
    </main>
</template>

<style lang="scss" scope>
main {
    background-color: white;
    padding: 2rem;
}
</style>
