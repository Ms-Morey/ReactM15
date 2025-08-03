import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Page Components
const Home = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Home Page</h2>
    <p className="text-gray-700">Welcome to our React Router demo!</p>
  </div>
);

const About = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">About Page</h2>
    <p className="text-gray-700">This is the about page of our application.</p>
  </div>
);

const Contact = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Contact Page</h2>
    <p className="text-gray-700">Get in touch with us at contact@example.com</p>
  </div>
);

const T41_BasicRoutingSetup = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-md">
          <nav className="flex justify-center space-x-8 p-4">
            <Link 
              to="/" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="container mx-auto max-w-2xl mt-8">
          <div className="bg-white rounded-lg shadow-md">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default T41_BasicRoutingSetup; 