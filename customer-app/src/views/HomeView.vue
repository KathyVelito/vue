<template>
  <div class="home">
    <h1>Manage Customer</h1>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data () {
    return {
      api_key: 'https://jsonplaceholder.typicode.com/users',
      customers: []
    }
  },
  methods: {
    fetchCustomers () {
      this.$http.get('')
      .then(function(response){
        this.customers = JSON.parse(response.body);
      });
    }
  },
  created: function() {
    this.fetchCustomers();
  },
  components: {
  }
}
</script>
