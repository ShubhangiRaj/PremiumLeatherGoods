import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryCards from './components/CategoryCards';
import { CATEGORIES, PRODUCTS } from './data/products';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Reset filters when changing category
  const handleSelectCategory = () => {
  };


  // Filtered products

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-12">
      <Header selectedCategory={selectedCategory}/>
    </div>
  );
}