<template>
  <div>
    <button @click="showChild">Show Child Component</button>
    <ChildComponent @custom-event="handleCustomEvent"></ChildComponent>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: {
    ChildComponent
  },
  methods: {
    handleCustomEvent() {
      alert('Custom event emitted from child component!');
    },
    showChild() {
      // Method to show the child component if needed
    }
  }
}
</script>
