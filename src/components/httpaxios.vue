<template>
     <h1>Example</h1>
     <button @click="fetchData">Fetch data</button>
     <pre v-if="data">{{ data }}</pre>
</template>
 
 
 <script>
 
 import axios from 'axios'
 export default {
       data() {
          return {
           data: null,
}
},
mounted () {
axios
.get('https://random-data-api.com/api/v2/users ')
.then(response => (this.data = response))
}
};
</script>