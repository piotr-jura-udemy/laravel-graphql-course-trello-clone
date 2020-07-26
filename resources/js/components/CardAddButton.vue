<template>
  <div
    @click="$emit('click')"
    class="rounded-sm p-2 text-gray-600 cursor-pointer hover:bg-gray-400 hover:text-gray-800 text-sm"
  >Add new card</div>
</template>

<script>
import CardAdd from "./../graphql/CardAdd.gql";
import BoardQuery from "./../graphql/BoardWithListsAndCards.gql";

export default {
  methods: {
    addCard() {
      this.$emit("click");
      // this.$apollo.mutate({
      //   mutation: CardAdd,
      //   variables: {
      //     title: "Added through mutation",
      //     listId: 1,
      //     order: 1
      //   },
      //   update(store, { data: { cardAdd } }) {
      //     const data = store.readQuery({
      //       query: BoardQuery,
      //       variables: { id: 1 }
      //     });

      //     data.board.lists.find(list => (list.id = 1)).cards.push(cardAdd);

      //     store.writeQuery({ query: BoardQuery, data });
      //   }
      // });
    }
  }
};
</script>