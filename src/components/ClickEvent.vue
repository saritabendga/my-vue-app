<!--event handling click event-->
<!-- Click Event: Create a button that toggles a boolean value between true and false when clicked. Display the value on the screen. (@click="toggleValue")   -->


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