<template>
    <div class="game">
         <div @click="performMove(i+1)" class="box" v-for="(n, i) in 9" :key="n.id" :id=i+1 ref="myid"> </div>
    </div>
</template>

<script>
 var a=0;
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
          if(this.pkt[x]=='x'||this.pkt[x]=='y'||a==1){

          }else{
          if(this.player%2 === 0){
                        document.getElementById(x).style.backgroundColor = "White";
                        this.pkt[x]='x';
                        this.player++
          }
        else{
                 document.getElementById(x).style.backgroundColor = "black";
                 this.pkt[x]='y';
                 this.player++
        }
     if(this.pkt[1]=='x' && this.pkt[2]=='x' && this.pkt[3]=='x'|| 
        this.pkt[4]=='x' && this.pkt[5]=='x' && this.pkt[6]=='x'||
        this.pkt[7]=='x' && this.pkt[8]=='x' && this.pkt[9]=='x'||
        this.pkt[3]=='x' && this.pkt[6]=='x' && this.pkt[9]=='x'||
        this.pkt[2]=='x' && this.pkt[5]=='x' && this.pkt[8]=='x'||
        this.pkt[1]=='x' && this.pkt[4]=='x' && this.pkt[7]=='x'||
        this.pkt[1]=='x' && this.pkt[5]=='x' && this.pkt[9]=='x'||
        this.pkt[7]=='x' && this.pkt[5]=='x' && this.pkt[3]=='x'){
         console.log("Wygrywa X");
         a=1;
            }
     if(this.pkt[1]=='y' && this.pkt[2]=='y' && this.pkt[3]=='y'|| 
        this.pkt[4]=='y' && this.pkt[5]=='y' && this.pkt[6]=='y'||
        this.pkt[7]=='y' && this.pkt[8]=='y' && this.pkt[9]=='y'||
        this.pkt[3]=='y' && this.pkt[6]=='y' && this.pkt[9]=='y'||
        this.pkt[2]=='y' && this.pkt[5]=='y' && this.pkt[8]=='y'||
        this.pkt[1]=='y' && this.pkt[4]=='y' && this.pkt[7]=='y'||
        this.pkt[1]=='y' && this.pkt[5]=='y' && this.pkt[9]=='y'||
        this.pkt[7]=='y' && this.pkt[5]=='y' && this.pkt[3]=='y'){
         console.log("Wygrywa O");
         a=1
            }
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
