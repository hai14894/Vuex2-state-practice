import axios from "axios";

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
const actions = {
    async fetchTodos() {
        const res  = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(res.data);
    }
};
const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}