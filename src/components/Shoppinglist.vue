<template>
<form id="shopping-list">
  <h2>Shopping List</h2>
  <table id="shopping-list-table" class="table table-condensed table-hover">
    <thead>
      <tr>
        <th>Quantity</th>
        <th>Item</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tr v-for="(item, index) in itemsList" :key="item.id">
      <td>
        <span v-show="!item.inEditMode">{{ item.quantity }}</span>
        <input type="number" v-bind:placeholder="item.quantity" v-show="item.inEditMode" v-model="item.quantity" /> 
      </td>
      <td>
        <span v-show="!item.inEditMode">{{ item.itemName }}</span>
        <input v-bind:placeholder="item.itemName" v-show="item.inEditMode" v-model="item.itemName" />
      </td>
      <td>
        <button type="button" class="btn btn-success" v-show="item.inEditMode" @click="editItemComplete(item)">
          <i class="fa fa-save"></i> Save
        </button>
        <button type="button" class="btn btn-info" v-show="!item.inEditMode" @click="editItem(item)">
          <i class="fa fa-edit"></i> Edit
        </button>
        <button type="button" class="btn btn-danger" @click="removeItem(index)">
          <i class="fa fa-remove"></i> Delete
        </button>
      </td>
    </tr>
  </table>

  <h4>Add new item</h4>
  <div class="row col-md-6">
    <div class="col-md-6 form-group">
      Quantity
      <input type="number" v-model="quantity" class="checkbox" autofocus>
    </div>
    <div class="col-md-6 form-group">
      Name
      <input type="text" v-model="itemName" class="checkbox">
    </div>

    <button type="button" @click="addItem" class="btn btn-primary">
      <i class="fa fa-plus"></i> Add
    </button>
  </div>
</form>
</template>

<script>
export default {
  data() {
    return {
      itemsList: [], // Initialize itemsList as an empty array
      quantity: '',
      itemName: ''
    }
  },
  methods: {
    addItem() {
      if (this.quantity && this.itemName) {
        const newItem = {
          quantity: this.quantity,
          itemName: this.itemName,
          id: Date.now() 
        };

        this.itemsList.push(newItem);
        this.quantity = '';
        this.itemName = '';
      } else {
        alert('Please provide both quantity and item name.');
      }
    },
  }
}
</script>