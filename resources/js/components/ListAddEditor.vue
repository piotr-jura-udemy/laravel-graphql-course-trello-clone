<template>
  <div>
    <div
      @click="startEditing"
      v-if="!editing"
      class="list bg-white hover:bg-gray-500 rounded-sm p-2 mr-2 opacity-75 text-black cursor-pointer"
    >＋&nbsp;Add another list</div>

    <div v-else class="bg-gray-300 rounded-sm p-2 list" v-on-clickaway="hideEditor">
      <input
        type="text"
        ref="title"
        class="rounded-sm border-blue-600 border-2 py-1 px-2 outline-none w-full text-gray-800 text-sm"
        placeholder="Enter list title..."
        @keyup.esc="hideEditor"
        @keypress.enter="addList"
        v-model="title"
      />

      <div class="flex">
        <button
          @click="addList"
          class="mt-2 rounded-sm py-1 px-3 bg-blue-700 text-white cursor-pointer hover:bg-blue-500 outline-none"
        >Add List</button>

        <div
          @click="hideEditor"
          class="mt-2 ml-1 px-3 rounded-md hover:bg-gray-400 cursor-pointer text-gray-500 flex items-center justify-center"
        >
          <div>✖</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from "vue-clickaway";
import { EVENT_LIST_ADDED } from "../constants";

import ListAdd from "./../graphql/ListAdd.gql";

export default {
  props: ["board"],
  data() {
    return {
      editing: false,
      title: null
    };
  },
  directives: { onClickaway },
  methods: {
    hideEditor() {
      this.editing = false;
    },
    startEditing() {
      this.editing = true;
      // Activate the input (focus)
      this.$nextTick(() => this.$refs.title.focus());
    },
    addList() {
      const self = this;

      this.$apollo.mutate({
        mutation: ListAdd,
        variables: {
          title: this.title,
          board: this.board
        },
        update(store, { data: { listAdd } }) {
          self.$emit("added", { store, data: listAdd, type: EVENT_LIST_ADDED });
          self.hideEditor();
        }
      });
    }
  }
};
</script>