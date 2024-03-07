<!--event handling Scroll Event-->
<template>
  <div class="scrollable-container" @scroll="handleScroll">
    <div v-for="item in items" :key="item.id" class="item">
      Item {{ item.id }}
    </div>
  </div>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
      items: []
    };
  },
  created() {
    // Generate a long list of elements
    for (let i = 1; i <= 10; i++) {
      this.items.push({ id: i });
    }
  },
  methods: {
    handleScroll(event) {
      // Display an alert indicating the scroll position
      alert('Scroll position: ' + event.target.scrollTop);
    }
  }
}
</script>

<style scoped>
.scrollable-container {
  height: 300px; /* Set height to enable scrolling */
  overflow-y: auto; /* Enable vertical scrolling */
}

.item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>
