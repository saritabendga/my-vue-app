<!--event handling Keydown Event-->
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