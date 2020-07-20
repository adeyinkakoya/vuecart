<template>
  <div >
      <nav-bar/>
    <router-view/>
    <NotificationsList/>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue'
import NotificationsList from './components/NotificationsList'
export default {
  name:"app",
  components:{
    NavBar,
    NotificationsList
  }
  
}
</script>
<style>

</style>
