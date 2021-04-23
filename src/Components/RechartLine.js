import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import linechartData from '../assets/data_polarity_monthly.json';

const data = linechartData;

export default class RechartLine extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      null
      // <div className='w-5/12 h-11/12 bg-white rounded-lg shadow-lg p-2 transform hover:scale-105 transition ease-in-out duration-500'>
      //   <ResponsiveContainer width='100%' height='80%'>
      //     <LineChart
      //       width={500}
      //       height={300}
      //       data={data}
      //       margin={{
      //         top: 5,
      //         right: 30,
      //         left: 20,
      //         bottom: 5,
      //       }}
      //     >
      //       <CartesianGrid strokeDasharray='3 3' />
      //       <XAxis dataKey='Value' />
      //       <YAxis />
      //       <Tooltip />
      //       <Legend />
      //       <Line
      //         type='monotone'
      //         dataKey='Polarity'
      //         stroke='#1C4E80'
      //         activeDot={{ r: 8 }}
      //       />
      //       <Line type='monotone' dataKey='Subjectivity' stroke='#EA6A47' />
      //       <Line type='monotone' dataKey='Month' stroke='#e80c9b' />
      //     </LineChart>
      //   </ResponsiveContainer>
      //   <p className='text-center text-blue-800 font-openSans text-lg font-bold mt-4'>
      //     Mean Polarity and Subjectivity across various months
      //   </p>
      // </div>
    );
  }
}
