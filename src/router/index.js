import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/InfoView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import FavoritesView from '../views/FavoritesView.vue'


let isAuthenticated = false;

const updateAuthVariable = async () => {
  if (localStorage.getItem('user')) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
};

const requireAuth = async (to, from, next) => {
  await updateAuthVariable();

  if (to.path === '/login') {
    // Evitar la redirección a /login cuando ya estás en /login
    return next();
  }

  if (isAuthenticated) {
    return next();
  }

  next('/login');
};





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: requireAuth

    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      // beforeEnter: RegisterAndLogin
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      // beforeEnter: RegisterAndLogin
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
      beforeEnter: requireAuth
      
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView,
      beforeEnter: requireAuth
    },
    
  ]
})

export default router
