<template>
  <div class="chartBox" ref="chartRef" :style="{ height }"></div>
</template>

<script>
import { ref, onMounted, watch, onBeforeUnmount } from "vue";
import * as echarts from "echarts";

export default {
  props: {
    option: {
      type: Object,
      default() {
        return {};
      },
    },
    height: {
      type: String,
      default: "100%",
    },
  },
  setup(props) {
    const chartRef = ref();

    let myChart = null;
    const initChart = () => {
      if (myChart) {
        myChart.setOption(props.option);
      }
    };

    // 监听option变化，重新渲染echarts
    watch(
      () => props.option,
      () => {
        console.log("echart init");
        initChart();
      },
      {
        deep: true,
      }
    );

    // 监听页面改变
    let timer = null;
    const resetFn = () => {
      clearTimeout(timer);
      timer = setTimeout(initChart, 500);
    };

    onMounted(() => {
      myChart = echarts.init(chartRef.value);
      initChart();

      window.addEventListener("resize", resetFn);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", resetFn);
    });

    return {
      chartRef,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>