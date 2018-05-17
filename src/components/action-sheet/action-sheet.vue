<template>
  <div class="container">
      <h1>底部弹出</h1>
      <div class="btnDiv">
          <button class="openBtn" @click="openBtn">弹出</button>
      </div>
      <!-- <transition name="fade" 
      v-on:before-enter="beforeEnter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
      > -->
      <transition name="fade" >
          <div class="sheetContainer" v-if="isShow">
            <ul class="sheets">
                <li class="sheetItem" v-for="(item,index) in sheetList" :key="index" @click.stop="sheetItem(item,index)">{{item}}</li>
            </ul>
            <div class="cancel" @click.stop="cancelBtn">
                取消
            </div>
          </div>
      </transition>
      <div :class="{wrapper:isShow}"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        sheetList:['选项一','选项二','选项三'],
        isShow:false

    }
  },
  methods: {
      cancelBtn(){
          this.isShow = false;
          this.emit('cancelBtn')
      },
      openBtn(){
          this.isShow = !this.isShow;
      },
      sheetItem(){
          this.isShow = false;
      },
    //   方法二：通过js控制高度
    // beforeEnter(el){
    //     //el:代表的是这个transition包裹的 dom 节点
    //     el.querySelector('.sheetContainer').style.height = 0
    // },
    //  afterEnter(el){
    //      el.querySelector('.sheetContainer').style.height = el.querySelector('.sheetContainer').offsetHeight +'px'
    // },
    // beforeLeave(el){
    //     el.querySelector('.sheetContainer').style.height = 0
    // }
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
    .sheetContainer
        position fixed
        bottom 0px
        left 0px
        width 100%
        background white
        color #000000
        font-size 16px
        z-index 25
        &.fade-enter-active,&.fade-leave-active
            transition all 0.5s
            transform translate3d(0,0%,0) // 0 0 0 代表着写css正常显示的代码
        &.fade-enter,&.fade-leave-to
            transform translate3d(0,100%,0) // -100% 意思是想上移动自身的长度 100% 全部想下移动自身的长度
            opacity 0
        .sheets 
            .sheetItem
                text-align center
                height 44px
                line-height 44px
                color black 
                border-top 1px solid #EEE 
                // &:last-child
                //     border none 
        .cancel
            text-align center 
            height 60px
            border-top 10px solid #efeff4
            line-height 44px
    .wrapper
        position fixed
        top 0
        left 0
        bottom 0
        right 0
        background rgba(0, 0, 0, 0.5)
        z-index 22
        transition all 0.3s
                    
</style>
