<template>
  <router-link :to="`/cards/${value.id}`">
    <div class="card">
      <h3 class="card__title">{{ value.title }}</h3>
      <div class="card__description">{{ value.description }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default() {
        return {
          title: '',
          description: '',
        };
      },
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  max-width: 220px;
  min-height: 80px;
  padding: 10px 10px 10px;
  border: 1px solid var(--color-black);
  border-radius: 4px;

  &__title {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 20px;
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    text-overflow: ellipsis;
  }
  &__description {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    text-overflow: ellipsis;
  }
}
</style>
