<template>
  <div id="app">    
    <ul class="list-group m-3 list"  v-for="item in items" :key="item.id">
      <li @click="showItem(item)" class="list-group-item">
          <div class="card-body d-flex justify-content-between">
            <div>{{ item.nome }}</div>
            <div>{{item.qtd_disponivel}}</div> 
          </div>
        
        </li>      
    </ul>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data: () => ({
    model: 1,
  }),
  methods:{
    showItem(item){            
      this.$emit('showItem',item)
    }
  }
};
</script>

<style scoped>
.list{
  width: 14rem;
}
</style>