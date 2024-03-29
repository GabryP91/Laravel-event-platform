import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import EventList from './components/EventList.vue';
import TagList from './components/TagList.vue';

const routes = [
    {
        path: '/about',
        component: About
    },
    {
        path: '/',
        component: EventList
    },
    {
        path: '/tags',
        component: TagList
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
