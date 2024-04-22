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
        nom: "Produit 1",
        description:
          "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont appa",
        prix: 19.99,
        catalogue: "Électronique",
        image: "src/assets/image.jpg",
      },
      {
        id: 2,
        nom: "Produit 2",
        description:
          " du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne co",
        prix: 29.99,
        catalogue: "Livres",
        image: "src/assets/fruit.jpg",
      },
      {
        id: 3,
        nom: "Produit 3",
        description:
          "Ce produit révolutionnaire combine technologie de pointe et design élégant pour offrir une expérience utilisateur inégalée. Doté de fonctionnalités innovantes et d'une interface intuitive, il est parfait pour les professionnels et les amateurs.",
        prix: 49.99,
        catalogue: "Technologie",
        image: "src/assets/service.jpg",
      },
      {
        id: 4,
        nom: "Produit 4",
        description:
          "Plongez-vous dans l'aventure avec ce livre captivant qui vous emmène dans un voyage à travers des mondes imaginaires. Avec des personnages attachants et un scénario palpitant, ce livre est un incontournable pour tous les amateurs de fiction.",
        prix: 14.99,
        catalogue: "Livres",
        image: "src/assets/1.jpg",
      },
      {
        id: 5,
        nom: "Produit 5",
        description:
          "Soyez prêt à repousser vos limites avec cet équipement de fitness de haute qualité. Conçu pour vous aider à atteindre vos objectifs de remise en forme, il offre confort, durabilité et performance supérieure, que vous soyez débutant ou athlète chevronné.",
        prix: 79.99,
        catalogue: "Fitness",
        image: "src/assets/2.jpg",
      },
      {
        id: 6,
        nom: "Produit 6",
        description:
          "Transformez votre espace de vie avec ce meuble élégant et fonctionnel. Fabriqué à partir de matériaux de haute qualité, il offre un design moderne et des fonctionnalités pratiques pour répondre à tous vos besoins de rangement.",
        prix: 149.99,
        catalogue: "Mobilier",
        image: "src/assets/3.jpeg",
      },
      {
        id: 7,
        nom: "Produit 7",
        description:
          "Découvrez de nouveaux horizons avec cette caméra haute performance. Capturez des moments inoubliables avec une clarté exceptionnelle et une précision remarquable. Que ce soit pour des aventures en plein air ou des moments précieux en famille, cette caméra est votre compagnon idéal.",
        prix: 199.99,
        catalogue: "Photographie",
        image: "src/assets/4.jpg",
      },
      {
        id: 8,
        nom: "Produit 8",
        description:
          "Offrez-vous une expérience gastronomique inégalée avec cet ensemble d'ustensiles de cuisine de qualité professionnelle. Fabriqués avec des matériaux durables et innovants, ces ustensiles vous aideront à créer des chefs-d'œuvre culinaires à chaque repas.",
        prix: 79.99,
        catalogue: "Cuisine",
        image: "src/assets/image.jpg",
      },
      {
        id: 9,
        nom: "Produit 9",
        description:
          "Apportez une touche de style à votre garde-robe avec cette collection de vêtements tendance. Fabriqués à partir de tissus de qualité supérieure et conçus avec soin, ces vêtements vous assurent confort et élégance, quel que soit l'occasion.",
        prix: 39.99,
        catalogue: "Mode",
        image: "src/assets/image.jpg",
      },
      {
        id: 10,
        nom: "Produit 10",
        description:
          "Transformez votre routine beauté avec ces produits de soins de la peau de luxe. Formulés avec des ingrédients naturels et des technologies innovantes, ils offrent des résultats visibles et durables pour une peau radieuse et éclatante de santé.",
        prix: 59.99,
        catalogue: "Beauté",
        image: "src/assets/image.jpg",
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
