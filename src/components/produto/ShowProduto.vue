<template>
  <div class="card m-3 show-item">
    <div class="card-header">
      <div class=" d-flex justify-content-between">
        <div>{{ item.nome }}</div>
        <div><i @click="visibility" class="bi bi-x-circle"></i></div>
      </div>
    </div>
    <div class="card-body">
      <div class="card-body d-flex justify-content-between">
        <div>Nome:</div>
        <div>{{ item.nome }}</div>
      </div>
      <div class="card-body d-flex justify-content-between">
        <div>Preço:</div>
        <div>{{ item.valor }}</div>
      </div>
      <div class="card-body d-flex justify-content-between">
        <div>Qtd:</div>
        <div>{{ item.qtd_disponivel }}</div>
      </div>
    </div>
    <div class="m-3 d-flex justify-content-center">
      <button class="btn btn-danger w-50">excluir</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    visibility() {
      this.$emit("visibility");
    },
  },
};
</script>

<style scoped>
.show-item {
  width: 16rem;
}
.fechar {
  background-color: rgba(128, 128, 128, 0.178);
  padding: 0 0.3rem;
  border-radius: 50%;
  text-decoration: none;
  color: grey;
}
</style>