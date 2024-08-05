import React from 'react';
import {Link} from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import '../AdminChartBox/AdminChartBox.css';

type Props = {
    color: string;
    icon: React.ReactNode;
    title: string;
    dataKey: string;
    number: number | string;
    percentage: number;
    chartData: { [key: string]: any }[];
}

const AdminChartBox = (props: Props) => {
  return (
    <div className='chartBox'>
       <div className="chartBox-boxInfo">
            <div className="chartBox-title">
                <span style={{fontSize: "25px"}}>{props.icon}</span>
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to = "/ViewAllUsers" style={{color:props.color}}>View All</Link>
       </div>
       <div className="chart-Info">
        <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
            <LineChart  data={props.chartData}>
                <Tooltip
                contentStyle={{background: "transparent", border:"none"}}
                labelStyle={{display: "none"}}
                position={{x:10, y:60}}
                />
                <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false}/>
            </LineChart>
        </ResponsiveContainer>
        </div>
        <div className="chart-texts">
            <span className="chart-percentage" style={{color: props.percentage < 0 ? "tomato" : "limegreen"}}>{props.percentage}%</span>
            <span className="chart-duration">this month</span>
        </div>
       </div>
    </div>
  );
}

export default AdminChartBox;
