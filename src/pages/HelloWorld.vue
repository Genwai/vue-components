<template>
  <div class="index">
    <h1>vue-components</h1>
    <ul class="main-ul" >
      <li><router-link to="/select">下拉列表(select)</router-link></li>
      <li><router-link to="/countdown">倒计时(countdown)</router-link></li>
      <li><router-link to="/countdown2">倒计时2(countdown2)</router-link></li>
      <li><router-link to="/dropDown">查看更多下拉组件(countdown)</router-link></li>
      <li><router-link to="/search">搜索(search)</router-link></li>
      <li><router-link to="/actionsheet">底部弹框(action-sheet)</router-link></li>
      <li><router-link to="/touchme">觸摸拖動(touch-me)</router-link></li>
    </ul>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.index
  h1
    font-size 30px
    text-align center
    margin-bottom 20px
  .main-ul
    text-align center
    font-size 20px
    li
      margin 10px
</style>
