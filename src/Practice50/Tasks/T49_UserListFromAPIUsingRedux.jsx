import React, { useState, useEffect } from 'react';

// Simple Redux-like implementation
const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];

  const getState = () => state;
  
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };
  
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  return { getState, dispatch, subscribe };
};

// User Reducer
const userReducer = (state = { users: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case 'FETCH_USERS_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_USERS_SUCCESS':
      return { ...state, users: action.payload, loading: false, error: null };
    case 'FETCH_USERS_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(userReducer, { users: [], loading: false, error: null });

// Custom hook to use Redux-like store
const useReduxStore = () => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate({});
    });
    return unsubscribe;
  }, []);

  return {
    state: store.getState(),
    dispatch: store.dispatch
  };
};

// User List Component
const UserList = () => {
  const { state, dispatch } = useReduxStore();

  const fetchUsers = async () => {
    dispatch({ type: 'FETCH_USERS_START' });
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
    } catch (error) {
      dispatch({ type: 'FETCH_USERS_ERROR', payload: error.message });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (state.loading) {
    return (
      <div className="text-center py-8">
        <p className="text-blue-600 font-medium">Loading users...</p>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 font-medium">Error: {state.error}</p>
        <button
          onClick={fetchUsers}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Users ({state.users.length})</h2>
        <button
          onClick={fetchUsers}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Refresh
        </button>
      </div>
      
      <div className="space-y-3">
        {state.users.map(user => (
          <div key={user.id} className="p-4 border border-gray-200 rounded-md bg-gray-50">
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p className="text-gray-600 text-sm">Email: {user.email}</p>
            <p className="text-gray-600 text-sm">Phone: {user.phone}</p>
            <p className="text-gray-600 text-sm">Company: {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const T49_UserListFromAPIUsingRedux = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">User List with Redux</h1>
        
        <UserList />
        
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">Redux State:</h3>
          <pre className="text-xs text-gray-600 overflow-auto">
            {JSON.stringify(store.getState(), null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default T49_UserListFromAPIUsingRedux; 