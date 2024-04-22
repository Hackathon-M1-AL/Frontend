<template>
  <select v-model="selectedCategory">
    <option value="">Toutes les catégories</option>
    <option v-for="category in categories" :key="category">
      {{ category }}
    </option>
  </select>
  <div class="catalogue-container">
    <product-card
      class="product-card"
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
      @view-details="showDetails"
    />
    <product-details
      :product="selectedProduct"
      :visible="isDetailsVisible"
      @close="isDetailsVisible = false"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import ProductDetails from "./ProductDetails.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
    ProductDetails,
  },
  data() {
    return {
      selectedProduct: null,
      isDetailsVisible: false,
      selectedCategory: "",
    };
  },
  created() {
    this.fetchProduits();
  },
  computed: {
    ...mapState("produits", ["produits"]),
    categories() {
      // Récupère toutes les catégories distinctes de la liste de produits
      return [...new Set(this.produits.map((product) => product.catalogue))];
    },
    filteredProducts() {
      // Filtre les produits en fonction de la catégorie sélectionnée
      if (!this.selectedCategory) {
        return this.produits;
      } else {
        return this.produits.filter(
          (product) => product.catalogue === this.selectedCategory
        );
      }
    },
  },
  methods: {
    ...mapActions("produits", ["fetchProduits"]),
    showDetails(product) {
      this.selectedProduct = product;
      this.isDetailsVisible = true;
    },
  },
};
</script>

<style scoped>
.catalogue-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-card {
  cursor: pointer;
}
</style>
