<template>
  <div class="product-card" @click="handleClick">
    <button class="add-to-cart-btn" @click.stop="addToCart(product)">
      <icon-shopping-cart
        :style="{ color: isHovering ? 'white' : 'black' }"
        @mouseover="isHovering = true"
        @mouseleave="isHovering = false"
      ></icon-shopping-cart>
    </button>

    <img :src="product.image" :alt="product.name" class="product-image" />
    <div class="product-info">
      <div class="product-name">{{ product.nom }}</div>
      <div class="product-description">{{ product.description }}</div>
      <div class="product-price">{{ formatPrice(product.prix) }}</div>
      <div class="product-category">{{ product.catalogue }}</div>
    </div>
    <transition name="fade">
      <div class="notification" v-if="showNotification">
        L'article a été ajouté au panier.
        <div class="progress-bar"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import IconShoppingCart from "./IconShoppingCart.vue";

export default {
  components: { IconShoppingCart },
  data() {
    return {
      isHovering: false,
      showNotification: false,
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
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(price);
    },
    addToCart(product) {
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 3000);
      console.log("Ajouté au panier:", product);
    },
    handleClick() {
      this.$emit("view-details", this.product);
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
  background-color: #e0e0e0;
  color: #333;
  padding: 3px 10px;
  border-radius: 16px;
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
.add-to-cart-btn :deep(#icon-shopping-cart) {
  width: 1.5rem;
  height: 1.5rem;
}
.add-to-cart-btn:hover {
  background-color: #367c39;
}

.add-to-cart-btn img {
  width: 20px;
  height: 20px;
}

.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 1000;
}

.progress-bar {
  height: 5px;
  background-color: white;
  width: 100%;
  border-radius: 4px;
  animation: shrink 3s linear forwards;
}

@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
