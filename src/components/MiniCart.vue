<template>
      <div
    class="dropdown-menu p-2"
    style="min-width:320px; right:0; left:auto"
    aria-labelledby="triggerId"
  >
    <div v-for="(item,index) in getCart" :key="index">
     
      <div class="px-2 d-flex justify-content-between">
        <div>
          <strong>{{item.product.title}}</strong>
          <br />
          {{item.quantity}}x ${{item.product.price}}
        </div>
        <div>
          <a
            href="#"
            class="badge badge-secondary"
            @click.prevent="removeProductFromCart(item.product)"
          >remove</a>
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: ${{getCartTotal}}</span>
      <a href="" @click.prevent="clearEntireCart()">Clear Cart</a>
    </div>
  </div>
 
</template>

<script>
import { mapGetters,mapActions } from "vuex";
export default {
  name: 'MiniCart',
  computed: {
    ...mapGetters("cart",["getCart","getCartTotal"])
    // getCart(){
    //   return this.$store.getters.getCart
    // },
    //  getCartTotal(){
    //   return this.$store.getters.getCartTotal
    // }
  },
  mounted() {
    this.getCartFromDB()
    // this.$store.dispatch('getCartFromDB')
  },
  methods: {
    ...mapActions("cart",["removeProductFromCart","clearEntireCart","getCartFromDB"])
    // removeCartItem(producttoremove){
    //   this.$store.dispatch('removeProductFromCart',producttoremove)
    // },
    // clearEntireCart(){
    //   this.$store.dispatch('clearEntireCart')
    // }
  }

 
}
</script>

<style lang="css" scoped></style>
