<template>
  <template v-if="settings.draggable">
    <draggable class="dragArea list-group w-full cards" v-model="inCards" @change="changeCards">
      <template v-for="item in inCards" :key="item.id">
        <Card class="cards__card" :value="item"/>
      </template>
    </draggable>
  </template>
  <template v-else>
    <div class="cards">
      <template v-for="item in inCards" :key="item.id">
        <Card class="cards__card" :value="item"/>
      </template>
    </div>
  </template>
</template>

<script>
import { ref, computed } from 'vue';
import store from '@/store';
// https://vuejsexamples.com/a-simple-vue-3-drag-and-drop-component/
import { VueDraggableNext } from 'vue-draggable-next';
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
    draggable: VueDraggableNext,
  },
  props: {
    cards: Array,
  },
  setup(props) {
    const cards = props.cards.map((i) => ({ ...i }));

    return {
      inCards: ref(cards),
      settings: computed(() => store.getters.settings),
    };
  },
  methods: {
    changeCards() {
      store.dispatch('saveCards', this.inCards);
    },
  },
};
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  // grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;

  &__card {
    margin-bottom: 30px;
  }
}
</style>
