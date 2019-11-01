<template>
  <div class="video">
    <div ref="display" class="display">
      <div class="img">
        <img ref="pic" :src="video.pic" alt />
        <div ref="l" class="l">{{video.duration}}</div>
        <div ref="r" class="r">
          <span ref="play" class="play" @click="getPlay()">
            <img src="https://s1.hdslb.com/bfs/static/mult/images/TV-Play.png" alt />
          </span>
          <span ref="pause" class="pause hide" @click="getPause()">
            <img src="https://s1.hdslb.com/bfs/static/mult/images/TV-Pause.png" alt />
          </span>
        </div>
        <div ref="b" class="b" @mouseenter="offTime()" @mouseleave="onTime()">
          <div class="time">
            <span ref="current">00:00</span>/
            <span ref="total">00:00</span>
          </div>
          <div class="progress">
            <div class="bar" ref="bar"></div>
          </div>
          <div class="danmu">
            <span class="on">
              <img src="https://s1.hdslb.com/bfs/static/mult/images/Icon_Barrage-On.png" alt />
            </span>
            <span class="off hide">
              <img src="https://s1.hdslb.com/bfs/static/mult/images/Icon_Barrage-Off.png" alt />
            </span>
          </div>
          <div class="icon" @click="getIcon()">
            <img src="https://s1.hdslb.com/bfs/static/mult/images/Icon_Fullscreen.png" alt />
          </div>
        </div>
      </div>
      <video
        @click="getShow()"
        ref="video"
        class="video-url"
        play
        :src="video.url"
        width="100%"
        height="100%"
        preload
        webkit-playsinline
        playsinline
      ></video>
    </div>
    <div class="app">
      <p>高清更流畅, APP内打开观看</p>
    </div>
    <div class="video-item">
      <div class="title">
        <span class="hot">
          <img src="https://s1.hdslb.com/bfs/static/mult/images/ic_popular.svg" alt />
          热门
        </span>
        <span class="biaoti">{{video.title}}</span>
      </div>
      <div class="upname">
        <a href="#">{{video.author}}</a>
        <span>{{Math.floor(video.play/10000)}}万次观看</span>
        <span>{{video.coins}}弹幕</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data: () => ({
    video: [],
    show: false,
    timer: null,
    canplay: null,
    total: 0,
    current: 0
  }),
  mounted() {
    this.aid = this.$route.query.id;
    this.video = JSON.parse(this.$route.query.userId);
    console.log(this.video);
    // console.log(this.$refs.video);
    clearInterval(this.timer);
  },
  undated() {},
  methods: {
    getPlay() {
      this.$refs.video.play();
      this.$refs.video.style.display = "block";
      this.$refs.l.style.display = "none";
      this.$refs.pause.classList.remove("hide");
      this.$refs.play.classList.add("hide");
      this.$refs.play.style.top = "-2rem";
      this.timer = setInterval(this.getTime, 5000);
      this.canplay = setInterval(this.getCanplay, 100);
    },
    getPause() {
      this.$refs.video.pause();
      this.$refs.pause.classList.add("hide");
      this.$refs.play.classList.remove("hide");

      clearInterval(this.canplay);
      clearInterval(this.timer);

      this.$refs.r.style.display = "block";
      this.$refs.b.style.display = "block";
    },
    getIcon() {
      this.$refs.pic.style.display = "none";
      let dis = this.$refs.display;
      if (dis.requestFullscreen) {
        dis.requestFullscreen();
      } else if (dis.mozRequestFullScreen) {
        dis.mozRequestFullScreen();
      } else if (dis.webkitRequestFullScreen) {
        dis.webkitRequestFullScreen();
      }

      let di = document;
      if (di.exitFullScreen) {
        di.exitFullScreen();
      } else if (di.mozCancelFullScreen) {
        di.mozCancelFullScreen();
      } else if (di.webkitCancelFullScreen) {
        di.webkitCancelFullScreen();
      }
    },
    formatime(time) {
      var h, m, s;
      h = Math.floor(time / 3600);
      m = Math.floor((time % 3600) / 60);
      s = Math.floor(time % 60);
      h = h >= 10 ? h : "0" + h;
      m = m >= 10 ? m : "0" + m;
      s = s >= 10 ? s : "0" + s;
      return m + ":" + s;
    },
    getTime() {
      this.$refs.r.style.display = "none";
      this.$refs.b.style.display = "none";
    },
    getShow() {
      this.$refs.r.style.display = "block";
      this.$refs.b.style.display = "block";
    },

    getCanplay() {
      // console.log(this.$refs.video.currentTime)
      // console.log(this.$refs.current.innerHTML)
      this.total = this.$refs.video.duration;
      this.$refs.total.innerHTML = this.formatime(this.total);

      this.current = this.$refs.video.currentTime;
      this.$refs.current.innerHTML = this.formatime(this.current);

      this.$refs.bar.style.width = `${(this.current / this.total) * 100}%`;
    },
    offTime() {
      console.log("1111");
      clearInterval(this.timer);
    },
    onTime() {
      console.log("2222");
      this.timer = setInterval(this.getTime, 5000);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.canplay);
  }
  // destroyed() {
  //           console.log('实例被销毁之后触发,该方法中无法访问任何的属性 方法')
  //       }
};
</script>

