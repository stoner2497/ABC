import React from "react";
import Chart from "react-google-charts";

export default class Graph extends React.Component {
  render() {
    return (
        <Chart
        width={'500px'}
        height={'300px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
          ['Year', 'Personal', 'Business'],
          ['2014', 50, 30],
          ['2015', 55, 35],
          ['2016', 65, 75],
          ['2017', 85, 22],
        ]}
        options={{
          // Material design options
          chart: {
            title: 'Loan OverView',
          },
        }}
        // For tests
        rootProps={{ 'data-testid': '2' }}
      />
    );
  }
}