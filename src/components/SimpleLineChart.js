import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", value: 30 , sale:20},
  { name: "Feb", value: 45 , sale:10},
  { name: "Mar", value: 28 , sale:40},
  { name: "Apr", value: 60 , sale:50},
  { name: "May", value: 40 , sale:30},
  { name: "Jun", value: 70 , sale:100}
];

const SimpleLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="sale" stroke="green" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
