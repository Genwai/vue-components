<template>
  <div class="container">
      <h1>查看更多下拉组件</h1>
      <div class="drop-content">
          <h1 class="title">下拉的标题</h1>
          <div class="drop-text" :style="'height:'+ ShowHeight +'px'">
              <div class="text" ref="reference" >
                  <slot></slot>
                
              </div>
          </div>
          <div class="add-more" @click="showMore">{{!show ? "查看更多" :"隐藏"}}</div>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        dropHeight:0,
        show:false,
        height:60,
    }
  },
  mounted(){
      var height = this.$refs.reference.offsetHeight;

      this.dropHeight = height;
      console.log('dropHeight',height)
  },
  computed:{
      ShowHeight(){
        //   if (this.show) {
        //       return this.dropHeight;
        //   }else {
        //       return this.height
        //   }
          return this.show? this.dropHeight:this.height
      }
  },
  methods: {
      showMore(){
          this.show = !this.show;
      }
  }
}
</script>

<style scoped lang="stylus">
    .drop-content
        margin-top 20px
        .title,.add-more
            display block 
            width 100%
            height 30px
            line-height 30px
            background #EBEEF5
            text-align center
            font-size 15px
        .drop-text
            text-indent 2em
            font-size 14px
            line-height 28px
            color #2c3e50
            background-color #F2F6FC
            overflow hidden
            transition 0.5s 
            img 
                width 64px




</style>
