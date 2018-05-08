
<template>
  <div class="countdown">
      <div class="countdown-container" >
          <span class="send" v-if="send" @click="sendButton">发送</span>
          <span class="sendOver"  v-if="!send" >{{count}}s</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        send:true,//是否在倒计时中
        count:60
    }
  },
  methods: {
      sendButton(){
          this.send = false;
          if (!this.send) {
              setTimeout(() => {
                  this.count --
              }, 1000);
          }
      },


  },
  watch: {
    //   没有上面的settiemout是不行，watch 是在数据发现变化的时候，产生的方法并执行
      count(){
          if (!this.send) {
              if (this.count > 0) {
                  setTimeout(() => {
                      this.count -- ;
                  }, 1000);
              }else{
                  this.send = true
              }
          }
      }
  }
}
</script>

<style scoped lang="stylus">
    .countdown
        .countdown-container
            text-align center 
            margin-top 20px
            .send
                width 60px
                background #ff9800
                height 30px
                line-height 30px
                font-size 14px
                color #ffffff
                padding 5px
                border-radius 5px
                cursor pointer
                display inline-block
            .sendOver
                background #e4e7ed
                width 60px
                height 30px
                line-height 30px
                font-size 14px
                color #ffffff
                padding 5px
                border-radius 5px
                cursor pointer
                display inline-block
                
</style>
