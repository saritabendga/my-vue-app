<!--event handling click event-->
<template>
  <div>
    <p>Current value is {{ value }}</p>
    <button @click="toggleValue">Toggle Value</button>
  </div>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
      value: true
    }
  },
methods:{
    toggleValue() {
     this.value = !this.value;
 }
}
}
</script>