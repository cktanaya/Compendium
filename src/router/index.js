import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import PortfolioShowcasePage from '../views/PortfolioShowcasePage.vue';
import ContactPage from '../views/ContactPage.vue';
import CreativePage from '../views/CreativePage.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,
    meta: { noSidebar: true },  // No sidebar on login page
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: () => import('../components/DashBoard.vue'), // Your portfolio dashboard
  },
  {
    path: '/portfolio/profile',
    name: 'Profile',
    component: ProfilePage,
  },
  {
    path: '/portfolio/showcase',
    name: 'PortfolioShowcase',
    component: PortfolioShowcasePage,
  },
  {
    path: '/portfolio/contact',
    name: 'Contact',
    component: ContactPage,
  },
  {
    path: '/portfolio/creative',
    name: 'Creative',
    component: CreativePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
