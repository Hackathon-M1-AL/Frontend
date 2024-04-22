<template>
  <div class="paiement-popup">
    <h1>Paiement</h1>
    <div v-for="element in moyenPaiement" class="card">
      <input type="radio" name="paiement" :id="element.nom">
      <h2>{{element.nom}}</h2>
      <img :src="element.image" alt="logo" class="logo" />
    </div>
  </div>

</template>
<script setup lang="ts">

const moyenPaiement = [
  {id:1, nom:"Carte bancaire", image:""},
  {id:2, nom:"Paypal", image:""},
  {id:3, nom:"Virement bancaire", image:""},
  {id:4, nom:"Chèque", image:""},
  {id:5, nom:"Espèce", image:""},
  {id:6, nom:"Autre", image:""}
]

</script>
<style scoped>
.paiement-popup{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60vw;
  margin: 0 auto;
  padding: 1em;
  border-radius: 1em;
  background-color: #f0f0f0;
  box-shadow: 0 0 1em #000000aa;
}
.card{
  align-items: center;
  margin: 1em;
  padding: 1em;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
}
</style>