<template>
  <CardEditor v-model="title" @closed="closed" @saved="addCard" label="Add Card"></CardEditor>
</template>

<script>
import CardAdd from "./../graphql/CardAdd.gql";
import { EVENT_CARD_ADDED } from "../constants";
import CardEditor from "./CardEditor";
import { mapState } from "vuex";

export default {
  components: { CardEditor },
  props: {
    list: Object
  },
  data() {
    return {
      title: null
    };
  },
  computed: mapState({
    userId: state => state.user.id
  }),
  methods: {
    addCard() {
      const self = this;

      this.$apollo.mutate({
        mutation: CardAdd,
        variables: {
          title: this.title,
          listId: this.list.id,
          order: this.list.cards.length + 1,
          ownerId: this.userId
        },
        update(store, { data: { cardAdd } }) {
          self.$emit("added", { store, data: cardAdd, type: EVENT_CARD_ADDED });
          self.closed();
        }
      });
    },
    closed() {
      this.$emit("closed");
    }
  }
};
</script>