<template>
  <div class="container">
      <div class="m-5">
        <h1>Add Customer</h1>
      </div>
    <form v-on:submit.prevent="addCustomer">
      <div class="mb-3">
        <label class="form-label"> Name </label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control"
          v-model="name"
        />
      </div>

      <div className="mb-3">
        <label class="form-label"> Last Name </label>
        <input
          id="user"
          name="user"
          v-model="user"
          type="text"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label"> Email </label>
        <input
          id="email"
          name="email"
          v-model="email"
          type="text"
          class="form-control"
        />
      </div>

      <div class="mb-3">
        <label class="form-label"> Cellphone </label>
        <input
          id="phone"
          name="phone"
          v-model="phone"
          type="number"
          class="form-control"
        />
      </div>

      <div class="d-grid gap-2 col-6 mx-auto">
        <button
          class="btn btn-success btn-sm mb-3"
          v-on:click="addData"
          type="submit"
        >
          Add
        </button>
        <router-link to="/" class="btn btn-warning btn-sm" type="button">
          Delete
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { api } from "@/api/api";

export default {
  name: "CrearProducto",
  components: {},
  data() {
    return {
      name: null,
      user: null,
      email: null,
      phone: null,
    };
  },
  methods: {
    addData(e) {
      e.preventDefault();
      let { name, user, email, phone } = this;
      let data = { name, user, email, phone };
      if (data) {
        this.axios.post(api, data).then((res) => {
          if (res.data) {
            this.$router.push("/");
          }
        });
      }
    },
  },
};
</script>

<style>
</style>