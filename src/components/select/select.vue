<template>
  <div class="select container">
      <div class="content">
          <span class="text">123</span>
          <div class="trangle"></div>
      </div>
      <ul class="select-list border-bottom">
          <li class="select-item">122</li>
          <li>2222</li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
@import '../../assets/style/mixin.styl'
.select
    .content
        margin 20px 10px 0px 0px
        position relative
        .text
            width 100%
            display inline-block
            border 1px solid #e3e3e3
            background #ffffff 
            border-radius 8px
            padding-left 10px
            height 25px
            line-height 25px
        .trangle
            width 0
            height 0
            position absolute
            top 40%
            right 0px
            border-top 5px solid #606266
            border-left 5px solid transparent
            border-right 5px solid transparent
            border-bottom 5px solid transparent
    .select-list
        background #ffffff;
        padding-left 10px
        border-radius 10px
        .list-item
            position relative
            &:after
                display block
                content ""
                position absolute
                top 0px
                bottom 0px
                width 100%
                border 1px solid red
            @media(-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3)
                transform scaleY(0.33)
            @media(-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
                transform scaleY(0.5)
            


</style>
