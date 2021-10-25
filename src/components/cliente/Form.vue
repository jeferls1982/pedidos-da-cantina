<template>
  <div class="m-3 card p-3">
    <form @submit.prevent="addCliente">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome do Cliente</label>
        <input
          v-model="nome"
          type="text"
          class="form-control"
          autocomplete="off"
          id="nome"
          aria-describedby="nomeHelp"
        />
        <div id="nomeHelp" class="form-text">
          Por favor informe o nome do Cliente
        </div>
      </div>

      <div class="mb-3">
        <label for="fone" class="form-label">Telefone</label>
        <input
          v-model="fone"
          type="text"
          class="form-control"
          autocomplete="off"
          id="fone"
          aria-describedby="foneHelp"
        />
        <div id="foneHelp" class="form-text">Por favor informe o telefone</div>
      </div>
        {{nome}}{{fone}}
      <btn-submit />
    </form>
  </div>
</template>

<script>
import BtnSubmit from "../global/BtnSubmit.vue";
export default {
  components: {
    BtnSubmit,
  },
  data: () => ({
    id: 10,
    nome: null,
    fone: null,
    valor: null,
    qtd_disponivel: 5,
  }),
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
  },
  methods: {
    addCliente() {
      var cliente = {
        id: this.$store.state.clientes.data.length +1,
        nome: this.nome,
        fone: this.fone,        
      };
      console.log(cliente);
      this.$store.dispatch("addCliente", cliente);
    },
  },
};
</script>

<style scoped>
</style>