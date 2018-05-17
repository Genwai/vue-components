<template>
  <div class="page">
      <drop-down>
              <p>W3C 标准中有如下规定： When there is only one single-line text input field in a form, the user agent should accept Enter in
        that field as a request to submit the form. 即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 标签上添加 @submit.native.prevent。</p>
        <img src="../assets/logo.png" alt="" srcset="">
      </drop-down>
  </div>
</template>

<script type="text/ecmascript-6">
import dropDown from '../components/dropDown/dropDown'
export default {
  data() {
    return {

    }
  },
  components: {
    dropDown
  }
}
</script>

<style scoped lang="stylus">
  .page
    img 
      width 64px
      height 64px
</style>
