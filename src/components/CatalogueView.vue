<template>
  <div class="catalogue-container">
    <product-card
      v-for="product in products"
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

export default {
  components: {
    ProductCard,
    ProductDetails,
  },
  data() {
    return {
      selectedProduct: null,
      isDetailsVisible: false,
      products: [
        {
          id: 1,
          name: "Produit 1",
          description:
            "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont appa",
          price: 19.99,
          catalogue: "Électronique",
          imageUrl: "src/assets/image.jpg",
        },
        {
          id: 2,
          name: "Produit 2",
          description:
            " du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne co",
          price: 29.99,
          catalogue: "Livres",
          imageUrl: "src/assets/image.jpg",
        },
        // Ajoute plus de produits selon tes besoins
      ],
    };
  },
  methods: {
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
</style>
