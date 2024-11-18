import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OverViewPage from './pages/OverViewPage';
import ProductsPage from './pages/ProductsPage';
import Sidebar from './component/Sidebar';
import './index.css';
import { Users } from 'lucide-react';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
        {/* Background */}
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
          <div className='absolute inset-0 backdrop-blur-sm' />
        </div>

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<OverViewPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
