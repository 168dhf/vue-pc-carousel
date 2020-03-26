<template>
  <div class="contenet">
    <header>轮播图</header>
    <div class="curoselimg"  @mouseover="stopautoPlay()"  @mouseleave="autoPlay()">
      <img :src="datalistImg[currentIndex]" alt />
      <!-- 左右切换 -->
      <div class="qiehuan">
        <div class="left" @click="gotoPage(previousPage)"></div>
        <div class="right" @click="gotoPage(nextPage)"></div>
      </div>
      <!-- 点击小圆点切换 -->
      <ul>
        <li
          v-for="(item, index) in datalistImg"
          :key="index"
          @click="gotoPage(index)"
          :class="currentIndex==index?'electedindex':''"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  props: [],
  data() {
    return {
      datalistImg: [
        "https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"
      ],
      currentIndex: 0, //默认显示第一张图片
      carouselTimer: null //定时器
    };
  },
  created() {
    this.autoPlay();
  },
  methods: {
    gotoPage(index) {
      this.currentIndex = index;
    },
    /* 开始定时器轮播 */
    autoPlay() {
      this.carouselTimer = setInterval(() => {
        this.gotoPage(this.nextPage);
      }, 1000);
    },
    /**
     * 停止定时器轮播
     */
    stopautoPlay() {
      clearInterval(this.carouselTimer);
    }
  },
  computed: {
    /* 上一张 */
    previousPage() {
      if (this.currentIndex == 0) {
        return this.datalistImg.length - 1;
      } else {
        return this.currentIndex - 1;
      }
    },
    /* 下一张 */
    nextPage() {
      if (this.currentIndex == this.datalistImg.length - 1) {
        return 0;
      } else {
        return this.currentIndex + 1;
      }
    }
  }
};
</script>

<style  scoped lang="less">
.contenet {
  header {
    text-align: center;
    background: blue;
    color: #fff;
    font-size: 50px;
  }
  .curoselimg {
    position: relative;
    img {
      width: 100%;
      height: 170px;
    }
    .qiehuan {
      .left {
        width: 16px;
        height: 16px;
        border-bottom: 1px solid red;
        border-left: 1px solid red;
        transform: rotate(45deg);
        position: absolute;
        top: 78px;
        left: 20px;
        cursor: pointer;
      }
      .right {
        width: 16px;
        height: 16px;
        border-top: 1px solid red;
        border-right: 1px solid red;
        transform: rotate(45deg);
        position: absolute;
        top: 78px;
        right: 20px;
      }
    }
    ul {
      display: flex;
      top: 124px;
      position: absolute;
      left: 36%;
      li {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: gray;
        margin-right: 10px;
      }
      .electedindex {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: pink;
        margin-right: 10px;
      }
    }
  }
}
</style>