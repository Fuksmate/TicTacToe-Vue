<template>
  <div id="app">
    ad
    <gam />

  </div>
</template>

<script>
import gam from '@/components/gam.vue';
export default {
  name: 'App',
  components : {
    gam,
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
