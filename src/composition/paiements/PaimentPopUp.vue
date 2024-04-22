<template>
  <div class="paiement-popup" @update:model-value="$emit('close')">
    <h1>Paiement</h1>
    <div class="cards">
      <div v-for="element in moyenPaiementTest" class="card" @click="choixPaiement = element.nom">
        <img :src="element.image" alt="logo" class="logo"/>
        <p>{{ element.nom }}</p>
      </div>
    </div>
    <span class="line"></span>
    <span>vous avez choisie {{ choixPaiement }}</span>
  </div>

</template>
<script setup lang="ts">

import {ref} from "vue";

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const choixPaiement = ref('')


const props = defineProps({
  // moyenPaiement: MoyenPaiement[]
})

const moyenPaiementTest = [
  {id: 1, nom: "Carte bancaire", image: ""},
  {id: 2, nom: "Paypal", image: ""},
  {id: 3, nom: "Virement bancaire", image: ""},
  {id: 4, nom: "Chèque", image: ""},
  {id: 5, nom: "Espèce", image: ""},
  {id: 6, nom: "Autre", image: ""}
]

</script>
<style scoped>
.paiement-popup {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  margin: 0 auto;
  padding: 1em;
  border-radius: 1em;
  background-color: #f0f0f0;
  box-shadow: 0 0 1em #000000aa;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.line {
  width: 100%;
  height: 1px;
  background-color: #000000;
  opacity: 0.6;
}

.card {
  align-items: center;
  margin: 1em;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 20%;
}
</style>