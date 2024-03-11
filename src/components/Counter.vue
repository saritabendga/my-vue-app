<!-- Counter.vue -->
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