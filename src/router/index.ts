// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AuthPage from "../components/AuthPage.vue";
import HelloWorld from "../components/HelloWorld.vue";
import ProductCard from "../components/ProductCard.vue";
import CatalogueView from "../components/CatalogueView.vue";

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
    path: "/helloworld",
    name: "HelloWorld",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
