<template>
  <div class="panel">
    <div class="water-ball">
      <water-ball :percentage="chargingTop4.totalPercentage"></water-ball>
    </div>
    <div class="legend">
      <template
        v-if="chargingTop4"
        v-for="(item, index) in chargingTop4.data"
        :key="item.id"
      >
        <div class="legend_item">
          <span class="color_area" :class="`color_area_${index}`"></span>
          <span class="name">{{ item.name }}</span>
          <span class="percent">{{ item.percentage }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import waterBall from "@/components/water-ball.vue";
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
const props = defineProps({
  chargingTop4: {
    type: Object,
    default: () => {
      return {};
    },
  },
});
</script>

<style scoped>
.panel {
  display: flex;
  margin-top: 30px;
}
.legend {
  width: 105px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 45px;
  margin-top: 10px;
}
.legend_item {
  margin-bottom: 10px;
}
.color_area {
  display: inline-block;
  width: 15px;
  height: 15px;
}
.color_area_0 {
  background-color: #1d8888;
}
.color_area_1 {
  background-color: #194a9b;
}
.color_area_2 {
  background-color: #7ac3ee;
}
.color_area_3 {
  background-color: #f3ad41;
}
.color_area_4 {
  background-color: #eb6e29;
}
.legend .name {
  color: #fff;
  font-size: 18px;
  margin-left: 8px;
}
.legend .percent {
  color: #0daccb;
  margin-left: 8px;
  font-size: 18px;
}
</style>
