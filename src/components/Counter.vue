<!-- Counter.vue -->
<!-- Assignment2 :  Create a counter component that increments a value when a button is clicked.Use an event to emit the updated value to parent component -->

<template>
  <div>
    <p>Counter Value: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
      this.$emit('update:counter', this.counter);
    }
  }
};
</script>