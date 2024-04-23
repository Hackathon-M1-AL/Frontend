<template>
<h1>Historique de vos commandes</h1>
  <div class="catalogue-container">
    <order-card
      class="command-card"
      v-for="order in filteredOrder"
      :key="order.id"
      :order="order"
    />
  </div>
</template>

<script>
import OrderCard from "./CommandCard.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  components: {
    OrderCard,
  },
  data() {
    return {
      selectedProduct: null,
      isDetailsVisible: false,
      selectedCategory: "",
    };
  },
  created() {
    this.fetchCommandes();
  },
  computed: {
    ...mapState("commandes", ["commandes"]),
    categories() {
      // Récupère toutes les catégories distinctes de la liste de produits
      return [...new Set(this.commandes.map((order) => order.etat))];
    },
    filteredOrder() {
      // Filtre les produits en fonction de la catégorie sélectionnée
      if (!this.selectedCategory) {
        return this.commandes;
      } else {
        return this.commandes.filter(
          (order) => product.etat === this.selectedCategory
        );
      }
    },
  },
  methods: {
    ...mapActions("commandes", ["fetchCommandes"]),
  },
};
</script>

<style scoped>
.catalogue-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.command-card {
  cursor: pointer;
}
</style>
