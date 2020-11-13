<template>
  <div class="cards">
    <template v-for="i in 5" :key="i">
      <Card class="cards__card"/>
    </template>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  // grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;

  &__card {
    margin-bottom: 30px;
  }
}
</style>
