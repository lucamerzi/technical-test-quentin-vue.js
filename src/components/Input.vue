<template>
  <form v-on:submit.prevent="addTodo" id="get-todo" class="container mt-5">
    <input
      name="title"
      @change="syncLocalState"
      class="form-control mb-3"
      placeholder="My new todo's title..."
    >
    <textarea
      name="body"
      @change="syncLocalState"
      class="form-control mb-3"
      placeholder="My new todo's body..."
    ></textarea>
    <button class="btn btn-primary">Add Todo</button>
  </form>
</template>

<script>
export default {
  name: "My-input",
  methods: {
    addTodo(e) {
      e.target.reset();
      this.$store.dispatch("addTodo", this.newTodo);
      this.newTodo = {
        title: "",
        body: ""
      };
    },
    syncLocalState(e) {
      this.newTodo[e.target.name] = e.target.value;
    }
  },
  data() {
    return {
      newTodo: {
        title: "",
        body: ""
      }
    };
  }
};
</script>