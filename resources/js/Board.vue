<template>
  <div class="h-full flex flex-col items-stretch bg-purple-500">
    <div class="header text-white flex justify-between items-center mb-2 bg-purple-600">
      <div class="ml-2 w-1/3">x</div>
      <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">Laravello</div>
      <div class="mr-2 w-1/3 flex justify-end">x</div>
    </div>

    <div class="h-full flex flex-1 flex-col items-stretch">
      <div class="mx-4 mb-2 text-white font-bold text-lg">The board title goes here</div>
      <div class="flex flex-1 items-start overflow-x-auto mx-2">
        <List></List>
        <List></List>
        <List></List>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./components/List";

export default {
  components: { List }
};
</script>

<style scoped>
.header {
  height: 40px;
}
</style>