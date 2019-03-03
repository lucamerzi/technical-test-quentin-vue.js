import Vue from "vue";
import Vuex from "vuex";
import { unionBy } from "lodash";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: []
  },

  // Mutations have to be synchronous:
  mutations: {
    FETCH_TODOS(state, todos) {
      state.todos = todos;
    },
    REMOVE_TODO(state, todoId) {
      state.todos = state.todos.filter(el => el.id !== todoId);
    },
    EDIT_TODO(state, todo) {
      state.todos = unionBy([todo], state.todos, "id");
    },
    GET_TODO(state, currentTodo) {
      state.newTodo = currentTodo;
    },
    ADD_TODO(state, response) {
      state.todos.unshift(response);
    }
  },

  // We can perform asynchronous operations inside an action:
  actions: {
    fetchTodos({ commit } /* { self } */) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          commit("FETCH_TODOS", json);
        })
        .catch(error => {
          alert("error fetchTodos !!!", error.statusText);
        });
    },

    removeTodo(store, id /* { self } */) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
      })
        .then(store.commit("REMOVE_TODO", id))
        .catch(error => {
          alert("error removeTodo !!!", error.statusText);
        });
    },

    getTodo(store, userInput) {
      store.commit("GET_TODO", userInput);
    },

    addTodo(store, newTodo) {
      // POST adds a random id to the object sent
      const { title, body } = newTodo;
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
          userId: Math.floor(Math.random() * 1000)
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => {
          store.commit("ADD_TODO", {
            ...json,
            // API always returns same ID, which is not optimal for vue
            id: json.id + Math.floor(Math.random() * 1000)
          });
        })
        .catch(error => {
          alert("error addTodo !!!", error.statusText);
        });
    },

    editTodo(store, todo) {
      // POST adds a random id to the object sent
      fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => {
          store.commit("EDIT_TODO", json);
        })
        .catch(error => {
          alert("error addTodo !!!", error.statusText);
        });
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos;
    },
    newTodo: state => state.newTodo
  }
});

export default store;
