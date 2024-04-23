import { Commit, GetterTree, MutationTree, ActionTree } from 'vuex';
import { Commande } from './index';

interface State {
  commandes: Commande[];
}

const mutations: MutationTree<State> = {
  SET_COMMANDE_LIST(state: State, commandes: Commande[]) {
    state.commandes = commandes;
  },
};

const actions: ActionTree<State, any> = {
  fetchCommandes({ commit }: { commit: Commit }) {
    const commandes: Commande[] = [
      {
        id: 1,
        nom: "Commande 578653",
        description:
          "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont appa",
        prix: 19.99,
        etat: "En cours",
        image: "src/assets/image.jpg",
        purchaseDate: "03/05/2024",
      },
      {
        id: 2,
        nom: "Commande 851648",
        description:
          " du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne co",
        prix: 29.99,
        etat: "Livré",
        image: "src/assets/fruit.jpg",
        purchaseDate: "15/07/2024",
      },
      {
        id: 3,
        nom: "Commande 348511",
        description:
          "Ce produit révolutionnaire combine technologie de pointe et design élégant pour offrir une expérience utilisateur inégalée. Doté de fonctionnalités innovantes et d'une interface intuitive, il est parfait pour les professionnels et les amateurs.",
        prix: 49.99,
        etat: "Livré",
        image: "src/assets/service.jpg",
        purchaseDate: "22/09/2024",
      },
      {
        id: 4,
        nom: "Commande 657468",
        description:
          "Plongez-vous dans l'aventure avec ce livre captivant qui vous emmène dans un voyage à travers des mondes imaginaires. Avec des personnages attachants et un scénario palpitant, ce livre est un incontournable pour tous les amateurs de fiction.",
        prix: 14.99,
        etat: "Livré",
        image: "src/assets/1.jpg",
        purchaseDate: "10/11/2024",
      },
      {
        id: 5,
        nom: "Commande 147625",
        description:
          "Soyez prêt à repousser vos limites avec cet équipement de fitness de haute qualité. Conçu pour vous aider à atteindre vos objectifs de remise en forme, il offre confort, durabilité et performance supérieure, que vous soyez débutant ou athlète chevronné.",
        prix: 79.99,
        etat: "Livré",
        image: "src/assets/2.jpg",
        purchaseDate: "27/02/2024"
      },
      {
        id: 6,
        nom: "Commande 354658",
        description:
          "Transformez votre espace de vie avec ce meuble élégant et fonctionnel. Fabriqué à partir de matériaux de haute qualité, il offre un design moderne et des fonctionnalités pratiques pour répondre à tous vos besoins de rangement.",
        prix: 149.99,
        etat: "Livré",
        image: "src/assets/3.jpeg",
        purchaseDate: "08/04/2024"
      },
      {
        id: 7,
        nom: "Produit 758422",
        description:
          "Découvrez de nouveaux horizons avec cette caméra haute performance. Capturez des moments inoubliables avec une clarté exceptionnelle et une précision remarquable. Que ce soit pour des aventures en plein air ou des moments précieux en famille, cette caméra est votre compagnon idéal.",
        prix: 199.99,
        etat: "Livré",
        image: "src/assets/4.jpg",
        purchaseDate: "19/06/2024",
      },
      {
        id: 8,
        nom: "Commande 581547",
        description:
          "Offrez-vous une expérience gastronomique inégalée avec cet ensemble d'ustensiles de cuisine de qualité professionnelle. Fabriqués avec des matériaux durables et innovants, ces ustensiles vous aideront à créer des chefs-d'œuvre culinaires à chaque repas.",
        prix: 79.99,
        etat: "Livré",
        image: "src/assets/image.jpg",
        purchaseDate: "30/03/2024",
      },
      {
        id: 9,
        nom: "Commande 675814",
        description:
          "Apportez une touche de style à votre garde-robe avec cette collection de vêtements tendance. Fabriqués à partir de tissus de qualité supérieure et conçus avec soin, ces vêtements vous assurent confort et élégance, quel que soit l'occasion.",
        prix: 39.99,
        etat: "Livré",
        image: "src/assets/image.jpg",
        purchaseDate: "12/08/2024",
      },
      {
        id: 10,
        nom: "Commande 178945",
        description:
          "Transformez votre routine beauté avec ces produits de soins de la peau de luxe. Formulés avec des ingrédients naturels et des technologies innovantes, ils offrent des résultats visibles et durables pour une peau radieuse et éclatante de santé.",
        prix: 59.99,
        etat: "Livré",
        image: "src/assets/image.jpg",
        purchaseDate: "05/12/2024",
      },
    ];
    commit('SET_COMMANDE_LIST', commandes);
  }
};

const getters: GetterTree<State, any> = {

};

export default {
  namespaced: true,
  state: {
    commandes: []
  },
  mutations,
  actions,
  getters
};
