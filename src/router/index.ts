// Arquivo que define e exporta todas as rotas disponíveis no app, além de regras como redirecionamentos ou rotas dinâmicas.
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import HistoryView from '@/views/HistoryView.vue';
import TrendsView from '@/views/TrendsView.vue';
import SettingsView from '@/views/SettingsView.vue';
import AboutView from '@/views/AboutView.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/history', component: HistoryView },
  { path: '/trends', component: TrendsView },
  { path: '/settings', component: SettingsView },
  { path: '/about', component: AboutView },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),  // Utiliza o hash na URL (como #/home)
  routes
})

export default router
