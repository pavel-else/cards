<template>
  <header class="header">
    <div class="container header__container">
      <div class="settings header__settings">
        <div class="settings__item">
          <input
            type="checkbox"
            class="settings__input"
            id="settings__input--drag"
            value="draggable"
            :checked="settings.draggable"
            @change="change('draggable', $event.target.checked)"
          >
          <label for="settings__input--drag">click&drag</label>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue';
import store from '@/store';

export default {
  setup() {
    return {
      settings: computed(() => store.getters.settings),
    };
  },
  methods: {
    change(name, value) {
      store.dispatch('changeSetting', { name, value });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 120px;
  background: black;

  &__container {
    height: 120px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  &__settings {
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }
}

.settings {
  &__item {
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
  &__input {
    margin-right: 10px;
  }

}
</style>
