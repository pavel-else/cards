import { createStore } from 'vuex';
import initStorage from '@/functions/initStorage';
import saveToStorage from '@/functions/saveToStorage';

initStorage();

const store = createStore({
  state: {
    cards: JSON.parse(localStorage.getItem('cards')),
  },
  getters: {
    cards(state) {
      return state.cards;
    },
  },
  mutations: {
    card(state, card) {
      state.cards.push(card);
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

      commit('card', card);
      dispatch('saveCardsToStorage');
    },
    saveCardsToStorage({ getters }) {
      saveToStorage('cards', getters.cards);
    },
  },
});

export default store;
