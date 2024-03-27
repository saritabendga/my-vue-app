<template>
<h1>Store</h1>
<h1> {{count}} </h1>
</template>

<script>
export default {
  name : 'compOne'
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  }
}
</script>