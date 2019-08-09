<template>
  <div class="container">
    <h1>Update Products</h1>
    <div>
      Name: <input type="text" v-model="updateProductName">
      Price: <input type="text" v-model="updateProductPrice">
      Description: <input type="text" v-model="updateProductDescription">
      <button v-on:click="updateProduct()">Update Product</button>
    </div>
    <h1>Products</h1>
    <div v-for="product in products">
      <h2>{{ product.name }}</h2>
      <img v-bind:src="product.url">
     <!--  <button v-on:click="showProduct(product)">Show more</button> -->
   <!--    <div v-if="currentproduct === product">
        <p>Width: {{ product.width }}</p>
        <p>Height: {{ product.height }}</p>
        <div> -->
       <!--    Name: <input type="text" v-model="product.name">
          Pirce: <input type="text" v-model="product.price">
          Description: <input type="text" v-model="product.description">
          <button v-on:click="updateProduct(product)">Update Photo</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      updateProduct: [],
      updateProductName: "",
      updateProductPrice: "",
      updateProductDescription: ""
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
  methods: {
    updateProduct: function() {
      var params = {
        name: this.updateProductName,
        description: this.updateProductDescription,
        price: this.updateProductPrice
      };
      axios.post("/api/photos", params).then(response => {
        this.photos.push(response.data);
        this.newPhotoName = "";
        this.newPhotoWidth = "";
        this.newPhotoHeight = "";
      });
    },
    showPhoto: function(photo) {
      if (this.currentPhoto === photo) {
        this.currentPhoto = {};
      } else {
        this.currentPhoto = photo;
      }
    },
    updatePhoto: function(photo) {
      var params = {
        name: photo.name,
        width: photo.width,
        height: photo.height
      };
      axios
        .patch("/api/photos/" + photo.id, params)
        .then(response => {
          this.currentPhoto = {};
        });
    }
  }
};
</script>
