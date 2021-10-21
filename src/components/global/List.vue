<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="my-0" max-width="300">
        <v-list>
          <v-list-item-group v-model="model">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="item.nome"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data: () => ({
    model: 1,
  }),
};
</script>

<style scoped>

</style>