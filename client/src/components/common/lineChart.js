import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
// Ref : https://developers.google.com/chart/interactive/docs/gallery/histogram

const data = [
  ["Year", "Approved", "Rejected"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540]
];
const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" }
};
class LineChart extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="LineChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

export default LineChart