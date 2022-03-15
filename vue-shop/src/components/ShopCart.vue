<template>
  <div class="">
    <div class="dropdown">
      <button
        class="btn btn-danger dropdown-toggle"
        type="button"
        id="cesta"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>Cesta</span>
        <span class="badge bg-primary ms-3">4</span>
      </button>
       <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><router-link to="/orders">Ir a la Cesta</router-link></li>
  </ul>
    </div>
  </div>
</template>

<script>
//import { api } from '@/api/api'
 
export default {
  name: "ShopCart",
  components: {
  },

};
</script>

<style>
</style>