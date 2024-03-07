<!--event handling 2nd program-->
<template>
  <div>
    <p>Current value is {{ counter }}</p>
    <button @click="incrementCount(1)">Increment by One</button>
    <button v-on:click="decrementCount(1)">Decrement by One</button>
    <button @click="incrementCount(5)">Increment by Five</button>
    <button v-on:click="decrementCount(5)">Decrement by Five</button>
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
  incrementCount(num) {
    return this.counter +=num;
  },
  decrementCount(num) {
    
    return this.counter -=num;
  }
 }
}
</script>