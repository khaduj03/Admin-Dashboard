
import { motion } from 'framer-motion'
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Bar,
  Cell
} from "recharts";


const COLORS = ["#6366f1", "#8B5CF6 ", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
  { name: "Toys", value: 5000 },
  { name: "Stationery", value: 1500 },
  { name: "Footwear", value: 2800 },
  { name: "Appliances", value: 2200 },
  { name: "Snacks", value: 3900 },
];

const SalesChannelChart = () => {
  return (
    <motion.dev
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border lg:col-span-2 border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <h2 className='text-lg font-medium text-gray-100'>Sales by channel</h2>
    <div className="h-80">
      <ResponsiveContainer>
          <BarChart
          data={SALES_CHANNEL_DATA}
          >
            <CartesianGrid strokeDasharray='3 3' stroke='#4B5563'/>
            <XAxis dataKey="name"  stroke='#9CA3AF'/>
            <YAxis  stroke='#9CA3AF' />
            <Tooltip
              contentStyle={{
                backgroundColor: "ragba(31 ,45 ,55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7Eb" }}
            />
            <Legend/>
            <Bar
            dataKey={"value"} fill='#8884d8'
            >
              {SALES_CHANNEL_DATA.map((entry,index)=>(
                <Cell key={`cell-${index}`} fill={COLORS[index %COLORS.length]}/>
              ))}
            </Bar>
          </BarChart>
          
      </ResponsiveContainer>
    </div>
  </motion.dev>
  )
}

export default SalesChannelChart
