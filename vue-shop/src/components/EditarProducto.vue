<template>
  <div class="container">
    <form v-on:submit.prevent="actualizarProducto">
      <div class="mb-3">
        <label class="form-label" for="prod_nombre"> Nombre Producto </label>
        <input
          name="prod_nombre"
          type="text"
          class="form-control"
          v-model="prod_nombre"
        />
      </div>

      <div className="mb-3">
        <label class="form-label" for="prod_description">
          Descripción Producto
        </label>
        <input
          name="prod_description"
          v-model="prod_description"
          type="text"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="prod_precio"> Precio Producto </label>
        <input
          name="prod_precio"
          v-model="prod_precio"
          type="number"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="prod_stock"> Stock Producto </label>
        <input
          name="prod_stock"
          v-model="prod_stock"
          type="number"
          class="form-control"
        />
      </div>

      <div class="form-check mb-3">
        <input
          type="checkbox"
          class="form-check-input"
          v-model="prod_oferta"
        />
        <label class="form-check-label"> Ofertar Producto </label>
      </div>

      <div class="mb-3">
        <label class="form-label">Imagen</label>
        <input type="file" class="form-control" />
      </div>

      <div class="d-grid col-md-8">
        <router-link to="/listar" v-on:click="saveData" class="btn btn-success btn-sm" type="button">
          Modificar
        </router-link>
        <router-link to="/listar" class="btn btn-warning btn-sm" type="button">
          Cancelar
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import{ api } from '@/api/api'

export default {
  name: "EditarProducto",
  data() {
      return {
        id:null,
        prod_nombre:null,
        prod_description:null,
        prod_precio:null,
        prod_stock:null,
        prod_oferta: false
      }
  },

  mounted() {
    let { id } = this.$route.params
    if (id) {
      this.axios.get(`${api}/${id}`).then(res => {
        if(res.data){
          this.prod_nombre = res.data.prod_nombre,
          this.prod_description = res.data.prod_description,
          this.prod_precio = res.data.prod_precio,
          this.prod_stock = res.data.prod_stock,
          this.prod_oferta = res.data.prod_oferta,
          this.id = res.data.id
        }
      })
    }
  },
  methods: {
    saveData() {
      let data = {
        prod_nombre: this.prod_nombre,
        prod_description: this.prod_description,
        prod_precio: this.prod_precio,
        prod_stock: this.prod_stock,
        prod_oferta: this.prod_oferta
      }
      if (data) {
        this.axios.put(`${api}/${this.id}`, data).then( res=> {
          if(res.data){
            this.$router.push('/')
          }
        })
      }
    }
  }
};
</script>

<style>
</style>