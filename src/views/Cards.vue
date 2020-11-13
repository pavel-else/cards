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
    console.log('TH', this);
    const cards = ref(this.$store.getters.cards);

    return {
      cards,
    };
  },
};
</script>
