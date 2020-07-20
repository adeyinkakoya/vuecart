<template>
  <div>
    <div :class="typeClass" class="alert alert-dismissible fade show" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
        </button>
         {{notification.message}}
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
export default {
    name:"NotificationsMessage",
    props:["notification"],
    data() {
      return {
        timeout:null,
        typeClass:`alert-${this.notification.type}`
      }
    },
    mounted() {
      // This will still run the method automatically
      this.timeout=setTimeout(() => {
         this.REMOVE_NOTIFICATION(this.notification)
      }, 3000);
     
      
    },
    methods: {
      ...mapMutations(["REMOVE_NOTIFICATION"])
    },
    beforeDestroy() {
      clearTimeout(this.timeout)
    },

}
</script>

<style>

</style>
