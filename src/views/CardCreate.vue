<template>
  <div class="page page-create">
    <div class="container">
      <div class="wrap">
        <h1 class="page__title">Добавить новую карточку</h1>
        <div class="btn-wrap">
          <button class="btn btn-primary" @click="addCard">Сохранить</button>
          <router-link class="btn btn--second" to="/cards">Отменить</router-link>
        </div>
      </div>

      <div class="page-create__inputs">
        <div class="page-create__item">
          <label for="pc__name" class="page-create__label">Название</label>
          <input class="input" id="pc__name" placeholder="Введите название" v-model="title">
        </div>
        <div class="page-create__item">
          <label for="pc__description" class="page-create__label">Описание</label>
          <textarea
            id="pc__description"
            class="input page-create__textarea"
            placeholder="Введите описание"
            v-model="description"
          />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import store from '@/store';

export default {
  setup() {
    const title = ref('');
    const description = ref('');

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

<style lang="scss" scoped>
.page-create {
  &__item {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }
  &__label {
    width: 200px;
    margin-right: 15px;
  }
  &__textarea {
    resize: vertical;
    padding-top: 15px;
    padding-bottom: 15px;
    height: 150px;
  }
}
</style>
