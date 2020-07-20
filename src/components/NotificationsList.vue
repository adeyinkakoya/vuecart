<template>
  <div class="notifications">
    <NotificationsMessage 
    v-for="notification in getAllNotifications" 
    :key="notification.id" 
    :notification="notification"/>
  </div>
</template>

<script>
import NotificationsMessage from './NotificationsMessage'
import { mapGetters } from "vuex";
export default {
    name:"NotificationsList",
    components:{
      NotificationsMessage
    },
    computed: {
      ...mapGetters(["getAllNotifications"])
      
    },


}
</script>

<style lang="css" scoped>
.notifications{
  position: fixed;
  bottom: 0;
  right: 0;
  width: 320px;
  margin-right: 15px;
}

</style>>
