<template>
  <div class="catalogue-container">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Produit 1",
          description: "Description du produit 1",
          price: 19.99,
          catalogue: "Électronique",
          imageUrl: "path/to/image1.jpg",
        },
        {
          id: 2,
          name: "Produit 2",
          description: "Description du produit 2",
          price: 29.99,
          catalogue: "Livres",
          imageUrl: "path/to/image2.jpg",
        },
        // Ajoute plus de produits selon tes besoins
      ],
    };
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
</style>
