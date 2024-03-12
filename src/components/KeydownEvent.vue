<!--event handling Keydown Event-->
<!-- Keydown Event: Create an input field. Display an alert whenever a key is pressed inside the input field. (@keydown="handleKeyDown") -->


<template>
   <input type="text" @keydown="handleKeyDown">
</template>

<script>
export default{
  name: "App",
  data() {
    return {
    }
  },
methods:{
  handleKeyDown() {
      alert('Key pressed inside the input field!');
   }
}
}
</script>