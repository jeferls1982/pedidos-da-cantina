<template>  
  <div>
    <titulo-page text="Home" />




  <div>
    <button  class="btn btn-success">-</button>
      <span class="h3 m-3">{{qtd}}</span>
    <button @click="inc" class="btn btn-success">+</button>
  </div>





  </div>


</template>

<script>
import TituloPage from "./global/AlertNomePage.vue";
export default {
  components: {
    TituloPage,
  },
  data: () => ({
      qtd: 0
  }),
  methods:{
    inc(){
      
      this.$store.dispatch('inc')
    },
    dec: () => this.qtd++
  }
};
</script>

<style scoped>
</style>