import React, { useState } from 'react';

const T33_EmailValidation = () => {
  const [email, setEmail] = useState('');

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold text-center">Email Validator</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            email === ''
              ? 'border-gray-300 focus:ring-blue-500'
              : isValidEmail(email)
              ? 'border-green-300 focus:ring-green-500'
              : 'border-red-300 focus:ring-red-500'
          }`}
        /> {email && (
          <p
            className={`text-sm font-medium ${
              isValidEmail(email) ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {isValidEmail(email) ? '✓ Valid email' : '✗ Invalid email'}
          </p>
        )}
      </div>
    </div>
  );
};

export default T33_EmailValidation;
