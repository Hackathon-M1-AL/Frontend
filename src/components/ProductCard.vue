<template>
  <div class="product-card">
    <button class="add-to-cart-btn" @click="addToCart(product)">
      <img :src="addToCartIconUrl" alt="Add to cart" />
    </button>
    <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    <div class="product-info">
      <div class="product-name">{{ product.name }}</div>
      <div class="product-description">{{ product.description }}</div>
      <div class="product-price">{{ formatPrice(product.price) }}</div>
      <div class="product-category">{{ product.catalogue }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Utiliser require pour inclure l'image dans le bundle de Webpack
      //addToCartIconUrl: require("@/assets/addToBasket.svg"),
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      // Formate le prix en monnaie locale
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(price);
    },
    addToCart(product) {
      // Logique pour ajouter le produit au panier
      console.log("Ajouté au panier:", product);
    },
  },
};
</script>

<style scoped>
.product-card {
  position: relative;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
  text-align: left;
}

.product-name {
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.product-description {
  color: #666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  line-height: 1.2;
}

.product-price {
  font-weight: bold;
  font-size: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.product-category {
  font-size: 0.9em;
  background-color: #e0e0e0; /* Couleur de fond grise */
  color: #333;
  padding: 3px 10px;
  border-radius: 16px; /* Coins arrondis pour l'effet de pastille */
  display: inline-block;
  margin-bottom: 4px;
}

.add-to-cart-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart-btn:hover {
  background-color: #367c39; /* Vert foncé */
}

.add-to-cart-btn img {
  width: 20px; /* Taille de l'icône à ajuster selon tes besoins */
  height: 20px;
}
</style>
