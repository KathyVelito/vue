<template>
  <div id="app">
    <h1>Quiz App</h1>
    <OperatorQuiz @onBack="clearOperator" v-if="operator" :operator="operator" />
    <OperatorSelector v-if="!operator" @changeOperator="changeOperator" />
  </div>
</template>

<script>
import OperatorSelector from "./components/OperatorSelector.vue"
import OperatorQuiz from "./components/OperatorQuiz.vue"
export default {
  name: 'app',
  data() {
    return{
      operator: null
    }
  },
  methods: {
    changeOperator(operator) {
      this.operator = operator;
    },
    clearOperator() {
      this.operator = null;
    }
  },
  components: {
    OperatorSelector,
    OperatorQuiz
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: rgb(86, 194, 202);
  color: rgb(9, 39, 39);
  margin-right: 10px;
  padding: 10px;
}
</style>
