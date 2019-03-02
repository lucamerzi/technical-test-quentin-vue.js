<template>
  <div id="app">
    <Navbar/>
    <h1>This is my Vue.js todo</h1>

    <Input/>
    <PostsExample/>
  </div>
</template>

<script>
import PostsExample from "./components/Posts.vue";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
export default {
  name: "app",
  components: {
    Navbar,
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
