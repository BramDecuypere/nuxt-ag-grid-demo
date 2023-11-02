<script setup lang="ts">
import * as echarts from "echarts";

const props = defineProps<{
  options: any;
}>();

const chart = ref();

onMounted(() => {
  const myChart = echarts.init(chart.value);

  myChart.setOption(props.options);
});
</script>

<template>
  <div ref="chart" />
</template>
