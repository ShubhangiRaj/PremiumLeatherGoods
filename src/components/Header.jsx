import React from 'react';

export default function Header({ selectedCategory, onReset }) {
  return (
    <header className="bg-white border-b border-gray-200 py-6 px-8 mb-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div>
          <h1 
            onClick={onReset}
            className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-gray-700"
          >
            Shop Premium Leather Goods
          </h1>
          {selectedCategory && (
            <p className="text-sm text-gray-500 mt-1">
              Category: <span className="font-semibold text-gray-800">{selectedCategory}</span>
            </p>
          )}
        </div>

        {selectedCategory && (
          <button
            onClick={onReset}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition"
          >
            Back to Categories
          </button>
        )}
      </div>
    </header>
  );
}