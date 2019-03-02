import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    FETCH_TODOS(state, todos) {
      state.todos = todos
    },
    REMOVE_TODO(state, todoId) {
      state.todos = state.todos.filter(el => el.id !== todoId)
      // todos.splice(todos.indexOf(todo), 1)
    }
  },
  actions: {

    fetchTodos({ commit }, /* { self } */) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => { commit("FETCH_TODOS", json); })
        .catch((error => { alert("error fetchTodos !!!", error.statusText) }))
    },

    removeTodo(store, id /* { self } */) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })
        .then(store.commit("REMOVE_TODO", id))
        .catch((error => { alert("error removeTodo !!!", error.statusText) }))
    }

  },
  getters: {
    doneTodos: state => {
      return state.todos
    }
  }
})

export default store