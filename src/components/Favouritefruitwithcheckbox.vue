<template>
  <div>
    <h2>Choose your favorite fruits:</h2>
    <label>
      <input type="checkbox" v-model="selectedFruits" value="Orange">
      Orange
    </label>
    <label>
      <input type="checkbox" v-model="selectedFruits" value="Pineapple">
      Pineapple
    </label>
    <label>
      <input type="checkbox" v-model="selectedFruits" value="Pomogranate">
      Pomogranate
    </label>
    <p>Your favorite fruits are: {{ selectedFruits }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFruits:[]  // Initialize selectedFruits as an empty array
    }
  }
}
</script>



<style scoped>
h2 {
  font-size: 20px;
  color: #333;
}

label {
  display: block;
  margin-bottom: 10px;
  color: black;
}

input[type="checkbox"] {
  margin-right: 5px;
}

p {
  margin-top: 10px;
  font-style: bold;
  color: red;
}
</style>