import { createStore } from 'vuex';

// При первой инициализации в сторе должны быть 2 дефолтные карточки
if (!localStorage.getItem('isFirstInit')) {
  localStorage.setItem('cards', JSON.stringify([
    { id: 1, title: 'Первая карточка', description: 'Description' },
    { id: 2, title: 'Вторая карточка', description: 'Description' },
  ]));

  localStorage.setItem('isFirstInits', true);
}

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
    card({ state }, card) {
      console.log('state', state);
      state.cards.push(card);
    },
  },
  actions: {
    addCard({ getters, commit }, { title, description }) {
      const ids = getters.cards.map((i) => i.id);
      const maxId = Math.max(...ids);
      const newId = maxId ? maxId + 1 : 1;

      const card = {
        id: newId,
        title,
        description,
      };

      commit('card', card);
    },
  },
});

export default store;
