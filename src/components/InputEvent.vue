<!--event handling input event-->
<!-- Input Event: Create an input field and a paragraph. Whenever you type something into the input field, display the same text dynamically in the paragraph. (Work on this after v-model class)        -->


<template>
  <div>
    <input @input="updateText" type="text" v-model="inputText" >
    <p>{{ displayText }}</p>
  </div>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
      inputText: '',
      displayText: ''
    }
  },
methods:{
   updateText() {
    this.displayText = this.inputText;
 }
}
}
</script>