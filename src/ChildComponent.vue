
<!--Custom Event: Create a parent component with a button. Create a child component that emits a custom event when its button is clicked. Display an alert in the parent component when the custom event is emitted. (Work on this after custom events class) -->

<template>
  <div>
    <button @click="emitCustomEvent">Click me to emit custom event</button>
  </div>
</template>

<script>
export default {
  methods: {
    emitCustomEvent() {
      this.$emit('custom-event');
    }
  }
}
</script>