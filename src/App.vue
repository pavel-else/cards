<template>
  <div class="app">
    <HeaderBlock class="app__header"></HeaderBlock>
    <main class="app__main">
      <router-view />
    </main>
    <footer class="app__footer"></footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    HeaderBlock: Header,
  },
};
</script>

<style lang="scss">
@import "./assets/style/variables";
@import "./assets/style/base";

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__header {
    height: 120px;
    background: black;
  }
  &__main {
    flex-grow: 1;
  }
  &__footer {
    height: 120px;
    background: black;
  }
}
</style>
