<template>
  <!--mesma ideia do app do Angular 2, td que está aqui, está em todas as páginas
  ideal para navbar e footer-->
  <div id="app">
    <CcNavbar></CcNavbar>
    <router-view/>
  
  </div>
</template>

<script>
import CcNavbar from './components/navbar.vue'

export default {
  name: 'MarvelComponent',
  components: {
    CcNavbar
    
  }
}
</script>

<style>
 
</style>
