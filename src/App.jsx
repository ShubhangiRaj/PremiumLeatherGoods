import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import CategoryCards from './components/CategoryCards';
import FilterSidebar from './components/FilterSidebar';
import ProductList from './components/ProductList';
import { CATEGORIES, PRODUCTS } from './data/products';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filters, setFilters] = useState({});

  // Reset filters when changing category
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setFilters({});
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setFilters({});
  };

  // Filtered product computation
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return [];

    return PRODUCTS.filter((product) => {
      // Must match active category
      if (product.category !== selectedCategory) return false;

      // Price filter
      if (filters.maxPrice && product.price > filters.maxPrice) return false;

      // Dynamic category attribute filters
      if (filters.shoeSize && product.shoeSize !== filters.shoeSize) return false;
      if (filters.material && product.material !== filters.material) return false;
      if (filters.bagType && product.bagType !== filters.bagType) return false;
      if (filters.buckle && product.buckle !== filters.buckle) return false;

      return true;
    });
  }, [selectedCategory, filters]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans pb-12">
      <Header selectedCategory={selectedCategory} onReset={handleReset} />

      <main className="max-w-6xl mx-auto px-4">
        {!selectedCategory ? (
          <CategoryCards 
            categories={CATEGORIES} 
            onSelectCategory={handleSelectCategory} 
          />
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <FilterSidebar
              category={selectedCategory}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
            <ProductList products={filteredProducts} />
          </div>
        )}
      </main>
    </div>
  );
}