<template>
  <div class="index">
    <h1>vue-components</h1>
    <ul class="main-ul" >
      <li><router-link to="/select">下拉列表(select)</router-link></li>
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
  .main-ul
    text-align center
    font-size 20px
    li
      margin 10px
</style>
