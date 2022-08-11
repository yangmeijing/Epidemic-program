<template lang="">
  <div :style="{background: `url(${bg})`}" class="box">
    <div class="box-left"></div>
    <div id="china" class="box-center"></div>
    <div class="box-right"></div>
  </div>
</template>
<script setup lang="ts">
import bg from './assets/1.jpg'
import { useStore } from "./stores";
import { onMounted } from 'vue';
import * as echarts from 'echarts'; //5版本要把所有api搞成对象这么引
import './assets/china.js';

const store = useStore()
store.getList()



onMounted(()=>{
  const charts = echarts.init(document.querySelector('#china') as HTMLElement)
  var data = [{
    name:"内蒙古",
    itemStyle:{
      areaColor:"#56b1da"
    },
    value:[110.3467,41.4899]
  }]
  charts.setOption({
    geo: {
      map: "china",
      aspectScale: 0.8,
      layoutCenter: ["50%", "50%"],
      layoutSize: "100%",
      itemStyle: {
        //  normal: {
        areaColor: {
          type: "linear-gradient",
          x: 0,
          y: 1200,
          x2: 1000,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "#152E6E", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#0673AD", // 50% 处的颜色
            },
          ],
          global: true, // 缺省为 false
        },
        shadowColor: "#0f5d9d",
        shadowOffsetX: 0,
        shadowOffsetY: 15,
        opacity: 0.5,
        // },
      },
      emphasis: {
        areaColor: "#0f5d9d",
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",
            borderColor: "rgba(0, 10, 52, 1)",
            //normal: {
            opacity: 0,
            label: {
              show: false,
              color: "#009cc9",
            },
            //},
          },
          label: {
            show: false,
            color: "#FFFFFF",
            fontSize: 12,
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        map: "china",
        aspectScale: 0.8,
        layoutCenter: ["50%", "50%"], //地图位置
        layoutSize: "100%",
        label: {
          show: true,
          color: "#FFFFFF",
          fontSize: 12,
        },
        itemStyle: {
          areaColor: "#0c3653",
          borderColor: "#1cccff",
          borderWidth: 1.8,
        },
        emphasis: {
          areaColor: "#56b1da",
          label: {
            show: true,
            color: "#fff",
          },
        },
        data: data,
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: [45, 45],
        label: {
          show: true,
          color: "#fff",
          formatter(value: any) {
            return value.data.value[2]
          }
        },
        itemStyle: {
          color: '#1E90FF', //标志颜色
        },
        data: data,
      },
    ],
  })
})

</script>
<style lang="less">
  *{
    padding: 0;
    margin: 0;
  }
  html,
  body,
  #app{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .box{
    height: 100%;
    display: flex;
    overflow: hidden;
    &-left{
      width: 300px;
    }
    &-center{
      flex: 1;
    }
    &-right{
      width: 300px;
    }
  }
</style>