import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    assignmentNo: "Assingment 1",
    marks: 60,
    amt: 2400
  },
  {
    assignmentNo: "Assingment 2",
    marks: 59,
    amt: 2210
  },
  {
    assignmentNo: "Assingment 3",
    marks: 60,
    amt: 2290
  },
  {
    assignmentNo: "Assingment 4",
    marks: 59,
    amt: 2000
  },
  {
    assignmentNo: "Assingment 5",
    marks: 60,
    amt: 2181
  },
  {
    assignmentNo: "Assingment 6",
    marks: 60,
    amt: 2500
  },
  {
    assignmentNo: "Assingment 7",
    marks: 60,
    amt: 2100
  },
  {
    assignmentNo: "Assingment 8",
    marks: 60,
    amt: 2100
  }
];

export default function Rechart() {
  return (
    <div>
        <h1 className='text-xl lg:text-4xl font-bold text-center mb-4 pt-5 pb-6 lg:pb-10 header-css'>My Assignment Marks.</h1>
        <div className="flex justify-center items-center">
        <AreaChart className="hidden lg:block mb-8"
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="assignmentNo" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
        <AreaChart className="lg:hidden"
      width={400}
      height={250}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="assignmentNo" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </div>
    </div>
  );
}
