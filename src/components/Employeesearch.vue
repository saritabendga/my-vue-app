<template>
  <div>
           Employee Search
    <br/>
    <input v-my-search="search" type="text" v-model="search" placeholder="Search an employee" />
    <br/>
    <div v-for="employee in searchResult" :key="employee">
      <p :style="{ color: inputColor, fontSize: fontSize }">{{ employee }}</p>
    </div>
    <div class="errorMsg" v-if="search && searchResult.length <= 0">
      <div>No Results found</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employees: ["John", "Alex", "Steve", "Lisa", "Jack"],
      search: '',
      inputColor: 'red',
      fontSize: '10px' // Added fontSize data property
    }
  },
  computed: {
    searchResult() {
      return this.employees.filter(employee => {
        return employee.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  directives: {
    'my-search': {
      beforeMount(el) { // Removed the unused 'binding' parameter
        el.style.color = 'red';
        el.style.fontSize = '10px'
      },
      updated(el) { // Removed the unused 'binding' parameter
        el.style.color = 'blue';
        el.style.fontSize = '20px';
      },
    }
  }
}
</script>

<style scoped>

div {
  margin-bottom: 20px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.errorMsg {
  color: red;
  font-size: 14px;
}

p {
  margin: 5px 0;
}

.blue-text {
  color: blue;
}

.red-text {
  color: red;
}

.green-bg {
  background-color: lightgreen;
}
</style>>