<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  data() {
    return {
    }
  },
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
