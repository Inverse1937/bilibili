<template>
  <div class="content">
    <div @click="getDescribe(index)" class="up" v-for="(up,index) in updata" :key="index">
      <div class="tup">
        <img :src="up.pic" alt />
        <ul class="font">
          <li class="left">
            {{Math.floor(up.play/10000)}}万
            </li>
          <li class="right">
            {{Math.floor(up.coins/10000)}}万
            </li>
        </ul>
      </div>
      <div class="bt">
      <span class="bt-item">{{up.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Content",
  props: ["updata"],
  methods:{
  getDescribe(index){
    this.$router.push({
      path:`/video`, query: { userId: JSON.stringify(this.updata[index])}
    })
  }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: inline-block;
  margin-top: .5rem;
  .up {
    box-sizing: border-box;
    width: 50%;
    float: left;
    height: 6.6rem;
    border: .35rem solid transparent;
    overflow: hidden;
    .tup {
      width: 100%;
      position: relative;
      border-radius: .2rem;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
      }
      .font{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.46933rem;
        position: absolute;
        bottom: .2rem;
        color: #f3f4f7;
        .left{
          position: absolute;
          top: 0;
          left: .2rem;
        }
        .right{
          position: absolute;
          top: 0;
          right: 0.2rem;
        }
      }
    }
    .bt{
      width: 100%;
      line-height: .5rem;
    .bt-item{
      font-size: 0.55467rem;
      color: #24292d;
      line-height: .7867rem;
      text-align: left;
    }
    }
  }
}
</style>