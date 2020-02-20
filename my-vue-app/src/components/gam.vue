<template>
    <div class="game">
         <div @click="performMove(i+1)" class="box" v-for="(n, i) in 9" :key="n.id" :id=i+1 ref="myid"> </div>

    </div>
</template>

<script>
  
 var endGame=0;
  export default {
    name: 'game',
     data() { return {
         player: "1",
            pkt:[
                {nr: ''},
            ],
    } },
     methods: {
        performMove(x) {
            if (this.player == 10){
                    alert("remis");
                    endgame=1;
                }
            if(endGame==1){
                win(this.player);
                }
            else{
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
                        this.pkt[7]=='x' && this.pkt[5]=='x' && this.pkt[3]=='x')
                        {
                                alert("Wygrywa White");//White win
                                endGame=1;
                        }
                    else if(this.pkt[1]=='y' && this.pkt[2]=='y' && this.pkt[3]=='y'|| 
                        this.pkt[4]=='y' && this.pkt[5]=='y' && this.pkt[6]=='y'||
                        this.pkt[7]=='y' && this.pkt[8]=='y' && this.pkt[9]=='y'||
                        this.pkt[3]=='y' && this.pkt[6]=='y' && this.pkt[9]=='y'||
                        this.pkt[2]=='y' && this.pkt[5]=='y' && this.pkt[8]=='y'||
                        this.pkt[1]=='y' && this.pkt[4]=='y' && this.pkt[7]=='y'||
                        this.pkt[1]=='y' && this.pkt[5]=='y' && this.pkt[9]=='y'||
                        this.pkt[7]=='y' && this.pkt[5]=='y' && this.pkt[3]=='y')
                        {
                                alert("Wygrywa Black"); //Black Win
                                endGame=1;
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
    margin:50px auto 0 auto;
    background-color: #00ff99;
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
