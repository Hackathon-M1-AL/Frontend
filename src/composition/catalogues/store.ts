// store.ts
import { ActionTree, MutationTree, StoreOptions } from "vuex";
import { Catalogue } from "./index";
import axios from "axios";

interface State {
  catalogues: Catalogue[];
}

const state: State = {
  catalogues: [],
};

const actions: ActionTree<State, State> = {
  createCatalogue({ commit }, catalogueData: Catalogue) {
    return axios
      .post<Catalogue>("URL_DU_SERVEUR/api/catalogues", catalogueData)
      .then((response) => {
        commit("ADD_CATALOGUE", response.data);
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  },
};

const mutations: MutationTree<State> = {
  ADD_CATALOGUE(state, catalogue: Catalogue) {
    state.catalogues.push(catalogue);
  },
};

const store: StoreOptions<State> = {
  state,
  actions,
  mutations,
};

export default store;
