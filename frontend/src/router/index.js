import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Services from '../views/services.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import About from '../views/about.vue'
import ReservationLaundry from '../views/reservation_laundry.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/reservation_laundry',
    name: 'ReservationLaundry',
    component: ReservationLaundry
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
