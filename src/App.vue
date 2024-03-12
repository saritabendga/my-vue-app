<template>
  <div>
    <h2 v-highlight="'yellow'">Hover over me to highlight in yellow!</h2>
    <p v-highlight="'lightblue'">Hover over me to highlight in light blue!</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  directives: {
    highlight: {
      bind(el, binding) {
        console.log('Directive bound:', binding.value); // Log the value passed to the directive
        el.addEventListener('mouseenter', () => {
          console.log('Mouse entered');
          el.style.backgroundColor = binding.value;
        });
        el.addEventListener('mouseleave', () => {
          console.log('Mouse left');
          el.style.backgroundColor = 'transparent';
        });
      }
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>