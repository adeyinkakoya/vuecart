<template>
<div class="container">
  <div class="row mt-2">
      <div class="col-4">
          <img src="https://via.placeholder.com/150x100" alt="" srcset="" class="w-100">
      </div>
      <div class="col-8">
          <h2>{{product.title}}</h2>
          <h3>${{product.price}}</h3>
          <input type="number" size="8" class="mr-2">
          <button class="btn btn-secondary" @click="addProductToCart(product)">Add to Cart</button>
          <p>{{product.description}}</p>
      </div>
  </div>
  <div class="row mt-2 px-4" >
      <button @click="goBack()" class="btn btn-dark"> Go Back</button>
  </div>
  </div>
  
</template>

<script>
export default {
    name:"Product",
    props:['id'],
    computed: {
        product(){
            return this.$store.getters.product
        }
    },
    mounted() {
        this.$store.dispatch('getProduct',this.id)
    },
    methods: {
        goBack(){
            window.history.back()
        },
        addProductToCart(product){
            // We are passing an object as the payload.This goes into the cart array and forms an associative array of produt and quantity
            this.$store.dispatch('addProductToCart',{
                product:product,
                quantity:1
            })
        }
    },

}
</script>

<style>

</style>
