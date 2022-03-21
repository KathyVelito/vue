<template>
  <div class="container">
    <form v-on:submit.prevent="editCustomer">
      <h1>Edit Customer</h1>
      <div class="mb-3">
        <label class="form-label" for="nombre"> Name </label>
        <input
          name="name"
          type="text"
          class="form-control"
          v-model="name"
        />
      </div>

      <div className="mb-3">
        <label class="form-label" for="description">
          User
        </label>
        <input
          name="user"
          v-model="user"
          type="text"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="precio"> Email </label>
        <input
          name="email"
          v-model="email"
          type="mail"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label" for="stock"> Cellphone </label>
        <input
          name="phone"
          v-model="phone"
          type="text"
          class="form-control"
        />
      </div>

      <div class="d-grid col-md-8">
        <router-link to="/" v-on:click="saveData" class="btn btn-success btn-sm" type="button">
          Modify
        </router-link>
        <router-link to="/listar" class="btn btn-warning btn-sm" type="button">
          Cancel
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import{ api } from '@/api/api'

export default {
  name: "EditCustomer",
  data() {
      return {
        id:null,
        name:null,
        user:null,
        email:null,
        phone:null,
      }
  },

  mounted() {
    let { id } = this.$route.params
    if (id) {
      this.axios.get(`${api}/${id}`).then(res => {
        if(res.data){
          this.name = res.data.name,
          this.user = res.data.user,
          this.email = res.data.email,
          this.phone = res.data.phone,
          this.id = res.data.id
        }
      })
    }
  },
  methods: {
    saveData() {
      let data = {
        name: this.name,
        user: this.user,
        email: this.email,
        phone: this.phone
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