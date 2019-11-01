<template>
  <div class="title" ref="img">
    <div class="lunbo-item" ref="slider" v-if="isShow">
      <img class="img-item" v-for="(img,index) in lunbo" :key="index" :src="img.pic" alt />
      <img class="img-item" :src="this.lunbo[0].pic" :alt="0" />
    </div>
    <span class="ol">
      <span class="li" :class="{active: n === index + 1 }" v-for="n in lunbo.length" :key="n"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: "SellerView",
  props: ["lunbo"],
  data: () => ({
    isShow:false,
    index: 0,
    timer: null,
    picWidth: 0,
    imga: null
  }),
  updated(){
    if(this.lunbo.length>0){
      this.isShow = true
    }
  },
  methods: {
    nextPic() {
      console.log(this.$refs.img.clientWidth);

      this.picWidth = Math.floor(this.$refs.img.clientWidth);
      // console.log(this.picWidth)

      this.index++;
      let offsetX = -this.index * this.picWidth;
      this.$refs.slider.style.transition = "all .5s linear";
      this.$refs.slider.style.transform = `translateX(${offsetX}px)`;
      // console.log(this.index)
      this.$refs.slider.addEventListener("transitionend", this.resetPic);
    },
    resetPic() {
      // console.log('动画结束')
      if (this.index >= this.lunbo.length) {
        this.index = 0;
        let offsetX = -this.index * this.picWidth;
        this.$refs.slider.style.transition = "none";
        this.$refs.slider.style.transform = `translateX(${offsetX}px)`;
      }
    }
  },
  watch: {
    index(newValue, oldValue) {
      // 监听轮播图下表发生改变
      if (newValue !== oldValue) {
        this.$emit("changeIndex", newValue);
      }
    }
  },
  mounted() {
    this.timer = setInterval(this.nextPic, 5000);
  },

  beforeDestroy() {
    // 清除mounted中创建的计时器
    clearInterval(this.timer);
    this.$refs.slider.removeEventListener("transitionend", this.resetPic);
  }
};
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  height: 4.417675324675336rem;
  overflow: hidden;
  .lunbo-item {
    width: 1000%;
    text-align: left;
    height: 4.417675324675336rem;
    .img-item {
      width: 10%;
    }
  }
  .ol {
    position: absolute;
    left: 50%;
    bottom: 0.3rem;
    margin-left: -1.37rem;
    display: inline-block;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.61333rem;
    padding: 0 0.32rem;
    .li {
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 50%;
      background-color: #fff;
      float: left;
      margin: 0.2rem;
      z-index: 10;
    }
    .active {
      background-color: #de698c;
    }
  }
}
</style>