import React from 'react';
import "../AdminBarChart/AdminBarChart.css";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from 'recharts';

type Props = {
    title: String;
    color: String;
    dataKey: String;
    chartData: object[];
};

const AdminBarChart = (props: Props) => {
  return (
    <div className='barChartBox'>
        <h1>{props.title}</h1>
        <div className='barChart'>
        <ResponsiveContainer width="99%" height={150}>
            <BarChart width={150} height={40} data={props.chartData}>
                <Tooltip
                    contentStyle={{backgroundColor: "#2a3447", borderRadius: "5px"}}
                    labelStyle={{ display: "none" }}
                    cursor = {{fill:"none"}}
                />
                <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
        </ResponsiveContainer>
        </div>
    </div>
  );
}

export default AdminBarChart;
