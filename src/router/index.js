import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/HelloWorld.vue'
import Center from '../components/Center.vue'
import DossierMedical from '../components/DossierMedical'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/center',
    name: 'Center',
    component: Center
  },
  {
    path: '/dossier_medical',
    name: 'Dossier',
    component: DossierMedical
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
