import React, { useState } from 'react';

const T29_ProductCatalogList = () => {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 70000 },
    { id: 2, name: 'Mouse', price: 1250 },
    { id: 3, name: 'Keyboard', price: 1550 },
    { id: 4, name: 'Monitor', price: 3000 },
    { id: 5, name: 'Headphones', price: 2000 }
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Products</h1>
        
        <div className="space-y-3">
          {products.map(product => (
            <div key={product.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md border">
              <span className="font-medium text-gray-800">{product.name}</span>
              <span className="text-green-600 font-semibold">₹{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default T29_ProductCatalogList; 