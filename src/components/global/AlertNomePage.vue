<template>
  <div id="app">
    <v-app id="inspire">
      <div class="el">
        <v-alert
          border="left"
          colored-border
          color="deep-purple accent-4"
          elevation="2"
        >
         {{text}}
        </v-alert>
        
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
    props:['text']
};
</script>

<style scoped>

.el{
    width: 90%;
    margin: 0 auto;
    margin: 1rem;
}
</style>