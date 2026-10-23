import React from 'react';

export default function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <p>No products match the selected filters.</p>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between">
          <div>
            <h4 className="font-semibold text-gray-900 mt-2">{product.name}</h4>
            
            {/* list of products in the selected category */}
            <ul className="text-xs text-gray-500 mt-3 space-y-1">
              {product.shoeSize && <li>Size: {product.shoeSize}</li>}
              {product.material && <li>Material: {product.material}</li>}
              {product.bagType && <li>Type: {product.bagType}</li>}
              {product.buckle && <li>Buckle: {product.buckle}</li>}
            </ul>
          </div>

            <p className="font-bold text-gray-900">${product.price}</p>
        </div>
      ))}
    </div>
  );
}