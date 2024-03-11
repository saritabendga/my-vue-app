<!-- ListItem.vue -->
<template>
  <li>{{ item }}</li>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: String,
      required: true
    }
  }
};
</script>