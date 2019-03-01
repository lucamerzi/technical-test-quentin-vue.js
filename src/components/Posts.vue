<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <h1>This is my template</h1>

      <button class="btn btn-primary">CLICK</button>
      <table class="table mt-4">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">userId</th>
            <th scope="col">title</th>
            <th scope="col">completed</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <th scope="row">{{todo.id}}</th>
            <td>{{todo.userId}}</td>
            <td>{{todo.title}}</td>
            <td>{{todo.completed}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostsExample",
  data() {
    return {
      todos: []
    };
  },

  async created() {
    const todos = await axios.get("https://jsonplaceholder.typicode.com/todos");
    this.todos = todos.data;
  }
};
</script>
