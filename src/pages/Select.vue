<template>
  <div class="container">
      <h1>下拉列表</h1>
      <v-select :selectList="selectList"></v-select>
  </div>
</template>

<script type="text/ecmascript-6">
import VSelect from '../components/select/select'
export default {
  data() {
    return {
          selectList:[
            {
            index:0,
            text:'123'
            },
            {
            index:1,
            text:'1234'
            },
            {
            index:2,
            text:'123456',
            selected:true
            },
        ],
    }
  },
  components: {
      VSelect
  }
}
</script>

<style scoped lang="stylus">
</style>
