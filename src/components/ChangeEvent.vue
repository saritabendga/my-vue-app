<!--event handling Keydown Event-->
<!-- Change Event: Create a select dropdown with some options. Display an alert whenever the selected option changes. (
@change
="handleSelectChange")-->


<template>
  <div>
    <select @change="handleSelectChange">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
    </select>
  </div>
</template>

<script>
export default{
  name: "App",
  data() {
    return {
    }
  },
methods:{
    handleSelectChange(event) {
      alert('Selected option changed to: ' + event.target.value);
    }
   }
}
</script>
