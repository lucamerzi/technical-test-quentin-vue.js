import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    FETCH_TODOS(state, todos) {
      state.todos = todos
    }
  },
  actions: {
    fetchTodos({ commit }, /* { self } */) {
      axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {

          commit("FETCH_TODOS", response.data);
          // self.filtertodos();
        })
        .catch((error => {
          alert("error!!!", error.statusText)
        }))
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos
    }
  }
})

export default store