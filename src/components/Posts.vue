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
            <th scope="col">title</th>
            <th scope="col">body</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <th scope="row">{{post.id}}</th>
            <td>{{post.name}}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostsExample",
  data() {
    return {
      posts: [
        { id: 1, name: "Luca", post: "ciao" },
        { id: 2, name: "Ale", post: "come" },
        { id: 3, name: "Ad", post: "stai" },
        { id: 4, name: "Ren", post: "?" }
      ]
    };
  }
};
</script>
