<template>
   <main>
        <agile :arrows="false" :speed="1000"
        :timing="'linear'" :fade="true" :dots="false"
        :autoplay="true" :pauseOnHover="true">
        <div class="slide slide--1"></div>
        <div class="slide slide--2"></div>
        <div class="slide slide--3"></div>
        </agile>
        <md-toolbar class="md-dense">
        <router-link tag="md-button" to="/personagens" class="botao md-raised">
        Clique aqui para conhecer os heróis da Marvel!</router-link>
        </md-toolbar>
    </main>



</template>

<script>
export default {
 
}
</script>

<!-- scoped = declarações css só pode ser utilizada por esse component-->
<style scoped>
.slide {
    background-position: center;
    background-size: cover;
    height: 450px;
    
}

.slide--1{
    background-image: url('../assets/marvel.png');
    
}

.slide--2{
    background-image: url('../assets/marvel2.jpg');
}

.slide--3{
    background-image: url('../assets/marvel3.jpg');
}

.botao{
    height:70px;
    font-size:large;
    left:32%;
    margin-top:1.5%;
    margin-bottom:1%;
    background-color:#ACC5E3;
}

.md-dense{
    border:none;
    box-shadow:none;
}
</style>
