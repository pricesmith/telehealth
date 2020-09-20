
import React, { Component } from 'react'
import Chart from "chart.js";

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class LineGraph extends Component {
  myLineChart
  chartRef = React.createRef();
  chartId = "myChart-" + Math.random()

  componentDidMount() {
      this.buildChart();
  }

  componentDidUpdate() {
      this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { data, labels, options } = this.props;

    if (typeof this.myLineChart !== "undefined") this.myLineChart.destroy();

    this.myLineChart = new Chart(myChartRef, {
        type: "line",
        data: {
            labels: labels,
            datasets: Object.values(data)
        },
        options: options
    });
  }

  render() {
      const { className } = this.props;

      return (
          <div className={className}>
              <canvas
                  id={this.chartId}
                  ref={this.chartRef}
              />
          </div>
      )
  }
}
