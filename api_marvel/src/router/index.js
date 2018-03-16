import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Character from '@/components/character'
import ListCharacters from '@/components/list-characters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/character',
      name: 'character',
      component: Character
    },
    {
      path: '/list-characters',
      name: 'list-characters',
      component: ListCharacters
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    }

  ]
})
