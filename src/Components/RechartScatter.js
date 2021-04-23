import React, { PureComponent } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

export default class RechartScatter extends PureComponent {

  render() {
    return (
      <div className='w-full h-64 bg-white rounded-lg shadow-lg transform hover:scale-105 transition ease-in-out duration-500'>
        <ResponsiveContainer width='100%' height='100%'>
          <ScatterChart
            width={400}
            height={400}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type='number' dataKey='x' name='stature' unit='cm' />
            <YAxis type='number' dataKey='y' name='weight' unit='kg' />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name='A school' data={data} fill='#1C4E80' />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
