import Vue from 'vue'
import VueRouter from 'vue-router'
import MarketView from '@/views/MarketView'
import GalleryView from '@/views/GalleryView'
import CartView from '@/views/CartView'
import HelpView from '@/views/HelpView'
import ManagementView from '@/views/ManagementView'
import AboutView from '@/views/AboutView'
import MyPageView from '@/views/MyPageView'
import SignUp from '@/views/SignUpView'
import SignIn from '@/views/SignInView'

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
    path: '/management',
    name: 'management',
    component: ManagementView
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/myPage',
    name: 'myPage',
    component: MyPageView
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
