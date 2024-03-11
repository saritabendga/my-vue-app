<!-- ListItem.vue -->
<!--  Assignment: Create a simple ShoppingList application with two components.
Parent component that contains list of items. Use array of items as data property within the component.
Child component that represents individual items in the list.
Create prop in the child component to receive item data.
Pass each item from parent to child using props
Implement prop type, default, required                   -->

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