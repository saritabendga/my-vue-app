<!--event handling Blur Event-->
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
