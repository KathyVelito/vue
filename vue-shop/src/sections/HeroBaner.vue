<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 w-100 justify-content-between align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Vue Shop For Developers
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </p>
                <div class="mt-5">
                    <button class="btn custom-btn btn-info me-3">Explore</button>
                    <button class="btn custom-btn btn-outline-secondary">Products</button>
                </div>
              </div>
            </div>
            <div class="col-md-6">
                <div class="bg-danger">
                    <img
                    src="@/assets/pngwing.png"
                    class="w-100">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "HeroBanner",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }
</style>