<template>
  <div>
    <button class="header-btn" @click="showBoards = !showBoards">Boards</button>
    <DropdownMenu :show="showBoards">
      <div class="text-gray-600 text-xs font-semibold mb-2 ml-2">BOARDS</div>

      <div
        v-for="n in 8"
        :key="n"
        class="m-2 bg-teal-100 rounded-sm opacity-100 hover:opacity-75 text-gray-700 font-bold cursor-pointer flex"
      >
        <div class="bg-teal-200 w-10 rounded-sm rounded-r-none"></div>
        <div class="p-2">The board name!</div>
      </div>
    </DropdownMenu>
  </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu";
import UserBoards from "./../graphql/UserBoards.gql";
import { mapState } from "vuex";

export default {
  components: { DropdownMenu },
  apollo: {
    userBoards: {
      query: UserBoards,
      variables() {
        return {
          userId: 1
        };
      },
      skip() {
        return !this.userId;
      }
    }
  },
  data() {
    return {
      showBoards: false
    };
  },
  computed: mapState({
    userId: state => state.user.id
  })
};
</script>