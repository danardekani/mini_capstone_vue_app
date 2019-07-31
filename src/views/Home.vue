<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Name: <input type="text" name="newPrductName"></p>
    <p>Price: <input type="text" name="newPrductPrice"></p>
    <p>Description: <input type="text" name="newProductDescription"></p>
    <button v-on:click="createProduct()">Create Product</button>
    <div v-for="product in products">
      <hr>
      <p>title: {{product}}</p>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      products: [],
      newPrductName: "",
      newProductPrice: "",
      newProductDescription: "",
    };
  },
  created: function() {
    console.log("I am created");
    axios.get("/api/products").then(response => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  //Create method to capture new product
  methods: {
    createProduct: function() {
      console.log("hello, can you hear me!?!?");

      
      //Capture user input
      var createProduct = {
        Name: this.newProductName,
        Price: this.newProductPrice,
        Description: this.newProductDescription

      }
      //Send user input to the api
      axios.post('/api/product', createProduct).then(response => {
        console.log("does this work")

      });
    }
  }
};
</script>
