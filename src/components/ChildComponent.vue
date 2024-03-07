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