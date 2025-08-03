import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// Navigation Component with Active Highlighting
const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 py-4">
          <Link 
            to="/" 
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              isActive('/') 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              isActive('/services') 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              isActive('/about') 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`px-3 py-2 rounded-md font-medium transition-colors ${
              isActive('/contact') 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Page Components
const Home = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Home</h2>
    <p className="text-gray-700">Welcome to our website!</p>
  </div>
);

const Services = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Services</h2>
    <p className="text-gray-700">We offer various services to meet your needs.</p>
  </div>
);

const About = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">About</h2>
    <p className="text-gray-700">Learn more about our company and mission.</p>
  </div>
);

const Contact = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Contact</h2>
    <p className="text-gray-700">Get in touch with us for any inquiries.</p>
  </div>
);

const T43_NavigationBarWithActiveHighlighting = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="container mx-auto max-w-2xl mt-8">
          <div className="bg-white rounded-lg shadow-md">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default T43_NavigationBarWithActiveHighlighting; 