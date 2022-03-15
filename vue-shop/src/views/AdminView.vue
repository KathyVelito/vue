<template>
<NavBar/>
<div class="mt-5">
  <div class="row">
    <div class="col-3">
    <a
      class="btn btn-primary"
      data-bs-toggle="offcanvas"
      href="#menu"
      role="button"
      aria-controls="menu"
    >
      Menu
    </a>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="menu" aria-labelledby="menuLabel">
      <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Administración</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
      <ul class="nav flex-column nav-tabs">
      <li class="nav-item">
        <router-link class="" to="/crear">crear</router-link>
      </li>
      <li>
        <router-link class="-" to="/listar">listar</router-link>
      </li>
      <li>
        <button class="btn-danger" @click="logout">Sign out</button>
      </li>
    </ul>
    </div>
    
  </div>
  </div>
</div>
  
</template>

<script>
import NavBar from '@/sections/NavBar.vue'
import { useStore } from "vuex";

export default {
  name: "AdminView",
  components: {
    NavBar
  },
  setup() {
    const store = useStore();
    const logout = () => {
      store.dispatch("logout");
    };
    return {
      logout,
    };
  },
};
</script>