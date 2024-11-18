import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OverViewPage from './pages/OverViewPage';
import ProductsPage from './pages/ProductsPage';
import Sidebar from './component/Sidebar';
import './index.css'; // Tailwind CSS import

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      
      <Sidebar /> {/* Sidebar Component */}
      
      <Router>
        <Routes>
          <Route path="/" element={<OverViewPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
