import React, { useState } from 'react'

const T21_LoginConditional = () => {
 const [user, setUser] = useState({username:'', isLoggedIn:false});


const {username, isLoggedIn} = user;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim()) {
      setUser({...user, isLoggedIn:true});
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        {user.isLoggedIn ? (
          <h2 className="text-2xl font-semibold text-center text-green-600">
            Welcome, {username}!
          </h2>
        ) : (
          <form className='flex flex-col gap-2'>
            <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUser({...user, username:e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />

            <button
                onClick={handleSubmit}
              className="bg-blue-600 text-white py-2 px-3 font-semibold rounded-md"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default T21_LoginConditional