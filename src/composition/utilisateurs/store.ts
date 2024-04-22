import {Utilisateur} from "./index";
import { Commit, GetterTree, MutationTree, ActionTree } from 'vuex';

interface State {
  utilisateur: Utilisateur
};

const state = {
  utilisateur: null
}

const mutations: MutationTree<State> = {
  SET_USER(state: State, utilisateur: Utilisateur) {
    state.utilisateur = utilisateur;
  }
};

const actions: ActionTree<State, any> = {
  login({ commit }: { commit: Commit }) {
    const user: Utilisateur = {
      id: 1,
      email: 'test@gmail.com',
      password: null,
      role: 'utilisateur',
      username: 'testAccount'
    };

    commit("SET_USER", user);
  },
  logout({ commit }: {commit: Commit}) {
    const user: Utilisateur = {
      id: null,
      email: null,
      password: null,
      role: null,
      username: null
    };

    commit('SET_USER', user)
  }
};

const getters: GetterTree<State, any> = {
  user(state: State): Utilisateur {
    return state.utilisateur;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};