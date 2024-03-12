<template>
  <div id="app">
    <div v-highlight="highlightColor1">
      Hover over me to highlight in {{ highlightColor1 }}!
    </div>
    <div v-highlight="highlightColor2">
      Hover over me to highlight in {{ highlightColor2 }}!
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      highlightColor1: 'yellow',
      highlightColor2: 'lightblue'
    };
  },
  directives: {
    highlight: {
      bind(el, binding) {
        el.style.transition = 'background-color 0.3s';
        el.addEventListener('mouseenter', () => {
          el.style.backgroundColor = binding.expression;
        });
        el.addEventListener('mouseleave', () => {
          el.style.backgroundColor = null;
        });
      }
    }
  }
};
</script>