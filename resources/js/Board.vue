<template>
  <div class="h-full flex flex-col items-stretch" :class="bgColor">
    <div class="header text-white flex justify-between items-center mb-2">
      <div class="ml-2 w-1/3">
        <UserBoardsDropdown v-if="isLoggedIn"></UserBoardsDropdown>
      </div>
      <div class="text-lg opacity-50 cursor-pointer hover:opacity-75">Laravello</div>
      <div class="mr-2 w-1/3 flex justify-end">
        <div v-if="isLoggedIn" class="flex items-center">
          <div class="text-sm mr-2">{{ name }}</div>
          <button class="header-btn" @click="logout">Logout</button>
        </div>
        <div v-else>
          <button class="header-btn" @click="$router.push({name: 'login'})">Sign-in</button>
          <button class="header-btn">Register</button>
        </div>
      </div>
    </div>

    <div class="h-full flex flex-1 flex-col items-stretch">
      <div class="mx-4 mb-2 text-white font-bold text-lg">
        <span v-if="$apollo.queries.board.loading">Loading...</span>
        <span v-else>{{ board.title }}</span>
      </div>
      <div class="flex flex-1 items-start overflow-x-auto mx-2" v-if="board">
        <List
          :list="list"
          v-for="list in board.lists"
          :key="list.id"
          @card-added="updateQueryCache($event)"
          @card-deleted="updateQueryCache($event)"
          @card-updated="updateQueryCache($event)"
        ></List>

        <ListAddEditor :board="board.id" @added="updateQueryCache($event)"></ListAddEditor>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./components/List";
import ListAddEditor from "./components/ListAddEditor";
import UserBoardsDropdown from "./components/UserBoardsDropdown";
import BoardQuery from "./graphql/BoardWithListsAndCards.gql";
import Logout from "./graphql/Logout.gql";
import {
  EVENT_CARD_ADDED,
  EVENT_CARD_DELETED,
  EVENT_CARD_UPDATED,
  EVENT_LIST_ADDED
} from "./constants";
import { mapState } from "vuex";
import { colorMap500 } from "./utils";

export default {
  components: { List, UserBoardsDropdown, ListAddEditor },
  computed: {
    bgColor() {
      return {
        "bg-gray-500": this.$apollo.loading,
        [colorMap500[this.board?.color]]: true
      };
    },
    ...mapState({
      isLoggedIn: "isLoggedIn",
      name: state => state.user.name
    })
  },
  apollo: {
    board: {
      query: BoardQuery,
      variables() {
        return {
          id: Number(this.$route.params.id)
        };
      }
    }
  },
  methods: {
    async logout() {
      const response = await this.$apollo.mutate({
        mutation: Logout
      });

      if (response.data?.logout?.id) {
        this.$store.dispatch("logout");
      }
    },
    updateQueryCache(event) {
      const data = event.store.readQuery({
        query: BoardQuery,
        variables: { id: Number(this.board.id) }
      });

      const listById = () =>
        data.board.lists.find(list => list.id == event.listId);

      switch (event.type) {
        case EVENT_LIST_ADDED:
          data.board.lists.push(event.data);
          break;
        case EVENT_CARD_ADDED:
          listById().cards.push(event.data);
          break;
        case EVENT_CARD_UPDATED:
          listById().cards.filter(card => card.id == event.data.id).title =
            event.data.title;
          break;
        case EVENT_CARD_DELETED:
          listById().cards = listById().cards.filter(
            card => card.id != event.data.id
          );
          break;
      }

      event.store.writeQuery({
        query: BoardQuery,
        data,
        variables: { id: Number(this.board.id) }
      });
    }
  }
};
</script>

<style scoped>
.header {
  height: 40px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>