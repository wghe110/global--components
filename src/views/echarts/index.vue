<template>
  <div class="chart-box">
    <wgh-echarts :option="opt_line"></wgh-echarts>
  </div>

  <div class="chart-box">
    <wgh-echarts :option="opt_bar"></wgh-echarts>
  </div>
  <div class="chart-box">
    <wgh-echarts :option="opt_pie"></wgh-echarts>
  </div>
  <div class="chart-box">
    <wgh-echarts :option="opt_radar"></wgh-echarts>
  </div>
  <div class="chart-box pie-3d">
    <wgh-echarts :option="opt_3d"></wgh-echarts>
  </div>
</template>

<script>
import 'echarts-gl';
import get3dOpt from './pie-3d'

export default {
  setup() {
    const opt_line = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    }

    const opt_bar = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }
      ]
    }

    const opt_pie = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    }

    const opt_radar = {
      title: {
        text: 'Basic Radar Chart'
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    }

    const opt_3d = get3dOpt([
      {
        name: '??????1??????',
        value: 33,
        itemStyle: {
          opacity: 1,
          color: '#EAC266'
        }
      },
      {
        name: '??????2??????',
        value: 67,
        itemStyle: {
          opacity: 1,
          color: '#CE231A',
        }
      },
      {
        name: '??????3??????',
        value: 47,
        itemStyle: {
          opacity: 1,
          color: '#F68F46',
        }
      },
      {
        name: '??????4??????',
        value: 267,
        itemStyle: {
          opacity: 1,
          color: '#DF3B4F',
        }
      }
    ], .65, 100, 4)


    return {
      opt_line,
      opt_bar,
      opt_pie,
      opt_radar,
      opt_3d,
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-box {
  display: inline-block;
  vertical-align: top;
  width: 375px;
  height: 375px;
  margin: 10px;
  background-color: #ccc;
}

.pie-3d {
  background-image: url('@/assets/huan-bg.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center 140px;
}
</style>