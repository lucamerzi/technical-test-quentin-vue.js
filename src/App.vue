<template>
  <div id="app">
    <Input/>
    <PostsExample/>
  </div>
</template>

<script>
import PostsExample from "./components/Posts.vue";
import Input from "./components/Input";
export default {
  name: "app",
  components: {
    Input,
    PostsExample
  }
};
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
