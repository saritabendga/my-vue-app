<!--event handling Double Click Event-->     
<!-- Double Click Event: Create a button. When the button is double-clicked, change its background color. (@dblclick="changeBackgroundColor")-->


<template>
  <div>
    <button @dblclick="changeBGColor">Double-click me!</button>
  </div>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
    }
  },
  methods: {
    changeBGColor(event) {
      event.target.style.backgroundColor = 'red'; // Change background color to blue
    }
  }
}
</script>