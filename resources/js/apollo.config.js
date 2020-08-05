import ApolloClient from 'apollo-boost';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  headers: {
    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
  },
  credentials: 'include',
  onError: (err) => console.log('A global error handler!')
});

export default new VueApollo({
  defaultClient: apolloClient
});