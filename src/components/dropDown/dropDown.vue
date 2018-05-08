<template>
  <div class="container">
      <h1>查看更多下拉组件</h1>
      <div class="drop-content">
          <h1 class="title">下拉的标题</h1>
          <div class="drop-text" :style="'height:'+ ShowHeight +'px'">
              <div class="text" ref="reference" >
                 <p> W3C 标准中有如下规定： When there is only one single-line text input field in a form, the user agent should accept Enter in
              that field as a request to submit the form. 即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 标签上添加 @submit.native.prevent。
                </p>
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
        show:true,
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
          if (this.show) {
              return this.dropHeight;
          }else {
              return this.height
          }
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




</style>
