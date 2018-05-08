<template>
  <div class="container">
      <!-- 倒计时 -->
      <h1>倒计时按钮</h1>
      <count-down></count-down>
  </div>
</template>

<script type="text/ecmascript-6">
import countDown from '../components/countdowm/countdown'
export default {
  data() {
    return {

    }
  },
  components: {
    countDown
  }
}
</script>

<style scoped lang="stylus">
</style>
