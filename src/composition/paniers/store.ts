import {Produit} from "../produits";
import { Commit } from 'vuex';

interface State {
  panier: Produit[];
}

const state = {
  panier: []
};

const mutations = {
  AJOUT_PANIER(state: State, produit: Produit) {
    state.panier.push(produit);
  },
  RETIRER_PANIER(state: State, produit: Produit) {
    let removeCount: number = 0;

    state.panier = state.panier.filter((item: Produit) => {
      if (produit.id === item.id) {
        return removeCount++ !== 0
      } else {
        return true;
      }
    });
  },
  VIDER_PANIER(state: State) {
    state.panier = [];
  }
};

const actions = {
  add({ commit }: {commit: Commit}, produit: Produit) {
    console.log(produit);
    commit('AJOUT_PANIER', produit);
  },
  remove({ commit }: {commit: Commit}, produit: Produit) {
    commit('RETIRER_PANIER', produit);
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
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};