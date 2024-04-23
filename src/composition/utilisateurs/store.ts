import { Utilisateur} from "./index";
import {  GetterTree, MutationTree, ActionTree } from 'vuex';

const url = "http://localhost:8000/auth/auth/"

interface State {
  utilisateur: Utilisateur,
  token: string | null,
  isAuthenticated: boolean
};

const state = {
  utilisateur: null,
  token: null,
  isAuthenticated: false
}

const mutations: MutationTree<State> = {
  SET_USER(state: State, utilisateur: Utilisateur) {
    state.utilisateur = utilisateur;
  },
  setToken(state, token) {
    state.token = token;
    state.isAuthenticated = !!token;
  },
  clearAuthData(state) {
    state.token = null;
    state.isAuthenticated = false;
  }
};

const actions: ActionTree<State, any> = {
  async login({ commit }, authData) {
    try {
      const response = await fetch(url + 'signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: authData.email, password: authData.password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      commit('setToken', data.accessToken);
      console.log(data.accessToken)
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },
  async register({ commit }, authData) {
    try {
      const response = await fetch(url + 'signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: authData.username, password: authData.password, email: authData.email, role: authData.role })
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      commit('setToken', data.token);
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },
  logout({ commit }) {
    commit('clearAuthData');
  }
 }


const getters: GetterTree<State, any> = {
  user(state: State): Utilisateur {
    return state.utilisateur;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};