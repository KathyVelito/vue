<template>
  <div class="hello">
    <h1 class="text-red-800">CountDown</h1>
    <CounterApp/>
    <CalculatorApp/>
  </div>
</template>

<script>
  import CounterApp from '../components/CounterApp.vue'
  import CalculatorApp from "../components/CalculatorApp.vue"

  export default {
    components: {
      CounterApp,
      CalculatorApp
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
