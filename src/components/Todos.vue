<template>
  <div>
    <h3>Todos :</h3>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{todo.title}}
        <button @click="deleteTodo(todo.id)">X</button></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo"]),
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style>
</style>