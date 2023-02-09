<template>
  <div class="bottom_num">
    <template v-for="(item, index) in dataAnalysis" :key="item.id">
      <div class="data_item">
        <div class="title">{{ item.title }}</div>
        <div class="content_data">
          <span :id="`total_data_${index}`" class="total_data">{{
            item.totalNum
          }}</span
          ><span class="units">万</span>
          <span :class="item.isUp ? 'up_triangle' : 'down_triangle'"></span>
          <span
            :id="`percent_data_${index}`"
            class="percent_data"
            :class="item.isUp ? 'up' : 'down'"
            >{{ item.percentage }}</span
          >
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { nextTick, onMounted, watch } from "@vue/runtime-core";
import { CountUp } from "countup.js";
const props = defineProps({
  dataAnalysis: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
watch(
  () => props.dataAnalysis,
  (newVal, oldVal) => {
    nextTick(() => {
      numAnimate();
    });
  }
);
onMounted(() => {
  numAnimate();
});
function numAnimate() {
  props.dataAnalysis.forEach((item, index) => {
    let totalDemo = new CountUp(`total_data_${index}`, item.totalNum, {
      useEasing: true, // 过渡动画效果，默认ture
      useGrouping: true, // 千分位效果，例：1000->1,000。默认true
      separator: ",", // 使用千分位时分割符号
      decimal: ".", // 小数位分割符号
      decimalPlaces: 1,
    });
    let percentDemo = new CountUp(`percent_data_${index}`, item.percentage, {
      useEasing: true, // 过渡动画效果，默认ture
      decimal: ".", // 小数位分割符号
      suffix: "%", // 后置符号，可汉字
      decimalPlaces: 1,
    });
    totalDemo.start();
    percentDemo.start();
  });
}
</script>

<style scoped>
.bottom_num {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.title {
  font-size: 22px;
  color: #fff;
}
.content_data {
  display: flex;
  align-items: flex-end;
}
.total_data {
  font-size: 32px;
  color: #1c84d7;
}
.units {
  color: #1c84d7;
  font-size: 18px;
  position: relative;
  top: -4px;
  left: 4px;
}
.up_triangle {
  display: inline-block;
  width: 0px;
  height: 0px;
  border: 12px solid;
  border-color: transparent transparent green transparent;
  margin-left: 8px;
  position: relative;
  top: -10px;
}
.down_triangle {
  display: inline-block;
  width: 0px;
  height: 0px;
  border: 12px solid;
  border-color: red transparent transparent transparent;
  margin-left: 8px;
}
.percent_data {
  color: red;
  font-size: 22px;
  margin-left: 5px;
}
.up {
  color: green;
}
.down {
  color: red;
}
</style>
