<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>Search: <input type="text" v-model="searchTerm"></p>
    <div v-for="product in filterBy(products, searchTerm,'name', 'price', 'description')">
      <!-- <p>Name: <input type="text" v-model="newProductName"></p>
      <p>Price: <input type="text" v-model="newProductPrice"></p>
      <p>Description: <input type="text" v-model="newProductDescription"></p> -->
      <!-- <button v-on:click="createProduct()">Create Product</button> -->
      <!-- <div v-for="product in products"> -->
        <hr>
        <p>title: {{product.name}}</p>
        <p>price: {{product.price}}</p>
        <p>description: {{product.description}}</p>
      <!-- </div> -->
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      products: [],
      newProductName: "",
      newProductPrice: "",
      newProductDescription: "",
      searchTerm: ""
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
      var createNewProduct = {
        name: this.newProductName,
        price: this.newProductPrice,
        description: this.newProductDescription

      };
      //Send user input to the api
      axios.post('/api/product', createNewProduct).then(response => {
        console.log("does this work");
        // console.log(response.data);
        this.products.push(response.data);
      });
    }
  }
};
</script>
