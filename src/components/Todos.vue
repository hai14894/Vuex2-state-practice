<template>
  <div>
    <h3>Todos :</h3>
    <div class="todos">
      <div
        class="todo"
        v-for="(todo, i) in allTodos"
        :key="`${i} - ${todo.id}`"
        @dblclick="onDblClick(todo)"
        v-bind:class="{ 'is-completed': todo.completed }"
      >
        {{ todo.title }}
        <button @click="deleteTodo(todo.id)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodos"]),
    onDblClick(todo) {
      const updatedTodo = { id: todo.id,title: todo.title, completed: !todo.completed };
      this.updateTodos(updatedTodo);
    },
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped>
.is-completed {
  background-color: yellow;
  color: red;
}
</style>
