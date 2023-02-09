<template>
  <div class="power_main">
    <div class="bg_header"></div>

    <div class="bg_left-top">
      <pie-charts :pieDatas="pieDatas"></pie-charts>
    </div>
    <div class="bg_left-bottom">
      <line-charts :processDatas="processDatas"></line-charts>
    </div>

    <div class="center-bg"><center-svg></center-svg></div>
    <div class="bg_bottom">
      <bottom-num :dataAnalysis="dataAnalysis"></bottom-num>
    </div>

    <div class="bg_right_top"><right-top-panel :chargingTop4="chargingTop4"></right-top-panel></div>
    <div class="bg_right_center">
      <bar-charts :statisticDatas="statisticDatas"></bar-charts>
    </div>
    <div class="bg_right_bottom">
      <right-bottom-svg :exceptionDatas="exceptionDatas"></right-bottom-svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import screenScale from "@/hooks/screenScale";
import pieCharts from "@/components/pie-charts.vue";
import lineCharts from "@/components/line-charts.vue";
import barCharts from "@/components/bar-charts.vue";
import { getPowerScreenData } from "@/services/index";
import rightBottomSvg from "@/components/right-bottom-svg.vue";
import centerSvg from "@/components/center-svg.vue";
import bottomNum from "@/components/bottom-num.vue";
import rightTopPanel from "@/components/right-top-panel.vue";
// 根据屏幕缩放
screenScale({
  targetWidth: 1920,
  targetHeight: 1080,
  screenRatio: 16 / 9,
});
// 获取数据
let pieDatas = ref([]);
let processDatas = ref([{}, {}]);
let statisticDatas = ref([]);
let exceptionDatas = ref([]);
let dataAnalysis = ref([]);
let chargingTop4 = ref([]);
getPowerScreenData().then((res) => {
  pieDatas.value = res.data.chargingPile.data;
  processDatas.value = res.data.processMonitoring.data;
  statisticDatas.value = res.data.chargingStatistics.data;
  exceptionDatas.value = res.data.exceptionMonitoring.data;
  dataAnalysis.value = res.data.dataAnalysis.data;
  chargingTop4.value = res.data.chargingTop4;
});
</script>

<style scoped>
.power_main {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/images/bg.png);
}
.bg_header {
  position: absolute;
  background-image: url(@/assets/images/bg_header.svg);
  width: 1920px;
  height: 59px;
  top: 22px;
}
.bg_left-top {
  width: 526px;
  height: 438px;
  position: absolute;
  background-image: url(@/assets/images/bg_left-top.svg);
  top: 110px;
  left: 20px;
}
.bg_left-bottom {
  width: 526px;
  height: 431px;
  position: absolute;
  background-image: url(@/assets/images/bg_left_bottom.svg);
  bottom: 50px;
  left: 20px;
}
.center-bg {
  width: 788px;
  height: 652px;
  position: absolute;
  top: 130px;
  left: 575px;
}
.bg_bottom {
  width: 813px;
  height: 198px;
  position: absolute;
  background-image: url(@/assets/images/bg_bottom.svg);
  bottom: 50px;
  left: 565px;
  display: flex;
  align-items: center;
  padding-top: 30px;
}
.bg_right_top {
  width: 509px;
  height: 316px;
  background-image: url(@/assets/images/bg_right_top.svg);
  position: absolute;
  right: 20px;
  top: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg_right_center {
  width: 509px;
  height: 315px;
  background-image: url(@/assets/images/bg_right_center.svg);
  position: absolute;
  right: 20px;
  top: 453px;
}
.bg_right_bottom {
  width: 509px;
  height: 232px;
  background-image: url(@/assets/images/bg_right_bottom.svg);
  position: absolute;
  right: 20px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
