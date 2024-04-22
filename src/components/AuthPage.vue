<template>
  <div class="auth-container">
    <form @submit.prevent="handleSubmit">
      <h2>{{ isLoginMode ? "Connexion" : "Inscription" }}</h2>

      <!-- Inputs pour email et mot de passe -->
      <input type="email" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Mot de passe"
        required
      />

      <!-- Bouton pour soumettre le formulaire -->
      <button type="submit">
        {{ isLoginMode ? "Connexion" : "Inscrire" }}
      </button>

      <!-- Lien pour basculer entre Inscription et Connexion -->
      <p @click="toggleMode">
        {{
          isLoginMode
            ? "Pas de compte ? Inscrivez-vous"
            : "Avez-vous déjà un compte ? Connectez-vous"
        }}
      </p>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const isLoginMode = ref(true);

    function toggleMode() {
      isLoginMode.value = !isLoginMode.value;
    }

    function handleSubmit() {
      if (isLoginMode.value) {
        // Logique de connexion
        console.log("Connexion avec", email.value, password.value);
      } else {
        // Logique d'inscription
        console.log("Inscription avec", email.value, password.value);
      }
    }

    return { email, password, isLoginMode, toggleMode, handleSubmit };
  },
};
</script>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input[type="email"],
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

p {
  color: #777;
  cursor: pointer;
}
</style>
