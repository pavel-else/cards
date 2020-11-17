<template>
  <div class="page">
    <div class="container">
      <div class="wrap">
        <h1 class="page__title">Create card</h1>
        <div class="btn-wrap">
          <button class="btn btn-primary" @click="addCard">Сохранить</button>
          <router-link class="btn btn--second" to="/cards">Отменить</router-link>
        </div>
      </div>

      <input class="input" placeholder="Название" v-model="title">
      <input class="input" placeholder="Описание" v-model="description">

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import store from '@/store';

export default {
  setup() {
    const title = ref('asdf');
    const description = ref('fda');

    return {
      title,
      description,
    };
  },
  methods: {
    addCard() {
      store.dispatch('addCard', {
        title: this.title,
        description: this.description,
      });

      this.$router.push('/cards');
    },
  },

};
</script>
