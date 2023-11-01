import React from "react";
import { LineChart, Line, Tooltip } from "recharts";
import data from "../../dummyData";

const Chart = () => {
  return (
    <LineChart
      width={756}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <Tooltip />
      <Line type="bump" dataKey="amount" stroke="#FF5403" dot={false} />
    </LineChart>
  );
};

export default Chart;
