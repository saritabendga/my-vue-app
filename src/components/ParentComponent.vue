<!-- ParentComponent.vue -->
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