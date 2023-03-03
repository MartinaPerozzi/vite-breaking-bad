<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
// Importazione di store-elemento reattivo
import { store } from "./data/store";
export default {
  data() {
    return {
      // per usarlo nel template
      store,
    }
  },
  // // Created--> chiama al load della pagina
  // created() {
  //   // axios chiama API "..."
  //   // axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0")
  //   //   // POI..rispondi.
  //   //   .then((response) => {
  //   //     console.log(store);
  //   //     console.log(response);
  //   //     // Metti la risposta ottenuto dentro l'array in store- non con push ma con assegnazione- così sarà una informazione globale
  //   //     store.characters = response.data.data;
  //   //   })
  // },
  components: { AppHeader, AppMain }
}

</script>

<template>
  <AppHeader>{{ title }}</AppHeader>
  <AppMain />
</template>

<style lang="scss">
// Importo il mio foglio di stile globale.
@use "./assets/scss/style.scss";
</style>
