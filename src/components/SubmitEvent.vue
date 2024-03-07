<!--event handling Submit Event-->
<template>
     <form @submit.prevent="handleSubmit">
    <label for="inputField">Enter a value:</label>
    <input id="inputField" type="text" v-model="inputValue">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
       inputValue: ''
    }
  },
methods:{
   handleSubmit() {
    alert('Submitted value: ' + this.inputValue);
   }
}
}
</script>
