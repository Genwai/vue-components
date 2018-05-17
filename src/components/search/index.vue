<template>
  <div class="container">
      <h1>搜索栏</h1>
      <div class="search">
          <div class="search-container" :class="{click:btnClick}" >
              <img src="../../assets/images/found.png" class="fa-search" >
              <input type="text" 
              class="search-input" 
              @focus="searchFocus" 
              @blur="searchBlur"
              v-model="lovingVue"
              :class="{inputClick:btnClick}"
              :placeholder="placeholder">
          </div>
        <button class="search-btn" 
        :class="{btnShow:btnClick}"
        @click="searchBtn"
        >搜索</button>
          
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        placeholder:'请输入...',
        btnClick:false,
        lovingVue:'lick you'
    }
  },
  methods: {
      searchFocus(){
          this.btnClick = !this.btnClick;
          console.log('btnclickfocus', this.btnClick)
      },
      searchBlur(){
          this.btnClick = !this.btnClick;
          console.log('btnclick-blur', this.btnClick)
      },
      searchBtn(){
          this.emit('btn-value',this.lovingVue)
      }
  }
}
</script>

<style scoped lang="stylus">
    .search 
        margin-top 20px
        width 100%
        height 44px
        background #ffffff
        float left 
        font-size 13px
        white-space nowrap
        overflow hidden
        .search-container
            width calc(100% - 20px)
            height 30px
            line-height 30px
            float left 
            border-radius 6px
            margin 7px 10px
            background #efeff4
            display inline-block
            &.click
                width calc(100% - 70px)
            .fa-search
                width 20px
                height 20px
            .search-input
                width calc(100% - 30px)
                background none 
                border none 
                outline none
                text-indent 2px
                font-size 13px
                &.inputClick
                    width calc(100% - 30px)
        .search-btn
            width: 0px;
            height: 30px !important;
            margin-top: 7px;
            float: left;
            display inline-block
            position: relative;
            left: -10px;
            white-space: nowrap;
            border: none;
            color: #454545 !important;
            opacity: 100;
            overflow: hidden;
            background: rgba(0, 0, 0, 0) !important;
            transition: all 0.5s;
            -moz-transition: all 0.5s;
            /* Firefox 4 */
            -webkit-transition: all 0.5s;
            /* Safari 和 Chrome */
            -o-transition: all 0.5s;
            visible: hidden;
            &.btnShow
                width 50px
                opacity: 100;
                visibility visible 


</style>
