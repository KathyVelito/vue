<template>
  <div class="container">
    <h1 class="h1 m-3">Lista de productos</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Descripción</th>
          <th scope="col">Stock</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in data" :key="index">
          <th scope="row">{{ value.id }}</th>
          <td>{{ value.prod_nombre }}</td>
          <td>{{ value.prod_precio }}</td>
          <td>{{ value.prod_description }}</td>
          <td>{{ value.prod_stock }}</td>
          <td>
            <div>
              <router-link :to="'/editar/'+value.id" class="btn btn-success me-3">Editar</router-link>
              <button
                type="button"
                class="btn btn-danger"
                v-on:click="deleteData(value.id)"
              >
                Borrar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { api } from '@/api/api'
export default {
  name: "ListarProducto",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.axios.get(api).then((res) => {
      if(res.data) {
        this.data = res.data
      }
    })
  },
  methods: {
    deleteData (id) {
      if(id) {
        this.axios.delete(`${api}/${id}`).then(res => {
          if(res.data){
            let newArr = this.data.filter(el => el.id !== id)
            this.data = newArr
          }
        })
      }
    }
  }

   
};
</script>

<style>
</style>