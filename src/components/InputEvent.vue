<!--event handling input event-->
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