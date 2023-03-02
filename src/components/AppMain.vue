<script>
import selectType from "./selectType.vue";
import AppCardCharacters from "./AppCardCharacters.vue";
export default {
    data() {
        return {


        }
    },
    components: { AppCardCharacters, selectType }
}

</script>

<template>
    <selectType class="select" />
    <main class="container mt-5 ps-5 pe-5">
        <AppCardCharacters />
    </main>
</template>

<style lang="scss" scope>
main {
    background-color: white;
    padding: 2rem;
}

.select {
    padding: 1rem 3rem;
}
</style>
