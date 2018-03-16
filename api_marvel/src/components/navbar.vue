<template>

<md-toolbar class="navbar">
  <md-button class="md-icon-button md-raised md-warn">
    <router-link to="/">
    <md-icon class="home">home</md-icon>
    </router-link>
  </md-button>

  <h2 class="md-title" style="flex: 1">Heróis da Marvel</h2>

  <md-button class="md-icon-button">
    <md-icon>favorite</md-icon>
  </md-button>
</md-toolbar>


</template>

<script>

export default {
    
}


</script>

<!-- scoped = declarações css só pode ser utilizada por esse component-->
<style scoped>
 body{
    color:white;
  }

.navbar{
    background-color:#E12E52;
}

.md-title{
    color:white;
}

.md-icon{
    color:white;
}

</style>
