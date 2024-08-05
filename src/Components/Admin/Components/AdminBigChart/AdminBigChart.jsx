import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import '../AdminBigChart/AdminBigChart.css';

const AdminBigChart = () => {
    const data = [
        {
          name: 'Sun',
          food: 4000,
          fund: 2400,
          clothes: 2400,
          grocery: 3500,
          stationery: 2000,
          footwear: 1500
        },
        {
          name: 'Mon',
          food: 5000,
          fund: 3400,
          clothes: 2900,
          grocery: 2500,
          stationery: 1500,
          footwear: 2000
        },
        {
          name: 'Tue',
          food: 4500,
          fund: 2700,
          clothes: 3900,
          grocery: 2700,
          stationery: 1700,
          footwear: 1200
        },
        {
          name: 'Wed',
          food: 5000,
          fund: 5400,
          clothes: 4500,
          grocery: 3500,
          stationery: 1000,
          footwear: 2000
        },
        {
          name: 'Thu',
          food: 4500,
          fund: 3400,
          clothes: 2900,
          grocery: 3500,
          stationery: 2300,
          footwear: 1500
        },
        {
          name: 'Fri',
          food: 6000,
          fund: 3400,
          clothes: 2400,
          grocery: 5500,
          stationery: 1400,
          footwear: 1700
        },
        {
          name: 'Sat',
          food: 5000,
          fund: 4400,
          clothes: 3400,
          grocery: 2500,
          stationery: 2000,
          footwear: 1500
        },
      ];

  return (
    <div className='bigChartBox'>
        <h1>Donations Analytics</h1>
        <div className="bigChart">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="fund" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="food" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="grocery" stackId="1" stroke="#ffc658" fill="#ffc658" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#FF8042" fill="#FF8042" />
          <Area type="monotone" dataKey="stationery" stackId="1" stroke="#03346E" fill="#03346E" />
          <Area type="monotone" dataKey="footwear" stackId="1" stroke="#1A5319" fill="#1A5319" />
        </AreaChart>
      </ResponsiveContainer>
        </div>           
    </div>
  );
}

export default AdminBigChart;
