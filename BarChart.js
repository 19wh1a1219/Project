import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends Component {
  render() {
    return (
      <div>
          <Bar
            data={{
                labels: ['Red', 'Blue', 'green', 'Red']
            }}
            height={400}
            width={600}
           />
      </div>
    )
  }
}
