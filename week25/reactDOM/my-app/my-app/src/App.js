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
  pieSliceText: "none",
  is3D: true,
  slices: {
    0: { color: "red" },
    1: { color: "orange" },
    2: { color: "yellow" },
    3: { color: "lightgreen" },
    4: { color: "violet" },
  },
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
