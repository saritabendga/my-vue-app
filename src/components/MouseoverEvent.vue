<!--event handling Mouseover Event-->
<!--Create a div element with some text inside it. When you hover over the div, change the text color to red. (@mouseover="changeTextColor")    -->



<template>
   <div :style="{ color: textColor }" @mouseover="changeTextColor('red')" @mouseout="changeTextColor('black')">
    Hover over to change color
  </div>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
      textColor: 'black'
    }
  },
methods:{
   changeTextColor(color) {
      this.textColor = color;
   }
}
}
</script>
