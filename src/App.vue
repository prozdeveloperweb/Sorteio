<script>
import Login from './components/login.vue';
import Cadastro from './components/Cadastro.vue';
import Sorteio from './components/Sorteio.vue'

export default {
  components: {
    Login,
    Cadastro,
    Sorteio
  },
  
};
</script>

<template>
 <div>
    <Login  />
    <Cadastro  />

  </div>
</template>

<style scoped>
div {
    display: flex;
  align-items: center;
  justify-content: center;
}
</style>
