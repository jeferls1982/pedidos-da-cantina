<template>
  <div id="app">
    <div class="nav">
      <router-link class="btn_nav" :to="{ name: 'home' }">Home</router-link>
      <router-link class="btn_nav" :to="{ name: 'produtos' }">Produtos</router-link>
      <router-link class="btn_nav" :to="{ name: 'clientes' }">Clientes</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#app {
  background-color: blueviolet;
}
.nav {
  width: 30rem;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}
.btn_nav{
    color: white;
    text-decoration: none;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
}
</style>