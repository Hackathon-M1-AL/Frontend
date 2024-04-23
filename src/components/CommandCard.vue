<template>
    <div class="order-card" @click="handleClick">
      <img :src="order.image" :alt="order.name" class="order-image" />
      <div class="order-info">
        <div class="order">Acheté le : {{ order.purchaseDate }} </div>
        <div class="order-name">{{ order.nom }}</div>
        <div class="order-description">{{ order.description }}</div>
        <div class="order-price">Total : {{ formatPrice(order.prix) }}</div>
        <div class="order-category">{{order.etat}}</div>
      </div>
    </div>
  </template>
  
  <script>
  import IconShoppingCart from "./IconShoppingCart.vue";
  
  export default {
    components: {IconShoppingCart},
    data() {
      return {
        // Utiliser require pour inclure l'image dans le bundle de Webpack
        //addToCartIconUrl: require("@/assets/addToBasket.svg"),
      };
    },
    props: {
      order: {
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
    },
  };
  </script>
  
  <style scoped>
  .order-card {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;

    display: flex;
  }
  
  .order-card:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .order-image {
    min-width: 300px;
    max-width: 300px;
    object-fit: cover;
    height: 250px;
  }
  
  .order-info {
    padding: 15px;
    text-align: left;
  }
  
  .order-name {
    font-size: 1.4em;
    font-weight: bold;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .order-description {
    color: #666;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    line-height: 1.2;
  }
  
  .order-price {
    font-weight: bold;
    font-size: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  
  .order-category {
    font-size: 0.9em;
    background-color: #e0e0e0; /* Couleur de fond grise */
    color: #333;
    padding: 3px 10px;
    border-radius: 16px; /* Coins arrondis pour l'effet de pastille */
    display: inline-block;
    margin-bottom: 4px;
  }
  </style>
  