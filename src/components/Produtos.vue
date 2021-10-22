<template>
  <div>
    <titulo-page text="Produtos" />

    <btn-add class="" @showForm="showForm" />
    <div class="conteudo">
      <List @showItem="showItem" :items="produtos" />
      <div v-if="form">
        <Form />
      </div>
      <div v-if="show">
        <show-produto @visibility="visibility" :item="item" />
      </div>
      
    </div>
  </div>
</template>

<script>
import List from "./global/List.vue";
import TituloPage from "./global/AlertNomePage.vue";
import BtnAdd from "./global/BtnAdd.vue";
import Form from "./produto/Form.vue";
import ShowProduto from "./produto/ShowProduto.vue";

export default {
  data: () => ({
    form: false,
    show: false,
    item: null
  }),
  components: {
    List,
    TituloPage,
    BtnAdd,
    Form,
    ShowProduto
  },

  computed: {
    produtos() {
      return this.$store.state.items.data;
    },
    qtdProdutos() {
      return this.$store.state.items.data.length;
    },
  },
  methods: {
    showForm() {
      this.show = false
      this.form = !this.form;
    },
    showItem(item){
      this.show = true
      this.form = false
      this.item = item
      
    },
    visibility(){      
      this.show = ! this.show
    }
  },
};
</script>

<style scoped>

.conteudo{
  display: flex;
  justify-content: space-between;
}
</style>