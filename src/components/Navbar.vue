<template>
  <nav class="navbar">
    <div class="navbar-left">
      <!-- Logo -->
      <img class="logo" src="/src/assets/logo.png" alt="Logo" />
    </div>
    <ul class="navbar-center">
      <!-- Liens des pages -->
      <li><router-link to="/catalogue">Accueil</router-link></li>
      <li><router-link to="/">Panier</router-link></li>
      <li><router-link to="/commande">Commande</router-link></li>
    </ul>
    <div class="navbar-right">
      <router-link class="profile" to="/auth">Mon Profil</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 20px;
  background-color: hsl(0, 0%, 100%);
  color: rgb(0, 0, 0);
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
