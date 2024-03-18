<template>
   <h1> Dynamic component </h1>
   <p>App.vue switches between which component to show.</p>
<button @click="toggleValue = !toggleValue">
Switch component
</button> 
<component :is="activeComp"></component>
</template>

<script>
export default {
data () {
return {
toggleValue: true
}
},
computed: {
   activeComp() {
   if(this.toggleValue) {
     return 'comp-one'
}
else {
   return 'comp-two'
}
}
}
}
</script>