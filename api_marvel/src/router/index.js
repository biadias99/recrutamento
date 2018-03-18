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
      path: '/personagens/:id',
      name: 'character',
      component: Character
    },
    {
      path: '/personagens',
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
