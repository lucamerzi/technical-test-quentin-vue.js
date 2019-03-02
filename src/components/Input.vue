<template>
  <div id="get-todo" class="container mt-5">
    <input class="form-control mb-3" :value="newTodo" @change="getTodo" placeholder="I need to...">
    <button class="btn btn-primary" @click="addTodo">Add Todo</button>
  </div>
</template>

<script>
export default {
  methods: {
    getTodo(e) {
      this.$store.dispatch("getTodo", e.target.value);
    },
    addTodo() {
      this.$store.dispatch("addTodo");
      this.$store.dispatch("clearTodo");
    }
  },
  computed: {
    newTodo() {
      return this.$store.getters.newTodo;
    }
  }
};
</script>