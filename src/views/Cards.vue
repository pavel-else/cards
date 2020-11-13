<template>
  <div class="page">
    <div class="container">
      <div class="wrap">
        <h1 class="page__title">Cards</h1>
        <button class="btn btn-primary">Добавить</button>
      </div>

      <Cards class="page__cards" />
    </div>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue';

export default {
  components: {
    Cards,
  },
};
</script>
