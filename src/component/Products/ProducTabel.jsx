import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 12000
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 99.99,
    stock: 200,
    sales: 8000
  },
  {
    id: 3,
    name: "Smartphone",
    category: "Mobile",
    price: 499.99,
    stock: 50,
    sales: 5000
  },
  {
    id: 4,
    name: "Laptop",
    category: "Computers",
    price: 899.99,
    stock: 80,
    sales: 3000
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Wearables",
    price: 199.99,
    stock: 120,
    sales: 7500
  }
];


const ProducTabel = () => {
  return (
    <motion.div
    className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input type="text"
          className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search products..." />
          <Search className="absolute left-3 top-2.5 text-gray-400 " size={18}/>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="main-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Stoke</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Sales</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
        </table>
      </div>

    </motion.div>
  )
}

export default ProducTabel
