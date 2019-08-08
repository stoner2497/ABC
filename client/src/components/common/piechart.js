import React from "react";
import Chart from "react-google-charts";

export default class Piechart extends React.Component {
    render() {
        return (
            <Chart
  width={'400px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Category', 'number'],
    ['Male', 4],
    ['Female', 2],
  ]}
  options={{
    title: 'Gender Analysis',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
        )
    }
}
