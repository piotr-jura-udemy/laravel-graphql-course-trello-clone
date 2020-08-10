<template>
  <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
    <div class="flex justify-between">
      <div class="text-gray-800 pl-2 pb-2 font-bold">{{ list.title }}</div>
    </div>

    <Card
      v-for="card in list.cards"
      :key="card.id"
      :card="card"
      @deleted="$emit('card-deleted', {...$event, listId: list.id})"
      @updated="$emit('card-updated', {...$event, listId: list.id})"
    ></Card>

    <CardAddEditor
      v-if="editing"
      @closed="editing=false"
      :list="list"
      @added="$emit('card-added', {...$event, listId: list.id})"
    ></CardAddEditor>
    <CardAddButton v-if="!editing && canAddCard" @click="editing=true"></CardAddButton>
  </div>
</template>

<script>
import Card from "./Card";
import CardAddButton from "./CardAddButton";
import CardAddEditor from "./CardAddEditor";
import { mapState } from "vuex";

export default {
  components: { Card, CardAddButton, CardAddEditor },
  props: {
    list: Object
  },
  data() {
    return {
      editing: false
    };
  },
  computed: mapState({
    canAddCard(state) {
      return this.list.board.owner.id == state.user.id;
    }
  })
};
</script>

<style scoped>
.list {
  width: 250px;
  min-width: 250px;
}
</style>