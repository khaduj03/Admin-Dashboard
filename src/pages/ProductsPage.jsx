import { motion } from 'framer-motion';
import Header from '../component/common/Header';
import StatCard from '../component/common/StatCard';
import { AlertTriangle, DollarSign,  Package2, TrendingUp, Users } from 'lucide-react';
import ProducTabel from '../component/Products/ProducTabel';
import CategoryDistribtionChart from '../overview/CategoryDistribtionChart';
import SalesTrenChat from '../component/Products/SalesTrenChat';

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Products Page"/>
      <main
      className='max-w-7xl mx-auto py-6 px-4 lg:px-8  '
      >
      <motion.dev
        className='grid grid-cols-1 gap-5 sm:gird-cols-2 lg:grid-cols-4 mb-8 '
        initial={{opacity:0, y:20 }}
        animate={{opacity:1 ,y:0}}
        transition={{duration:1}}
        >
          <StatCard
          name="Total Products"
          icon={Package2}
          value={1234}
          color='#6366F1'
          />
          <StatCard
          name="Top selling"
          icon={TrendingUp}
          value={89}
          color='#10b981'
          />
          <StatCard
          name="Low Stock"
          icon={AlertTriangle}
          value={23}
          color='#f59e0b'
          />
          <StatCard
          name="Total Revene"
          icon={DollarSign}
          value={"$543,210"}
          color='#Ef4444'
          />

        </motion.dev>

        <ProducTabel/>

        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesTrenChat/>
          <CategoryDistribtionChart/>
        </div>
        </main>
    </div>
  );
};


export default ProductsPage;
