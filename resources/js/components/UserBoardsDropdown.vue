<template>
  <div>
    <button class="header-btn" @click.prevent="showBoards = !showBoards">Boards</button>

    <DropdownMenu :show="showBoards">
      <div class="text-gray-600 text-xs font-semibold mb-2 ml-2">BOARDS</div>

      <router-link
        :to="{name: 'board', params: {id: board.id}}"
        v-for="board in userBoards"
        :key="board.id"
        :class="[colorMap100[board.color]]"
        class="m-2 rounded-sm opacity-100 hover:opacity-75 text-gray-700 font-bold cursor-pointer flex"
      >
        <div class="w-10 rounded-sm rounded-r-none" :class="[colorMap200[board.color]]"></div>
        <div class="p-2">{{ board.title }}</div>
      </router-link>
    </DropdownMenu>
  </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu";
import UserBoards from "./../graphql/UserBoards.gql";
import { mapState } from "vuex";
import { colorMap100, colorMap200 } from "./../utils";

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
  computed: {
    ...mapState({
      userId: state => state.user.id
    }),
    colorMap100: () => colorMap100,
    colorMap200: () => colorMap200
  }
};
</script>