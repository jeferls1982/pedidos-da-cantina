<template>
  <div>
    <titulo-page text="Clientes" />
    <List :items="clientes" />
  </div>
</template>

<script>

import List from "./global/List.vue";
import TituloPage from "./global/AlertNomePage.vue";
export default {
  components: {
    List,
    TituloPage
    
  },

  computed: {
    clientes() {
      return this.$store.state.clientes.data;
    },
  },
};
</script>

<style scoped>
</style>