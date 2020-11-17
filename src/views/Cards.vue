<template>
  <div class="page">
    <div class="container">
      <div class="wrap">
        <h1 class="page__title">Cards</h1>
        <router-link class="btn btn-primary" to="/cards/create">Добавить</router-link>
      </div>

      <Cards class="page__cards" :cards="cards" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import store from '@/store';

import Cards from '@/components/Cards.vue';

export default {
  components: {
    Cards,
  },
  setup() {
    const cards = ref(store.getters.cards);

    return {
      cards,
    };
  },
};
</script>
