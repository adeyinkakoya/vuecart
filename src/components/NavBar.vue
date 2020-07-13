<template>
  <div>
<nav class="navbar navbar-expand-sm navbar-dark bg-primary">
  <router-link to="/" class="navbar-brand">My Shopping Cart</router-link>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            
            <li class="nav-item">
                <router-link to="/" class="nav-link">Products</router-link>
            </li>
           
        </ul>
        
    </div>
   <div class="dropdown open">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="false">
            {{getCartSumQuantity}} Items in Cart
          </button>
      <div @click="$event.stopPropagation()">
      <mini-cart></mini-cart>
      </div>
    </div>
</nav>


  </div>
</template>


<script>
import MiniCart from "./MiniCart";
export default {
  name: 'NavBar',
  components: {
    MiniCart
    },
    computed: {
      getCartSumQuantity(){
        return this.$store.getters.getCartSumQuantity
      }
    },
 
}
</script>

<style lang="css" scoped></style>
