<template>
  <div class="select container">
      <div class="content" @click="selectShows">
          <span class="text">{{selectList[nowIndex].text}}</span>
          <div class="trangle"></div>
      </div>

      <transition name="fade">
        <div class="select-container">
            <ul class="select-list border-bottom" v-show="selectShow">
                <li class="select-item" v-for="(item,index) in selectList" 
                :key="item.index"
                @click="select(index)"
                >{{item.text}}</li>
            </ul>
        </div>
      </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        selectList:{
            type:Array,
            default:[]
        }
    },
  data() {
    return {
       
         selectShow:false,//是否点击下拉的内容
         nowIndex : 0, // 当前选中的index的值
    }
  },
  methods: {
    selectShows(){
        this.selectShow = !this.selectShow;
        console.log('showlist', this.selectShow)
    },
    select(index){
        this.nowIndex = index;
        this.selectShow =false;
    },
    afterEnter: function (el) {
      el.style.opacity = 0
    //   el.style.transformOrigin = 'left'
    },
    leave(){
        alert('leave')
    }  
  },
  mounted(){
    //   父组件传进来的selected是要先选中哪一个
      for (const key in this.selectList) {
          if (this.selectList[key].selected) {
              this.nowIndex = key
          }
      }
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
            height 30px
            line-height 30px
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
    &.fade-enter-active,.fade-leave-active
        transition all 0.3 ease 
    &.fade-enter,.fade-leave-to
        opacity 0
    .select-list
        background #ffffff;
        border-radius 10px
        .select-item
            position relative
            height 30px
            line-height 30px
            font-size 14px
            display block
            border-1px(#c0c4cc)
            padding-left 10px
            &:last-child 
                border-none()
    
            


</style>
