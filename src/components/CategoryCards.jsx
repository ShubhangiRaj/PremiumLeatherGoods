import React from 'react';

export default function CategoryCards({ categories, onSelectCategory }) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
        Select a Category to Explore
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => onSelectCategory(category)}
            className="border-2 border-gray-200 rounded-lg p-8 text-center cursor-pointer bg-white"
          >
            <h3 className="text-xl font-medium text-gray-900">{category}</h3>
            <p className="text-sm text-gray-500 mt-2">View collection & filters</p>
          </div>
        ))}
      </div>
    </div>
  );
}