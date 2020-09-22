// import axios from "axios";

const state = {
    todos: [
        {
            id: 1,
            title: "Task 1"
        },
        {
            id: 2,
            title: "Task 2"
        }
    ]
};
const getters = {
    allTodos: (state) => state.todos
};
const actions = {};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}