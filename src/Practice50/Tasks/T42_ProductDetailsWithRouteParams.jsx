import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

// Mock product data
const products = [
  { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop for work and gaming.' },
  { id: 2, name: 'Smartphone', price: 599, description: 'Latest smartphone with advanced features.' },
  { id: 3, name: 'Headphones', price: 199, description: 'Wireless noise-canceling headphones.' },
  { id: 4, name: 'Tablet', price: 399, description: 'Portable tablet for entertainment and productivity.' }
];

// Product List Component
const ProductList = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Product List</h2>
    <div className="space-y-3">
      {products.map(product => (
        <div key={product.id} className="p-4 border border-gray-200 rounded-md">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <Link 
            to={`/product/${product.id}`}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  </div>
);

// Product Detail Component
const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-700">The product you're looking for doesn't exist.</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <div className="space-y-3">
        <p className="text-2xl font-bold text-green-600">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-sm text-gray-500">Product ID: {product.id}</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Products
        </Link>
      </div>
    </div>
  );
};

const T42_ProductDetailsWithRouteParams = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-2xl mt-8">
          <div className="bg-white rounded-lg shadow-md">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default T42_ProductDetailsWithRouteParams; 