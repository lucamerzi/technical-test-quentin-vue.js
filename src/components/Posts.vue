<template>
  <div class="container">
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">Todo Id</th>
          <th scope="col">User Id</th>
          <th scope="col">Title</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todosRetrievedFromStore" :key="todo.id">
          <th scope="row">{{todo.id}}</th>
          <td>{{todo.userId}}</td>
          <td>{{todo.title}}</td>

          <td>
            <button v-on:click="onDelete(todo.id)" class="btn btn-danger btn-sm">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
          <td>
            <button @click="edit(todo.id)" class="btn btn-warning btn-sm">
              <i class="fas fa-pencil-alt"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store/store.js";
export default {
  name: "PostsExample",

  async created() {
    this.$store.dispatch("fetchTodos", { self: this });
  },

  computed: {
    todosRetrievedFromStore() {
      return store.state.todos;
    }
  },

  methods: {
    onDelete(id) {
      this.$store.dispatch("removeTodo", id);
    },
    edit(todo) {
      this.$store.dispatch("editTodo", todo);
    }
  }
};
</script>