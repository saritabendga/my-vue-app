<!--event handling-->
<template>
  <div>
    <p>Current value is {{ counter }}</p>
    <button @click="incrementCount">Increment</button>
    &nbsp;
    <button v-on:click="decrementCount">Decrement</button>
  </div>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
      counter: 0
    }
  },
methods:{
  incrementCount() {
    this.counter++
  },
  decrementCount() {
    this.counter--
  }
 }
}
</script>