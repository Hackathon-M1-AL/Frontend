import { Commit, GetterTree, MutationTree, ActionTree } from 'vuex';
import { Produit } from './index';

interface State {
  produits: Produit[];
}

const mutations: MutationTree<State> = {
  SET_PRODUIT_LIST(state: State, produits: Produit[]) {
    state.produits = produits;
  },
};

const actions: ActionTree<State, any> = {
  fetchProduits({ commit }: { commit: Commit }) {
    const produits: Produit[] = [
      {
          id: 1,
          prix: 25.99,
          nom: "Tasse à café",
          description: "Une tasse en céramique blanche, parfaite pour vos boissons chaudes. Capacité de 300ml.",
          image: "url_to_coffee_cup_image.jpg",
          catalogue: "Vaisselle"
      },
      {
          id: 2,
          prix: 45.00,
          nom: "Housse de coussin",
          description: "Housse de coussin en lin, couleur bleu marine, 50x50 cm, idéale pour ajouter une touche de couleur à votre salon.",
          image: "url_to_cushion_cover_image.jpg",
          catalogue: "Décoration"
      },
      { 
          id: 3,
          prix: 99.95,
          nom: "Lampe de bureau",
          description: "Lampe de bureau LED avec bras articulé, finition en acier brossé. Éclairage ajustable pour un confort maximal.",
          image: "url_to_desk_lamp_image.jpg",
          catalogue: "Mobilier"
      },
      {
          id: 4,
          prix: 15.75,
          nom: "Bloc-notes",
          description: "Bloc-notes A5 à couverture rigide, 120 pages lignées. Parfait pour vos notes quotidiennes ou comme journal.",
          image: "url_to_notebook_image.jpg",
          catalogue: "Fournitures de bureau"
      },
      {
          id: 5,
          prix: 299.99,
          nom: "Smartphone XG12",
          description: "Smartphone dernière génération avec écran 6 pouces, 128 GB de stockage. Caméra haute résolution et batterie longue durée.",
          image: "url_to_smartphone_image.jpg",
          catalogue: "Électronique"
      },
      {
          id: 6,
          prix: 120.50,
          nom: "Robe d'été",
          description: "Robe d'été légère en coton, motifs floraux, disponible en plusieurs tailles.",
          image: "url_to_summer_dress_image.jpg",
          catalogue: "Vêtements"
      },
      {
          id: 7,
          prix: 35.00,
          nom: "Kit de jardinage",
          description: "Kit complet comprenant une pelle, une fourche et des gants, idéal pour les jardiniers amateurs.",
          image: "url_to_gardening_kit_image.jpg",
          catalogue: "Jardin"
      },
    ];
    commit('SET_PRODUIT_LIST', produits);
  }
};

const getters: GetterTree<State, any> = {
  produitsJardin(state: State): Produit[] {
    return state.produits.filter(produit => produit.catalogue === 'Jardin');
  },
};

export default {
  namespaced: true,
  state: {
    produits: []
  },
  mutations,
  actions,
  getters
};
