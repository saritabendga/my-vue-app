<template>
 <div >
  <router-link to="/home" >Home</router-link>
  &nbsp;
  <router-link to="/products" >Products</router-link>
  &nbsp;
  <router-link to="/contact" >Contacts</router-link>

  <router-view></router-view>
 </div>
   
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  height: 100vh; 
  margin: 0 auto; 
}

.nav-link {
  text-decoration: none;
  color: blue;
  margin: 10px;
}

.nav-link:hover {
  color: darkblue;
}
</style>