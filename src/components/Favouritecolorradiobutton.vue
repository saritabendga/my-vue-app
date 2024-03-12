<template>
  <div>
    <h2>Choose your favorite color:</h2>
    <label>
      <input type="radio" v-model="selectedColor" value="red">
      Red
    </label>
    <label>
      <input type="radio" v-model="selectedColor" value="blue">
      Blue
    </label>
    <label>
      <input type="radio" v-model="selectedColor" value="green">
      Green
    </label>
    <p>Your favorite color is: {{ selectedColor }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedColor: '' // Initialize selectedColor to store the selected value
    }
  }
}
</script>