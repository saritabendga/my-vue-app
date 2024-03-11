<!-- ParentComponent.vue -->
<!--  Assignment: Create a simple ShoppingList application with two components.
Parent component that contains list of items. Use array of items as data property within the component.
Child component that represents individual items in the list.
Create prop in the child component to receive item data.
Pass each item from parent to child using props
Implement prop type, default, required                   -->


<template>
  <div>
    <h2>My Shopping List</h2>
    <ul>
      <ListItem v-for="(item, index) in items" :key="index" :item="item" />
    </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'ParentComponent',
  components: {
    ListItem
  },
  data() {
    return {
      items: ['Mushroom', 'Sweetpotato', 'Pineapple', 'Garlic']
    };
  }
};
</script>
html
Copy code
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