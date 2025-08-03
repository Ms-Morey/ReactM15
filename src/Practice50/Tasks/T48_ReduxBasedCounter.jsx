import React, { useState } from 'react';

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

// Counter Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    case 'SET_VALUE':
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(counterReducer, { count: 0 });

// Custom hook to use Redux-like store
const useReduxStore = () => {
  const [, forceUpdate] = useState({});

  React.useEffect(() => {
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

const T48_ReduxBasedCounter = () => {
  const { state, dispatch } = useReduxStore();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const setValue = (value) => {
    dispatch({ type: 'SET_VALUE', payload: parseInt(value) || 0 });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Redux Counter</h1>
        
        <div className="text-center mb-6">
          <div className="text-6xl font-bold text-blue-600 mb-4">
            {state.count}
          </div>
          
          <div className="text-sm text-gray-600 mb-4">
            Current State: {JSON.stringify(state)}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={decrement}
              className="flex-1 bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 transition-colors"
            >
              Decrement
            </button>
            <button
              onClick={increment}
              className="flex-1 bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Increment
            </button>
          </div>
          
          <button
            onClick={reset}
            className="w-full bg-gray-500 text-white py-3 px-4 rounded-md hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Set value"
              onChange={(e) => setValue(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setValue(100)}
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
            >
              Set to 100
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="font-semibold text-gray-800 mb-2">Redux Actions:</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>• INCREMENT: Adds 1 to count</p>
            <p>• DECREMENT: Subtracts 1 from count</p>
            <p>• RESET: Sets count to 0</p>
            <p>• SET_VALUE: Sets count to specified value</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T48_ReduxBasedCounter; 