import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import AboutCountry from '@/views/country/AboutCountry.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/country/name/:nomi',
            name: 'country',
            component: AboutCountry,
            props: true
        }
    ]
})

export default router