<template>
  <div class="about">
    <h1>Edit Card {{ cardId }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    cardId: [String, Number],
  },
};
</script>
