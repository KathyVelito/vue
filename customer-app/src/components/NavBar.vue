<template>
  <div class="d-grid gap-10">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Employend</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link active">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-end">
              <button type="button" class="btn btn-outline-secondary">
                <router-link to="/add" class="nav-link">Add</router-link>
              </button>
            </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  components: {},
};
</script>

<style>
</style>