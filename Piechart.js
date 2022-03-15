import React, { Component } from 'react'
//import "./App.css";
import { PieChart, Pie, Tooltip } from "recharts";

const Piechart = () => {
    const data = [
        {name: "Facebook", value: 2000},
        {name: "Instagram", value: 3000},
        {name: "Twiter", value: 4000},
        {name: "Telegram", value: 5000}
    ];

    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label />
                <Tooltip />

            </PieChart>
        </div>
    );
};

export default Piechart;
