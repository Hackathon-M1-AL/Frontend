<template>
  <div class="auth-container">
    <form @submit.prevent="handleSubmit">
      <h2>{{ isLoginMode ? "Connexion" : "Inscription" }}</h2>
      <input type="text" v-model="email" placeholder="Email" required/>
      <input type="password" v-model="password" placeholder="Mot de passe" required/>
      <button type="submit">{{ isLoginMode ? "Connexion" : "S'inscrire" }}</button>
      <p class="switch-mode" @click="toggleMode">
        {{ isLoginMode ? "Pas de compte ? Inscrivez-vous" : "Vous avez déjà un compte ? Connectez-vous" }}
      </p>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import router from "../router";

const store = useStore();
const email = ref('');
const password = ref('');
const isLoginMode = ref(true);;

const isAuthenticated = computed(() => store.getters['auth/isAuthenticated']);

function toggleMode() {
  isLoginMode.value = !isLoginMode.value;
}

async function handleSubmit() {
  try {
    const authData = {email: email.value, password: password.value};
    if (isLoginMode.value) {
      await store.dispatch('utilisateurs/login', authData);
    } else {
      await store.dispatch('utilisateurs/register', authData);
    }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (store.getters['utilisateurs/isAuthenticated']) {
      router.push('/catalogue'); // Remplacez '/dashboard' par le chemin où vous souhaitez rediriger l'utilisateur
    }
  }
}
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 14px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

.switch-mode {
  color: #777;
  cursor: pointer;
}

.switch-mode:hover {
  text-decoration: underline;
}
</style>
