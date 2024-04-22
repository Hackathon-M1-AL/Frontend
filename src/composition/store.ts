import { createStore } from 'vuex'
import utilisateurs from './utilisateurs/store';
import produits from './produits/store';
import paniers from './paniers/store';
import paiements from './paiements/store';
import catalogues from './catalogues/store';

export default createStore({
    modules: {
      utilisateurs,
      produits,
      paniers,
      paiements,
      catalogues
    }
});