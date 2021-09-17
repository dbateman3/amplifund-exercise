import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const Car = () => import('./components/Car.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Car',
        component: Car,
    },
    {
        path: '*',
        redirect: '/',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
