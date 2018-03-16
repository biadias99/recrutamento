<template>
<div>
<center>
<router-link to="/character">

<md-card md-with-hover>

 <md-card-header>
    <div class="md-title">Capitão América</div>
    <div class="md-subhead">Herói super top</div>
  </md-card-header>

  <md-card-media>
    <img src="../assets/capitaoamerica.jpg" alt="People">

    <md-ink-ripple></md-ink-ripple>
  </md-card-media>

</md-card>

</router-link>

</center>
</div>

</template>

<script>
//http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d5a6bb52c442c8546422f4f8c5ba5946&hash=37e650de311864dd80717e74c9e66417
import axios from 'axios'

export default {
  data(){
    return{
      personagens: []
    }
  },
  mounted(){
      axios.get('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=d5a6bb52c442c8546422f4f8c5ba5946&hash=37e650de311864dd80717e74c9e66417')
      .then( function(response){
        console.log('Data:',response.data);
        //this.personagens=response.data;
      })
      .catch(  function(error){
        console.log('Error',error)
      })
  }
}
</script>

<!-- scoped = declarações css só pode ser utilizada por esse component-->
<style scoped>
.md-card{
    width:14%;
    margin:1%;
    display:inline-block;
}

.md-title{
    font-size:medium;
}

.header {
  color: #555;
  height: 100%;
  text-align: center;
  padding-top: 5px;
}

.header .cover-heading {
  font-size: 46px;
  color: #F25C00;
  margin-top: 1.6rem;
  margin-bottom: 1.6rem;
}
.removeInput {
  font-size: 36px;
  color: #F9A603;
  cursor: pointer;
  top: 0;
  right: 0;
  position: absolute;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.searchForm {
  margin-bottom: 2.6rem;
  position: relative;  
}


/* Material Design code below */
.raised-button {
    display: inline-block;
    text-align: center;
    line-height: 1;
    cursor: pointer;
    -webkit-appearance: none;
    transition: all 0.25s ease-out;
    vertical-align: middle;
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 0.85em 1em;
    margin: 0 1rem 1rem 0;
    font-size: 0.9rem;
    background: #F9A603;
    color: #FAFAFA;
}
.raised-button:hover, .raised-button:focus {
    background: #E69903;
    color: #FFF;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.13), 0 1px 5px 0 rgba(0, 0, 0, 0.08);
}


[type="text"], [type="password"], [type="date"], [type="datetime"], [type="datetime-local"], [type="month"], [type="week"], [type="email"], [type="number"], [type="search"], [type="tel"], [type="time"], [type="url"], [type="color"], textarea {
    display: block;
    box-sizing: border-box;
    width: 100%;
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
  margin: 1.75rem 0 0.5rem;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  background: transparent;
}

input[type="text"]:focus, input[type="password"]:focus, input[type="date"]:focus, input[type="datetime"]:focus, input[type="datetime-local"]:focus, input[type="month"]:focus, input[type="week"]:focus, input[type="email"]:focus, input[type="number"]:focus, input[type="search"]:focus, input[type="tel"]:focus, input[type="time"]:focus, input[type="url"]:focus, input[type="color"]:focus, textarea:focus {
  border: none;
  border-bottom: 2px solid #F9A603;
  box-shadow: none;
  position: relative;
  top: 1px;
  background: transparent;
}


</style>
