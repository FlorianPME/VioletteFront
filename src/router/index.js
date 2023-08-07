import { createRouter, createWebHistory } from 'vue-router'
// Import components
import PersonnesList from '../components/PersonnesList.vue';
import PersonnesForm from '../components/PersonnesForm.vue';
import PersonnesEdit from '../components/PersonnesEdit.vue';
import Personnes from '../components/Personnes.vue';
import Dashboard from '../views/Dashboard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard},
    { path: '/people/list', name: 'people.list', component: PersonnesList },
    { path: '/people/create', name: 'people.create', component: PersonnesForm },
    { path: '/people/:id', name: 'people.details', component: Personnes, props: true },
    { path: '/people/:id/edit', name: 'people.edit', component: PersonnesEdit, props: true },
  ]
})

export default router
