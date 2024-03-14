<script>
 import axios from 'axios'
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
  mounted() {
    this.getEmployeeData(); // Call the GET method when the component is mounted
  },
  methods: {
    getEmployeeData() {
      fetch('http://localhost:8081/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Employee data retrieved successfully:', data);
        // Handle the retrieved data as needed
      })
      .catch(error => {
        console.error('There was a problem retrieving employee data:', error.message);
      });
    },
    submitForm() {
      if (this.validateForm()) {
        this.postFormData();
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
    },
    postFormData() {
      fetch('hhttp://localhost:8081/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formData),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Form data posted successfully:', data);
        this.submitted = true;
      })
      .catch(error => {
        console.error('There was a problem posting the form data:', error.message);
      });

      // If you prefer Axios, you can use the following code instead
      // axios.post('http://localhost:8081/', this.formData)
      // .then(response => {
      //   console.log('Form data posted successfully:', response.data);
      //   this.submitted = true;
      // })
      // .catch(error => {
      //   console.error('There was a problem posting the form data:', error.message);
      // });
    }
  }
};
</script>