<template>
  <div class="cue">
    <h2>Enter Your Details:</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="formData.name" @input="validateName">
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" @input="validateEmail">
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>
      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" v-model="formData.city" @input="validateCity">
        <span v-if="errors.city" class="error">{{ errors.city }}</span>
      </div>
      <div class="form-group">
        <label>Gender:</label>
        <div class="radio-group">
          <input type="radio" id="male" value="male" v-model="formData.gender">
          <label for="male">Male</label>
          <input type="radio" id="female" value="female" v-model="formData.gender">
          <label for="female">Female</label>
        </div>
      </div>
      <div class="form-group">
        <input type="checkbox" id="age" v-model="formData.over35">
        <label for="age">Age greater than 35</label>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div v-if="submitted" class="submitted-data">
      <h2>Submitted Form Data:</h2>
      <p><strong>Name:</strong> {{ formData.name }}</p>
      <p><strong>Email:</strong> {{ formData.email }}</p>
      <p><strong>City:</strong> {{ formData.city }}</p>
      <p><strong>Gender:</strong> {{ formData.gender }}</p>
      <p v-if="formData.over35"><strong>Age greater than 35</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        city: '',
        gender: '',
        over35: false
      },
      submitted: false,
      errors: {}
    };
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        this.submitted = true;
      }
    },
    validateName() {
      if (!this.formData.name) {
        this.errors.name = 'Name is required';
      } else {
        delete this.errors.name;
      }
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.formData.email) {
        this.errors.email = 'Email is required';
      } else if (!emailPattern.test(this.formData.email)) {
        this.errors.email = 'Invalid email format';
      } else {
        delete this.errors.email;
      }
    },
    validateCity() {
      if (!this.formData.city) {
        this.errors.city = 'City is required';
      } else {
        delete this.errors.city;
      }
    },
    validateForm() {
      this.errors = {};
      this.validateName();
      this.validateEmail();
      this.validateCity();
      return Object.keys(this.errors).length === 0;
    }
  }
};
</script>

<style scoped>
.cue {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.radio-group input[type="radio"] {
  margin-right: 5px;
}

.submit-btn {
  background-color: #007bffbla;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.submitted-data {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
}

.error {
  color: red;
}
</style>