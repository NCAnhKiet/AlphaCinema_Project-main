import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const routes = [
  // Public
  { path: '/', component: () => import('../pages/public/Home.vue'), name: 'Home' },
  { path: '/login', component: () => import('../pages/public/Login.vue'), name: 'Login' },
  { path: '/register', component: () => import('../pages/public/Register.vue'), name: 'Register' },
  { path: '/movies', component: () => import('../pages/public/Movies.vue'), name: 'Movies' },
  { path: '/movies/:id', component: () => import('../pages/public/MovieDetail.vue'), name: 'MovieDetail' },
  { path: '/promotions', component: () => import('../pages/public/Promotions.vue'), name: 'Promotions' },
  
  // Customer
  { 
    path: '/booking', 
    component: () => import('../pages/public/Booking.vue'), 
    name: 'Booking',
    meta: { requiresAuth: true }
  },
  { 
    path: '/profile', 
    component: () => import('../pages/public/Profile.vue'), 
    name: 'Profile',
    meta: { requiresAuth: true }
  },
  
  // Admin Route Group with Admin Layout
  {
    path: '/admin',
    component: () => import('../pages/admin/AdminLayout.vue'),
    meta: { requiresAdmin: true },
    children: [
      { path: '', redirect: '/admin/dashboard' },
      { path: 'dashboard', component: () => import('../pages/admin/Dashboard.vue'), name: 'AdminDashboard' },
      { path: 'movies', component: () => import('../pages/admin/MovieManagement.vue'), name: 'MovieManagement' },
      { path: 'rooms', component: () => import('../pages/admin/RoomManagement.vue'), name: 'RoomManagement' },
      { path: 'showtimes', component: () => import('../pages/admin/ShowtimeManagement.vue'), name: 'ShowtimeManagement' },
      { path: 'users', component: () => import('../pages/admin/UserManagement.vue'), name: 'UserManagement' },
      { path: 'promotions', component: () => import('../pages/admin/PromotionManagement.vue'), name: 'PromotionManagement' },
      { path: 'invoices', component: () => import('../pages/admin/InvoiceManagement.vue'), name: 'InvoiceManagement' },
      { path: 'reviews', component: () => import('../pages/admin/ReviewManagement.vue'), name: 'ReviewManagement' },
      { path: 'ticket-check', component: () => import('../pages/admin/TicketCheck.vue'), name: 'TicketCheck' }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation Guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.isAuthenticated;
  
  // Xử lý Admin Route
  if (to.meta.requiresAdmin) {
    if (!isAuthenticated) return next('/login');
    if (!authStore.isAdmin) return next('/'); // Cấm khách vào admin
  }

  // Xử lý Customer Route
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next('/login');
  } 
  
  // Xử lý Guest Route (như trang Đăng nhập)
  if (to.meta.requiresGuest && isAuthenticated) {
    return next('/');
  }

  next();
});

export default router;
