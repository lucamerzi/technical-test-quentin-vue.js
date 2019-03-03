<template>
  <div class="container">
    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">Todo Id</th>
          <th scope="col">User Id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todosRetrievedFromStore" :key="todo.id">
          <th scope="row">{{todo.id}}</th>
          <td>{{todo.userId}}</td>
          <td>
            <p v-if="todo.id != editTodoId">{{todo.title}}</p>
            <textarea class="form-control" v-else v-model="updateTodo.title"></textarea>
          </td>
          <td>
            <p v-if="todo.id != editTodoId">{{todo.body}}</p>
            <textarea class="form-control" v-else v-model="updateTodo.body"></textarea>
          </td>
          <td>
            <button v-on:click="onDelete(todo.id)" class="btn btn-danger btn-sm">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
          <td>
            <button @click="edit(todo)" v-if="todo.id != editTodoId" class="btn btn-warning btn-sm">
              <i class="fas fa-pencil-alt"></i>
            </button>
            <button @click="submit(todo)" v-else class="btn btn-success btn-sm">
              <i class="fas fa-paper-plane"></i>
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
      this.editTodoId = todo.id;
      this.updateTodo = {
        body: todo.body,
        title: todo.title
      };

      // this.$store.dispatch("editTodo", todo);
    },
    submit(todo) {
      this.$store.dispatch("editTodo", { ...todo, ...this.updateTodo });
      this.editTodoId = null;
      this.updateTodo = {
        body: "",
        title: ""
      };
    }
  },
  data() {
    return {
      editTodoId: null,
      updateTodo: {
        body: "",
        title: ""
      }
    };
  }
};
</script>
<style scoped>
textarea {
  width: 100%;
  height: 200px;
}
</style>
