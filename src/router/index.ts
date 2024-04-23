// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthPage from "../components/AuthPage.vue";
import ProductCard from "../components/ProductCard.vue";
import CatalogueView from "../components/CatalogueView.vue";
import CatalogueCreator from "../components/CatalogueCreator.vue";
import PaimentPopUp from "../composition/paiements/PaimentPopUp.vue";
import CommandView from "../components/CommandView.vue";

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
    path: "/commande",
    name: "Commande",
    component: CommandView,
  },
  {
    path: "/:pathMatch(.*)*", // Catch-all route
    name: "Auth",
    component: AuthPage,
  },
  {
    path: "/create",
    name: "Create",
    component: CatalogueCreator,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
