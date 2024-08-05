import React from 'react';
import "../AdminPieChart/AdminPieChart.css";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const pieChartData = [
    { name: "Food", value: 700, color: "#0088FE"},
    { name: "Fund", value: 900, color: "#00C49F"},
    { name: "Grocery", value: 500, color: "#FFBB28"},
    { name: "Clothes", value: 600, color: "#FF8042"},
    { name: "Stationery", value: 200, color: "#03346E"},
    { name: "Footwear", value: 300, color: "#1A5319"},
]
const AdminPieChart = () => {
  return (
    <div className='pieChartBox'>
      <h1>Leads by Source</h1>
      <div className="pieChart">
        <ResponsiveContainer width="99%" height={300}>
        <PieChart>
            <Tooltip 
            contentStyle={{background: "white", borderRadius: "5px"}}
            />
        <Pie
          data={pieChartData}
          innerRadius={70}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {pieChartData.map((item, index) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>        
      </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='options'>
        {pieChartData.map(item => (
            <div className="option" key={item.name}>
                <div className="pieChartTitle">
                    <div className="pieChartDot" style={{ backgroundColor: item.color}}>
                        <span>{item.name}</span>
                    </div>
                </div>
                <span>{item.value}</span>
            </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPieChart;
