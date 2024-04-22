// src/router/index.ts
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import AuthPage from "../components/AuthPage.vue";
import ProductCard from "../components/ProductCard.vue";
import CatalogueView from "../components/CatalogueView.vue";
import PaimentPopUp from "../composition/paiements/PaimentPopUp.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/auth",
        name: "Auth",
        component: AuthPage,
    },
    {
        path: "/card",
        name: "Card",
        component: ProductCard,
    },
    {
        path: "/catalogue",
        name: "Catalogue",
        component: CatalogueView,
    },
    {
        path: "/paiement",
        name: "paiement",
        component: PaimentPopUp,
    },
    {
        path: '/:pathMatch(.*)*',  // Catch-all route
        name: 'Auth',
        component: AuthPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
