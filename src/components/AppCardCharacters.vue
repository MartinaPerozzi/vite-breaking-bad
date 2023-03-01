<script>
// Dopo aver nmp i axios nel terminale lo importo
import axios from "axios";

export default {
    data() {
        return {
            // Creo un'array che conterrà i miei dati chiamati con l'API
            characters: [],
        }
    },

    // Created--> chiama al load della pagina
    created() {
        // axios chiama API "..."
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0")
            // POI..rispondi.
            .then((response) => {
                console.log(response);
                // Metti la risposta ottenuto dentro l'array- non con push ma con assegnazione
                this.characters = response.data.data;
            })
    },
}
</script>

<template>
    <div class="row row-cols-2 row-cols-md-5">
        <div class="col" v-for="character in characters">
            <div v-for="characterimage in character.card_images">

                <img :src="characterimage.image_url" alt="">
            </div>

            <h3>{{ character.name }}</h3>
            <span>{{ character.archetype }}</span>

        </div>


    </div>
</template>

<style lang="scss" scope></style>
