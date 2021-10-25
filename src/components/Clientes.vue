<template>
  <div>
    <titulo-page text="Clientes" />
    <btn-add class="" @showForm="showForm" />
    <div class="conteudo">
      <List @showItem="showItem" :items="clientes" />
      <div v-if="form">
        <Form />
      </div>
      <div v-if="show">
        <show-cliente @visibility="visibility" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import List from "./global/List.vue";
import TituloPage from "./global/AlertNomePage.vue";
import BtnAdd from "./global/BtnAdd.vue";
import Form from "./cliente/Form.vue";
import ShowCliente from  './cliente/ShowCliente.vue'
export default {
  components: {
    List,
    TituloPage,
    BtnAdd,
    Form,
    ShowCliente
  },
  data: () => ({
    item: null,
    form: false,
    show: false,
    cliente: null,
  }),

  computed: {
    clientes() {
      return this.$store.state.clientes.data;
    },
  },
  methods: {
    showForm() {
      this.show = false;
      this.form = !this.form;
    },
    showItem(item) {
      
      this.show = true;
      this.form = false;
      this.item = item;
    },
    visibility() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>

.conteudo{
  display: flex;
  justify-content: space-between;
}
</style>