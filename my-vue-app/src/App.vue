<template>
  <div id="app">
            <h1 class="Tictac">Tic Tac Toe </h1>
        <game />

  </div>
</template>

<script>
import game from '@/components/gam.vue';
export default {
  name: 'App',
  components : {
    game,
  },
  
}
</script>

<style>
body{
  background-color: aquamarine;

}
.Tictac{
text-align: center;
}

</style>
