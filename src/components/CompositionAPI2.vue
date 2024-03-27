<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  setup() {
    const message = ref('Hello, Vue!');

    // Lifecycle hook: mounted
    onMounted(() => {
      console.log('Component mounted');
    });

    // Lifecycle hook: unmounted
    onUnmounted(() => {
      console.log('Component unmounted');
    });

    return {
      message
    };
  }
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>