import {Produit} from "../produits";
import {ActionTree, GetterTree, MutationTree} from 'vuex';
import {ProduitPanier} from "./index";

interface State {
  panier: ProduitPanier[];
}

const state = {
  panier: []
};

const mutations: MutationTree<State>  = {
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
    state.panier;
    payload.produit.count += payload.count;
  },
};

const actions: ActionTree<State, any> = {
  add({ commit }, payload: {produit: Produit, count: number}) {
    const target = getProduitPanier(payload.produit)

    if (target) {
      commit('MODIFY_PANIER_COUNT', {produit: target, count: payload.count});
    } else {
      commit('AJOUT_PANIER', {...payload.produit, count: payload.count});
    }
  },
  remove({ commit }, payload: { produit: Produit, count: number }) {
    const target = getProduitPanier(payload.produit);

    if (target  && target.count > payload.count) {
      commit('MODIFY_PANIER_COUNT', {produit: target, count: payload.count});
    } else {
      commit('RETIRER_PANIER', payload.produit);
    }
  },
  clear({ commit }) {
    commit('VIDER_PANIER');
  }
};

const getters: GetterTree<State, any> = {
  panier(state: State): Produit[] {
      return state.panier;
  },
  total(state: State): number {
      return state.panier.reduce((total, val) => total + (val.prix * val.count), 0 );
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