<template>
  <div class="home mx-auto">
    <div class="banner w-100">
      <Slider :items="banners" :loop="true" />
    </div>
  </div>
</template>

<script>
import Slider from '@/components/slider'
export default {
  name: 'Home',
  data () {
    return {
      banners: []
    }
  },
  components: {
    Slider
  },
  mounted () {
    this.$store.dispatch('GET_SERVICE_DATA', { name: 'GET_HOME_BANNERS' })
      .then(ret => (this.banners = ret))
  }
}
</script>
<style lang="less" scoped>
.home{
  max-width: 1080px;
  padding-top: 20px;
  .banner {
    height: 300px;
  }
}
</style>
