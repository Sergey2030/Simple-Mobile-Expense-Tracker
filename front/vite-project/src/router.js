import { createRouter, createWebHistory} from "vue-router"

import HomePage from "./components/HomePage.vue"
import Analysis from "./components/Analysis.vue"
import Categories from "./components/Categories.vue"
import Transaction from "./components/Transaction.vue"
import Profile from "./components/Profile.vue"

const routes = [
    {
        path: '/',
        name: "HomePage",
        component: HomePage,
        props: true
    },
    {
        path: '/analysis',
        name: "Analysis",
        component: Analysis,
        prors: true
    },
    {
        path: '/categories',
        name: "Categories",
        component: Categories
    },
    {
        path: '/transaction',
        name: "Transaction",
        component: Transaction,
        props: true
    },
    {
        path: '/profile',
        name: "Profile",
        component: Profile
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;