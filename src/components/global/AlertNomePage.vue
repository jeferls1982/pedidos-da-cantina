<template>
  <div id="app">
    
        <h1> {{text}}</h1>
  </div>
</template>

<script>
export default {
    props:['text']
};
</script>

<style scoped>

.el{
    padding: 0;
    width: 90%;
    margin: 0 auto;
    margin: 1rem;
}
</style>