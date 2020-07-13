<template>
  <div>
    <div>The About Page</div>
    <keep-alive>
    <component
      :is="componentId"></component>
    </keep-alive>
    <button
      @click="change()">Switch
      Components</button>
      

  </div>
</template>

<script>
import MapButton from '../components/MapButton.vue'
import OfficeAddress from '../components/OfficeAddress.vue'
export default {
  name: 'About',
  components: {
    MapButton,OfficeAddress
  },
  props: {},
  data() {
    return {
      componentId:MapButton
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    change(){
      this.componentId=OfficeAddress
    }
  }
}
</script>

<style lang="css" scoped></style>
