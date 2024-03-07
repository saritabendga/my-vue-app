<<<<<<< HEAD
//Create a Vue component that renders a list of items conditionally using v-if and iteratively using v-for. Use data from the Vue instance to dynamically render the list items.
//Create a Vue component with a toggle button. Use v-if to conditionally render different components based on the toggle state.


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
=======
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

   
>>>>>>> 7a45f0ca9ca2bf2656f34602263cf981fcd91201
