<template>
  <div class="container">
      <h1>碰我，拖動我</h1>
    <div class="tach" @touchstart = "touchStar"
    @touchmove.prevent.stop ="touching"
    @touchend.prevent.stop = "touchEnd"
    >
        用力拖動我喲
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  methods: {
    touchStar(event) {
      if (this.prevent) {
        event.stopPropagation();
      }
      let x = event.changedTouches[0].clientX;
      let y = event.changedTouches[0].clientY;
      this.emit("touchStar", x, y);
    },
    touching(event) {
      if (this.prevent) {
        event.stopPropagation();
      }
      let x = event.changedTouches[0].clientX;
      let y = event.changedTouches[0].clientY;
      this.emit("touching", x, y);
    },
    touchEnd(event) {
      if (this.prevent) {
        event.stopPropagation();
      }
      let x = event.changedTouches[0].clientX;
      let y = event.changedTouches[0].clientY;
      this.emit("touchEnd", x, y);
    }
  }
};
</script>

<style scoped lang="stylus">
.tach {
    width: 100px;
    height: 100px;
    background: red;
    color: #ffffff;
    font-size: 13px;
    line-height: 100px;
    text-align: center;
    position: absolute;
}
</style>
