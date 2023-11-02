import React, { useContext } from "react";
import { LineChart, Line, Tooltip } from "recharts";
import Filter from "../services/context/store";

const Chart = () => {
   const [state] = useContext(Filter);
  return (
    <LineChart
      width={756}
      height={300}
      data={state.data}
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
