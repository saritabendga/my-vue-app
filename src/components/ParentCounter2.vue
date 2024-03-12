<!-- ParentCounter.vue -->


<template>
  <div>
    <Counter :counter.sync="parentCounter" />
    <p>Parent Counter: {{ parentCounter }}</p>
  </div>
</template>

<script>
import Counter from './Counter.vue';

export default {
  components: {
    Counter
  },
  data() {
    return {
      parentCounter: 0
    };
  }
};
</script>