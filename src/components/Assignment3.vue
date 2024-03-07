<template>
	  <div>
			<p  v-if="showItems">Conditionally Rendered Item </p>
			<p v-for="(item, index) in items" :key="index">{{ item }} </p>
		</div>
	

   <h2>Toggle Component</h2>
    <button @click="toggleComponent">Toggle Component</button>
    
    <!-- Conditional rendering based on toggle state -->
    <div v-if="toggleState">
      <p>A</p>
    </div>
    <div v-else>
      <p> B</p>
    </div>
  </div>
  </template>

	<script>
	export default {
		name:"App",
		data() {
			return {
				showItems: true,
        items: ['A', 'B', 'C'],
        toggleState: true
			},
      methods: {
        toggleComponent() {
          this.toggleState = !this.toggleState;
        }
      }
			}
	}
	</script>

   