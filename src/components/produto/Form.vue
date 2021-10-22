<template>
  <div class="m-3 card p-3">
    <form @submit.prevent="addItem">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome do Produto</label>
        <input
          v-model="nome"
          type="text"
          class="form-control"
          autocomplete="off"
          id="nome"
          aria-describedby="nomeHelp"
        />
        <div id="nomeHelp" class="form-text">
          Por favor informe o nome do Produto
        </div>
      </div>
      {{ nome }} {{ valor }}

      <div class="mb-3">
        <label for="preco" class="form-label">Preço</label>
        <input
          v-model="valor"
          type="text"
          class="form-control"
          autocomplete="off"
          id="preco"
          aria-describedby="precoHelp"
        />
        <div id="precoHelp" class="form-text">
          Por favor informe o preço do Produto
        </div>
      </div>

      <div class="mb-3">
        <label for="qtd_disponivel" class="form-label"
          >Quantidade disponivel</label
        >
        <input
          v-model="qtd_disponivel"
          type="number"
          class="form-control"
          id="qtd_disponivel"
          aria-describedby="qtdHelp"
        />
        <div id="qtdHelp" class="form-text">
          Por favor informe a quantidade de produtos disponíveis
        </div>
      </div>
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
    valor: null,
    qtd_disponivel: 5,
  }),
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
  },
  methods: {
    addItem() {
      var item = {
        id: this.$store.getters.getId,
        nome: this.nome,
        valor: this.valor,
        qtd_disponivel: 5,
      };
      this.$store.dispatch("addItem", item);
    },
  },
};
</script>

<style scoped>
</style>