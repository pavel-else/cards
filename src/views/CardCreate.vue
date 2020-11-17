<template>
  <div class="page">
    <div class="container">
      <div class="wrap">
        <h1 class="page__title">Create card</h1>
        <div class="btn-wrap">
          <button class="btn btn-primary" to="/cards/create">Сохранить</button>
          <router-link class="btn btn--second" to="/cards">Отменить</router-link>
        </div>
      </div>

      <input class="input" placeholder="Название">
      <input class="input" placeholder="Описание">

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
// import store from '@/store';

export default {
  setup() {
    const card = ref();

    return {
      card,
    };
  },

};
</script>
