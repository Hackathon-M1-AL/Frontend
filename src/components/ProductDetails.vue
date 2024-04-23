<template>
  <transition name="fade">
    <div class="modal" v-if="visible">
      <div class="modal-content">
        <div class="modal-left">
          <img :src="product.image" :alt="product.nom" class="product-image" />
        </div>
        <div class="modal-right">
          <div class="title-bar">
            <h2 class="product-title">{{ product.nom }}</h2>
            <span class="close" @click="close">&times;</span>
          </div>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">{{ formatPrice(product.prix) }}</p>
          <div class="quantity-section">
            <label for="quantity" class="quantity-label">Quantité</label>
            <div class="quantity-stepper">
              <button class="quantity-change" @click="decrement">-</button>
              <input
                type="number"
                id="quantity"
                v-model.number="quantity"
                min="1"
                class="quantity-input"
              />
              <button class="quantity-change" @click="increment">+</button>
            </div>
          </div>
          <div class="flex-container">
            <div class="button-section">
              <button class="buy-now-btn">Acheter maintenant</button>
              <button class="add-to-cart-btn">
                <i class="fas fa-shopping-cart"></i> Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    formatPrice(price) {
      return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
      }).format(price);
    },
    increment() {
      this.quantity += 1;
    },
    decrement() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.modal-content {
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  width: 80%;
  max-height: 80%;
}

.modal-left,
.modal-right {
  flex: 1;
}

.modal-left {
  padding: 20px;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.modal-right {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.product-title {
  font-size: 26px;
  font-weight: bold;
  margin: 10px 0;
  flex-grow: 1;
  text-align: left;
}

.close {
  font-size: 36px;
  padding: 10px;
  cursor: pointer;
  line-height: 1;
  display: block;
}

.product-description {
  color: #666;
  margin-bottom: 20px;
  text-align: left;
  line-height: 1.3;
}

.product-price {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

.quantity-section {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.quantity-label {
  margin-right: 10px;
}

.quantity-stepper {
  display: flex;
  align-items: center;
}

.quantity-change {
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  padding: 5px 10px;
  cursor: pointer;
}

.quantity-input {
  width: 50px;
  text-align: center;
  margin: 0 5px;
}

.flex-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
}

.button-section {
  display: flex;
  gap: 20px;
  width: 100%;
}

.buy-now-btn,
.add-to-cart-btn {
  flex-grow: 1;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
}

.buy-now-btn {
  background-color: #ccc;
  color: #666;
}

.add-to-cart-btn {
  background-color: #4caf50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-to-cart-btn i {
  margin-right: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
