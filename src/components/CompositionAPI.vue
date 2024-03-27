<template>
  <button @click="increment">{{ count }}</button>
</template>

<script>
import {ref} from 'vue';

export default {
  setup() {
    //define reactive state
    const count = ref(0);

    //define method
    function increment() {
      count.value++;
    }
    //expose reactive state and method to template
    return{
      count,
      increment
    };
  }

};
</script>