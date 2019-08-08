import React from "react";
import Chart from "react-google-charts";

export default class Piechart3 extends React.Component {
    render() {
        return (
            <Chart
  width={'400px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Age', 'number'],
    ['25-35', 4],
    ['36 - 55', 1],
  ]}
  options={{
    title: 'Agewise Analysis',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
        )
    }
}
