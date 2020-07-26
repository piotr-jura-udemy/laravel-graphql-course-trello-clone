<template>
  <div
    class="bg-white shadow-card rounded-sm p-2 cursor-pointer text-sm hover:bg-gray-100 mb-2"
  >{{ card.title }}</div>
</template>

<script>
export default {
  props: {
    card: Object
  }
};
</script>