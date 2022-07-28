<template>
    <div class="chart" ref="chartRef" :style="{ height }" ></div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart, LineChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  LegendScrollComponent,
} from "echarts/components";
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from "echarts/features";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { SVGRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  LegendScrollComponent,
  BarChart,
  PieChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
]);

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
  data() {
    return {
      timer: null,
      myChart: null,
    };
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.chartRef, null, { renderer: "svg" });
    this.initChart();

    window.addEventListener("resize", this.resetFn);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resetFn);
  },
  watch: {
    option: {
      deep: true,
      handler() {
        this.initChart();
      },
    },
  },
  methods: {
    resetFn() {
      clearTimeout(this.timer);
      this.timer = setTimeout(this.resizeChartFn, 500);
    },
    initChart() {
      if (this.myChart) {
        this.myChart.setOption(this.option, true);
      }
    },
    resizeChartFn() {
      if (this.myChart) {
        this.myChart.resize();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .chart-out{
    height: 100%;
    position: relative;
    .empty{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .chart{
      width: 100%;
    }
  }
</style>