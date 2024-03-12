<!--event handling Submit Event-->
<!-- Submit Event: Create a form with an input field and a submit button. When the form is submitted, display an alert with the value entered in the input field. (Work on this after form handling class)  -->


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
