import React, { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const updateSize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

const T37_WindowSizeTracker = () => {
  const { width, height } = useWindowSize();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center space-y-2">
        <h2 className="text-xl font-bold">Window Size Tacker</h2>
        <p className="text-gray-700">Width: <span className="font-medium">{width}px</span></p>
        <p className="text-gray-700">Height: <span className="font-medium">{height}px</span></p>
      </div>
    </div>
  );
};

export default T37_WindowSizeTracker;
