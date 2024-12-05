
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const categoryData = [
  { name: "Electronics", value: 4500 },
  { name: "Books", value: 1200 },
  { name: "Clothing", value: 3200 },
  { name: "Furniture", value: 2500 },
  { name: "Groceries", value: 3800 },
];

const COLORS = ["#6366f1", "#8B5CF6 ", "#EC4899", "#10B981", "#F59E0B"];

const CategoryDistribtionChart = () => {
  return (
    <motion.dev
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100 ">
        Category Disribtion
      </h2>
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={categoryData}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({name, precent}) =>
                `${name} ${(precent * 100).toFixed(0)}%`}
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "ragba(31 ,45 ,55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7Eb" }}
            />
            <Legend/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.dev>
  );
};

export default CategoryDistribtionChart;
