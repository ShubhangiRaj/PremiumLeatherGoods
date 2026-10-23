import React from 'react';

export default function FilterSidebar({ category, filters, onFilterChange }) {
  return (
    <aside className="w-full md:w-64 bg-white p-6 border border-gray-200 rounded-lg h-fit space-y-6">
      <div className="flex justify-between items-center border-b pb-3">
        <h3 className="font-semibold text-gray-900">Filters ({category})</h3>
      </div>

      {/* Product Price is a common filter which has the maximum value of the maximum of any product across of any category*/}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Max Price: ${filters.maxPrice || 400}
        </label>
        <input
          type="range"
          min="50"
          max="400"
          step="10"
          value={filters.maxPrice || 400}
          onChange={(e) => onFilterChange('maxPrice', Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Category specific filters are rendered conditionally based on the selected category*/}
      {category === 'Shoes' && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Shoe Size</label>
            <select
              value={filters.shoeSize || ''}
              onChange={(e) => onFilterChange('shoeSize', e.target.value)}
              className="w-full border border-gray-300 p-2 rounded text-sm bg-gray-50"
            >
              <option value="">All Sizes</option>
              <option value="9">Size 9</option>
              <option value="10">Size 10</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Material</label>
            <select
              value={filters.material || ''}
              onChange={(e) => onFilterChange('material', e.target.value)}
              className="w-full border border-gray-300 p-2 rounded text-sm bg-gray-50"
            >
              <option value="">All Materials</option>
              <option value="Full-Grain Leather">Full-Grain Leather</option>
              <option value="Suede">Suede</option>
              <option value="Top-Grain Leather">Top-Grain Leather</option>
            </select>
          </div>
        </>
      )}

      {category === 'Bags' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bag Type</label>
          <select
            value={filters.bagType || ''}
            onChange={(e) => onFilterChange('bagType', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded text-sm bg-gray-50"
          >
            <option value="">All Types</option>
            <option value="Briefcase">Briefcase</option>
            <option value="Duffle">Duffle</option>
            <option value="Backpack">Backpack</option>
          </select>
        </div>
      )}

      {category === 'Belts' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Buckle Finish</label>
          <select
            value={filters.buckle || ''}
            onChange={(e) => onFilterChange('buckle', e.target.value)}
            className="w-full border border-gray-300 p-2 rounded text-sm bg-gray-50"
          >
            <option value="">All Buckles</option>
            <option value="Silver">Silver</option>
            <option value="Brass">Brass</option>
            <option value="Matte Black">Matte Black</option>
          </select>
        </div>
      )}
    </aside>
  );
}
