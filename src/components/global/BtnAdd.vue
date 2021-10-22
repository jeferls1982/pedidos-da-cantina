<template>
  <div>
    <span @click="showForm" class="btn btn-success">Add</span>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    showForm() {
        this.$emit('showForm');
    },
  },
};
</script>

<style scoped>
</style>