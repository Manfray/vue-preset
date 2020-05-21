<template>
  <div class="home">
    <div class="title">
      <div class="title__text animate__animated animate__bounce">智慧高速服务区大数据平台</div>
      <div class="title__time">{{ timeNow }}</div>
      <div class="btn-wrap">
        <el-button size="mini" type="info" plain class="hw-service">前往门店</el-button>
        <el-button size="mini" type="info" plain class="hw-service">退出</el-button>
        <svg-icon :icon-class="fullScreen ? 'minimize' : 'maximize'" class-name="maximize-svg animate__animated animate__pulse" style="animation-iteration-count: infinite;" @click="toggleScreenSize"></svg-icon>
      </div>
    </div>
    <div class="content">
      <div class="content__left content-item">
        <!-- 车流统计分析 -->
        <div class="content__left--car-count card">
        </div>
        <!-- 库存 / 进出检测 -->
        <div class="content__left--car-type card">
        </div>
        <!-- 人流分析 -->
        <div class="content__left--people-count card">
        </div>
      </div>
      <div class="content__center content-item">
        <!-- 最中间大屏 -->
        <div class="content__center--main card">
        </div>
        <div class="content__center--hotmap card">
        </div>
      </div>
      <div class="content__right content-item">
        <!-- 服务区店铺运营看板 -->
        <div class="content__right--store card">
        </div>
        <div class="content__right--video card">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { formatDate } from '../utils'

function launchFullscreen (element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}
function exitFullscreen (element) {
  if (document.exitFullScreen) {
    document.exitFullScreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else if (element.msExitFullscreen) {
    element.msExitFullscreen()
  }
}
// function resizeWindow () {
//   // if (window.screen) { // 判断浏览器是否支持window.screen判断浏览器是否支持screen
//   //   var myw = screen.availWidth // 定义一个myw，接受到当前全屏的宽
//   //   var myh = screen.availHeight // 定义一个myw，接受到当前全屏的高
//   //   window.moveTo(0, 0) // 把window放在左上脚
//   //   window.resizeTo(myw, myh) // 把当前窗体的长宽跳转为myw和myh
//   // }
//   window.open(document.location, '', 'fullscreen=yes')
// }

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      timeNow: formatDate(new Date(), 3),
      fullScreen: false
    }
  },
  mounted () {
    setInterval(() => {
      this.timeNow = formatDate(new Date(), 3)
    }, 1000)
  },
  methods: {
    toggleScreenSize () {
      if (this.fullScreen) {
        exitFullscreen(document)
        this.fullScreen = false
      } else {
        launchFullscreen(document.body)
        this.fullScreen = true
      }
    }
  }
}
</script>
<style scoped lang="scss">
.home {
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: #000;
  color: #fff;
}
.title {
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
  &__text {
    padding-left: 184px;
    font-family: HYYaKuHeiJ;
    font-size: 32px;
    color: #FFFFFF;
    letter-spacing: 0.98px;
  }
  &__time {
    margin-left: 15px;
    font-size: 14px;
    color: rgba(255,255,255,0.76);
  }
}
.btn-wrap {
  position: absolute;
  right: 0;
  top: 7px;
  display: flex;
  align-items: center;
  .maximize-svg {
    margin-left: 8px;
    font-size: 30px;
    color: #aaa;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
}
.content {
  display: flex;
  justify-content: space-between;
  &__left {
    width: 27.8%;
    // background-color: #333;
    &--car-count {
      height: 39.3%;
    }
    &--car-type {
      height: 27.4%;
    }
    &--people-count {
      height: 31.0%;
    }
  }
  &__center {
    width: 43%;
    &--main {
      height: 42.5%;
    }
    &--hotmap {
      height: 56.4%;
    }
  }
  &__right {
    width: 27.8%;
    &--store {
      height: 57.9%;
    }
    &--video {
      height: 40.8%;
    }
  }
}
.content-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 64px);
}
.card {
  padding: 10px;
  background: #1C1C1F;
  border: 1px solid rgba(255,255,255,0.30);
  box-shadow: 0 0 10px 0 rgba(255,255,255,0.10);
  border-radius: 4px;
}
</style>
