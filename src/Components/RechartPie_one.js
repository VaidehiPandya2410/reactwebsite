import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import pieoneData from '../assets/topics_pie1.json';

const data = pieoneData;

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
        {payload.group}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill='#1C4E80'
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill='none'
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill='#333'
      >
        {payload.name}
      </text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill='#999'
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class RechartPie_one extends PureComponent {
  static demoUrl =
    'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <div>
        <div className='w-full h-60 bg-white rounded-lg shadow-lg flex mt-4 transform hover:scale-105 transition ease-in-out duration-500'>
          <p className='text-center text-blue-800 font-openSans font-bold m-auto pl-16 -mr-16'>
            Distribution of Significant Topic Groups.
          </p>
          <ResponsiveContainer width='100%' height='100%' className='relative'>
            <PieChart width={400} height={400}>
              <Pie
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx='50%'
                cy='50%'
                innerRadius={45}
                outerRadius={65}
                fill='#EA6A47'
                dataKey='value'
                paddingAngle={3}
                onMouseEnter={this.onPieEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
