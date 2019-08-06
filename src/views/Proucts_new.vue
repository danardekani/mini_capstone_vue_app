<template>
  <div class="home">
    <h1>{{ message }}</h1>
  <p>Complete the fields below to create a new product.</p>
  <p>name: <input type="text" v-model="newPrdoductName"></p>
  <p>description: <input type="text" v-model="newProductDescription"></p>
  <p>price: <input type="text" v-model="newProductPrice"></p>
  <button v-on:click="createProduct()">Create</button>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      products: [],
      newPrdoductName: "",
      newProductPrice: "",
      newProductDescription: "",
      message: "Welcome to Products!!"
    };
  },
  created: function() {
    console.log("test");
    axios.get("/api/products").then(response => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {
    createProduct: function() {
      console.log("this is a test");

      var createNewProduct = {
        name: this.newPrdoductName,
        description: this.newProductDescription,
        price: this.newProductPrice
      };
      axios.post("/api/product", createNewProduct).then(response => {
        this.products.push(response.data);
      });
    }
  }
};
</script>