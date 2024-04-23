import {Utilisateur} from "./index";
import { Commit, GetterTree, MutationTree, ActionTree } from 'vuex';

interface State {
  utilisateur: Utilisateur,
  connected: Boolean
};

const state = {
  utilisateur: null,
  connected: false
}

const mutations: MutationTree<State> = {
  SET_USER(state: State, utilisateur: Utilisateur) {
    state.utilisateur = utilisateur;
    state.connected = true;
  },
  LOGOUT(state: State) {
    state.utilisateur.id = null;
    state.utilisateur.role = null;
    state.utilisateur.username = null;
    state.utilisateur.password = null;
    state.utilisateur.email = null;

    state.connected = false;
  }
};

const actions: ActionTree<State, any> = {
  async login({ commit }: { commit: Commit }, user) {
    const userLogin: Utilisateur = {
      id: 1,
      email: 'test@gmail.com',
      password: null,
      role: 'utilisateur',
      username: 'testAccount'
    };

    commit("SET_USER", userLogin);
    return true;
  },
  logout({ commit }: {commit: Commit}) {
    commit('LOGOUT')
  },
  async signup({ commit }: {commit: Commit}, user) {
    // envoie du signup
    const userSignUp: Utilisateur = {
      id: 1,
      email: 'test2@gmail.com',
      password: null,
      role: 'utilisateur',
      username: 'testAccount'
    };

    commit('SET_USER', userSignUp)
  }
};

const getters: GetterTree<State, any> = {
  user(state: State): Utilisateur {
    return state.utilisateur;
  },
  isLog(state: State): Boolean {
    return state.connected;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};