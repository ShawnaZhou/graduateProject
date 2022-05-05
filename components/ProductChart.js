/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ECharts } from "react-native-echarts-wrapper";

export default class ProductChart extends Component {
  option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["平均", "当前"],
      top: 0,
    },
    grid: {
      left: "0%",
      right: "2%",
      bottom: "1%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        magicType: { type: ["line", "bar"] },
      },
      top: 20,
      right: 0,
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "平均",
        type: "line",
        smooth: true,
        stack: "1",
        data: [
          9300.46, 13020.76, 10109.54, 13024.79, 9310.42, 5256.74, 5210.98,
        ],
      },
      {
        name: "当前",
        type: "line",
        smooth: true,
        stack: "2",
        data: [9020.7, 14812.7, 18918.7, 23304.76, 23190, 4590, 5510],
      },
    ],
  };

  onRef = (ref) => {
    if (ref) {
      this.chart = ref;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.chartContainer}>
        <ECharts
          ref={this.onRef}
          option={this.option}
          onLoadEnd={() => {
            this.chart.setBackgroundColor("#fff");
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  chartContainer: {
    width: "100%",
    backgroundColor: "#F5FCFF",
    height: 200,
  },
});

