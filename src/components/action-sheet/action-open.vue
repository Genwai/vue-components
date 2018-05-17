<template>
  <div class="container">
      <h1>中间弹出</h1>
      <div class="btnDiv">
          <button class="openBtn">弹出2</button>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
.container
   
    .btnDiv
        text-align center
        margin-top 30px
        .openBtn
            height 30px
            line-height 30px
            color #000000
            width 45px
            border-radius 3px
            text-align center
</style>
