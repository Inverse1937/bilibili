<template>
  <div class="shousuo">
    <div class="title">
      <div class="inp">
        <img @click="getVal()" src="https://s1.hdslb.com/bfs/static/mult/images/search-pro.png" alt="">
        <input v-model="str" class="inp-actual" placeholder="该标题无法被注销" type="text" name id />
      </div>
      <span class="back" @click="back">取消</span>
    </div>
    <div class="others">
      <div class="t">大家都在搜</div>
      <div class="actual">
        <span>非正式会谈</span>
        <span>非正式会谈</span>
        <span>非正式会谈</span>
        <span>非正式会谈</span>
        <span>非正式会谈</span>
        <span>非正式会谈</span>
      </div>
    </div>
    <div class="record">
      <div class="bt">
        <p>历史记录</p>
      </div>
      <div ref="ls" class="ls" v-for="(s,index) in arr" :key="index">
          <img src="//s1.hdslb.com/bfs/static/mult/images/history.png" alt="">
          <p>{{s.text}}</p>
      </div>
      <div class="qc" @click="getQc()">
          <p>清除历史记录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShouSuo",
  data:()=>({
    arr:[
      {text:'记录1' ,other:false},
      {text:'记录2' ,other:false}
    ],
    str:''
  }),
  methods: {
    back() {
      this.$router.back();
    },
    getVal(){
      let arrA = {text:this.str ,other:false}
      this.arr.push(arrA)
      this.str = ''
      console.log(this.arr)
    },
    getQc(){
      this.arr = []
    }
  }
};
</script>

<style lang="scss" scoped>
.shousuo {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #fff;
  .title {
    height: 2rem;
    margin-left: 0.5rem;
    .inp {
      width: 85%;
      height: 1.7rem;
      margin-top: 0.29867rem;
      img{
        position: absolute;
        top: .65rem;
        left: 1rem;
        width: 1rem;
        height: 1rem;
      }
      .inp-actual {
        width: 100%;
        height: 100%;
        background-color: #f4f4f4;
        border: 0.02133rem solid #e7e7e7;
        border-radius: 0.27067rem;
        color: #505050;
        padding-left: 1.70667rem;
        padding-right: 3.37067rem;
        box-sizing: border-box;
        font-size: 0.6rem;
      }
    }
    .back {
      position: absolute;
      top: 0.725rem;
      right: 0.5rem;
      color: #fb81a4;
      font-size: 0.55rem;
    }
  }
  .others {
    width: 100%;
    margin-left: 0.7rem;
    display: inline-block;
    .t {
      display: block;
      width: 100%;
      padding-top: 0.68267rem;
      color: #999;
      line-height: 0.59733rem;
      font-size: 0.59733rem;
      text-align: left;
    }
    .actual {
      width: 100%;
      display: inline-block;
      font-size: 0.59733rem;
      span {
        float: left;
        padding: 0.40533rem 0.512rem;
        margin-top: 0.512rem;
        margin-right: 0.36267rem;
        border: 0.04267rem solid #ccc;
        border-radius: 0.68267rem;
      }
    }
  }
  .record {
    margin-top: 1.10933rem;
    border-top: .42667rem solid #f4f4f4;
    .bt {
        margin-left: .53333rem;
        text-align: left;
        color: #999;
        font-size: .59733rem;
        line-height: 1.96267rem;
    }
    .ls{
        height: 1.87733rem;
        line-height: 1.87733rem;
        margin-left: .53333rem;
        border-bottom: .02133rem solid #ccc;
        position: relative;
        font-size: .59733rem;
        img{
           display: block;
           width:.68267rem;
           float: left;
           margin-top: .6rem;
        }
        p{
            display: block;
            margin-left: 1.2rem;
        }
    }
    .qc{
        text-align: center;
        color: #999;
        font-size: .59733rem;
        line-height: 1.96267rem;
    }
  }
}
</style>