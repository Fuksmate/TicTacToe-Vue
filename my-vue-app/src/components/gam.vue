<template>

    <div class="game">
         <div @click="performMove(i+1)" class="box" v-for="(n, i) in 9" :key="n.id" :id=i+1 ref="myid"> </div>
   
          
      
    </div>


   

</template>

<script>
 
  export default {
    name: 'gam',
     data() { return {
         player: "1",
            pkt:[
                {nr: ''},
            ],
    
    } },
     methods: {
      performMove(x) {
          this.pkt[x]=this.player;
          console.log(this.pkt[5]);
          if(this.player%2 === 0){
                      document.getElementById(x).style.backgroundColor = "White";
                      
                      this.player++
                      
          }
        else{
            document.getElementById(x).style.backgroundColor = "black";
            this.player++
        }
    
        }
    
    
    }
    
     
  }
</script>

<style scoped>
.game{
    width: 500px;
    height: 500px;
    margin:0 auto;
    background-color: red;
}
.box{
    width: calc((100% / 3) - 2px );
    height: calc((100% / 3) - 2px);
      border: 1px solid black;
       display: block;
       float:left;
       padding:0;
       margin: 0;
}
 
</style>
