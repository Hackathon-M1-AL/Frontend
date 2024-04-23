<template>
  <div class="auth-container">
    <form @submit.prevent="handleSubmit">
      <h2>{{ isLoginMode ? "Connexion" : "Inscription" }}</h2>
      <input type="text" v-model="email" placeholder="username" required />
      <input
        type="password"
        v-model="password"
        placeholder="Mot de passe"
        required
      />
      <input
        v-if="!isLoginMode"
        type="email"
        v-model="username"
        placeholder="email"
        required
      />
      <button type="submit">
        {{ isLoginMode ? "Connexion" : "S'inscrire" }}
      </button>
      <p class="switch-mode" @click="toggleMode">
        {{
          isLoginMode
            ? "Pas de compte ? Inscrivez-vous"
            : "Vous avez déjà un compte ? Connectez-vous"
        }}
      </p>
      <div
        v-if="confirmationMessage"
        :class="[messageType === 'error' ? 'error-message' : 'success-message']"
      >
        {{ confirmationMessage }}
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import router from "../router";

const store = useStore();
const email = ref("");
const password = ref("");
const username = ref("");
const role = ref(["ROLE_ADMIN"]);
const isLoginMode = ref(true);
const confirmationMessage = ref(""); // Ajout pour le message de confirmation
const messageType = ref(""); // Ajout pour gérer le type de message

function toggleMode() {
  isLoginMode.value = !isLoginMode.value;
  confirmationMessage.value = ""; // Réinitialise le message lors du changement de mode
  messageType.value = "";
}

async function handleSubmit() {
  try {
    const authData = { email: email.value, password: password.value };
    const registerData = {
      username: email.value,
      password: password.value,
      email: username.value,
      role: role.value,
    };
    if (isLoginMode.value) {
      await store.dispatch("utilisateurs/login", authData);
    } else {
      await store.dispatch("utilisateurs/register", registerData);
      confirmationMessage.value =
        "Inscription réussie. Vous pouvez maintenant vous connecter.";
      messageType.value = "success";
    }
  } catch (error) {
    console.error("Error:", error);
    confirmationMessage.value = isLoginMode.value
      ? "Erreur lors de la connexion. Veuillez réessayer."
      : "Erreur lors de l’inscription. Veuillez réessayer.";
    messageType.value = "error";
  } finally {
    if (store.getters["utilisateurs/isAuthenticated"]) {
      router.push("/catalogue"); // Remplacez '/dashboard' par le chemin où vous souhaitez rediriger l'utilisateur
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

.switch-mode {
  color: #777;
  cursor: pointer;
}

.switch-mode:hover {
  text-decoration: underline;
}

.error-message {
  color: #ea2d2d;
  font-size: small;
}

.success-message {
  color: #4caf50; /* Couleur de succès */
  font-size: small;
  text-align: center;
  margin-top: 10px;
}

.error-message {
  color: #ea2d2d; /* Couleur d'erreur */
  font-size: small;
  text-align: center;
  margin-top: 10px;
}
</style>
