<template>
  <div class="auth-container">
    <form @submit.prevent="handleSubmit">
      <h2>{{ isLoginMode ? "Connexion" : "Inscription" }}</h2>

      <!-- Inputs pour email et mot de passe -->
      <input type="email" v-model="email" placeholder="Email" required autocomplete="email" />
      <input
        type="password"
        v-model="password"
        placeholder="Mot de passe"
        required autocomplete="password"
      />

      <!-- Bouton pour soumettre le formulaire -->
      <button type="submit">
        {{ isLoginMode ? "Connexion" : "S'inscrire" }}
      </button>

      <!-- Lien pour basculer entre Inscription et Connexion -->
      <p class="switch-mode" @click="toggleMode">
        {{
          isLoginMode
            ? "Pas de compte ? Inscrivez-vous"
            : "Vous avez déjà un compte ? Connectez-vous"
        }}
      </p>

      <div class="error-message" v-if="!!error"> {{ error }} </div>
    </form>
  </div>
</template>

<script>
import {computed, ref, onMounted} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const isLoginMode = ref(true);
    const error = ref("")

    const store = useStore();
    const router = useRouter();

    function toggleMode() {
      isLoginMode.value = !isLoginMode.value;
    }

    function handleSubmit() {
      const storeString = isLoginMode.value ? 'utilisateurs/login' : 'utilisateurs/signup'
      console.log((isLoginMode.value ? "Connexion avec" : "Inscription avec"), email.value, password.value);
      store.dispatch(storeString, {email: email.value, password: password.value}).then((res) => {
        if (res) {
          router.push({name: 'Catalogue'})
        } else {
          error.value = "Veuillez vérifier vos identifiant";
        }
      }).catch((err) => {
        console.error(err)
        error.value = "Une erreur est survenue";
      })
    }


    const isLog = computed(() => {
      return store.getters["utilisateurs/isLog"];
    });

    onMounted(() => {
      if (isLog.value) {
        store.dispatch('utilisateurs/logout');
        router.push({name: 'Catalogue'});
      }
    })

    return { email, password, isLoginMode, error, toggleMode, handleSubmit };
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
</style>
