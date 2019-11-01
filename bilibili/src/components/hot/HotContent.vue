<template>
  <div class="hot-item">
    <div class="head" v-for="(typen,index) in typen" :key="index">
      <span class="n">{{typen.name}}</span>
      <div  @click="getDescribe(index,i)" class="up" v-for="(up,i) in typen.content" :key="i">
        <div class="tup">
          <img :src="up.pic" alt />
          <ul class="font">
            <li class="left">{{Math.floor(up.play/10000)}}万</li>
            <li class="right">{{Math.floor(up.coins/10000)}}万</li>
          </ul>
        </div>
         <div class="bt"> 
          <span class="bt-item">{{up.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotContent",
  props: ["typen"],
  data:()=>({
    up:[]
  }),
  updated(){
    this.up = this.typen
    console.log(this.up[0].content[0])
  },
  methods:{
  getDescribe(index,i){
    this.$router.push({
      path:`/video`, query: { userId: JSON.stringify(this.up[index].content[i])}
    })
  }
  }
};
</script>

<style lang="scss" scoped>
.hot-item{
  .head{
    display: inline-block;
    .n{
      position: relative;
      display: block;
      font-size: .68267rem;
      line-height: 2.26133rem;
      text-align: left;
      color: #212121;
      margin-left: .512rem;
    }
    .up {
    display: block;
    box-sizing: border-box;
    width: 50%;
    float: left;
    height: 6.6rem;
    border: .5rem solid transparent;
    border-top: 0;
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
}
  

</style>