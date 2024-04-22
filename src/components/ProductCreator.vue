<template>
  <div>
    <input type="text" v-model="product.name" placeholder="Nom du produit" />
    <textarea
      v-model="product.description"
      placeholder="Description du produit"
    ></textarea>
    <input type="number" v-model.number="product.price" placeholder="Prix" />
    <input
      type="number"
      v-model.number="product.quantityAvailable"
      placeholder="Quantité disponible"
    />
    <button @click="updateProduct">Mettre à jour Produit</button>
    <button @click="removeProduct">Supprimer Produit</button>
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
    updateProduct() {
      this.$emit("update-product", this.product);
    },
    removeProduct() {
      this.$emit("remove-product");
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 15px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
}
input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  height: 100px;
}
button {
  padding: 10px 15px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.update-product {
  background-color: #0275d8;
  color: white;
}
.remove-product {
  background-color: #d9534f;
  color: white;
}
.update-product:hover {
  background-color: #025aa5;
}
.remove-product:hover {
  background-color: #c9302c;
}
</style>
