<template>
<h1>Store</h1>
<h1> {{count}} </h1>
</template>

<script>
export default {
  data() {
    return{
    }
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  }
}
</script>