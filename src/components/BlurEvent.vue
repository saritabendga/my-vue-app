<!--event handling Blur Event-->
<!-- Blur Event: Create an input field. Display an alert when the input field loses focus. (@blur="handleBlur") -->


<template>
  <div>
    <input type="text" @focus="handleFocus" @blur="handleBlur">
  </div>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
    }
  },
methods:{
     handleFocus() {
      alert('Input field is focused!');
    },
    handleBlur() {
      alert('Input field lost focus!');
    }
   }
}
</script>
