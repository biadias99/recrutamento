<template>
<div>
<router-link to="/personagens" class="voltar">
    <md-button class="md-undo-button md-raised">
        Voltar
    </md-button>
</router-link>

<center>
<input type="text" v-model="search" placeholder="Digite o nome do herói...">


<div>

<md-card md-with-hover v-for="personagem in filtrarPersonagens" :key="personagem.id">
<router-link :to="{ name: 'character', params: {id: personagem.id }}">
 <md-card-header>
    <div class="md-title">{{personagem.name}}</div>
    <!--<div class="md-subhead">{{personagem.}}</div>-->
  </md-card-header>

  <md-card-media>
    <img :src="personagem.thumbnail.path + '.' + personagem.thumbnail.extension" alt="Heroe Marvel">

  </md-card-media>
</router-link>
</md-card>

</div>

<div v-if="filtrarPersonagens.length <= 0">
<h2>Desculpe, não foi encontrado nenhum herói :(</h2>
<h2>Tente novamente!</h2>
</div> 

</center>
<Footer></Footer>

</div>

</template>

<script>
//http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d5a6bb52c442c8546422f4f8c5ba5946&hash=37e650de311864dd80717e74c9e66417
import axios from 'axios'
import Footer from './footer.vue'

export default {
  data(){
    return{
        alfabeto: this.$route.params.letra,
        personagens: [],
        search: ''

    }
  },
  mounted(){
      axios.get("https://gateway.marvel.com/v1/public/characters?nameStartsWith=" + this.alfabeto + "&limit=100&ts=1&apikey=d5a6bb52c442c8546422f4f8c5ba5946&hash=37e650de311864dd80717e74c9e66417")
      .then( (response) => {
        console.log('Data:', response.data.data.results);

        this.personagens = response.data.data.results; 
        
      })
      .catch(function (error){
        console.log('Error',error)
      })
  },
  computed: {
    filtrarPersonagens: function(){
      return this.personagens.filter((personagem) => {
        return personagem.name.toUpperCase().match(this.search.toUpperCase());
      });
    }
  },
  components: {
    Footer
    
  },

}
</script>

<!-- scoped = declarações css só pode ser utilizada por esse component-->
<style scoped>
body{
  color:black;
}

.material-icons{
  font-size:30px;
}

.md-card{
    width:190px;
    height: 300px;
    margin:1%;
    display:inline-block;
    
}

.md-title{
    font-size:medium;
}

[type="text"], [type="password"], [type="date"], [type="datetime"], [type="datetime-local"], [type="month"], [type="week"], [type="email"], [type="number"], [type="search"], [type="tel"], [type="time"], [type="url"], [type="color"], textarea {
     outline: 0;
    display: block;
    box-sizing: border-box;
    width: 60%;
    height: 2.4375rem;
    padding: 0.5rem;
    border: 0;
    margin: 0 0 1rem;
    font-family: inherit;
    font-size: 1rem;
    color: #9e9e9e;
    background-color: white;
    box-shadow: none;
    border-radius: 0;
    transition: box-shadow 0.5s, border-color 0.25s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
}
input[type="text"], input[type="password"], input[type="date"], input[type="datetime"], input[type="datetime-local"], input[type="month"], input[type="week"], input[type="email"], input[type="number"], input[type="search"], input[type="tel"], input[type="time"], input[type="url"], input[type="color"], textarea {
  padding: 1rem 0 0.5rem 0;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  background: transparent;
  margin-bottom: 10px;
}

input[type="text"]:focus, input[type="password"]:focus, input[type="date"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="month"]:focus, input[type="week"]:focus, input[type="email"]:focus, input[type="number"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="time"]:focus, input[type="url"]:focus, input[type="color"]:focus, textarea:focus {
  border: none;
  border-bottom: 2px solid blue;
  box-shadow: none;
  position: relative;
  top: 1px;
  background: transparent;
}

h2{
  color:#152840;
  font-family: inherit;

}

a:link, a:visited{
  text-decoration:none; 
  color: black;
}
</style>
