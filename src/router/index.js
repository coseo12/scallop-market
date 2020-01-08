import Vue from 'vue'
import VueRouter from 'vue-router'
import MarketView from '../views/MarketView'
import GalleryView from '../views/GalleryView'
// import GalleryComponent from '../components/GalleryComponent'
import CartView from '../views/CartView'
import HelpView from '../views/HelpView'
import SettingsView from '../views/SettingsView'
import AboutView from '../views/AboutView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/market'
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/market',
    name: 'market',
    component: MarketView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
    // component: GalleryComponent
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