<style lang="scss" scoped>
.video {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 2rem;
  left: 0;
  .display {
    width: 100%;
    height: 9.00267rem;
    position: relative;
    .img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      .r {
        position: absolute;
        width: 2rem;
        height: 2rem;
        bottom: 0.7rem;
        right: 0.55rem;
        z-index: 99;
        .play {
          position: absolute;
        }
        .pause {
          position: absolute;
          top: -2rem;
        }
        .hide {
          display: none;
        }
      }
      .l {
        position: absolute;
        bottom: 0.768rem;
        left: 0.512rem;
        border: 0.04267rem solid hsla(0, 0%, 100%, 0.6);
        background-color: hsla(0, 0%, 100%, 0.2);
        padding-left: 0.34133rem;
        padding-right: 0.34133rem;
        border-radius: 0.08533rem;
        color: #fff;
        font-size: 0.512rem;
        line-height: 0.85333rem;
        text-align: center;
      }
      .b {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.9rem;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99;
        display: none;
        .time {
          position: absolute;
          top: 0.62rem;
          left: 0.62rem;
          color: #fff;
          font-size: 0.66rem;
        }
        .progress {
          position: absolute;
          top: 0.9rem;
          left: 4.7rem;
          width: 6.2rem;
          height: 0.1rem;
          background-color: #4c4c4c;
          .bar {
            position: absolute;
            width: 1%;
            height: 0.1rem;
            background-color: #d46485;
          }
          .bar::after {
            position: absolute;
            right: -0.5rem;
            top: -0.18rem;
            content: "";
            display: block;
            width: 0.5rem;
            height: 0.5rem;
            background-color: #fff;
            border-radius: 50%;
          }
        }
        .danmu {
          position: absolute;
          right: 3rem;
          top: 0.3rem;
          width: 1.3rem;
          height: 1.3rem;
          .on {
            position: absolute;
            top: 0;
            left: 0;
          }
          .off {
            position: absolute;
            top: 0;
            left: 0;
          }
          .hide {
            display: none;
          }
        }
        .icon {
          position: absolute;
          right: 0.5rem;
          top: 0.3rem;
          width: 1.3rem;
          height: 1.3rem;
        }
      }
      .b:hover {
        display: block;
      }
    }
    .video-url {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
    }
  }
  .app {
    font-size: 0.68267rem;
    width: 100%;
    text-align: center;
    z-index: 10;
  }
  .video-item {
    padding: 0.256rem 0.512rem 0.46933rem;
    .title {
      width: 14.1rem;
      max-height: 2.048rem;
      overflow: hidden;
      margin: 0 0 0.34rem;
      line-height: 1.024rem;
      font-size: 0.68267rem;
      font-style: normal;
      color: #212121;
      height: 1.024rem;
      word-break: break-all;
      display: flex;
      .hot {
        height: 1.024rem;
        padding: 0 0.34133rem;
        line-height: 1.024rem;
        color: #fb7299;
        background: #f4f4f4;
        display: inline-block;
        border-radius: 0.512rem;
        text-align: center;
        font-size: 0.512rem;
        margin-right: 0.256rem;
        img {
          width: 0.68267rem;
          margin-left: -0.17067rem;
          vertical-align: sub;
          position: relative;
          top: 0.04267rem;
        }
      }
      .biaoti {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-box-flex: 1;
        flex: 1;
      }
    }
  }
  .upname {
    a {
      font-family: PingFangSC-Regular;
      vertical-align: middle;
      display: inline-block;
      font-size: 0.512rem;
      color: #212121;
      margin-right: 0.768rem;
      height: 0.64rem;
      line-height: 0.64rem;
    }
    span {
      color: #999;
      display: inline-block;
      height: 0.64rem;
      width: auto;
      margin-right: 0.34133rem;
      vertical-align: middle;
      line-height: 0.64rem;
      font-size: 0.512rem;
    }
  }
}
</style>