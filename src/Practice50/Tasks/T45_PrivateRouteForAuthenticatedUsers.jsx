import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

// Mock authentication context
const AuthContext = React.createContext();

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

// Login Component
const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      onLogin();
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Login Required</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            value={credentials.username}
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        Use any username and password to login
      </p>
    </div>
  );
};

// Dashboard Component (Protected)
const Dashboard = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
    <p className="text-gray-700 mb-4">Welcome to your protected dashboard!</p>
    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
      <p className="text-green-800">✅ You are successfully authenticated!</p>
    </div>
  </div>
);

// Public Home Component
const Home = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Home</h2>
    <p className="text-gray-700 mb-4">This is a public page.</p>
    <Link 
      to="/dashboard" 
      className="text-blue-600 hover:text-blue-800"
    >
      Try accessing the dashboard
    </Link>
  </div>
);

const T45_PrivateRouteForAuthenticatedUsers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white shadow-md">
            <nav className="flex justify-between items-center px-6 py-4">
              <div className="space-x-4">
                <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
                <Link to="/dashboard" className="text-blue-600 hover:text-blue-800">Dashboard</Link>
              </div>
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              )}
            </nav>
          </div>

          <div className="container mx-auto max-w-2xl mt-8">
            <div className="bg-white rounded-lg shadow-md">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default T45_PrivateRouteForAuthenticatedUsers; 