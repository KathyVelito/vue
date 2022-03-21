<template>
  <NavBar/>
  <div class="container">
    <h1 class="h1 m-3">Manage Customer</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">IDs</th>
          <th scope="col">Nombre</th>
          <th scope="col">User</th>
          <th scope="col">E-mail</th>
          <th scope="col">Phone</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, id) in data" :key="id">
          <th scope="row">{{ value.id }}</th>
          <td>{{ value.name }}</td>
          <td>{{ value.user }}</td>
          <td>{{ value.email }}</td>
          <td>{{ value.phone }}</td>
          <td>
            <div>
              <router-link
                :to="'/edit/' + value.id"
                class="btn btn-success me-3"
                >Edit</router-link
              >
              <button
                type="button"
                class="btn btn-danger"
                v-on:click="deleteData(value.id)"
              >
                Delete
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
import NavBar from '@/components/NavBar.vue'

export default {
  name: "HomeView",
  components: {
    NavBar
  },
  data() {
    return {
      data : null
    };
  },

  mounted() {
    this.axios.get(api).then((res) => {
      if (res.data) {
        this.data = res.data;
      }
    });
  },

  methods: {
    deleteData(id) {
      if (id) {
        this.axios.delete(`${api}/${id}`).then((res) => {
          if (res.data) {
            let newArr = this.data.filter((el) => el.id !== id);
            this.data = newArr;
          }
        });
      }
    },
  },
};
</script>
