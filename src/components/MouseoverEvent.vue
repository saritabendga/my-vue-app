<!--event handling Mouseover Event-->
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
