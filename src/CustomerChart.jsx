import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from "recharts";

const data = [
  { name: "Old Customer", value: 35 },
  { name: "New Customer", value: 65 },
];

const COLORS = ["#0088FE", "#00C49F"];

const CustomerChart = () => {
  const [labelViewBox, setLabelViewBox] = React.useState(null);

  const handleLabelViewBoxChange = (viewBox) => {
    setLabelViewBox(viewBox);
  };

  return (
    <div className="w-1/4 p-8 mx-4 bg-white rounded-md shadow-md">
      <div className="p-4 text-left">
        <h2 className="text-2xl font-bold text-black">Customer</h2>
        <p className="text-gray-500">Customers that buy products</p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart labelLine={true} labelViewBox={labelViewBox}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            onMouseEnter={handleLabelViewBoxChange}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Label content={<CustomLabel />} position="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomLabel = ({ viewBox, value }) => {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={24}
      className="text-black"
    >
      {`${65}% Total New Customer`}
    </text>
  );
};

export default CustomerChart;
