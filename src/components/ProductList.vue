<template>
<div>
  <pulse-loader :loading="loading" :color="color" />
<div class="d-flex align-items-stretch flex-wrap">
    
  <div class="col-3 mt-3" v-for="(product,index) in allProducts" :key="index">
     <div class="card h-100" >
         <img class="card-img-top w-100" src="https://via.placeholder.com/150x100" alt="">
         <div class="card-body">
             <h4 class="card-title">
                <router-link :to="{name:'Product', params:{id:product.id}}" class="">{{product.title}}</router-link>
             </h4>
             <h6>${{product.price}}</h6>
             <p class="card-text">{{product.description}} </p>
         </div>
         <div class="px-4 pb-3">
             <button class="btn btn-secondary" @click="addProductToCart(product)">Add to cart</button>
         </div>
     </div>
  </div>
  </div>
  </div>
</template>

<script>
export default {
    name:"Productlist",
    components:{},
    data() {
        return {
            loading:true,
            color:"blue",
        }
    },
    computed: {
        allProducts(){
            return this.$store.getters.allProducts
        }
    },
    mounted() {
        this.$store.dispatch('getProducts')
        .then(()=>{
            let m = this
            m.loading = false
        })
    },
    methods: {
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
