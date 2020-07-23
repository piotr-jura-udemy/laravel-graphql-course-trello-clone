<template>
  <div class="bg-gray-300 rounded-sm p-2 mr-2 list">
    <div class="flex justify-between">
      <div class="text-gray-800 pl-2 pb-2 font-bold">{{ list.title }}</div>
    </div>

    <Card v-for="card in list.cards" :key="card.id" :card="card"></Card>

    <CardAddButton></CardAddButton>
  </div>
</template>

<script>
import Card from "./Card";
import CardAddButton from "./CardAddButton";

export default {
  components: { Card, CardAddButton },
  props: {
    list: Object
  }
};
</script>

<style scoped>
.list {
  width: 250px;
  min-width: 250px;
}
</style>