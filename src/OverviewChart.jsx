import React, { useState } from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", earnings: 50 },
  { name: "Feb", earnings: 75 },
  { name: "Mar", earnings: 60 },
  { name: "Apr", earnings: 70 },
  { name: "May", earnings: 90 },
  { name: "Jun", earnings: 80 },
  { name: "Jul", earnings: 120 },
  { name: "Aug", earnings: 150 },
  { name: "Sep", earnings: 80 },
  { name: "Oct", earnings: 60 },
  { name: "Nov", earnings: 70 },
  { name: "Dec", earnings: 85 },
];

const OverviewGraph = () => {
  const [hoveredBar, setHoveredBar] = useState(null);

  return (
    <div className="items-center justify-center w-3/4 p-8 mx-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold text-black">Overview</h2>
          <p className="text-gray-500">Monthly Earning</p>
        </div>
        <div>
          <select className="p-2 bg-gray-200 rounded">
            <option value="monthly">Monthly</option>
            <option value="quarterly" selected>
              Quarterly
            </option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <Bar dataKey="earnings" shape={<RoundBar />} fill="#A79BE4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const RoundBar = (props) => {
  const { x, y, width, height } = props;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={10}
      ry={10}
      fill="#A79BE4"
    />
  );
};

export default OverviewGraph;
