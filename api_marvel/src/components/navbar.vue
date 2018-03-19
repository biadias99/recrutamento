<template>

<md-toolbar class="navbar">
    <router-link to="/">
    <md-button class="md-icon-button md-raised md-warn">
      <md-icon class="home">home</md-icon>
    </md-button>
    </router-link>

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
    margin-left:15px;
}

.md-icon{
    color:white;
}

</style>
