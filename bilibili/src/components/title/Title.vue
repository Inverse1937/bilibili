<template>
  <div class="title">
    <div class="personal">
      <img src="https://s1.hdslb.com/bfs/static/mult/images/tv.png" alt />
    </div>
    <Router-link to="/shousuo" tag="button" class="tab-item">
    <span class="inp">这样教英语 不无聊</span>
    </Router-link>
    
    <div class="tv">
      <img src="https://s1.hdslb.com/bfs/static/mult/images/tv.png" alt />
    </div>
    <span>
      <button class="btn">下载  App</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "Title"
};
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  height: 2rem;
  // background-color: #ccc;
  position: relative;
  .personal {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 1px solid #828282;
    background-color: #fff;
    float: left;
    position: absolute;
    top: 0.4rem;
    left: 0.2rem;
    img {
      width: 100%;
    }
  }
  .tab-item {
    position: absolute;
    border: 0;
    left: 2rem;
    top: 0.4rem;
    background-color: #f4f4f4;
    height: 1.2rem;
    width: 6rem;
    display: block;
    border-radius: 5rem;
    line-height: 1.2rem;
    .inp {
    font-size: 0.562667rem;
    color: #a3a4a9;
  }
  }
  
  .tv {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 1px solid #828282;
    background-color: #e7e7e7;
    float: left;
    position: absolute;
    top: 0.4rem;
    left: 8.8rem;
    img {
      width: 100%;
    }
  }
  .btn{
      position: absolute;
    border: .02133rem solid #fb7299;
    right: .4rem;
    top: 0.4rem;
    background-color: #fb7299;
    height: 1.2rem;
    width: 4.6rem;
    border-radius: .2rem;
    color: #fffcfd;
    font-size: .59467rem;
  }
}
</style>