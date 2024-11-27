import React from 'react';
import Header from '../component/common/Header';
import StatCard from '../component/common/StatCard'
import { motion } from 'framer-motion';
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react';
import SalesOverViewChart from '../overview/SalesOverViewChart';
import CategoryDistribtionChart from '../overview/CategoryDistribtionChart'
import SalesChannelChart from '../overview/SalesChannelChart'
const OverViewPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="OverView"/>
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
          name="Total Sales"
          icon={Zap}
          value='$12,345'
          color='#6366F1'
          />
          <StatCard
          name="New Users"
          icon={Users}
          value='$1,345'
          color='#855CF6'
          />
          <StatCard
          name="Total Produts"
          icon={ShoppingBag}
          value='575'
          color='#EC4899'
          />
          <StatCard
          name="Conersation Rate"
          icon={BarChart2}
          value='12,5%'
          color='#10B981'
          />

        </motion.dev>
        {/* chart cart */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverViewChart/>
          <CategoryDistribtionChart/>
          <SalesChannelChart/>
        </div>
      </main>
    </div>
    
  );
};

export default OverViewPage;
