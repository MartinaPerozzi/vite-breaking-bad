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
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0")
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
    <section>
        <div class="found-banner">
            <h4> Found {{ characters.length }} cards</h4>
        </div>
        <div class="row row-cols-2 row-cols-md-5 g-3">
            <div class="col" v-for="character in characters">
                <div class="card-bg">
                    <div v-for="characterimage in character.card_images">
                        <img :src="characterimage.image_url" alt="YuGiOhCards">
                    </div>
                    <div class="card-info d-flex flex-column">
                        <h3>{{ character.name }}</h3>
                        <span>{{ character.archetype }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scope>
@use "../assets/scss/partials/_variables.scss" as*;

.found-banner {
    background-color: rgb(45, 45, 45);
    color: white;
    padding: 1rem 2rem;
}

.card-bg {
    background-color: $maincolor;
    padding: 0;
    height: 500px;

    .card-info {
        text-align: center;
        gap: 1rem;
        padding: 0rem 0.5rem;

        h3 {
            color: white;
            text-transform: uppercase;
            font-size: 1.1rem;
            padding-top: 1rem;
            text-align: center;
            height: 4rem;
        }

        span {
            font-size: 1.2rem;
            justify-self: flex-end;
        }
    }
}
</style>
