import Vue from "vue";
import VueRouter from 'vue-router';
import Board from "./Board.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/board/:id", name: "board", component: Board },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register }
];

export default new VueRouter({
  routes, mode: "history"
});