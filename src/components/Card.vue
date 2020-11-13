<template>
  <div class="card">
    <h3 class="card__title">Title</h3>
    <div class="card__description">Description</div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
.card {
  // width: 100%;
  padding: 10px 10px 10px;
  border: 1px solid var(--color-black);
  border-radius: 4px;

  &__title {
    font-size: 16px;
    font-weight: 400;
    margin: 0 0 20px;
  }
}
</style>
