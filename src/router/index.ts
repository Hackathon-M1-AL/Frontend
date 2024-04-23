// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthPage from "../components/AuthPage.vue";
import ProductCard from "../components/ProductCard.vue";
import CatalogueView from "../components/CatalogueView.vue";
import CommandView from "../components/CommandView.vue";
import PanierView from "../components/PanierView.vue";
import CatalogueCreator from "../components/CatalogueCreator.vue";
import store from "../composition/utilisateurs/store.ts";

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
    meta: { requiresAuth: true },
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
    meta: { requiresAuth: true },
  },
  {
    path: "/panier",
    name: "Panier",
    component: PanierView,
    meta: { requiresAuth: true },
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
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.isAuthenticated
  ) {
    next({ name: "Auth" });
  } else {
    next();
  }
});

export default router;
