<!--method-->

<template>
  <p>Sum of numbers is {{ calculateSum() }} </p>
  <p>Sum of numbers with params is {{ calculateSumWithParams(45,57) }}</p>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
      num1: 5,
      num2: 15
    }
  },
methods:{
  calculateSum: function() {
    return this.num1 + this.num2
  },
 calculateSumWithParams(num1,num2) {
  return num1+num2
  }
 }

}

  </script>