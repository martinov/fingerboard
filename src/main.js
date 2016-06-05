import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import RoutinesList from './routines/Index.vue'
import Routine from './routines/Routine.vue'

Vue.use(Router);

const router = new Router({
  history: true,
  saveScrollPosition: true,
})

// Pointing routes to the components they should use
router.map({
  '/routines': {
    component: RoutinesList,
  },
  '/routines/:id': {
    name: 'routine',
    component: Routine,
  },
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/routines'
})

router.start(App, '#app')
