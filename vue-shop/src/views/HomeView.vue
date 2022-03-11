<template>
  <NavBar/>
  <HeroBanner/>
  <ProductList/>

  <div class="container h-100">
    <div class="row p-5 h-100 justify-content-center align-items-center">
      <div class="col-md-6">
        <img src="../assets/pngwing.png" alt="" width="400">
      </div>
      <div class="col-md-5">
        <h3>Learn More About us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quaerat voluptate iusto? Nihil voluptas vitae veritatis magnam reprehenderit, reiciendis ex? Libero quasi natus veniam voluptatum, voluptas exercitationem ratione consectetur et!
        </p>
          <button class="btn custom-btn btn-outline-primary mr-4">Browse Products</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/sections/NavBar.vue";
import HeroBanner from "@/sections/HeroBaner.vue";
import ProductList from "@/sections/ProductList.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeroBanner,
    ProductList,
  },
};
</script>
