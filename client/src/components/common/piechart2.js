import React from "react";
import Chart from "react-google-charts";

export default class Piechart2 extends React.Component {
    render() {
        return (
            <Chart
  width={'400px'}
  height={'300px'}
  chartType="PieChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Status', 'number'],
    ['Married', 4],
    ['Unmarried', 1],
    ['Divorce', 1]
  ]}
  options={{
    title: 'Marrital Status',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
        )
    }
}
