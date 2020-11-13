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
@import "./assets/style/base";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
