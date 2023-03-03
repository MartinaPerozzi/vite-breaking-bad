<script>
import SelectType from "./SelectType.vue";
import AppCardCharacters from "./AppCardCharacters.vue";
import axios from "axios";
import { store } from "../data/store";
export default {
    data() {
        return {
            store,


        }
    },
    components: { AppCardCharacters, SelectType },

    methods: {
        fetchCards(url) {
            store.isPageLoading = true;
            axios
                .get(url)
                .then((response) => {
                    console.log(response);
                    store.characters = response.data.data;
                })

        },
        fetchSelectedType(selectionType) {
            console.log(selectionType);

            this.fetchCards(`${store.endpoint}&type=${selectionType}`);
        },
    },
    created() {
        this.fetchCards(store.endpoint);
        console.log(this.fetchCards);
    }

}

</script>

<template>
    <SelectType class="select" @selected="fetchSelectedType" />
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
