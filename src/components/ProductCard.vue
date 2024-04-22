<template>
  <div class="product-card">
    <img :src="product.imageUrl" :alt="product.name" class="product-image" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <div class="product-category">{{ product.catalogue }}</div>
      <div class="product-price">{{ formatPrice(product.price) }}</div>
    </div>
  </div>
</template>

<script>
export default {
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
  },
};
</script>

<style scoped>
.product-card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
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
  text-align: center;
}

.product-category {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 5px;
}

.product-price {
  color: #4caf50;
  font-weight: bold;
  margin-top: 10px;
}
</style>
