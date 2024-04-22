<template>
  <div>
    <input type="text" v-model="catalogueName" placeholder="Nom du catalogue" />
    <button @click="createCatalogue">Créer Catalogue</button>

    <product-creator
      v-for="(product, index) in products"
      :key="index"
      :product="product"
      @update-product="updateProduct(index, $event)"
      @remove-product="removeProduct(index)"
    >
    </product-creator>

    <button @click="addProduct">Ajouter Produit</button>
    <button @click="saveCatalogue">Sauvegarder Catalogue</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ProductCreator from "./ProductCreator.vue";

export default {
  components: {
    ProductCreator,
  },
  data() {
    return {
      catalogueName: "",
      products: [],
    };
  },
  methods: {
    ...mapActions([
      "createCatalogue", // Ceci mappe cette action à l'action Vuex 'createCatalogue'
    ]),
    addProduct() {
      this.products.push({
        name: "",
        description: "",
        price: 0,
        quantityAvailable: 0,
      });
    },
    updateProduct(index, updatedProduct) {
      this.products.splice(index, 1, updatedProduct);
    },
    removeProduct(index) {
      this.products.splice(index, 1);
    },
    saveCatalogue() {
      // Construisez l'objet de données du catalogue
      const catalogueData = {
        name: this.catalogueName,
        products: this.products,
      };

      // Dispatchez l'action Vuex pour sauvegarder le catalogue
      this.createCatalogue(catalogueData)
        .then((response) => {
          // Gérez la réponse du serveur
          console.log(response.data);
          // Réinitialisez le formulaire ou affichez un message de succès
        })
        .catch((error) => {
          // Gérez les erreurs ici si nécessaire
          console.error("There was an error saving the catalogue:", error);
        });
    },
  },
};
</script>

<style scoped>
div {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
input[type="text"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #5cb85c;
  color: white;
  font-size: 16px;
}
button:hover {
  background-color: #4cae4c;
}
</style>
