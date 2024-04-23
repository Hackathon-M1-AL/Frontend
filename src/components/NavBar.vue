<template>
  <nav class="navbar" v-if="!isAuthRoute">
    <div class="navbar-left">
      <!-- Logo -->
      <img class="logo" src="/src/assets/logo.png" alt="Logo" />
    </div>
    <ul class="navbar-center">
      <!-- Liens des pages -->
      <li><router-link :to="{name: 'Catalogue'}">Accueil</router-link></li>
      <li><router-link :to="{name: isLog ? 'Panier' : 'Auth'}">Panier</router-link></li>
      <li><router-link :to="{name: isLog ? 'Commande' : 'Auth'}">Commande</router-link></li>
      <li><router-link to="/create">Config</router-link></li>
    </ul>

    <div class="navbar-right">
      <router-link class="profile" to="/auth">{{ isLog ? 'Déconnecter' : 'Se connecter' }}</router-link>
    </div>
  </nav>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import { useRoute } from "vue-router";

const store = useStore();
const route = useRoute();

const isLog = computed(() => {
  return store.getters["utilisateurs/isAuthenticated"];
});
const isAuthRoute = computed(() => {
  return route.path.includes("/auth");
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 20px;
  background-color: hsl(0, 0%, 100%);
  color: rgb(0, 0, 0);

  border-bottom: #b2b2b2 solid 1px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  width: 40px;
  margin-right: 10px;
}

.navbar-center {
  list-style: none;
  display: flex;
  gap: 15px;
}

.navbar-center li {
  padding: 5px;
}

.navbar-center li a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  transition: color 0.3s;
  padding: 5px;
}

.navbar-center li a:hover {
  color: #002aff;
  background-color: #dbf7ff;
  padding: 5px;
  border-radius: 5px;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.profile {
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.3s;
}

.profile:hover {
  color: #000000;
}
</style>
