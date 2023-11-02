<script lang="ts" setup>
import type { EChartsOption, GaugeSeriesOption } from "echarts";

const moduleGaugeOptions = computed(() => {
  const COMMON_CHART_OPTIONS: GaugeSeriesOption = {
    type: "gauge",
    center: ["50%", "72%"],
    startAngle: 180,
    endAngle: 0,
    min: 0,
    max: 100,
    splitNumber: 4,
    itemStyle: {
      color: "#FD7347",
    },
    progress: {
      show: true,
      width: 10,
    },
    pointer: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    detail: {
      valueAnimation: true,
      width: "60%",
      lineHeight: 40,
      borderRadius: 8,
      fontSize: 17,
      fontWeight: "bolder",
      formatter: "{value}",
      color: "inherit",
    },
  };

  const OFFSET_CENTER_BASE_SCORE = -60;
  const OFFSET_CENTER_BASE_BENCHMARK = 0;
  const DEFAULT_OFFSET_VALUE = 25;

  const isBenchmarkDataAvailable = true;

  const options: EChartsOption = {
    toolbox: {
      show: true,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        ...COMMON_CHART_OPTIONS,
        progress: {
          show: true,
          width: 10,
        },
        axisLine: {
          lineStyle: {
            width: 30,
          },
        },
        axisTick: {
          distance: -45,
          splitNumber: 10,
          lineStyle: {
            width: 0.5,
            color: "#999",
          },
        },
        splitLine: {
          distance: -52,
          length: 14,
          lineStyle: {
            width: 1,
            color: "#999",
          },
        },
        axisLabel: {
          distance: -10,
          color: "#999",
          fontSize: 15,
        },
        anchor: {
          show: false,
        },
        title: {
          show: true,
        },
        detail: {
          ...COMMON_CHART_OPTIONS.detail,
          offsetCenter: [0, OFFSET_CENTER_BASE_BENCHMARK],
        },
        data: isBenchmarkDataAvailable
          ? [
              {
                value: 50,
                name: "Benchmark",
                title: {
                  fontSize: 20,
                  offsetCenter: [
                    0,
                    OFFSET_CENTER_BASE_BENCHMARK - DEFAULT_OFFSET_VALUE,
                  ],
                  color: "#FD7347",
                  borderRadius: 20,
                  borderWidth: 1,
                },
              },
            ]
          : [],
      },
      {
        ...COMMON_CHART_OPTIONS,

        itemStyle: {
          color: "#7B68EE",
        },
        progress: {
          show: true,
          width: 30,
        },
        detail: {
          ...COMMON_CHART_OPTIONS.detail,
          offsetCenter: [0, OFFSET_CENTER_BASE_SCORE],
        },
        data: [
          {
            value: 60,
            name: "Score",
            title: {
              fontSize: 20,
              offsetCenter: [
                0,
                OFFSET_CENTER_BASE_SCORE - DEFAULT_OFFSET_VALUE,
              ],
              color: "#7B68EE",
              borderRadius: 20,
              borderWidth: 1,
            },
          },
        ],
      },
    ],
  };

  return options;
});
</script>

<template>
  <main>
    <h1>Test</h1>
    <EChart :options="moduleGaugeOptions" style="width: 500px; height: 500px" />
  </main>
</template>
