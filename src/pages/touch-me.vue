<template>
  <div class="page">
      <touch-me @touchStar="touchStar" 
      @touching="touching"
      @touchEnd="touchEnd"></touch-me>
  </div>
</template>

<script type="text/ecmascript-6">
import touchMe from '../components/touch-me/touch-me'
export default {
  methods: {
    touchStar(x,y){
      
    }
  },
  data() {
    return {

    }
  },
  components: {
      touchMe
  }
}
</script>

<style scoped lang="stylus">
</style>
