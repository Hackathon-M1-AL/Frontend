import {Produit} from "../produits";
import { Commit } from 'vuex';
import {ProduitPanier} from "./index";

interface State {
  panier: ProduitPanier[];
}

const state = {
  panier: []
};

const mutations = {
  AJOUT_PANIER(state: State, produit: ProduitPanier) {
      state.panier.push(produit);
  },
  RETIRER_PANIER(state: State, produit: Produit) {
    let removeCount: number = 0;

    state.panier = state.panier.filter((item: ProduitPanier) => {
      if (produit.id === item.id) {
        return removeCount++ !== 0
      } else {
        return true;
      }
    });
  },
  VIDER_PANIER(state: State) {
    state.panier = [];
  },
  MODIFY_PANIER_COUNT(state: State, payload: { produit: ProduitPanier, count: number }) {
    payload.produit.count += payload.count;
  },
};

const actions = {
  add({ commit }: {commit: Commit}, payload: {produit: Produit, count: number}) {
    const target = getProduitPanier(payload.produit)

    if (target) {
      commit('MODIFY_PANIER_COUNT', {produit: target, count: payload.count});
    } else {
      commit('AJOUT_PANIER', {...payload.produit, count: payload.count});
    }
  },
  remove({ commit }: {commit: Commit}, produit: Produit, count: number) {
    const target = getProduitPanier(produit);

    if (target  && target.count > count) {
      commit('MODIFY_PANIER_COUNT', {produit: produit, count: count});
    } else {
      commit('RETIRER_PANIER', produit);
    }
  },
  clear({ commit }: {commit: Commit}) {
    commit('VIDER_PANIER');
  }
};

const getters = {
  panier(state: State): Produit[] {
      return state.panier;
  },
  total(state: State): number {
      return state.panier.reduce((total, val) => total + val.prix, 0 );
  },
};

function getProduitPanier(produit: Produit): ProduitPanier | undefined {
  return state.panier.find((produitPanier: ProduitPanier) => produit.id === produitPanier.id)
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};