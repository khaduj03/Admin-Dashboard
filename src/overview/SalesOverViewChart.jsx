import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
  } from "recharts";


  import { motion } from "framer-motion";


  const salesData = [
    {name: "Jan", sales: 5000},
    {name: "Feb", sales: 4500},
    {name: "Mar", sales: 5500},
    {name: "Apr", sales: 6000},
    {name: "May", sales: 6500},
    {name: "Jun", sales: 7000},
    {name: "Jul", sales: 4200},
    {name: "Aug", sales: 5000},
    {name: "Sep", sales: 4800},
    {name: "Oct", sales: 6000},
    {name: "Nov", sales: 6200},
    {name: "Dec", sales: 7500}
  ];

  import React from 'react'
  
  const SalesOverViewChart = () => {
    return (
      <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.2}}
      >
        <h2 className="text-lg font-medium mb-4 text-gray-100"
        >Sales Overview</h2>

        <div className="h-80">
            <ResponsiveContainer>
                <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5566"/>
                    <XAxis dataKey={"name"}/>
                    <YAxis stroke={"#9ca3af"}/>
                    <Tooltip
                    contentStyle={{
                        backgroundColor:"ragba(31 ,45 ,55, 0.8)",
                        borderColor:"#4B5563"
                    }}
                    itemStyle={{color:"#E5E7Eb"}}
                    /> 
                    <Line
                    type="monotone"
                    dataKey='sales'
                    stroke="#6366F1"
                    strokeWidth={3}
                    dot={{fill :"#6366F1", strokeWidth:2,r:6}}
                    activeDot={{r:8,strokeWidth:2}}
                    />
            
                </LineChart>
            </ResponsiveContainer>

        </div>
      </motion.div>
    )
  }
  
  export default SalesOverViewChart
  