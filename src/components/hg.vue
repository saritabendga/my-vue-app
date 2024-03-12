<template>
  <div v-highlight="'yellow'">Hover over me to highlight!</div>
</template>

<script>
export default {
  name: 'App',
  directives: {
    highlight: {
      bind(el, binding) {
        el.style.transition = 'background-color 0.3s';
        el.addEventListener('mouseenter', () => {
          el.style.backgroundColor = binding.value;
        });
        el.addEventListener('mouseleave', () => {
          el.style.backgroundColor = null;
        });
      }
    }
  }
};
</script>