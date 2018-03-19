<template>
    <div id="app">
    <router-link :to="{ name: 'list-characters', params: {letra}}">
    <md-button class="md-undo-button md-raised">
        <!--<i class="material-icons">undo</i>-->
        Voltar
    </md-button>
    </router-link>

        <div class="md-layout personagem">
            <div class="md-layout-item md-size-30">
            </div>
            <div class="md-layout-item md-size-60 md-small-size-90 titulo">
            <center>
            <br>
            </center>
            </div>
        </div>

        <div class="md-layout personagem">
            <div class="md-layout-item md-size-30 foto md-small-size-90 md-alignment-center">
                <center>
                <img :src="personagem.thumbnail.path + '.' + personagem.thumbnail.extension" alt="Heroe Marvel" class="imagem">
                <br><br>
                <span class="md-headline">{{personagem.name}}</span>
                </center>
            </div>
            <div class="md-layout-item md-size-60 md-small-size-90 descricao">
                <center><span class="md-title">Descrição</span></center><br>
                <p v-if="personagem.description==''">Infelizmente, este herói não possui descrição cadastrada! 
                Mas temos certeza que sua história é incrível! :)</p>
                <p v-else>{{personagem.description}}</p>
            </div>

        </div>
       
    </div>


</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            id: this.$route.params.id,
            letra: this.$route.params.letra,
            personagem: {}
        }
    },
    created(){
       axios.get("http://gateway.marvel.com/v1/public/characters/" + this.id + "?ts=1&apikey=d5a6bb52c442c8546422f4f8c5ba5946&hash=37e650de311864dd80717e74c9e66417")
      .then( (response) => {
        console.log('Data:', response.data.data.results);

        this.personagem = response.data.data.results[0]; 
       
      })
      .catch(function (error){
        console.log('Error',error)
      })
    }
}
</script>

<style>
    .md-headline{
        color:#152840;
        font-family: inherit;
        margin-top:1%;
        margin-bottom:1%;
        font-weight:bold;

    }

    .foto{
        margin-top:1%;
        background-color:#CDC368;
        padding:2%;
        border-radius: 10px 0 0 10px;
    }

    .descricao{
        border-radius:0 10px 10px 0;
        padding-left:1.5%;
        padding-right:1.5%;
        padding-top:1.5%;
        margin-top:1%;
        background-color:#E9EABF;
    }

    p{
        margin-top:auto;
        text-align:justify;
        margin-bottom:auto;
    }

    .personagem{
        margin-left:17%;
        margin-right:10%;
        
    }
    .imagem{
        border-radius:50%;
        width:80%;
        box-shadow: 3px 5px 10px rgba(0,0,0,0.5);
    }
  
</style>
