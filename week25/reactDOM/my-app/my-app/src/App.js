import './App.css';

import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Study", 10],
  ["Eat", 2],
  ["Commute to Uni", 4],
  ["Sleep", 6],
  ["Doing nothing", 4],
];

export const options = {
  title: "My Everyday Activities",
  is3D: true,
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"600px"}
    />
  );
}

export default App;
