<template>
  <div class="app">
    <header class="app__header"></header>
    <main class="app__main">
      <router-view />
    </main>
    <footer class="app__footer"></footer>
  </div>
</template>

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
