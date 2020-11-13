<template>
  <div class="page">
    <div class="container">
      <div class="wrap">
        <h1 class="page__title">Cards</h1>
        <button class="btn btn-primary">Добавить</button>
      </div>

      <Cards class="page__cards" :cards="cards" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import Cards from '@/components/Cards.vue';

export default {
  components: {
    Cards,
  },
  setup() {
    const cards = ref([
      { id: 1, title: 'Title', description: 'Description' },
      { id: 2, title: 'Title', description: 'Description' },
      { id: 3, title: 'Title', description: 'Description' },
      { id: 4, title: 'Title', description: 'Description' },
      { id: 5, title: 'Title', description: 'Description' },
    ]);

    return {
      cards,
    };
  },
};
</script>
