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

// Updated data with "Name" and "Topic"
const topicData = [
    { name: "Jan", topic: 4000 },
    { name: "Feb", topic: 3500 },
    { name: "Mar", topic: 3500 },
    { name: "Apr", topic: 4000 },
    { name: "May", topic: 4500 },
    { name: "Jun", topic: 5000 },
    { name: "Jul", topic: 6200 },
    { name: "Aug", topic: 7000 },
    { name: "Sep", topic: 6000 },
    { name: "Oct", topic: 6000 },
    { name: "Nov", topic: 5200 },
    { name: "Dec", topic: 4500 },
];

const TopicTrendChart = () => {
    return (
        <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">
                Topic Trend
            </h2>

            <div className="h-80">
                <ResponsiveContainer>
                    <LineChart data={topicData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#4B5566" />
                        <XAxis dataKey={"name"} />
                        <YAxis stroke={"#9ca3af"} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31 ,45 ,55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7Eb" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="topic"
                            stroke="#6366F1"
                            strokeWidth={3}
                            dot={{ fill:  "#E5E7Eb", strokeWidth: 2, r: 3 }}
                            activeDot={{ r: 3, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default TopicTrendChart;
