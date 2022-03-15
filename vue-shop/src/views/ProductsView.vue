<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="row">
        <div v-for="(value, index) in data" :key="index" class="card col-3 m-4">
          <img :src="value.prod_imagen" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ value.prod_nombre }}</h5>
            <p class="card-text">
              {{ value.prod_description }}
            </p>
            <div>
              <span>
               S/. {{value.prod_precio}}
              </span>
            </div>
            <a href="#" class="btn btn-primary" @click="alert('Añadido a la cesta')">Agregar a Carrito</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/sections/NavBar.vue";
import { api } from "@/api/api";
export default {
  name: "ProductsView",
  components: {
    NavBar,
  },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.axios.get(api).then((res) => {
      if (res.data) {
        this.data = res.data;
      }
    });
  },
};
</script>

<style>
</style>