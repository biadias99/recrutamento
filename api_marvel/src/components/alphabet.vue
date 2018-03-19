<template>
<div id="app">
  <div class="md-layout titulo">
       <div class="md-layout-item md-size-100 md-small-size-70">
       <center>
            <span class="md-headline">Escolha uma letra para visualizar os heróis:</span>
       </center>
       </div>
  </div>
    
    <div class="md-layout alfabeto">
    <span v-for="variavel in alfabeto">
        <router-link :to="{ name: 'list-characters', params: {letra: variavel.letra }}" class="router">
            <md-button class="md-fab">{{variavel.letra}}</md-button>
        </router-link>
    </span>
    </div>
</div>
</template>

<script>

export default {
 data(){
    return{
        alfabeto: [
            { letra: 'a' },
            { letra: 'b' },
            { letra: 'c' },
            { letra: 'd' },
            { letra: 'e' },
            { letra: 'f' },
            { letra: 'g' },
            { letra: 'h' },
            { letra: 'i' },
            { letra: 'j' },
            { letra: 'k' },
            { letra: 'l' },
            { letra: 'm' },
            { letra: 'n' },
            { letra: 'o' },
            { letra: 'p' },
            { letra: 'q' },
            { letra: 'r' },
            { letra: 's' },
            { letra: 't' },
            { letra: 'u' },
            { letra: 'v' },
            { letra: 'w' },
            { letra: 'x' },
            { letra: 'y' },
            { letra: 'z' }
        ]    
    }
  }
}

</script>

<style scoped>
   .md-headline{
        color:#152840;
        font-family: inherit;
        font-weight:bold;
    }
    .titulo{
        margin-top:15px;
    }
    .md-fab{
        background-color:#C9CAED;
        margin-left: 5%;
        font-size: 30px;
    }
    .router{
        display:inline-block;
        margin:10px;
        
    }
    .alfabeto{
        margin-left: 10%;
        margin-right: 10%;
    }
</style>
