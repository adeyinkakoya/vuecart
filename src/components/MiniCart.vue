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
            @click="removeCartItem(index)"
          >remove</a>
        </div>
      </div>
      <hr />
    </div>

    <div class="d-flex justify-content-between">
      <span>Total: ${{getCartTotal}}</span>
      <a href="#" >Clear Cart</a>
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'MiniCart',
  computed: {
    getCart(){
      return this.$store.getters.getCart
    },
     getCartTotal(){
      return this.$store.getters.getCartTotal
    }
  },
  mounted() {
    this.$store.dispatch('getCartFromDB')
  },
  methods: {
    removeCartItem(index){
      this.$store.commit('REMOVE_CART_ITEM',index)
    }
  },

 
}
</script>

<style lang="css" scoped></style>
