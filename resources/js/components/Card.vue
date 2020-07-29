<template>
  <div
    class="group bg-white shadow-card rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2 flex justify-between"
  >
    <div>{{ card.title }}</div>
    <div
      class="flex font-bold opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-500"
    >
      <div class="text-gray-400 pr-2 hover:text-yellow-700">E</div>
      <div class="text-gray-400 hover:text-red-700" @click="cardDelete">D</div>
    </div>
  </div>
</template>

<script>
import CardDelete from "./../graphql/CardDelete.gql";
import { EVENT_CARD_DELETED } from "./../constants";

export default {
  props: {
    card: Object
  },
  methods: {
    cardDelete() {
      const self = this;

      this.$apollo.mutate({
        mutation: CardDelete,
        variables: {
          id: this.card.id
        },
        update(store, { data: { cardDelete } }) {
          self.$emit("deleted", {
            store,
            data: cardDelete,
            type: EVENT_CARD_DELETED
          });
        }
      });
    }
  }
};
</script>