<template>
<h1>Historique de vos commandes</h1>
<div class="select-wrapper">
    <select v-model="selectedCategory">
      <option value="">Toutes les catégories</option>
      <option v-for="category in categories" :key="category">
        {{ category }}
      </option>
    </select>
    <div class="chevron-down"></div>
</div>
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
          (order) => order.etat === this.selectedCategory
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

.select-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
  margin-top: 10px;
}

select {
  padding: 8px 32px 8px 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: white;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  appearance: none;
  outline: none;
  width: 100%;
}

select:hover {
  border-color: #888;
}

select:focus {
  border-color: #0056b3;
  box-shadow: 0 0 0 2px rgba(0, 86, 179, 0.2);
}

.chevron-down {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  border-style: solid;
  border-width: 5px 5px 0 5px;
  border-color: #333 transparent transparent transparent;
  height: 0;
  width: 0;
}
</style>
