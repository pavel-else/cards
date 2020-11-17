import { createStore } from 'vuex';
import initStorage from '@/functions/initStorage';
import saveToStorage from '@/functions/saveToStorage';
import settings from '@/store/modules/settings';

initStorage();

const store = createStore({
  modules: {
    settings,
  },
  state: {
    cards: JSON.parse(localStorage.getItem('cards')),
  },
  getters: {
    cards(state) {
      return state.cards;
    },
  },
  mutations: {
    addCard(state, card) {
      state.cards.push(card);
    },
    changeCard(state, { id, title, description }) {
      const card = state.cards.find((i) => i.id === Number(id));
      card.title = title;
      card.description = description;
    },
    deleteCard(state, id) {
      const filter = state.cards.filter((i) => i.id !== Number(id));
      state.cards = filter;
    },
    cards(state, cards) {
      state.cards = cards;
    },
  },
  actions: {
    addCard({ getters, commit, dispatch }, { title, description }) {
      const ids = getters.cards.map((i) => i.id);
      const maxId = Math.max(...ids);
      const newId = maxId ? maxId + 1 : 1;

      const card = {
        id: newId,
        title,
        description,
      };

      commit('addCard', card);
      dispatch('saveCardsToStorage');
    },
    changeCard({ commit, dispatch }, card) {
      commit('changeCard', card);
      dispatch('saveCardsToStorage');
    },
    deleteCard({ commit, dispatch }, id) {
      commit('deleteCard', id);
      dispatch('saveCardsToStorage');
    },
    saveCards({ commit, dispatch }, cards) {
      commit('cards', cards);
      dispatch('saveCardsToStorage');
    },
    saveCardsToStorage({ getters }) {
      saveToStorage('cards', getters.cards);
    },
  },
});

export default store;
