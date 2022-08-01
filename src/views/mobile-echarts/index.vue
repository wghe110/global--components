<template>
  <div class="chart-box">
    <wgh-mobile-echarts :option="opt_line"></wgh-mobile-echarts>
  </div>

  <div class="chart-box">
    <wgh-mobile-echarts :option="opt_bar"></wgh-mobile-echarts>
  </div>
  <div class="chart-box">
    <wgh-mobile-echarts :option="opt_pie"></wgh-mobile-echarts>
  </div>
</template>

<script>
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


    return {
      opt_line,
      opt_bar,
      opt_pie,
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
</style>