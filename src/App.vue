<template>
  <div class="global-app">
    <NavBar />

    <div class="view-app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.global-app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.view-app {
  flex-grow: 1;
  margin: 0 2rem;
}


</style>
