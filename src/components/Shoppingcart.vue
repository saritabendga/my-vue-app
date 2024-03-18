<template>
  <div class="cart-container">
    <h2>Shopping Cart</h2>
    <div v-for="item in items" :key="item.id" class="item">
      <input type="checkbox" v-model="selectedItems" :value="item" :id="'item-' + item.id">
      <label :for="'item-' + item.id" class="checkbox-label">{{ item.name }} - ${{ item.price }}</label>
      <select v-model="selectedQuantities[item.id]" class="select-dropdown">
        <option v-for="quantity in quantities" :key="quantity">{{ quantity }}</option>
      </select>
    </div>
    <button @click="calculateTotal">Calculate Total</button>
    <div v-if="totalPrice > 500">
      <p class="total-price">Total Price: ${{ totalPrice }}</p>
      <button @click="applyDiscount" class="discount-button">Apply 10% Discount</button>
    </div>
    <div v-else>
      <p class="total-price">Total Price: ${{ totalPrice }}</p>
    </div>
    <button @click="proceedToCheckout" :disabled="!canProceedToCheckout">Proceed to Checkout</button>

    <!-- Checkout Form -->
    <div v-if="showCheckoutForm" class="checkout-form">
      <h2>Checkout</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" v-model="formData.cardNumber" required>
        </div>
        <div class="form-group">
          <label for="cvv">CVV:</label>
          <input type="text" id="cvv" v-model="formData.cvv" required>
        </div>
        <button type="submit" :disabled="!isFormValid">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1', price: 100 },
        { id: 2, name: 'Item 2', price: 200 },
        { id: 3, name: 'Item 3', price: 300 }
      ],
      quantities: [1, 2, 3, 4, 5],
      selectedItems: [],
      selectedQuantities: {},
      totalPrice: 0,
      showDiscountOption: false,
      showCheckoutForm: false,
      formData: {
        name: '',
        cardNumber: '',
        cvv: ''
      }
    };
  },
  computed: {
  canProceedToCheckout() {
    if (this.discountApplied) {
      return this.totalPrice <= 500 && this.totalPrice > 0;
    } else {
      return this.totalPrice > 0;
    }
  }
  },
  isFormValid() {
      console.log('Validating form');
      return this.formData.name && this.formData.cardNumber && this.formData.cvv;
  },
  methods: {
    calculateTotal() {
      let total = 0;
      for (const item of this.selectedItems) {
        total += item.price * this.selectedQuantities[item.id];
      }
      this.totalPrice = total;
      this.showDiscountOption = this.totalPrice > 500;
    },
    applyDiscount() {
      this.totalPrice *= 0.9; // Apply 10% discount
      this.showDiscountOption = false;
    },
    proceedToCheckout() {
      this.showCheckoutForm = true;
    },
    
    submitForm() {
  if (this.isFormValid) {
    console.log('Submitting form');
    console.log('Form submitted:', this.formData);
    this.formData = {
      name: '',
      cardNumber: '',
      cvv: ''
    };
    this.showCheckoutForm = false;
    // this.$router.push('/thank-you-page');
  } else {
    console.error('Form submission failed. Please fill in all required fields.');
  }
}
  }
};
</script>

<style scoped>
.cart-container {
  max-width: 600px;
  margin: auto;
}

.item {
  margin-bottom: 10px;
}

.checkbox-label {
  margin-left: 5px;
}

.select-dropdown {
  margin-left: 10px;
}

.total-price {
  margin-top: 10px;
}

.discount-button {
  margin-top: 10px;
}

.checkout-form {
  margin-top: 20px;
}

.form-group {
  margin-bottom: 10px;
}
</style>