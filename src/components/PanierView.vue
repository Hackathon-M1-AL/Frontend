<template>
  <div class="panier-view">
    <div class="head-panier">
      <div class="bold">
        {{ Math.round((myPanier?.reduce((total, val) => total += val.count, 0) / 100) * 100) }} élément(s)
      </div>

      <div class="bold">Total: {{ total }}€</div>
    </div>

    <div class="panier-list">
      <div v-for="(element, i) in myPanier" :key="i">
        <div class="card-panier">
          <div class="body-card" style="position: relative">
            <img
              :src="element.image"
              alt="les alt ne servent à rien dans ce projet"
              class="product-image"
            />

            <div style="padding: 1rem 1rem 0 2rem">
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  padding-bottom: 2rem;
                "
              >
                <div class="bold">{{ element.nom }} ({{ element.count }})</div>

                <div class="bold">{{ element.prix }}€</div>
              </div>

              <div>
                {{ element.description }}
              </div>
            </div>

            <div class="supp-btn" @click.self.stop="remove(element)">-</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const myPanier = computed(() => {
  return store.getters["paniers/panier"];
});

const total = computed(() => {
  return store.getters["paniers/total"];
});

function remove(product) {
  store.dispatch("paniers/remove", {produit: product, count: 99});
}

</script>

<style scoped>

.body-card {
  display: flex;
}

.card-panier {
  border: #888888 1px solid;
  border-radius: 20px;
  height: 15rem;
  width: 50rem;
}

.panier-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.product-image {
  width: 15rem;
  height: 15rem;
  border-radius: 20px 0 0 20px;
  object-fit: cover;
}

.supp-btn {
  position: absolute;
  top: -0.75rem;
  right: 1rem;
  color: white;
  background-color: red;
  border-radius: 100%;
  width: 1.2rem;
  height: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: 700;
  cursor: pointer;
}

.head-panier {
  display: flex;
  justify-content: space-between;
  border-bottom: #1a1a1a solid 1px;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
}

.bold {
  font-weight: 500;
  font-size: large;
}
</style>
