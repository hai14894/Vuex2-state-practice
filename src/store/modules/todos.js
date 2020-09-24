import axios from "axios";

const state = {
  todos: [],
};
const getters = {
  allTodos: (state) => state.todos,
};
const actions = {
  async fetchTodos({ commit }) {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    commit("setTodos", res.data);
  },
  async addTodo({ commit }, title) {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      complete: false,
    });
    commit("newTodo", res.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
  async filterTodos({ commit }, e) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${e.target.value}`);
    commit("setTodos", res.data);
  },
  async updateTodos ({commit},  todoObj){
    const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todoObj.id}`,todoObj); 
    console.log(res.data);
    commit('updateTodo', res.data)
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  updateTodo: (state, todoObj) => {
    const index = state.todos.findIndex(todo => todo.id = todoObj.id);
    if(index){
        state.todos.splice(index, 1, todoObj);
    }
  },
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
