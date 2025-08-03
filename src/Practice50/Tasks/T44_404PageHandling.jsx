import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Page Components
const Home = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Home Page</h2>
    <p className="text-gray-700">Welcome to our website!</p>
    <Link to="/invalid-page" className="text-blue-600 hover:text-blue-800">
      Try visiting an invalid page
    </Link>
  </div>
);

const About = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">About Page</h2>
    <p className="text-gray-700">This is the about page.</p>
  </div>
);

// 404 Not Found Component
const NotFound = () => (
  <div className="p-6 text-center">
    <div className="mb-6">
      <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
    </div>
    
    <div className="space-y-3">
      <Link 
        to="/" 
        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        Go Home
      </Link>
      
      <div className="text-sm text-gray-500">
        <p>Available pages:</p>
        <div className="mt-2 space-x-4">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <Link to="/about" className="text-blue-600 hover:text-blue-800">About</Link>
        </div>
      </div>
    </div>
  </div>
);

const T44_404PageHandling = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto max-w-2xl mt-8">
          <div className="bg-white rounded-lg shadow-md">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default T44_404PageHandling; 